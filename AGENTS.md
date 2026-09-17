# Project guide

## Overview

Relay is a single-page marketing site for an AI automation consultancy. It uses an editorial, warm, operations-focused visual language rather than conventional neon AI styling.

## Architecture

- `src/routes/index.tsx` contains the homepage structure, copy, workflow data, and lightweight interaction state.
- `src/routes/__root.tsx` defines the HTML shell and global metadata.
- `src/styles.css` contains the design tokens, responsive layout, component styling, and motion.
- `src/router.tsx` configures TanStack Router.
- `public/` contains static assets.

## Conventions

- Use TypeScript and functional React components.
- Use semantic sections and accessible labels for interactive controls.
- Keep the warm cream, forest, sage, and lime palette consistent through CSS variables.
- Use Instrument Serif for expressive display text and DM Sans for interface copy.
- Prefer CSS Grid for page-level layouts and keep animations limited to transforms and opacity.
- Maintain usable focus states, reduced-motion support, and single-column mobile fallbacks.

## Notes

The homepage workflow tabs intentionally use local React state; no backend or persistent storage is needed. The audit CTA opens the visitor’s email client, so there is no form submission service to configure.
