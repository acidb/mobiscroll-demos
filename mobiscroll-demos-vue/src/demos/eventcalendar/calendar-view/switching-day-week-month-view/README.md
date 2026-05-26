To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-vue?tab=readme-ov-file#mobiscroll-vue-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/vue/eventcalendar/switching-day-week-month-view#).

## Demo description

Dynamically switch views within one calendar instance. Use a UI control to let users do the switching or do it programmatically. This example features a segmented component inside the header, but the live option changes can be invoked from anywhere.

Switch between a month view with a monthly agenda, a week view with a weekly agenda and daily event list.

Thanks to property binding and all option changes are live and propagate accordingly.

- **Interested in the agenda?** [How to render an agenda instead of a calendar &#8594;](https://demo.mobiscroll.com/vue/agenda/daily-weekly-monthly-annual-agenda#)

## Related demos

- [How to render an agenda instead of a calendar &#8594;](https://demo.mobiscroll.com/vue/agenda/daily-weekly-monthly-annual-agenda#)

## Implementation instructions

- Add a segmented control to the header and use it to switch between the available views.
- Use the `setOptions()` method to update the calendar instance dynamically when the selected view changes.

## What this demo shows

- This demo switches a single Eventcalendar instance between month, week, and day layouts from a segmented control in the header.
- **Header control** The center area of the header contains a segmented button for switching between month, week, and day views.
- **Month view** The default layout shows a mobile month calendar at the top and a monthly agenda below it.
- **Month view** Dates that have events are marked with a small indicator in the day cell.
- **Monthly agenda** Events are grouped by date in a vertical list, with sticky date headers as the user scrolls.
- **Month and agenda sync** Scrolling the agenda updates the selected date in the month calendar so it stays aligned with the visible event group.
- **Date selection** Clicking a date in the month calendar navigates the agenda to that date and reveals its events.
- **Week view** Switching to week view shows a week calendar at the top and a weekly agenda below it.
- **Day view** Switching to day view shows a daily event list for the selected date.
- **Event interaction** Clicking an event in the agenda displays a toast with the event title.

## Best for

- **Multi-level schedule browsing** Apps where users need to move between month overview, week planning, and day-level details without leaving the same screen.
- **Agenda-driven navigation** Interfaces that combine calendar-based date picking with a synchronized event list.
- **Mobile scheduling flows** Touch-friendly experiences where a header control is a simple way to switch between calendar scopes.
- **Personal and team calendars** Event, appointment, shift, or class schedules where users often zoom from a broader timeline into a specific week or day.
- **Operational planning** Use cases where users need both a quick overview of upcoming activity and a detailed list of events for the selected date.
