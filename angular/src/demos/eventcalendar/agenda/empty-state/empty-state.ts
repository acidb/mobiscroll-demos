import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscEventcalendarOptions, MbscEventcalendarView, Notifications, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';

@Component({
  selector: 'empty-state',
  styleUrl: './empty-state.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './empty-state.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(private notify: Notifications) {}

  myEvents: MbscCalendarEvent[] = [
    {
      title: 'Zumba Class',
      start: 'dyndatetime(y,m,d-7,17)',
      end: 'dyndatetime(y,m,d-7,19)',
    },
    {
      title: 'Silent Party',
      start: 'dyndatetime(y,m,d-7,21)',
      end: 'dyndatetime(y,m,d-7,23)',
    },
    {
      title: 'Garbage Collection',
      start: 'dyndatetime(y,m,d+7,15)',
      end: 'dyndatetime(y,m,d+7,17)',
    },
    {
      title: 'Karaoke Night',
      start: 'dyndatetime(y,m,d+7,20)',
      end: 'dyndatetime(y,m,d+7,22)',
    },
  ];

  myOptions: MbscEventcalendarOptions = {
    // locale,
    // theme,
  };

  myView: MbscEventcalendarView = {
    calendar: { type: 'week' },
    agenda: { type: 'week' },
  };

  displayToast(): void {
    this.notify.toast({
      //<hidden>
      // theme,//</hidden>
      message: 'Add button clicked!',
    });
  }
}
