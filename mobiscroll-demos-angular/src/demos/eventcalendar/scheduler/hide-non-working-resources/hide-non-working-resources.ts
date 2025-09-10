import { Component } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-hide-non-working-resources',
  templateUrl: './hide-non-working-resources.html',
  standalone: false,
})
export class AppComponent {
  myView: MbscEventcalendarView = {
    schedule: {
      type: 'week',
      allDay: false,
      startDay: 1,
      endDay: 5,
      startTime: '08:00',
      endTime: '20:00',
      hideInvalidColumns: true,
    }
  }

  myEvents: MbscCalendarEvent[] = []
  myResources: MbscResource[] = []
}
