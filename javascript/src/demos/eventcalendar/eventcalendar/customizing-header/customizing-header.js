import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var currentDate = new Date(),
      view = 'calendar',
      calendar = mobiscroll.eventcalendar('#demo-custom-header', {
        view: {
          calendar: {
            labels: true,
          },
        },
        onSelectedDateChange: function (event, inst) {
          currentDate = event.date;
        },
        renderHeader: function () {
          return (
            '<div mbsc-calendar-nav class="md-custom-header-nav"></div>' +
            '<div class="md-custom-header-controls">' +
            '<button id="nav-to-prev-page" mbsc-button data-variant="flat" data-icon="material-arrow-back" class="md-custom-header-button"></button>' +
            '<div mbsc-calendar-today class="md-custom-header-today"></div>' +
            '<button id="nav-to-next-page" mbsc-button data-variant="flat" data-icon="material-arrow-forward" class="md-custom-header-button"></button>' +
            '</div>' +
            '<div class="md-custom-header-view">' +
            '<label><input data-icon="calendar" mbsc-segmented type="radio" name="view" value="calendar" class="md-view-change" checked></label>' +
            '<label><input data-icon="material-list" mbsc-segmented type="radio" name="view" value="schedule" class="md-view-change"></label>' +
            '</div>'
          );
        },
      });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        calendar.setEvents(events);
      },
      'jsonp',
    );

    function getFirstDayOfWeek(d, prev) {
      var day = d.getDay(),
        diff = d.getDate() - day + (prev ? -7 : 7);
      return new Date(d.setDate(diff));
    }

    function navigatePage(prev) {
      if (view == 'calendar') {
        var prevNextPage = new Date(currentDate.getFullYear(), currentDate.getMonth() + (prev ? -1 : 1), 1);
        calendar.navigate(prevNextPage);
        currentDate = prevNextPage;
      } else {
        var prevNextSunday = getFirstDayOfWeek(currentDate, prev);
        calendar.navigate(prevNextSunday);
        currentDate = prevNextSunday;
      }
    }

    document.querySelectorAll('.md-view-change').forEach(function (elm) {
      elm.addEventListener('change', function (ev) {
        switch (ev.target.value) {
          case 'calendar':
            calendar.setOptions({
              view: {
                calendar: { labels: true },
              },
            });
            view = 'calendar';
            break;
          case 'schedule':
            calendar.setOptions({
              view: {
                schedule: { type: 'week' },
              },
            });
            view = 'schedule';
            break;
        }
      });
    });

    document.getElementById('nav-to-prev-page').addEventListener('click', function () {
      navigatePage(true);
    });

    document.getElementById('nav-to-next-page').addEventListener('click', function () {
      navigatePage(false);
    });
  },
  markup: `
<div id="demo-custom-header" class="md-custom-header"></div>
  `,
  css: `
.md-custom-header-controls {
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    align-items: center;
}

.md-custom-header-nav,
.md-custom-header-view {
    width: 180px;
}

.md-custom-header-button.mbsc-button {
    font-size: 20px;
    height: auto;
    padding: 0;
    margin: 0;
}

.md-custom-header .mbsc-segmented {
    width: 110px;
    float: right;
    margin-top: 0;
    margin-bottom: 0;
}

.md-custom-header .mbsc-material.mbsc-segmented,
.md-custom-header .mbsc-windows.mbsc-segmented {
    padding: 0;
}

.md-custom-header .mbsc-segmented .mbsc-segmented-button {
    font-size: 20px;
    height: 32px;
    padding: 0;
}
  `,
};
