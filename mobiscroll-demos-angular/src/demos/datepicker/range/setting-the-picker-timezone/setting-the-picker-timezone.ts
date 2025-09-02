import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MbscDatepickerOptions, MbscModule, momentTimezone /* localeImport */ } from '@mobiscroll/angular';
import moment from 'moment-timezone';

momentTimezone.moment = moment;

@Component({
  selector: 'app-range-setting-the-picker-timezone',
  templateUrl: './setting-the-picker-timezone.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent {
  options: MbscDatepickerOptions = {
    // locale,
    // theme,
    select: 'range',
    timezonePlugin: momentTimezone,
    dataTimezone: 'utc',
    displayTimezone: 'local',
    controls: ['calendar', 'time'],
  };
  selected = null;
}
