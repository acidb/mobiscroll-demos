import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-event-hooks',
  styleUrl: './event-hooks.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './event-hooks.html',
  standalone: false,
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
    timeline: {
      type: 'week',
      resourceReorder: true,
    },
  };
  myResources = [
    {
      id: 1,
      name: 'Ryan',
      color: '#fdf500',
    },
    {
      id: 2,
      name: 'Kate',
      color: '#ff4600',
    },
    {
      id: 3,
      name: 'John',
      color: '#ff0101',
    },
    {
      id: 4,
      name: 'Mark',
      color: '#239a21',
    },
    {
      id: 5,
      name: 'Sharon',
      color: '#8f1ed6',
    },
    {
      id: 6,
      name: 'Ashley',
      color: '#01adff',
    },
  ];

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
  onResourceClick(): void {
    // Logic for resource click
  }
  onResourceDoubleClick(): void {
    // Logic for resource double click
  }
  onResourceDragEnd(): void {
    /* Logic for resource drag start */
  }
  onResourceDragStart(): void {
    /* Logic for resource drag end */
  }
  onResourceOrderUpdate(): void {
    // Logic for resource update
  }
  onResourceCreate(): void {
    // Logic for resource create
  }
  onResourceCreated(): void {
    // Logic for resource created
  }
  onResourceDelete(): void {
    // Logic for resource delete
  }
  onResourceDeleted(): void {
    // Logic for resource deleted
  }
  onResourceDragEnter(): void {
    // Logic for resource update
  }
  onResourceDragLeave(): void {
    // Logic for resource update
  }
  onResourceRightClick(): void {
    // Logic for resource right click
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

  dragData3 = {
    name: 'External resource',
    color: '#d19494',
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/timeline-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
