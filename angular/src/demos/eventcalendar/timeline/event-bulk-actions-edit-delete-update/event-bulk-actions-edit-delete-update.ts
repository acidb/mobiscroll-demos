import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendar,
  MbscEventcalendarOptions,
  MbscSelect,
  MbscSelectOptions,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'event-bulk-actions-edit-delete-update',
  styleUrl: './event-bulk-actions-edit-delete-update.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './event-bulk-actions-edit-delete-update.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  @ViewChild('calendar', { static: false })
  calendar!: MbscEventcalendar;

  @ViewChild('menu', { static: false })
  menu!: MbscSelect;

  myEvents: MbscCalendarEvent[] = [];

  mySelectedEvents: MbscCalendarEvent[] = [];
  eventTitles: string[] = [];
  selectValue: string | null = null;
  firstDay!: Date;
  lastDay!: Date;
  menuAnchor!: HTMLElement;
  confirmOpen: boolean = false;

  getSelectedEventTitles(events: MbscCalendarEvent[]) {
    let titles: string[] = [];
    for (const event of events) {
      titles = [...titles, event.title!];
    }
    return titles;
  }

  refreshSelectedEvents(events: MbscCalendarEvent[]) {
    this.mySelectedEvents = events;
    this.eventTitles = this.getSelectedEventTitles(events);
  }

  updateSelectedEvents() {
    const events = this.mySelectedEvents;
    let eventsToUpdate = [...this.myEvents];
    for (const event of events) {
      if (event.recurring) {
        const origEvent = event.original!;
        const exc = (origEvent.recurringException as string[]) || [];
        const newEvent = event;

        newEvent.recurring = undefined;
        newEvent.color = 'orange';
        newEvent.id += '_' + formatDate('YYYY-MM-DD', new Date(event.start as string));
        eventsToUpdate = [...eventsToUpdate, newEvent];

        origEvent.recurringException = [...exc, event.start];

        // update the event in the list
        const index = eventsToUpdate.findIndex((x) => x.id === origEvent['id']);
        eventsToUpdate.splice(index, 1, origEvent);
      } else {
        const newEv = event;
        newEv.color = 'orange';
        const index = eventsToUpdate.findIndex((x) => x.id === newEv.id);
        eventsToUpdate.splice(index, 1, newEv);
      }
    }

    this.myEvents = eventsToUpdate;
    this.refreshSelectedEvents([]);

    this.notify.toast({
      message: "All selected event's color changed to orange",
    });
  }

  deleteSelectedEvents() {
    this.confirmOpen = true;
    this.notify.confirm({
      title: 'Are you sure you want to delete the following events?',
      message: this.getSelectedEventTitles(this.mySelectedEvents).join(','),
      okText: 'Delete',
      callback: (result) => {
        if (result) {
          let eventsToUpdate = [...this.myEvents];

          for (const event of this.mySelectedEvents) {
            if (event.recurring) {
              const origEvent = event.original!;
              const exc = (origEvent.recurringException as string[]) || [];
              origEvent.recurringException = [...exc, event.start];

              // update the event in the list
              const index = eventsToUpdate.findIndex((x) => x.id === origEvent['id']);
              eventsToUpdate.splice(index, 1, origEvent);
            } else {
              eventsToUpdate = eventsToUpdate.filter((ev) => {
                return ev.id !== event.id;
              });
            }
          }

          this.myEvents = eventsToUpdate;
          this.refreshSelectedEvents([]);

          this.notify.toast({
            message: 'Deleted',
          });
        }
        this.confirmOpen = false;
      },
    });
  }

  calendarOptions: MbscEventcalendarOptions = {
    clickToCreate: true,
    selectMultipleEvents: true,
    view: {
      timeline: {
        type: 'week',
      },
    },
    resources: [
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
    ],
    onEventUpdate: (args) => {
      if (args.isDelete) {
        if (!this.confirmOpen) {
          this.deleteSelectedEvents();
        }
        return false;
      }
      return true;
    },
    onEventDelete: () => {
      if (!this.confirmOpen) {
        this.deleteSelectedEvents();
      }
      return false;
    },
    onPageLoading: (args) => {
      setTimeout(() => {
        this.firstDay = args.firstDay;
        this.lastDay = args.lastDay;
      });
    },
    onSelectedEventsChange: (args) => {
      this.refreshSelectedEvents(args.events);
    },
    onEventRightClick: (args) => {
      args.domEvent.preventDefault();
      this.menuAnchor = args.domEvent.target;
      setTimeout(() => {
        this.menu.open();
      });
    },
  };

  menuOptions: MbscSelectOptions = {
    touchUi: false,
    display: 'anchored',
    buttons: [],
    data: [
      { value: 'update', text: 'Update' },
      { value: 'delete', text: 'Delete' },
    ],
    onChange: (args) => {
      if (args.value === 'update') {
        this.updateSelectedEvents();
      } else if (args.value === 'delete') {
        this.deleteSelectedEvents();
      }
    },
    onClose: () => {
      setTimeout(() => {
        // clear selection
        this.selectValue = null;
      });
    },
  };

  selectAllEvents() {
    this.refreshSelectedEvents(this.calendar.getEvents(this.firstDay, this.lastDay));
    this.notify.toast({
      message: 'All events selected this month',
    });
  }

  resetSelection() {
    this.refreshSelectedEvents([]);
    this.notify.toast({
      message: 'Selection cleared',
    });
  }

  onKeyDown(ev: any) {
    if (!this.confirmOpen && (ev.keyCode === 8 || ev.keyCode === 46)) {
      this.deleteSelectedEvents();
    }
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/timeline-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
