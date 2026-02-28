# DAWNO

A modern, performance-oriented PAWN code editor built for SA-MP and open.mp developers.

Live site: [deksdeveloper.github.io/dawno-web](https://deksdeveloper.github.io/dawno-web)

## Overview

DAWNO is a desktop application built on Electron and Monaco Editor — the same engine that powers Visual Studio Code. It provides a first-class editing experience for PAWN scripting, removing the friction of traditional SA-MP development workflows.

### Key Features

- Monaco Editor with full IntelliSense support
- Integrated server manager for SA-MP and open.mp
- Automatic compiler detection and configuration
- Built-in server configuration editor
- Discord Rich Presence integration
- Multi-language UI (English, Turkish, Russian, German)

## Tech Stack

### Application (desktop)
- [Electron](https://www.electronjs.org/) - Cross-platform desktop shell
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Code editor core
- TypeScript

### Landing page (this repository)
- [Next.js](https://nextjs.org/) - React framework (static export)
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons

## Development

### Prerequisites

- Node.js 18 or later
- npm

### Getting started

```bash
# Clone the repository
git clone https://github.com/deksdeveloper/dawno-web.git
cd dawno-web

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for production

The landing page is exported as a static site and hosted on GitHub Pages.

```bash
npm run build
```

The static output is written to the `out/` directory. The site is configured for the `/dawno-web` base path and is deployed automatically via GitHub Actions on every push to `main`.

## Deployment

Deployment is handled automatically by the GitHub Actions workflow at `.github/workflows/deploy.yml`.

To deploy manually, push to the `main` branch:

```bash
git push origin main
```

The workflow will build the static site and publish it to the `gh-pages` branch, which GitHub Pages serves from.

### Required GitHub Pages settings

In the repository settings, under **Pages**:
- Source: **GitHub Actions**

## Project structure

```
dawno-web/
├── public/
│   └── assets/          # Static icons and images
├── src/
│   ├── app/             # Next.js app router (layout, global CSS)
│   ├── components/      # Page sections (Navbar, Hero, Features, Downloads, Footer)
│   └── i18n/            # Internationalization context and locale files
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment workflow
├── next.config.ts        # Next.js configuration (static export, basePath)
└── tailwind.config.ts    # Tailwind CSS configuration
```

## License

MIT License. See [LICENSE](LICENSE) for details.
