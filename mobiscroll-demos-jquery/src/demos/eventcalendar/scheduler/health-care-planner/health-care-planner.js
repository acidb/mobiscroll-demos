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
      var myEvents = [
        {
          id: 1,
          resource: 2,
          tooltip: 'Availability: 10:00 - 18:00',
          start: 'dyndatetime(y,m,d-10,10)',
          end: 'dyndatetime(y,m,d-10,18)',
          recurring: 'FREQ=DAILY;COUNT=30;INTERVAL=1',
          type: 'availability',
          editable: false,
        },
        {
          id: 2,
          resource: 4,
          tooltip: 'Availability: 08:00 - 16:00',
          start: 'dyndatetime(y,m,d-10,8)',
          end: 'dyndatetime(y,m,d-10,16)',
          recurring: 'FREQ=DAILY;COUNT=30;INTERVAL=1',
          type: 'availability',
          editable: false,
        },
        {
          id: 3,
          resource: 6,
          tooltip: 'Availability: 09:00 - 17:00',
          start: 'dyndatetime(y,m,d-10,9)',
          end: 'dyndatetime(y,m,d-10,17)',
          recurring: 'FREQ=DAILY;COUNT=30;INTERVAL=1',
          type: 'availability',
          editable: false,
        },
        {
          id: 4,
          resource: 8,
          tooltip: 'Availability: 10:00 - 18:00',
          start: 'dyndatetime(y,m,d-10,10)',
          end: 'dyndatetime(y,m,d-10,18)',
          recurring: 'FREQ=DAILY;COUNT=30;INTERVAL=1',
          type: 'availability',
          editable: false,
        },
        {
          id: 5,
          resource: 10,
          tooltip: 'Availability: 08:00 - 16:00',
          start: 'dyndatetime(y,m,d-10,8)',
          end: 'dyndatetime(y,m,d-10,16)',
          recurring: 'FREQ=DAILY;COUNT=30;INTERVAL=1',
          type: 'availability',
          editable: false,
        },
        {
          id: 6,
          resource: 12,
          tooltip: 'Availability: 09:00 - 17:00',
          start: 'dyndatetime(y,m,d-10,9)',
          end: 'dyndatetime(y,m,d-10,17)',
          recurring: 'FREQ=DAILY;COUNT=30;INTERVAL=1',
          type: 'availability',
          editable: false,
        },
        {
          id: 7,
          resource: 1,
          title: 'Jason Smith',
          start: 'dyndatetime(y, m, d-10, 10, 40)',
          end: 'dyndatetime(y, m, d-10, 11, 20)',
        },
        {
          id: 8,
          resource: 1,
          title: 'Emily Johnson',
          start: 'dyndatetime(y, m, d-10, 11, 20)',
          end: 'dyndatetime(y, m, d-10, 12, 0)',
        },
        {
          id: 9,
          resource: 1,
          title: 'Michael Brown',
          start: 'dyndatetime(y, m, d-10, 13, 40)',
          end: 'dyndatetime(y, m, d-10, 14, 20)',
        },
        {
          id: 10,
          resource: 3,
          title: 'Sarah Davis',
          start: 'dyndatetime(y, m, d-10, 9, 20)',
          end: 'dyndatetime(y, m, d-10, 10, 0)',
        },
        {
          id: 11,
          resource: 3,
          title: 'David Wilson',
          start: 'dyndatetime(y, m, d-10, 11, 40)',
          end: 'dyndatetime(y, m, d-10, 12, 20)',
        },
        {
          id: 12,
          resource: 3,
          title: 'Linda Moore',
          start: 'dyndatetime(y, m, d-10, 12, 20)',
          end: 'dyndatetime(y, m, d-10, 13, 0)',
        },
        {
          id: 13,
          resource: 3,
          title: 'James Taylor',
          start: 'dyndatetime(y, m, d-10, 14, 40)',
          end: 'dyndatetime(y, m, d-10, 15, 20)',
        },
        {
          id: 14,
          resource: 5,
          title: 'Maria Anderson',
          start: 'dyndatetime(y, m, d-10, 14, 0)',
          end: 'dyndatetime(y, m, d-10, 14, 40)',
        },
        {
          id: 15,
          resource: 5,
          title: 'Robert Thomas',
          start: 'dyndatetime(y, m, d-10, 13, 20)',
          end: 'dyndatetime(y, m, d-10, 14, 0)',
        },
        {
          id: 16,
          resource: 5,
          title: 'Patricia Jackson',
          start: 'dyndatetime(y, m, d-10, 11, 0)',
          end: 'dyndatetime(y, m, d-10, 11, 40)',
        },
        {
          id: 17,
          resource: 5,
          title: 'John Harris',
          start: 'dyndatetime(y, m, d-10, 9, 40)',
          end: 'dyndatetime(y, m, d-10, 10, 20)',
        },
        {
          id: 18,
          resource: 7,
          title: 'William Clark',
          start: 'dyndatetime(y, m, d-10, 15, 40)',
          end: 'dyndatetime(y, m, d-10, 16, 20)',
        },
        {
          id: 19,
          resource: 7,
          title: 'Elizabeth Lewis',
          start: 'dyndatetime(y, m, d-10, 15, 0)',
          end: 'dyndatetime(y, m, d-10, 15, 40)',
        },
        {
          id: 20,
          resource: 7,
          title: 'Charles Walker',
          start: 'dyndatetime(y, m, d-10, 12, 0)',
          end: 'dyndatetime(y, m, d-10, 12, 40)',
        },
        {
          id: 21,
          resource: 7,
          title: 'Jessica Allen',
          start: 'dyndatetime(y, m, d-10, 11, 20)',
          end: 'dyndatetime(y, m, d-10, 12, 0)',
        },
        {
          id: 22,
          resource: 9,
          title: 'Matthew Young',
          start: 'dyndatetime(y, m, d-10, 9, 0)',
          end: 'dyndatetime(y, m, d-10, 9, 40)',
        },
        {
          id: 23,
          resource: 9,
          title: 'Sophia King',
          start: 'dyndatetime(y, m, d-10, 9, 40)',
          end: 'dyndatetime(y, m, d-10, 10, 20)',
        },
        {
          id: 24,
          resource: 9,
          title: 'Daniel Scott',
          start: 'dyndatetime(y, m, d-10, 11, 40)',
          end: 'dyndatetime(y, m, d-10, 12, 20)',
        },
        {
          id: 25,
          resource: 9,
          title: 'Olivia Green',
          start: 'dyndatetime(y, m, d-10, 13, 40)',
          end: 'dyndatetime(y, m, d-10, 14, 20)',
        },
        {
          id: 26,
          resource: 9,
          title: 'Lucas Adams',
          start: 'dyndatetime(y, m, d-10, 14, 20)',
          end: 'dyndatetime(y, m, d-10, 15, 0)',
        },
        {
          id: 27,
          resource: 11,
          title: 'Ava Baker',
          start: 'dyndatetime(y, m, d-10, 10, 0)',
          end: 'dyndatetime(y, m, d-10, 10, 40)',
        },
        {
          id: 28,
          resource: 11,
          title: 'Ethan Gonzalez',
          start: 'dyndatetime(y, m, d-10, 10, 40)',
          end: 'dyndatetime(y, m, d-10, 11, 20)',
        },
        {
          id: 29,
          resource: 11,
          title: 'Mason Carter',
          start: 'dyndatetime(y, m, d-10, 13, 40)',
          end: 'dyndatetime(y, m, d-10, 14, 20)',
        },
        {
          id: 30,
          resource: 11,
          title: 'Amelia Mitchell',
          start: 'dyndatetime(y, m, d-10, 14, 20)',
          end: 'dyndatetime(y, m, d-10, 15, 0)',
        },
        {
          id: 31,
          resource: 11,
          title: 'Isabella Perez',
          start: 'dyndatetime(y, m, d-10, 15, 0)',
          end: 'dyndatetime(y, m, d-10, 15, 40)',
        },
        {
          id: 32,
          resource: 1,
          title: 'Jason Smith',
          start: 'dyndatetime(y, m, d - 9, 10, 20)',
          end: 'dyndatetime(y, m, d - 9, 11, 0)',
        },
        {
          id: 33,
          resource: 1,
          title: 'Emma Davis',
          start: 'dyndatetime(y, m, d - 9, 11, 0)',
          end: 'dyndatetime(y, m, d - 9, 11, 40)',
        },
        {
          id: 34,
          resource: 1,
          title: 'Liam Johnson',
          start: 'dyndatetime(y, m, d - 9, 13, 0)',
          end: 'dyndatetime(y, m, d - 9, 13, 40)',
        },
        {
          id: 35,
          resource: 1,
          title: 'Olivia Brown',
          start: 'dyndatetime(y, m, d - 9, 14, 40)',
          end: 'dyndatetime(y, m, d - 9, 15, 20)',
        },
        {
          id: 36,
          resource: 3,
          title: 'Noah Wilson',
          start: 'dyndatetime(y, m, d - 9, 14, 40)',
          end: 'dyndatetime(y, m, d - 9, 15, 20)',
        },
        {
          id: 37,
          resource: 3,
          title: 'Ava Taylor',
          start: 'dyndatetime(y, m, d - 9, 12, 40)',
          end: 'dyndatetime(y, m, d - 9, 13, 20)',
        },
        {
          id: 38,
          resource: 3,
          title: 'Mason Martinez',
          start: 'dyndatetime(y, m, d - 9, 8, 20)',
          end: 'dyndatetime(y, m, d - 9, 9, 0)',
        },
        {
          id: 39,
          resource: 3,
          title: 'Isabella Rodriguez',
          start: 'dyndatetime(y, m, d - 9, 9, 20)',
          end: 'dyndatetime(y, m, d - 9, 10, 0)',
        },
        {
          id: 40,
          resource: 5,
          title: 'James Lee',
          start: 'dyndatetime(y, m, d - 9, 10, 40)',
          end: 'dyndatetime(y, m, d - 9, 11, 20)',
        },
        {
          id: 41,
          resource: 5,
          title: 'Charlotte Clark',
          start: 'dyndatetime(y, m, d - 9, 11, 20)',
          end: 'dyndatetime(y, m, d - 9, 12, 0)',
        },
        {
          id: 42,
          resource: 5,
          title: 'Benjamin Lewis',
          start: 'dyndatetime(y, m, d - 9, 15, 0)',
          end: 'dyndatetime(y, m, d - 9, 15, 40)',
        },
        {
          id: 43,
          resource: 5,
          title: 'Amelia Walker',
          start: 'dyndatetime(y, m, d - 9, 15, 40)',
          end: 'dyndatetime(y, m, d - 9, 16, 20)',
        },
        {
          id: 44,
          resource: 7,
          title: 'Elijah Hall',
          start: 'dyndatetime(y, m, d - 9, 14, 20)',
          end: 'dyndatetime(y, m, d - 9, 15, 0)',
        },
        {
          id: 45,
          resource: 7,
          title: 'Harper Allen',
          start: 'dyndatetime(y, m, d - 9, 13, 20)',
          end: 'dyndatetime(y, m, d - 9, 14, 0)',
        },
        {
          id: 46,
          resource: 7,
          title: 'Lucas Young',
          start: 'dyndatetime(y, m, d - 9, 10, 20)',
          end: 'dyndatetime(y, m, d - 9, 11, 0)',
        },
        {
          id: 47,
          resource: 9,
          title: 'Evelyn Hernandez',
          start: 'dyndatetime(y, m, d - 9, 8, 0)',
          end: 'dyndatetime(y, m, d - 9, 8, 40)',
        },
        {
          id: 48,
          resource: 9,
          title: 'Henry King',
          start: 'dyndatetime(y, m, d - 9, 8, 40)',
          end: 'dyndatetime(y, m, d - 9, 9, 20)',
        },
        {
          id: 49,
          resource: 9,
          title: 'Ella Scott',
          start: 'dyndatetime(y, m, d - 9, 10, 40)',
          end: 'dyndatetime(y, m, d - 9, 11, 20)',
        },
        {
          id: 50,
          resource: 9,
          title: 'Jacob Adams',
          start: 'dyndatetime(y, m, d - 9, 11, 20)',
          end: 'dyndatetime(y, m, d - 9, 12, 0)',
        },
        {
          id: 51,
          resource: 9,
          title: 'Grace Mitchell',
          start: 'dyndatetime(y, m, d - 9, 13, 40)',
          end: 'dyndatetime(y, m, d - 9, 14, 20)',
        },
        {
          id: 52,
          resource: 11,
          title: 'Alexander Perez',
          start: 'dyndatetime(y, m, d - 9, 10, 20)',
          end: 'dyndatetime(y, m, d - 9, 11, 0)',
        },
        {
          id: 53,
          resource: 11,
          title: 'Lily Roberts',
          start: 'dyndatetime(y, m, d - 9, 13, 20)',
          end: 'dyndatetime(y, m, d - 9, 14, 0)',
        },
        {
          id: 54,
          resource: 11,
          title: 'Sebastian Carter',
          start: 'dyndatetime(y, m, d - 9, 14, 40)',
          end: 'dyndatetime(y, m, d - 9, 15, 20)',
        },
        {
          id: 55,
          resource: 11,
          title: 'Mia Nelson',
          start: 'dyndatetime(y, m, d - 9, 15, 20)',
          end: 'dyndatetime(y, m, d - 9, 16, 0)',
        },
        {
          id: 56,
          resource: 1,
          title: 'Elisabeth Carter',
          start: 'dyndatetime(y, m, d - 8, 10, 40)',
          end: 'dyndatetime(y, m, d - 8, 11, 20)',
        },
        {
          id: 57,
          resource: 1,
          title: 'James Anderson',
          start: 'dyndatetime(y, m, d - 8, 11, 20)',
          end: 'dyndatetime(y, m, d - 8, 12, 0)',
        },
        {
          id: 58,
          resource: 1,
          title: 'Olivia Johnson',
          start: 'dyndatetime(y, m, d - 8, 13, 40)',
          end: 'dyndatetime(y, m, d - 8, 14, 20)',
        },
        {
          id: 59,
          resource: 1,
          title: 'Michael Smith',
          start: 'dyndatetime(y, m, d - 8, 14, 40)',
          end: 'dyndatetime(y, m, d - 8, 15, 20)',
        },
        {
          id: 60,
          resource: 1,
          title: 'Ava Wilson',
          start: 'dyndatetime(y, m, d - 8, 17, 0)',
          end: 'dyndatetime(y, m, d - 8, 17, 40)',
        },
        {
          id: 61,
          resource: 3,
          title: 'Lucas Brown',
          start: 'dyndatetime(y, m, d - 8, 14, 20)',
          end: 'dyndatetime(y, m, d - 8, 15, 0)',
        },
        {
          id: 62,
          resource: 3,
          title: 'Mia Davis',
          start: 'dyndatetime(y, m, d - 8, 11, 0)',
          end: 'dyndatetime(y, m, d - 8, 11, 40)',
        },
        {
          id: 63,
          resource: 3,
          title: 'Ethan Garcia',
          start: 'dyndatetime(y, m, d - 8, 10, 20)',
          end: 'dyndatetime(y, m, d - 8, 11, 0)',
        },
        {
          id: 64,
          resource: 3,
          title: 'Charlotte Martinez',
          start: 'dyndatetime(y, m, d - 8, 8, 0)',
          end: 'dyndatetime(y, m, d - 8, 8, 40)',
        },
        {
          id: 65,
          resource: 5,
          title: 'Amelia Robinson',
          start: 'dyndatetime(y, m, d - 8, 9, 40)',
          end: 'dyndatetime(y, m, d - 8, 10, 20)',
        },
        {
          id: 66,
          resource: 5,
          title: 'William Clark',
          start: 'dyndatetime(y, m, d - 8, 12, 0)',
          end: 'dyndatetime(y, m, d - 8, 12, 40)',
        },
        {
          id: 67,
          resource: 5,
          title: 'Benjamin Lewis',
          start: 'dyndatetime(y, m, d - 8, 14, 0)',
          end: 'dyndatetime(y, m, d - 8, 14, 40)',
        },
        {
          id: 68,
          resource: 5,
          title: 'Sophia Walker',
          start: 'dyndatetime(y, m, d - 8, 15, 40)',
          end: 'dyndatetime(y, m, d - 8, 16, 20)',
        },
        {
          id: 69,
          resource: 7,
          title: 'Elijah Hall',
          start: 'dyndatetime(y, m, d - 8, 10, 40)',
          end: 'dyndatetime(y, m, d - 8, 11, 20)',
        },
        {
          id: 70,
          resource: 7,
          title: 'Grace Allen',
          start: 'dyndatetime(y, m, d - 8, 11, 20)',
          end: 'dyndatetime(y, m, d - 8, 12, 0)',
        },
        {
          id: 71,
          resource: 7,
          title: 'David Young',
          start: 'dyndatetime(y, m, d - 8, 12, 0)',
          end: 'dyndatetime(y, m, d - 8, 12, 40)',
        },
        {
          id: 72,
          resource: 7,
          title: 'Emily King',
          start: 'dyndatetime(y, m, d - 8, 15, 20)',
          end: 'dyndatetime(y, m, d - 8, 16, 0)',
        },
        {
          id: 73,
          resource: 9,
          title: 'Liam Scott',
          start: 'dyndatetime(y, m, d + 2, 14, 20)',
          end: 'dyndatetime(y, m, d + 2, 15, 0)',
        },
        {
          id: 74,
          resource: 9,
          title: 'Isabella Moore',
          start: 'dyndatetime(y, m, d - 8, 13, 20)',
          end: 'dyndatetime(y, m, d - 8, 14, 0)',
        },
        {
          id: 75,
          resource: 9,
          title: 'Henry Taylor',
          start: 'dyndatetime(y, m, d - 8, 10, 20)',
          end: 'dyndatetime(y, m, d - 8, 11, 0)',
        },
        {
          id: 76,
          resource: 11,
          title: 'Zoe Wilson',
          start: 'dyndatetime(y, m, d - 8, 9, 20)',
          end: 'dyndatetime(y, m, d - 8, 10, 0)',
        },
        {
          id: 77,
          resource: 11,
          title: 'Jack Martinez',
          start: 'dyndatetime(y, m, d - 8, 10, 0)',
          end: 'dyndatetime(y, m, d - 8, 10, 40)',
        },
        {
          id: 78,
          resource: 11,
          title: 'Amelia Perez',
          start: 'dyndatetime(y, m, d - 8, 12, 20)',
          end: 'dyndatetime(y, m, d - 8, 13, 0)',
        },
        {
          id: 79,
          resource: 11,
          title: 'Evan Harris',
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
        schedule: {
          type: 'week',
          startDay: 1,
          endDay: 5,
          startTime: '08:00',
          endTime: '18:00',
          timeLabelStep: 20,
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
          data: myEvents,
          dragTimeStep: 20,
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
          resources: myResources,
          view: myView,
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-health-care-planner"></div>
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
  `,
};
