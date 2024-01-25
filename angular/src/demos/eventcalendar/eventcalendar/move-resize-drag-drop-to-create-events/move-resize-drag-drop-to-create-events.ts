import { Component } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();

@Component({
  selector: 'app-eventcalendar-move-resize-drag-drop-to-create-events',
  templateUrl: './move-resize-drag-drop-to-create-events.html',
})
export class AppComponent {
  myData: MbscCalendarEvent[] = [
    {
      title: 'Fixed event',
      start: new Date(now.getFullYear(), now.getMonth(), 18),
      end: new Date(now.getFullYear(), now.getMonth(), 19),
      color: '#9e9e9e',
      editable: false,
    },
    {
      title: 'Drag me',
      start: new Date(now.getFullYear(), now.getMonth(), 3),
      end: new Date(now.getFullYear(), now.getMonth(), 5),
      color: '#cc9900',
    },
    {
      title: 'Resize me',
      start: new Date(now.getFullYear(), now.getMonth(), 24),
      end: new Date(now.getFullYear(), now.getMonth(), 29),
      color: '#ca4747',
    },
    {
      title: 'Move me around',
      start: new Date(now.getFullYear(), now.getMonth(), 11),
      end: new Date(now.getFullYear(), now.getMonth(), 14),
      color: '#339966',
    },
  ];

  eventSettings: MbscEventcalendarOptions = {
    view: {
      calendar: { labels: true },
    },
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    dragTimeStep: 15,
  };
}
