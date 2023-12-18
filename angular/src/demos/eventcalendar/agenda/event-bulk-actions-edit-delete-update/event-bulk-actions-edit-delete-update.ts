import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MbscEventcalendarOptions,
  MbscCalendarEvent,
  MbscSelectOptions,
  Notifications,
  setOptions,
  formatDate /* localeImport */,
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

  @ViewChild('mycalendar', { static: false })
  mycalendar: any;

  @ViewChild('menu', { static: false })
  menu!: any;

  myEvents: MbscCalendarEvent[] = [];

  mySelectedEvents: any = [];
  eventTitles = [];
  selectValue: any;
  firstDay: any;
  lastDay: any;
  menuAnchor: any;
  confirmOpen: boolean = false;

  getSelectedEventTitles(events: any) {
    let titles: any = [];
    for (const event of events) {
      titles = [...titles, event.title];
    }
    return titles;
  }

  refreshSelectedEvents(events: any) {
    this.mySelectedEvents = events;
    this.eventTitles = this.getSelectedEventTitles(events);
  }

  updateSelectedEvents() {
    const events: any = this.mySelectedEvents.length === 0 ? [this.mySelectedEvents] : this.mySelectedEvents;
    let eventsToUpdate = [...this.myEvents];
    for (const event of events) {
      if (event.recurring) {
        const origEvent = event.original;
        let exc = origEvent.recurringException || [];
        const newEvent = event;

        newEvent.recurring = undefined;
        newEvent.color = 'orange';
        newEvent.id += '_' + formatDate('YYYY-MM-DD', event.start);
        eventsToUpdate = [...eventsToUpdate, newEvent];

        exc = [...exc, event.start];
        origEvent.recurringException = exc;

        // update the event in the list
        const index = eventsToUpdate.findIndex((x) => x.id === origEvent.id);
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
              const origEvent = event.original;
              let exc = origEvent.recurringException || [];
              exc = [...exc, event.start];
              origEvent.recurringException = exc;

              // update the event in the list
              const index = eventsToUpdate.findIndex((x) => x.id === origEvent.id);
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

  calendarSettings: MbscEventcalendarOptions = {
    clickToCreate: true,
    selectMultipleEvents: true,
    view: {
      agenda: {
        type: 'month',
      },
    },
    onEventUpdate: (args: any) => {
      if (args.isDelete) {
        if (!this.confirmOpen) {
          this.deleteSelectedEvents();
        }
        return false;
      }
      return true;
    },
    onEventDelete: (args, inst) => {
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

  menuSettings: MbscSelectOptions = {
    touchUi: false,
    display: 'anchored',
    buttons: [],
    onChange: (args) => {
      if (args.value === 'update') {
        this.updateSelectedEvents();
      } else if (args.value === 'delete') {
        this.deleteSelectedEvents(); //this.mySelectedEvents
      }
    },
    onClose: () => {
      // clear selection
      this.selectValue = '';
    },
  };

  selectAllEvents() {
    this.refreshSelectedEvents(this.mycalendar.getEvents(this.firstDay, this.lastDay));
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

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
    document.querySelector('.md-bulk-operations')!.addEventListener('keydown', (ev: any) => {
      if (!this.confirmOpen && (ev.keyCode === 8 || ev.keyCode === 46)) {
        this.deleteSelectedEvents();
      }
    });
  }
}
