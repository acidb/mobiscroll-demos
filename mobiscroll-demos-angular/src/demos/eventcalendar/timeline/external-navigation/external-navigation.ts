import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscDatepickerControl,
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

  dayView: MbscEventcalendarView = { timeline: { type: 'day' } };
  calView: MbscDatepickerControl[] = ['calendar'];
  myEvents: MbscCalendarEvent[] = [];
  selectedDate: MbscDateType = new Date();

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
