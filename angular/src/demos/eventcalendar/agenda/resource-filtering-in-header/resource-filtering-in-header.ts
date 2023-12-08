import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { setOptions, Notifications, MbscEventcalendarView, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'resource-filtering-in-header',
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
  filteredEvents: MbscCalendarEvent[] = [];
  selected: any = ['1'];
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

  calView: MbscEventcalendarView = {
    agenda: {
      type: 'month',
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/filter-resource-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
      this.filterEvents();
    });
  }

  filterEvents = () => {
    const evs = [];
    for (const value of this.myEvents) {
      const item = value;
      if (this.selected.indexOf('' + item.resource) > -1) {
        evs.push(item);
      }
    }
    this.filteredEvents = evs;
  };

  filter(ev: any): void {
    const value = ev.target.value;
    const checked = ev.target.checked;
    const name = document.querySelector('.md-header-filter-name-' + value);

    this.filterEvents();
    this.notify.toast({
      message: (checked ? 'Showing ' : 'Hiding ') + (name ? name.textContent : '') + ' events',
    });
  }
}
