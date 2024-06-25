import { Component, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-show-empty-days',
  styleUrl: './show-empty-days.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './show-empty-days.html',
})
export class AppComponent {
  myEvents: MbscCalendarEvent[] = [];
  myView: MbscEventcalendarView = { agenda: { type: 'month' } };
}
