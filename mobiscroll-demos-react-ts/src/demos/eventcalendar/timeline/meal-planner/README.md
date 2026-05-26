To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/meal-planner#).

## Demo description

Use the [timeline summary mode/event listing](https://demo.mobiscroll.com/react/timeline/event-listing#) to create a weekly meal planner. Meal types are represented as resources with a [custom template](https://demo.mobiscroll.com/react/scheduler/custom-resource-header-template#). Events are the actual meals with custom properties, like calories or notes.

The add/edit form shows up in a custom popover that opens on double click for meal creation and on click for editing.

The popover header is customized with a custom header renderer function using the `renderHeader` option.

By default the second dimension of the timeline (vertical axis) is reserved for resources, however it can be configured and used as "time slots" if the times are not relevant.

## Implementation instructions

- Use the timeline view with `type: 'week'` to display a weekly planning grid with resources as rows.
- Set `eventDisplay: 'fill'` so meal events fill the full timeline cell instead of rendering as timed blocks.
- Configure resources for the meal types and assign resource colors so events inherit the visual distinction for each row.
- Use `onEventClick` to open the edit popup for existing meals, and use `onEventCreate` to open the add flow when a new meal is created from the timeline.
- Open meal creation from a double click on an empty timeline cell so the new event is tied to the selected day and meal resource.
- Use the `responsive` option to adapt popup behavior and layout between desktop and smaller screens.
- Customize the popup header based on whether the user is adding or editing a meal.
- Build the popup form with Mobiscroll input components such as Segmented, Input, Textarea, and Button, and bind them to meal fields like name, calories, and notes.
- Implement deletion with an undoable flow by removing the event, showing a toast or snackbar message, and restoring the meal if the user chooses Undo.

## What this demo shows

- Displays a weekly timeline-based meal planner where days are shown horizontally and meal types are shown as resource rows.
- **Resources** Each resource row represents a meal type, and each meal type has its own color so related events are easy to distinguish.
- **Events** Events represent the planned food item for a specific day and meal, using the resource color across the timeline cell.
- **Editing** Clicking an existing meal opens a popup with an edit form for updating the meal name, calories, and notes.
- **Deleting** The edit popup includes a delete action that removes the selected meal immediately, then shows a snackbar confirmation with an Undo action to restore it.
- **Creating** Double-clicking an empty timeline cell opens a popup for creating a new meal for the selected day and meal row.
- **Form behavior** The create popup lets users enter the meal name, calories, and notes before saving the new event.

## Best for

- **Meal planning** Weekly meal planning workflows for restaurants, schools, kindergartens, nursing homes, and similar institutions.
- **Day-based planning** Scenarios where items need to be planned by day without showing exact start and end times.
- **Resource-based organization** Setups where color-coded meal categories or resource rows make planned items easier to scan.
- **Direct calendar editing** Applications that need users to add, edit, delete, and restore planned items directly from the calendar UI.
