To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react?tab=readme-ov-file#mobiscroll-react-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/day-cell-aggregate-information#).

## Demo description

This demo showcases an advanced event calendar implementation with extensive day cell customization using the `renderCalendarDay` , which completely overrides the default cell rendering.

The calendar provides a comprehensive visual overview of scheduling density and workload management through custom 
aggregate data visualization with stress-level indicators, weather information, and color-coded backgrounds.

This approach prevents the calendar from rendering individual event labels, allowing full control over the cell content.
Each day cell displays aggregate information calculated from the actual events, received by the custom template.

Users can navigate smoothly from the monthly or weekly overview to a detailed daily schedule by clicking on a day cell, 
which highlights the selected day and loads all events. A convenient back button allows a quick return to the previous view.
Each cell also includes an add button for creating new appointments, and events can be added by dragging or clicking in the week or day view.

## Implementation instructions

- Use the `renderCalendarDay` option to fully override the default day cell rendering and display custom daily summary content instead of individual event labels.

## What this demo shows

- A month-based event calendar with fully customized day cells that show daily summary content instead of individual event labels.
- **Day cell content** Each day cell shows the day name and date, an optional mood or status emoji, a weather icon with temperature, and separate counts for Internal mtgs and Client mtgs.
- **Color coding** Days with no events use a white background, days with 1-2 events use green, days with 3-4 events use orange, and days with more than 4 events use red.
- **Hover behavior** Hovering a day cell highlights it.
- **Add action** Each day cell includes a circular add button in the lower-right corner to suggest creating a meeting or event for that date.
- **Day view drill-down** Clicking a day cell opens a daily scheduler for the selected date.
- **Daily scheduling** In the daily scheduler, users can create time-specific events by clicking or dragging.
- **Custom day header** The daily scheduler header repeats the daily summary information from the month view and includes a centered Back to calendar button with an X icon that returns to the month view.
- **Header layout** The top header shows the current month and year on the left, a segmented Calendar or Week view switcher in the center, and previous, Today, and next navigation controls on the right.
- **Week view** Switching to Week view opens a weekly scheduler for the current week, with a weekly calendar in the header and a weekly scheduler below it.
- **Weekly summaries** The weekly calendar header uses the same customized daily summary cells as the month view.

## Best for

- **Workload overview** Reviewing scheduling density across the month with color-coded daily summaries instead of individual event labels.
- **Meeting-heavy planning** Tracking internal and client meeting counts side by side for each day.
- **Operational context** Combining schedule volume with supporting signals like weather and mood or status indicators in a single calendar view.
- **Progressive drill-down** Starting from a high-level monthly overview and opening day or week scheduling views when time-specific event management is needed.
