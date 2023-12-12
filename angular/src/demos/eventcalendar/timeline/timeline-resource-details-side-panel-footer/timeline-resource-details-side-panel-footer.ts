import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { setOptions, MbscEventcalendarView, MbscCalendarEvent, MbscResource /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

const oneDay = 60000 * 60 * 24;

@Component({
  selector: 'timeline-resource-details-side-panel-footer',
  styleUrl: './timeline-resource-details-side-panel-footer.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './timeline-resource-details-side-panel-footer.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @ViewChild('mycalendar', { static: false })
  mycalendar: any;

  view: MbscEventcalendarView = {
    timeline: {
      type: 'month',
    },
  };

  myEvents: MbscCalendarEvent[] = [];

  myResources: MbscResource[] = [
    {
      id: 1,
      name: 'Flatiron Room',
      seats: 90,
      color: '#fdf500',
      price: 600,
    },
    {
      id: 2,
      name: 'The Capital City',
      seats: 250,
      color: '#ff0101',
      price: 800,
    },
    {
      id: 3,
      name: 'Heroes Square',
      seats: 400,
      color: '#01adff',
      price: 1100,
    },
    {
      id: 4,
      name: 'Hall of Faces',
      seats: 850,
      color: '#239a21',
      price: 750,
    },
    {
      id: 5,
      name: 'King’s Landing',
      seats: 550,
      color: '#ff4600',
      price: 950,
    },
    {
      id: 6,
      name: 'Gathering Field',
      seats: 900,
      color: '#8f1ed6',
      price: 700,
    },
  ];

  getUTCDateOnly(d: Date) {
    return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
  }

  getDayDiff(d1: Date, d2: Date) {
    return Math.round((this.getUTCDateOnly(d2) - this.getUTCDateOnly(d1)) / oneDay) + 1;
  }

  getRevenue(resource: MbscResource) {
    if (this.mycalendar) {
      let days = 0;
      for (const event of this.mycalendar.getEvents()) {
        if (event.resource === resource.id) {
          days += this.getDayDiff(new Date(event.start), new Date(event.end));
        }
      }
      return days * resource.price;
    } else {
      return 0;
    }
  }

  getTotal() {
    let total = 0;
    for (const resource of this.myResources) {
      total += this.getRevenue(resource);
    }
    return total;
  }

  getOccuppancy(data: any) {
    const events = data.events;
    let occuppancy = 0;
    if (events) {
      var resourceIds = [];
      var nr = 0;
      for (const event of events) {
        if (resourceIds.indexOf(event.resource) < 0) {
          nr++;
          resourceIds = [...resourceIds, event.resource];
        }
      }
      occuppancy = ((nr * 100) / this.myResources.length).toFixed(0);
    }
    return occuppancy;
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/multiday-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
