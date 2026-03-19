import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscEventcalendarOptions, MbscModule, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme,
});

@Component({
  selector: 'app-scheduler-work-week-hours',
  styleUrl: './work-week-hours.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './work-week-hours.html',
  providers: [Notifications],
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  events: any;

  eventSettings: MbscEventcalendarOptions = {
    dragToCreate: true,
    dragToMove: true,
    invalid: [
      {
        start: '12:00',
        end: '13:00',
        title: 'Lunch break',
        type: 'lunch',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
    ],
    view: {
      scheduler: {
        type: 'week',
        startDay: 1,
        endDay: 5,
        startTime: '09:00',
        endTime: '18:00',
      },
    },
    onEventCreateFailed: (args) => {
      if (args.invalid['type'] === 'lunch') {
        this.notify.toast({
          message: "Can't create this task on " + args.invalid.title!.toLowerCase(),
        });
      }
    },
    onEventUpdateFailed: (args) => {
      if (args.invalid['type'] === 'lunch') {
        this.notify.toast({
          message: "Can't schedule this task on " + args.invalid.title!.toLowerCase(),
        });
      }
    },
  };

  ngOnInit() {
    this.http.jsonp('https://trial.mobiscroll.com//workday-events/?vers=5', 'callback').subscribe((resp: any) => {
      this.events = resp;
    });
  }
}
