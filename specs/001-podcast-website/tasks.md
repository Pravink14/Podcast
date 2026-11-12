# Tasks: Podcast Website

**Input**: Design documents from `/specs/001-podcast-website/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `quickstart.md`

**Tests**: Browser tests are included because the plan and quickstart specify Playwright verification for the user journeys, content invariants, keyboard interactions, and responsive layouts.

**Organization**: Tasks are grouped by the three prioritized user stories in `spec.md`. Write each story's browser checks before implementing its UI.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Tasks touch different files and can proceed in parallel after dependencies are met.
- **[Story]**: User-story label matching `spec.md`.
- Every task description names its target file or files.

## Phase 1: Setup

**Purpose**: Initialize the static Next.js project and browser-test tooling.

- [x] T001 Initialize the root TypeScript Next.js App Router project, configure `output: 'export'`, and add `dev`, `build`, and lint scripts in `package.json`, `next.config.ts`, `tsconfig.json`, and `.gitignore`.
- [x] T002 Add Playwright and the `test:e2e` script in `package.json`, configure browser tests and the local test server in `playwright.config.ts`, and create the test directory at `tests/`.

---

## Phase 2: Foundational

**Purpose**: Create shared site structure, route shells, and local content required by all user stories.

- [x] T003 [P] Create the shared responsive layout, navigation to all four routes, footer, keyboard focus styling, and base design tokens in `src/app/layout.tsx`, `src/app/globals.css`, `src/components/site-header.tsx`, and `src/components/site-footer.tsx`.
- [x] T004 [P] Define local `Episode`, FAQ, and site content in `src/content/episodes.ts` and `src/content/site.ts`; create exactly 20 episodes; ensure `id` is required and unique across all 20, `title` and `description` are required and non-empty, `releaseDate` is an ISO date string in `YYYY-MM-DD` format and parseable, `duration` is required and consistently human-readable, and `featuredEpisodeId` references exactly one catalog record.
- [x] T005 Create static route shells for `/`, `/episodes`, `/about`, and `/faq` in `src/app/page.tsx`, `src/app/episodes/page.tsx`, `src/app/about/page.tsx`, and `src/app/faq/page.tsx` so navigation destinations exist before story implementation.
- [x] T006 Create a reusable semantic informational episode card that displays title, description, release date, and duration without audio or feed controls in `src/components/episode-card.tsx`.

**Checkpoint**: The app exports four route shells, shared navigation works, and local episode/site content is available to each story.

---

## Phase 3: User Story 1 - Discover the Podcast (Priority: P1)

**Goal**: Show the podcast identity and exactly one featured episode on the landing page, with navigation to every page.

**Independent Test**: Run the US1 browser checks and verify the landing page shows the identity and one featured episode, and navigation reaches all four route shells.

### Tests for User Story 1

- [x] T007 [US1] Add Playwright checks for podcast identity, exactly one featured episode, and navigation to all four routes in `tests/podcast-site.spec.ts`.

### Implementation for User Story 1

- [x] T008 [US1] Implement the landing page using the shared site content and the catalog's featured episode in `src/app/page.tsx`.

**Checkpoint**: The landing page independently demonstrates the primary discovery journey and all navigation destinations load.

---

## Phase 4: User Story 2 - Browse Episodes (Priority: P1)

**Goal**: Present exactly 20 distinct mock episodes with their required details, including the featured episode.

**Independent Test**: Run the US2 browser checks and verify the catalog has 20 unique cards, each with a title, description, release date, and duration; confirm the featured episode is one of them and no card implies playback.

### Tests for User Story 2

- [x] T009 [US2] Add Playwright checks for 20 unique episode cards, all required episode fields, featured-episode membership, and absence of playback controls in `tests/podcast-site.spec.ts`.

### Implementation for User Story 2

- [x] T010 [US2] Implement the episodes page by rendering all records from the canonical local dataset with the shared episode card in `src/app/episodes/page.tsx`.

**Checkpoint**: The catalog can be verified independently against the 20-record and featured-reference invariants.

---

## Phase 5: User Story 3 - Learn About the Show (Priority: P2)

**Goal**: Explain the fictional show's premise and provide keyboard-operable answers to common questions.

**Independent Test**: Run the US3 browser checks and verify the about page explains the sample premise and FAQ answers can be expanded and collapsed by keyboard with visible focus.

### Tests for User Story 3

- [x] T011 [US3] Add Playwright checks for the about-page premise, FAQ questions and answers, and keyboard expansion/collapse in `tests/podcast-site.spec.ts`.

### Implementation for User Story 3

- [x] T012 [P] Implement the about page using replaceable fictional site copy in `src/app/about/page.tsx`.
- [x] T013 [P] Implement an accessible expandable FAQ component and render the local FAQ content on `src/components/faq-list.tsx` and `src/app/faq/page.tsx`.

**Checkpoint**: About and FAQ content are complete and independently verifiable with keyboard interaction.

---

## Phase 6: Polish and Cross-Cutting Concerns

**Purpose**: Finish visual responsiveness, static-output checks, and end-to-end validation across all stories.

- [x] T014 Refine the editorial visual design and verify readable, non-overlapping layouts at 320px and 1280px in `src/app/globals.css`, `src/components/site-header.tsx`, `src/app/page.tsx`, `src/app/episodes/page.tsx`, `src/app/about/page.tsx`, and `src/app/faq/page.tsx`.
- [x] T015 Run the production static export and full Playwright suite, confirm all four routes are present under `out/`, resolve failures, and record the commands and expected results in `specs/001-podcast-website/quickstart.md`.

---

## Dependencies and Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: T001 precedes T002 because both configure `package.json`.
- **Foundational (Phase 2)**: T003 and T004 can run in parallel after T001. T005 depends on T003. T006 depends on T004. All foundational tasks must finish before user-story tasks.
- **User Stories (Phases 3-5)**: Each story follows its browser checks before its UI implementation. User stories use the shared Playwright file, so additions to that file are sequential. Story page implementations otherwise rely only on the foundation.
- **Polish (Phase 6)**: Depends on all three user stories.

### User Story Dependencies

- **US1 (P1)**: Starts after the foundation; no dependency on another story.
- **US2 (P1)**: Starts after the foundation; no dependency on another story.
- **US3 (P2)**: Starts after the foundation; no dependency on another story.

### Parallel Opportunities

- T003 (shared shell/styles) and T004 (local content) touch separate files and can run in parallel after project setup.
- T012 (about page) and T013 (FAQ component/page) touch separate files and can run in parallel after T011.
- User-story implementation can be assigned independently after the foundation, provided edits to the shared `tests/podcast-site.spec.ts` are serialized.

## Parallel Example: Foundation

```text
After T001:
- T003: shared shell and responsive base styles
- T004: episode, FAQ, and site content

After T011:
- T012: about page
- T013: FAQ component and page
```

## Implementation Strategy

### MVP First (User Story 1)

1. Complete setup and foundational tasks.
2. Add and run T007; confirm it fails for missing landing-page content.
3. Implement T008 and validate the discovery journey independently.
4. Demo the landing page and shared navigation before completing the rest of the catalog and information pages.

### Incremental Delivery

1. Complete US1 and validate the landing-page discovery journey.
2. Complete US2 and validate all 20 episodes and featured membership.
3. Complete US3 and validate the about and keyboard-operable FAQ flows.
4. Complete responsive polish and static-export validation.

## Notes

- `[P]` means the task can run in parallel without editing the same files or depending on incomplete work.
- Every task uses the required checkbox, sequential ID, optional parallel marker, required user-story label for story phases, and target file path.
- No database, feed, playback, API, or server runtime is included.
