import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscDateType,
  MbscEventcalendarOptions,
  MbscEventcalendarView,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-custom-range-view',
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
    schedule: {
      type: 'day',
      size: 14,
    },
  };

  calendarOptions: MbscEventcalendarOptions = {
    onPageLoading: (args) => {
      const end = args.lastDay;
      this.startDate = args.firstDay;
      this.endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1, 0);
      // set button text
      this.rangeText = this.getFormattedRange(this.startDate, this.endDate);
      // set range value
      this.rangeValue = [this.startDate, this.endDate];
      // navigate the calendar
      this.selectedDate = this.startDate;
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
        schedule: {
          type: 'day',
          size: this.getNrDays(date[0], date[1]),
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
      .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback')
      .subscribe((resp: MbscCalendarEvent[]) => {
        this.myEvents = resp;
      });
  }
}
