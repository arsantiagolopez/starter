# Contributing Guidelines - Spec-Driven Development

This project follows strict spec-driven development principles with proper AGILE workflows.

## Workflow Requirements

### 1. Branch Strategy

**NEVER commit directly to main**. Every change must:

- Be developed on a feature branch
- Be reviewed via pull request
- Pass all checks before merging

#### Branch Naming Convention

- `feat/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions/updates
- `chore/` - Maintenance tasks

Examples:

- `feat/clerk-authentication`
- `fix/auth-redirect-loop`
- `docs/api-documentation`

### 2. Development Process

1. **Start with a GitHub Issue**

   - Every change must have a corresponding issue
   - Issues must follow our spec template
   - Reference the issue number in commits and PR

2. **Create Feature Branch**

   ```bash
   git checkout -b feat/issue-number-description
   ```

3. **Make Changes**

   - Follow existing code patterns
   - Write tests for new functionality
   - Update documentation as needed

4. **Commit with Conventional Commits**

   ```
   type(scope): description

   Body explaining what and why (not how)

   Closes #123
   ```

5. **Create Pull Request**

   - Fill out PR template completely
   - Link to related issues
   - Ensure all checks pass

6. **After PR Approval and Merge**
   - Mark GitHub issue as closed
   - Delete feature branch

### 3. Issue Management

**CRITICAL**: When work is completed:

- GitHub issues MUST be marked as closed
- Add a comment summarizing what was done
- Link to the merged PR

### 4. Pull Request Requirements

All PRs must:

- Have a clear description
- Reference related issues
- Pass all automated checks
- Have at least one review
- Include tests for new features
- Update relevant documentation

### 5. Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new authentication flow
fix: resolve memory leak in data fetching
docs: update API documentation
style: format code with prettier
refactor: simplify user service logic
test: add integration tests for auth
chore: update dependencies
```

### 6. Code Review Process

Reviewers should check:

- Code follows project patterns
- Tests are included and passing
- Documentation is updated
- No security vulnerabilities
- Performance implications considered

### 7. Definition of Done

A task is ONLY complete when:

- [ ] Code is merged to main
- [ ] All tests pass
- [ ] Documentation is updated
- [ ] GitHub issue is closed
- [ ] Related tickets are updated

## Example Workflow

```bash
# 1. Start from main
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feat/42-add-user-profile

# 3. Make changes and commit
git add .
git commit -m "feat(profile): add user profile page

Implements user profile with edit capabilities

Closes #42"

# 4. Push and create PR
git push origin feat/42-add-user-profile

# 5. After PR is merged, close issue #42
```

## Automated Enforcement

This repository uses:

- Branch protection on main
- Required PR reviews
- Automated testing via GitHub Actions
- Commit message linting

Violations of these guidelines will be automatically prevented.
