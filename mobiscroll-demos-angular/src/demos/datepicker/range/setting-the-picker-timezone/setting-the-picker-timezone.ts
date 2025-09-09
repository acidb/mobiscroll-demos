import { Component } from '@angular/core';
import { dayjsTimezone, MbscTimezonePlugin, setOptions /* localeImport */ } from '@mobiscroll/angular';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjsTimezone.dayjs = dayjs;

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-range-setting-the-picker-timezone',
  templateUrl: './setting-the-picker-timezone.html',
  standalone: false,
})
export class AppComponent {
  myTimezonePlugin: MbscTimezonePlugin = dayjsTimezone;
  mySelected = null;
}