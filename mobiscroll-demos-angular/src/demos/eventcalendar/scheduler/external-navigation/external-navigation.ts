import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscDatepickerPageLoadedEvent,
  MbscDateType,
  MbscEventcalendarView,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-external-navigation',
  styleUrl: './external-navigation.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './external-navigation.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  dayView: MbscEventcalendarView = { schedule: { type: 'day' } };
  myEvents: MbscCalendarEvent[] = [];
  selectedDate: MbscDateType = new Date();

  handlePageChange(args: MbscDatepickerPageLoadedEvent) {
    if (args.month) {
      this.selectedDate = args.month;
    }
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
