# Quickstart: Podcast Website

This guide applies after the Next.js project and package scripts described in [plan.md](plan.md) have been implemented. Run commands from the repository root.

## Prerequisites

- A current Node.js LTS release and npm.
- Project dependencies installed from the committed lockfile.

## Install and Run Locally

```powershell
npm ci
npm run dev
```

Open the local URL printed by Next.js. Check that the home, episodes, about, and FAQ pages load and that the shared navigation reaches each page.

## Validate Content and Interactions

Run the browser checks against the local project:

```powershell
npm run test:e2e
```

The checks should confirm:

- The landing page shows exactly one featured episode.
- The episodes page shows 20 unique episodes, including the featured episode, with title, description, release date, and duration.
- Episode cards do not expose playback controls or imply live feed content.
- FAQ questions expand and collapse with keyboard input and visible focus.
- All four routes are reachable and usable at 320px and 1280px viewport widths, without horizontal page overflow or clipped content.

## Build the Static Site

```powershell
npm run build
```

The command must complete successfully and emit the statically exportable site into `out/`. Confirm that the exported output includes the home, episodes, about, and FAQ routes. The Playwright production-site check should serve the exported directory locally so the check verifies the static output rather than relying on a Next.js application server.

## Expected Boundaries

No database, real podcast feed, audio playback, API, account system, or server runtime is required. Episode, show, and FAQ content is local mock content. Static-host deployment can be configured later for the target provider without changing these validation scenarios.
