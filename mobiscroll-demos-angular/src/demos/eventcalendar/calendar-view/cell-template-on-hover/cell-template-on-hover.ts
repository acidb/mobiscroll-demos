import { Component, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscCellHoverEvent,
  MbscEventcalendarView,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-eventcalendar-cell-template-on-hover',
  styleUrl: './cell-template-on-hover.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cell-template-on-hover.html',
  standalone: false,
})
export class AppComponent {
  constructor(private notify: Notifications) { }

  hoveredDate: Date | undefined;

  myEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,2,12'),
      end: dyndatetime('y,m,2,16'),
      title: 'Company Strategy Offsite',
      color: '#90bcff',
    },
    {
      start: dyndatetime('y,m,7,9'),
      end: dyndatetime('y,m,7,17'),
      title: 'R&D Innovation Workshop',
      color: '#ffdfaf',
    },
    {
      start: dyndatetime('y,m,15,10'),
      end: dyndatetime('y,m,15,15'),
      title: 'Client Feedback Review',
      color: '#ffb9ad',
    },
    {
      start: dyndatetime('y,m,19,9'),
      end: dyndatetime('y,m,19,19'),
      title: 'Team Building Adventure',
      color: '#f3c1ff',
    },
    {
      start: dyndatetime('y,m,23,11'),
      end: dyndatetime('y,m,23,15'),
      title: 'Sales Summit & Training',
      color: '#b5eff8',
    },
    {
      start: dyndatetime('y,m,25,10'),
      end: dyndatetime('y,m,25,15'),
      title: 'Executive Planning Retreat',
      color: '#c7ffbb',
    },
    {
      start: dyndatetime('y,m,29,14'),
      end: dyndatetime('y,m,29,17'),
      title: 'Marketing Team Conference',
      color: '#ffeeb6',
    },
  ];

  myView: MbscEventcalendarView = {
    calendar: {
      labels: 2
    },
  };

  onCellHoverIn(event: MbscCellHoverEvent): void {
    this.hoveredDate = event.date;
  }

  onCellHoverOut(): void {
    this.hoveredDate = undefined;
  }

  addEvent(): void {
    const newEvent: MbscCalendarEvent = {
      start: this.hoveredDate,
      title: 'New Event',
    };

    this.myEvents = [...this.myEvents, newEvent];

    this.notify.toast({
      message: 'Event added on ' + formatDate('YYYY-MM-DD', this.hoveredDate!)
    });
  }

  isHovered(date: Date): boolean {
    return this.hoveredDate !== undefined && this.hoveredDate.getTime() === date.getTime();
  }
}
