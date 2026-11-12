# Data Model: Podcast Website

## Scope

All content is fictional, replaceable source data shipped with the static site. There is no database, feed, API, audio asset, or runtime content fetch.

## Episode

Represents one informational podcast entry.

| Field         | Shape                          | Rules                                                              |
| ------------- | ------------------------------ | ------------------------------------------------------------------ |
| `id`          | Stable string                  | Required and unique across the 20 episodes.                        |
| `title`       | String                         | Required and non-empty.                                            |
| `description` | String                         | Required and non-empty; concise enough to scan in a card.          |
| `releaseDate` | ISO date string (`YYYY-MM-DD`) | Required and parseable as a calendar date.                         |
| `duration`    | Display string                 | Required; use a consistent human-readable format such as `34 min`. |

### Catalog Rules

- The catalog contains exactly 20 distinct episode records.
- The featured episode is identified by a single `featuredEpisodeId` value that references an existing record in the catalog.
- The featured record is rendered once on the landing page and remains part of the 20-item catalog; it is not duplicated as a separate record.
- Catalog order is newest release date first. The mock dates and descriptions do not imply a real feed.
- Episode records are informational only. They have no audio URL, playback state, feed identifier, or separate detail-route requirement.

## FAQ Item

Represents one expandable question and its answer.

| Field      | Shape         | Rules                                                       |
| ---------- | ------------- | ----------------------------------------------------------- |
| `id`       | Stable string | Required and unique among FAQ items.                        |
| `question` | String        | Required and non-empty.                                     |
| `answer`   | String        | Required and non-empty; answers the corresponding question. |

FAQ items cover the fictional show's premise, episode information, and the fact that the catalog is mock content. Expansion state is presentation state, not persisted content.

## Site Content

The shared site content includes a fictional show name, concise tagline, short description, and about-page copy. These values are editable sample content and must not be presented as verified claims about a real podcast. Navigation labels and FAQ copy are also local content.

## Relationships and Invariants

- One site has exactly one featured episode reference.
- The featured episode reference resolves to exactly one episode in the catalog.
- The site presents 20 unique episodes and one or more complete FAQ items.
- Missing or duplicate episode identifiers, a dangling featured reference, or blank required content are content defects and should fail focused validation.
