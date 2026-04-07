# React/React-TS lint refactor notes

This refactor keeps strict lint rules enabled and fixes all issues in code (no config-level rule bypasses).

## Scope

- `mobiscroll-demos-react`
- `mobiscroll-demos-react-ts`

Both now pass:

- `npm run lint` in `mobiscroll-demos-react` (`--max-warnings 0`)
- `npm run lint` in `mobiscroll-demos-react-ts` (`--max-warnings 0`)

## What was changed

### 1) Removed config-level hook rule bypasses

- Reverted temporary rule-disable overrides and kept hook/compiler checks active.

### 2) Ref access during render (`react-hooks/refs`)

- Replaced render-time `useRef(...).current` view objects with memoized view configs:
  - sync demos (`agenda` + `calendar-view`, Google/Outlook, JS/TS)
  - bulk-actions calendar-view (TS and JS where applicable)
- Removed state init from refs in timeline summaries:
  - `show-summaries-aggregates-for-resource-groups` now initializes with plain state, not `myEvents.current` during render.

### 3) Immutable updates (`react-hooks/immutability`)

- Rewrote direct mutations into immutable copies:
  - calendar sync toggles (`calendarData[calendarId].checked = ...`)
  - resource filter toggles (`selectedResources[key] = ...`, `tempFilters[key] = ...`, `participants[id] = ...`)
  - shared events update paths (replaced in-place event edits with object copies)
  - custom tooltip appointment status updates
  - recurring-dialog popup edits on `tempEvent` (JS/TS, calendar/scheduler)
  - bulk-actions update/delete flows for recurring and normal events (agenda/calendar/scheduler/timeline, JS/TS)

### 4) Effect-driven state writes (`react-hooks/set-state-in-effect`)

- Removed/rewired effects that synchronously set local state:
  - date range preset demos (`date-filtering-with-predefined-ranges`, `range-picker-popup-presets`) no longer call setter in mount effect
  - Google calendar sync view no longer flips hidden state in effect
  - recurring dialog bootstrapping effect removed where it only initialized internal selectors

### 5) Manual memoization preservation (`react-hooks/preserve-manual-memoization`)

- Adjusted TS datepicker header demo (`customizing-header`) by replacing problematic callback memoization pattern with a stable plain render function.

### 6) Exhaustive deps and cleanup

- Corrected callback dependency arrays in `customizing-events.jsx`.
- Removed now-unused imports after refactors (`useEffect`, `useRef`, etc.).

## Alignment strategy between JS and TS demos

- Applied the same refactor pattern to equivalent JS and TS demos wherever both existed.
- Kept behavior-aligned updates for:
  - sync-events demos
  - bulk-actions demos
  - recurring-event dialog demos
  - resource filtering demos
  - timeline summary and filter demos

## Notes

- The baseline-browser warning from tooling remains informational and unrelated to lint rule failures.
- No lint rules were disabled to pass checks.
