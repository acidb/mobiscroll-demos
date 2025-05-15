import { Component } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();
const day = now.getDay();
const monday = now.getDate() - day + (day == 0 ? -6 : 1);

@Component({
  selector: 'app-timeline-custom-event-sort',
  templateUrl: './custom-event-sort.html',
  standalone: false,
})
export class AppComponent {
  myEvents: MbscCalendarEvent[] = [
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday),
      title: 'Kate OFF (PROPOSED)',
      color: '#e7b300',
      allDay: true,
      accepted: false,
      order: 1,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday),
      title: 'John OFF (APPROVED)',
      color: '#00ca10',
      allDay: true,
      accepted: true,
      order: 2,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday),
      title: 'Mark OFF (PROPOSED)',
      color: '#e7b300',
      allDay: true,
      accepted: false,
      order: 1,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday),
      title: 'Emma OFF (PROPOSED)',
      color: '#e7b300',
      allDay: true,
      accepted: false,
      order: 1,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday + 1),
      title: 'Mark OFF (APPROVED)',
      color: '#00ca10',
      allDay: true,
      accepted: true,
      order: 2,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday + 1),
      title: 'Carol OFF (PROPOSED)',
      color: '#e7b300',
      allDay: true,
      accepted: false,
      order: 1,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
      title: 'Luke OFF (PROPOSED)',
      color: '#e7b300',
      allDay: true,
      accepted: false,
      order: 1,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
      title: 'Carol OFF (APPROVED)',
      color: '#00ca10',
      allDay: true,
      accepted: true,
      order: 2,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
      title: 'Kate OFF (APPROVED)',
      color: '#00ca10',
      allDay: true,
      accepted: true,
      order: 2,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
      title: 'Dean OFF (PROPOSED)',
      color: '#e7b300',
      allDay: true,
      accepted: false,
      order: 1,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
      title: 'Emma OFF (APPROVED)',
      color: '#00ca10',
      allDay: true,
      accepted: true,
      order: 2,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
      title: 'Jason OFF (APPROVED)',
      color: '#00ca10',
      allDay: true,
      accepted: true,
      order: 2,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday + 3),
      title: 'Jason OFF (APPROVED)',
      color: '#00ca10',
      allDay: true,
      accepted: true,
      order: 2,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday + 4),
      title: 'Ryan OFF (PROPOSED)',
      color: '#e7b300',
      allDay: true,
      accepted: false,
      order: 1,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday + 4),
      title: 'John OFF (APPROVED)',
      color: '#00ca10',
      allDay: true,
      accepted: true,
      order: 2,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), monday + 4),
      title: 'Dean OFF (PROPOSED)',
      color: '#e7b300',
      allDay: true,
      accepted: false,
      order: 1,
    },
  ];

  view: MbscEventcalendarView = {
    timeline: {
      type: 'week',
      eventDisplay: 'fill',
      startDay: 1,
      endDay: 5,
    },
  };
}
