import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    //<hide-comment>
    var airBnB =
      '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ff5252" d="M42.459,32.519c-1.037-3.336-9.539-19.596-12.12-24.5l-0.026-0.048C29.153,5.559,26.676,4,24,4 s-5.153,1.559-6.291,3.929L17.661,8.02C15.08,12.923,6.578,29.183,5.542,32.518C5.261,33.421,5,34.407,5,35.5 c0,4.687,3.813,8.5,8.5,8.5c4.654,0,7.612-1.949,10.5-5.184C26.888,42.051,29.846,44,34.5,44c4.687,0,8.5-3.813,8.5-8.5 C43,34.407,42.739,33.421,42.459,32.519z M23.999,34.662C22.33,32.515,20,28.881,20,26c0-2.206,1.794-4,4-4s4,1.794,4,4 C28,28.872,25.668,32.511,23.999,34.662z M34.5,41c-3.287,0-5.521-1.107-8.325-4.258C27.878,34.596,31,30.104,31,26 c0-3.86-3.141-7-7-7s-7,3.14-7,7c0,4.104,3.122,8.596,4.825,10.742C19.021,39.893,16.787,41,13.5,41C10.468,41,8,38.533,8,35.5 c0-0.653,0.162-1.308,0.406-2.09C9.17,30.95,15.3,18.948,20.316,9.417l0.076-0.146C21.055,7.891,22.471,7,24,7 s2.945,0.891,3.615,2.285l0.068,0.132C32.7,18.948,38.83,30.95,39.595,33.411C39.838,34.192,40,34.847,40,35.5 C40,38.533,37.532,41,34.5,41z"/></svg>';
    var booking =
      '<svg clip-rule="evenodd" fill-rule="evenodd" height="2445" stroke-linejoin="round" stroke-miterlimit="1.414" viewBox="-.092 .015 2732.125 2671.996" width="2500" xmlns="http://www.w3.org/2000/svg"><path d="m2732.032 513.03c0-283.141-229.978-513.015-513.118-513.015h-1705.89c-283.138 0-513.116 229.874-513.116 513.015v1645.965c0 283.066 229.978 513.016 513.118 513.016h1705.889c283.14 0 513.118-229.95 513.118-513.016z" fill="#0c3b7c"/><path d="m.001 1659.991h1364.531v1012.019h-1364.53z" fill="#0c3b7c"/><g fill-rule="nonzero"><path d="m1241.6 1768.638-220.052-.22v-263.12c0-56.22 21.808-85.48 69.917-92.165h150.136c107.068 0 176.328 67.507 176.328 176.766 0 112.219-67.507 178.63-176.328 178.739zm-220.052-709.694v-69.26c0-60.602 25.643-89.424 81.862-93.15h112.657c96.547 0 154.41 57.753 154.41 154.52 0 73.643-39.671 159.67-150.903 159.67h-198.026zm501.037 262.574-39.78-22.356 34.74-29.699c40.437-34.74 108.163-112.876 108.163-247.67 0-206.464-160.109-339.614-407.888-339.614h-282.738v-.11h-32.219c-73.424 2.74-132.273 62.466-133.04 136.329v1171.499h453.586c275.396 0 453.148-149.917 453.148-382.135 0-125.04-57.424-231.889-153.972-286.244" fill="#fff"/><path d="m1794.688 1828.066c0-89.492 72.178-161.894 161.107-161.894 89.154 0 161.669 72.402 161.669 161.894 0 89.379-72.515 161.894-161.67 161.894-88.928 0-161.106-72.515-161.106-161.894" fill="#00bafc"/></g></svg>';
    var makeMyTrip =
      '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 152.8 152.8" style="enable-background:new 0 0 152.8 152.8;" xml:space="preserve">' +
      '<style type="text/css">' +
      '.st0{fill:#EB2226;}' +
      '.st1{fill:#FFFFFF;}' +
      '</style>' +
      '<g><path class="st0" d="M118.3,152.8c9.2-0.1,18-3.7,24.4-10.2c6.5-6.5,10.1-15.2,10.1-24.4V34.8c0-9.2-3.6-18-10-24.6' +
      'C136.3,3.7,127.6,0,118.3,0H34.4c-9.2,0.1-18,3.7-24.4,10.2C3.6,16.8,0,25.6,0,34.8v83.5c0.1,19,15.5,34.3,34.4,34.4"></path>' +
      '<path class="st1" d="M94.6,81.1c-3.2,10.8,2,21.6,13.2,17.3c-3.2,7.8-8.6,19.4-8.6,31.6c0,0,0,8.2,6,10.2c0,0,8.4,2,6.6-5.4' +
      'c-1.3-4.7-1.7-9.5-1.1-14.3c2-10,5.2-19.7,9.2-29c0,0,12.8-26.8,20.3-39.2c0,0,3.1-6.4-3.2-6.4c-1.9,0-3.7,1-4.9,2.5l-18.1,32.3' +
      'c-2.8,5-5.4,6.6-7.4,6.6c-4.6,0-3.6-7.3-2.9-10c2-9,5.3-17.6,9.6-25.9c3.2-7.1-3.2-7.7-3.2-7.7c-4.1-1.1-7.2,5.6-7.2,5.6L95.5,64' +
      'c-4.7,8.2-9.8,16-15.4,23.5c0,0-1,1.2-1.7,0.7c-0.7-0.6-0.4-1.8-0.4-1.8c1.2-10,3.2-19.8,6-29.5c0.1-0.6,0.2-1.1,0.2-1.7' +
      'c0.1-1.3-0.2-2.6-1.1-3.6c-0.8-1.1-2-1.7-3.4-1.7c-3.2-0.4-4.8,1.2-7.7,4.7c-6.4,7.8-13.8,19.6-17.4,24.8c-0.4,0.6-1.1,0.5-1.1-0.4' +
      'c0-2.4,8.4-28.3,8.4-28.3s1-3.6-1.9-4.8c0,0-4.4-2.8-8,2.6L34.9,72.1c-1.3,1.8-2,1.2-2,1.2v-1.6l2.8-15.4' +
      'c2.2-11.8-1.9-12.4-4.6-12.8c-1.9,0-4,0.6-5.6,1.7C20,47.9,16,58.6,16,58.6s-1.2,3.8,1.4,5.4c0.8,0.5,1.8,0.8,2.8,0.7' +
      'c3.8-0.2,4.6-7.3,7.3-7.3c0.5,0,0.5,0.6,0.5,0.7l-8.9,37.3c-0.6,2.2,0.4,4.4,2.2,5.6c1.2,0.7,2.5,0.8,3.8,0.6' +
      'c1.2-0.4,2.3-1.2,3-2.3l3.2-5C36,86,44.6,74.2,45.5,74.2c0.4,0,0.5,0,0.5,0.4l-3.2,22c-0.4,1.9,0.7,4,2.5,4.8' +
      'c1.7,0.6,3.5,0.5,5-0.4c1.8-1.4,3.4-3.2,4.4-5.3c1.8-2.9,10.4-13.1,15.7-22.4c0.4-0.6,0.7,0,0.6,0.4c-1.1,4.9-1.9,18-2,21.2' +
      'c-0.2,6.4,4.7,7.1,4.8,7.1c3.2,0.2,6.4-1.2,8.2-3.8"></path></g></svg>';
    //</hide-comment>

    var myEvents = [
      {
        start: 'dyndatetime(y,m,d-18,14)',
        end: 'dyndatetime(y,m,d-15,11)',
        icon: airBnB,
        title: 'Mary Smith',
        color: '#fdf500',
      },
      {
        start: 'dyndatetime(y,m,d-7,14)',
        end: 'dyndatetime(y,m,d-1,11)',
        title: 'James Johnson',
        icon: airBnB,
        color: '#fdf500',
      },
      {
        start: 'dyndatetime(y,m,d-12,14)',
        end: 'dyndatetime(y,m,d-9,11)',
        title: 'Patricia Williams',
        icon: airBnB,
        color: '#fdf500',
      },
      {
        start: 'dyndatetime(y,m,d+3,14)',
        end: 'dyndatetime(y,m,d+5,11)',
        title: 'Michael Brown',
        icon: airBnB,
        color: '#fdf500',
      },
      {
        start: 'dyndatetime(y,m,d+10,14)',
        end: 'dyndatetime(y,m,d+11,11)',
        title: 'Jennifer Jones',
        icon: booking,
        color: '#e20000',
      },
      {
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d+3,11)',
        title: 'Robert Garcia',
        icon: booking,
        color: '#e20000',
      },
      {
        start: 'dyndatetime(y,m,d+19,14)',
        end: 'dyndatetime(y,m,d+20,11)',
        title: 'Linda Miller',
        icon: booking,
        color: '#e20000',
      },
      {
        start: 'dyndatetime(y,m,d+26,14)',
        end: 'dyndatetime(y,m,d+27,11)',
        title: 'John Davis',
        icon: booking,
        color: '#e20000',
      },
      {
        start: 'dyndatetime(y,m,d-15,14)',
        end: 'dyndatetime(y,m,d-13,11)',
        title: 'Elizabeth Rodriguez',
        icon: makeMyTrip,
        color: '#1dab2f',
      },
      {
        start: 'dyndatetime(y,m,d+13,14)',
        end: 'dyndatetime(y,m,d+15,11)',
        title: 'David Martinez',
        icon: makeMyTrip,
        color: '#1dab2f',
      },
      {
        start: 'dyndatetime(y,m,d+16,14)',
        end: 'dyndatetime(y,m,d+18,11)',
        title: 'Barbara Wilson',
        icon: makeMyTrip,
        color: '#1dab2f',
      },
      {
        start: 'dyndatetime(y,m,d-9,14)',
        end: 'dyndatetime(y,m,d-8,11)',
        title: 'William Anderson',
        icon: makeMyTrip,
        color: '#1dab2f',
      },
      {
        start: 'dyndatetime(y,m,d+23,14)',
        end: 'dyndatetime(y,m,d+26,11)',
        title: 'Susan Taylor',
        icon: makeMyTrip,
        color: '#1dab2f',
      },
      {
        start: 'dyndatetime(y,m,d+6,14)',
        end: 'dyndatetime(y,m,d+9,11)',
        title: 'Richard Jackson',
        icon: airBnB,
        color: '#fdf500',
      },
    ];

    $(function () {
      $('#demo-property-booking-calendar')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: {
              type: 'month',
              eventDisplay: 'exact',
            },
          },
          clickToCreate: true,
          data: myEvents,
          dragInTime: true,
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          // eventOverlap: false,
          moveInTime: true,
          extendDefaultEvent: function (args) {
            var startDateAndTime = new Date(args.start.setHours(14));
            var endDate = new Date(args.start.setDate(args.start.getDate() + 1));
            var endDateAndTime = new Date(endDate.setHours(11));
            return {
              title: 'New booking',
              start: startDateAndTime,
              end: endDateAndTime,
            };
          },
          renderLabelContent: function (event) {
            if (event.original.icon) {
              return (
                '<div class="mbsc-flex"><span class="mds-property-booking-icon">' +
                event.original.icon +
                '</span>' +
                '<span>' +
                event.title +
                '</span></div>'
              );
            }
            return '<div><span>' + event.title + '</span></div>';
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-property-booking-calendar"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-property-booking-icon {
    padding: 2px 4px 2px 0;
    width: 15px;
    height: 15px;
}
.mds-property-booking-icon svg {
    width: 15px;
    height: 15px;
}
  `,
};
