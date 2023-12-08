import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MbscEventcalendarOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();

@Component({
  selector: 'add-delete-event',
  styleUrl: './add-delete-event.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './add-delete-event.html',
})
export class AppComponent {
  allDay = false;
  start: Date;
  end: Date;
  busy = 'busy';
  title: string;
  desc: string;
  addOpen = false;
  deleteOpen = false;
  addAnchor: any;
  deleteAnchor: any;
  clickedEvent: any;
  tempEventID = 5;
  dateWheels = '|DDD MMM D|';
  mode = 'datetime';
  min = now;
  events: any = [
    {
      id: 1,
      start: new Date(now.getFullYear(), now.getMonth(), 8, 13),
      end: new Date(now.getFullYear(), now.getMonth(), 8, 13, 30),
      title: "Lunch @ Butcher's",
      color: '#26c57d',
    },
    {
      id: 2,
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16),
      text: 'General orientation',
      color: '#fd966a',
    },
    {
      id: 3,
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 18),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 22),
      text: 'Dexter BD',
      color: '#37bbe4',
    },
    {
      id: 4,
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 30),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 11, 30),
      text: 'Stakeholder mtg.',
      color: '#d00f0f',
    },
  ];

  calSettings: MbscEventcalendarOptions = {
    view: {
      schedule: { type: 'week' },
    },
    onEventClick: (event: any, inst) => {
      this.clickedEvent = event.event;
      if (event.event.id != 'temp') {
        this.deleteAnchor = event.domEvent.currentTarget;
        this.deleteOpen = true;
      }
    },
    onCellClick: (event: any, inst) => {
      const d = event.date;
      this.addAnchor = event.domEvent.currentTarget;
      this.addOpen = true;
      this.start = d;
      this.end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() + 1);
      this.min = d;
      this.title = 'New Event';
      this.desc = '';
      this.allDay = false;
      this.mode = 'datetime';
      this.dateWheels = '|DDD MMM D|';
      this.busy = 'busy';
      this.events = [...this.events, this.getNewEvent(true)];
    },
  };

  addPopupSettings = {
    display: 'bubble',
    contentPadding: false,
    showOverlay: false,
    headerText: 'New event',
    maxWidth: '400px',
    buttons: [
      'cancel',
      {
        text: 'Add',
        handler: (event) => {
          const events = this.events.slice(0);
          const temp = events.indexOf(events.filter((x) => x.id === 'temp')[0]);

          events.splice(temp, 1);

          this.events = [...events, this.getNewEvent(null)];
          this.tempEventID += 1;
          this.addOpen = false;
        },
        cssClass: 'mbsc-popup-button-primary',
      },
    ],
    onClose: () => {
      const events = this.events.slice(0);
      const temp = events.indexOf(events.filter((x) => x.id === 'temp')[0]);

      events.splice(temp, 1);
      this.events = events;
      this.addOpen = false;
    },
  };

  deletePopupSettings = {
    display: 'bubble',
    showOverlay: false,
    buttons: [
      {
        text: 'Delete event',
        handler: (event) => {
          const events = this.events.slice(0);
          const index = events.indexOf(events.filter((x) => x.id === this.clickedEvent.id)[0]);

          events.splice(index, 1);

          this.events = events;
          this.deleteOpen = false;
        },
        cssClass: 'mbsc-popup-button-primary',
      },
      'cancel',
    ],
    onClose: (event, inst) => {
      this.deleteOpen = false;
    },
  };

  allDayChange() {
    this.dateWheels = this.allDay ? 'MMMM DD YYYY' : '|DDD MMM D|';
    this.mode = this.allDay ? 'date' : 'datetime';
  }

  getNewEvent(newEvent) {
    return {
      id: newEvent ? 'temp' : this.tempEventID,
      title: this.title,
      desc: this.desc,
      start: this.start,
      end: this.end,
      allDay: this.allDay,
      busy: this.busy,
    };
  }

  changeDate(event) {
    this.min = event.value;
  }
}
