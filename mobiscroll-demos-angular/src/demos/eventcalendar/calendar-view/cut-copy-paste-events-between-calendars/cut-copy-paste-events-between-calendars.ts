import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscModule,
  MbscSelectOptions,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // theme,
  //locale
});

const today = new Date();
const menuData = [
  { text: 'Copy', value: 'c' },
  { text: 'Cut', value: 'x' },
  { text: 'Paste', value: 'v' },
  { text: 'Delete', value: 'delete' },
];
const disabledMenu = [
  { text: 'Copy', value: 'c', disabled: true },
  { text: 'Cut', value: 'x', disabled: true },
  { text: 'Paste', value: 'v' },
  { text: 'Delete', value: 'delete', disabled: true },
];

@Component({
  selector: 'app-eventcalendar-cut-copy-paste-events-between-calendars',
  styleUrl: './cut-copy-paste-events-between-calendars.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cut-copy-paste-events-between-calendars.html',
  providers: [Notifications],
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  @ViewChild('menu', { static: false })
  menu!: any;

  @ViewChild('dummy', { static: false })
  dummy!: any;

  firstEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,2,9'),
      end: dyndatetime('y,m,6,18'),
      title: 'Business of Software Conference',
      color: '#ff6d42',
    },
    {
      start: dyndatetime('y,m,10,7'),
      end: dyndatetime('y,m,10,8'),
      title: 'Green box to post office',
      color: '#6e7f29',
    },
    {
      start: dyndatetime('y,m,15,9,30'),
      end: dyndatetime('y,m,15,10,30'),
      title: 'Product team mtg.',
      color: '#f67944',
    },
    {
      start: dyndatetime('y,m,23,11,0'),
      end: dyndatetime('y,m,23,11,45'),
      title: 'Stakeholder mtg.',
      color: '#a144f6',
    },
    {
      start: dyndatetime('y,m,28,13,0'),
      end: dyndatetime('y,m,28,13,45'),
      title: "Lunch @ Butcher's",
      color: '#00aabb',
    },
  ];
  secondEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,4,8,45'),
      end: dyndatetime('y,m,4,10'),
      title: 'Quick mtg. with Martin',
      color: '#de3d83',
    },
    {
      start: dyndatetime('y,m,8,15,0'),
      end: dyndatetime('y,m,8,16,0'),
      title: 'General orientation',
      color: '#a71111',
    },
    {
      start: dyndatetime('y,m,10,13'),
      end: dyndatetime('y,m,14,21'),
      title: 'Friends binge marathon',
      color: '#7bde83',
    },
    {
      start: dyndatetime('y,m,23,8'),
      end: dyndatetime('y,m,27,9'),
      title: 'Product team mtg.',
      color: '#913aa7',
    },
  ];
  menuData = menuData;
  selectValue: any;
  menuAnchor: any;
  activeCalendar = 'first';
  cutCalendar = 'first';
  toDate: any = today;
  firstToDate: Date | undefined = today;
  secondToDate: Date | undefined = today;
  originDate: any = today;
  menuOpen = false;
  firstSelectedEvents: MbscCalendarEvent[] = [];
  secondSelectedEvents: MbscCalendarEvent[] = [];
  selectedEvents: MbscCalendarEvent[] = [];
  moveEvents: MbscCalendarEvent[] = [];
  pastedEvents: MbscCalendarEvent[] = [];
  deletedEvents: MbscCalendarEvent[] = [];
  action: string | undefined;

  calendarSettings: MbscEventcalendarOptions = {
    clickToCreate: true,
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    selectMultipleEvents: true,
    view: {
      calendar: {
        labels: 'all',
      },
    },
    onPageLoading: (args) => {
      if (this.activeCalendar === 'first') {
        this.firstToDate = args.month;
      } else {
        this.secondToDate = args.month;
      }
      this.toDate = args.month;
    },
    onCellRightClick: (args) => {
      if (!this.menuOpen) {
        args.domEvent.preventDefault();
        this.menuData = disabledMenu;
        this.menuAnchor = args.domEvent.target;
        setTimeout(() => {
          this.menu.open();
        });
      }
    },
    onEventRightClick: (args) => {
      const activeEvents = this.activeCalendar === 'first' ? this.firstEvents : this.secondEvents;
      if (activeEvents.length <= 1) {
        if (this.activeCalendar === 'first') {
          this.firstEvents = [args.event];
        } else {
          this.secondEvents = [args.event];
        }
      }
      args.domEvent.preventDefault();
      this.menuData = menuData;
      this.menuAnchor = args.domEvent.target;
      setTimeout(() => {
        this.menu.open();
      });
      this.menuOpen = true;
    },
    onEventDeleted: (args: any) => {
      this.deletedEvents = args.events;
      this.action = 'delete';
      this.notify.snackbar({
        button: {
          action: () => {
            const activeEvents = this.activeCalendar === 'first' ? this.firstEvents : this.secondEvents;
            let eventsToUpdate = [...activeEvents];
            for (const event of this.deletedEvents) {
              eventsToUpdate = eventsToUpdate.filter((ev) => ev.id !== event.id);
            }

            if (this.activeCalendar === 'first') {
              this.firstEvents = eventsToUpdate;
            } else {
              this.secondEvents = eventsToUpdate;
            }

            this.deletedEvents = [];
          },
          text: 'Undo',
        },
        duration: 3000,
        message: 'Event' + (this.deletedEvents.length === 1 ? '' : 's') + ' deleted',
      });
      this.dummy.nativeElement.focus();
    },
  };

  monthDiff(d1: Date, d2: Date) {
    return d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear());
  }

  pasteEvents() {
    const activeEvents: any = this.getActiveEvents();
    const activeSelectedEvents: any = this.selectedEvents;
    let eventsToUpdate = [...activeEvents];
    if (activeSelectedEvents.length > 0) {
      for (const event of activeSelectedEvents) {
        const newEvent = Object.assign({}, event);
        const startDate: any = new Date(event.start);
        const endDate: any = new Date(event.end);
        const diff = Math.abs(endDate - startDate);

        newEvent.start = startDate.setMonth(startDate.getMonth() - this.monthDiff(this.toDate, this.originDate));
        newEvent.end = new Date(startDate.getTime() + diff);

        delete newEvent.id;

        eventsToUpdate = [...eventsToUpdate, newEvent];

        this.pastedEvents = [...this.pastedEvents, newEvent];
      }

      if (this.activeCalendar === 'first') {
        this.firstEvents = eventsToUpdate;
      } else {
        this.secondEvents = eventsToUpdate;
      }

      if (this.action === 'cut') {
        let cutEvs = this.cutCalendar === 'first' ? this.firstEvents : this.secondEvents;
        this.moveEvents = [...this.selectedEvents];
        for (const event of this.selectedEvents) {
          cutEvs = cutEvs.filter((ev) => ev.id !== event.id);
        }
        if (this.cutCalendar === 'first') {
          this.firstEvents = cutEvs;
        } else {
          this.secondEvents = cutEvs;
        }

        this.notify.snackbar({
          button: {
            action: () => {
              let revertEvs = this.cutCalendar === 'first' ? this.firstEvents : this.secondEvents;
              for (const event of this.moveEvents) {
                revertEvs = [...revertEvs, event];
              }
              if (this.cutCalendar === 'first') {
                this.firstEvents = revertEvs;
              } else {
                this.secondEvents = revertEvs;
              }

              let cutEvs = this.getActiveEvents();
              for (const event of this.pastedEvents) {
                cutEvs = cutEvs.filter((ev) => ev.id !== event.id);
              }
              if (this.activeCalendar === 'first') {
                this.firstEvents = cutEvs;
              } else {
                this.secondEvents = cutEvs;
              }

              this.notify.toast({
                message: 'Event' + (this.selectedEvents.length === 1 ? '' : 's') + ' reverted',
              });
            },
            text: 'Undo',
          },
          duration: 3000,
          message: 'Event' + (this.selectedEvents.length === 1 ? '' : 's') + ' pasted',
        });
        this.dummy.nativeElement.focus();
      } else {
        this.notify.toast({
          message: 'Event' + (activeSelectedEvents.length === 1 ? '' : 's') + ' pasted',
        });
      }
      if (this.action !== 'copy') {
        this.selectedEvents = [];
      }
    }
  }

  getActiveEvents() {
    return this.activeCalendar === 'first' ? this.firstEvents : this.secondEvents;
  }

  getActiveSelectedEvents() {
    return this.activeCalendar === 'first' ? this.firstSelectedEvents : this.secondSelectedEvents;
  }

  deleteEvents() {
    const activeEvents = this.getActiveEvents();
    let eventsToUpdate = [...activeEvents];
    this.action = 'delete';
    const activeSelectedEvents = this.getActiveSelectedEvents();

    if (activeSelectedEvents.length > 0) {
      this.deletedEvents = activeSelectedEvents;

      for (const event of activeSelectedEvents) {
        eventsToUpdate = eventsToUpdate.filter((ev) => ev.id !== event.id);
      }

      if (this.activeCalendar === 'first') {
        this.firstEvents = eventsToUpdate;
      } else {
        this.secondEvents = eventsToUpdate;
      }

      this.notify.snackbar({
        button: {
          action: () => {
            for (const event of activeSelectedEvents) {
              eventsToUpdate = [...eventsToUpdate, event];
            }
            if (this.activeCalendar === 'first') {
              this.firstEvents = eventsToUpdate;
            } else {
              this.secondEvents = eventsToUpdate;
            }
            this.deletedEvents = [];
          },
          text: 'Undo',
        },
        duration: 3000,
        message: 'Event' + (activeSelectedEvents.length === 1 ? '' : 's') + ' deleted',
      });
      this.dummy.nativeElement.focus();
    }
  }

  activateAction(type: string) {
    if (this.selectedEvents.length > 0) {
      const act = type == 'copy' ? ' copied' : ' cut';
      this.originDate = this.toDate;
      this.notify.toast({
        message: 'Event' + (this.selectedEvents.length === 1 ? '' : 's') + act,
      });
    }
  }

  copyEvents() {
    if (this.activeCalendar === 'first') {
      if (this.firstSelectedEvents.length > 0) {
        this.action = 'copy';
        this.selectedEvents = this.firstSelectedEvents;
        this.activateAction('copy');
      }
    } else {
      if (this.secondSelectedEvents.length > 0) {
        this.action = 'copy';
        this.selectedEvents = this.secondSelectedEvents;
        this.activateAction('copy');
      }
    }
  }

  cutEvents() {
    if (this.activeCalendar === 'first') {
      if (this.firstSelectedEvents.length > 0) {
        this.action = 'cut';
        this.selectedEvents = this.firstSelectedEvents;
        this.cutCalendar = this.activeCalendar;
        this.activateAction('cut');
        this.deletedEvents = [];
      }
    } else {
      if (this.secondSelectedEvents.length > 0) {
        this.action = 'cut';
        this.selectedEvents = this.secondSelectedEvents;
        this.cutCalendar = this.activeCalendar;
        this.activateAction('cut');
        this.deletedEvents = [];
      }
    }
  }

  undoEvents() {
    const activeEvents = this.getActiveEvents();
    let eventsToUpdate = [...activeEvents];
    if (this.action === 'delete') {
      for (const event of this.deletedEvents) {
        eventsToUpdate = [...eventsToUpdate, event];
      }
      if (this.activeCalendar === 'first') {
        this.firstEvents = eventsToUpdate;
      } else {
        this.secondEvents = eventsToUpdate;
      }
      this.deletedEvents = [];
    } else if (this.action === 'cut') {
      let revertEvs = this.cutCalendar === 'first' ? this.firstEvents : this.secondEvents;
      for (const event of this.moveEvents) {
        revertEvs = [...revertEvs, event];
      }
      if (this.cutCalendar === 'first') {
        this.firstEvents = revertEvs;
      } else {
        this.secondEvents = revertEvs;
      }

      let cutEvs = this.getActiveEvents();
      for (const event of this.pastedEvents) {
        cutEvs = cutEvs.filter((ev) => ev.id !== event.id);
      }
      if (this.activeCalendar === 'first') {
        this.firstEvents = cutEvs;
      } else {
        this.secondEvents = cutEvs;
      }

      this.cutEvents();
      this.pastedEvents = [];
    }
  }

  detectAction(key: string) {
    switch (key) {
      case 'delete': // Delete
        this.deleteEvents();
        break;
      case 'c': // Copy
        this.copyEvents();
        break;
      case 'x': // Cut
        this.cutEvents();
        break;
      case 'z': // Undo
        this.undoEvents();
        break;
      case 'v': // Paste
        this.pasteEvents();
        break;
    }
  }

  menuSettings: MbscSelectOptions = {
    touchUi: false,
    showInput: false,
    display: 'anchored',
    buttons: [],
    onChange: (args: any) => {
      this.detectAction(args.value);
    },
    onClose: () => {
      this.menuOpen = false;
      // Clear selection
      setTimeout(() => {
        this.selectValue = null;
      });
    },
  };

  switchCalendar(ev: any) {
    if (ev.target.value === 'first') {
      this.toDate = this.firstToDate;
      this.secondSelectedEvents = [];
    } else {
      this.toDate = this.secondToDate;
      this.firstSelectedEvents = [];
    }
  }

  onKeydown(ev: any) {
    if (ev.ctrlKey || ev.metaKey) {
      this.detectAction(ev.key);
    }
    if (ev.key === 'Delete') {
      this.detectAction('delete');
    }
  }
}
