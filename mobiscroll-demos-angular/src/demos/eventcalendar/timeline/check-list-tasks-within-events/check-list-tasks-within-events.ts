import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarOptions,
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
  selector: 'app-timeline-timeline-resource-height',
  styleUrl: './check-list-tasks-within-events.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './check-list-tasks-within-events.html',
  providers: [Notifications],
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  calendarOptions: MbscEventcalendarOptions = {
    dragToCreate: true,
    clickToCreate: true,
    dragToMove: true,
    dragToResize: true,
    view: {
      timeline: {
        type: 'week',
        eventHeight: 'variable',
        eventList: true,
      },
    },
    extendDefaultEvent: () => ({
      title: 'New Event',
      tasks: ['Default task'],
    }),
  };

  myEvents: MbscCalendarEvent[] = [];

  myResources: MbscResource[] = [
    {
      id: 1,
      name: 'Site Plumbing Squad',
      description: 'Elite construction plumbers ensuring flawless pipeline installations on every site.',
      color: '#01adff',
    },
    {
      id: 2,
      name: 'Pipeline Builders',
      description: 'Constructing fluid pathways, one precision connection at a time.',
      color: '#239a21',
    },
    {
      id: 3,
      name: 'Blueprint Plumbers',
      description: 'Turning plans into precise pipelines with expert craftsmanship.',
      color: '#ff4600',
    },
    {
      id: 4,
      name: 'Site Supply Specialists',
      description: 'Delivering essential plumbing materials promptly to construction sites',
      color: '#4981d6',
    },
    {
      id: 5,
      name: 'Infrastructure Installers',
      description: ' Building the backbone of modern plumbing systems efficiently.',
      color: '#f1e920',
    },
    {
      id: 6,
      name: 'Steel Sinks Squad',
      description: 'Installing robust sinks for industrial and commercial settings.',
      color: '#f7961e',
    },
  ];

  addTask(event: MbscCalendarEventData): void {
    const ev: MbscCalendarEvent = event.original!;
    const index = this.myEvents.findIndex((e) => e.id === ev.id);
    this.notify.prompt({
      title: 'Add new task to ' + ev.title,
      callback: (value) => {
        if (value) {
          const newEventList = [...this.myEvents];
          ev['tasks'].push(value);
          newEventList.splice(index, 1, ev);
          this.myEvents = newEventList;
          this.notify.toast({
            duration: 3000,
            message: 'Tasks updated for ' + ev.title,
          });
        }
      },
    });
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events-check-list-tasks/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
