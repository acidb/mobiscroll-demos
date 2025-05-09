import { Component } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-move-resize-drag-drop-to-create-events',
  templateUrl: './move-resize-drag-drop-to-create-events.html',
  standalone: false,
})
export class AppComponent {
  myEvents: MbscCalendarEvent[] = [
    {
      title: 'Fixed event',
      start: dyndatetime('y,m,d-1,16'),
      end: dyndatetime('y,m,d-1,20'),
      color: '#9e9e9e',
      editable: false,
      resource: 2,
    },
    {
      title: 'Fixed event',
      start: dyndatetime('y,m,d,15'),
      end: dyndatetime('y,m,d,18'),
      color: '#9e9e9e',
      editable: false,
      resource: 4,
    },
    {
      title: 'Fixed event',
      start: dyndatetime('y,m,d+1,12'),
      end: dyndatetime('y,m,d+1,14'),
      color: '#9e9e9e',
      editable: false,
      resource: 5,
    },
    {
      title: 'Drag me',
      start: dyndatetime('y,m,d-1,11'),
      end: dyndatetime('y,m,d-1,15'),
      color: '#cc9900',
      resource: 3,
    },
    {
      title: 'Drag me',
      start: dyndatetime('y,m,d,14'),
      end: dyndatetime('y,m,d,18'),
      color: '#cc9900',
      resource: 2,
    },
    {
      title: 'Resize me',
      start: dyndatetime('y,m,d,9'),
      end: dyndatetime('y,m,d,12'),
      color: '#ca4747',
      resource: 1,
    },
    {
      title: 'Resize me',
      start: dyndatetime('y,m,d+1,13'),
      end: dyndatetime('y,m,d+1,18'),
      color: '#ca4747',
      resource: 4,
    },
    {
      title: 'Move me around',
      start: dyndatetime('y,m,d,19'),
      end: dyndatetime('y,m,d,23'),
      color: '#339966',
      resource: 5,
    },
    {
      title: 'Move me around',
      start: dyndatetime('y,m,d+1,8'),
      end: dyndatetime('y,m,d+1,11'),
      color: '#339966',
      resource: 2,
    },
  ];

  myResources = [
    {
      id: 1,
      name: 'Resource A',
      color: '#fdf500',
    },
    {
      id: 2,
      name: 'Resource B',
      color: '#ff0101',
    },
    {
      id: 3,
      name: 'Resource C',
      color: '#01adff',
    },
    {
      id: 4,
      name: 'Resource D',
      color: '#239a21',
    },
    {
      id: 5,
      name: 'Resource E',
      color: '#ff4600',
    },
  ];

  eventSettings: MbscEventcalendarOptions = {
    view: {
      timeline: { type: 'day' },
    },
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    dragTimeStep: 15,
  };
}
