To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-jquery?tab=readme-ov-file#mobiscroll-jquery-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/jquery/eventcalendar/show-more-all-labels#).

## Demo description

Labels on the event calendar go hand in hand with the height of the event calendar rows (representing weeks). It is possible to render as many labels as fit and keep the row heights equal. The row height is liquid and determined by the height of the calendar.

If you would like to render all labels, then passing `labels: 'all'` will do just that. This can make the row heights variable.

Alternatively a maximum number of labels can be set by passing a number to the `labels` property of the `view.calendar` option.

If there are more events than the number of labels for a particular day, an "x more" label will help users list out all events for the day.

By default the width of the labels fill the day cells (`eventDisplay: 'fill'`) but alternatively `eventDisplay: 'exact'` can be used to display the labels with exact times.

# What this demo shows

- A desktop month view event calendar that displays event labels directly inside the day cells.
- **Event labels** Day cells with events show one or more labels, with different colors and styles used to distinguish all-day, multi-day, and timed events.
- **Label interaction** Clicking an event label selects it and highlights the selected label.
- **Row height behavior** In the default setup, the month view uses dynamic row heights so all labels remain visible within each week row.
- **Label rendering controls** A separate configuration panel next to the calendar lets users switch between `Fill` and `Exact` label rendering. `Fill` is selected by default and stretches labels across the available width, while `Exact` displays labels with exact times.
- **View switching** A second segmented control lets users switch between month view and week view, with month view selected by default.
- **Label count options** Users can choose between showing all labels, showing up to a specified maximum number of labels, or showing as many labels as fit based on the calendar height with equal row heights.
- **More events popover** When the visible label count is limited, extra events are hidden behind an `x more` label on the day cell. Clicking it opens a popover that lists the remaining events for that day.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Calendar header** The header shows the current month and year on the left, and month navigation arrows with a `Today` button between them on the right.

## Implementation instructions

- Use the `labels` option on `view.calendar` to control how many event labels appear in each day cell.
- Set `labels: 'all'` to render every label for the day. This allows the week row heights to grow dynamically based on content.
- Use `eventDisplay: 'fill'` to make event labels fill the available width of the day cell.
- Use `eventDisplay: 'exact'` to render labels with exact times instead of full-width labels.

## Best for

- **Monthly planning views** Showing multiple events directly in month cells when users need a compact overview of busy days.
- **Dense event calendars** Comparing how different label display strategies work when days can contain many all-day or timed events.
- **Responsive event visibility** Testing whether all labels, a fixed number of labels, or height-based label rendering works best for a given layout.
- **Interactive scheduling UIs** Supporting quick event inspection through selectable labels, `x more` indicators, and popovers.
- **Configurable calendar experiences** Giving users or teams control over month and week views and how event labels are rendered.
