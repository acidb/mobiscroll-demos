import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import {
  dayjsTimezone,
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscEventUpdatedEvent,
  MbscModule,
  MbscTimezonePlugin,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { dyndatetime } from '../../../../app/app.util';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjsTimezone.dayjs = dayjs;

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-timezone-meeting-planner',
  styleUrl: './timezone-meeting-planner.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './timezone-meeting-planner.html',
  providers: [Notifications],
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  constructor(private notify: Notifications) { }
  myEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,15'),
      title: 'General orientation',
      color: '#1ad404',
      resource: [1, 2, 3, 4, 5, 6],
    },
  ];
  myResources = [
    {
      id: 1,
      name: 'Keila Delores',
      timezone: 'utc',
      img: 'https://img.mobiscroll.com/demos/f1.png',
      utcOffset: '(UTC)',
      organizer: true,
    },
    {
      id: 2,
      name: 'Gene Cortez',
      timezone: 'America/Chicago',
      img: 'https://img.mobiscroll.com/demos/m1.png',
      utcOffset: 'UTC - 5',
    },
    {
      id: 3,
      name: 'Paula Bush',
      timezone: 'America/New_York',
      img: 'https://img.mobiscroll.com/demos/f2.png',
      utcOffset: 'UTC - 4',
    },
    {
      id: 4,
      name: 'Pete Nichols',
      timezone: 'Europe/London',
      img: 'https://img.mobiscroll.com/demos/m2.png',
      utcOffset: 'UTC + 1',
    },
    {
      id: 5,
      name: 'Jean Pearson',
      timezone: 'Europe/Berlin',
      img: 'https://img.mobiscroll.com/demos/m3.png',
      utcOffset: 'UTC + 2',
    },
    {
      id: 6,
      name: 'Thelma Cain',
      timezone: 'Europe/Bucharest',
      img: 'https://img.mobiscroll.com/demos/f3.png',
      utcOffset: 'UTC + 3',
    },
  ];

  myView: MbscEventcalendarView = {
    timeline: {
      type: 'week',
      timeLabelStep: 1440,
    },
  };

  myTimezonePlugin: MbscTimezonePlugin = dayjsTimezone;
  myDefaultEvent(): MbscCalendarEvent { return { resource: [1, 2, 3, 4, 5, 6] }; }
  myInvalid: MbscCalendarEvent[] = this.getInvalids();

  getHourProps(h: number, timezone: string) {
    const offset = this.getUtcOffset(timezone);
    const hour = h + offset;
    const isAM = hour % 24 < 12;
    const title = ((hour % 12) + 12) % 12 || 12;
    const hForProps = title + ((title === 12 && !isAM) || (title !== 12 && isAM) ? 0 : 12);
    let color = '#f7f7bb4d';
    let invalid = false;

    if (hForProps < 6 || hForProps >= 22) {
      color = '#ffbaba4d';
      invalid = true;
    } else if (hForProps < 8 || (hForProps >= 18 && hForProps < 22)) {
      color = '#a5ceff4d';
    }

    return {
      hour: hour,
      isAM: isAM,
      title: title,
      color: color,
      invalid: invalid,
    };
  }

  getInvalids(): MbscCalendarEvent[] {
    const invalid: MbscCalendarEvent[] = [];

    for (const resource of this.myResources) {
      for (let i = 0; i < 24; ++i) {
        if (this.getHourProps(i, resource.timezone).invalid) {
          const startTime = (i < 10 ? '0' : '') + i + ':00:00';
          const endTime = (i < 9 ? '0' : '') + (i + 1) + ':00:00';

          invalid.push({
            start: startTime,
            end: endTime,
            resource: resource.id,
            recurring: {
              repeat: 'daily',
            },
          });
        }
      }
    }
    return invalid;
  }

  onEventCreated(args: MbscEventCreatedEvent): void {
    setTimeout(() => {
      this.myEvents = [...this.myEvents, args.event];
      this.notify.toast({
        message: 'Event created',
      });
    });
  }

  onEventUpdated(args: MbscEventUpdatedEvent): void {
    setTimeout(() => {
      const index = this.myEvents.findIndex((x) => x.id === args.event.id);
      const newEventList = [...this.myEvents];

      newEventList.splice(index, 1, args.event);
      this.myEvents = newEventList;
      this.notify.toast({
        message: 'Event updated',
      });
    });
  }

  onEventDeleted(args: MbscEventDeletedEvent): void {
    setTimeout(() => {
      this.myEvents = this.myEvents.filter((item) => item.id !== args.event.id);
    });
  }

  createUpdateEvent(event: any, isNew: boolean): void {
    this.notify.confirm({
      title: 'Are you sure you want to proceed?',
      message: "It looks like someone from the team won't be able to join the meeting.",
      okText: 'Yes',
      cancelText: 'No',
      callback: (res) => {
        if (res) {
          if (isNew) {
            this.myEvents = [...this.myEvents, event];
          } else {
            const index = this.myEvents.findIndex((x) => x.id === event.id);
            const newEventList = [...this.myEvents];

            newEventList.splice(index, 1, event);
            this.myEvents = newEventList;
          }

          this.notify.toast({
            message: isNew ? 'Event created' : 'Event updated',
          });
        }
      },
    });
  }

  getUtcOffset(timezone: string): number {
    switch (timezone) {
      case 'America/Los_Angeles':
        return -7;
      case 'America/Chicago':
        return -5;
      case 'America/New_York':
        return -4;
      case 'Europe/London':
        return 1;
      case 'Europe/Berlin':
        return 2;
      case 'Europe/Bucharest':
        return 3;
      case 'Asia/Shanghai':
        return 8;
      case 'Asia/Tokyo':
        return 9;
      default:
        return 0;
    }
  }

  getTitleTime(data: any): string {
    const start = data.startDate.clone();
    const end = data.endDate.clone();

    start.setTimezone(data.currentResource.timezone);
    end.setTimezone(data.currentResource.timezone);

    return formatDate('hh:mm A', start) + ' - ' + formatDate('hh:mm A', end);
  }
}
