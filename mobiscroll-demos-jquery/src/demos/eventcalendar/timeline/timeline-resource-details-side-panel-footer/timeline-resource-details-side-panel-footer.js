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
      var oneDay = 60000 * 60 * 24;
      var tempDay;
      var myEvents;

      var sorting = {
        currentColumn: null,
        order: 'default',
      };

      var myResources = [
        {
          id: 1,
          name: 'Flatiron Room',
          seats: 90,
          color: '#fdf500',
          price: 600,
        },
        {
          id: 2,
          name: 'The Capital City',
          seats: 250,
          color: '#ff0101',
          price: 800,
        },
        {
          id: 3,
          name: 'Heroes Square',
          seats: 400,
          color: '#01adff',
          price: 1100,
        },
        {
          id: 4,
          name: 'Hall of Faces',
          seats: 850,
          color: '#239a21',
          price: 750,
        },
        {
          id: 5,
          name: 'King’s Landing',
          seats: 550,
          color: '#ff4600',
          price: 950,
        },
        {
          id: 6,
          name: 'Gathering Field',
          seats: 900,
          color: '#8f1ed6',
          price: 700,
        },
        {
          id: 7,
          name: 'Lakeside',
          seats: 300,
          color: '#0077b6',
          price: 650,
        },
        {
          id: 8,
          name: 'Mountain Hall',
          seats: 1200,
          color: '#4a4a4a',
          price: 1000,
        },
        {
          id: 9,
          name: 'City Arena',
          seats: 450,
          color: '#e63946',
          price: 850,
        },
        {
          id: 10,
          name: 'Ocean Center',
          seats: 700,
          color: '#00aaff',
          price: 900,
        },
      ];

      // performance
      // the revenue calculation is a little slower 3-4sec at 2000 resource
      // at 500 almost instant
      // function generateResources(count) {
      //   var baseResources = [
      //     { id: 1, name: 'Flatiron Room', seats: 90, color: '#fdf500', price: 600 },
      //     { id: 2, name: 'The Capital City', seats: 250, color: '#ff0101', price: 800 },
      //     { id: 3, name: 'Heroes Square', seats: 400, color: '#01adff', price: 1100 },
      //     { id: 4, name: 'Hall of Faces', seats: 850, color: '#239a21', price: 750 },
      //     { id: 5, name: 'King’s Landing', seats: 550, color: '#ff4600', price: 950 },
      //     { id: 6, name: 'Gathering Field', seats: 900, color: '#8f1ed6', price: 700 },
      //     { id: 7, name: 'Lakeside', seats: 300, color: '#0077b6', price: 650 },
      //     { id: 8, name: 'Mountain Hall', seats: 1200, color: '#4a4a4a', price: 1000 },
      //     { id: 9, name: 'City Arena', seats: 450, color: '#e63946', price: 850 },
      //     { id: 10, name: 'Ocean Center', seats: 700, color: '#00aaff', price: 900 },
      //   ];
      //   var additionalResources = [];
      //   for (var i = baseResources.length + 1; i <= count; i++) {
      //     additionalResources.push({
      //       id: i,
      //       name: 'Test Resource',
      //       seats: Math.floor(Math.random() * 1000) + 100,
      //       price: Math.floor(Math.random() * 1500) + 500,
      //     });
      //   }
      //   return baseResources.concat(additionalResources).slice(0, count);
      // }
      // myResources = generateResources(500);

      function getUTCDateOnly(d) {
        return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
      }

      function getDayDiff(d1, d2) {
        return Math.round((getUTCDateOnly(d2) - getUTCDateOnly(d1)) / oneDay) + 1;
      }

      function getRevenue(resource) {
        if (calendar) {
          var days = 0;
          var events = calendar.getEvents();
          for (var i = 0; i < events.length; ++i) {
            var event = events[i];
            if (event.resource === resource.id) {
              days += getDayDiff(new Date(event.start), new Date(event.end));
            }
          }
          return days * resource.price;
        }
      }

      function getTotal() {
        var total = 0;
        for (var i = 0; i < myResources.length; ++i) {
          total += getRevenue(myResources[i]);
        }
        return total;
      }

      function getSortArrow(column, day) {
        if (sorting.column === column && day == tempDay) {
          return sorting.order === 'asc' ? 'asc' : sorting.order === 'desc' ? 'desc' : 'def';
        }
        return 'def';
      }

      function sortResources(column, day) {
        myEvents = calendar.getEvents();

        if (sorting.column === column && day === tempDay) {
          sorting.order = sorting.order === 'asc' ? 'desc' : sorting.order === 'desc' ? 'default' : 'asc';
        } else {
          sorting.column = column;
          sorting.order = 'asc';
        }

        tempDay = day;

        if (sorting.order !== 'default') {
          myResources.sort(function (a, b) {
            var valueA = column === 'revenue' ? getRevenue(a) : column === 'day' ? getBusyHours(a, day) - 24 : a[column];
            var valueB = column === 'revenue' ? getRevenue(b) : column === 'day' ? getBusyHours(b, day) - 24 : b[column];

            if (sorting.order === 'asc') {
              return valueA > valueB ? 1 : -1;
            } else if (sorting.order === 'desc') {
              return valueA < valueB ? 1 : -1;
            }
          });
        } else {
          myResources.sort(function (a, b) {
            return a.id - b.id;
          });
        }
        calendar.setOptions({ resources: myResources.slice() });
      }

      function getBusyHours(resource, day) {
        var startOfDay = new Date(day).setHours(0, 0, 0, 0);
        var endOfDay = new Date(day).setHours(23, 59, 59, 999);

        return myEvents.reduce(function (total, event) {
          if (event.resource === resource.id) {
            var eventStart = Math.max(startOfDay, new Date(event.start).getTime());
            var eventEnd = Math.min(endOfDay, new Date(event.end).getTime());
            return eventStart < eventEnd ? total + (eventEnd - eventStart) / (1000 * 60 * 60) : total;
          }
          return total;
        }, 0);
      }

      var calendar = $('#demo-resource-details')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            timeline: {
              type: 'month',
            },
          },
          resources: myResources,
          renderResourceHeader: function () {
            return (
              '<div class="mds-resource-details-title">' +
              '<div class="mds-resource-header mds-resource-details-name ' +
              getSortArrow('name') +
              '" data-sort="name">' +
              'Room' +
              '</div>' +
              '<div class="mds-resource-header mds-resource-details-seats ' +
              getSortArrow('seats') +
              '" data-sort="seats">' +
              'Capacity' +
              '</div>' +
              '<div class="mds-resource-header mds-resource-details-price ' +
              getSortArrow('price') +
              '" data-sort="price">' +
              'Price/day' +
              '</div>' +
              '</div>'
            );
          },
          renderResource: function (resource) {
            return (
              '<div class="mds-resource-details-cont">' +
              '<div class="mds-resource-header mds-resource-details-name">' +
              resource.name +
              '</div>' +
              '<div class="mds-resource-header mds-resource-details-seats">' +
              resource.seats +
              ' seats</div>' +
              '<div class="mds-resource-header mds-resource-details-price">$' +
              resource.price +
              '</div>' +
              '</div>'
            );
          },
          renderSidebarHeader: function () {
            return '<div class="mds-resource-details-sidebar-header ' + getSortArrow('revenue') + '" data-sort="revenue">Revenue</div>';
            // return '<div class="mds-resource-details-sidebar-header">Revenue</div>';
          },
          renderSidebar: function (resource) {
            return '<div class="mds-resource-details-sidebar">$' + getRevenue(resource) + '</div>';
          },
          renderResourceFooter: function () {
            return '<div class="mds-resource-details-footer mds-resource-details-occuppancy">Occuppancy</div>';
          },
          renderDay: function (data) {
            return (
              '<div class="mds-date-header-day-name  ' +
              getSortArrow('day', data.date) +
              '" data-sort="day" data-day="' +
              data.date +
              '">' +
              '<span>' +
              formatDate('DD DDD', data.date) +
              '</span>'
            );
          },
          renderDayFooter: function (data) {
            var events = data.events;
            var occuppancy = 0;
            if (events) {
              var resourceIds = [];
              var nr = 0;
              for (var i = 0; i < events.length; ++i) {
                var event = events[i];
                if (resourceIds.indexOf(event.resource) < 0) {
                  nr++;
                  resourceIds.push(event.resource);
                }
              }
              occuppancy = ((nr * 100) / myResources.length).toFixed(0);
            }
            return '<div class="mds-resource-details-footer mds-resource-details-footer-day">' + occuppancy + '%</div>';
          },
          renderSidebarFooter: function () {
            return '<div class="mds-resource-details-footer mds-resource-details-total">$' + getTotal() + '</div>';
          },
        })
        .mobiscroll('getInst');

      $(document).on(
        'click',
        '.mds-resource-details-title .mds-resource-header, .mds-resource-details-sidebar-header, .mds-date-header-day-name',
        function () {
          var sortColumn = $(this).data('sort');
          var selectedDay = $(this).data('day');
          sortResources(sortColumn, selectedDay);
        },
      );

      // jeeez, need some simplier solution, dark/light border color
      $('.mds-resource-details-seats').css({
        'border-left': '1px solid ' + $('.mbsc-timeline-sidebar-col').css('border-color'),
        'border-right': '1px solid ' + $('.mbsc-timeline-sidebar-col').css('border-color'),
      });

      $.getJSON(
        'https://trial.mobiscroll.com/multiday-events/?callback=?',
        function (events) {
          calendar.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-resource-details" class="mds-resource-details"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
/* Sorting */

.mds-resource-details-title 
.mds-resource-header, 
.mds-date-header-day-name,
.mds-resource-details-sidebar-header {
  cursor: pointer;
}

.mds-date-header-day-name.asc::after,
.mds-resource-header.asc::after,
.mds-resource-details-sidebar-header.asc::after {
  content: '↑'; 
  opacity: 0.5;
  right: 8px; 
}

.mds-date-header-day-name.desc::after,
.mds-resource-header.desc::after,
.mds-resource-details-sidebar-header.desc::after {
  content: '↓';
  opacity: 0.5;
  right: 8px;
}

.mds-date-header-day-name.def::after,
.mds-resource-header.def::after,
.mds-resource-details-sidebar-header.def::after {
  content: '‹›';
  opacity: 0.5;
  font-size: 16px;
  position: absolute;
  right: 5px;
  top: 12px;
  transform: translateY(-50%) rotate(90deg);
}

.mds-resource-details-sidebar-header.desc::after,
.mds-resource-details-sidebar-header.asc::after {
  position: absolute;
}

.mds-date-header-day-name.asc::after, 
.mds-date-header-day-name.desc::after, 
.mds-resource-header.asc::after, 
.mds-resource-header.desc::after {
  position: absolute;
  top: 0px; 
}

.mds-date-header-day-name span{
  font-size: 14px;
  line-height: 25px;
  margin-left: 7px;
}

.mds-date-header-day-name:hover::after,
.mds-resource-header.def:hover::after, 
.mds-resource-details-sidebar-header.def:hover::after,
.mds-date-header-day-name.asc:hover::after,
.mds-resource-header.asc:hover::after,
.mds-resource-details-sidebar-header.asc:hover::after,
.mds-date-header-day-name.desc:hover::after,
.mds-resource-header.desc:hover::after,
.mds-resource-details-sidebar-header.desc:hover::after {
  opacity: 1;
}

.mds-date-header-day-name.asc::after, 
.mds-date-header-day-name.desc::after {
  font-size: 14px;
  top: 12px;
  transform: translateY(-50%);
}

.mds-date-header-day-name,
.mds-resource-header,
.mds-resource-details-sidebar-header {
  position: relative;
}

/*<hidden>*/

.demo-timeline-resource-details {
  height: 100%;
}

/*</hidden>*/

/* Header */

.mds-resource-details .mbsc-timeline-resource-col {
  width: 335px;
}

.mds-resource-details .mbsc-timeline-resource-header,
.mds-resource-details .mbsc-timeline-resource-title,
.mds-resource-details .mbsc-timeline-resource-footer,
.mds-resource-details .mbsc-timeline-sidebar-header {
  padding: 0;
}

.mds-resource-details .mbsc-timeline-resource-title {
  height: 100%;
}

.mds-resource-details-cont {
  line-height: 50px;
  height: 100%;
}

.mds-resource-header {
  display: inline-block;
  height: 100%;
  padding: 0 5px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: top;
}

.mds-resource-details-name {
  width: 120px;
}

.mds-resource-details-seats,
.mds-resource-details-price {
  width: 106px;
}

.mds-resource-details-title {
  font-weight: 600;
  line-height: 26px;
}

.mds-resource-details-sidebar-header {
  line-height: 26px;
  padding: 0 5px;
}

.mds-resource-details .mbsc-timeline-day {
  width: 144px;
}

.mds-resource-details-sidebar {
  line-height: 36px;
  text-align: center;
}

/* Footer */

.mds-resource-details-occuppancy {
  font-size: 15px;
  text-align: right;
  background-color: rgba(150, 150, 150, 0.1);
  padding-right: 15px;
}

.mds-resource-details-footer {
  line-height: 50px;
}

.mds-resource-details-total {
  font-size: 18px;
  text-align: center;
  line-height: 36px;
}

.mds-resource-details-footer-day {
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  background-color: rgba(150, 150, 150, 0.1);
  padding: 0 5px;
}

.mds-resource-details .mbsc-timeline-sidebar-footer {
  background-color: rgba(150, 150, 150, 0.1);
  border-top-color: #5a0101;
  color: #8c0000;;
}

.mds-resource-details .mbsc-timeline-sidebar-col {
  width: 98px;
}

@supports (overflow:clip) {
  .mds-resource-details.mbsc-ltr .mbsc-schedule-event-inner {
    left: 280px;
  }
  .mds-resource-details.mbsc-rtl .mbsc-schedule-event-inner {
    right: 280px;
  }
}
  `,
};
