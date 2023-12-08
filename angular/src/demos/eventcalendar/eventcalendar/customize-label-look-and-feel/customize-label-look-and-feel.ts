import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscEventcalendarOptions, Notifications, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();

@Component({
  selector: 'customize-label-look-and-feel',
  styleUrl: './customize-label-look-and-feel.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './customize-label-look-and-feel.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  eventSettings: MbscEventcalendarOptions = {
    // locale,
    // theme,
    view: {
      calendar: { labels: true },
    },
    onEventClick: (event, inst) => {
      this.notify.toast({
        //<hidden>
        // theme,//</hidden>
        message: event.event.title,
      });
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }

  logData(data) {
    console.log(data);
  }
}
