To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-jquery?tab=readme-ov-file#mobiscroll-jquery-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/jquery/timeline/truck-transport-planning-and-dispatch#).

## Demo description

Managing a fleet of delivery trucks means constantly matching incoming jobs against available vehicles — checking cargo capacity, time windows, and maintenance schedules, all at once. This demo brings that workflow onto an interactive timeline where dispatchers can drag unscheduled jobs from a sidebar directly onto a truck row without leaving the screen.

To enable external drops from the sidebar, set `externalDrop` to `true` on the timeline, and initialize each job card in the sidebar using the `draggable` component with `dragData` pointing to the full job object.

When the dispatcher starts dragging a job, the `onEventDragStart` event fires and drives a real-time resource validation pass: trucks with insufficient cargo capacity or a conflicting scheduled trip are filtered out of the resource list, and the grid is locked outside the job's pickup-to-drop-off window using the `invalid` option. This gives the dispatcher an immediate visual map of valid drop targets.

A successful drop is confirmed via :::framework{only="vue"} `event-created` ::: :::framework{only="angular"} `onEventCreated` ::: :::framework{only="react"} `onEventCreated` ::: :::framework{only="javascript"} `onEventCreated` ::: :::framework{only="jquery"} `onEventCreated` :::, which removes the job from the sidebar and marks it as scheduled. If the drop lands in an invalid position, :::framework{only="vue"} `event-create-failed` ::: :::framework{only="angular"} `onEventCreateFailed` ::: :::framework{only="react"} `onEventCreateFailed` ::: :::framework{only="javascript"} `onEventCreateFailed` ::: :::framework{only="jquery"} `onEventCreateFailed` ::: snaps the job to the first free slot within the time window instead of rejecting the drop outright. The same snap logic runs for existing event moves via :::framework{only="vue"} `event-update-failed` ::: :::framework{only="angular"} `onEventUpdateFailed` ::: :::framework{only="react"} `onEventUpdateFailed` ::: :::framework{only="javascript"} `onEventUpdateFailed` ::: :::framework{only="jquery"} `onEventUpdateFailed` :::.

The trucks are grouped into capacity-tier categories and rendered using @if (pagemode == PageMode.Angular) { `resourceTemplate` } else if (pagemode == PageMode.Vue) { `resource` } else { `renderResource` }, which shows each truck's name, license plate, and a colour-coded maintenance-status dot. Each truck has a parallel "actual" sub-row that tracks live trip progress and is refreshed automatically every 60 seconds.

- **Looking for a simpler external drag & drop example?** [Check out the external drag & drop example &#8594;](https://demo.mobiscroll.com/jquery/timeline/external-drag-drop-sortable-dragula#)

## Related demos

- [External drag & drop &#8594;](https://demo.mobiscroll.com/jquery/timeline/external-drag-drop-sortable-dragula#)
- [Drop assignee on event from list &#8594;](https://demo.mobiscroll.com/jquery/timeline/drop-assignee-on-event-from-list#)
- [Resource filtering & search &#8594;](https://demo.mobiscroll.com/jquery/timeline/resource-filtering-search#)
- [Work order scheduling &#8594;](https://demo.mobiscroll.com/jquery/timeline/work-order-scheduling#)

## What this demo shows

- The demo shows a full-page truck dispatch and planning console that combines an unscheduled job queue with a resource timeline.
- **Job queue** The left sidebar lists unscheduled transport jobs in a scrollable queue, grouped by date under sticky day headers such as "Thu, 22 May".
- **Job cards** Each job card shows the pickup and delivery addresses, the pickup-to-drop time window, and the cargo weight in tonnes.
- **Scheduling flow** Jobs disappear from the sidebar after they are successfully assigned to a truck on the timeline.
- **Timeline layout** The main panel uses a timeline Eventcalendar view with trucks shown as resources.
- **Resource details** Each truck row displays the truck name, license plate, and a colour-coded status dot for operational, maintenance planned, or in maintenance states.
- **Resource grouping** Trucks are grouped under collapsible capacity tiers such as 3.5 t, 7 t, 12 t, 20 t, and 24 t.
- **Actual rows** Each truck includes a second, indented actual sub-row rendered in a lighter style for live trip progress.
- **Toolbar** A custom toolbar above the timeline includes a date-range label button, a segmented status filter, zoom controls with minus and plus buttons, and a Now button.
- **Date range selection** The date-range button opens a range picker popup for changing the visible planning window.
- **Status filtering** The segmented control filters the visible events by Scheduled, In Progress, and Completed states.
- **Zooming** The zoom slider changes the timeline across multiple detail levels, from broader 4-hour cells down to finer 15-minute cells.
- **Event styling** Timeline events are colour-coded by status, such as blue for scheduled, orange for in progress, and grey for completed.
- **Event content** Planned events show the route between the pickup and delivery locations together with a Planned badge.
- **Live progress display** In-progress trips on the actual sub-row show a pulsing In progress label.
- **Drag validation** When a job is dragged from the sidebar, trucks that cannot take the job because of capacity limits or time conflicts are hidden from the resource list.
- **Invalid ranges** During drag, invalid time ranges are greyed out so only valid drop targets remain visible on the timeline.
- **Successful drop** Dropping a job onto a valid slot adds it to the timeline and confirms the action with a toast message.
- **Auto-snap behavior** Dropping onto an invalid slot snaps the job to the nearest available valid slot within the allowed window when possible.
- **Failure handling** If no valid slot can be found, the demo shows an error toast instead of placing the job.
- **Actual event details** Clicking an actual-progress event opens a toast with delay and elapsed or arrival information for the transport.

## Best for

- **Truck dispatching** Planning and assigning incoming transport jobs across a fleet of trucks from a single scheduling screen.
- **Logistics operations** Managing deliveries where dispatchers need to balance cargo capacity, time windows, and vehicle availability at the same time.
- **Constraint-based scheduling** Evaluating valid assignments quickly when jobs can only be placed on resources that meet size and timing requirements.
- **Live operations visibility** Showing both the scheduled plan and the actual trip progress in the same timeline view.
- **Large resource sets** Working with bigger fleets where drag-time filtering helps narrow the visible list down to valid trucks only.
