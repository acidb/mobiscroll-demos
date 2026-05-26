To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-angular?tab=readme-ov-file#mobiscroll-angular-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/angular/eventcalendar/responsive-month-view#).

## Demo description

The event calendar is fully responsive. It adapts to the available space and fills the screen to look good everywhere. While you don't have to worry about the width the height can be manually adjusted with the `height` option.

Use the `responsive` option to configure how the calendar behaves on different sized screens.
The `responsive` option is equipped with five breakpoints -
`xsmall` **(up to 575px)**,
`small` **(up to 767px)**,
`medium` **(up to 991px)**,
`large` **(up to 1199px)**,
`xlarge` **(from 1200px)**.
Custom breakpoints can be added if necessary: `my-custom-breakpoint: { breakpoint: 600 }` **(from 600px up to the next breakpoint)**.

## Implementation instructions

- Use the `responsive` option to configure different calendar setups for different screen sizes.
- Start from the built-in breakpoint system (`xsmall`, `small`, `medium`, `large`, `xlarge`) and override the calendar configuration for the breakpoints that need a different layout.
- Configure smaller breakpoints to show a week view with a synced daily agenda underneath, and larger breakpoints to switch to a month view with event labels.
- Add custom breakpoints when the default set does not match the exact container or viewport widths your application needs.

## What this demo shows

- A responsive event calendar setup that changes layout based on the selected viewport size.
- **Top calendar on small screens** On `375px` and `576px` viewports, a week view calendar is shown at the top.
- **Day markers** Days that contain events display a small marker below the day inside the week view.
- **Agenda below the calendar** A daily event list is shown under the week view and displays the events for the currently selected date.
- **Synchronized selection** Clicking a different date in the week view updates the agenda automatically so it shows that day's events.
- **Viewport switcher** A segmented control lets you switch between viewport presets in the demo.
- **Larger screen layout** On `768px`, `992px`, and `1200px` viewports, the layout switches to a desktop-style monthly calendar with event labels shown directly in the month cells.

## Best for

- **Responsive event planning UIs** Interfaces that need to present calendar data clearly across mobile, tablet, and desktop screen sizes.
- **Master-detail calendar layouts** Scenarios where a compact calendar is used to pick a date and a synced list below shows the events for that day.
- **Adaptive embedded views** Product areas where the calendar needs to work well inside containers, panels, or sections of a larger page.
- **Breakpoint-based calendar setups** Use cases where different calendar views should be shown at different viewport widths.
