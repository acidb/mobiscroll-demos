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
      var oneDay = 60000 * 60 * 24;

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
      ];

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // sorting

      var sorting = {
        currentColumn: null,
        order: 'default',
      };

      function getSortArrow(column) {
        if (sorting.column === column) {
          return sorting.order === 'asc' ? '▲' : sorting.order === 'desc' ? '▼' : '';
        }
        return '';
      }

      function sortResources(column, day) {
        if (sorting.column === column) {
          sorting.order = sorting.order === 'asc' ? 'desc' : sorting.order === 'desc' ? 'default' : 'asc';
        } else {
          sorting.column = column;
          sorting.order = 'asc';
        }

        if (sorting.order !== 'default') {
          myResources.sort(function (a, b) {
            var valueA = column === 'revenue' ? getRevenue(a) : column === 'day' ? getBusyHours(a, day) : a[column];
            var valueB = column === 'revenue' ? getRevenue(b) : column === 'day' ? getBusyHours(b, day) : b[column];

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
        var startOfDay = new Date(day.setHours(0, 0, 0, 0));
        var endOfDay = new Date(day.setHours(23, 59, 59, 999));

        var totalBusyHours = 0;
        var events = calendar.getEvents();

        for (var i = 0; i < events.length; i++) {
          var event = events[i];

          if (event.resource === resource.id) {
            var overlapStart = Math.max(startOfDay, new Date(event.start));
            var overlapEnd = Math.min(endOfDay, new Date(event.end));

            if (overlapStart < overlapEnd) {
              totalBusyHours += (overlapEnd - overlapStart) / (1000 * 60 * 60);
            }
          }
        }
        // better name?
        return totalBusyHours - 24;
      }

      $(document).on(
        'click',
        '.md-resource-details-title .md-resource-header, .md-resource-details-sidebar-header, .mbsc-timeline-header-date',
        function () {
          var sortColumn = $(this).data('sort') || 'day';
          var selectedDay;
          if (sortColumn == 'day') {
            var dateString = $(this).find('.mbsc-hidden-content').text().trim();
            selectedDay = new Date(dateString);
          }
          sortResources(sortColumn, selectedDay);
        },
      );

      // sorting
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
              '<div class="md-resource-details-title">' +
              '<div class="md-resource-header md-resource-details-name" data-sort="name">' +
              'Room ' +
              getSortArrow('name') +
              '</div>' +
              '<div class="md-resource-header md-resource-details-seats" data-sort="seats">' +
              'Capacity ' +
              getSortArrow('seats') +
              '</div>' +
              '<div class="md-resource-header md-resource-details-price" data-sort="price">' +
              'Price/day ' +
              getSortArrow('price') +
              '</div>' +
              '</div>'
            );
            // return (
            //   '<div class="md-resource-details-title">' +
            //   '<div class="md-resource-header md-resource-details-name">Room</div>' +
            //   '<div class="md-resource-header md-resource-details-seats">Capacity</div>' +
            //   '<div class="md-resource-header md-resource-details-seats">Price/day</div>' +
            //   '</div>'
            // );
          },
          renderResource: function (resource) {
            return (
              '<div class="md-resource-details-cont">' +
              '<div class="md-resource-header md-resource-details-name">' +
              resource.name +
              '</div>' +
              '<div class="md-resource-header md-resource-details-seats">' +
              resource.seats +
              ' seats</div>' +
              '<div class="md-resource-header md-resource-details-price">$' +
              resource.price +
              '</div>' +
              '</div>'
            );
          },
          renderSidebarHeader: function () {
            return '<div class="md-resource-details-sidebar-header" data-sort="revenue">Revenue' + getSortArrow('revenue') + '</div>';
            // return '<div class="md-resource-details-sidebar-header">Revenue</div>';
          },
          renderSidebar: function (resource) {
            return '<div class="md-resource-details-sidebar">$' + getRevenue(resource) + '</div>';
          },
          renderResourceFooter: function () {
            return '<div class="md-resource-details-footer md-resource-details-occuppancy">Occuppancy</div>';
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
            return '<div class="md-resource-details-footer md-resource-details-footer-day">' + occuppancy + '%</div>';
          },
          renderSidebarFooter: function () {
            return '<div class="md-resource-details-footer md-resource-details-total">$' + getTotal() + '</div>';
          },
        })
        .mobiscroll('getInst');

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
<div id="demo-resource-details" class="md-resource-details"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `

/* sorting ///////////////////////////////////////////////////////////////////////////*/
.md-resource-details-title .md-resource-header , .mbsc-timeline-header-date {
    cursor: pointer;
}

.md-resource-header .md-resource-details-name {
  width: 400px;
}

/* to delete */
.md-resource-details-seats,
.md-resource-details-price {
    width: 100px !important;
}
.md-resource-details .mbsc-timeline-resource-col {
    width: 330px !important;
}
/* sorting ///////////////////////////////////////////////////////////////////////////*/

/*<hidden>*/

.demo-timeline-resource-details {
    height: 100%;
}

/*</hidden>*/

/* Header */

.md-resource-details .mbsc-timeline-resource-col {
    width: 280px;
}

.md-resource-details .mbsc-timeline-resource-header,
.md-resource-details .mbsc-timeline-resource-title,
.md-resource-details .mbsc-timeline-resource-footer,
.md-resource-details .mbsc-timeline-sidebar-header {
    padding: 0;
}

.md-resource-details .mbsc-timeline-resource-title {
    height: 100%;
}

.md-resource-details-cont {
    line-height: 50px;
    height: 100%;
}

.md-resource-header {
    display: inline-block;
    height: 100%;
    padding: 0 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: top;
}

.md-resource-details-name {
    width: 120px;
}

.md-resource-details-seats,
.md-resource-details-price {
    width: 78px;
}

.md-resource-details-seats {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
}

.md-resource-details-title {
    font-weight: 600;
    line-height: 26px;
}

.md-resource-details-sidebar-header {
    line-height: 26px;
    padding: 0 5px;
}

.md-resource-details .mbsc-timeline-day {
    width: 144px;
}

.md-resource-details-sidebar {
    line-height: 36px;
    text-align: center;
}

/* Footer */

.md-resource-details-occuppancy {
    font-size: 15px;
    text-align: right;
    background: #f8f8f8;
    padding-right: 15px;
}

.md-resource-details-footer {
    line-height: 50px;
}

.md-resource-details-total {
    font-size: 18px;
    text-align: center;
    line-height: 36px;
}

.md-resource-details-footer-day {
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    background: #f8f8f8;
    padding: 0 5px;
}

.md-resource-details .mbsc-timeline-sidebar-footer {
    background: #feefee;
    border-top-color: #5a0101;
    color: #5a0101;
}

.md-resource-details .mbsc-timeline-sidebar-col {
    width: 85px;
}

@supports (overflow:clip) {
    .md-resource-details.mbsc-ltr .mbsc-schedule-event-inner {
        left: 280px;
    }
    .md-resource-details.mbsc-rtl .mbsc-schedule-event-inner {
        right: 280px;
    }
}
  `,
};
