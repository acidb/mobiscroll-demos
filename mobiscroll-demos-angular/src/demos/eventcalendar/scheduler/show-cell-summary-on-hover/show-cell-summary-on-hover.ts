import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscCellHoverEvent,
  MbscEventcalendarView,
  MbscPopup,
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
  encapsulation: ViewEncapsulation.None,
  templateUrl: './show-cell-summary-on-hover.html',
  standalone: false,
})
export class AppComponent {
  @ViewChild('tooltip', { static: false })
  tooltip!: MbscPopup;

  myEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d-3,8'),
      end: dyndatetime('y,m,d-3,11'),
      title: 'Task 1',
    },
    {
      start: dyndatetime('y,m,d-2,14'),
      end: dyndatetime('y,m,d-2,16'),
      title: 'Task 2',
    },
    {
      start: dyndatetime('y,m,d-1,15'),
      end: dyndatetime('y,m,d-1,17'),
      title: 'Task 3',
    },
    {
      start: dyndatetime('y,m,d-1,10'),
      end: dyndatetime('y,m,d-1,12'),
      title: 'Task 4',
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,11'),
      title: 'Task 5',
    },
    {
      start: dyndatetime('y,m,d,9'),
      end: dyndatetime('y,m,d,12'),
      title: 'Task 6',
    },
    {
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,12'),
      title: 'Task 7',
    },
    {
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,13'),
      title: 'Task 8',
    },
    {
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,14'),
      title: 'Task 9',
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,18'),
      title: 'Task 10',
    },
    {
      start: dyndatetime('y,m,d+1,13'),
      end: dyndatetime('y,m,d+1,17'),
      title: 'Task 11',
    },
    {
      start: dyndatetime('y,m,d+1,18'),
      end: dyndatetime('y,m,d+1,20'),
      title: 'Task 12',
    },
    {
      start: dyndatetime('y,m,d+2,8'),
      end: dyndatetime('y,m,d+2,12'),
      title: 'Task 13',
    },
    {
      start: dyndatetime('y,m,d+2,15'),
      end: dyndatetime('y,m,d+2,18'),
      title: 'Task 14',
    },
    {
      start: dyndatetime('y,m,d+3,8'),
      end: dyndatetime('y,m,d+3,11'),
      title: 'Task 15',
    },
    {
      start: dyndatetime('y,m,d+3,15'),
      end: dyndatetime('y,m,d+3,17'),
      title: 'Task 16',
    },
    {
      start: dyndatetime('y,m,d+4,9'),
      end: dyndatetime('y,m,d+4,12'),
      title: 'Task 17',
    },
  ];

  myInvalid: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d-2,12'),
      end: dyndatetime('y,m,d-2,13'),
    },
    {
      start: dyndatetime('y,m,d-1,8'),
      end: dyndatetime('y,m,d-1,10'),
    },
    {
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,15'),
    },
    {
      start: dyndatetime('y,m,d+1,15'),
      end: dyndatetime('y,m,d+1,17'),
    },
    {
      start: '10:00',
      end: '11:00',
      recurring: {
        repeat: 'weekly',
        weekDays: 'TU,TH,SA,SU',
      },
    },
  ];

  myColors: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d-1,12'),
      end: dyndatetime('y,m,d-1,14'),
      cssClass: 'mds-cell-summary-color',
    },
    {
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,12'),
      cssClass: 'mds-cell-summary-color',
    },
    {
      start: dyndatetime('y,m,d+1,8'),
      end: dyndatetime('y,m,d+1,11'),
      cssClass: 'mds-cell-summary-color',
    },
    {
      start: dyndatetime('y,m,d+2,14'),
      end: dyndatetime('y,m,d+2,17'),
      cssClass: 'mds-cell-summary-color',
    },
    {
      start: '08:00',
      end: '09:00',
      cssClass: 'mds-cell-summary-color',
      recurring: {
        repeat: 'weekly',
        weekDays: 'MO,FR',
      },
    },
    {
      start: '14:00',
      end: '16:00',
      cssClass: 'mds-cell-summary-color',
      recurring: {
        repeat: 'weekly',
        weekDays: 'TU,TH',
      },
    },
    {
      start: '10:00',
      end: '12:00',
      recurring: {
        repeat: 'weekly',
        weekDays: 'FR',
      },
      cssClass: 'mds-cell-summary-color',
    },
    {
      start: '16:00',
      end: '17:00',
      recurring: {
        repeat: 'weekly',
        weekDays: 'SU,SA',
      },
      cssClass: 'mds-cell-summary-color',
    },
  ];

  myView: MbscEventcalendarView = {
    schedule: {
      type: 'week',
      startTime: '08:00',
      endTime: '18:00',
      timeCellStep: 30,
    },
  };

  cellDate: string | null = null;
  cellEventNr: number | null = null;
  cellInvalidNr: number | null = null;
  cellColorNr: number | null = null;
  tooltipAnchor: HTMLElement | null = null;

  handleCellHoverIn(args: MbscCellHoverEvent) {
    const endDate = new Date(args.date);
    endDate.setHours(endDate.getHours() + 1);
    const date = formatDate('DDDD MMM D, YYYY, HA - ', args.date);
    const time = formatDate('HA', endDate);

    this.cellDate = date + time;
    this.cellEventNr = args.events ? args.events.length : 0;
    this.cellInvalidNr = args.invalids ? args.invalids.length : 0;
    this.cellColorNr = args.colors ? args.colors.length : 0;

    this.tooltipAnchor = args.target;
    this.tooltip.open();
  }

  handleCellHoverOut() {
    this.tooltip.close();
  }
}
