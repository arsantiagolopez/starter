#!/bin/bash

# Security Review Script for PRs
# Run this before merging any PR to main branch
# This script prompts you to run /security-review in Claude Code

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}                        SECURITY REVIEW CHECKLIST                           ${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)

# Check if we're on a PR branch
if [ "$CURRENT_BRANCH" == "main" ]; then
    echo -e "${RED}⚠️  Warning: You're on the main branch. Switch to PR branch first.${NC}"
    exit 1
fi

# Get PR number if available
PR_NUMBER=""
if command -v gh &> /dev/null; then
    PR_NUMBER=$(gh pr view --json number -q .number 2>/dev/null || echo "")
fi

if [ -n "$PR_NUMBER" ]; then
    echo -e "${GREEN}📋 Reviewing PR #${PR_NUMBER} on branch: ${CURRENT_BRANCH}${NC}"
else
    echo -e "${YELLOW}📋 Reviewing branch: ${CURRENT_BRANCH}${NC}"
    echo -e "${YELLOW}   (No PR found - create one with: gh pr create)${NC}"
fi

echo ""
echo -e "${BLUE}Before merging, complete these security checks:${NC}"
echo ""

# Automated checks
echo -e "${YELLOW}🔍 Running automated checks...${NC}"
echo ""

# 1. Check for secrets/sensitive data
echo -n "  ✓ Checking for exposed secrets... "
if git diff main..HEAD | grep -iE "(api[_-]?key|secret|password|token|private[_-]?key|aws[_-]?access|database[_-]?url)" > /dev/null 2>&1; then
    echo -e "${RED}FOUND POTENTIAL SECRETS${NC}"
    echo -e "${RED}    ⚠️  Review the following lines carefully:${NC}"
    git diff main..HEAD | grep -n -iE "(api[_-]?key|secret|password|token|private[_-]?key|aws[_-]?access|database[_-]?url)" | head -10
    echo ""
else
    echo -e "${GREEN}OK${NC}"
fi

# 2. Check for hardcoded credentials
echo -n "  ✓ Checking for hardcoded credentials... "
if git diff main..HEAD | grep -E "(localhost:[0-9]+|127\.0\.0\.1|hardcoded|FIXME|TODO.*security)" > /dev/null 2>&1; then
    echo -e "${YELLOW}NEEDS REVIEW${NC}"
else
    echo -e "${GREEN}OK${NC}"
fi

# 3. Check for new dependencies
echo -n "  ✓ Checking for new dependencies... "
if git diff main..HEAD --name-only | grep -E "(package\.json|requirements\.txt|Gemfile|go\.mod|Cargo\.toml)" > /dev/null 2>&1; then
    echo -e "${YELLOW}FOUND${NC}"
    echo "    📦 Review new dependencies for known vulnerabilities"
else
    echo -e "${GREEN}OK${NC}"
fi

# 4. Check for environment variable changes
echo -n "  ✓ Checking for environment variable changes... "
if git diff main..HEAD --name-only | grep -E "(\.env|\.env\.example|\.env\.local)" > /dev/null 2>&1; then
    echo -e "${YELLOW}FOUND${NC}"
    echo "    🔐 Ensure no actual values are committed"
else
    echo -e "${GREEN}OK${NC}"
fi

# 5. File permission changes
echo -n "  ✓ Checking for file permission changes... "
if git diff main..HEAD --summary | grep -E "mode change" > /dev/null 2>&1; then
    echo -e "${YELLOW}FOUND${NC}"
    git diff main..HEAD --summary | grep -E "mode change"
else
    echo -e "${GREEN}OK${NC}"
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}                     CLAUDE CODE SECURITY REVIEW                           ${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${YELLOW}📝 Manual Claude Code Review Required:${NC}"
echo ""
echo "  1. Open Claude Code in this repository"
echo "  2. Run the following command:"
echo ""
echo -e "     ${GREEN}/security-review${NC}"
echo ""
echo "  3. Review Claude's security findings"
echo "  4. Address any critical issues before merging"
echo ""

# Ask for confirmation
echo -e "${YELLOW}Have you completed the Claude Code security review? (y/n)${NC}"
read -r response

if [[ "$response" != "y" && "$response" != "Y" ]]; then
    echo -e "${RED}❌ Security review not completed. Please run /security-review in Claude Code.${NC}"
    exit 1
fi

# Final checklist
echo ""
echo -e "${BLUE}Final Security Checklist:${NC}"
echo ""
echo "  [ ] No secrets or API keys exposed"
echo "  [ ] No hardcoded credentials"
echo "  [ ] Dependencies reviewed for vulnerabilities"
echo "  [ ] Environment variables properly handled"
echo "  [ ] File permissions are appropriate"
echo "  [ ] Claude Code security review completed"
echo "  [ ] All security concerns addressed"
echo ""

echo -e "${YELLOW}Confirm all security checks passed? (y/n)${NC}"
read -r final_response

if [[ "$final_response" == "y" || "$final_response" == "Y" ]]; then
    echo -e "${GREEN}✅ Security review completed successfully!${NC}"
    echo ""
    
    if [ -n "$PR_NUMBER" ]; then
        echo -e "${BLUE}You can now merge PR #${PR_NUMBER} with:${NC}"
        echo "  gh pr merge $PR_NUMBER"
    else
        echo -e "${BLUE}You can now merge this branch to main.${NC}"
    fi
else
    echo -e "${RED}❌ Please address security concerns before merging.${NC}"
    exit 1
fi