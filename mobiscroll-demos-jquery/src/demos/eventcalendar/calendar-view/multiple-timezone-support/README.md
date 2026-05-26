To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-jquery?tab=readme-ov-file#mobiscroll-jquery-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/jquery/eventcalendar/multiple-timezone-support#).

## Demo description

If the context requires users being able to change the timezone on the fly, you can add a custom dropdown with the desired timezones to the event calendar header. This can be of course placed externally to the calendar as well, eg. setting page.

Set the timezone of the incoming data through the `dataTimezone` - eg. `'utc'`,  and set the display timezone through the `displayTimezone` - eg. `'America/Los_Angeles'`

## Implementation instructions

- Set the timezone of the incoming event data with `dataTimezone` such as `'utc'`.
- Set the calendar display timezone with `displayTimezone` such as `'America/Los_Angeles'`.
- Render the custom timezone selector in the calendar header with the `renderHeader` function.
- Update the selected `displayTimezone` value from the dropdown so the month view re-renders the events in the chosen timezone.

## What this demo shows

- A monthly Eventcalendar view where the same event data can be shown in different display timezones.
- **Day cells**: Days with events show event labels directly inside the month grid.
- **Event labels**: Each label includes a small colored marker on the left, the event title, and the event start time at the end.
- **Event interaction**: Hovering or selecting an event highlights it and shows resize handles on both sides.
- **Day details**: Clicking a day cell that contains events selects the day and opens a popover with that day's event list.
- **Event creation**: Dragging on a day cell creates a new event.
- **Day hover state**: Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection**: Clicking the empty area of a day cell selects the day and highlights the day number with a blue background.
- **Header navigation**: The header shows the current month and year on the left, with previous and next month buttons plus a Today button on the right.
- **Timezone switcher**: A custom dropdown in the header lets the user choose from different timezone options.
- **Timezone behavior**: Changing the selected timezone rearranges the event labels in the month view based on the chosen display timezone.

## Best for

- **Global scheduling**: Apps that need to show the same events for users across multiple countries or regions.
- **Event planning**: Event management, conference, webinar, or attendee-facing calendars where local time presentation matters.
- **Distributed teams**: Business calendars used by remote teams working across different timezones.
- **Travel and coordination**: Planning tools where users need to review schedules in another timezone before confirming plans.
- **Timezone preview**: Products that let users switch the calendar display timezone on the fly from the calendar UI or from external settings.
- **QA and validation**: Testing scenarios where teams need to verify that event start and end times shift correctly when the display timezone changes.
