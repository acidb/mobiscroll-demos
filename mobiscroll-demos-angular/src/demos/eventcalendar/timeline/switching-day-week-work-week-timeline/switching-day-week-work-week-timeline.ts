import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-switching-day-week-work-week-timeline',
  styleUrl: './switching-day-week-work-week-timeline.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './switching-day-week-work-week-timeline.html',
  providers: [Notifications],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];
  view = 'week';
  calView: MbscEventcalendarView = {
    timeline: {
      type: 'week',
    },
  };

  myResources = [
    {
      id: 1,
      name: 'Ryan',
      color: '#ff0101',
      title: 'Cloud System Engineer',
      img: 'https://img.mobiscroll.com/demos/m1.png',
    },
    {
      id: 2,
      name: 'Kate',
      color: '#239a21',
      title: 'Help Desk Specialist',
      img: 'https://img.mobiscroll.com/demos/f1.png',
    },
    {
      id: 3,
      name: 'John',
      color: '#8f1ed6',
      title: 'Application Developer',
      img: 'https://img.mobiscroll.com/demos/m2.png',
    },
    {
      id: 4,
      name: 'Mark',
      color: '#01adff',
      title: 'Network Administrator',
      img: 'https://img.mobiscroll.com/demos/m3.png',
    },
    {
      id: 5,
      name: 'Sharon',
      color: '#d8ca1a',
      title: 'Data Quality Manager',
      img: 'https://img.mobiscroll.com/demos/f2.png',
    },
  ];

  myInvalids = [
    {
      start: '00:00',
      end: '06:00',
      recurring: {
        repeat: 'weekly',
        weekDays: 'MO,TU,WE,TH,FR',
      },
    },
    {
      start: '20:00',
      end: '23:59',
      recurring: {
        repeat: 'weekly',
        weekDays: 'MO,TU,WE,TH,FR',
      },
    },
    {
      recurring: {
        repeat: 'weekly',
        weekDays: 'SA,SU',
      },
    },
  ];

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/timeline-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }

  changeView(): void {
    setTimeout(() => {
      switch (this.view) {
        case 'day':
          this.calView = {
            timeline: { type: 'day' },
          };
          break;
        case 'workweek':
          this.calView = {
            timeline: {
              type: 'week',
              startDay: 1,
              endDay: 5,
            },
          };
          break;
        case 'week':
          this.calView = {
            timeline: {
              type: 'week',
            },
          };
          break;
      }
    });
  }

  eventUpdateFail(): void {
    this.notify.toast({
      message: "Can't schedule outside of working hours",
    });
  }
}
