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
  selected: number[] = [1];
  calView: MbscEventcalendarView = {
    schedule: { type: 'week' },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/custom-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
      this.filterEvents();
    });
  }

  filterEvents = () => {
    const ev = [];
    for (const item of this.myEvents) {
      if (this.selected.indexOf(item.participant) > -1) {
        if (item.participant === 1) {
          item.color = '#328e39';
        } else if (item.participant === 2) {
          item.color = '#00aabb';
        } else if (item.participant === 3) {
          item.color = '#ea72c0';
        }
        ev.push(item);
      }
    }
    this.filteredEvents = ev;
  };

  filter(value: any): void {
    this.filterEvents();
    this.notify.toast({
      //<hidden>
      // theme,//</hidden>
      message:
        (this.selected.find((item) => +item === value) ? 'Showing ' : 'Hiding ') +
        document.querySelector('.md-header-filter-name-' + value).textContent +
        ' events',
    });
  }
}
