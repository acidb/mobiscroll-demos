import { Component } from '@angular/core';
import { MbscDatepickerOptions, momentTimezone /* localeImport */ } from '@mobiscroll/angular';
import moment from 'moment-timezone';

momentTimezone.moment = moment;

@Component({
  selector: 'setting-the-picker-timezone',
  templateUrl: './setting-the-picker-timezone.html',
})
export class AppComponent {
  options: MbscDatepickerOptions = {
    // locale,
    // theme,
    timezonePlugin: momentTimezone,
    dataTimezone: 'utc',
    displayTimezone: 'local',
    controls: ['datetime'],
  };
}
