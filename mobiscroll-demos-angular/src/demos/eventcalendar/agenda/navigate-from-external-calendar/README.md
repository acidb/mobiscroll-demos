To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-angular?tab=readme-ov-file#mobiscroll-angular-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/angular/agenda/navigate-from-external-calendar#).

## Demo description

This example demonstrates how can the Agenda navigated externally. Here we have a two-pane layout with a Datepicker on the left and an Agenda on the right. Changing date on the Datepicker will trigger the date change on the Agenda.

The Datepicker and the Agenda binds to the same selected value which makes sure that the displayed dates will be in sync in both of the components.
The Datepicker uses the `ngModel` binding and the Agenda its `selectedDate` option to update the displayed date on the view.

## Implementation instructions

- Use `view: { agenda: { type: 'day' } }`. Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. For the imperative API, call `inst.setEvents(events)` in the callback.
- Place a Mobiscroll `Datepicker` with `display: 'inline'` and an `Eventcalendar` side by side in a flex row. The Datepicker is a fixed-width left pane; the Eventcalendar takes the remaining width (`mbsc-flex-1-1`).
- Keep a shared `selectedDate` value in sync across both components:
  - On Datepicker change (`onChange`), update `selectedDate` to `args.value` and pass it to the Eventcalendar's `selectedDate` option.
  - On Eventcalendar `onSelectedDateChange`, update `selectedDate` to `args.date` and pass it back to the Datepicker's `value`.
  - **Angular**: use two-way binding `[(selectedDate)]` on the Eventcalendar and `[(ngModel)]` on the Datepicker — both bind to the same variable, no explicit event handlers needed.
  - **JS/jQuery**: use the imperative API — call `agendaInst.navigate(args.value)` in the Datepicker's `onChange`, and `datepickerInst.setVal(args.date)` in the Eventcalendar's `onSelectedDateChange`.
