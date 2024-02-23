import { Component, ViewChild } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscPopup,
  MbscPopupButton,
  MbscPopupOptions,
  MbscPopupPredefinedButton,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-shared-events-across-resources',
  templateUrl: './shared-events-across-resources.html',
})
export class AppComponent {
  @ViewChild('popup', { static: false })
  popup!: MbscPopup;

  tempEvent!: MbscCalendarEvent;
  title = '';
  participants = [];
  anchor: HTMLElement | undefined;
  isNewEvent = false;

  view: MbscEventcalendarView = {
    schedule: {
      type: 'week',
      allDay: false,
      startDay: 1,
      endDay: 5,
      startTime: '05:00',
      endTime: '22:00',
    },
  };

  myEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d-3,10'),
      end: dyndatetime('y,m,d-3,15'),
      title: 'Impact Training',
      resource: [2, 3],
      color: '#35bb5a',
    },
    {
      start: dyndatetime('y,m,d-2,10'),
      end: dyndatetime('y,m,d-2,15'),
      title: 'Impact Training',
      resource: [2, 3],
      color: '#35bb5a',
    },
    {
      start: dyndatetime('y,m,d,8,30'),
      end: dyndatetime('y,m,d,10'),
      title: 'Quick mtg. with Martin',
      resource: 3,
      color: '#913aa7',
    },
    {
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,13'),
      title: 'General orientation',
      resource: [1, 2, 3],
      color: '#a71111',
    },
    {
      start: dyndatetime('y,m,d+1,10'),
      end: dyndatetime('y,m,d+1,11'),
      title: 'Product team mtg.',
      resource: [2, 3],
      color: '#6e7f29',
    },
    {
      start: dyndatetime('y,m,d+2,14'),
      end: dyndatetime('y,m,d+2,16'),
      title: 'Stakeholder mtg.',
      resource: 1,
      color: '#dcd234',
    },
    {
      start: dyndatetime('y,m,d+3,10'),
      end: dyndatetime('y,m,d+3,14'),
      title: 'Innovation mtg.',
      resource: [1, 2],
      color: '#de3d83',
    },
  ];

  myResources = [
    {
      id: 1,
      name: 'Ryan',
      color: '#f7c4b4',
    },
    {
      id: 2,
      name: 'Kate',
      color: '#c6f1c9',
    },
    {
      id: 3,
      name: 'John',
      color: '#e8d0ef',
    },
  ];

  popupOptions: MbscPopupOptions = {
    display: 'anchored',
    contentPadding: false,
    touchUi: false,
    width: 350,
  };

  buttons: (MbscPopupButton | MbscPopupPredefinedButton)[] = [
    'cancel',
    {
      text: 'OK',
      keyCode: 'enter',
      handler: () => {
        this.tempEvent.resource = this.participants;
        this.tempEvent.title = this.title;

        if (this.isNewEvent) {
          this.myEvents = [...this.myEvents, this.tempEvent];
        } else {
          this.myEvents = [...this.myEvents];
        }
        this.isNewEvent = false;
        this.popup.close();
      },
      cssClass: 'mbsc-popup-button-primary',
    },
  ];

  showPopup(args: any): void {
    setTimeout(() => {
      const event = args.event;
      const resources = Array.isArray(event.resource) ? event.resource : [event.resource];

      // store temporary event
      this.tempEvent = event;

      // fill popup with the current event data
      this.title = event.title;
      this.participants = resources;

      // set anchor for the popup
      this.anchor = args.target ? args.target : args.domEvent.target;
      this.popup.open();
    });
  }

  onEventCreated(args: MbscEventCreatedEvent): void {
    this.isNewEvent = true;
    this.showPopup(args);
  }

  onEventDoubleClick(args: MbscEventClickEvent): void {
    this.isNewEvent = false;
    this.showPopup(args);
  }

  extendDefaultEvent(): MbscCalendarEvent {
    return { color: '#4a9e42' };
  }

  onClose(): void {
    if (this.isNewEvent) {
      this.myEvents = this.myEvents.filter((item) => item.id !== this.tempEvent.id);
    }
  }
}
