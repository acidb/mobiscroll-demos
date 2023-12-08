import { Component } from '@angular/core';
import { setOptions, MbscDatepickerOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'single-select',
  templateUrl: './single-select.html',
})
export class AppComponent {
  dateOptions: MbscDatepickerOptions = {
    controls: ['calendar'],
    selectMultiple: false,
  };

  datetimeOptions: MbscDatepickerOptions = {
    controls: ['calendar', 'time'],
    selectMultiple: false,
  };

  timegridOptions: MbscDatepickerOptions = {
    controls: ['calendar', 'timegrid'],
    selectMultiple: false,
  };
}
