import { Component, ViewEncapsulation } from '@angular/core';
import { MbscCalendarCellData, MbscCalendarEvent, MbscEventcalendarView, Notifications, setOptions } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-dynamic-cell-content-template',
  styleUrl: './dynamic-cell-content-template.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dynamic-cell-content-template.html',
  standalone: false,
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}
  Math = Math;

  iconMap: Record<string, string> = {
    Review: 'calendar',
    Demo: 'play',
    Kickoff: 'flag',
    Strategy: 'map',
    Collab: 'bubbles',
    Update: 'upload',
    Discussion: 'bubble',
    Planning: 'pencil',
    Retrospect: 'history',
    Onboard: 'user4',
  };
  titles = Object.keys(this.iconMap);

  myView: MbscEventcalendarView = {
    timeline: {
      type: 'month',
      resolutionHorizontal: 'day',
      startDay: 1,
      endDay: 5,
      eventList: true,
    },
  };

  myResources = [
    { id: 1, name: 'Resource A' },
    { id: 2, name: 'Resource B' },
    { id: 3, name: 'Resource C' },
    { id: 4, name: 'Resource D' },
  ];

  myEvents: MbscCalendarEvent[] = [
    {
      id: 1,
      resource: 1,
      title: 'Review',
      start: dyndatetime('y, m, d + 7, 0, 0'),
      end: dyndatetime('y, m, d + 7, 2, 0'),
    },
    {
      id: 2,
      resource: 1,
      title: 'Demo',
      start: dyndatetime('y, m, d + 7, 0, 0'),
      end: dyndatetime('y, m, d + 7, 2, 0'),
    },
    {
      id: 3,
      resource: 1,
      title: 'Kickoff',
      start: dyndatetime('y, m, d + 7, 0, 0'),
      end: dyndatetime('y, m, d + 7, 2, 0'),
    },
    {
      id: 4,
      resource: 4,
      title: 'Strategy',
      start: dyndatetime('y, m, d + 7, 0, 0'),
      end: dyndatetime('y, m, d + 7, 2, 0'),
    },
    {
      id: 5,
      resource: 4,
      title: 'Collab',
      start: dyndatetime('y, m, d + 7, 0, 0'),
      end: dyndatetime('y, m, d + 7, 2, 0'),
    },
    {
      id: 6,
      resource: 4,
      title: 'Update',
      start: dyndatetime('y, m, d + 7, 0, 0'),
      end: dyndatetime('y, m, d + 7, 2, 0'),
    },
    {
      id: 7,
      resource: 2,
      title: 'Discussion',
      start: dyndatetime('y, m, d + 7, 0, 0'),
      end: dyndatetime('y, m, d + 7, 2, 0'),
    },
    {
      id: 8,
      resource: 2,
      title: 'Planning',
      start: dyndatetime('y, m, d + 6, 0, 0'),
      end: dyndatetime('y, m, d + 6, 2, 0'),
    },
    {
      id: 9,
      resource: 2,
      title: 'Retrospect',
      start: dyndatetime('y, m, d + 6, 0, 0'),
      end: dyndatetime('y, m, d + 6, 2, 0'),
    },
    {
      id: 10,
      resource: 2,
      title: 'Demo',
      start: dyndatetime('y, m, d + 6, 0, 0'),
      end: dyndatetime('y, m, d + 6, 2, 0'),
    },
    {
      id: 11,
      resource: 3,
      title: 'Collab',
      start: dyndatetime('y, m, d + 6, 0, 0'),
      end: dyndatetime('y, m, d + 6, 2, 0'),
    },
    {
      id: 12,
      resource: 3,
      title: 'Strategy',
      start: dyndatetime('y, m, d + 6, 0, 0'),
      end: dyndatetime('y, m, d + 6, 2, 0'),
    },
    {
      id: 13,
      resource: 3,
      title: 'Update',
      start: dyndatetime('y, m, d + 6, 0, 0'),
      end: dyndatetime('y, m, d + 6, 2, 0'),
    },
    {
      id: 14,
      resource: 4,
      title: 'Kickoff',
      start: dyndatetime('y, m, d + 6, 0, 0'),
      end: dyndatetime('y, m, d + 6, 2, 0'),
    },
    {
      id: 15,
      resource: 2,
      title: 'Demo',
      start: dyndatetime('y, m, d - 1, 0, 0'),
      end: dyndatetime('y, m, d - 1, 2, 0'),
    },
    {
      id: 16,
      resource: 2,
      title: 'Planning',
      start: dyndatetime('y, m, d - 1, 0, 0'),
      end: dyndatetime('y, m, d - 1, 2, 0'),
    },
    {
      id: 17,
      resource: 3,
      title: 'Discussion',
      start: dyndatetime('y, m, d - 1, 0, 0'),
      end: dyndatetime('y, m, d - 1, 2, 0'),
    },
    {
      id: 18,
      resource: 3,
      title: 'Retrospect',
      start: dyndatetime('y, m, d - 1, 0, 0'),
      end: dyndatetime('y, m, d - 1, 2, 0'),
    },
    {
      id: 19,
      resource: 3,
      title: 'Strategy',
      start: dyndatetime('y, m, d - 1, 0, 0'),
      end: dyndatetime('y, m, d - 1, 2, 0'),
    },
    {
      id: 20,
      resource: 1,
      title: 'Onboard',
      start: dyndatetime('y, m, d - 1, 0, 0'),
      end: dyndatetime('y, m, d - 1, 2, 0'),
    },
    {
      id: 21,
      resource: 1,
      title: 'Collab',
      start: dyndatetime('y, m, d - 1, 0, 0'),
      end: dyndatetime('y, m, d - 1, 2, 0'),
    },
    {
      id: 22,
      resource: 1,
      title: 'Demo',
      start: dyndatetime('y, m, d, 0, 0'),
      end: dyndatetime('y, m, d, 2, 0'),
    },
    {
      id: 23,
      resource: 1,
      title: 'Planning',
      start: dyndatetime('y, m, d, 0, 0'),
      end: dyndatetime('y, m, d, 2, 0'),
    },
    {
      id: 24,
      resource: 1,
      title: 'Update',
      start: dyndatetime('y, m, d, 0, 0'),
      end: dyndatetime('y, m, d, 2, 0'),
    },
    {
      id: 25,
      resource: 2,
      title: 'Strategy',
      start: dyndatetime('y, m, d, 0, 0'),
      end: dyndatetime('y, m, d, 2, 0'),
    },
    {
      id: 26,
      resource: 2,
      title: 'Demo',
      start: dyndatetime('y, m, d, 0, 0'),
      end: dyndatetime('y, m, d, 2, 0'),
    },
    {
      id: 27,
      resource: 3,
      title: 'Kickoff',
      start: dyndatetime('y, m, d, 0, 0'),
      end: dyndatetime('y, m, d, 2, 0'),
    },
    {
      id: 28,
      resource: 3,
      title: 'Collab',
      start: dyndatetime('y, m, d + 1, 0, 0'),
      end: dyndatetime('y, m, d + 1, 2, 0'),
    },
    {
      id: 29,
      resource: 3,
      title: 'Demo',
      start: dyndatetime('y, m, d + 1, 0, 0'),
      end: dyndatetime('y, m, d + 1, 2, 0'),
    },
    {
      id: 30,
      resource: 3,
      title: 'Strategy',
      start: dyndatetime('y, m, d + 1, 0, 0'),
      end: dyndatetime('y, m, d + 1, 2, 0'),
    },
    {
      id: 31,
      resource: 3,
      title: 'Demo',
      start: dyndatetime('y, m, d + 1, 0, 0'),
      end: dyndatetime('y, m, d + 1, 2, 0'),
    },
    {
      id: 32,
      resource: 4,
      title: 'Retrospect',
      start: dyndatetime('y, m, d + 3, 0, 0'),
      end: dyndatetime('y, m, d + 3, 2, 0'),
    },
    {
      id: 33,
      resource: 4,
      title: 'Demo',
      start: dyndatetime('y, m, d + 3, 0, 0'),
      end: dyndatetime('y, m, d + 3, 2, 0'),
    },
    {
      id: 34,
      resource: 4,
      title: 'Retrospect',
      start: dyndatetime('y, m, d + 3, 0, 0'),
      end: dyndatetime('y, m, d + 3, 2, 0'),
    },
    {
      id: 35,
      resource: 4,
      title: 'Onboard',
      start: dyndatetime('y, m, d + 3, 0, 0'),
      end: dyndatetime('y, m, d + 3, 2, 0'),
    },
    {
      id: 36,
      resource: 1,
      title: 'Discussion',
      start: dyndatetime('y, m, d + 3, 0, 0'),
      end: dyndatetime('y, m, d + 3, 2, 0'),
    },
    {
      id: 37,
      resource: 3,
      title: 'Collab',
      start: dyndatetime('y, m, d + 3, 0, 0'),
      end: dyndatetime('y, m, d + 3, 2, 0'),
    },
    {
      id: 38,
      resource: 3,
      title: 'Update',
      start: dyndatetime('y, m, d + 3, 0, 0'),
      end: dyndatetime('y, m, d + 3, 2, 0'),
    },
    {
      id: 39,
      resource: 3,
      title: 'Planning',
      start: dyndatetime('y, m, d + 3, 0, 0'),
      end: dyndatetime('y, m, d + 3, 2, 0'),
    },
    {
      id: 40,
      resource: 1,
      title: 'Planning',
      start: dyndatetime('y, m, d + 5, 0, 0'),
      end: dyndatetime('y, m, d + 5, 2, 0'),
    },
    {
      id: 41,
      resource: 1,
      title: 'Update',
      start: dyndatetime('y, m, d + 5, 0, 0'),
      end: dyndatetime('y, m, d + 5, 2, 0'),
    },
    {
      id: 42,
      resource: 2,
      title: 'Strategy',
      start: dyndatetime('y, m, d + 5, 0, 0'),
      end: dyndatetime('y, m, d + 5, 2, 0'),
    },
    {
      id: 43,
      resource: 4,
      title: 'Onboard',
      start: dyndatetime('y, m, d + 5, 0, 0'),
      end: dyndatetime('y, m, d + 5, 2, 0'),
    },
    {
      id: 44,
      resource: 4,
      title: 'Planning',
      start: dyndatetime('y, m, d + 5, 0, 0'),
      end: dyndatetime('y, m, d + 5, 2, 0'),
    },
    {
      id: 45,
      resource: 4,
      title: 'Retrospect',
      start: dyndatetime('y, m, d + 5, 0, 0'),
      end: dyndatetime('y, m, d + 5, 2, 0'),
    },
    {
      id: 46,
      resource: 3,
      title: 'Demo',
      start: dyndatetime('y, m, d + 5, 0, 0'),
      end: dyndatetime('y, m, d + 5, 2, 0'),
    },
    {
      id: 47,
      resource: 3,
      title: 'Demo',
      start: dyndatetime('y, m, d + 5, 0, 0'),
      end: dyndatetime('y, m, d + 5, 2, 0'),
    },
    {
      id: 48,
      resource: 2,
      title: 'Demo',
      start: dyndatetime('y, m, d + 4, 0, 0'),
      end: dyndatetime('y, m, d + 4, 2, 0'),
    },
    {
      id: 49,
      resource: 2,
      title: 'Demo',
      start: dyndatetime('y, m, d + 4, 0, 0'),
      end: dyndatetime('y, m, d + 4, 2, 0'),
    },
    {
      id: 50,
      resource: 1,
      title: 'Discussion',
      start: dyndatetime('y, m, d + 4, 0, 0'),
      end: dyndatetime('y, m, d + 4, 2, 0'),
    },
    {
      id: 51,
      resource: 2,
      title: 'Discussion',
      start: dyndatetime('y, m, d + 2, 0, 0'),
      end: dyndatetime('y, m, d + 2, 2, 0'),
    },
    {
      id: 52,
      resource: 3,
      title: 'Retrospect',
      start: dyndatetime('y, m, d + 10, 0, 0'),
      end: dyndatetime('y, m, d + 10, 2, 0'),
    },
    {
      id: 53,
      resource: 1,
      title: 'Retrospect',
      start: dyndatetime('y, m, d + 10, 0, 0'),
      end: dyndatetime('y, m, d + 10, 2, 0'),
    },
    {
      id: 54,
      resource: 3,
      title: 'Retrospect',
      start: dyndatetime('y, m, d + 10, 0, 0'),
      end: dyndatetime('y, m, d + 10, 2, 0'),
    },
    {
      id: 55,
      resource: 3,
      title: 'Strategy',
      start: dyndatetime('y, m, d + 11, 0, 0'),
      end: dyndatetime('y, m, d + 11, 2, 0'),
    },
    {
      id: 56,
      resource: 2,
      title: 'Kickoff',
      start: dyndatetime('y, m, d + 11, 0, 0'),
      end: dyndatetime('y, m, d + 11, 2, 0'),
    },
    {
      id: 57,
      resource: 2,
      title: 'Kickoff',
      start: dyndatetime('y, m, d + 11, 0, 0'),
      end: dyndatetime('y, m, d + 11, 2, 0'),
    },
    {
      id: 58,
      resource: 2,
      title: 'Update',
      start: dyndatetime('y, m, d + 11, 0, 0'),
      end: dyndatetime('y, m, d + 11, 2, 0'),
    },
    {
      id: 59,
      resource: 4,
      title: 'Demo',
      start: dyndatetime('y, m, d + 11, 0, 0'),
      end: dyndatetime('y, m, d + 11, 2, 0'),
    },
    {
      id: 60,
      resource: 4,
      title: 'Collab',
      start: dyndatetime('y, m, d + 11, 0, 0'),
      end: dyndatetime('y, m, d + 11, 2, 0'),
    },
    {
      id: 61,
      resource: 4,
      title: 'Collab',
      start: dyndatetime('y, m, d + 11, 0, 0'),
      end: dyndatetime('y, m, d + 11, 2, 0'),
    },
    {
      id: 62,
      resource: 4,
      title: 'Discussion',
      start: dyndatetime('y, m, d + 11, 0, 0'),
      end: dyndatetime('y, m, d + 11, 2, 0'),
    },
    {
      id: 63,
      resource: 1,
      title: 'Planning',
      start: dyndatetime('y, m, d + 12, 0, 0'),
      end: dyndatetime('y, m, d + 12, 2, 0'),
    },
    {
      id: 64,
      resource: 1,
      title: 'Retrospect',
      start: dyndatetime('y, m, d + 12, 0, 0'),
      end: dyndatetime('y, m, d + 12, 2, 0'),
    },
    {
      id: 65,
      resource: 1,
      title: 'Review',
      start: dyndatetime('y, m, d + 12, 0, 0'),
      end: dyndatetime('y, m, d + 12, 2, 0'),
    },
    {
      id: 66,
      resource: 3,
      title: 'Collab',
      start: dyndatetime('y, m, d + 12, 0, 0'),
      end: dyndatetime('y, m, d + 12, 2, 0'),
    },
    {
      id: 67,
      resource: 3,
      title: 'Demo',
      start: dyndatetime('y, m, d + 12, 0, 0'),
      end: dyndatetime('y, m, d + 12, 2, 0'),
    },
    {
      id: 68,
      resource: 3,
      title: 'Collab',
      start: dyndatetime('y, m, d + 12, 0, 0'),
      end: dyndatetime('y, m, d + 12, 2, 0'),
    },
    {
      id: 69,
      resource: 2,
      title: 'Strategy',
      start: dyndatetime('y, m, d + 12, 0, 0'),
      end: dyndatetime('y, m, d + 12, 2, 0'),
    },
  ];

  handleAddClick(ev: MouseEvent, cell: MbscCalendarCellData) {
    ev.stopPropagation();
    const count = cell.events.length;

    if (count >= 4) {
      this.notify.toast({ message: 'Task limit reached' });
      return;
    }
    this.myEvents = [
      ...this.myEvents,
      {
        title: this.titles[Math.floor(Math.random() * this.titles.length)],
        start: cell.date,
        end: new Date(cell.date.getTime() + 2 * 3600000),
        resource: cell.resource.id,
      },
    ];
  }

  getHours(events: MbscCalendarEvent[] = []): number {
    const total = events.reduce((s, ev) => {
      const st = new Date(ev.start as Date).getTime();
      const en = new Date(ev.end as Date).getTime();
      return s + (en - st) / 36e5;
    }, 0);
    return Math.round(total);
  }

  getBadgeClass(events: MbscCalendarEvent[] = []): string {
    const hours = this.getHours(events);
    const classMap: { [key: number]: string } = { 2: 'light', 4: 'medium', 6: 'semi', 8: 'full' };
    return 'mds-timeline-cell-content-badge-' + (classMap[hours] || 'default');
  }

  getIcons(events: MbscCalendarEvent[] = []): string[] {
    const titles = new Set();
    return events.reduce<string[]>((icons, ev) => {
      const name = this.iconMap[ev.title!];
      if (name && !titles.has(ev.title)) {
        titles.add(ev.title);
        icons.push(name);
      }
      return icons;
    }, []);
  }

  extendDefaultEvent = (args: any) => ({
    title: this.titles[Math.floor(Math.random() * this.titles.length)],
    end: new Date(args.start.getTime() + 2 * 3600000),
  });
}
