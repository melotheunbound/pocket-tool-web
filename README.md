# Pocket Tool Website

The official landing page and documentation site for [Pocket Tool](https://github.com/mloetta/pocket-tool), a collection of focused Discord utilities.

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Discord installation

The website links directly to Discord's user-app installation screen.

In the Discord Developer Portal, enable **User Install** for the application and include the `applications.commands` scope in its default installation settings.

## Production

```bash
npm run build
npm run start
```

## Quality checks

```bash
npm run lint
npm test
```

## Project structure

- `app/` contains the landing page, documentation, legal pages, and shared components.
- `public/` contains the Pocket Tool brand artwork and command screenshots.
- `tests/` contains the source and asset checks used before release.
