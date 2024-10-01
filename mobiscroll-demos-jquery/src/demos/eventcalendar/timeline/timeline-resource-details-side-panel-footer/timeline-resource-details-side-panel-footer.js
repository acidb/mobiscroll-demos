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
      var myEvents = [];
      var oneDay = 60000 * 60 * 24;
      var tempDay;
      var sortColumn;
      var sortDirection;
      var totalRevenue;

      var myResources = [
        {
          id: 1,
          name: 'Horizon',
          seats: 1200,
          color: '#4a4a4a',
          price: 1000,
        },
        {
          id: 2,
          name: 'Apex Hall',
          seats: 90,
          color: '#fdf500',
          price: 600,
        },
        {
          id: 3,
          name: 'Jade Room',
          seats: 700,
          color: '#00aaff',
          price: 900,
        },
        {
          id: 4,
          name: 'Dome Arena',
          seats: 850,
          color: '#239a21',
          price: 750,
        },
        {
          id: 5,
          name: 'Forum Plaza',
          seats: 900,
          color: '#8f1ed6',
          price: 700,
        },
        {
          id: 6,
          name: 'Gallery',
          seats: 300,
          color: '#0077b6',
          price: 650,
        },
        {
          id: 7,
          name: 'Icon Hall',
          seats: 450,
          color: '#e63946',
          price: 850,
        },
        {
          id: 8,
          name: 'Broadway',
          seats: 250,
          color: '#ff0101',
          price: 800,
        },
        {
          id: 9,
          name: 'Central Hub',
          seats: 400,
          color: '#01adff',
          price: 1100,
        },
        {
          id: 10,
          name: 'Empire Hall',
          seats: 550,
          color: '#ff4600',
          price: 950,
        },
      ];

      function getUTCDateOnly(d) {
        return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
      }

      function getDayDiff(d1, d2) {
        return Math.round((getUTCDateOnly(d2) - getUTCDateOnly(d1)) / oneDay) + 1;
      }

      function getRevenue(resource) {
        if (calendar && myEvents) {
          var days = 0;
          for (var i = 0; i < myEvents.length; ++i) {
            var event = myEvents[i];
            if (event.resource === resource.id) {
              days += getDayDiff(new Date(event.start), new Date(event.end));
            }
          }
          return days * resource.price;
        }
      }

      function getSortArrow(column, day) {
        if (sortColumn === column && day == tempDay) {
          return sortDirection === 'asc' ? 'asc' : sortDirection === 'desc' ? 'desc' : 'def';
        }
        return 'def';
      }

      function sortResources(column, day) {
        if (sortColumn === column && day === tempDay) {
          sortDirection = sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'def' : 'asc';
        } else {
          sortColumn = column;
          sortDirection = 'asc';
        }
        tempDay = day;

        // precalculate busy hours for the clicked day
        myResources.forEach(function (resource) {
          resource.busyHours = getBusyHours(resource, day) - 24;
        });
        calendar.setOptions({ resources: myResources });

        myResources.sort(function (a, b) {
          if (sortDirection === 'asc') {
            return a[column] > b[column] ? 1 : -1;
          }
          if (sortDirection === 'desc') {
            return a[column] < b[column] ? 1 : -1;
          }
          return a.id - b.id;
        });
        calendar.setOptions({ resources: myResources.slice() });
      }

      function getBusyHours(resource, startOfDay) {
        var endOfDay = startOfDay + 86400000;
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
              '<div class="mds-resource-header mds-resource-details-name mds-resource-sort-' +
              getSortArrow('name') +
              '" data-sort="name">' +
              'Room' +
              '</div>' +
              '<div class="mds-resource-header mds-resource-details-seats mds-resource-sort-' +
              getSortArrow('seats') +
              '" data-sort="seats">' +
              'Capacity' +
              '</div>' +
              '<div class="mds-resource-header mds-resource-details-price mds-resource-sort-' +
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
            return (
              '<div class="mds-resource-details-sidebar-header mds-resource-sort-' +
              getSortArrow('revenue') +
              '" data-sort="revenue">Revenue</div>'
            );
          },
          renderSidebar: function (resource) {
            return '<div class="mds-resource-details-sidebar">$' + resource.revenue + '</div>';
          },
          renderResourceFooter: function () {
            return '<div class="mds-resource-details-footer mds-resource-details-occuppancy">Occuppancy</div>';
          },
          renderDay: function (data) {
            var day = data.date.getTime();
            return (
              '<div class="mds-date-header-day-name  mds-resource-sort-' +
              getSortArrow('busyHours', day) +
              '" data-sort="busyHours" data-day="' +
              day +
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
            return '<div class="mds-resource-details-footer mds-resource-details-total">$' + totalRevenue + '</div>';
          },

          onPageLoading: function () {
            setTimeout(function () {
              myResources.forEach(function (resource) {
                resource.revenue = getRevenue(resource);
              });
              calendar.setOptions({ resources: myResources });
              totalRevenue = myResources.reduce(function (total, resource) {
                return total + resource.revenue;
              }, 0);
            });
          },
        })
        .mobiscroll('getInst');

      $('#demo-resource-details').on(
        'click',
        '.mds-resource-details-title .mds-resource-header, .mds-resource-details-sidebar-header, .mds-date-header-day-name',
        function () {
          var sortColumn = $(this).data('sort');
          var selectedDay = $(this).data('day');
          sortResources(sortColumn, selectedDay);
        },
      );

      $.getJSON(
        'https://trial.mobiscroll.com/multiday-events/?callback=?',
        function (events) {
          calendar.setEvents(events);
          myEvents = events;

          myResources.forEach(function (resource) {
            resource.revenue = getRevenue(resource);
          });
          calendar.setOptions({ resources: myResources });
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

.mds-resource-sort-asc::after {
  content: '↑'; 
}

.mds-resource-sort-desc::after {
  content: '↓';
}

.mds-resource-sort-asc::after,
.mds-resource-sort-desc::after,
.mds-resource-sort-def::after {
  position: absolute;
  opacity: 0.5;
  right: 8px;
}

.mds-resource-sort-def::after {
  content: '‹›';
  right: 5px;
  top: 12px;
  transform: translateY(-50%) rotate(90deg);
}

.mds-date-header-day-name span{
  font-size: 14px;
  line-height: 25px;
  margin-left: 7px;
}

.mds-resource-sort-def:hover::after,
.mds-resource-sort-asc:hover::after,
.mds-resource-sort-desc:hover::after {
  opacity: 1;
}

.mds-date-header-day-name.mds-resource-sort-asc::after, 
.mds-date-header-day-name.mds-resource-sort-desc::after {
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

.mds-resource-details-seats{
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.mbsc-timeline-resource-header-cont.mbsc-ios-dark .mds-resource-details-seats,
.mbsc-timeline-resource-header-cont.mbsc-material-dark .mds-resource-details-seats,
.mbsc-timeline-resource-header-cont.mbsc-windows-dark .mds-resource-details-seats,
.mbsc-timeline-resource.mbsc-ios-dark .mds-resource-details-seats,
.mbsc-timeline-resource.mbsc-material-dark .mds-resource-details-seats,
.mbsc-timeline-resource.mbsc-windows-dark .mds-resource-details-seats {
  border-left: 1px solid #333;
  border-right: 1px solid #333;
}

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
