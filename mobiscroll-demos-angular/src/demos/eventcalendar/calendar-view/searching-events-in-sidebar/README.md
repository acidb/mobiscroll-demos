To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-angular?tab=readme-ov-file#mobiscroll-angular-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/angular/eventcalendar/searching-events-in-sidebar#).

## Demo description

Inline search can be easily implemented with the help of a separate [agenda](https://demo.mobiscroll.com/angular/agenda/#) instance.
This example is relying on a single API endpoint for getting the data onto the primary calendar view and also for getting the filtered data based on the search terms.

[Events can be filtered in real time](https://demo.mobiscroll.com/angular/eventcalendar/resource-filtering-in-header#) so using an agenda view for the search results is an easy choice.
It provides all the necessary styling and advanced features that you might need to customize the experience.

Alternatively, search can be implemented in the header of the event calendar using a similar search box with an
[agenda listed in a popup](https://demo.mobiscroll.com/angular/eventcalendar/searching-events-in-popup#) instead of rendered inline.

## Implementation instructions

- Use an Eventcalendar in desktop month view as the primary calendar surface, and place a separate Agenda instance in the sidebar to present search results.
- Implement inline event search through the agenda instance, showing filtered matches in a popup-style result list below the search input.
- Load the main calendar data and the filtered search results from the same API endpoint, using the search term to request or derive the matching events.
- Reuse the shared event data so the month view and the agenda search results stay in sync.

## What this demo shows

- **Layout** A desktop month view Eventcalendar is shown with a search sidebar placed next to it.
- **Month view** The calendar displays a full monthly grid with event labels rendered directly inside the day cells.
- **Event labels** Days with events show one or more labels, with different label styles used for all-day, multi-day all-day, and timed events.
- **Event colors** Event labels use different colors to distinguish between event types or entries.
- **Event selection** Clicking an event label highlights the selected event.
- **Day hover state** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection** Clicking the empty area of a day cell selects that day and highlights the day number with a blue background.
- **Month navigation** The month can be changed by dragging the calendar left or right.
- **Header navigation** The header shows the current month and year on the left, with previous and next navigation arrows on the right.
- **Today action** A Today button between the navigation arrows returns the calendar to the current date.
- **Search sidebar** The sidebar contains a search input with placeholder text and a search icon.
- **Search results** Typing into the search input opens a popup below the field with matching events shown in an agenda-style list.
- **Agenda result rows** Each result shows a colored marker, the event title, and the event start and end time.
- **Grouped results** Matching events are grouped under their corresponding dates in the result list.
- **Empty state** If the search returns no matches, a "No events" message is shown below the search box.

## Best for

- **Busy event calendars** Interfaces where users need to find specific events quickly without leaving the main month view.
- **Employee scheduling** Workforce and shift planning tools where users search for people, absences, or schedule entries across a larger calendar.
- **Booking and reservations** Booking systems where users need both a visual monthly overview and a fast way to locate matching appointments.
- **Project and team planning** Planning tools where users search by keyword, event type, or participant while keeping the broader schedule visible.
- **Admin dashboards** Operational dashboards that need a calendar on one side and searchable event results on the other.
- **Multi-day event tracking** Use cases where overlapping, all-day, and multi-day events need to remain visible in the calendar while also being searchable in a list.
