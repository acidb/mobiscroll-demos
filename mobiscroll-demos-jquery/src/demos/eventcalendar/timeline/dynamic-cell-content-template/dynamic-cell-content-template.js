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
      $('#demo-dynamic-cell-content')
        .mobiscroll()
        .eventcalendar({
          // drag,
          /// clean
          dragToCreate: true,
          dragToMove: true,
          clickToCreate: true,
          view: {
            timeline: {
              type: 'month',
              resolutionHorizontal: 'day',
              // eventList: true,
            },
          },
          renderCell: function (args) {
            var cnt = args.events?.length || 0;
            if (args.events?.length) {
              console.log(args.events, cnt);
            }
            if (!cnt) return '';
            return '<div class="event-badge"><span class="event-count">' + cnt + '</span><span class="event-suffix">/8h</span></div>';
          },
          onCellHoverIn: function (args) {
            console.log('onCellHoverIn', args);
          },
          data: [
            {
              start: 'dyndatetime(y,m,d,2)',
              end: 'dyndatetime(y,m,d,4)',
              title: 'Event 1',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d,4)',
              end: 'dyndatetime(y,m,d,6)',
              title: 'Event 2',
              resource: 3,
            },
          ],
          resources: [
            {
              id: 1,
              name: 'Resource A',
              color: '#e20000',
            },
            {
              id: 2,
              name: 'Resource B',
              color: '#76e083',
            },
            {
              id: 3,
              name: 'Resource C',
              color: '#4981d6',
            },
            {
              id: 4,
              name: 'Resource D',
              color: '#e25dd2',
            },
            {
              id: 5,
              name: 'Resource E',
              color: '#1dab2f',
            },
            // {
            //   id: 6,
            //   name: 'Resource F',
            //   color: '#d6d145',
            // },
            // {
            //   id: 7,
            //   name: 'Resource G',
            //   color: '#34c8e0',
            // },
            // {
            //   id: 8,
            //   name: 'Resource H',
            //   color: '#9dde46',
            // },
            // {
            //   id: 9,
            //   name: 'Resource I',
            //   color: '#166f6f',
            // },
            // {
            //   id: 10,
            //   name: 'Resource J',
            //   color: '#f7961e',
            // },
            // {
            //   id: 11,
            //   name: 'Resource K',
            //   color: '#34c8e0',
            // },
            // {
            //   id: 12,
            //   name: 'Resource L',
            //   color: '#af0000',
            // },
            // {
            //   id: 13,
            //   name: 'Resource M',
            //   color: '#446f1c',
            // },
            // {
            //   id: 14,
            //   name: 'Resource N',
            //   color: '#073138',
            // },
            // {
            //   id: 15,
            //   name: 'Resource O',
            //   color: '#4caf00',
            // },
          ],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-dynamic-cell-content"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
  .mbsc-timeline-events {
    top: 25px;
  }

  .event-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 6px;
  border-radius: 12px;
  background: rgba(0, 123, 255, 0.1);
  font-size: 12px;
  font-weight: 500;
}

.event-count {
  margin-right: 2px;
  color: #007bff;
}

.event-suffix {
  color: #555;
}

    `,
};
