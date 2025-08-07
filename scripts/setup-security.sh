#!/bin/bash

# Setup script for security review process

echo "🔒 Setting up security review process..."
echo ""

# Make scripts executable
echo "✓ Making scripts executable..."
chmod +x ./scripts/security-review.sh
chmod +x ./scripts/setup-security.sh
chmod +x .githooks/pre-merge-commit

# Configure git hooks
echo "✓ Configuring git hooks..."
git config core.hooksPath .githooks

# Check for gh CLI
if command -v gh &> /dev/null; then
    echo "✓ GitHub CLI is installed"
    
    # Check if authenticated
    if gh auth status &> /dev/null; then
        echo "✓ GitHub CLI is authenticated"
    else
        echo "⚠️  GitHub CLI not authenticated. Run: gh auth login"
    fi
else
    echo "⚠️  GitHub CLI not installed (optional but recommended)"
    echo "   Install with: brew install gh (macOS) or see https://cli.github.com/"
fi

echo ""
echo "✅ Security review process setup complete!"
echo ""
echo "📋 Next steps:"
echo "  1. Review SECURITY_REVIEW.md for the full process"
echo "  2. Before merging PRs, run: ./scripts/security-review.sh"
echo "  3. In Claude Code, use: /security-review"
echo ""
echo "To test the setup, run:"
echo "  ./scripts/security-review.sh"