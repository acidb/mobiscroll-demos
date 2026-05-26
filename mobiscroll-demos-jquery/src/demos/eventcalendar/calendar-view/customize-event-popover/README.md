To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-jquery?tab=readme-ov-file#mobiscroll-jquery-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/jquery/eventcalendar/customize-event-popover#).

## Demo description

The events listed in the popover can be customized in two ways:

- **Full event customization** *(like in this example)* - The calendar handles the rendering of events in the correct order. Styling the content, colors and everything else is your responsibility.
- **Content customization** - The calendar prints the `start` and `end` times, `allDay` and sets the appropriate `color`. Content like title and other fields can be shown.

You can provide styling to the `title` field and any other custom fields like `description`, `location`, `participants` ...

Pass a rendering function to the renderPopoverEventContent option. All original event fields along with computed fields like `isMultiDay`, `lastDay` are passed to the function. For a fully custom event rendering use the renderPopoverEvent option.

If you add custom markup you will want to add styling too. Use the `popoverClass` under the `view` option to tell the calendar what CSS class it should append to the popover container so that you can write specific CSS rules.

## Implementation instructions

- Use the `renderPopoverEventContent` option to pass a custom rendering function for the event content shown inside the popover.
- If you need full control over how each popover event is rendered, use `renderPopoverEvent` instead.
- Use `popoverClass` under the `view` option to append a custom CSS class to the popover container and target it with specific styling rules.

## What this demo shows

- A mobile-style month event calendar where days with events are marked with a small indicator in the day cell.
- **Event labels** Days with scheduled events show one or more event labels directly in the cell.
- **Event styling** Event labels use different visual styles to distinguish between event types.
- **Event selection** Clicking an event label highlights the selected event.
- **Day hover state** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection** Clicking an empty area of a day cell selects that day and highlights the day number with a blue background.
- **Tooltip trigger** Hovering an event opens a custom tooltip positioned below the hovered event.
- **Tooltip header** The tooltip header uses the event color and shows the patient's name, age, and the event start and end time.
- **Tooltip details** The tooltip body includes `Status`, `Reason for visiting`, and `Location` rows.
- **Status action** The status row shows whether the appointment is confirmed and includes either a `Confirm appointment` or `Cancel appointment` action. Triggering the action closes the tooltip and shows a toast message with the updated status.
- **Patient action** The tooltip footer includes a gray `View patient` button that shows a toast message when clicked.
- **Delete action** The tooltip footer includes a red `Delete appointment` button that removes the event.
- **Calendar navigation** The calendar supports left and right drag navigation to move between months.
- **Header controls** The header shows the current month and year, previous and next navigation arrows, and a `Today` button for returning to the current date.

## Best for

- **Custom day popovers** Showing more than the default event label when users open a day from a month view.
- **Assigned work and people-based scheduling** Displaying assignees, avatars, and event ownership directly in the popover list.
- **Actionable event lists** Adding buttons or other controls to day-level event previews so users can trigger follow-up actions from the popover.
- **Compact month browsing** Letting users scan a month quickly, spot days with events, and open a lightweight detail view only when needed.
- **Mobile-first calendar experiences** Supporting touch-friendly month navigation and day-based drill-down on smaller screens.
