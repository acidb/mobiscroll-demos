import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscDatepickerOptions,
  MbscDateType,
  MbscEventcalendarOptions,
  MbscPopup,
  MbscPopupButton,
  MbscPopupOptions,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-show-task-progress-on-event',
  styleUrl: './show-task-progress-on-event.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './show-task-progress-on-event.html',
  standalone: false,
})
export class AppComponent {
  @ViewChild('popup', { static: false })
  popup!: MbscPopup;

  popupEventTitle: string | undefined;
  popupEventProgress = 0;
  popupEventResource: string | undefined;
  popupEventDates: Array<MbscDateType | undefined> = [];

  isDraggingProgress: boolean = false;

  myEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d-3'),
      end: dyndatetime('y,m,d'),
      title: 'Design Homepage',
      resource: 'alice',
      progress: 100,
    },
    {
      start: dyndatetime('y,m,d-3'),
      end: dyndatetime('y,m,d+1'),
      title: 'Create Wireframes',
      resource: 'bob',
      progress: 100,
    },
    {
      start: dyndatetime('y,m,d-1'),
      end: dyndatetime('y,m,d+4'),
      title: 'Develop Frontend',
      resource: 'charlie',
      progress: 45,
    },
    {
      start: dyndatetime('y,m,d-1'),
      end: dyndatetime('y,m,d+4'),
      title: 'Develop Backend',
      resource: 'dave',
      progress: 35,
    },
    {
      start: dyndatetime('y,m,d+4'),
      end: dyndatetime('y,m,d+8'),
      title: 'Test Website',
      resource: 'erin',
      progress: 0,
    },
    {
      start: dyndatetime('y,m,d+1'),
      end: dyndatetime('y,m,d+8'),
      title: 'Fix Bugs',
      resource: 'frank',
      progress: 0,
    },
    {
      start: dyndatetime('y,m,d+8'),
      end: dyndatetime('y,m,d+11'),
      title: 'Deploy Website',
      resource: 'george',
      progress: 0,
    },
  ];

  myResources = [
    {
      id: 'gro1',
      name: 'Designer Team',
      color: '#76e083',
      eventCreation: false,
      children: [
        {
          id: 'alice',
          name: 'Alice',
          title: 'Designer',
          color: '#1dab2f',
        },
        {
          id: 'bob',
          name: 'Bob',
          title: 'Designer',
          color: '#76e083',
        },
      ],
    },
    {
      id: 'gro2',
      name: 'Development Team',
      color: '#ff1717',
      eventCreation: false,
      children: [
        {
          id: 'charlie',
          name: 'Charlie',
          title: 'Frontend Developer',
          color: '#4981d6',
        },
        {
          id: 'dave',
          name: 'Dave',
          title: 'Backend Developer',
          color: '#f7961e',
        },
        {
          id: 'frank',
          name: 'Frank',
          title: 'Full-Stack Developer',
          color: '#34c8e0',
        },
        {
          id: 'george',
          name: 'George',
          title: 'DevOps Engineer',
          color: '#e25dd2',
        },
      ],
    },

    {
      id: 'gro3',
      name: 'QA Team',
      color: '#d6d145',
      eventCreation: false,
      children: [
        {
          id: 'erin',
          name: 'Erin',
          title: 'QA Tester',
          color: '#d6d145',
        },
      ],
    },
  ];

  calendarOptions: MbscEventcalendarOptions = {
    clickToCreate: true,
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    view: {
      timeline: { type: 'month', eventList: true },
    },
    onEventClick: (args) => {
      if (this.isDraggingProgress) return;
      this.isEdit = true;
      this.tempEvent = args.event;
      // Fill popup form with event data
      this.loadPopupForm(args.event);
      // Set popup options
      this.popupHeaderText = 'Edit event';
      this.popupButtons = this.popupEditButtons;
      this.popupAnchor = args.domEvent.currentTarget;
      // Open the popup
      this.popup.open();
    },
    onEventCreated: (args) => {
      setTimeout(() => {
        this.isEdit = false;
        this.tempEvent = args.event;
        // Fill popup form with event data
        this.loadPopupForm(args.event);
        // Set popup options
        this.popupHeaderText = 'New Event';
        this.popupButtons = this.popupAddButtons;
        this.popupAnchor = args.target;
        // Open the popup
        this.popup.open();
      });
    },
  };

  popupHeaderText!: string;
  popupAnchor: HTMLElement | undefined;
  popupAddButtons: Array<MbscPopupButton | 'cancel'> = [
    'cancel',
    {
      handler: () => {
        this.saveEvent();
      },
      keyCode: 'enter',
      text: 'Add',
      cssClass: 'mbsc-popup-button-primary',
    },
  ];
  popupEditButtons: Array<MbscPopupButton | 'cancel'> = [
    'cancel',
    {
      handler: () => {
        this.saveEvent();
      },
      keyCode: 'enter',
      text: 'Save',
      cssClass: 'mbsc-popup-button-primary',
    },
  ];
  popupButtons: Array<MbscPopupButton | 'cancel'> = [];
  popupOptions: MbscPopupOptions = {
    display: 'bottom',
    contentPadding: false,
    fullScreen: true,
    onClose: () => {
      if (!this.isEdit) {
        // Refresh the list, if add popup was canceled, to remove the temporary event
        this.myEvents = [...this.myEvents];
      }
    },
    responsive: {
      medium: {
        display: 'anchored',
        width: 400,
        fullScreen: false,
        touchUi: false,
      },
    },
  };

  datePickerResponsive: { [key: string]: MbscDatepickerOptions } = {
    medium: {
      controls: ['calendar'],
      touchUi: false,
    },
  };
  datePickerOptions: MbscDatepickerOptions = {
    select: 'range',
    showRangeLabels: false,
    touchUi: true,
  };

  isEdit = false;

  tempEvent!: MbscCalendarEvent;

  handleProgressArrowMouseDown(e: MouseEvent, event: MbscCalendarEvent) {
    e.stopPropagation();

    this.isDraggingProgress = true;

    const progressArrow = e.target as HTMLElement;
    const progressBar = progressArrow.closest('.mds-progress-bar') as HTMLElement;
    const eventContainerWidth = progressBar.parentElement!.offsetWidth;
    const initialMouseX = e.pageX;
    const initialProgress = +progressBar.style.width.replace('%', '');

    let newProgress: number;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseXOffset = e.pageX - initialMouseX;

      newProgress = Math.round(initialProgress + (mouseXOffset / eventContainerWidth) * 100);
      newProgress = Math.max(0, Math.min(100, newProgress));

      event['progress'] = newProgress;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      setTimeout(() => (this.isDraggingProgress = false), 100);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  loadPopupForm(event: MbscCalendarEvent) {
    this.popupEventTitle = event.title;
    this.popupEventDates = [event.start, event.end];
    this.popupEventResource = event['resource'] as string;
    this.popupEventProgress = event['progress'] || 0;
  }

  saveEvent() {
    this.tempEvent.title = this.popupEventTitle;
    this.tempEvent.start = this.popupEventDates[0];
    this.tempEvent.end = this.popupEventDates[1];
    this.tempEvent.resource = this.popupEventResource;
    this.tempEvent['progress'] = +this.popupEventProgress;

    if (this.isEdit) {
      // Update the event in the list
      this.myEvents = [...this.myEvents];
    } else {
      // Add the new event to the list
      this.myEvents = [...this.myEvents, this.tempEvent];
    }
    // Close the popup
    this.popup.close();
  }
}
