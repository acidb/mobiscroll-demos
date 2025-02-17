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
      var formatDate = mobiscroll.formatDate;
      var $tooltip = $('#demo-health-care-popup');
      var $startDate = $('#demo-health-care-event-start');
      var $endDate = $('#demo-health-care-event-end');

      var myEvents = [
        {
          id: 1,
          resource: 2,
          title: 'Working hours',
          start: 'dyndatetime(y,m,d-10,10)',
          end: 'dyndatetime(y,m,d-10,18)',
          recurring: 'FREQ=DAILY;COUNT=30;INTERVAL=1',
          type: 'availability',
          editable: false,
        },
        {
          id: 2,
          resource: 4,
          title: 'Working hours',
          start: 'dyndatetime(y,m,d-10,8)',
          end: 'dyndatetime(y,m,d-10,16)',
          recurring: 'FREQ=DAILY;COUNT=30;INTERVAL=1',
          type: 'availability',
          editable: false,
        },
        {
          id: 3,
          resource: 6,
          title: 'Working hours',
          start: 'dyndatetime(y,m,d-10,9)',
          end: 'dyndatetime(y,m,d-10,17)',
          recurring: 'FREQ=DAILY;COUNT=30;INTERVAL=1',
          type: 'availability',
          editable: false,
        },
        {
          id: 4,
          resource: 8,
          title: 'Working hours',
          start: 'dyndatetime(y,m,d-10,10)',
          end: 'dyndatetime(y,m,d-10,18)',
          recurring: 'FREQ=DAILY;COUNT=30;INTERVAL=1',

          type: 'availability',
          editable: false,
        },
        {
          id: 5,
          resource: 10,
          title: 'Working hours',
          start: 'dyndatetime(y,m,d-10,8)',
          end: 'dyndatetime(y,m,d-10,16)',
          recurring: 'FREQ=DAILY;COUNT=30;INTERVAL=1',

          type: 'availability',
          editable: false,
        },
        {
          id: 6,
          resource: 12,
          title: 'Working hours',
          start: 'dyndatetime(y,m,d-10,9)',
          end: 'dyndatetime(y,m,d-10,17)',
          recurring: 'FREQ=DAILY;COUNT=30;INTERVAL=1',
          type: 'availability',
          editable: false,
        },
        {
          id: 1,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 10, 40)',
          end: 'dyndatetime(y, m, d-10, 11, 20)',
        },
        {
          id: 2,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 11, 20)',
          end: 'dyndatetime(y, m, d-10, 12, 0)',
        },
        {
          id: 3,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 13, 40)',
          end: 'dyndatetime(y, m, d-10, 14, 20)',
        },
        {
          id: 4,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 9, 20)',
          end: 'dyndatetime(y, m, d-10, 10, 0)',
        },
        {
          id: 5,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 11, 40)',
          end: 'dyndatetime(y, m, d-10, 12, 20)',
        },
        {
          id: 6,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 12, 20)',
          end: 'dyndatetime(y, m, d-10, 13, 0)',
        },
        {
          id: 7,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 14, 40)',
          end: 'dyndatetime(y, m, d-10, 15, 20)',
        },
        {
          id: 8,
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 14, 0)',
          end: 'dyndatetime(y, m, d-10, 14, 40)',
        },
        {
          id: 9,
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 13, 20)',
          end: 'dyndatetime(y, m, d-10, 14, 0)',
        },
        {
          id: 10,
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 11, 0)',
          end: 'dyndatetime(y, m, d-10, 11, 40)',
        },
        {
          id: 11,
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 9, 40)',
          end: 'dyndatetime(y, m, d-10, 10, 20)',
        },
        {
          id: 12,
          resource: 7,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 15, 40)',
          end: 'dyndatetime(y, m, d-10, 16, 20)',
        },
        {
          id: 13,
          resource: 7,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 15, 0)',
          end: 'dyndatetime(y, m, d-10, 15, 40)',
        },
        {
          id: 14,
          resource: 7,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 12, 0)',
          end: 'dyndatetime(y, m, d-10, 12, 40)',
        },
        {
          id: 15,
          resource: 7,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 11, 20)',
          end: 'dyndatetime(y, m, d-10, 12, 0)',
        },
        {
          id: 16,
          resource: 9,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 9, 0)',
          end: 'dyndatetime(y, m, d-10, 9, 40)',
        },
        {
          id: 17,
          resource: 9,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 9, 40)',
          end: 'dyndatetime(y, m, d-10, 10, 20)',
        },
        {
          id: 18,
          resource: 9,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 11, 40)',
          end: 'dyndatetime(y, m, d-10, 12, 20)',
        },
        {
          id: 19,
          resource: 9,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 13, 40)',
          end: 'dyndatetime(y, m, d-10, 14, 20)',
        },
        {
          id: 20,
          resource: 9,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 14, 20)',
          end: 'dyndatetime(y, m, d-10, 15, 0)',
        },
        {
          id: 21,
          resource: 11,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 10, 0)',
          end: 'dyndatetime(y, m, d-10, 10, 40)',
        },
        {
          id: 22,
          resource: 11,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 10, 40)',
          end: 'dyndatetime(y, m, d-10, 11, 20)',
        },
        {
          id: 23,
          resource: 11,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 13, 40)',
          end: 'dyndatetime(y, m, d-10, 14, 20)',
        },
        {
          id: 24,
          resource: 11,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 14, 20)',
          end: 'dyndatetime(y, m, d-10, 15, 0)',
        },
        {
          id: 25,
          resource: 11,
          title: 'New event',
          start: 'dyndatetime(y, m, d-10, 15, 0)',
          end: 'dyndatetime(y, m, d-10, 15, 40)',
        },
        {
          id: 1,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 10, 20)',
          end: 'dyndatetime(y, m, d - 9, 11, 0)',
        },
        {
          id: 2,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 11, 0)',
          end: 'dyndatetime(y, m, d - 9, 11, 40)',
        },
        {
          id: 3,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 13, 0)',
          end: 'dyndatetime(y, m, d - 9, 13, 40)',
        },
        {
          id: 4,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 14, 40)',
          end: 'dyndatetime(y, m, d - 9, 15, 20)',
        },
        {
          id: 5,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 14, 40)',
          end: 'dyndatetime(y, m, d - 9, 15, 20)',
        },
        {
          id: 6,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 12, 40)',
          end: 'dyndatetime(y, m, d - 9, 13, 20)',
        },
        {
          id: 7,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 8, 20)',
          end: 'dyndatetime(y, m, d - 9, 9, 0)',
        },
        {
          id: 8,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 9, 20)',
          end: 'dyndatetime(y, m, d - 9, 10, 0)',
        },
        {
          id: 9,
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 10, 40)',
          end: 'dyndatetime(y, m, d - 9, 11, 20)',
        },
        {
          id: 10,
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 11, 20)',
          end: 'dyndatetime(y, m, d - 9, 12, 0)',
        },
        {
          id: 11,
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 15, 0)',
          end: 'dyndatetime(y, m, d - 9, 15, 40)',
        },
        {
          id: 12,
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 15, 40)',
          end: 'dyndatetime(y, m, d - 9, 16, 20)',
        },
        {
          id: 13,
          resource: 7,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 14, 20)',
          end: 'dyndatetime(y, m, d - 9, 15, 0)',
        },
        {
          id: 14,
          resource: 7,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 13, 20)',
          end: 'dyndatetime(y, m, d - 9, 14, 0)',
        },
        {
          id: 15,
          resource: 7,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 10, 20)',
          end: 'dyndatetime(y, m, d - 9, 11, 0)',
        },
        {
          id: 16,
          resource: 9,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 8, 0)',
          end: 'dyndatetime(y, m, d - 9, 8, 40)',
        },
        {
          id: 17,
          resource: 9,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 8, 40)',
          end: 'dyndatetime(y, m, d - 9, 9, 20)',
        },
        {
          id: 18,
          resource: 9,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 10, 40)',
          end: 'dyndatetime(y, m, d - 9, 11, 20)',
        },
        {
          id: 19,
          resource: 9,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 11, 20)',
          end: 'dyndatetime(y, m, d - 9, 12, 0)',
        },
        {
          id: 20,
          resource: 9,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 13, 40)',
          end: 'dyndatetime(y, m, d - 9, 14, 20)',
        },
        {
          id: 21,
          resource: 11,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 10, 20)',
          end: 'dyndatetime(y, m, d - 9, 11, 0)',
        },
        {
          id: 22,
          resource: 11,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 13, 20)',
          end: 'dyndatetime(y, m, d - 9, 14, 0)',
        },
        {
          id: 23,
          resource: 11,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 14, 40)',
          end: 'dyndatetime(y, m, d - 9, 15, 20)',
        },
        {
          id: 24,
          resource: 11,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 9, 15, 20)',
          end: 'dyndatetime(y, m, d - 9, 16, 0)',
        },
        {
          id: 1,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 10, 40)',
          end: 'dyndatetime(y, m, d - 8, 11, 20)',
        },
        {
          id: 2,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 11, 20)',
          end: 'dyndatetime(y, m, d - 8, 12, 0)',
        },
        {
          id: 3,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 13, 40)',
          end: 'dyndatetime(y, m, d - 8, 14, 20)',
        },
        {
          id: 4,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 14, 40)',
          end: 'dyndatetime(y, m, d - 8, 15, 20)',
        },
        {
          id: 5,
          resource: 1,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 17, 0)',
          end: 'dyndatetime(y, m, d - 8, 17, 40)',
        },
        {
          id: 6,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 14, 20)',
          end: 'dyndatetime(y, m, d - 8, 15, 0)',
        },
        {
          id: 7,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 11, 0)',
          end: 'dyndatetime(y, m, d - 8, 11, 40)',
        },
        {
          id: 8,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 10, 20)',
          end: 'dyndatetime(y, m, d - 8, 11, 0)',
        },
        {
          id: 9,
          resource: 3,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 8, 0)',
          end: 'dyndatetime(y, m, d - 8, 8, 40)',
        },
        {
          id: 10,
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 9, 40)',
          end: 'dyndatetime(y, m, d - 8, 10, 20)',
        },
        {
          id: 11,
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 12, 0)',
          end: 'dyndatetime(y, m, d - 8, 12, 40)',
        },
        {
          id: 12,
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 14, 0)',
          end: 'dyndatetime(y, m, d - 8, 14, 40)',
        },
        {
          id: 13,
          resource: 5,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 15, 40)',
          end: 'dyndatetime(y, m, d - 8, 16, 20)',
        },
        {
          id: 14,
          resource: 7,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 10, 40)',
          end: 'dyndatetime(y, m, d - 8, 11, 20)',
        },
        {
          id: 15,
          resource: 7,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 11, 20)',
          end: 'dyndatetime(y, m, d - 8, 12, 0)',
        },
        {
          id: 16,
          resource: 7,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 12, 0)',
          end: 'dyndatetime(y, m, d - 8, 12, 40)',
        },
        {
          id: 17,
          resource: 7,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 15, 20)',
          end: 'dyndatetime(y, m, d - 8, 16, 0)',
        },
        {
          id: 18,
          resource: 9,
          title: 'New event',
          start: 'dyndatetime(y, m, d + 2, 14, 20)',
          end: 'dyndatetime(y, m, d + 2, 15, 0)',
        },
        {
          id: 19,
          resource: 9,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 13, 20)',
          end: 'dyndatetime(y, m, d - 8, 14, 0)',
        },
        {
          id: 20,
          resource: 9,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 10, 20)',
          end: 'dyndatetime(y, m, d - 8, 11, 0)',
        },
        {
          id: 21,
          resource: 11,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 9, 20)',
          end: 'dyndatetime(y, m, d - 8, 10, 0)',
        },
        {
          id: 22,
          resource: 11,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 10, 0)',
          end: 'dyndatetime(y, m, d - 8, 10, 40)',
        },
        {
          id: 23,
          resource: 11,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 12, 20)',
          end: 'dyndatetime(y, m, d - 8, 13, 0)',
        },
        {
          id: 24,
          resource: 11,
          title: 'New event',
          start: 'dyndatetime(y, m, d - 8, 15, 0)',
          end: 'dyndatetime(y, m, d - 8, 15, 40)',
        },
      ];

      myEvents = myEvents.slice(0, 6).concat(
        myEvents.slice(6).map(function (event) {
          return Object.assign({}, event, { recurring: 'FREQ=DAILY;COUNT=10;INTERVAL=3' });
        }),
      );

      var myInvalids = [
        {
          resource: [1, 2],
          start: '00:00',
          end: '10:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [1, 2],
          start: '18:00',
          end: '24:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [3, 4],
          start: '00:00',
          end: '08:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [3, 4],
          start: '16:00',
          end: '24:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [5, 6],
          start: '00:00',
          end: '09:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [5, 6],
          start: '17:00',
          end: '24:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [7, 8],
          start: '00:00',
          end: '10:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [7, 8],
          start: '18:00',
          end: '24:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [9, 10],
          start: '00:00',
          end: '08:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [9, 10],
          start: '16:00',
          end: '24:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [11, 12],
          start: '00:00',
          end: '09:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          resource: [11, 12],
          start: '17:00',
          end: '24:00',
          recurring: {
            repeat: 'daily',
          },
        },
      ];

      var myResources = [
        {
          id: 2,
          name: ' ',
          color: 'rgb(40, 179, 114)',
          cssClass: 'mds-healthc-resource-column-bar',
        },
        {
          id: 1,
          name: 'Dr. James Cole',
          color: 'rgba(255, 204, 193)',
          cssClass: 'mds-healthc-resource-column',
          description: 'Injury Recovery Specialist',
          img: 'https://img.mobiscroll.com/demos/m4.png',
        },
        {
          id: 4,
          name: ' ',
          color: 'rgb(40, 179, 114)',
          eventCreation: false,
          cssClass: 'mds-healthc-resource-column-bar',
        },
        {
          id: 3,
          name: 'Dr. Anna Hayes',
          color: 'rgb(193, 221, 195)',
          cssClass: 'mds-healthc-resource-column',
          description: 'Sports Physiotherapist',
          img: 'https://img.mobiscroll.com/demos/f3.png',
        },
        {
          id: 6,
          name: ' ',
          color: 'rgb(40, 179, 114)',
          eventCreation: false,
          cssClass: 'mds-healthc-resource-column-bar',
        },
        {
          id: 5,
          name: 'Dr. Mark Lewis',
          color: 'rgb(134, 224, 193)',
          cssClass: 'mds-healthc-resource-column',
          description: 'Mobility Recovery Expert',
          img: 'https://img.mobiscroll.com/demos/m3.png',
        },
        {
          id: 8,
          name: ' ',
          color: 'rgb(40, 179, 114)',
          eventCreation: false,
          cssClass: 'mds-healthc-resource-column-bar',
        },
        {
          id: 7,
          name: 'Dr. Emily Carter',
          color: 'rgb(255, 193, 228)',
          cssClass: 'mds-healthc-resource-column',
          description: 'Chiropractic Specialist',
          img: 'https://img.mobiscroll.com/demos/f1.png',
        },
        {
          id: 10,
          name: ' ',
          color: 'rgb(40, 179, 114)',
          eventCreation: false,
          cssClass: 'mds-healthc-resource-column-bar',
        },
        {
          id: 9,
          name: 'Dr. Robert Stone',
          color: 'rgb(193, 204, 255)',
          cssClass: 'mds-healthc-resource-column',
          description: 'Orthopedic Surgeon',
          img: 'https://img.mobiscroll.com/demos/m2.png',
        },
        {
          id: 12,
          name: ' ',
          color: 'rgb(40, 179, 114)',
          eventCreation: false,
          cssClass: 'mds-healthc-resource-column-bar',
        },
        {
          id: 11,
          name: 'Dr. Sophia Miller',
          color: 'rgb(255, 223, 176)',
          cssClass: 'mds-healthc-resource-column',
          description: 'Sports Physiotherapist',
          img: 'https://img.mobiscroll.com/demos/f2.png',
        },
      ];

      var myView = {
        timeLabelStep: 20,
        schedule: {
          type: 'week',
          startDay: 1,
          endDay: 5,
          startTime: '08:00',
          endTime: '20:00',
          timeCellStep: 20,
          allDay: false,
        },
      };

      $('#demo-health-care-planner')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          cssClass: 'mds-health-care-planner',
          // dragToCreate: true,
          // dragToResize: true,
          // dragToMove: true,
          dragTimeStep: 20,
          data: myEvents,
          eventOverlap: false,
          groupBy: 'date',
          invalid: myInvalids,
          renderResource: function (resource) {
            if (resource.cssClass !== 'mds-healthc-resource-column') {
              return ' ';
            }
            return (
              '<div class="mds-healthc-header-cont">' +
              '<div class="mds-healthc-header-name">' +
              resource.name +
              '</div>' +
              '<div class="mds-healthc-header-description">' +
              resource.description +
              '</div>' +
              '<img class="mds-healthc-header-avatar" src="' +
              resource.img +
              '"/>' +
              '</div>'
            );
          },
          renderScheduleEvent: function (data) {
            if (data.original.type == 'availability') {
              return '<div class="mds-healthc-availability-bar" style="background-color: ' + data.color + ';"></div>';
            } else {
              return (
                '<div class="mds-healthc-event" style="background:' +
                data.color +
                ';">' +
                '<div class="mds-other-content">' +
                '<div class="mds-healthc-event-title">' +
                '<b>Patient: ' +
                data.original.title +
                '</b><br>' +
                '<span class="mds-start-time">' +
                data.start +
                '</span> - ' +
                '<span class="mds-end-time">' +
                data.end +
                '</span>' +
                '</div>' +
                '</div>' +
                '</div>'
              );
            }
          },
          onEventHoverIn: function (args) {
            var event = args.event;
            $startDate.text(formatDate('hh:mm A', new Date(event.start)) + ' - ');
            $endDate.text(formatDate('hh:mm A', new Date(event.end)));

            tooltip.setOptions({ anchor: args.domEvent.target });
            if (event.type === 'availability') tooltip.open();
          },
          onEventHoverOut: function () {
            tooltip.close();
          },
          resources: myResources,
          view: myView,
        })
        .mobiscroll('getInst');

      var tooltip = $tooltip
        .mobiscroll()
        .popup({
          display: 'anchored',
          showOverlay: false,
          width: 250,
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-health-care-planner"></div>

<div id="demo-health-care-popup" style="display: none; font-size: 14px;">
        Availability:
        <span id="demo-health-care-event-start"></span>
        <span id="demo-health-care-event-end"></span>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `

/* Resouce column */

.mds-healthc-resource-column-bar .mbsc-schedule-event-range {
  display: none;
}

.mds-health-care-planner .mbsc-schedule-resource-title {
  padding: 0;
}

.mds-healthc-resource-column-bar .mbsc-schedule-event {
  margin-left: 5px;
}

.mds-healthc-resource-column-bar {
  width: 15px;
} 

.mds-healthc-resource-column {
  width: 210px;
  border-left: 0 !important;
} 

/* Resource Header */

.mds-healthc-header-cont {
  position: relative;
  padding-left: 50px;
  text-align: left;
  padding-bottom: 10px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.mds-healthc-header-avatar {
  position: absolute;
  height: 40px;
  width: 40px;
  top: 20px;
  left: 0;
  transform: translateY(-50%);
}

.mds-healthc-header-name {
  font-size: 16px;
  word-wrap: break-word;
  line-height: 1.2;
}

.mds-healthc-header-description {
  font-size: 12px;
  margin-top: 5px;
}

/* Event */

.mds-healthc-availability-bar {
  width: 5px;
  height: 100%;
  border-radius:5px;
}

.mds-healthc-event {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  line-height: 13px;
}

.mds-start-time, .mds-end-time {
  font-size: 10px;
}

.mds-healthc-event:hover {
 filter: saturate(2)
}

.mds-healthc-event-title {
  text-align: flex-start;
  padding: 3px 3px;
  color: black;
  font-weight: 350;
}

.mbsc-ios-dark .mds-healthc-event-title, 
.mbsc-windows-dark .mds-healthc-event-title, 
.mbsc-material-dark .mds-healthc-event-title  {
  color: white;
}

/* Popup */

.mds-health-care-title-cont {
    margin-bottom: 15px;
    text-align: center;
    font-size: 16px;
}

.mds-health-care-start-cont,
.mds-health-care-end-cont {
    justify-content: space-between;
    margin-bottom: 5px;
    font-size: 14px;
    padding: 5px 0;
}

.mds-healthc-popup-label {
    // font-weight: 600;
}
  `,
};
