import { Component } from '@angular/core';
import { dayjsTimezone, MbscDatepickerOptions /* localeImport */ } from '@mobiscroll/angular';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjsTimezone.dayjs = dayjs;

@Component({
  selector: 'app-range-setting-the-picker-timezone',
  templateUrl: './setting-the-picker-timezone.html',
  standalone: false,
})
export class AppComponent {
  options: MbscDatepickerOptions = {
    // locale,
    // theme,
    select: 'range',
    timezonePlugin: dayjsTimezone,
    dataTimezone: 'utc',
    displayTimezone: 'local',
    controls: ['calendar', 'time'],
  };
  selected = null;
}
