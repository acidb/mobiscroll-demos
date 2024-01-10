import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'event-hooks',
  styleUrl: './event-hooks.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './event-hooks.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];
  invalid = [
    {
      start: '12:00',
      end: '13:00',
      title: 'Lunch break',
      recurring: {
        repeat: 'weekly',
        weekDays: 'MO,TU,WE,TH,FR',
      },
    },
  ];
  view: MbscEventcalendarView = {
    schedule: {
      type: 'day',
    },
  };

  onCellClick(event: any): void {
    /* Logic for cell click */
  }
  onCellDoubleClick(event: any): void {
    /* Logic for cell double click */
  }
  onCellRightClick(event: any): void {
    /* Logic for cell right click */
  }
  onDestroy(event: any): void {
    // Your custom event handler goes here
  }
  onEventClick(event: any): void {
    // Logic for event click
  }
  onEventCreate(event: any): void {
    // Logic for event create
  }
  onEventCreated(event: any): void {
    // Logic for event created
  }
  onEventCreateFailed(event: any): void {
    // Logic for failed event create
  }
  onEventDelete(event: any): void {
    // Logic for event delete
  }
  onEventDeleted(event: any): void {
    // Logic for event deleted
  }
  onEventDoubleClick(event: any): void {
    // Logic for event double click
  }
  onEventDragStart(event: any): void {
    // Logic for event drag start
  }
  onEventDragEnd(event: any): void {
    // Logic for event drag end
  }
  onEventHoverIn(event: any): void {
    // Logic for event hover in
  }
  onEventHoverOut(event: any): void {
    // Logic for event hover out
  }
  onEventUpdate(event: any): void {
    // Logic for event update
  }
  onEventUpdated(event: any): void {
    // Logic for event updated
  }
  onEventUpdateFailed(event: any): void {
    // Logic for event update
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

  dragData1 = {
    title: 'External drag 1',
    color: '#ffdab8',
  };

  dragData2 = {
    title: 'External drag 2',
    color: '#ddfcf7',
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
