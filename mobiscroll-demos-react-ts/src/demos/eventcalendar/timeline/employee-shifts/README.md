To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/employee-shifts#).

## Demo description

Use the summary mode of the timeline view with `eventDisplay: 'fill'` that can be configured under the `timeline` settings of the `view` option.

This will give you summarized daily events similar to the [event calendar labels](https://demo.mobiscroll.com/react/eventcalendar/event-labels#) where each event is printed under the appropriate day, time slot (shift) for the appropriate resource one after the other.

Build a custom add/edit dialog with the necessary fields. The event dialog can be fully custom as seen in this [CRUD example](https://demo.mobiscroll.com/react/scheduler/create-read-update-delete-CRUD#).

Customize the dialog header with a custom header renderer function using the `renderHeader` option.

## Implementation instructions

- Use the timeline view in summary mode with `eventDisplay: 'fill'` to render shift events within resource rows and named slots.
- Configure the timeline to show work days only by limiting the visible day range with the appropriate `startDay` and `endDay` settings.
- Define the Morning and Afternoon shift buckets with the `slots` option.
- Use `onEventClick` for opening the edit flow, and use the event creation flow for opening the add dialog when users create a shift from an empty slot.
- Build a custom add/edit popup with fields for start time, end time, and notes.
- Use the `responsive` option to adapt the dialog layout and behavior between desktop and smaller screens.
- Customize the dialog header so it reflects whether the user is adding a new shift or editing an existing one.
- Open a time picker from the start and end fields, configured for selecting the shift time range.
- For deletion, implement either a confirmation step or an undo-based flow that removes the shift immediately, shows a toast or snackbar message, and allows restoration.

## What this demo shows

- A weekly timeline-based shift planner that displays employees as resource rows and shows only work days.
- **Shift structure** Each day is divided into two named slots, Morning and Afternoon, instead of showing shifts by exact position on a time grid.
- **Resources** Each row represents an employee, and the events shown in that row are the scheduled shifts for that employee.
- **Visual distinction** Each employee has an assigned color, and their shifts use that color in the timeline.
- **Editing shifts** Clicking an existing shift opens a popup with an edit form where the shift start and end times can be changed and notes can be added.
- **Deleting shifts** The edit popup includes a delete action that removes the shift immediately, then shows a snackbar confirmation with an Undo action to restore it.
- **Creating shifts** Double-clicking an empty timeline slot opens a popup for adding a new shift.
- **Add form** The create popup lets users set the shift start and end times and add notes before saving.

## Best for

- **Employee shift planning** Weekly rota and shift scheduling interfaces where employees are shown as resources.
- **Work-week scheduling** Setups that focus on working days only rather than a full seven-day timeline.
- **Named-shift layouts** Scenarios where shifts are organized into fixed slots such as Morning and Afternoon instead of being positioned by exact time.
- **Color-coded teams** Calendars where resource-based color coding helps users quickly identify which shifts belong to which employee.
- **Direct calendar editing** Applications where users need to create, update, delete, and restore shifts directly from the calendar UI.
