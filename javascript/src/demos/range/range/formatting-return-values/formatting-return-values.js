import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var currentWeek = ['dyndatetime(y,m,d)', 'dyndatetime(y,m,d+6)'];
    var currentHour = ['dyndatetime(y,m,d,h)', 'dyndatetime(y,m,d,h+2)'];

    mobiscroll.datepicker('#demo-date-def', {
      controls: ['calendar'],
      select: 'range',
      onInit: function (event, inst) {
        inst.setVal(currentWeek, true);
      },
    });

    mobiscroll.datepicker('#demo-date-sep', {
      controls: ['calendar'],
      select: 'range',
      dateFormat: 'DD.MM.YYYY',
      onInit: function (event, inst) {
        inst.setVal(currentWeek, true);
      },
    });

    mobiscroll.datepicker('#demo-date-month', {
      controls: ['calendar'],
      select: 'range',
      dateFormat: 'D MMMM YYYY',
      onInit: function (event, inst) {
        inst.setVal(currentWeek, true);
      },
    });

    mobiscroll.datepicker('#demo-date-day', {
      controls: ['calendar'],
      select: 'range',
      dateFormat: 'DDD DD MMM, YYYY',
      onInit: function (event, inst) {
        inst.setVal(currentWeek, true);
      },
    });

    mobiscroll.datepicker('#demo-date-atom', {
      controls: ['calendar'],
      select: 'range',
      dateFormat: 'YYYY-MM-DD',
      onInit: function (event, inst) {
        inst.setVal(currentWeek, true);
      },
    });

    mobiscroll.datepicker('#demo-date-cookie', {
      controls: ['calendar'],
      select: 'range',
      dateFormat: 'DDD, DD MMM YYYY',
      onInit: function (event, inst) {
        inst.setVal(currentWeek, true);
      },
    });

    mobiscroll.datepicker('#demo-time-def', {
      controls: ['time'],
      select: 'range',
      onInit: function (event, inst) {
        inst.setVal(currentHour, true);
      },
    });

    mobiscroll.datepicker('#demo-time-12h', {
      controls: ['time'],
      select: 'range',
      timeFormat: 'hh:mm A',
      onInit: function (event, inst) {
        inst.setVal(currentHour, true);
      },
    });

    mobiscroll.datepicker('#demo-time-24h', {
      controls: ['time'],
      select: 'range',
      timeFormat: 'HH:mm',
      onInit: function (event, inst) {
        inst.setVal(currentHour, true);
      },
    });

    mobiscroll.datepicker('#demo-time-hms', {
      controls: ['time'],
      select: 'range',
      timeFormat: 'HH:mm:ss',
      onInit: function (event, inst) {
        inst.setVal(currentHour, true);
      },
    });

    mobiscroll.datepicker('#demo-datetime-def', {
      controls: ['calendar', 'time'],
      select: 'range',
      onInit: function (event, inst) {
        inst.setVal(currentHour, true);
      },
    });

    mobiscroll.datepicker('#demo-datetime-day', {
      controls: ['calendar', 'time'],
      select: 'range',
      dateFormat: 'DDD D MMM, YYYY',
      timeFormat: 'H:mm',
      dateWheels: '|DDD D MMM, YYYY|',
      onInit: function (event, inst) {
        inst.setVal(currentHour, true);
      },
    });
  },
  markup: `
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Date</div>
    <label>
        Default
        <input mbsc-input id="demo-date-def" />
    </label>
    <label>
        Separator
        <input mbsc-input id="demo-date-sep" />
    </label>
    <label>
        Month name
        <input mbsc-input id="demo-date-month" />
    </label>
    <label>
        Day of week
        <input mbsc-input id="demo-date-day" />
    </label>
    <label>
        ATOM
        <input mbsc-input id="demo-date-atom" />
    </label>
    <label>
        COOKIE
        <input mbsc-input id="demo-date-cookie" />
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Time</div>
    <label>
        Default
        <input mbsc-input id="demo-time-def" />
    </label>
    <label>
        12 h
        <input mbsc-input id="demo-time-12h" />
    </label>
    <label>
        24 h
        <input mbsc-input id="demo-time-24h" />
    </label>
    <label>
        Hour, min, sec
        <input mbsc-input id="demo-time-hms" />
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Date & Time</div>
    <label>
        Default
        <input mbsc-input id="demo-datetime-def" />
    </label>
    <label>
        Day name
        <input mbsc-input id="demo-datetime-day" />
    </label>
</div>
  `,
};
