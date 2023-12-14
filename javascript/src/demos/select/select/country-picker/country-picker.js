import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var inst = mobiscroll.select('#demo-country-picker', {
      display: 'anchored',
      filter: true,
      itemHeight: 40,
      renderItem: function (item) {
        return (
          '<div class="md-country-picker-item">' +
          '<img class="md-country-picker-flag" src="https://img.mobiscroll.com/demos/flags/' +
          item.data.value +
          '.png" />' +
          item.display +
          '</div>'
        );
      },
    });

    mobiscroll.getJson('https://trial.mobiscroll.com/content/countries.json', function (resp) {
      var countries = [];
      for (var i = 0; i < resp.length; ++i) {
        var country = resp[i];
        countries.push({ text: country.text, value: country.value });
      }
      inst.setOptions({ data: countries });
    });
  },
  markup: `
<label>
    Countries
    <input mbsc-input id="demo-country-picker" data-dropdown="true" data-input-style="box" data-label-style="stacked" placeholder="Please select..." />
</label>
  `,
  css: `
.md-country-picker-item {
    position: relative;
    line-height: 20px;
    padding: 10px 0 10px 40px;
}

.md-country-picker-flag {
    position: absolute;
    left: 0;
    height: 20px;
}

.mbsc-scroller-wheel-item-2d .md-country-picker-item {
    transform: scale(1.1);
}
  `,
};
