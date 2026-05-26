To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-jquery?tab=readme-ov-file#mobiscroll-jquery-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/jquery/eventcalendar/customizing-header#).

## Demo description

You can customize how the header of the event calendar looks and how the components are arranged. Besides that you can also add custom functionality, like a segmented control that lets people switch between calendar and scheduler.

Use the `renderHeader` option for passing a custom header layout. There are predefined components - shorthands if you will - that can be used to assemble the header:

- **Navigation component** - `&lt;div mbsc-calendar-nav&gt;&lt;/div&gt;`. Use the `.md-header-filter-controls` CSS class for custom overrides.
- **Today button** - `&lt;button mbsc-calendar-today&gt;&lt;/button&gt;`. Use the `.md-header-filter-today` CSS class for custom overrides.
- **Previous month button** - `&lt;button mbsc-calendar-prev&gt;&lt;/button&gt;`. Use the `.md-header-filter-prev` CSS class for custom overrides.
- **Next month button** - `&lt;button mbsc-calendar-next&gt;&lt;/button&gt;`. Use the `.md-header-filter-next` CSS class for custom overrides.

For changing the order the controls are laid out, you only need to set up the `renderHeader`. This example sets a consistent order and layout across all themes and shows a custom control at the far right end.

**Overriding the order for specific themes**

For a custom order on a theme to theme basis, you will need to use a little CSS. [Flex layout](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) makes reordering easy. It's just a matter of setting the order in CSS. For material use the `.mbsc-material`, for windows the `.mbsc-windows` prefix and for iOS it is `.mbsc-ios` class. Eg.:

```
.mbsc-material .md-header-filter-prev { order: 1; }
.mbsc-material .md-header-filter-next { order: 2; }
.mbsc-material .md-header-filter-controls { order: 3; }
.mbsc-material .md-header-filter-today { order: 4; }
```

- **Want to add a filter to the header?** [Check out the next example &#8594;](https://demo.mobiscroll.com/jquery/eventcalendar/resource-filtering-in-header#)

## Related demos

- [Check out the next example &#8594;](https://demo.mobiscroll.com/jquery/eventcalendar/resource-filtering-in-header#)

## Implementation instructions

Use the `renderHeader` option to pass a custom header layout. This demo uses the built-in header controls in a custom arrangement so the month and year appear on the left, the navigation and Today controls appear in the middle, and a custom segmented view switcher appears on the right.

- **Header navigation** Use `<div mbsc-calendar-nav></div>` for the navigation title area that displays the current month and year. Use the `.md-header-filter-controls` CSS class for custom overrides.
- **Today button** Use `<button mbsc-calendar-today></button>` and the `.md-header-filter-today` CSS class for styling overrides.
- **Previous button** Use `<button mbsc-calendar-prev></button>` and the `.md-header-filter-prev` CSS class for styling overrides.
- **Next button** Use `<button mbsc-calendar-next></button>` and the `.md-header-filter-next` CSS class for styling overrides.
- **Header layout** Set up the full control order in `renderHeader` to keep a consistent header layout across themes and to place the custom segmented control at the far right.

## What this demo shows

- A desktop month-view event calendar is shown with a custom header and a view switcher that toggles between calendar and scheduler-style layouts.
- **Header** The left side shows the currently displayed month and year.
- **Header** The center contains previous and next month navigation buttons with a Today button between them for jumping back to the current date.
- **Header** The right side contains a segmented control with a calendar icon selected by default and a list icon for switching views.
- **Month view** The default view is a full month calendar layout optimized for desktop.
- **Month view** Days with events display event labels directly inside the day cells.
- **Month view** Event labels use different styles and colors to distinguish all-day events, multi-day all-day events, and timed events.
- **Month view** The number of visible event labels in a day cell depends on the available vertical space.
- **Month view** When not all events fit in a day cell, an `X more` label appears and opens a popover with the additional events on click.
- **Month view** Clicking an event label selects it and highlights the event.
- **Day interaction** Hovering over a day cell highlights the day number with a gray background.
- **Day interaction** Clicking an empty area of a day cell selects that day and highlights the day number with a blue background.
- **Navigation** The month can be changed with the header navigation buttons or by dragging the calendar left or right.
- **Scheduler view** Selecting the list option switches the layout to a weekly scheduler view.
- **Scheduler view** The weekly scheduler shows the days of the week at the top, an all-day section for all-day events, and a 24-hour time grid for timed events.
- **Scheduler view** The current time is marked with a blue line in the time grid.
- **Scheduler view** The time grid can be scrolled vertically with the mouse wheel.

## Best for

- **Calendar and schedule switching** Interfaces where users need to move between a month overview and a more detailed weekly schedule from the same header control.
- **Desktop planning tools** Scheduling and planning screens designed for desktop use, where a full month grid and richer header controls fit naturally.
- **Event-heavy month views** Use cases where day cells need to display multiple event labels, overflow handling, and quick access to hidden items through a popover.
- **Mixed all-day and timed events** Calendars that need to show all-day, multi-day, and time-specific events with distinct visual treatment.
- **Custom-branded calendar navigation** Applications that need a header layout different from the built-in default while keeping standard calendar navigation behavior.
- **Operational scheduling** Team, resource, booking, or internal planning tools where users switch between high-level monthly planning and time-precise weekly scheduling.
