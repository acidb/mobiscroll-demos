import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.select('#demo-inline', {
      display: 'inline',
    });

    mobiscroll.select('#demo-anchored', {
      inputElement: document.getElementById('demo-anchored-input'),
      display: 'anchored',
    });

    mobiscroll.select('#demo-top', {
      inputElement: document.getElementById('demo-top-input'),
      display: 'top',
    });

    mobiscroll.select('#demo-bottom', {
      inputElement: document.getElementById('demo-bottom-input'),
      display: 'bottom',
    });

    mobiscroll.select('#demo-center', {
      inputElement: document.getElementById('demo-center-input'),
      display: 'center',
    });
  },
  markup: `
<select id="demo-inline">
    <option value="atl">Atlanta</option>
    <option value="ber">Berlin</option>
    <option value="chi">Chicago</option>
    <option value="lon">London</option>
</select>

<label>
   Anchored
    <input mbsc-input id="demo-anchored-input" data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
<select id="demo-anchored">
    <option value="atl">Atlanta</option>
    <option value="ber">Berlin</option>
    <option value="chi">Chicago</option>
    <option value="lon">London</option>
</select>

<label>
    Top
    <input mbsc-input id="demo-top-input" data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
<select id="demo-top">
    <option value="atl">Atlanta</option>
    <option value="ber">Berlin</option>
    <option value="chi">Chicago</option>
    <option value="lon">London</option>
</select>

<label>
    Bottom
    <input mbsc-input id="demo-bottom-input" data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
<select id="demo-bottom">
    <option value="atl">Atlanta</option>
    <option value="ber">Berlin</option>
    <option value="chi">Chicago</option>
    <option value="lon">London</option>
</select>

<label>
    Center
    <input mbsc-input id="demo-center-input" data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
<select id="demo-center">
    <option value="atl">Atlanta</option>
    <option value="ber">Berlin</option>
    <option value="chi">Chicago</option>
    <option value="lon">London</option>
</select>
  `,
};
