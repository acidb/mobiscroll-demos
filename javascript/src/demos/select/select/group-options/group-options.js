import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.select('#demo-single-group-select', {
      inputElement: document.getElementById('demo-single-group-select-input'),
    });

    mobiscroll.select('#demo-single-group-select-wheel', {
      showGroupWheels: true,
      inputElement: document.getElementById('demo-single-group-select-wheel-input'),
    });

    mobiscroll.select('#demo-multiple-group-select', {
      inputElement: document.getElementById('demo-multiple-group-select-input'),
      selectMultiple: true,
    });
  },
  markup: `
<label>
    Single select
    <input mbsc-input id="demo-single-group-select-input" data-dropdown="true" data-input-style="outline" data-label-style="stacked" />
</label>
<select id="demo-single-group-select">
    <optgroup label="US">
        <option value="1">Atlanta</option>
        <option value="2">Boston</option>
    </optgroup>
    <optgroup label="UK">
        <option value="3">Bath</option>
        <option value="4">Bristol</option>
    </optgroup>
</select>
<label>
    Group wheel
    <input mbsc-input id="demo-single-group-select-wheel-input" placeholder="Please select..." data-dropdown="true" data-input-style="outline" data-label-style="stacked" />
</label>
<select id="demo-single-group-select-wheel">
    <optgroup label="US">
        <option value="1">Atlanta</option>
        <option value="2">Boston</option>
    </optgroup>
    <optgroup label="UK">
        <option value="3">Bath</option>
        <option value="4">Bristol</option>
    </optgroup>
    <optgroup label="DE">
        <option value="ber">Berlin</option>
        <option value="dus">Duisburg</option>
        <option value="col">Cologne</option>
    </optgroup>
    <optgroup label="FR">
        <option value="par">Paris</option>
        <option value="lyo">Lyon</option>
    </optgroup>
</select>
<label>
    Multi-select
    <input mbsc-input id="demo-multiple-group-select-input" data-dropdown="true" data-input-style="outline" data-label-style="stacked" data-tags="true" />
</label>
<select id="demo-multiple-group-select" multiple>
    <optgroup label="Electronics">
        <option value="1">Camera & Photo</option>
        <option value="2">Cell Phones & Accessories</option>
        <option value="3">GPS & Navigation</option>
    </optgroup>
    <optgroup label="Smart Home">
        <option value="4">Plugs and Outlets</option>
        <option value="5">Heating and Cooling</option>
        <option value="6">Detectors and Sensors</option>
    </optgroup>
</select>
  `,
};
