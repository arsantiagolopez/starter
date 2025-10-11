# Starter

A modern, full-stack starter application built with React Router 7, featuring a scalable design system and comprehensive dark mode support.

## Tech Stack

- **React Router 7** - Full-stack React framework with SSR
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - Accessible, composable components
- **Vite** - Fast build tooling

## Features

- 🎨 Scalable design system with modular CSS architecture
- 🌓 Advanced dark mode with system preference detection
- ♿️ Accessible components built on Radix UI
- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 🔒 Type-safe by default
- 📦 Optimized production builds

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- pnpm (recommended) or npm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Application runs at `http://localhost:5173`

### Build

```bash
pnpm build
```

## Documentation

- [Design System](./docs/design-system.md) - Architecture, theming, and styling patterns

## Project Structure

```
app/
├── components/        # React components
│   └── ui/           # shadcn/ui components
├── lib/              # Utilities and helpers
│   └── utils/        # Shared utility functions
├── routes/           # File-based routing
│   └── resources/    # API/resource routes
└── styles/           # Modular CSS organization
    ├── index.css     # Main entry point
    ├── colors.css    # Theme colors
    ├── fonts.css     # Typography
    ├── tokens.css    # Design tokens
    └── globals.css   # Global styles

docs/                 # Documentation
```

## Design System

The application uses a modular design system built on:

- CSS custom properties for theming
- OKLCH color space for perceptual uniformity
- Semantic color tokens that adapt to light/dark modes
- Scalable component architecture

See [Design System Documentation](./docs/design-system.md) for details.

## Dark Mode

Features a hybrid dark mode implementation:

- Automatic system theme detection
- Manual theme selection (light/dark/system)
- Live updates when OS theme changes
- No flash of incorrect theme
- Cookie-based persistence

## Deployment

### Docker

```bash
docker build -t starter .
docker run -p 3000:3000 starter
```

Compatible with:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Fly.io
- Railway
- Digital Ocean

### Node.js

Deploy the build output (`build/client` and `build/server`) to any Node.js hosting platform.

---

Built with React Router 7
