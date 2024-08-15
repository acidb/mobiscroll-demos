import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-event-hooks',
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

  onCellClick(): void {
    /* Logic for cell click */
  }
  onCellDoubleClick(): void {
    /* Logic for cell double click */
  }
  onCellRightClick(): void {
    /* Logic for cell right click */
  }
  onDestroy(): void {
    // Your custom event handler goes here
  }
  onEventClick(): void {
    // Logic for event click
  }
  onEventCreate(): void {
    // Logic for event create
  }
  onEventCreated(): void {
    // Logic for event created
  }
  onEventCreateFailed(): void {
    // Logic for failed event create
  }
  onEventDelete(): void {
    // Logic for event delete
  }
  onEventDeleted(): void {
    // Logic for event deleted
  }
  onEventDoubleClick(): void {
    // Logic for event double click
  }
  onEventDragStart(): void {
    // Logic for event drag start
  }
  onEventDragEnd(): void {
    // Logic for event drag end
  }
  onEventDragEnter(): void {
    // Logic for event drag enter
  }
  onEventDragLeave(): void {
    // Logic for event drag leave
  }
  onEventHoverIn(): void {
    // Logic for event hover in
  }
  onEventHoverOut(): void {
    // Logic for event hover out
  }
  onEventUpdate(): void {
    // Logic for event update
  }
  onEventUpdated(): void {
    // Logic for event updated
  }
  onEventUpdateFailed(): void {
    // Logic for event update
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
