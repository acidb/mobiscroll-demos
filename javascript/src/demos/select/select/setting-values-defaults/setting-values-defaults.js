import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var cities = [
      {
        value: 'at;',
        text: 'Atlanta',
      },
      {
        value: 'ber',
        text: 'Berlin',
      },
      {
        value: 'bos',
        text: 'Boston',
      },
      {
        value: 'chi',
        text: 'Chicago',
      },
      {
        value: 'lon',
        text: 'London',
      },
    ];

    mobiscroll.select('#demo-setting-values', {
      data: cities,
      inputElement: document.getElementById('setting-values-input'),
    });

    mobiscroll.select('#demo-setting-values-default', {
      data: cities,
      inputElement: document.getElementById('setting-values-default-input'),
      defaultSelection: 'ber',
    });

    document.getElementById('demo-setting-values-boston').addEventListener(
      'click',
      function () {
        customInst.setVal('bos');
      },
      false,
    );

    document.getElementById('demo-setting-values-london').addEventListener(
      'click',
      function () {
        customInst.setVal('lon');
      },
      false,
    );

    var customInst = mobiscroll.select('#demo-setting-values-inline', {
      display: 'inline',
      data: cities,
      showInput: false,
    });

    var buttonsInst = mobiscroll.select('#demo-setting-values-custom', {
      data: cities,
      buttons: [
        {
          text: 'Custom',
          handler: function () {
            buttonsInst.setTempVal('chi');
          },
        },
        'set',
        'cancel',
      ],
    });

    mobiscroll.select('#demo-setting-values-auto', {
      data: cities,
      buttons: ['cancel'],
    });
  },
  markup: `
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Controlling the default value</div>
    <label>
        Default
        <input mbsc-input id="demo-setting-values" placeholder="Please select..." data-dropdown="true" data-input-style="outline" data-label-style="stacked" />
    </label>
    <label>
        Custom default
        <input mbsc-input id="demo-setting-values-default" placeholder="Please select..." data-dropdown="true" data-input-style="outline" data-label-style="stacked" />
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Setting a custom value</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="demo-setting-values-boston">Boston</button>
        <button mbsc-button id="demo-setting-values-london">London</button>
    </div>
    <select id="demo-setting-values-inline">
        <option value="atl">Atlanta</option>
        <option value="ber">Berlin</option>
        <option value="chi">Chicago</option>
        <option value="lon">London</option>
    </select>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Buttons API</div>
    <label>
        Custom
        <input mbsc-input id="demo-setting-values-custom" placeholder="Please select..." data-dropdown="true" data-input-style="outline" data-label-style="stacked" />
    </label>
    <label>
        Auto set
        <input mbsc-input id="demo-setting-values-auto" placeholder="Please select..." data-dropdown="true" data-input-style="outline" data-label-style="stacked" />
    </label>
</div>
  `,
};
