import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-eventcalendar-blocked-days-ranges',
  templateUrl: './blocked-days-ranges.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  settings: MbscEventcalendarOptions = {
    view: {
      calendar: {
        labels: true,
      },
    },
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    invalidateEvent: 'strict',
    invalid: [
      {
        recurring: {
          repeat: 'weekly',
          weekDays: 'SA,SU',
        },
      },
      {
        allDay: true,
        start: 'dyndatetime(y,m,19)',
        end: 'dyndatetime(y,m,20)',
      },
      {
        allDay: true,
        start: 'dyndatetime(y,m,26)',
        end: 'dyndatetime(y,m,27)',
      },
    ],
    onEventCreateFailed: () => {
      this.notify.toast({
        message: "Can't create event on this date",
      });
    },
    onEventUpdateFailed: () => {
      this.notify.toast({
        message: "Can't add event on this date",
      });
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/work-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
