To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-jquery?tab=readme-ov-file#mobiscroll-jquery-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/jquery/eventcalendar/property-booking-calendar#).

## Demo description

When keeping records of bookings, the event calendar with exact label displays can come in handy. The labels 
accurately mark the exact start (e.g. 14:00) and end times (e.g. 11:00) of bookings, consolidating all booking 
records in a single, clear view.

By combining the `eventDisplay: 'exact'` setting under the `view` option with customizable `renderCalendarEventContent` , you can tailor the calendar to your specific needs. This allows you to create an efficient and user-friendly booking planning UI, ensuring all your bookings are easily managed and clearly displayed.

## Implementation instructions

- Use the Eventcalendar month view and set `eventDisplay: 'exact'` inside the `view` configuration so labels reflect the reservation timing more precisely inside the day cells.
- Customize the reservation label content with `renderCalendarEventContent` or the framework-specific calendar event content template/slot to display exact start and end times.
- Prevent overlapping reservations by adding validation before saving a new event and showing feedback when the selected time range conflicts with an existing booking.

## What this demo shows

- A desktop month view event calendar for reservation tracking, where bookings are shown directly inside the day cells as labels.
- **Event labels** Labels show the exact booking start and end times, such as `14:00` for check-in and `11:00` for check-out.
- **Event labels** Labels can use different styles to distinguish different booking or event types.
- **Event selection** Clicking a label selects it and highlights the selected reservation.
- **Cell hover state** Hovering a day cell highlights the day number in the top-right corner and also highlights the events in that cell.
- **Day selection** Clicking empty space in a day cell selects that day and highlights the day number with a blue background.
- **Creating reservations** Double-clicking empty space or dragging across empty space creates a new event.
- **Overlap validation** If a new reservation would overlap an existing one, the calendar shows a toast message indicating that reservations cannot overlap in the same time period.
- **Header navigation** The header shows the current month and year on the left.
- **Header navigation** Previous and next month navigation arrows appear on the right, with a `Today` button between them for jumping back to the current date.

## Best for

- **Accommodation booking** Room, property, and short-stay booking interfaces where users need to see reservations directly in a month grid.
- **Reservation management** Booking systems that need exact start and end times displayed on the reservation labels, not just all-day occupancy.
- **Operational overview** Teams that need a single monthly view to review existing bookings, spot availability, and keep reservation records organized.
- **Service scheduling** Reservation-style use cases where bookings must be easy to distinguish by type through custom label styling.
