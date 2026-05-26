To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/navigate-from-external-date-picker#).

## Demo description

This example demonstrates how can the Eventcalendar navigated externally. Here we have a two-pane layout with a Datepicker on the left and a Calendar on the right. Changing date on the Datepicker will trigger the date change on the Calendar.

The Datepicker updates the `selectedDate` option of the Calendar in its `onChange` event, while the Calendar updates the datepicker value from its `onSelectedDateChange` event.

## Implementation instructions

- Use a two-way sync pattern between the Datepicker and the Eventcalendar so either component can update the other.
- Call the Eventcalendar `navigate` method from the Datepicker change event to move the calendar to the selected date.
- Use the Eventcalendar `onSelectedDateChange` event to keep the Datepicker value in sync with the currently selected calendar date.
- In the JavaScript and jQuery implementations, update the Datepicker with its `setVal` method from the calendar event handler.

## What this demo shows

- This demo shows external navigation between a left-side date picker and a right-side month view event calendar in a two-pane desktop layout.
- **Layout** The date picker is displayed in a separate pane on the left, while the event calendar month view fills the right side.
- **External navigation** Selecting a date in the date picker updates the visible date on the event calendar.
- **Event labels** Days with events display event labels directly inside the month cells.
- **Label styling** Event labels use different visual styles to distinguish all-day events, multi-day all-day events, and timed events.
- **Color coding** Event colors help differentiate events in the month view.
- **Overflow handling** The number of visible event labels depends on the available height in each day cell.
- **More events popover** When not all events fit in a day cell, an `x more` link appears and opens a popover with the hidden events.
- **Event selection** Clicking an event label highlights the selected event.
- **Hover state** Hovering a day cell highlights the day number in the top-right corner with a gray background.
- **Date selection** Clicking the empty area of a day cell selects that day and highlights the day number with a blue background.
- **Swipe navigation** The event calendar supports month navigation by dragging left or right.
- **Calendar header** The event calendar header shows the current month and year, previous and next navigation arrows, and a Today button that returns to the current date.
- **Date picker header** The date picker header shows the current month and year with previous and next navigation arrows.

## Best for

- **External calendar controls** Apps where users need to navigate the event calendar from a separate date picker or secondary navigation surface.
- **Desktop scheduling layouts** Interfaces that use a two-pane layout to keep date navigation and event overview visible at the same time.
- **Event-heavy month views** Use cases where day cells need to show multiple event labels, color coding, and overflow handling in a compact space.
- **Selection-driven workflows** Scheduling and planning experiences where users need clear hover, selection, and active-event states while browsing the calendar.
- **Custom navigation patterns** Products that need to keep multiple calendar-related components in sync when the visible date changes.
