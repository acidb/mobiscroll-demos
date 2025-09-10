import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscModule,
  MbscResource,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-resource-filtering-in-header',
  styleUrl: './resource-filtering-in-header.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './resource-filtering-in-header.html',
  providers: [Notifications],
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  myResources: MbscResource[] = [
    {
      id: 1,
      name: 'Barry',
      color: '#328e39',
      img: 'https://img.mobiscroll.com/demos/m1.png',
    },
    {
      id: 2,
      name: 'Hortense',
      color: '#00aabb',
      img: 'https://img.mobiscroll.com/demos/f1.png',
    },
    {
      id: 3,
      name: 'Carl',
      color: '#ea72c0',
      img: 'https://img.mobiscroll.com/demos/m2.png',
    },
  ];

  myView: MbscEventcalendarView = { agenda: { type: 'month' } };

  filteredEvents: MbscCalendarEvent[] = [];

  selectedResources = [1];

  onChange(ev: Event): void {
    const target = ev.target as HTMLInputElement;
    const resource = this.myResources.find((r) => r.id === +target.value);

    this.filteredEvents = this.myEvents.filter((e) => this.selectedResources.indexOf(e.resource as number) !== -1);

    this.notify.toast({
      message: (target.checked ? 'Showing ' : 'Hiding ') + (resource ? resource.name : '') + ' events',
    });
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/filter-resource-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
      this.filteredEvents = this.myEvents.filter((e) => this.selectedResources.indexOf(e.resource as number) !== -1);
    });
  }
}
