import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  dragulaDraggable,
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscItemDragEvent,
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
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  @ViewChild('demoSortableList')
  demoSortableList!: ElementRef;

  @ViewChild('demoDragulaList')
  demoDragulaList!: ElementRef;

  myEvents: MbscCalendarEvent[] = [];

  myDraggableTasks: MbscCalendarEvent[] = [
    {
      id: 1,
      title: 'Task 1',
      color: '#cf4343',
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,9,30'),
    },
    {
      id: 2,
      title: 'Task 2',
      color: '#cf4343',
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,10'),
    },
    {
      id: 3,
      title: 'Task 3',
      color: '#cf4343',
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,14'),
    },
    {
      id: 4,
      title: 'Task 4',
      color: '#cf4343',
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,18'),
    },
  ];

  mySortableTasks: MbscCalendarEvent[] = [
    {
      id: 'sortable-1',
      title: 'Task 5',
      color: '#e49516',
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,9,30'),
    },
    {
      id: 'sortable-2',
      title: 'Task 6',
      color: '#e49516',
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,15'),
    },
    {
      id: 'sortable-3',
      title: 'Task 7',
      color: '#e49516',
      start: dyndatetime('y,m,d,8,30'),
      end: dyndatetime('y,m,d,11'),
    },
    {
      id: 'sortable-4',
      title: 'Task 8',
      color: '#e49516',
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,17'),
    },
  ];

  myDragulaTasks: MbscCalendarEvent[] = [
    {
      id: 'dragula-1',
      title: 'Task 9',
      color: '#1ca11a',
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,9,30'),
    },
    {
      id: 'dragula-2',
      title: 'Task 10',
      color: '#1ca11a',
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,15'),
    },
    {
      id: 'dragula-3',
      title: 'Task 11',
      color: '#1ca11a',
      start: dyndatetime('y,m,d,8,30'),
      end: dyndatetime('y,m,d,11'),
    },
    {
      id: 'dragula-4',
      title: 'Task 12',
      color: '#1ca11a',
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,17'),
    },
  ];

  calendarOptions: MbscEventcalendarOptions = {
    dragToMove: true,
    dragToCreate: true,
    externalDrop: true,
    externalDrag: true,
    view: {
      calendar: { labels: true },
    },
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
    onEventDeleted: (args) => {
      this.notify.toast({
        message: args.event.title + ' unscheduled',
      });
    },
  };

  getHours(event: MbscCalendarEvent) {
    const eventLength = Math.round(Math.abs(+new Date(event.end as string) - +new Date(event.start as string)) / (60 * 60 * 1000));
    return eventLength + ' hour' + (eventLength > 1 ? 's' : '');
  }

  getDragData(data: MbscCalendarEvent): string {
    return JSON.stringify(data);
  }

  onItemDrop(args: MbscItemDragEvent): void {
    if (args.data) {
      this.myDraggableTasks = [...this.myDraggableTasks, args.data];
    }
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/drag-drop-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }

  ngAfterViewInit(): void {
    const sortableInstance = new Sortable(this.demoSortableList.nativeElement, {
      animation: 150,
      forceFallback: true,
    });

    sortableJsDraggable.init(sortableInstance, {
      cloneSelector: '.sortable-drag',
    });

    const drake = dragula([this.demoDragulaList.nativeElement]);

    dragulaDraggable.init(drake);
  }
}
