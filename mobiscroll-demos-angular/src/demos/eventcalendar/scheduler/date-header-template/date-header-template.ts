import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { formatDate, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-date-header-template',
  styleUrl: './date-header-template.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './date-header-template.html',
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  view: MbscEventcalendarView = {
    schedule: {
      type: 'week',
      allDay: false,
      startDay: 1,
      endDay: 5,
      startTime: '05:00',
      endTime: '22:00',
    },
  };

  milestones = [
    {
      date: dyndatetime('y,m,d-2'),
      name: 'Project review',
      color: '#f5da7b',
    },
    {
      date: dyndatetime('y,m,d-1'),
      name: 'Product shipping',
      color: '#acf3a3',
    },
    {
      date: dyndatetime('y,m,d+1'),
      name: 'Cycle finish',
      color: '#ff84a0',
    },
  ];

  myEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d-3,10'),
      end: dyndatetime('y,m,d-3,15'),
      title: 'Impact Training',
      resource: [2, 3],
      color: '#35bb5a',
    },
    {
      start: dyndatetime('y,m,d-2,10'),
      end: dyndatetime('y,m,d-2,15'),
      title: 'Impact Training',
      resource: [2, 3],
      color: '#35bb5a',
    },
    {
      start: dyndatetime('y,m,d,8,30'),
      end: dyndatetime('y,m,d,10'),
      title: 'Quick mtg. with Martin',
      resource: 3,
      color: '#913aa7',
    },
    {
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,13'),
      title: 'General orientation',
      resource: [1, 2, 3],
      color: '#a71111',
    },
    {
      start: dyndatetime('y,m,d+1,10'),
      end: dyndatetime('y,m,d+1,11'),
      title: 'Product team mtg.',
      resource: [2, 3],
      color: '#6e7f29',
    },
    {
      start: dyndatetime('y,m,d+2,14'),
      end: dyndatetime('y,m,d+2,16'),
      title: 'Stakeholder mtg.',
      resource: 1,
      color: '#dcd234',
    },
    {
      start: dyndatetime('y,m,d+3,10'),
      end: dyndatetime('y,m,d+3,14'),
      title: 'Innovation mtg.',
      resource: [1, 2],
      color: '#de3d83',
    },
  ];

  myResources: MbscResource[] = [
    {
      id: 1,
      name: 'Ryan',
      color: '#f7c4b4',
      img: 'https://img.mobiscroll.com/demos/m1.png',
    },
    {
      id: 2,
      name: 'Kate',
      color: '#c6f1c9',
      img: 'https://img.mobiscroll.com/demos/f1.png',
    },
    {
      id: 3,
      name: 'John',
      color: '#e8d0ef',
      img: 'https://img.mobiscroll.com/demos/m2.png',
    },
  ];

  formatDate = formatDate;

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/resource-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }

  getTask(date: any): any {
    return this.milestones.find((obj) => +new Date(obj.date) === +date) || {};
  }
}
