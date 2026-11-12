# Research: Podcast Website

## Summary

The user selected Next.js and static-site configuration, with no database and episode data embedded in local content. The repository has no existing application, package manifest, test setup, or asset conventions. These decisions resolve the architecture without requiring a live service or a technology comparison.

## Decisions

### Use Next.js App Router with static export

**Decision**: Build the four routes with the Next.js App Router and configure the production build for static export (`output: 'export'`). Keep all routes compatible with static generation.

**Rationale**: This follows the requested framework while satisfying the project constitution's static-delivery requirement. The app has no personalized or frequently changing data that would require server rendering.

**Alternatives considered**: A server-rendered Next.js deployment was unnecessary because no server behavior is in scope. A different framework was not considered because Next.js was explicitly requested.

### Keep content in one local source dataset

**Decision**: Store all 20 mock episodes in one local typed content module. Keep a single featured episode identifier that points into the same list. Store the fictional show copy and FAQ items in local content as well.

**Rationale**: One canonical list prevents the landing-page feature and catalog from drifting apart and requires no database or network request.

**Alternatives considered**: A database or remote content API would add operational complexity without a content-management requirement. A real feed is explicitly out of scope.

### Use static-compatible local media

**Decision**: Serve artwork and fonts from local public assets. Configure image handling so exported pages do not require the Next.js image optimization server at runtime.

**Rationale**: Local assets work under static hosting, avoid runtime dependencies, and support a distinctive visual identity.

**Alternatives considered**: Remote images and runtime image optimization introduce external availability or server requirements that conflict with the static-delivery constraint.

### Verify behavior in a real browser

**Decision**: Use Playwright end-to-end checks for page navigation, catalog invariants, keyboard-operable FAQ controls, and responsive viewport checks. Require the production build to complete and inspect the exported routes.

**Rationale**: These checks cover browser behavior and static output without an existing test framework to preserve.

**Alternatives considered**: Unit checks alone would not demonstrate route navigation, keyboard interaction, or layout behavior at mobile and desktop sizes.

## Resolved Constraints

- Four routes: home, episodes, about, and FAQ.
- Exactly 20 distinct episodes; the featured episode is one of them.
- Episode cards are informational; no playback, feed integration, accounts, API, database, or persistent application server.
- Responsive, keyboard-usable pages with local content and assets.
- Deployment provider and production domain remain unspecified because neither is needed to validate a static export.
