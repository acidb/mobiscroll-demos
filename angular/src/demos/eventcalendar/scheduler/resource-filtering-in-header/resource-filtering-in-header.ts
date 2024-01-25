import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-resource-filtering-in-header',
  styleUrl: './resource-filtering-in-header.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './resource-filtering-in-header.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  myResources = [
    {
      id: '1',
      name: 'Barry',
      color: '#328e39',
      img: 'https://img.mobiscroll.com/demos/m1.png',
      checked: true,
    },
    {
      id: '2',
      name: 'Hortense',
      color: '#00aabb',
      img: 'https://img.mobiscroll.com/demos/f1.png',
      checked: false,
    },
    {
      id: '3',
      name: 'Carl',
      color: '#ea72c0',
      img: 'https://img.mobiscroll.com/demos/m2.png',
      checked: false,
    },
  ];

  myView: MbscEventcalendarView = { schedule: { type: 'week' } };

  filteredEvents: MbscCalendarEvent[] = [];

  selected = ['1'];

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/custom-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
      this.filterEvents();
    });
  }

  filterEvents(): void {
    const ev = [];
    for (const item of this.myEvents) {
      if (this.selected.indexOf('' + item['participant']) > -1) {
        if (item['participant'] === 1) {
          item.color = '#328e39';
        } else if (item['participant'] === 2) {
          item.color = '#00aabb';
        } else if (item['participant'] === 3) {
          item.color = '#ea72c0';
        }
        ev.push(item);
      }
    }
    this.filteredEvents = ev;
  }

  filter(ev: any): void {
    const value = ev.target.value;
    const checked = ev.target.checked;
    const resource = this.myResources.find((r) => r.id === value);

    this.filterEvents();

    this.notify.toast({
      message: (checked ? 'Showing ' : 'Hiding ') + (resource ? resource.name : '') + ' events',
    });
  }
}
