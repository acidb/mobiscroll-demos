import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-time-off-blocked-ranges',
  templateUrl: './time-off-blocked-ranges.html',
  providers: [Notifications],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  eventSettings: MbscEventcalendarOptions = {
    view: {
      schedule: { type: 'week' },
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
        start: '12:00',
        end: '13:00',
        title: 'Lunch break',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
      {
        start: '00:00',
        end: '08:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
      {
        start: '17:00',
        end: '23:59',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
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
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/workday-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
