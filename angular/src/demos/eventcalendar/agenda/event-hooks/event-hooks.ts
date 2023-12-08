import { Component, OnInit } from '@angular/core';
import { setOptions, MbscCalendarEvent, MbscEventcalendarView /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'event-hooks',
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

  onDestroy(event: any): void {
    // Your custom event handler goes here
  }
  onEventClick(event: any): void {
    // Logic for event click
  }
  onEventDoubleClick(event: any): void {
    // Logic for event double click
  }
  onEventHoverIn(event: any): void {
    // Logic for event hover in
  }
  onEventHoverOut(event: any): void {
    // Logic for event hover out
  }
  onEventRightClick(event: any): void {
    // Logic for event right click
  }
  onInit(event: any): void {
    // Logic running on component init
  }
  onPageChange(event: any): void {
    // Your custom event handler goes here
  }
  onPageLoaded(event: any): void {
    // Use it to inject custom markup & attach custom listeners
  }
  onPageLoading(event: any): void {
    // Use it to load data on demand
  }
  onSelectedDateChange(event: any): void {
    // Use it to keep track of the selected date externally
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp: any) => {
      this.myEvents = resp;
    });
  }
}
