import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MbscEventcalendarOptions, MbscPopup, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'external-event-presets',
  styleUrl: './external-event-presets.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './external-event-presets.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  @ViewChild('popup', { static: false })
  popup!: MbscPopup;

  calendarOptions: MbscEventcalendarOptions = {
    view: {
      schedule: {
        type: 'week',
        allDay: false,
        startTime: '06:00',
        endTime: '20:00',
      },
    },
    invalid: [
      {
        recurring: {
          repeat: 'weekly',
          weekDays: 'SA,SU',
        },
      },
      {
        start: '12:00',
        end: '12:30',
        title: 'Lunch break',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
    ],
    dragToMove: true,
    externalDrop: true,
    onEventCreated: (args) => {
      setTimeout(() => {
        this.fillDialog(args);
      });
    },
    onEventCreateFailed: () => {
      this.notify.toast({
        message: "Can't create event on this date",
      });
    },
    onEventUpdateFailed: () => {
      this.notify.toast({
        message: "Can't add event on this date",
      });
    },
  };

  tasks = [
    {
      title: 'Tire change',
      color: '#7a5886',
      start: '08:00',
      end: '08:30',
      length: '0.5 h',
    },
    {
      title: 'Brake maintenance',
      color: '#9da721',
      start: '08:00',
      end: '09:30',
      length: '1.5 h',
    },
    {
      title: 'Fluid maintenance',
      color: '#cd6957',
      start: '08:00',
      end: '10:00',
      length: '2 h',
    },
    {
      title: 'Oil change',
      color: '#637e57',
      start: '08:00',
      end: '10:00',
      length: '2 h',
    },
    {
      title: 'Electrical inspection',
      color: '#50789d',
      start: '08:00',
      end: '10:30',
      length: '2.5 h',
    },
    {
      title: 'Engine inspection',
      color: '#6c5d45',
      start: '08:00',
      end: '12:30',
      length: '4.5 h',
    },
  ];

  myData = [
    { value: '1', text: 'Roly Chester' },
    { value: '2', text: 'Tucker Wayne' },
    { value: '3', text: 'Baker Brielle' },
    { value: '4', text: 'Jami Walter' },
    { value: '5', text: 'Patrick Toby' },
    { value: '6', text: 'Tranter Logan' },
    { value: '7', text: 'Payton Sinclair' },
  ];

  title = '';
  details = '';
  technician = '';
  anchor: HTMLElement | undefined;
  isOpen = false;

  fillDialog(args: any): void {
    this.title = args.event.title;
    this.details = args.event.details;
    this.technician = args.event.technician;
    this.anchor = args.target;
    this.popup.open();
  }

  onClose(): void {
    this.notify.toast({
      message: 'New task added',
    });
  }
}
