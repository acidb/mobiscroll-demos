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
      $('#demo-resource-order')
        .mobiscroll()
        .eventcalendar({
          refDate: new Date(2024, 8, 1),
          view: {
            timeline: {
              type: 'week',
              size: 4,
              resolutionHorizontal: 'day',
              eventList: false,
              resourceOrder: true,
            },
          },
          data: [
            { title: 'Event overview 1', start: '2024-08-13', end: '2024-08-21', resource: 1, order: 1, color: 'green' },
            { title: 'Event nr 1', start: '2024-08-13', end: '2024-08-14', resource: 1, order: 3, color: 'green' },
            { title: 'Event nr 1 alt', start: '2024-08-13', end: '2024-08-14', resource: 1, order: 2, color: 'green' },
            { title: 'Event nr 2', start: '2024-08-14T15:00', end: '2024-08-18T12:00', resource: 1, order: 2, color: 'green' },
            { title: 'Event nr 3', start: '2024-08-19', end: '2024-08-21', resource: 1, order: 2, color: 'green' },
            { title: 'Event overview 1', start: '2024-08-12', end: '2024-08-26', resource: 2, order: 1 },
            { title: 'Event nr 1', start: '2024-08-13', end: '2024-08-15', resource: 2, order: 2 },
            { title: 'Event nr 1 alt', start: '2024-08-12', end: '2024-08-15', resource: 2, order: 4 },
            { title: 'Event nr 2', start: '2024-08-14T15:00', end: '2024-08-19T12:00', resource: 2, order: 1 },
            { title: 'Event nr 3', start: '2024-08-19', end: '2024-08-21', resource: 2, order: 2 },
            { title: 'Event overview 1', start: '2024-08-13', end: '2024-08-21', resource: 3, order: 1, color: 'red' },
            { title: 'Event nr 1', start: '2024-08-13', end: '2024-08-14', resource: 3, order: 3, color: 'red' },
            { title: 'Event nr 1 alt', start: '2024-08-13T12:00', end: '2024-08-14', resource: 3, order: 2, color: 'red' },
            { title: 'Event nr 2', start: '2024-08-13T15:00', end: '2024-08-18T12:00', resource: 3, order: 2, color: 'red' },
            { title: 'Event nr 3', start: '2024-08-19', end: '2024-08-21', resource: 3, order: 2, color: 'red' },
          ],
          resources: [
            { id: 1, name: 'Resource 1' },
            { id: 2, name: 'Resource 2' },
            { id: 3, name: 'Resource 3' },
            { id: 4, name: 'Resource 4' },
            {
              id: 5,
              name: 'Resource 5',
              children: [
                { id: '1-1', name: 'Child Resource 1' },
                { id: '1-2', name: 'Child Resource 2' },
                { id: '1-3', name: 'Child Resource 3' },
                { id: '1-4', name: 'Child Resource 4' },
                { id: '1-5', name: 'Child Resource 5' },
              ],
            },
            { id: 6, name: 'Resource 6' },
            { id: 7, name: 'Resource 7' },
          ],
          dragToCreate: true,
          dragToMove: true,
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-resource-order"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: ``,
};
