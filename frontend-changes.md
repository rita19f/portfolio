# Frontend Changes

## Entrance animations for the Home section

**File modified:** `src/styles/globals.css`

### What was added

Two `@keyframes` animations were defined:

- `fade-in-left` — slides in from the left (`translateX(-40px) → 0`) while fading from opacity 0 to 1.
- `fade-in-right` — slides in from the right (`translateX(40px) → 0`) while fading from opacity 0 to 1.

These animations are applied directly to the existing CSS classes:

| Element | Animation | Delay |
|---|---|---|
| `.avatar` | `fade-in-left` | 0.1 s |
| `.home-title` | `fade-in-right` | 0.3 s |
| `.home-intro` | `fade-in-right` | 0.5 s |

All three use `animation-fill-mode: both` (via the `both` shorthand keyword) so the elements are invisible before their animation fires. Duration is `0.75 s` with `ease-out` timing for a natural, unhurried feel.

A `@media (prefers-reduced-motion: reduce)` block sets `animation: none` on all three elements, honouring the user's system accessibility preference.

No changes were made to `Home.jsx` — the existing class names were sufficient.
