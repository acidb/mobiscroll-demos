import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-event-bulk-actions-edit-delete-update',
  styleUrl: './event-bulk-actions-edit-delete-update.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './event-bulk-actions-edit-delete-update.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  @ViewChild('calendar', { static: false })
  calendar!: MbscEventcalendar;

  @ViewChild('menu', { static: false })
  menu!: MbscSelect;

  confirmOpen: boolean = false;
  myEvents: MbscCalendarEvent[] = [];
  mySelectedEvents: MbscCalendarEvent[] = [];
  menuAction: string | null = null;
  menuAnchor!: HTMLElement;

  calendarOptions: MbscEventcalendarOptions = {
    selectMultipleEvents: true,
    view: {
      agenda: {
        type: 'month',
      },
    },
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
    onSelectedEventsChange: (args) => {
      this.mySelectedEvents = args.events;
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
    buttons: [],
    data: [
      { value: 'update', text: 'Update' },
      { value: 'delete', text: 'Delete' },
    ],
    display: 'anchored',
    touchUi: false,
    onChange: (args) => {
      if (args.value === 'update') {
        this.updateSelectedEvents();
      } else if (args.value === 'delete') {
        this.deleteSelectedEvents();
      }
    },
    onClose: () => {
      setTimeout(() => {
        // Clear selection
        this.menuAction = null;
      });
    },
  };

  updateSelectedEvents(): void {
    const updatedEvents = [...this.myEvents];
    for (const event of this.mySelectedEvents) {
      const index = updatedEvents.findIndex((x) => x.id === event.id);
      // Handle recurring event occurrence
      if (event.recurring) {
        // Create a new event, with updated color and id
        const newEvent: MbscCalendarEvent = {
          ...event,
          color: 'orange',
          id: event.id + '_' + formatDate('YYYY-MM-DD', new Date(event.start as string)),
          recurring: undefined,
        };
        // Update the original event with a recurring exception
        const updatedEvent: MbscCalendarEvent = {
          ...event.original!,
          recurringException: [...((event.recurringException as string[]) || []), event.start],
        };
        updatedEvents.splice(index, 1, updatedEvent);
        updatedEvents.push(newEvent);
      } else {
        // Update the event color
        const updatedEvent = { ...event, color: 'orange' };
        updatedEvents.splice(index, 1, updatedEvent);
      }
    }
    this.myEvents = updatedEvents;
    this.mySelectedEvents = [];
    this.notify.toast({
      message: "All selected event's color changed to orange",
    });
  }

  deleteSelectedEvents(): void {
    this.confirmOpen = true;
    this.notify.confirm({
      title: 'Are you sure you want to delete the following events?',
      message: this.mySelectedEvents.map((e) => e.title).join(','),
      okText: 'Delete',
      callback: (result) => {
        if (result) {
          const updatedEvents = [...this.myEvents];
          for (const event of this.mySelectedEvents) {
            const index = updatedEvents.findIndex((x) => x.id === event.id);
            // Handle recurring event occurrence
            if (event.recurring) {
              // Update the original event with a recurring exception
              const updatedEvent: MbscCalendarEvent = {
                ...event.original!,
                recurringException: [...((event.recurringException as string[]) || []), event.start],
              };
              updatedEvents.splice(index, 1, updatedEvent);
            } else {
              // Remove the event
              updatedEvents.splice(index, 1);
            }
          }
          this.myEvents = updatedEvents;
          this.mySelectedEvents = [];
          this.notify.toast({
            message: 'Deleted',
          });
        }
        this.confirmOpen = false;
      },
    });
  }

  selectAllEvents(): void {
    this.mySelectedEvents = this.calendar.getEvents();
    this.notify.toast({
      message: 'All events selected this month',
    });
  }

  resetSelection(): void {
    this.mySelectedEvents = [];
    this.notify.toast({
      message: 'Selection cleared',
    });
  }

  onKeyDown(ev: KeyboardEvent): void {
    if (!this.confirmOpen && (ev.code === 'Delete' || ev.code === 'Backspace' || ev.keyCode === 8 || ev.keyCode === 46)) {
      this.deleteSelectedEvents();
    }
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
