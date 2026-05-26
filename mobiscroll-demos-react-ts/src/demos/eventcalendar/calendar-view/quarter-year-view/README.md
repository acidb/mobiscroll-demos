To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/quarter-year-view#).

## Demo description

Besides the single month view, the calendar can be configured to render multiple months or a year. Controlled through the `calendar.type` and `calendar.size` properties of the `view` option.

Depending on the height of the parent container the calendar is rendered in, the header that can be used for navigation is sticky at the top while the months are vertically scrollable.

## Implementation instructions

- Configure the multi-month and year layouts through the `calendar.type` and `calendar.size` properties on the `view` option.

## What this demo shows

- An event calendar with a segmented control in the header that lets the user switch between quarter view and year view.
- **Segmented control placement** — positioned in the center of the header, between the month/year navigation label (quick navigation picker) on the left and the prev/next arrows with a Today button on the right.
- **Quarter view** — renders the three months of the current quarter as a compact multi-month grid.
- **Year view** — renders all twelve months of the current year in a single scrollable layout.
- **Sticky header** — the navigation bar and segmented control stay fixed at the top while the calendar months scroll vertically beneath it.
- **Event dots** — days that have at least one event show a small dot below the day number, giving a quick visual signal of activity.
- **Day popover** - clicking a day with events opens a popover above the day cell that lists the events for that date.
- **Popover event styling** - each listed event has a colored vertical marker on the left to help distinguish event categories.
- **Hover state** - hovering a date highlights the day number with a gray background.
- **Selection state** - clicking a date selects it and highlights the day number with a blue background.
- **Header** - shows the current year on the left, a `Quarter` / `Year` view switcher in the center, and previous, Today, and next navigation controls on the right.

## Best for

- **High-level event overviews** — giving users a bird's-eye view of activity across a quarter or full year, where the exact time of each event matters less than seeing which days are busy.
- **Aggregate and summary views** — dashboards or reports where totals, counts, or status indicators are shown per day, and users need to scan a large date range at once.
- **Planning and scheduling workflows** — letting users spot free stretches or busy periods across a quarter or year before drilling into a specific day or week.
