# Dark Mode Toggle — Frontend Changes

## Files modified

### `index.html`
Added an inline `<script>` block in `<head>` that runs before React mounts. It reads `localStorage.getItem('theme')` and, if set, applies `data-theme` to `<html>` immediately. Falls back to `prefers-color-scheme` for first-time visitors. This prevents a flash of the wrong theme on page load.

### `src/styles/globals.css`
- Added `[data-theme="dark"]` block after `:root` that overrides all CSS custom properties with a deep navy palette (`--bg: #0F172A`, `--surface: #1E293B`, `--text: #E2E8F0`, etc.) that complements the existing soft sky-blue light theme.
- Added `transition: background-color 300ms ease, color 300ms ease` to `html, body`.
- Added `transition: background-color 300ms ease, border-color 300ms ease` to `.navbar`.
- Added `transition: background-color 300ms ease` to `.section`.
- Added `transition: background-color 300ms ease, border-color 300ms ease, box-shadow 300ms ease` to `.section-content`.
- Added `transition: background-color 300ms ease, border-color 300ms ease, color 300ms ease` to `.footer`.
- Added `.theme-toggle` button styles: circular, borderless background, `var(--text-muted)` icon color, hover state with `var(--surface-alt)` fill and `var(--text)` icon color.

### `src/hooks/useTheme.js` (new file)
Small React hook that:
- Initialises state by reading `localStorage` first, then falling back to `window.matchMedia('(prefers-color-scheme: dark)')`.
- On each state change, writes `data-theme` to `document.documentElement` and persists to `localStorage`.
- Exports `{ theme, toggle }`.

### `src/components/Navbar.jsx`
- Imports `useTheme` and calls it at the top of the component.
- Adds a `<button class="theme-toggle">` after the `<nav>` links with `aria-label` describing the action ("Switch to dark mode" / "Switch to light mode").
- Renders a `SunIcon` (stroke SVG) in dark mode and a `MoonIcon` (filled crescent SVG) in light mode, both inline, no external icon library needed.

## Dark mode palette

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#F3F7FB` | `#0F172A` |
| `--bg-alt` | `#E9F0F8` | `#162033` |
| `--surface` | `#FFFFFF` | `#1E293B` |
| `--accent` | `#5AA9E6` | `#60B4F0` |
| `--text` | `#1E293B` | `#E2E8F0` |
| `--text-muted` | `#64748B` | `#94A3B8` |
