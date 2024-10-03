import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { formatDate, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-timeline-resource-details-side-panel-footer',
  styleUrl: './timeline-resource-details-side-panel-footer.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './timeline-resource-details-side-panel-footer.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @ViewChild('myCalendar', { static: false })
  myCalendar: any;

  formatDate = formatDate;
  myEvents: MbscCalendarEvent[] = [];
  loadedEvents: MbscCalendarEvent[] = [];
  sortColumn: string = '';
  sortDirection: string = 'asc';
  sortDay: any = null;
  totalRevenue: any;

  myResources: MbscResource[] = [
    {
      id: 1,
      name: 'Horizon',
      seats: 1200,
      color: '#4a4a4a',
      price: 1000,
    },
    {
      id: 2,
      name: 'Apex Hall',
      seats: 90,
      color: '#fdf500',
      price: 600,
    },
    {
      id: 3,
      name: 'Jade Room',
      seats: 700,
      color: '#00aaff',
      price: 900,
    },
    {
      id: 4,
      name: 'Dome Arena',
      seats: 850,
      color: '#239a21',
      price: 750,
    },
    {
      id: 5,
      name: 'Forum Plaza',
      seats: 900,
      color: '#8f1ed6',
      price: 700,
    },
    {
      id: 6,
      name: 'Gallery',
      seats: 300,
      color: '#0077b6',
      price: 650,
    },
    {
      id: 7,
      name: 'Icon Hall',
      seats: 450,
      color: '#e63946',
      price: 850,
    },
    {
      id: 8,
      name: 'Broadway',
      seats: 250,
      color: '#ff0101',
      price: 800,
    },
    {
      id: 9,
      name: 'Central Hub',
      seats: 400,
      color: '#01adff',
      price: 1100,
    },
    {
      id: 10,
      name: 'Empire Hall',
      seats: 550,
      color: '#ff4600',
      price: 950,
    },
  ];

  view: MbscEventcalendarView = {
    timeline: {
      type: 'month',
    },
  };

  getUTCDateOnly(d: Date) {
    return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
  }

  getDayDiff(d1: Date, d2: Date) {
    return Math.round((this.getUTCDateOnly(d2) - this.getUTCDateOnly(d1)) / (60 * 60 * 24 * 1000)) + 1;
  }

  getRevenue(resource: MbscResource) {
    if (this.myCalendar) {
      let days = 0;
      for (const event of this.loadedEvents) {
        if (event.resource === resource.id) {
          days += this.getDayDiff(new Date(event.start as Date), new Date(event.end as Date));
        }
      }
      return days * resource['price'];
    } else {
      return 0;
    }
  }

  getOccuppancy(data: any) {
    const events: MbscCalendarEvent[] = data.events;
    let occuppancy = 0;
    if (events) {
      let resourceIds: string[] = [];
      let nr = 0;
      for (const event of events) {
        const resource = event.resource as string;
        if (resourceIds.indexOf(resource) < 0) {
          nr++;
          resourceIds = [...resourceIds, resource];
        }
      }
      occuppancy = (nr * 100) / this.myResources.length;
    }
    return occuppancy.toFixed(0);
  }

  getSortArrow(column: string, day: any = null): string {
    if (this.sortColumn === column && day === this.sortDay) {
      return this.sortDirection === 'asc' ? 'asc' : this.sortDirection === 'desc' ? 'desc' : 'def';
    }
    return 'def';
  }

  getBusyHours(resource: MbscResource, startOfDay: number): number {
    const endOfDay = startOfDay + 86400000;

    return this.myEvents.reduce((total, event) => {
      if (event.resource === resource.id) {
        const eventStart = Math.max(startOfDay, new Date(event.start as Date).getTime());
        const eventEnd = Math.min(endOfDay, new Date(event.end as Date).getTime());
        return eventStart < eventEnd ? total + (eventEnd - eventStart) / (1000 * 60 * 60) : total;
      }
      return total;
    }, 0);
  }

  sortResources(column: string, day: any = null): void {
    if (this.sortColumn === column && day === this.sortDay) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : this.sortDirection === 'desc' ? 'def' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.sortDay = day;

    this.myResources = this.myResources
      .map((resource) => ({
        ...resource,
        busyHours: this.getBusyHours(resource, this.sortDay) - 24,
      }))
      .sort((a: any, b: any) => {
        if (this.sortDirection === 'asc') {
          return a[this.sortColumn] > b[this.sortColumn] ? 1 : -1;
        }
        if (this.sortDirection === 'desc') {
          return a[this.sortColumn] < b[this.sortColumn] ? 1 : -1;
        }
        return a.id - b.id;
      });
  }

  prepareData() {
    setTimeout(() => {
      this.loadedEvents = this.myCalendar.getEvents();
      this.myResources.forEach((resource) => {
        resource['revenue'] = this.getRevenue(resource);
      });
      this.totalRevenue = this.myResources.reduce((total, resource) => total + resource['revenue'], 0);
    }, 0);
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/multiday-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
      this.prepareData();
    });
  }
}
