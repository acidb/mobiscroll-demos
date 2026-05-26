To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-javascript?tab=readme-ov-file#mobiscroll-javascript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/javascript/eventcalendar/colored-cell-background#).

## Demo description

Color the background of the days with the `colors` option.
You can specify backgrounds as `exact dates`, `ranges` or set up `recurring rules`. The `recurring` object works the [same way as for the events](https://demo.mobiscroll.com/javascript/eventcalendar/recurring-events#).

Use the 

`onPageLoading`
 lifecycle event to color backgrounds runtime. You can [learn about lifecycle events](https://demo.mobiscroll.com/javascript/eventcalendar/event-hooks#) and places where to drop logic to customize the experience.

- **Want to color time ranges & days in the scheduler?** [Learn how to do it &#8594;](https://demo.mobiscroll.com/javascript/scheduler/colored-cell-background#)

## Related demos

- [Learn how to do it &#8594;](https://demo.mobiscroll.com/javascript/scheduler/colored-cell-background#)

## Implementation instructions

- Use the `colors` option to apply colored backgrounds to day cells in the month view.
- Configure backgrounds with exact dates, date ranges, or recurring rules depending on how the marked days are defined.

## What this demo shows

- A desktop month-view event calendar where predefined day cells have pale colored backgrounds behind the events.
- **Colored day cells** Day backgrounds are used as visual markers while keeping event labels readable on top.
- **Event labels** Days with events display labels directly inside the month cells.
- **Event styling** Labels use different styles and colors to distinguish all-day events, multi-day all-day events, and events with specific start and end times.
- **Overflow handling** The number of visible event labels depends on the available cell height.
- **More events popover** When a day has more events than can be shown in the cell, an `x more` indicator appears and opens a popover with the hidden events on click.
- **Event selection** Clicking an event label highlights the selected event.
- **Hover state** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection** Clicking the empty area of a day cell selects that date and highlights the day number with a blue background.
- **Month navigation** The calendar supports changing months by dragging left or right.
- **Header** The top-left side shows the current month and year, while the top-right side includes previous and next navigation arrows with a `Today` button between them.

## Best for

- **Holidays and observances** Highlighting public holidays, company holidays, and other special dates directly in the month grid.
- **Marked dates** Calling attention to predefined days that need visual emphasis without blocking event readability.
- **Calendar overview screens** Month views where background cues help people scan for important days while still keeping event labels visible.
