import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscModule,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-multi-classroom-timetable',
  styleUrl: './multi-classroom-timetable.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './multi-classroom-timetable.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  formatDate = formatDate;

  myEvents: MbscCalendarEvent[] = [];

  myResources: MbscResource[] = [
    {
      id: 1,
      name: 'Green Hall',
    },
    {
      id: 2,
      name: 'White Hall',
    },
    {
      id: 3,
      name: 'Red Hall',
    },
    {
      id: 4,
      name: 'Blue Hall',
    },
    {
      id: 5,
      name: 'Yellow Hall',
    },
  ];

  view: MbscEventcalendarView = {
    timeline: {
      type: 'month',
      startDay: 1,
      endDay: 5,
      resolutionHorizontal: 'hour',
      resolutionVertical: 'day',
    },
  };

  myDefaultEvent() {
    return {
      title: 'New class',
      prof: 'Stacia Jaden',
      class: 'Junior',
      color: '#ff0000',
    };
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/timetable-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
