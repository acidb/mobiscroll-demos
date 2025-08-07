import { Component } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscCellHoverEvent,
  MbscEventcalendarOptions,
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
  selector: 'app-scheduler-show-cell-summary-on-hover',
  styleUrl: './show-cell-summary-on-hover.css',
  templateUrl: './show-cell-summary-on-hover.html',
  providers: [Notifications],
  standalone: false,
})
export class AppComponent {
  constructor(private notify: Notifications) { }

  hoveredDate: Date | undefined = undefined;

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

  calView: MbscEventcalendarView = {
    calendar: {
      labels: 2
    },
  };

  calendarOptions: MbscEventcalendarOptions = {
    onCellHoverIn: (event: MbscCellHoverEvent) => {
      this.hoveredDate = event.date;
    },
    onCellHoverOut: () => {
      this.hoveredDate = undefined;
    }
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
