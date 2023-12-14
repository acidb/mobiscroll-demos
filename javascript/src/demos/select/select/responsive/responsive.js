import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.select('#demo-responsive', {
      inputElement: document.getElementById('demo-responsive-input'),
      responsive: {
        xsmall: {
          display: 'bottom',
        },
        small: {
          display: 'anchored',
        },
        custom: {
          // Custom breakpoint
          breakpoint: 800,
          display: 'anchored',
          touchUi: false,
        },
      },
    });
  },
  markup: `
<label>
    Select
    <input mbsc-input id="demo-responsive-input" placeholder="Please select..." data-dropdown="true" data-input-style="outline" data-label-style="stacked" />
</label>
<select id="demo-responsive">
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
