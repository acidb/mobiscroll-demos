import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var currentDate = new Date();
    var calendar = mobiscroll.eventcalendar('#demo-custom-header', {
      view: {
        agenda: { type: 'month' },
      },
      onSelectedDateChange: function (event) {
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
          '<label><input data-icon="material-view-day" mbsc-segmented type="radio" name="view" value="agenda" class="md-view-change" checked></label>' +
          '<label><input data-icon="calendar" mbsc-segmented type="radio" name="view" value="calendar" class="md-view-change"></label>' +
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

    document.querySelectorAll('.md-view-change').forEach(function (elm) {
      elm.addEventListener('change', function (ev) {
        switch (ev.target.value) {
          case 'calendar':
            calendar.setOptions({
              view: {
                calendar: { labels: true },
              },
            });
            break;
          case 'agenda':
            calendar.setOptions({
              view: {
                agenda: { type: 'month' },
              },
            });
            break;
        }
      });
    });

    document.getElementById('nav-to-prev-page').addEventListener('click', function () {
      var prevPage = new Date(currentDate);

      prevPage.setDate(1);
      prevPage.setMonth(prevPage.getMonth() - 1);
      calendar.navigate(prevPage);
      currentDate = prevPage;
    });

    document.getElementById('nav-to-next-page').addEventListener('click', function () {
      var nextPage = new Date(currentDate);

      nextPage.setDate(1);
      nextPage.setMonth(nextPage.getMonth() + 1);
      calendar.navigate(nextPage);
      currentDate = nextPage;
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="md-custom-header">
    <div id="demo-custom-header"></div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
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
