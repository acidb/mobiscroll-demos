To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-vue-ts?tab=readme-ov-file#mobiscroll-vue-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/vue/eventcalendar/customize-label-look-and-feel#).

## Demo description

You can customize the look of the labels and show additional content besides the `event.title`. There are two approaches you can take:

- **Only customize the content of the labels** - For this you will want to use the `calendarEventContent` template. The `color` and positioning of the label will be handled by the calendar. The `title` and any other custom fields you want to show in the template is your responsibility.
- **Fully customize how the labels look** *(like in this example)* - Use the `calendarEvent` template. All original event fields along with computed fields like `isMultiDay`, `lastDay` can be leveraged for constructing the template. With the `calendarEvent` template you will have full control over how the labels are styled including things like `color`, `title` and any custom fields.

## Implementation instructions

- For light customization, use the calendar's event content render hook:
  - In React and JavaScript/jQuery, use `renderCalendarEventContent`.
  - In Angular, use `calendarEventContentTemplate`.
  - In Vue, use the `calendarEventContent` template.
- For full control over label appearance, use the calendar's full event render hook:
  - In React and JavaScript/jQuery, use `renderCalendarEvent`.
  - In Angular, use `calendarEventTemplate`.
  - In Vue, use the `calendarEvent` template.

## What this demo shows

- A desktop month view event calendar with a full month grid layout.
- **Event labels** Day cells with events display the events as labels directly inside the month grid.
- **Custom label rendering** The demo shows both approaches: labels with custom content inside the default calendar label layout, and labels with a fully customized visual appearance.
- **Label styling** Labels use different colors and custom styling to distinguish between events.
- **Overflow handling** The number of visible labels in each day cell is limited by the available vertical space.
- **More events popover** When not all events fit in a day cell, the calendar shows an `X more` link that opens a popover with the hidden events for that day.
- **Event selection** Clicking an event label highlights the selected event and shows a toast at the bottom center with the event title.
- **Hover state** Hovering a day cell highlights the day number in the top-right corner with a gray background.
- **Date selection** Clicking the empty area of a day cell selects the day and highlights its day number with a blue background.
- **Month navigation** The month view can be changed by dragging the calendar left or right.
- **Header controls** The header shows the current month and year on the left, with previous and next navigation arrows plus a `Today` button on the right.

## Best for

- **Branded calendar experiences** Products that need event labels to match a custom visual style instead of the default calendar appearance.
- **Event-rich month views** Month grids where events need to stay visible and scannable directly inside day cells.
- **Category-based event display** Use cases where color and custom label design help users quickly distinguish event types, statuses, or teams.
- **Richer event summaries** Calendars that need to show more than the event title, such as custom fields or additional context inside the label.
- **Space-constrained month layouts** Interfaces where built-in overflow handling and the `X more` popover help keep dense days usable.
- **Interactive planning workflows** Scheduling and planning experiences where users need clear event selection, day selection, and fast month-to-month navigation.
