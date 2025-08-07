# Security Review Process

This repository uses a manual security review process with Claude Code before merging PRs to the main branch.

## Why Manual Reviews?

We use manual security reviews with Claude Code's `/security-review` command instead of automated scans to:
- Avoid additional costs for automated security scanning
- Maintain full control over the review process
- Get intelligent, context-aware security insights from Claude

## Setup

### 1. Enable Git Hooks (One-time setup)

Run this command to enable the pre-merge security check:

```bash
# Configure git to use our custom hooks directory
git config core.hooksPath .githooks
```

### 2. Install GitHub CLI (Optional but recommended)

The security script works best with GitHub CLI installed:

```bash
# macOS
brew install gh

# Or download from: https://cli.github.com/
```

## Security Review Workflow

### Before Merging Any PR

1. **Run the security review script:**
   ```bash
   ./scripts/security-review.sh
   ```

2. **Open Claude Code and run:**
   ```
   /security-review
   ```

3. **Address any issues found** before proceeding with the merge

### What Gets Checked

#### Automated Checks (via script)
- Exposed secrets or API keys
- Hardcoded credentials
- New dependencies that may have vulnerabilities
- Environment variable changes
- File permission modifications

#### Claude Code Review
- Code injection vulnerabilities
- Authentication/authorization issues
- Data validation problems
- Security best practices
- Dependency vulnerabilities
- And more comprehensive security analysis

## PR Workflow

1. **Create PR**: Push your feature branch and create a PR
2. **Automated Reminder**: GitHub will post a security review reminder
3. **Run Security Review**: Execute `./scripts/security-review.sh`
4. **Claude Review**: Run `/security-review` in Claude Code
5. **Fix Issues**: Address any security concerns
6. **Merge**: Once all checks pass, merge to main

## Manual Merge Commands

If you need to merge without the GitHub UI:

```bash
# Using GitHub CLI (recommended)
gh pr merge <PR-NUMBER>

# Using git directly (ensure security review is done first!)
git checkout main
git merge <branch-name>
```

## Bypass (Emergency Only)

If you absolutely need to bypass the security check (NOT RECOMMENDED):

```bash
# Temporarily disable hooks
git config core.hooksPath .git/hooks

# Re-enable after merge
git config core.hooksPath .githooks
```

⚠️ **Warning**: Only bypass security reviews in genuine emergencies. Always complete the review as soon as possible afterward.

## Troubleshooting

### Script not found
```bash
chmod +x ./scripts/security-review.sh
```

### Git hooks not working
```bash
git config core.hooksPath .githooks
chmod +x .githooks/*
```

### GitHub CLI not authenticated
```bash
gh auth login
```

## Resources

- [Claude Code Security Reviews](https://www.anthropic.com/news/automate-security-reviews-with-claude-code)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security/getting-started/best-practices-for-preventing-data-leaks-in-your-organization)

---

Remember: **Security is everyone's responsibility**. When in doubt, ask for a second review!