import { Component } from '@angular/core';
import { MbscCalendarEvent, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme,
});

@Component({
  selector: 'app-scheduler-health-care-planner',
  templateUrl: './health-care-planner.html',
  providers: [Notifications],
})
export class AppComponent {
  onEventUpdate() {
    throw new Error('Method not implemented.');
  }
  onEventDelete() {
    throw new Error('Method not implemented.');
  }
  onEventCreate() {
    throw new Error('Method not implemented.');
  }
  myEvents: MbscCalendarEvent[] = [];
  myView: MbscEventcalendarView = {
    schedule: { type: 'month', startTime: '08:00', endTime: '20:00', allDay: false },
  };
  myInvalid: any[] | undefined;
  myResources: MbscResource[] | null | undefined;
}
