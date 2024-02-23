import { Component } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme,
});

@Component({
  selector: 'app-agenda-empty-state',
  styleUrl: './empty-state.css',
  templateUrl: './empty-state.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  myEvents: MbscCalendarEvent[] = [
    {
      title: 'Zumba Class',
      start: dyndatetime('y,m,d-7,17'),
      end: dyndatetime('y,m,d-7,19'),
    },
    {
      title: 'Silent Party',
      start: dyndatetime('y,m,d-7,21'),
      end: dyndatetime('y,m,d-7,23'),
    },
    {
      title: 'Garbage Collection',
      start: dyndatetime('y,m,d+7,15'),
      end: dyndatetime('y,m,d+7,17'),
    },
    {
      title: 'Karaoke Night',
      start: dyndatetime('y,m,d+7,20'),
      end: dyndatetime('y,m,d+7,22'),
    },
  ];

  myView: MbscEventcalendarView = {
    calendar: { type: 'week' },
    agenda: { type: 'week' },
  };

  addEvent(): void {
    this.notify.toast({
      message: 'Add button clicked',
    });
  }
}
