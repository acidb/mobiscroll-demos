import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var calendar = mobiscroll.eventcalendar('#demo-event-listing', {
      // drag,
      view: {
        timeline: {
          type: 'month',
          eventDisplay: 'fill',
        },
      },
      data: [
        {
          start: 'dyndatetime(y,m,d-2)',
          end: 'dyndatetime(y,m,d+1)',
          allDay: true,
          title: 'Event 1',
          resource: 1,
        },
        {
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d+4,15)',
          title: 'Event 2',
          resource: 2,
        },
        {
          start: 'dyndatetime(y,m,d+3)',
          end: 'dyndatetime(y,m,d+10)',
          allDay: true,
          title: 'Event 3',
          resource: 2,
        },
        {
          start: 'dyndatetime(y,m,d-10,7)',
          end: 'dyndatetime(y,m,d-5,12)',
          title: 'Event 4',
          resource: 2,
        },
        {
          start: 'dyndatetime(y,m,d+7)',
          end: 'dyndatetime(y,m,d+13)',
          allDay: true,
          title: 'Event 5',
          resource: 3,
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d+2,20)',
          title: 'Event 6',
          resource: 4,
        },
        {
          start: 'dyndatetime(y,m,d-2)',
          end: 'dyndatetime(y,m,d+1)',
          allDay: true,
          title: 'Event 7',
          resource: 4,
        },
        {
          start: 'dyndatetime(y,m,d-8)',
          end: 'dyndatetime(y,m,d-3)',
          allDay: true,
          title: 'Event 8',
          resource: 5,
        },
        {
          start: 'dyndatetime(y,m,d+6)',
          end: 'dyndatetime(y,m,d+14)',
          allDay: true,
          title: 'Event 9',
          resource: 6,
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
          color: '#60e81a',
        },
        {
          id: 3,
          name: 'Resource C',
          color: '#3ba7ff',
        },
        {
          id: 4,
          name: 'Resource D',
          color: '#e25dd2',
        },
        {
          id: 5,
          name: 'Resource E',
          color: '#f1e920',
        },
        {
          id: 6,
          name: 'Resource F',
          color: '#1ac38d',
        },
      ],
      renderHeader: function () {
        return (
          '<div mbsc-calendar-nav class="md-event-listing-nav"></div>' +
          '<div class="md-event-listing-picker">' +
          '<label>Work week<input mbsc-segmented type="radio" name="view" value="workweek" class="event-listing-view-change"></label>' +
          '<label>Week<input mbsc-segmented type="radio" name="view" value="week" class="event-listing-view-change"></label>' +
          '<label>Month<input mbsc-segmented type="radio" name="view" value="month" class="event-listing-view-change" checked></label>' +
          '</div>' +
          '<div mbsc-calendar-prev class="md-event-listing-prev"></div>' +
          '<div mbsc-calendar-today class="md-event-listing-today"></div>' +
          '<div mbsc-calendar-next class="md-event-listing-next"></div>'
        );
      },
    });

    document.querySelectorAll('.event-listing-view-change').forEach(function (elm) {
      elm.addEventListener('change', function (ev) {
        switch (ev.target.value) {
          case 'workweek':
            calendar.setOptions({
              view: {
                timeline: {
                  type: 'week',
                  eventDisplay: 'fill',
                  startDay: 1,
                  endDay: 5,
                },
              },
            });
            break;
          case 'week':
            calendar.setOptions({
              view: {
                timeline: {
                  type: 'week',
                  eventDisplay: 'fill',
                },
              },
            });
            break;
          case 'month':
            calendar.setOptions({
              view: {
                timeline: {
                  type: 'month',
                  eventDisplay: 'fill',
                },
              },
            });
            break;
        }
      });
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      function (events) {
        calendar.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="md-event-listing">
    <div id="demo-event-listing"></div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-event-listing-cont {
    position: relative;
    padding-left: 50px;
}

.md-event-listing-avatar {
    position: absolute;
    max-height: 50px;
    max-width: 50px;
    top: 21px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    left: 20px;
}

.md-event-listing-name {
    font-size: 16px;
}

.md-event-listing-title {
    font-size: 12px;
    margin-top: 5px;
}

.md-event-listing .mbsc-segmented {
    max-width: 350px;
    margin: 0 auto;
    padding: 1px;
}

.md-event-listing-picker {
    flex: 1 0 auto;
}

.md-event-listing-nav {
    width: 200px;
}

/* material header order */

.mbsc-material.md-event-listing-prev {
    order: 1;
}

.mbsc-material.md-event-listing-next {
    order: 2;
}

.mbsc-material.md-event-listing-nav {
    order: 3;
}

.mbsc-material .md-event-listing-picker {
    order: 4;
}

.mbsc-material .md-event-listing-today {
    order: 5;
}

/* windows header order */

.mbsc-windows.md-event-listing-nav {
    order: 1;
}

.mbsc-windows.md-event-listing-prev {
    order: 2;
}

.mbsc-windows.md-event-listing-next {
    order: 3;
}

.mbsc-windows .md-event-listing-picker {
    order: 4;
}

.mbsc-windows .md-event-listing-today {
    order: 5;
}
  `,
};
