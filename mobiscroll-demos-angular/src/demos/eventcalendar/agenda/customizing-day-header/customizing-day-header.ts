import { Component, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-customizing-day-header',
  styleUrl: './customizing-day-header.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './customizing-day-header.html',
})
export class AppComponent {
  myEvents: MbscCalendarEvent[] = [];
  myView: MbscEventcalendarView = { agenda: { type: 'month' } };
}
