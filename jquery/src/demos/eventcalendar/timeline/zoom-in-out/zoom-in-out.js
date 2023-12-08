import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var timer;
      var zoom = 7;
      var refDate = 'dyndatetime(y,m,d-1)';

      function changeView(step) {
        var calView;
        var toastText;
        var cssClass = '';
        var zoomInButton = $('#md-zoom-in');
        var zoomOutButton = $('#md-zoom-out');
        var viewDate = calendar.getViewDate();
        var oneDay = 60000 * 60 * 24;

        if (timer) {
          clearTimeout(timer);
          timer = null;
        }

        zoom = zoom + step;

        switch (zoom) {
          case 9:
          default:
            // Multiple days, 30m resolution, 1h labels
            calView = {
              timeline: {
                type: 'day',
                size: 3,
                resolution: 'hour',
                timeCellStep: 30,
                timeLabelStep: 60,
              },
            };
            toastText = '30 minutes';
            refDate = new Date(viewDate - oneDay);
            break;
          case 8:
            // Multiple days, 3h resolution, 6h labels
            calView = {
              timeline: {
                type: 'day',
                size: 3,
                resolution: 'hour',
                timeCellStep: 180,
                timeLabelStep: 360,
              },
            };
            toastText = '3 hours';
            refDate = new Date(viewDate - oneDay);
            break;
          case 7:
            // Multiple days, 6h resolution
            calView = {
              timeline: {
                type: 'day',
                size: 3,
                resolution: 'hour',
                timeCellStep: 360,
                timeLabelStep: 360,
              },
            };
            toastText = '6 hours';
            refDate = new Date(viewDate - oneDay);
            break;
          case 6:
            // Multiple weeks, day resolution
            calView = {
              timeline: {
                type: 'week',
                size: 5,
                resolution: 'day',
              },
            };
            cssClass = 'column-large';
            toastText = 'Multiple days';
            refDate = new Date(viewDate - oneDay * 17);
            break;
          case 5:
            // Multiple weeks, day resolution - smaller width columns
            calView = {
              timeline: {
                type: 'week',
                size: 5,
                resolution: 'day',
              },
            };
            cssClass = 'column-medium';
            toastText = 'Medium column width';
            refDate = new Date(viewDate - oneDay * 17);
            break;
          case 4:
            // Multiple weeks, day resolution - even smaller width columns
            calView = {
              timeline: {
                type: 'week',
                size: 5,
                resolution: 'day',
              },
            };
            toastText = 'Small column width';
            refDate = new Date(viewDate - oneDay * 17);
            break;
          case 3:
            // Multiple weeks, week resolution
            calView = {
              timeline: {
                type: 'week',
                size: 5,
                resolution: 'week',
                // eventList: true
              },
            };
            toastText = 'Multiple weeks';
            refDate = new Date(viewDate - oneDay * 17);
            break;
          case 2:
            var currentDate = new Date(viewDate);
            // Multiple months, month resolution
            calView = {
              timeline: {
                type: 'month',
                size: 6,
                resolution: 'month',
                // eventList: true
              },
            };
            toastText = 'Multiple months';
            refDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 1);
            break;
          case 1:
            var currentDate = new Date(viewDate);
            // Multiple years, year resolution
            calView = {
              timeline: {
                type: 'year',
                size: 6,
                resolution: 'year',
                // eventList: true
              },
            };
            toastText = 'Multiple years';
            refDate = new Date(currentDate.getFullYear() - 2, 0, 1);
            break;
        }

        zoomInButton.mobiscroll('getInst').setOptions({ disabled: zoom === 9 });
        zoomOutButton.mobiscroll('getInst').setOptions({ disabled: zoom === 1 });

        if (!timer) {
          timer = setTimeout(function () {
            calendar.setOptions({
              view: calView,
              cssClass: cssClass,
              refDate: refDate,
            });
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: toastText,
            });
          }, 100);
        }
      }

      var calendar = $('#demo-zoom-in-out')
        .mobiscroll()
        .eventcalendar({
          refDate: refDate,
          view: {
            timeline: {
              type: 'day',
              size: 3,
              resolution: 'hour',
              timeCellStep: 360,
              timeLabelStep: 360,
            },
          },
          resources: [
            {
              id: 1,
              name: 'Resource A',
              color: '#e20000',
            },
            {
              id: 2,
              name: 'Resource B',
              color: '#76e083',
            },
            {
              id: 3,
              name: 'Resource C',
              color: '#4981d6',
            },
            {
              id: 4,
              name: 'Resource D',
              color: '#e25dd2',
            },
            {
              id: 5,
              name: 'Resource E',
              color: '#1dab2f',
            },
            {
              id: 6,
              name: 'Resource F',
              color: '#d6d145',
            },
          ],
          renderHeader: function (a, b) {
            var header =
              '<div mbsc-calendar-nav></div>' +
              '<div class="md-zoom-cont mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">' +
              '<button id="md-zoom-in" mbsc-button data-icon="material-zoom-in"></button>' +
              '<button id="md-zoom-out" mbsc-button data-icon="material-zoom-out"></button>' +
              '</div>' +
              '<button mbsc-calendar-prev></button>' +
              '<button mbsc-calendar-today></button>' +
              '<button mbsc-calendar-next></button>';
            return header;
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trialdev.mobiscroll.com/big-timeline-events/?callback=?', function (events) {
        calendar.setEvents(events);
      });

      $('#md-zoom-in').on('click', function (ev) {
        changeView(1);
      });

      $('#md-zoom-out').on('click', function (ev) {
        changeView(-1);
      });
    });
  },
  markup: `
<div id="demo-zoom-in-out" class="md-demo-zoom-in-out"></div>
  `,
  css: `
.demo-zoom-in-out {
    height: 100%;
}

.md-zoom-cont .mbsc-button-icon {
    font-size: 24px;
}

.column-large .mbsc-timeline-column,
.column-large .mbsc-timeline-header-column,
.column-large .mbsc-timeline-day-month {
    width: 120px
}

.column-medium .mbsc-timeline-column,
.column-medium .mbsc-timeline-header-column,
.column-medium .mbsc-timeline-day-month {
    width: 100px;
}
  `,
};
