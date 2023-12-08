import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MbscEventcalendarOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();

@Component({
  selector: 'view-update-event',
  styleUrl: './view-update-event.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './view-update-event.html',
})
export class AppComponent {
  allDay = false;
  start: any;
  end: any;
  busy = 'busy';
  title: string;
  desc: string;
  isOpen = false;
  anchor: any;
  clickedEvent: any;
  selectedDate: now;
  dateWheels = '|DDD MMM D|';
  mode = 'datetime';
  min: any;
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
      title: 'General orientation',
      color: '#fd966a',
    },
    {
      id: 3,
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 18),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 22),
      title: 'Dexter BD',
      color: '#37bbe4',
    },
    {
      id: 4,
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 30),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 11, 30),
      title: 'Stakeholder mtg.',
      color: '#d00f0f',
    },
  ];

  calSettings: MbscEventcalendarOptions = {
    view: {
      schedule: { type: 'week' },
    },
    onEventClick: (event, inst) => {
      var ev = event.event;
      this.clickedEvent = ev;
      this.anchor = event.domEvent.target;
      this.isOpen = true;
      this.title = ev.title;
      this.desc = ev.desc;
      this.allDay = ev.allDay;
      this.dateWheels = ev.allDay ? 'MMMM DD YYYY' : '|DDD MMM D|';
      this.mode = ev.allDay ? 'date' : 'datetime';
      this.start = ev.start;
      this.end = ev.end;
      this.busy = ev.busy || 'busy';
      this.min = ev.start;
    },
  };

  popupSettings = {
    display: 'bubble',
    contentPadding: false,
    showOverlay: false,
    headerText: 'New event',
    maxWidth: '400px',
    buttons: [
      'cancel',
      {
        text: 'Save',
        handler: (event) => {
          const eventToSave = {
              id: this.clickedEvent.id,
              title: this.title,
              desc: this.desc,
              allDay: this.allDay,
              start: this.start,
              end: this.end,
              busy: this.busy,
              color: this.clickedEvent.color,
            },
            index = this.events.indexOf(this.events.filter((x) => x.id === this.clickedEvent.id)[0]);

          this.events[index] = eventToSave;
          this.events = [...this.events];
          this.isOpen = false;
        },
        cssClass: 'mbsc-popup-button-primary',
      },
    ],
    onClose: () => {
      this.isOpen = false;
    },
  };

  allDayChange() {
    this.dateWheels = this.allDay ? 'MMMM DD YYYY' : '|DDD MMM D|';
    this.mode = this.allDay ? 'date' : 'datetime';
  }

  onDateChange(event) {
    this.min = event.value;
  }
}
