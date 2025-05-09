import { Component } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();

@Component({
  selector: 'app-scheduler-move-resize-drag-drop-to-create-events',
  templateUrl: './move-resize-drag-drop-to-create-events.html',
  standalone: false,
})
export class AppComponent {
  myEvents: MbscCalendarEvent[] = [
    {
      title: 'Fixed event',
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2, 16),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2, 20),
      color: '#9e9e9e',
      editable: false,
    },
    {
      title: 'Fixed event',
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9),
      color: '#9e9e9e',
      editable: false,
    },
    {
      title: 'Fixed event',
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 12),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 14),
      color: '#9e9e9e',
      editable: false,
    },
    {
      title: 'Drag me',
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 11),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 15),
      color: '#cc9900',
    },
    {
      title: 'Drag me',
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 4),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 8),
      color: '#cc9900',
    },
    {
      title: 'Resize me',
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2, 2),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2, 6),
      color: '#ca4747',
    },
    {
      title: 'Resize me',
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 13),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 18),
      color: '#ca4747',
    },
    {
      title: 'Move me around',
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23),
      color: '#339966',
    },
    {
      title: 'Move me around',
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 8),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 11),
      color: '#339966',
    },
  ];

  eventSettings: MbscEventcalendarOptions = {
    view: {
      schedule: { type: 'week' },
    },
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    dragTimeStep: 15,
  };
}
