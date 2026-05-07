To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-angular?tab=readme-ov-file#mobiscroll-angular-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/angular/agenda/navigate-from-external-calendar#).

## Demo description

This example demonstrates how can the Agenda navigated externally. Here we have a two-pane layout with a Datepicker on the left and an Agenda on the right. Changing date on the Datepicker will trigger the date change on the Agenda.

framework{only="vue"}
@change

:::

`onChange`

event, while the Agenda updates the datepicker value from its 
`onSelectedDateChange`

 event.
:::

framework{only="vue"}
@change

:::

`onChange`

event, while the Agenda updates the datepicker value from its 
`onSelectedDateChange`

 event.
:::

The Datepicker and the Agenda binds to the same selected value which makes sure that the displayed dates will be in sync in both of the components.
The Datepicker uses the `ngModel` binding and the Agenda its `selectedDate` option to update the displayed date on the view.
