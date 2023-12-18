import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscDateType,
  MbscEventcalendarOptions,
  MbscEventcalendarView,
  formatDate,
  setOptions,
  /* localeImport */
} from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'custom-range-view',
  styleUrl: './custom-range-view.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './custom-range-view.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  startDate!: Date;
  endDate!: Date;
  refDate!: Date;
  selectedDate: MbscDateType = new Date();
  rangeValue: any = [];
  rangeText = '';

  myEvents: MbscCalendarEvent[] = [];
  view = 'calendar';
  calView: MbscEventcalendarView = {
    timeline: {
      type: 'day',
      size: 14,
      eventList: true,
    },
  };

  calendarOptions: MbscEventcalendarOptions = {
    resources: [
      {
        id: 1,
        name: 'Resource A',
        color: '#e20000',
      },
      {
        id: 2,
        name: 'Resource B',
        color: '#76e083',
      },
      {
        id: 3,
        name: 'Resource C',
        color: '#4981d6',
      },
      {
        id: 4,
        name: 'Resource D',
        color: '#e25dd2',
      },
      {
        id: 5,
        name: 'Resource E',
        color: '#1dab2f',
      },
      {
        id: 6,
        name: 'Resource F',
        color: '#d6d145',
      },
    ],
    onPageLoaded: (args) => {
      const end = args.lastDay;
      this.startDate = args.firstDay;
      this.endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1, 0);

      setTimeout(() => {
        // set button text
        this.rangeText = this.getFormattedRange(this.startDate, this.endDate);
        // set range value
        this.rangeValue = [this.startDate, this.endDate];
        // navigate the calendar
        this.selectedDate = this.startDate;
      });
    },
  };

  onClose(): void {
    const date = this.rangeValue;
    if (date[0] && date[1]) {
      // navigate the calendar
      this.selectedDate = date[0];
      this.startDate = date[0];
      this.endDate = date[1];
      // set calendar view
      this.refDate = date[0];
      this.calView = {
        timeline: {
          type: 'day',
          size: this.getNrDays(date[0], date[1]),
          eventList: true,
        },
      };
    } else {
      this.rangeValue = [this.startDate, this.endDate];
    }
  }

  // returns the formatted date
  getFormattedRange(start: any, end: any): string {
    return (
      formatDate('MMM D, YYYY', new Date(start)) +
      (end && this.getNrDays(start, end) > 1 ? ' - ' + formatDate('MMM D, YYYY', new Date(end)) : '')
    );
  }

  // returns the number of days between two dates
  getNrDays(start: any, end: any): number {
    return Math.round(Math.abs((end.setHours(0) - start.setHours(0)) / (24 * 60 * 60 * 1000))) + 1;
  }

  ngOnInit(): void {
    this.http
      .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/timeline-events/?vers=5', 'callback')
      .subscribe((resp: MbscCalendarEvent[]) => {
        this.myEvents = resp;
      });
  }
}
