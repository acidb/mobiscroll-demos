import { Component, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscEventcalendarOptions,
  MbscCalendarEvent,
  momentTimezone,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import moment from 'moment-timezone';

setOptions({
  // locale,
  // theme
});

momentTimezone.moment = moment;

@Component({
  selector: 'timezone-meeting-planner',
  styleUrl: './timezone-meeting-planner.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './timezone-meeting-planner.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}
  myEvents: MbscCalendarEvent[] = [
    {
      start: 'dyndatetime(y,m,d,13)',
      end: 'dyndatetime(y,m,d,15)',
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

  details = this.getDetails();

  calendarOptions: MbscEventcalendarOptions = {
    timezonePlugin: momentTimezone,
    dataTimezone: 'utc',
    displayTimezone: 'utc',
    clickToCreate: true,
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    dragTimeStep: 60,
    height: 400,
    view: {
      timeline: {
        type: 'week',
        timeLabelStep: 1440,
      },
    },
    colors: this.details.colors,
    invalid: this.details.invalid,
    extendDefaultEvent: function () {
      return { resource: [1, 2, 3, 4, 5, 6] };
    },
    onEventCreated: (args) => {
      setTimeout(() => {
        this.myEvents = [...this.myEvents, args.event];
        this.notify.toast({
          message: 'Event created',
        });
      });
    },
    onEventUpdated: (args) => {
      setTimeout(() => {
        const index = this.myEvents.findIndex((x) => x.id === args.event.id);
        const newEventList = [...this.myEvents];

        newEventList.splice(index, 1, args.event);
        this.myEvents = newEventList;
        this.notify.toast({
          message: 'Event updated',
        });
      });
    },
    onEventDeleted: (args) => {
      setTimeout(() => {
        this.myEvents = this.myEvents.filter((item) => item.id !== args.event.id);
      });
    },
    onEventCreateFailed: (args) => {
      this.createUpdateEvent(args.event, true);
    },
    onEventUpdateFailed: (args) => {
      this.createUpdateEvent(args.event, false);
    },
  };

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

  getProps(h: number): object {
    if (h < 6) {
      return { color: '#ffbaba4d', invalid: true };
    } else if (h < 8) {
      return { color: '#a5ceff4d' };
    } else if (h < 18) {
      return { color: '#f7f7bb4d' };
    } else if (h < 22) {
      return { color: '#a5ceff4d' };
    } else {
      return { color: '#ffbaba4d', invalid: true };
    }
  }

  getDetails(): any {
    const colors = [];
    const invalid = [];

    for (const resource of this.myResources) {
      for (let i = 0; i < 24; ++i) {
        const hour = i + this.getUtcOffset(resource.timezone);
        const isAM = i < 12 ? hour >= 0 && hour < 12 : !(hour >= 12 && hour < 24);
        const startTime = (i < 10 ? '0' : '') + i + ':00';
        const endTime = (i < 9 ? '0' : '') + (i + 1) + ':00';
        const title = hour % 12 === 0 ? 12 : hour < 0 ? 12 + hour : hour <= 12 ? hour : hour % 12;
        const props: any = this.getProps(title + ((title === 12 && !isAM) || (title !== 12 && isAM) ? 0 : 12));

        colors.push({
          start: startTime,
          end: endTime,
          title: title + (isAM ? ' AM' : ' PM'),
          background: props.color,
          recurring: {
            repeat: 'daily',
          },
          resource: resource.id,
        });

        if (props.invalid) {
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
    return { colors, invalid };
  }

  getTitleTime(data: any): string {
    const start = data.startDate.clone();
    const end = data.endDate.clone();

    start.setTimezone(data.currentResource.timezone);
    end.setTimezone(data.currentResource.timezone);

    return formatDate('hh:mm A', start) + ' - ' + formatDate('hh:mm A', end);
  }
}
