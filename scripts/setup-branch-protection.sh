#!/bin/bash

# Script to set up branch protection rules for the main branch
# This prevents direct pushes and requires pull requests with security checks

echo "Setting up branch protection for main branch..."

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "Error: GitHub CLI (gh) is not installed"
    echo "Please install it: https://cli.github.com/"
    exit 1
fi

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "Error: Not in a git repository"
    exit 1
fi

# Get repository info
REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner)

if [ -z "$REPO" ]; then
    echo "Error: Could not determine repository. Make sure you're authenticated with gh CLI"
    exit 1
fi

echo "Configuring branch protection for: $REPO"

# Set up branch protection rules
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  "/repos/$REPO/branches/main/protection" \
  -f "required_status_checks[strict]=true" \
  -f "required_status_checks[contexts][]=security-check" \
  -f "enforce_admins=false" \
  -f "required_pull_request_reviews[dismiss_stale_reviews]=true" \
  -f "required_pull_request_reviews[require_code_owner_reviews]=false" \
  -f "required_pull_request_reviews[required_approving_review_count]=0" \
  -f "restrictions=null" \
  -f "allow_force_pushes=false" \
  -f "allow_deletions=false" \
  -f "required_conversation_resolution=true" \
  -f "lock_branch=false" \
  -f "allow_fork_syncing=false"

if [ $? -eq 0 ]; then
    echo "✅ Branch protection successfully configured!"
    echo ""
    echo "Main branch protection settings:"
    echo "- Requires pull request before merging"
    echo "- Requires security-check status to pass"
    echo "- Dismisses stale PR reviews when new commits are pushed"
    echo "- Requires conversation resolution before merging"
    echo "- Prevents force pushes and deletions"
    echo ""
    echo "⚠️  IMPORTANT: From now on, you must:"
    echo "1. Create a feature branch for all changes"
    echo "2. Push to the feature branch"
    echo "3. Create a pull request to merge into main"
    echo "4. Ensure security checks pass before merging"
else
    echo "❌ Failed to set up branch protection"
    echo "You may need to configure this manually in GitHub Settings > Branches"
fi