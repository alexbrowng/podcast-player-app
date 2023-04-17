# Podcast Player App

## Introduction

Podcast Player App is a mini-application for listening to musical podcasts. It is a Single Page Application built with
TypeScript, React, and TailwindCSS. The application has three views:

- a main view that lists the available podcasts
- a podcast details view that displays detailed information about a selected podcast
- an episode details view that shows detailed information about a selected episode.

The application can be run in development mode, where assets are served without minification, or in production mode,
where assets are served concatenated and minified.

## Prerequisites

- [npm](https://www.npmjs.com/) >= `9.6+` _Recommended_ `9.6.4`
- [node](https://nodejs.org/en/) >= `16.20+` _Recommended_ `16.20.0`

## Installation

### Clone the project

...with HTTPS:

```bash
git clone https://github.com/alexbrowng/podcast-player-app.git
```

...with SSH:

```bash
git clone git@github.com:alexbrowng/podcast-player-app.git
```

### Go to the project directory

```bash
cd podcast-player-app
```

### Install dependencies with _npm_

```bash
npm install
```

or with _makefile_ command

```bash
make install
```

### Run in development mode

```bash
npm run dev
```

or with _makefile_ command

```bash
make dev
```

### Run in production mode

```bash
npm run build
npm run preview
```

or with _makefile_ command

```bash
make preview
```

## Quality code checks

### Lint

```bash
npm run lint
```

or with _makefile_ command

```bash
make lint
```

### Check Format

```bash
npm run check-format
```

or with _makefile_ command

```bash
make check-format
```

### Format

```bash
  npm run lint:fix
  npm run format
```

or with _makefile_ command

```bash
make format
```

## Tech stack

- [TypeScript](https://www.typescriptlang.org/): a strongly typed programming language that builds on JavaScript.
- [React](https://reactjs.org/): a JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com): React Router enables "client side routing".
- [React Query](https://tanstack.com/query): data-fetching library for web applications.
- [Vite](https://vitejs.dev/): a build tool that aims to provide a faster and leaner development experience for modern
  web projects.
- [Tailwindcss](https://tailwindcss.com/): a utility-first CSS framework packed with classes that can be composed to
  build any design, directly in your markup. It works with a few official plugins as:
  [Forms](https://tailwindcss.com/docs/plugins#forms).
- [PostCSS](https://postcss.org/): a tool for transforming CSS with JavaScript plugins. It provides a way to automate
  CSS processing, such as adding vendor prefixes, minifying stylesheets, etc.
- [Prettier](https://prettier.io/): a code formatter tool that automatically formats your code to follow a consistent
  style, making it easier to read and maintain.
- [ESLint](https://eslint.org/): helps to find and fix problems with JavaScript code. It works with extensions for
  Typescript, React and Prettier.
