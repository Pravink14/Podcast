<!--
Sync Impact Report
Version change: unratified scaffold -> 1.0.0 (initial adoption)
Modified principles: none; three initial principles added
Added sections: Technical Constraints, Delivery Workflow
Removed sections: none
Follow-up TODO: confirm the original ratification date
-->
# Podcast Constitution

## Core Principles

### I. Static Delivery
The app MUST be deliverable as static files. Server-side services are out of scope unless a feature
spec explicitly requires them.

### II. Accessible, Responsive Experience
User-facing features MUST use semantic markup, support keyboard interaction, and remain usable on
mobile and desktop screens.

### III. Safe, Simple Client
The app MUST NOT expose secrets or sensitive credentials in client-side code. Dependencies and
client-side data collection MUST be limited to what the specified features need.

## Technical Constraints
The app MUST work from static hosting without requiring a persistent application server. Any
external service dependency MUST be explicit in the feature specification.

## Delivery Workflow
Before delivery, verify the production build and check the affected user flows at mobile and desktop
sizes. Changes MUST be reviewed for accessibility and accidental exposure of secrets.

## Governance
This constitution governs project decisions. Amendments MUST be documented here and reviewed for
their effect on existing requirements. Use semantic versioning: MAJOR for incompatible changes,
MINOR for new or materially expanded requirements, and PATCH for clarifications. Each change MUST
be checked against these principles during review.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): original date unknown | **Last Amended**: 2026-11-12
