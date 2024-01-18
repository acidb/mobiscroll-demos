import { Component, OnInit } from '@angular/core';
import { setOptions, MbscCalendarEvent, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-event-hooks',
  templateUrl: './event-hooks.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];

  view: MbscEventcalendarView = {
    agenda: {
      type: 'month',
    },
  };

  onDestroy(): void {
    // Your custom event handler goes here
  }
  onEventClick(): void {
    // Logic for event click
  }
  onEventDoubleClick(): void {
    // Logic for event double click
  }
  onEventHoverIn(): void {
    // Logic for event hover in
  }
  onEventHoverOut(): void {
    // Logic for event hover out
  }
  onEventRightClick(): void {
    // Logic for event right click
  }
  onInit(): void {
    // Logic running on component init
  }
  onPageChange(): void {
    // Your custom event handler goes here
  }
  onPageLoaded(): void {
    // Use it to inject custom markup & attach custom listeners
  }
  onPageLoading(): void {
    // Use it to load data on demand
  }
  onSelectedDateChange(): void {
    // Use it to keep track of the selected date externally
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp: any) => {
      this.myEvents = resp;
    });
  }
}
