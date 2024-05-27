import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-custom-event-sort')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            schedule: {
              type: 'week',
            },
          },
          data: [
            {
              id: 1,
              start: 'dyndatetime(y,m,d,2)',
              end: 'dyndatetime(y,m,d,20)',
              title: 'Event 1',
              order: 1,
              color: '#e7b300',
            },
            {
              id: 2,
              start: 'dyndatetime(y,m,d,7)',
              end: 'dyndatetime(y,m,d,19)',
              title: 'Event 2',
              order: 4,
              color: '#00ca10',
            },
            {
              id: 3,
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,16)',
              title: 'Event 3',
              order: 3,
              color: '#00ca10',
            },
            {
              id: 4,
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,15)',
              title: 'Event 4',
              order: 2,
              color: '#f5850c',
            },

            {
              id: 5,
              start: 'dyndatetime(y,m,d+1,14)',
              end: 'dyndatetime(y,m,d+1,23)',
              title: 'Event 6',
              order: 1,
              color: '#e7b300',
            },
            {
              id: 6,
              start: 'dyndatetime(y,m,d+1,18)',
              end: 'dyndatetime(y,m,d+1,23)',
              title: 'Event 7',
              order: 2,
              color: '#00ca10',
            },
            {
              id: 7,
              start: 'dyndatetime(y,m,d+1,19)',
              end: 'dyndatetime(y,m,d+1,22)',
              title: 'Event 8',
              order: 3,
              color: '#00ca10',
            },
            {
              id: 8,
              start: 'dyndatetime(y,m,d+1,12)',
              end: 'dyndatetime(y,m,d+1,22)',
              title: 'Event 9',
              order: 2,
              color: '#f5850c',
            },
            {
              id: 9,
              start: 'dyndatetime(y,m,d+1,12)',
              end: 'dyndatetime(y,m,d+1,15)',
              title: 'Event 10',
              order: 2,
              color: '#f5850c',
            },
            {
              id: 10,
              start: 'dyndatetime(y,m,d-1,2)',
              end: 'dyndatetime(y,m,d-1,14)',
              title: 'Event 7',
              order: 2,
              color: '#00ca10',
            },
            {
              id: 11,
              start: 'dyndatetime(y,m,d-1,4)',
              end: 'dyndatetime(y,m,d-1,10)',
              title: 'Event 8',
              order: 3,
              color: '#00ca10',
            },
            {
              id: 12,
              start: 'dyndatetime(y,m,d-1,6)',
              end: 'dyndatetime(y,m,d-1,12)',
              title: 'Event 9',
              order: 2,
              color: '#f5850c',
            },
          ],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-custom-event-sort"></div>
  `,
};
