import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo', {
      controls: ['calendar'],
      display: 'inline',
      calendarType: 'week',
      calendarSize: 2,
    });

    mobiscroll.datepicker('#demo-custom', {
      controls: ['calendar'],
      display: 'inline',
      renderCalendarHeader: function () {
        return (
          '<div mbsc-calendar-prev class="custom-prev"></div>' +
          '<div mbsc-calendar-nav class="custom-nav"></div>' +
          '<div mbsc-calendar-next class="custom-next"></div>'
        );
      },
    });

    mobiscroll.datepicker('#demo-today', {
      controls: ['calendar'],
      display: 'inline',
      renderCalendarHeader: function () {
        return (
          '<div mbsc-calendar-nav></div>' +
          '<div class="custom-buttons">' +
          '<div mbsc-calendar-prev></div>' +
          '<div mbsc-calendar-today></div>' +
          '<div mbsc-calendar-next></div>' +
          '</div>'
        );
      },
    });

    var myCalendar = mobiscroll.datepicker('#demo-switch', {
      controls: ['calendar'],
      display: 'inline',
      calendarType: 'week',
      calendarSize: 2,
      renderCalendarHeader: function () {
        return (
          '<div mbsc-calendar-nav class="custom-view-nav"></div><div class="custom-view">' +
          '<label><input data-icon="material-date-range" mbsc-segmented type="radio" name="view" value="week" class="view-change" checked></label>' +
          '<label><input data-icon="material-event-note" mbsc-segmented type="radio" name="view" value="month" class="view-change"></label></div>' +
          '<div mbsc-calendar-prev></div>' +
          '<div mbsc-calendar-next></div>'
        );
      },
    });

    document.querySelectorAll('.view-change').forEach(function (elm) {
      elm.addEventListener('change', function (ev) {
        switch (ev.target.value) {
          case 'week':
            myCalendar.setOptions({
              calendarType: 'week',
            });
            break;
          case 'month':
            myCalendar.setOptions({
              calendarType: 'month',
            });
            break;
        }
      });
    });

    mobiscroll.datepicker('#demo-prev', {
      controls: ['calendar'],
      display: 'inline',
      calendarType: 'week',
      calendarSize: 2,
      headerText: 'You selected {value}',
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
<div id="demo-custom"></div>
<div id="demo-today"></div>
<div id="demo-switch"></div>
<div id="demo-prev"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.custom-buttons,
.custom-view,
.custom-nav {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex: 1 0 auto;
    -moz-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
}

.custom-buttons {
    -webkit-justify-content: flex-end;
    -moz-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.custom-view,
.custom-nav {
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.custom-view-nav .mbsc-calendar-title.mbsc-material {
    font-size: 16px;
}

.custom-view .mbsc-segmented {
    margin: 0;
}

.custom-view .mbsc-segmented.mbsc-material,
.custom-view .mbsc-segmented.mbsc-windows {
    padding: 0 2px;
}

.custom-view .mbsc-segmented .mbsc-segmented-button {
    padding: 0 1px;
}

.custom-view .mbsc-segmented .mbsc-icon {
    font-size: 20px;
}

.custom-view .mbsc-segmented-button.mbsc-windows {
    border: 0;
}
  `,
};
