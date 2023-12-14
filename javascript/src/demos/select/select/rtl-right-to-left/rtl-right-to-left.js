import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.select('#demo', {
      inputElement: document.getElementById('demo-input'),
      rtl: true,
      display: 'bottom',
    });
  },
  markup: `
<label>
    Select
    <input mbsc-input id="demo-input" placeholder="Please select..." data-dropdown="true" data-input-style="outline" data-label-style="stacked" />
</label>
<select id="demo" data-input-style="box" data-label-style="stacked">
    <option value="1">Atlanta</option>
    <option value="2">Berlin</option>
    <option value="3">Boston</option>
    <option value="4">Chicago</option>
    <option value="5">London</option>
    <option value="6">Los Angeles</option>
    <option value="7">New York</option>
    <option value="8">Paris</option>
    <option value="9">San Francisco</option>
</select>
  `,
};
