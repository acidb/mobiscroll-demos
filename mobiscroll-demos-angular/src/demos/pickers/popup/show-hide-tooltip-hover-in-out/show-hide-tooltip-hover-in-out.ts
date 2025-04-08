import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPopup,
  MbscPopupOptions,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-popup-show-hide-tooltip-hover-in-out',
  styleUrl: './show-hide-tooltip-hover-in-out.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './show-hide-tooltip-hover-in-out.html',
  standalone: false,
})
export class AppComponent {
  @ViewChild('popup', { static: false }) popup!: MbscPopup;
  popupAnchor: HTMLElement | undefined;

  myEvents: MbscCalendarEvent[] = [
    {
      title: 'CEO Strategy Meeting',
      start: dyndatetime('y,m,1,10'),
      end: dyndatetime('y,m,1,11'),
      color: '#FF5733',
    },
    {
      title: 'Board of Directors Briefing',
      start: dyndatetime('y,m,3,14'),
      end: dyndatetime('y,m,3,15'),
      color: '#33C4FF',
    },
    {
      title: 'Quarterly Review',
      start: dyndatetime('y,m,5,9'),
      end: dyndatetime('y,m,5,10'),
      color: '#33FF77',
    },
    {
      title: 'Executive Team Lunch',
      start: dyndatetime('y,m,7,12'),
      end: dyndatetime('y,m,7,13'),
      color: '#FFC733',
    },
    {
      title: 'Investor Meeting',
      start: dyndatetime('y,m,10,11'),
      end: dyndatetime('y,m,10,12'),
      color: '#9B59B6',
    },
    {
      title: 'Product Launch Review',
      start: dyndatetime('y,m,12,13'),
      end: dyndatetime('y,m,12,14'),
      color: '#FF6347',
    },
    {
      title: 'Press Conference Preparation',
      start: dyndatetime('y,m,14,16'),
      end: dyndatetime('y,m,14,17'),
      color: '#1E90FF',
    },
    {
      title: 'Client Partnership Discussion',
      start: dyndatetime('y,m,18,10'),
      end: dyndatetime('y,m,18,11'),
      color: '#FFD700',
    },
    {
      title: 'CEO’s Weekly Report',
      start: dyndatetime('y,m,20,9'),
      end: dyndatetime('y,m,20,10'),
      color: '#20B2AA',
    },
    {
      title: 'Town Hall Meeting',
      start: dyndatetime('y,m,25,14'),
      end: dyndatetime('y,m,25,15'),
      color: '#FF4500',
    },
  ];

  myView: MbscEventcalendarView = { calendar: { type: 'month' } };
  eventTitle!: string;
  eventStart!: string;
  eventEnd!: string;
  timeout: any = null;

  popupOptions: MbscPopupOptions = {
    display: 'anchored',
    touchUi: false,
    showOverlay: false,
    width: 250,
  };

  handleEventHoverIn(args: any): void {
    console.log(args.event.title);

    this.eventTitle = args.event.title;
    this.eventStart = formatDate('hh:mm A', new Date(args.event.start));
    this.eventEnd = formatDate('hh:mm A', new Date(args.event.end));

    clearTimeout(this.timeout);
    this.popupAnchor = args.domEvent.target;
    this.popup.open();
  }

  handleEventHoverOut(): void {
    this.timeout = setTimeout(() => {
      this.popup.close();
    }, 200);
  }

  handleMouseEnter(): void {
    clearTimeout(this.timeout);
  }

  handleMouseLeave(): void {
    this.timeout = setTimeout(() => {
      this.popup.close();
    }, 200);
  }
}
