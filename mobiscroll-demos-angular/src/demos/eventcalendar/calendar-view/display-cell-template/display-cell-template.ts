import { Component, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscCellClickEvent,
  MbscDateType,
  MbscEventcalendarView,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

interface WeatherData {
  date: Date;
  degree: number;
  emoji: string;
}

@Component({
  selector: 'app-eventcalendar-display-cell-template',
  styleUrl: './display-cell-template.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './display-cell-template.html',
  standalone: false,
})
export class AppComponent {
  constructor(private notify: Notifications) { }

  myCssClass: string = 'mds-cell-template mds-cell-template-month-view';
  weatherCache: { [key: string]: { date: Date; degree: number; emoji: string } } = {};
  selectedView: string = 'month';
  previousView: string = 'month';
  currentDate: MbscDateType = new Date();

  myEvents: MbscCalendarEvent[] = [{
    start: dyndatetime('y,m,d-1,15'),
    end: dyndatetime('y,m,d-1,17'),
    title: 'Operations Huddle',
    type: 'meeting',
    color: '#634b67',
  },
  {
    start: dyndatetime('y,m,d-1,12'),
    end: dyndatetime('y,m,d-1,13'),
    title: 'HR Policy Update',
    type: 'meeting',
    color: '#634b67',
  },
  {
    start: dyndatetime('y,m,d,8'),
    end: dyndatetime('y,m,d,10'),
    title: 'Team Retrospective',
    type: 'meeting',
    color: '#634b67',
  },
  {
    start: dyndatetime('y,m,d,10'),
    end: dyndatetime('y,m,d,11,30'),
    title: 'Proposal Review Meeting',
    type: 'meeting',
    color: '#634b67',
  },
  {
    start: dyndatetime('y,m,d,12'),
    end: dyndatetime('y,m,d,13'),
    title: 'Solutions Presentation',
    type: 'appointment',
    color: '#656d49',
  },
  {
    start: dyndatetime('y,m,d,14'),
    end: dyndatetime('y,m,d,15'),
    title: 'Follow-up Discussion',
    type: 'appointment',
    color: '#656d49',
  },
  {
    start: dyndatetime('y,m,d,15'),
    end: dyndatetime('y,m,d,16'),
    title: 'Performance Review',
    type: 'meeting',
    color: '#634b67',
  },
  {
    start: dyndatetime('y,m,d+1,10'),
    end: dyndatetime('y,m,d+1,13'),
    title: 'Client Onboarding',
    type: 'appointment',
    color: '#656d49',
  },
  {
    start: dyndatetime('y,m,d+1,15'),
    end: dyndatetime('y,m,d+1,16'),
    title: 'Marketing Campaign Brainstorm',
    type: 'meeting',
    color: '#634b67',
  },
  {
    start: dyndatetime('y,m,2,10'),
    end: dyndatetime('y,m,2,12'),
    title: 'Innovation Brainstorm',
    type: 'meeting',
    color: '#634b67',
  },
  {
    start: dyndatetime('y,m,2,13'),
    end: dyndatetime('y,m,2,15,30'),
    title: 'Onboarding Session',
    type: 'appointment',
    color: '#656d49',
  },
  {
    start: dyndatetime('y,m,2,16'),
    end: dyndatetime('y,m,2,17'),
    title: 'Discovery Call',
    type: 'appointment',
    color: '#656d49',
  },
  {
    start: dyndatetime('y,m,9,9'),
    end: dyndatetime('y,m,9,10'),
    title: 'Partnership Exploration',
    type: 'appointment',
    color: '#656d49',
  },
  {
    start: dyndatetime('y,m,9,11'),
    end: dyndatetime('y,m,9,13'),
    title: 'Service Implementation',
    type: 'appointment',
    color: '#656d49',
  },
  {
    start: dyndatetime('y,m,9,14'),
    end: dyndatetime('y,m,9,15'),
    title: 'Future Planning Summit',
    type: 'meeting',
    color: '#634b67',
  },
  {
    start: dyndatetime('y,m,15,10'),
    end: dyndatetime('y,m,15,12'),
    title: 'Strategy Alignment',
    type: 'meeting',
    color: '#634b67',
  },
  {
    start: dyndatetime('y,m,18,12'),
    end: dyndatetime('y,m,18,14'),
    title: 'Project Kick-off',
    type: 'appointment',
    color: '#656d49',
  },
  {
    start: dyndatetime('y,m,18,15'),
    end: dyndatetime('y,m,18,16'),
    title: 'Account Review',
    type: 'appointment',
    color: '#656d49',
  },
  {
    start: dyndatetime('y,m,22,12'),
    end: dyndatetime('y,m,22,14'),
    title: 'Deep Dive Session',
    type: 'meeting',
    color: '#634b67',
  },
  {
    title: 'Fresh start meeting',
    start: '09:00',
    end: '10:00',
    type: 'meeting',
    color: '#634b67',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO',
    },
  },
  {
    title: 'Weekly wrapup',
    start: '16:00',
    end: '16:30',
    type: 'meeting',
    color: '#634b67',
    recurring: {
      repeat: 'weekly',
      weekDays: 'FR',
    },
  }];

  myView: MbscEventcalendarView = {
    calendar: {
      type: 'month'
    }
  }

  myDefaultEvent(): MbscCalendarEvent {
    return {
      title: 'New appointment',
      type: 'appointment',
      color: '#656d49',
    };
  }

  getWeatherForDate(date: Date): WeatherData {
    const key = date.getTime();
    if (!this.weatherCache[key]) {
      this.weatherCache[key] = this.generateRandomWeather(date);
    }
    return this.weatherCache[key];
  }

  generateRandomWeather(date: Date): WeatherData {
    const weatherTypes = [
      { emoji: '☀️', min: 24, max: 30 },
      { emoji: '🌤️', min: 20, max: 25 },
      { emoji: '☁️', min: 17, max: 22 },
      { emoji: '🌧️', min: 15, max: 20 },
    ];
    const type = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
    const degree = Math.floor(Math.random() * (type.max - type.min + 1)) + type.min;

    return {
      date: date,
      degree: degree,
      emoji: type.emoji,
    };
  }

  getStressLevel(nrEvents: number) {
    let emoji: string;
    let color: string;

    if (nrEvents < 1) {
      emoji = '';
      color = '';
    } else if (nrEvents < 3) {
      emoji = '😃';
      color = '#6ece86ff';
    } else if (nrEvents < 5) {
      emoji = '😐';
      color = '#d89c6aff';
    } else {
      emoji = '😫';
      color = '#d6727aff';
    }
    return { emoji: emoji, color: color };
  }

  getNrEvents(events: MbscCalendarEvent[]) {
    let nrMeetings = 0;
    let nrAppointments = 0;

    for (const event of events) {
      if (event['type'] === 'meeting') {
        nrMeetings++;
      } else {
        nrAppointments++;
      }
    }

    return { meetings: nrMeetings, appointments: nrAppointments };
  }

  setSelectedView(view: string, date?: Date) {
    if (view === 'day') {
      this.previousView = this.selectedView;
    }

    this.selectedView = view;

    switch (view) {
      case 'month':
        this.myCssClass = 'mds-cell-template mds-cell-template-month-view';
        this.myView = {
          calendar: { type: 'month' },
        }
        break;
      case 'week':
        this.myCssClass = 'mds-cell-template mds-cell-template-week-view';
        this.myView = {
          schedule: {
            type: 'week',
            allDay: false,
            startTime: '08:00',
            endTime: '17:00',
          },
        };
        break;
      case 'day':
        this.myCssClass = 'mds-cell-template mds-cell-template-day-view';
        this.myView = {
          schedule: {
            type: 'day',
            allDay: false,
            startTime: '08:00',
            endTime: '17:00',
          },
        };
        break;
    }

    if (date) {
      this.currentDate = date;
    }
  }

  handleCellClick(args: MbscCellClickEvent) {
    const date = args.date;
    const target = args.domEvent.target as HTMLElement;

    console.log('Cell clicked');

    if (target.closest('.mds-cell-template-add')) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      const newEvent = {
        title: 'New appointment',
        start: new Date(year, month, day, 9),
        end: new Date(year, month, day, 10),
        color: '#ecee8d',
      };

      this.myEvents = [...this.myEvents, newEvent]

      this.notify.toast({
        message: 'Appointment added to ' + formatDate('DDD D, MMM', date)
      });

    } else if (this.selectedView === 'month') {
      this.setSelectedView('day', date);
    }
  }

  getDayTemplate(args: { date: Date; events: MbscCalendarEvent[] }) {
    const date = args.date;
    const nrEvents = this.getNrEvents(args.events);
    const nrAllEvents = args.events.length;
    const stressLevel = this.getStressLevel(nrAllEvents);
    const weather = this.getWeatherForDate(date);

    return {
      dayContent: formatDate('DDD D, MMM', date) + ' ' + stressLevel.emoji,
      weather: weather.emoji + ' ' + weather.degree + '°C',
      stressLevelColor: stressLevel.color,
      nrMeetings: nrEvents.meetings,
      nrAppointments: nrEvents.appointments
    }
  }
}
