import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscModule,
  MbscPageChangeEvent,
  MbscPageLoadedEvent,
  MbscPageLoadingEvent,
  MbscSelectedDateChangeEvent,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-event-hooks',
  templateUrl: './event-hooks.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];
  myView: MbscEventcalendarView = { agenda: { type: 'month' } };

  onDestroy(): void {
    // Logic running on component destroy
    console.log('onDestroy');
  }

  onEventClick(args: MbscEventClickEvent): void {
    // Logic for event click
    console.log('onEventClick', args);
  }

  onEventDoubleClick(args: MbscEventClickEvent): void {
    // Logic for event double click
    console.log('onEventDoubleClick', args);
  }

  onEventHoverIn(args: MbscEventClickEvent): void {
    // Logic for event hover in
    console.log('onEventHoverIn', args);
  }

  onEventHoverOut(args: MbscEventClickEvent): void {
    // Logic for event hover out
    console.log('onEventHoverOut', args);
  }

  onEventRightClick(args: MbscEventClickEvent): void {
    // Logic for event right click
    console.log('onEventRightClick', args);
  }

  onInit(): void {
    // Logic running on component init
    console.log('onInit');
  }

  onPageChange(args: MbscPageChangeEvent): void {
    // Logic running on calendar page change
    console.log('onPageChange', args);
  }

  onPageLoaded(args: MbscPageLoadedEvent): void {
    // Use it to inject custom markup & attach custom listeners
    console.log('onPageLoaded', args);
  }

  onPageLoading(args: MbscPageLoadingEvent): void {
    // Use it to load data on demand
    console.log('onPageLoading', args);
  }

  onSelectedDateChange(args: MbscSelectedDateChangeEvent): void {
    // Use it to keep track of the selected date
    console.log('onSelectedDateChange', args);
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
