import * as mobiscroll from '@mobiscroll/javascript';
import { dayjsTimezone } from '@mobiscroll/javascript';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjsTimezone.dayjs = dayjs;

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.eventcalendar('#demo-showing-events-timezone', {
      // theme,
      // locale,
      timezonePlugin: dayjsTimezone,
      dataTimezone: 'utc',
      displayTimezone: 'local',
      view: {
        calendar: {
          popover: true,
          type: 'month',
        },
      },
      dragToCreate: true,
      dragToMove: true,
      dragToResize: true,
      data: [
        {
          start: 'dyndatetime(y, m, d, 7)',
          end: 'dyndatetime(y, m, d, 9)',
          title: 'Stakeholder mtg.',
          color: '#d64646',
        },
        {
          start: 'dyndatetime(y, m, d+3, 18)',
          end: 'dyndatetime(y, m, d+3, 19, 30)',
          title: 'Wrapup mtg.',
          color: '#ecbc72',
        },
        {
          start: 'dyndatetime(y, m, d, 14)',
          end: 'dyndatetime(y, m, d, 18)',
          title: 'Business of Software Conference',
          color: '#ff6d42',
        },
        {
          start: 'dyndatetime(y, m, d+1, 20)',
          end: 'dyndatetime(y, m, d+1, 21, 50)',
          title: 'Product Team mtg.',
          color: '#913aa7',
        },
        {
          start: 'dyndatetime(y, m, d-1, 13)',
          end: 'dyndatetime(y, m, d-1, 15)',
          title: 'Decision Making mtg.',
          color: '#46c3d6',
        },
        {
          start: 'dyndatetime(y, m, d+1, 13)',
          end: 'dyndatetime(y, m, d+1, 14)',
          title: 'Quick mtg. with Martin',
          color: '#50b166',
        },
        {
          start: 'dyndatetime(y, m, d+3, 12)',
          end: 'dyndatetime(y, m, d+3, 16)',
          color: '#5bb7c5',
          title: 'Team-Building',
        },
      ],
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-showing-events-timezone"></div>
  `,
};
