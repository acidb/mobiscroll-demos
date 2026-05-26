To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-angular?tab=readme-ov-file#mobiscroll-angular-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/angular/scheduler/navigate-view-from-external-calendar#).

## Demo description

This example demonstrates how can the Scheduler navigated externally. Here we have a two-pane layout with a Datepicker on the left and a Scheduler on the right. Changing date on the Datepicker will trigger the date change on the Scheduler.

The Datepicker and the Scheduler binds to the same selected value which makes sure that the displayed dates will be in sync in both of the components.
The Datepicker uses the `ngModel` binding and the Scheduler its `selectedDate` option to update the displayed date on the view.
