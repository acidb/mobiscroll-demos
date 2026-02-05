import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscDatepickerOptions, MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-single-select',
  templateUrl: './single-select.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
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
