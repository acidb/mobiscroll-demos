import * as m from '@mobiscroll/javascript';
import { print } from '@mobiscroll/print';

var mobiscroll = Object.assign({}, m);
mobiscroll.print = print;

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var inst = mobiscroll.eventcalendar('#demo-printing-the-view', {
      // drag,
      modules: [mobiscroll.print],
      view: {
        timeline: {
          type: 'week',
          startDay: 1,
          endDay: 5,
          eventDisplay: 'fill',
        },
      },
      resources: [
        {
          id: 1,
          name: 'Flatiron Room',
          color: '#fdf500',
        },
        {
          id: 2,
          name: 'The Capital City',
          color: '#ff0101',
        },
        {
          id: 3,
          name: 'Heroes Square',
          color: '#01adff',
        },
        {
          id: 4,
          name: 'Thunderdome',
          color: '#ff4600',
        },
        {
          id: 5,
          name: 'King’s Landing',
          color: '#239a21',
        },
        {
          id: 6,
          name: 'Gathering Field',
          color: '#8f1ed6',
        },
      ],
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/daily-weekly-events/',
      function (events) {
        inst.setEvents(events);
      },
      'jsonp',
    );

    document.getElementById('print-button').addEventListener('click', function () {
      inst.print();
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<button id="print-button" mbsc-button>Print timeline</button>
<div id="demo-printing-the-view"></div>
  `,
};
