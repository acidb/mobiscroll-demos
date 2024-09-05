import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var airBnB = 'https://img.mobiscroll.com/demos/air-bnb-icon.png';
    var booking = 'https://img.mobiscroll.com/demos/booking-icon.png';
    var makeMyTrip = 'https://img.mobiscroll.com/demos/make-my-trip-icon.png';

    var myEvents = [
      {
        start: 'dyndatetime(y,m,d-18,12)',
        end: 'dyndatetime(y,m,d-15,12)',
        icon: airBnB,
        title: 'Mary Smith',
        color: '#fffa61',
      },
      {
        start: 'dyndatetime(y,m,d-7,12)',
        end: 'dyndatetime(y,m,d-1,12)',
        title: 'James Johnson',
        icon: airBnB,
        color: '#fffa61',
      },
      {
        start: 'dyndatetime(y,m,d-12,12)',
        end: 'dyndatetime(y,m,d-9,12)',
        title: 'Patricia Williams',
        icon: airBnB,
        color: '#fffa61',
      },
      {
        start: 'dyndatetime(y,m,d+3,12)',
        end: 'dyndatetime(y,m,d+5,12)',
        title: 'Michael Brown',
        icon: airBnB,
        color: '#fffa61',
      },
      {
        start: 'dyndatetime(y,m,d+10,12)',
        end: 'dyndatetime(y,m,d+11,12)',
        title: 'Jennifer Jones',
        icon: booking,
        color: '#ff9999',
      },
      {
        start: 'dyndatetime(y,m,d,12)',
        end: 'dyndatetime(y,m,d+3,12)',
        title: 'Robert Garcia',
        icon: booking,
        color: '#ff9999',
      },
      {
        start: 'dyndatetime(y,m,d+19,12)',
        end: 'dyndatetime(y,m,d+20,12)',
        title: 'Linda Miller',
        icon: booking,
        color: '#ff9999',
      },
      {
        start: 'dyndatetime(y,m,d+26,12)',
        end: 'dyndatetime(y,m,d+27,12)',
        title: 'John Davis',
        icon: booking,
        color: '#ff9999',
      },
      {
        start: 'dyndatetime(y,m,d-15,12)',
        end: 'dyndatetime(y,m,d-13,12)',
        title: 'Elizabeth Rodriguez',
        icon: makeMyTrip,
        color: '#a0efaa',
      },
      {
        start: 'dyndatetime(y,m,d+13,12)',
        end: 'dyndatetime(y,m,d+15,12)',
        title: 'David Martinez',
        icon: makeMyTrip,
        color: '#a0efaa',
      },
      {
        start: 'dyndatetime(y,m,d+16,12)',
        end: 'dyndatetime(y,m,d+18,12)',
        title: 'Barbara Wilson',
        icon: makeMyTrip,
        color: '#a0efaa',
      },
      {
        start: 'dyndatetime(y,m,d-9,12)',
        end: 'dyndatetime(y,m,d-8,12)',
        title: 'William Anderson',
        icon: makeMyTrip,
        color: '#a0efaa',
      },
      {
        start: 'dyndatetime(y,m,d+23,12)',
        end: 'dyndatetime(y,m,d+26,12)',
        title: 'Susan Taylor',
        icon: makeMyTrip,
        color: '#a0efaa',
      },
      {
        start: 'dyndatetime(y,m,d+6,12)',
        end: 'dyndatetime(y,m,d+9,12)',
        title: 'Richard Jackson',
        icon: airBnB,
        color: '#fffa61',
      },
    ];

    mobiscroll.eventcalendar('#demo-booking-calendar', {
      view: {
        calendar: {
          type: 'month',
          eventDisplay: 'exact',
        },
      },
      data: myEvents,
      clickToCreate: true,
      dragToCreate: true,
      dragToMove: true,
      dragToResize: true,
      eventOverlap: false,
      extendDefaultEvent: function (args) {
        var startDateAndTime = new Date(args.start.setHours(12));
        var endDateAndTime = new Date(args.start.setDate(args.start.getDate() + 1)).setHours(12);
        return {
          title: 'New reservation',
          start: startDateAndTime,
          end: endDateAndTime,
        };
      },
      renderLabelContent: function (event) {
        return (
          '<div class="mbsc-flex mds-booking-item mbsc-align-items-center">' +
          (event.original.icon ? '<img class="mds-booking-icon" draggable="false" src=' + event.original.icon + '>' : '') +
          '<span>' +
          event.title +
          '</span></div>'
        );
      },
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-booking-calendar" class="mds-booking-calendar"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-booking-calendar .mbsc-calendar-text {
  height: 30px !important;  
}

.mds-booking-item {
  font-size: 16px;
  height: 30px;  
}

.mds-booking-icon {
  margin-right: 8px;
  width: 24px;
  height: 24px;
}
  `,
};
