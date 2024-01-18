import { Component, OnInit } from '@angular/core';
import { setOptions, MbscEventcalendarOptions, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const today = now.getDate();

@Component({
  selector: 'app-eventcalendar-colored-cell-background',
  templateUrl: './colored-cell-background.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  settings: MbscEventcalendarOptions = {
    colors: [
      {
        start: 'dyndatetime(y,m,0)',
        end: 'dyndatetime(y,m,1)',
        background: '#fde4c880',
      },
      {
        start: 'dyndatetime(y,m,17)',
        end: 'dyndatetime(y,m,20)',
        background: '#d5f1ea80',
      },
      {
        date: 'dyndatetime(y,m,29)',
        background: '#ffdbdb80',
      },
      {
        date: 'dyndatetime(y,m+1,3)',
        background: '#fbedd080',
      },
      {
        date: 'dyndatetime(y,m+1,10)',
        background: '#fbedd080',
      },
      {
        background: '#d6e81e1a',
        recurring: {
          repeat: 'monthly',
          day: -1,
        },
      },
    ],
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
