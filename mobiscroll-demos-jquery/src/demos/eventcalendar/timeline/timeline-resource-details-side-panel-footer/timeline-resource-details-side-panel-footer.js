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
      var sortColumn;
      var sortDirection;
      var sortDay;
      var totalRevenue;

      /////////////////////
      // performance test

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }

      var resourceNr = 20000;
      var eventsNr = 20000;
      var myResources = [];
      var myEventColors = ['#ff0101', '#239a21', '#8f1ed6', '#01adff', '#d8ca1a'];

      for (var i = 1; i <= resourceNr; i++) {
        myResources.push({ name: 'Resource ' + i, id: i, seats: getRandomInt(100, 2000), price: getRandomInt(500, 20000) });
      }

      // performance test end
      ///////////////////////

      function getUTCDateOnly(d) {
        return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
      }

      function getDayDiff(d1, d2) {
        return Math.round((getUTCDateOnly(d2) - getUTCDateOnly(d1)) / (60 * 60 * 24 * 1000)) + 1;
      }

      function getRevenue(resource) {
        var days = 0;
        for (var i = 0; i < myEvents.length; ++i) {
          var event = myEvents[i];
          if (event.resource === resource.id) {
            days += getDayDiff(new Date(event.start), new Date(event.end));
          }
        }
        return days * resource.price;
      }

      function getSortArrow(column, day) {
        if (sortColumn === column && day === sortDay) {
          return sortDirection === 'asc' ? 'asc' : sortDirection === 'desc' ? 'desc' : 'def';
        }
        return 'def';
      }

      // function getBusyHours(resource, timestamp) {
      //   var startOfDay = new Date(timestamp);
      //   var endOfDay = new Date(startOfDay.getFullYear(), startOfDay.getMonth(), startOfDay.getDate() + 1);
      //   return myEvents.reduce(function (totalHours, event) {
      //     if (event.resource === resource.id) {
      //       var eventStart = Math.max(+startOfDay, +new Date(event.start));
      //       var eventEnd = Math.min(+endOfDay, +new Date(event.end));
      //       return totalHours + (eventStart < eventEnd ? (eventEnd - eventStart) / (60 * 60 * 1000) : 0);
      //     }
      //     return totalHours;
      //   }, 0);
      // }

      function refreshData(inst) {
        // Events for the current view
        myEvents = inst.getEvents();

        myResources.forEach(function (resource) {
          resource.revenue = getRevenue(resource);
        });

        totalRevenue = myResources.reduce(function (total, resource) {
          return total + resource.revenue;
        }, 0);
        setTimeout(function () {
          setLoadingIndicator(false);
        }, 0);
      }

      // function sortResources(column, day) {
      //   if (column) {
      //     if (sortColumn === column && day === sortDay) {
      //       sortDirection = sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'def' : 'asc';
      //     } else {
      //       sortColumn = column;
      //       sortDirection = 'asc';
      //     }
      //     sortDay = day;
      //   }

      //   if (sortDay) {
      //     // Precalculate busy hours for the clicked day
      //     myResources.forEach(function (resource) {
      //       resource.busyHours = getBusyHours(resource, sortDay);
      //     });
      //   }

      //   myResources.sort(function (a, b) {
      //     if (sortDirection === 'asc') {
      //       return a[sortColumn] > b[sortColumn] ? 1 : -1;
      //     }
      //     if (sortDirection === 'desc') {
      //       return a[sortColumn] < b[sortColumn] ? 1 : -1;
      //     }
      //     return a.id - b.id;
      //   });
      // }

      // <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l

      function createWorker() {
        var workerCode =
          'function getBusyHours(resource, day, events) {' +
          'postMessage("getBusyHours()");' +
          'const startOfDay = new Date(day);' +
          'const endOfDay = new Date(startOfDay.getFullYear(), startOfDay.getMonth(), startOfDay.getDate() + 1);' +
          'return events.reduce(function (totalHours, event) {' +
          'if (event.resource === resource.id) {' +
          'const eventStart = Math.max(+startOfDay, +new Date(event.start));' +
          'const eventEnd = Math.min(+endOfDay, +new Date(event.end));' +
          'return totalHours + (eventStart < eventEnd ? (eventEnd - eventStart) / (60 * 60 * 1000) : 0);' +
          '}' +
          'return totalHours;' +
          '}, 0);' +
          '};' +
          'onmessage = function(e) {' +
          'postMessage("worker received message");' +
          'const { resources, column, direction, day, events } = e.data;' +
          'resources.forEach(function (resource) {' +
          'resource.busyHours = getBusyHours(resource, day, events);' +
          '});' +
          'const sortedResources = resources.sort(function (a, b) {' +
          'if (direction === "asc") {' +
          'return a[column] > b[column] ? 1 : -1;' +
          '} else if (direction === "desc") {' +
          'return a[column] < b[column] ? 1 : -1;' +
          '} else {' +
          'return a.id - b.id;' +
          '}' +
          '});' +
          'postMessage(sortedResources);' +
          '};';

        var blob = new Blob([workerCode], { type: 'application/javascript' });
        return new Worker(URL.createObjectURL(blob));
      }

      function sortResources(column, day) {
        if (column) {
          if (sortColumn === column && day === sortDay) {
            sortDirection = sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'def' : 'asc';
          } else {
            sortColumn = column;
            sortDirection = 'asc';
          }
          sortDay = day;
        }

        var worker = createWorker();

        worker.onmessage = function (e) {
          if (typeof e.data === 'string') {
            console.log('Worker says:', e.data);
          } else {
            myResources = e.data;
            worker.terminate();
          }
        };

        worker.postMessage({
          resources: myResources,
          column: sortColumn,
          direction: sortDirection,
          day: sortDay,
          events: myEvents,
        });
      }

      // <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l// <--- d3l

      var calendar = $('#demo-resource-details')
        .mobiscroll()
        .eventcalendar({
          clickToCreate: true,
          dragToResize: true,
          dragToMove: true,
          dragToCreate: true,
          view: {
            timeline: {
              type: 'month',
            },
          },
          resources: myResources,
          renderResourceHeader: function () {
            return (
              '<div class="mds-resource-sort-header mds-resource-cell mds-resource-cell-name mds-resource-sort-' +
              getSortArrow('name') +
              '" data-sort="name">' +
              'Room' +
              '</div>' +
              '<div class="mds-resource-sort-header mds-resource-cell mds-resource-cell-seats mds-resource-sort-' +
              getSortArrow('seats') +
              '" data-sort="seats">' +
              'Capacity' +
              '</div>' +
              '<div class="mds-resource-sort-header mds-resource-cell mds-resource-cell-price mds-resource-sort-' +
              getSortArrow('price') +
              '" data-sort="price">' +
              'Price/day' +
              '</div>'
            );
          },
          renderResource: function (resource) {
            return (
              '<div class="mds-resource-cell mds-resource-cell-name">' +
              resource.name +
              '</div>' +
              '<div class="mds-resource-cell mds-resource-cell-seats">' +
              resource.seats +
              ' seats</div>' +
              '<div class="mds-resource-cell mds-resource-cell-price">$' +
              resource.price +
              '</div>'
            );
          },
          renderSidebarHeader: function () {
            return (
              '<div class="mds-resource-sort-header mds-resource-sort-' + getSortArrow('revenue') + '" data-sort="revenue">Revenue</div>'
            );
          },
          renderSidebar: function (resource) {
            return '<div class="mds-resource-cell">$' + resource.revenue + '</div>';
          },
          renderResourceFooter: function () {
            return '<div class="mds-resource-details-footer mds-resource-details-occuppancy">Occuppancy</div>';
          },
          renderDay: function (data) {
            var day = data.date;
            var timestamp = +day;
            return (
              '<div class="mds-resource-sort-header mds-resource-sort-' +
              getSortArrow('busyHours', timestamp) +
              '" data-sort="busyHours" data-day="' +
              timestamp +
              '">' +
              formatDate('D DDD', day) +
              '</div>'
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
          onPageLoading: function (args, inst) {
            myEvents = [];
            var year = new Date().getFullYear();
            var month = new Date().getMonth();
            // Generate random events
            for (var i = 0; i < eventsNr; i++) {
              var day = getRandomInt(1, 31);
              var length = getRandomInt(2, 5);
              var resource = getRandomInt(1, resourceNr + 1);
              var color = getRandomInt(0, 6);
              myEvents.push({
                color: myEventColors[color],
                end: new Date(year, month, day + length),
                resource: resource,
                start: new Date(year, month, day),
                title: 'Event ' + i,
              });
            }
            inst.setEvents(myEvents);
            refreshData(inst);
          },
          onInit: function () {
            $('.mds-resource-details .mbsc-timeline').append(
              '<div id="calendar-overlay" class="calendar-overlay">' +
                '<div class="md-spinner">' +
                '<div class="md-spinner-blade"></div>' +
                '<div class="md-spinner-blade"></div>' +
                '<div class="md-spinner-blade"></div>' +
                '<div class="md-spinner-blade"></div>' +
                '<div class="md-spinner-blade"></div>' +
                '<div class="md-spinner-blade"></div>' +
                '<div class="md-spinner-blade"></div>' +
                '<div class="md-spinner-blade"></div>' +
                '<div class="md-spinner-blade"></div>' +
                '<div class="md-spinner-blade"></div>' +
                '<div class="md-spinner-blade"></div>' +
                '<div class="md-spinner-blade"></div>' +
                '</div>' +
                '</div>',
            );
            setLoadingIndicator(true);
          },
          onEventCreated: function (args, inst) {
            refreshData(inst);
            sortResources();
          },
          onEventDeleted: function (args, inst) {
            refreshData(inst);
            sortResources();
          },
          onEventUpdated: function (args, inst) {
            // eslint-disable-next-line no-debugger
            refreshData(inst);
            sortResources();
          },
        })
        .mobiscroll('getInst');

      $('#demo-resource-details').on('click', '.mds-resource-sort-header', function () {
        var sortColumn = $(this).data('sort');
        var selectedDay = $(this).data('day');

        setLoadingIndicator(true);

        setTimeout(function () {
          sortResources(sortColumn, selectedDay);
          setLoadingIndicator(false);

          calendar.setOptions({
            resources: myResources.slice(),
          });
        }, 100);
      });

      function setLoadingIndicator(show) {
        if (show) {
          $('#calendar-overlay').addClass('show');
          $('.md-spinner').css('visibility', 'visible');
        } else {
          $('#calendar-overlay').removeClass('show');
          $('.md-spinner').css('visibility', 'hidden');
        }
      }
      document.getElementById('alert-button').addEventListener('click', function () {
        alert('Button clicked!');
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
  <div class="resource-container">
   <div class="resource-header" style="border: 1px solid red; height: 500px; display: flex; justify-content: center; align-items: center;">
  <button mbsc-button id="alert-button">Test button</button>

    </div>
    <div id="demo-resource-details" class="mds-resource-details" style="height: 800px;"></div>
  </div>
  `,

  // eslint-disable-next-line es5/no-template-literals
  css: `
/* Overrides */

.mds-resource-details .mbsc-timeline-resource-header,
.mds-resource-details .mbsc-timeline-resource-title,
.mds-resource-details .mbsc-timeline-resource-footer,
.mds-resource-details .mbsc-timeline-sidebar-header,
.mds-resource-details .mbsc-timeline-sidebar-resource-title,
.mds-resource-details .mbsc-timeline-sidebar-footer {
  padding: 0;
}

.mds-resource-details .mbsc-timeline-resource-col {
  width: 335px;
}

.mds-resource-details .mbsc-timeline-sidebar-col {
  width: 98px;
}

.mds-resource-details .mbsc-timeline-day {
  width: 144px;
}

.mds-resource-details .mbsc-timeline-resource-title {
  height: 100%;
}

@supports (overflow:clip) {
  .mds-resource-details.mbsc-ltr .mbsc-schedule-event-inner {
    left: 335px;
  }
  .mds-resource-details.mbsc-rtl .mbsc-schedule-event-inner {
    right: 335px;
  }
}

/* Resource grid */

.mds-resource-cell {
  display: inline-block;
  height: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  vertical-align: top;
  line-height: 50px;
}

.mds-resource-cell-name {
  width: 120px;
}

.mds-resource-cell-seats,
.mds-resource-cell-price {
  width: 107px;
}

.mds-resource-cell-seats {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.mds-resource-details.mbsc-ios-dark .mds-resource-cell-seats,
.mds-resource-details.mbsc-material-dark .mds-resource-cell-seats,
.mds-resource-details.mbsc-windows-dark .mds-resource-cell-seats {
  border-left: 1px solid #333;
  border-right: 1px solid #333;
}

/* Sort arrows */

.mds-resource-sort-header {
  cursor: pointer;
  position: relative;
  line-height: 25px;
  padding: 0 5px;
  font-size: 14px;
}

.mds-resource-sort-header::after {
  position: absolute;
  opacity: 0.5;
  right: 8px;
}

.mds-resource-sort-header:hover::after {
  opacity: 1;
}

.mds-resource-sort-asc::after {
  content: '↑'; 
}

.mds-resource-sort-desc::after {
  content: '↓';
}

.mds-resource-sort-def::after {
  content: '‹›';
  right: 5px;
  top: 12px;
  transform: translateY(-50%) rotate(90deg);
}

/* Footer */

.mds-resource-details-footer {
  line-height: 50px;
  background: rgba(150, 150, 150, 0.1);
}

.mds-resource-details-footer-day {
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  padding: 0 5px;
}

.mds-resource-details-occuppancy {
  font-size: 15px;
  text-align: end;
  text-align: right;
  padding: 0 15px;
}

.mds-resource-details-total {
  font-size: 18px;
  padding: 0 5px;
  color: #8c0000;
}

/*<hidden>*/

.demo-timeline-resource-details {
  height: 100%;
}

/*</hidden>*/


/* Loading spinner and overlay */

/* Spinner and overlay */

.mds-resource-details .mbsc-timeline {
    position: relative;
}

.calendar-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 9999; 
    display: none;
    justify-content: center; 
    align-items: center;     
}

.calendar-overlay.show {
    display: flex;
}

.md-spinner {
    margin-left: 20px;
    position: relative;
    visibility: visible;
    width: 50px;
    height: 50px;
    transform: rotate(0deg); /* Rotate around its center */
}

.md-spinner .md-spinner-blade {
    position: absolute;
    width: 10%;
    height: 25%;
    background-color: #8C8C8C;
    border-radius: 50%/20%;
    transform-origin: 50% 150%;
    transform: rotate(0deg) translate(0, -150%);
    animation: md-spinner-fade 1s linear infinite;
}

.md-spinner .md-spinner-blade:nth-child(1) {
    transform: rotate(30deg) translate(0, -150%);
    animation-delay: -0.91667s;
}
.md-spinner .md-spinner-blade:nth-child(2) {
    transform: rotate(60deg) translate(0, -150%);
    animation-delay: -0.83333s;
}
.md-spinner .md-spinner-blade:nth-child(3) {
    transform: rotate(90deg) translate(0, -150%);
    animation-delay: -0.75s;
}
.md-spinner .md-spinner-blade:nth-child(4) {
    transform: rotate(120deg) translate(0, -150%);
    animation-delay: -0.66667s;
}
.md-spinner .md-spinner-blade:nth-child(5) {
    transform: rotate(150deg) translate(0, -150%);
    animation-delay: -0.58333s;
}
.md-spinner .md-spinner-blade:nth-child(6) {
    transform: rotate(180deg) translate(0, -150%);
    animation-delay: -0.5s;
}
.md-spinner .md-spinner-blade:nth-child(7) {
    transform: rotate(210deg) translate(0, -150%);
    animation-delay: -0.41667s;
}
.md-spinner .md-spinner-blade:nth-child(8) {
    transform: rotate(240deg) translate(0, -150%);
    animation-delay: -0.33333s;
}
.md-spinner .md-spinner-blade:nth-child(9) {
    transform: rotate(270deg) translate(0, -150%);
    animation-delay: -0.25s;
}
.md-spinner .md-spinner-blade:nth-child(10) {
    transform: rotate(300deg) translate(0, -150%);
    animation-delay: -0.16667s;
}
.md-spinner .md-spinner-blade:nth-child(11) {
    transform: rotate(330deg) translate(0, -150%);
    animation-delay: -0.08333s;
}
.md-spinner .md-spinner-blade:nth-child(12) {
    transform: rotate(360deg) translate(0, -150%);
    animation-delay: 0s;
}

@keyframes md-spinner-fade {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.25;
    }
}
  `,
};
