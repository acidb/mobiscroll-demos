import { Component, OnInit } from '@angular/core';
import { setOptions, Notifications, MbscEventcalendarView, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'basic-usage',
  templateUrl: './basic-usage.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  view: MbscEventcalendarView = {
    agenda: { type: 'month' },
  };

  onEventClick(event: any): void {
    this.notify.toast({
      //<hidden>
      // theme,//</hidden>
      message: event.event.title,
    });
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp: any) => {
      this.myEvents = resp;
    });
  }
}
