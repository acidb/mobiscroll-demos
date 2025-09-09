import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { dayjsTimezone, MbscModule, MbscTimezonePlugin, setOptions /* localeImport */ } from '@mobiscroll/angular';
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
  selector: 'app-calendar-setting-the-picker-timezone',
  templateUrl: './setting-the-picker-timezone.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent {
  myTimezonePlugin: MbscTimezonePlugin = dayjsTimezone;
  mySelected = null;
}
