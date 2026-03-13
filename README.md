# MONO REPO

Monorepo using `npm` workspaces with:
- `apps/web`: React + Vite + TypeScript
- `apps/api`: Node + Express + TypeScript (MVC structure)

## Project Structure

```text
.
├── apps
│   ├── api
│   │   └── src
│   │       ├── config
│   │       ├── controllers
│   │       ├── middlewares
│   │       ├── models
│   │       ├── routes
│   │       ├── services
│   │       ├── utils
│   │       ├── app.ts
│   │       └── server.ts
│   └── web
├── .husky
├── .github
│   └── dependabot.yml
├── package.json
└── README.md
```

## Requirements

- Node.js 20+
- npm 10+

## Install

```bash
npm install
```

## Run Development

Run frontend:

```bash
npm run dev:web
```

Run backend:

```bash
npm run dev:api
```

Run both workspace `dev` scripts (if present):

```bash
npm run dev
```

## Build

Build all workspaces:

```bash
npm run build
```

## Lint

Lint all workspaces:

```bash
npm run lint
```

Auto-fix lint issues:

```bash
npm run lint:fix
```

## Format

Check formatting:

```bash
npm run format:check
```

Format files:

```bash
npm run format
```

## Git Hooks

Husky is configured with a `pre-commit` hook that runs lint checks.

## Dependabot

Dependabot is configured for weekly npm dependency updates for:
- root (`/`)
- `apps/web`
- `apps/api`

## API Quick Endpoints

- Health: `GET /health`
- Users: `GET /api/users`
