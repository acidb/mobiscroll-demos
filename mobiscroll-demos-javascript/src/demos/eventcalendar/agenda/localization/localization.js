import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // theme
    });

    var calendar = mobiscroll.eventcalendar('#demo-localization', {
      view: {
        calendar: { type: 'week' },
        agenda: { type: 'day' },
      },
    });

    document.getElementById('demo-localization-select').addEventListener('change', function () {
      calendar.setOptions({
        locale: mobiscroll.locale[this.value],
      });
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        calendar.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page class="mds-full-height">
  <div class="mds-locale-cont mds-full-height mbsc-flex-col">
    <div class="mbsc-grid">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-8">
          <label>
            <select id="demo-localization-select" mbsc-dropdown data-input-style="box" data-label="Locale" data-label-style="stacked">
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="bg">Bulgarian</option>
              <option value="ca">Català</option>
              <option value="cs">Cestina</option>
              <option value="zh">Chinese</option>
              <option value="hr">Croatian</option>
              <option value="da">Dansk</option>
              <option value="de">Deutsch</option>
              <option value="en-UK">English (UK)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="el">Greek</option>
              <option value="in">Hindi</option>
              <option value="it">Italiano</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="lt">Lietuvių</option>
              <option value="hu">Magyar</option>
              <option value="nl">Nederlands</option>
              <option value="no">Norsk</option>
              <option value="pl">Polski</option>
              <option value="pt-PT">Português Europeu</option>
              <option value="pt-BR">Pt. Brasileiro</option>
              <option value="ro">Română</option>
              <option value="sr">Serbian</option>
              <option value="sk">Slovencina</option>
              <option value="fi">Suomi</option>
              <option value="sv">Svenska</option>
              <option value="th">Thai</option>
              <option value="tr">Türkçe</option>
              <option value="ua">Ukrainian</option>
              <option value="vi">Vietnamese</option>
              <option value="ru">Русский</option>
              <option value="ru-UA">Русский (UA)</option>
              <option value="he">עברית</option>
              <option value="fa">فارسی</option>
            </select>
          </label>
        </div>
      </div>
    </div>
    <div id="demo-localization" class="mbsc-flex-1-1"></div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-full-height {
  height: 100%;
}

.mds-locale-cont .mbsc-col-sm-8 {
  margin: 0 auto;
}
  `,
};
