import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var now = new Date();

      $('#demo-date-def')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          onInit: function (event, inst) {
            inst.setVal(now, true);
          },
        });

      $('#demo-date-sep')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          dateFormat: 'DD.MM.YYYY',
          onInit: function (event, inst) {
            inst.setVal(now, true);
          },
        });

      $('#demo-date-month-only')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          dateFormat: 'MMMM',
          onInit: function (event, inst) {
            inst.setVal(now, true);
          },
        });

      $('#demo-date-month')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          dateFormat: 'D MMMM YYYY',
          onInit: function (event, inst) {
            inst.setVal(now, true);
          },
        });

      $('#demo-date-month-year')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          dateFormat: 'MM/YYYY',
          onInit: function (event, inst) {
            inst.setVal(now, true);
          },
        });

      $('#demo-date-day')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          dateFormat: 'DDD DD MMM, YYYY',
          onInit: function (event, inst) {
            inst.setVal(now, true);
          },
        });

      $('#demo-date-atom')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          dateFormat: 'YYYY-MM-DD',
          onInit: function (event, inst) {
            inst.setVal(now, true);
          },
        });

      $('#demo-date-cookie')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          dateFormat: 'DDD, DD MMM YYYY',
          onInit: function (event, inst) {
            inst.setVal(now, true);
          },
        });

      $('#demo-time-def')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          select: 'range',
          onInit: function (event, inst) {
            inst.setVal(now, true);
          },
        });

      $('#demo-time-12h')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          select: 'range',
          timeFormat: 'hh:mm A',
          onInit: function (event, inst) {
            inst.setVal(now, true);
          },
        });

      $('#demo-time-24h')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          select: 'range',
          timeFormat: 'HH:mm',
          onInit: function (event, inst) {
            inst.setVal(now, true);
          },
        });

      $('#demo-time-hms')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          select: 'range',
          timeFormat: 'HH:mm:ss',
          onInit: function (event, inst) {
            inst.setVal(now, true);
          },
        });

      $('#demo-datetime-def')
        .mobiscroll()
        .datepicker({
          controls: ['calendar', 'time'],
          select: 'range',
          onInit: function (event, inst) {
            inst.setVal(now, true);
          },
        });

      $('#demo-datetime-day')
        .mobiscroll()
        .datepicker({
          controls: ['calendar', 'time'],
          select: 'range',
          dateFormat: 'DDD D MMM, YYYY',
          timeFormat: 'H:mm',
          dateWheels: '|DDD D MMM, YYYY|',
          onInit: function (event, inst) {
            inst.setVal(now, true);
          },
        });
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
        Month only
        <input mbsc-input id="demo-date-month-only" />
    </label>
    <label>
        Month name
        <input mbsc-input id="demo-date-month" />
    </label>
    <label>
        Month/year
        <input mbsc-input id="demo-date-month-year" />
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
