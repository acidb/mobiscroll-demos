import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // theme
    });

    var gregorian;
    var jalali;
    var hijri;

    gregorian = mobiscroll.eventcalendar('#demo-gregorian', {
      locale: mobiscroll.localeEn,
      view: {
        calendar: { type: 'week' },
        agenda: { type: 'day' },
      },
    });

    jalali = mobiscroll.eventcalendar('#demo-jalali', {
      calendarSystem: mobiscroll.jalaliCalendar,
      locale: mobiscroll.locale.fa,
      view: {
        calendar: { type: 'week' },
        agenda: { type: 'day' },
      },
    });

    hijri = mobiscroll.eventcalendar('#demo-hijri', {
      calendarSystem: mobiscroll.hijriCalendar,
      locale: mobiscroll.locale.ar,
      view: {
        calendar: { type: 'week' },
        agenda: { type: 'day' },
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        gregorian.setEvents(events);
        jalali.setEvents(events);
        hijri.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page>
  <div class="mbsc-grid">
    <div class="mbsc-row">
      <div class="mbsc-col-sm-12 mbsc-col-md-4">
        <div class="mbsc-form-group">
          <div class="mbsc-form-group-title">Gregorian calendar</div>
          <div id="demo-gregorian"></div>
        </div>
      </div>
      <div class="mbsc-col-sm-12 mbsc-col-md-4">
        <div class="mbsc-form-group">
          <div class="mbsc-form-group-title">Jalali calendar</div>
          <div id="demo-jalali"></div>
        </div>
      </div>
      <div class="mbsc-col-sm-12 mbsc-col-md-4">
        <div class="mbsc-form-group">
          <div class="mbsc-form-group-title">Hijri calendar</div>
          <div id="demo-hijri"></div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
};
