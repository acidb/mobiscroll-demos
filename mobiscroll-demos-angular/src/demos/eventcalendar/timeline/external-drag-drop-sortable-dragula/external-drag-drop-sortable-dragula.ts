import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  dragulaDraggable,
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscResource,
  Notifications,
  setOptions /* localeImport */,
  sortableJsDraggable,
} from '@mobiscroll/angular';
import dragula from 'dragula';
import Sortable from 'sortablejs';
import { dyndatetime } from '../../../../app/app.util';
import 'dragula/dist/dragula.css';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-eventcalendar-external-drag-drop-sortable-dragula',
  styleUrl: './external-drag-drop-sortable-dragula.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './external-drag-drop-sortable-dragula.html',
  providers: [Notifications],
  standalone: false,
})
export class AppComponent implements AfterViewInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  @ViewChild('demoSortableTaskList')
  demoSortableTaskList!: ElementRef;

  @ViewChild('demoDragulaTaskList')
  demoDragulaTaskList!: ElementRef;

  @ViewChild('demoSortableResourceList')
  demoSortableResourceList!: ElementRef;

  @ViewChild('demoDragulaResourceList')
  demoDragulaResourceList!: ElementRef;

  myEvents: MbscCalendarEvent[] = [];

  myDraggableTasks: MbscCalendarEvent[] = [
    {
      id: 'draggable-1',
      title: 'Task 1',
      color: '#cf4343',
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,9,30'),
    },
    {
      id: 'draggable-2',
      title: 'Task 2',
      color: '#cf4343',
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,10'),
    },
    {
      id: 'draggable-3',
      title: 'Task 3',
      color: '#cf4343',
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,14'),
    },
    {
      id: 'draggable-4',
      title: 'Task 4',
      color: '#cf4343',
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,18'),
    },
  ];

  mySortableTasks: MbscCalendarEvent[] = [
    {
      id: 'sortable-1',
      title: 'Task 1',
      color: '#d1891f',
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,9,30'),
    },
    {
      id: 'sortable-2',
      title: 'Task 2',
      color: '#d1891f',
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,15'),
    },
    {
      id: 'sortable-3',
      title: 'Task 3',
      color: '#d1891f',
      start: dyndatetime('y,m,d,8,30'),
      end: dyndatetime('y,m,d,11'),
    },
    {
      id: 'sortable-4',
      title: 'Task 4',
      color: '#d1891f',
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,21'),
    },
  ];

  myDragulaTasks: MbscCalendarEvent[] = [
    {
      id: 'dragula-1',
      title: 'Task 5',
      color: '#1ca11a',
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,9,30'),
    },
    {
      id: 'dragula-2',
      title: 'Task 6',
      color: '#1ca11a',
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,15'),
    },
    {
      id: 'dragula-3',
      title: 'Task 7',
      color: '#1ca11a',
      start: dyndatetime('y,m,d,8,30'),
      end: dyndatetime('y,m,d,11'),
    },
    {
      id: 'dragula-4',
      title: 'Task 8',
      color: '#1ca11a',
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,20,30'),
    },
  ];

  myDraggableResources: MbscResource[] = [
    {
      id: 'draggable-1',
      name: 'Resource 1',
    },
    {
      id: 'draggable-2',
      name: 'Resource 2',
    },
    {
      id: 'draggable-3',
      name: 'Resource 3',
    },
    {
      id: 'draggable-4',
      name: 'Resource 4',
    },
  ];

  mySortableResources: MbscResource[] = [
    {
      id: 'sortable-1',
      name: 'Resource 5',
    },
    {
      id: 'sortable-2',
      name: 'Resource 6',
    },
    {
      id: 'sortable-3',
      name: 'Resource 7',
    },
    {
      id: 'sortable-4',
      name: 'Resource 8',
    },
  ];

  myDragulaResources: MbscResource[] = [
    {
      id: 'dragula-1',
      name: 'Resource 9',
    },
    {
      id: 'dragula-2',
      name: 'Resource 10',
    },
    {
      id: 'dragula-3',
      name: 'Resource 11',
    },
    {
      id: 'dragula-4',
      name: 'Resource 12',
    },
  ];

  calendarOptions: MbscEventcalendarOptions = {
    externalDrop: true,
    externalResourceDrop: true,
    onEventCreated: (args) => {
      if (args.action === 'externalDrop') {
        setTimeout(() => {
          this.myDraggableTasks = this.myDraggableTasks.filter((item) => item.id !== args.event.id);
          this.mySortableTasks = this.mySortableTasks.filter((item) => item.id !== args.event.id);
          this.myDragulaTasks = this.myDragulaTasks.filter((item) => item.id !== args.event.id);
        });
      }
      this.notify.toast({
        message: args.event.title + ' added',
      });
    },
    onResourceCreated: (args) => {
      if (args.type === 'onResourceCreated') {
        setTimeout(() => {
          this.myDraggableResources = this.myDraggableResources.filter((item) => item.id !== args.resource.id);
          this.mySortableResources = this.mySortableResources.filter((item) => item.id !== args.resource.id);
          this.myDragulaResources = this.myDragulaResources.filter((item) => item.id !== args.resource.id);
        });
      }
      this.notify.toast({
        message: args.resource.name + ' added',
      });
    },
    resources: [
      { name: 'Resource A', id: 'res-1' },
      { name: 'Resource B', id: 'res-2' },
      { name: 'Resource C', id: 'res-3' },
      { name: 'Resource D', id: 'res-4' },
      { name: 'Resource E', id: 'res-5' },
    ],
    view: { timeline: { type: 'day' } },
  };

  getHours(event: MbscCalendarEvent) {
    const eventLength = Math.round(Math.abs(+new Date(event.end as string) - +new Date(event.start as string)) / (60 * 60 * 1000));
    return eventLength + ' hour' + (eventLength > 1 ? 's' : '');
  }

  getTaskDragData(task: any): string {
    const data = {
      id: task.id,
      title: task.title,
      start: task.start,
      end: task.end,
      color: task.color,
    };
    return JSON.stringify(data);
  }

  getResourceDragData(resource: MbscResource): string {
    const data = {
      id: resource.id,
      name: resource.name,
    };
    return JSON.stringify(data);
  }

  ngAfterViewInit(): void {
    const sortableTaskInstance = new Sortable(this.demoSortableTaskList.nativeElement, {
      animation: 150,
      forceFallback: true,
    });

    sortableJsDraggable.init(sortableTaskInstance, {
      cloneSelector: '.sortable-drag',
    });

    const sortableResourceInstance = new Sortable(this.demoSortableResourceList.nativeElement, {
      animation: 150,
      forceFallback: true,
    });

    sortableJsDraggable.init(sortableResourceInstance, {
      cloneSelector: '.sortable-drag',
      type: 'resource',
    });

    const drake1 = dragula([this.demoDragulaTaskList.nativeElement]);

    dragulaDraggable.init(drake1);

    const drake2 = dragula([this.demoDragulaResourceList.nativeElement]);

    dragulaDraggable.init(drake2, {
      type: 'resource',
    });
  }
}
