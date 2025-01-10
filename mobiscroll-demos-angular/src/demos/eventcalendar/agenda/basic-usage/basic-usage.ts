import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-basic-usage',
  templateUrl: './basic-usage.html',
  providers: [Notifications],
  standalone: false,
})
export class AppComponent implements AfterViewInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  myView: MbscEventcalendarView = { agenda: { type: 'month' } };

  onEventClick(args: MbscEventClickEvent): void {
    this.notify.toast({
      message: args.event.title,
    });
  }

  ngAfterViewInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
