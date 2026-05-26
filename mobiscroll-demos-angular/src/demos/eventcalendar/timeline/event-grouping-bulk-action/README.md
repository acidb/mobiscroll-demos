To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-angular?tab=readme-ov-file#mobiscroll-angular-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/angular/timeline/event-grouping-bulk-action#).

## Demo description

When managing a large volume of events across multiple clients and time periods, handling items one by one quickly becomes inefficient.
Users often need to move entire sets of related tasks together, not individual events. To support this, grouping and bulk interaction are essential.

The starting point is being able to look at the same dataset through different lenses. The demo supports switching between an assignee view, where each row represents a person responsible for the work, and a work type view, where each row represents a task category. A segmented control in the header allows adjusting the time granularity of the timeline while keeping a full year in view, enabling users to switch between quarterly, monthly, or weekly breakdowns. The view selector, grouping toggle, and segmented control are all rendered via the [headerTemplate](https://docs.mobiscroll.com/angular/eventcalendar/timeline#template-headerTemplate)
option, keeping the controls integrated into the timeline header. The @if (pagemode == PageMode.Angular) { [resourceTemplate option](https://docs.mobiscroll.com/angular/eventcalendar/timeline#template-resourceTemplate) } else if (pagemode == PageMode.Vue) { [resource slot](https://docs.mobiscroll.com/angular/eventcalendar/timeline#slot-resource) } else { [renderResource function](https://docs.mobiscroll.com/angular/eventcalendar/timeline#renderer-renderResource) } adapts the resource column accordingly, displaying employee avatars and job titles in assignee view, and work type color indicators in type view.

Once the right perspective is selected, individual events are not rendered one by one. Using the [eventTemplate](https://docs.mobiscroll.com/angular/eventcalendar/timeline#template-eventTemplate)
option, related tasks are automatically grouped into consolidated blocks per client and per quarter. These blocks can be expanded to reveal the individual tasks inside, or collapsed to keep the timeline readable at scale.

With grouping in place, bulk interaction becomes natural. An entire grouped block can be dragged along the timeline, moving all underlying events simultaneously.
The system calculates the time delta and applies it uniformly to every event in the group.
At the same time, individual tasks within a group remain accessible and can be edited through the edit button, which opens a range picker to update the event dates.
Because both views are projections of the same event store, a change made in one view is immediately reflected in the other.
