# Monorepo Commands

This monorepo uses pnpm workspaces with Turborepo for efficient builds and development.

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development servers
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test
```

## Available Scripts

### Development
- `pnpm dev` - Start all development servers
- `pnpm build` - Build all packages
- `pnpm clean` - Clean build outputs
- `pnpm clean:all` - Deep clean including node_modules
- `pnpm install:clean` - Clean install from scratch

### Testing
- `pnpm test` - Run all tests
- `pnpm test:unit` - Run unit tests only
- `pnpm test:integration` - Run integration tests
- `pnpm test:e2e` - Run end-to-end tests

### Code Quality
- `pnpm lint` - Lint all packages
- `pnpm typecheck` - Type check all packages
- `pnpm format` - Format code with Prettier

## Working with Packages

### Add dependency to workspace root
```bash
pnpm add -D -w <package-name>
```

### Add dependency to specific package
```bash
pnpm add <package-name> --filter <workspace-name>
```

### Run command in specific package
```bash
pnpm --filter <workspace-name> <command>
```

### Link local packages
Local packages are automatically linked using the workspace protocol.

## Turborepo Features

### Cache
Turborepo caches build outputs automatically. The cache is stored in `.turbo`.

### Remote Caching
To enable remote caching:
```bash
npx turbo login
npx turbo link
```

### Pipeline
Tasks are defined in `turbo.json` with dependencies and caching rules.

## Project Structure

```
starter/
├── apps/           # Applications (web, mobile)
├── packages/       # Shared packages
├── tests/         # Cross-cutting tests
│   ├── e2e/       # End-to-end tests
│   └── integration/ # Integration tests
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

## Testing Structure

Tests are co-located with source code:
- Unit tests: `*.test.ts(x)` files next to source
- Component tests: In component folders
- Integration tests: In `tests/` folders
- E2E tests: In root `tests/e2e/`

## Troubleshooting

### Clear all caches
```bash
pnpm clean:all
pnpm install
```

### Update dependencies
```bash
pnpm update -r
```

### Check for outdated packages
```bash
pnpm outdated -r
```