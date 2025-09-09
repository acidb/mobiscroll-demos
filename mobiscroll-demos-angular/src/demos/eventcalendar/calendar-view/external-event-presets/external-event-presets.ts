import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MbscEventcalendarOptions, MbscModule, MbscPopup, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-eventcalendar-external-event-presets',
  styleUrl: './external-event-presets.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './external-event-presets.html',
  providers: [Notifications],
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent {
  constructor(private notify: Notifications) {}
  @ViewChild('popup', { static: false })
  popup!: MbscPopup;

  calendarOptions: MbscEventcalendarOptions = {
    view: {
      calendar: { labels: true },
    },
    invalid: [
      {
        recurring: {
          repeat: 'weekly',
          weekDays: 'SA,SU',
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
      title: 'Small wrap',
      color: '#637e57',
      start: dyndatetime('y,m,d'),
      end: dyndatetime('y,m,d+1'),
      length: '2 days',
    },
    {
      title: 'Full-size wrap',
      color: '#50789d',
      start: dyndatetime('y,m,d'),
      end: dyndatetime('y,m,d+2'),
      length: '3 days',
    },
    {
      title: 'Mid-size wrap',
      color: '#6c5d45',
      start: dyndatetime('y,m,d'),
      end: dyndatetime('y,m,d+2'),
      length: '3 days',
    },
    {
      title: 'Roadster wrap',
      color: '#9da721',
      start: dyndatetime('y,m,d'),
      end: dyndatetime('y,m,d+2'),
      length: '3 days',
    },
    {
      title: 'SUV wrap',
      color: '#cd6957',
      start: dyndatetime('y,m,d'),
      end: dyndatetime('y,m,d+3'),
      length: '4 days',
    },
    {
      title: 'Hypercar wrap',
      color: '#7a5886',
      start: dyndatetime('y,m,d'),
      end: dyndatetime('y,m,d+4'),
      length: '5 days',
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
