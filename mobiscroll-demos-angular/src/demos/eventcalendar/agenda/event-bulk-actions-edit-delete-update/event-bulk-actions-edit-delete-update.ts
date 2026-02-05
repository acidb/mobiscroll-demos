import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendar,
  MbscEventcalendarOptions,
  MbscModule,
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
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
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

  confirmOpen = false;
  myEvents: MbscCalendarEvent[] = [];
  selectedEvent?: MbscCalendarEvent;
  selectedEvents: MbscCalendarEvent[] = [];
  menuAction: string | null = null;
  menuAnchor!: HTMLElement;

  calendarOptions: MbscEventcalendarOptions = {
    selectMultipleEvents: true,
    view: {
      agenda: { type: 'month' },
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
        return false;
      }
      return true;
    },
    onEventRightClick: (args) => {
      args.domEvent.preventDefault();
      this.selectedEvent = args.event;
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
    const events = this.selectedEvents.length === 0 && this.selectedEvent ? [this.selectedEvent] : this.selectedEvents;
    for (const event of events) {
      const index = updatedEvents.findIndex((x) => x.id === event.id);
      // Handle recurring event occurrence
      if (event.recurring) {
        // Create a new event, with updated color and id
        const newEvent: MbscCalendarEvent = {
          ...event,
          color: 'orange',
          id: event.id + '_' + formatDate('YYYY-MM-DD', event.start as Date),
          recurring: undefined,
        };
        // Update the original event with a recurring exception
        const updatedEvent = event.original!;
        const updatedExceptionDates = (updatedEvent.recurringException as Date[]) || [];
        updatedExceptionDates.push(event.start as Date);
        updatedEvent.recurringException = updatedExceptionDates;
        updatedEvents.splice(index, 1, updatedEvent);
        updatedEvents.push(newEvent);
      } else {
        // Update the event color
        const updatedEvent = { ...event, color: 'orange' };
        updatedEvents.splice(index, 1, updatedEvent);
      }
    }
    this.myEvents = updatedEvents;
    this.selectedEvents = [];
    this.notify.toast({
      message: "All selected event's color changed to orange",
    });
  }

  deleteSelectedEvents(): void {
    const events = this.selectedEvents.length === 0 && this.selectedEvent ? [this.selectedEvent] : this.selectedEvents;
    this.confirmOpen = true;
    this.notify.confirm({
      title: 'Are you sure you want to delete the following events?',
      message: events.map((e) => e.title).join(', '),
      okText: 'Delete',
      callback: (result) => {
        if (result) {
          const updatedEvents = [...this.myEvents];
          for (const event of events) {
            const index = updatedEvents.findIndex((x) => x.id === event.id);
            // Handle recurring event occurrence
            if (event.recurring) {
              // Update the original event with a recurring exception
              const updatedEvent = event.original!;
              const updatedExceptionDates = (updatedEvent.recurringException as Date[]) || [];
              updatedExceptionDates.push(event.start as Date);
              updatedEvent.recurringException = updatedExceptionDates;
              updatedEvents.splice(index, 1, updatedEvent);
            } else {
              // Remove the event
              updatedEvents.splice(index, 1);
            }
          }
          this.myEvents = updatedEvents;
          this.selectedEvents = [];
          this.notify.toast({
            message: 'Deleted',
          });
        }
        this.confirmOpen = false;
      },
    });
  }

  selectAllEvents(): void {
    this.selectedEvents = this.calendar.getEvents();
    this.notify.toast({
      message: 'All events selected from view',
    });
  }

  resetSelection(): void {
    this.selectedEvents = [];
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
