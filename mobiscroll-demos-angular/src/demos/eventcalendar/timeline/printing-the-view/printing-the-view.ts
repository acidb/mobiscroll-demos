import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendar,
  MbscEventcalendarView,
  MbscModule,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { print } from '@mobiscroll/print';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-printing-the-view',
  templateUrl: './printing-the-view.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @ViewChild('mycal', { static: false })
  inst!: MbscEventcalendar;

  calendarModules = [print];

  myEvents: MbscCalendarEvent[] = [];
  myResources: MbscResource[] = [
    {
      id: 1,
      name: 'Flatiron Room',
      color: '#fdf500',
    },
    {
      id: 2,
      name: 'The Capital City',
      color: '#ff0101',
    },
    {
      id: 3,
      name: 'Heroes Square',
      color: '#01adff',
    },
    {
      id: 4,
      name: 'Thunderdome',
      color: '#ff4600',
    },
    {
      id: 5,
      name: 'King’s Landing',
      color: '#239a21',
    },
    {
      id: 6,
      name: 'Gathering Field',
      color: '#8f1ed6',
    },
  ];

  calView: MbscEventcalendarView = {
    timeline: {
      type: 'week',
      startDay: 1,
      endDay: 5,
      eventDisplay: 'fill',
    },
  };

  printView(): void {
    this.inst.print();
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/daily-weekly-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
