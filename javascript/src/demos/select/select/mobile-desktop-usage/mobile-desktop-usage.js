import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.select('#demo-mobile-select-native', {
      inputElement: document.getElementById('demo-mobile-select-native-input'),
    });

    var instance = mobiscroll.select('#demo-mobile-select-button', {
      inputElement: document.getElementById('demo-mobile-select-button-input'),
      showOnClick: false,
      showOnFocus: false,
    });

    instance.setVal('atl', true);

    mobiscroll.select('#demo-mobile-select-mobiscroll', {
      inputElement: document.getElementById('demo-mobile-select-mobiscroll-input'),
    });

    mobiscroll.select('#demo-mobile-select-inline', {
      display: 'inline',
    });

    document.getElementById('show-mobile-date-picker').addEventListener('click', function () {
      instance.open();
      return false;
    });
  },
  markup: `
<div class="mbsc-grid">
    <div class="mbsc-form-group">
        <div class="mbsc-row">
            <div class="mbsc-col-12">
                <div class="mbsc-txt-muted md-mobile-picker-header">Use the picker with any inputs & show on focus/click</div>
                <input id="demo-mobile-select-native-input" placeholder="Please select..." class="md-mobile-picker-input" />
                <select id="demo-mobile-select-native">
                    <option value="atl">Atlanta</option>
                    <option value="ber">Berlin</option>
                    <option value="chi">Chicago</option>
                    <option value="lon">London</option>
                </select>
            </div>
        </div>
    </div>
    <div class="mbsc-form-group">
        <div class="mbsc-row">
            <div class="mbsc-col-12 mbsc-txt-muted md-mobile-picker-header">Disable <code>onClick/onFocus</code> and only show on button</div>
            <div class="mbsc-col-8">
                <input id="demo-mobile-select-button-input" placeholder="Please select..." class="md-mobile-picker-input" />
                <select id="demo-mobile-select-button" class="md-mobile-picker-input">
                    <option value="atl">Atlanta</option>
                    <option value="ber">Berlin</option>
                    <option value="chi">Chicago</option>
                    <option value="lon">London</option>
                </select>
            </div>
            <div class="mbsc-col-4 mbsc-col-no-padding">
                <button mbsc-button data-variant="outline" data-color="primary" id="show-mobile-date-picker" class="md-mobile-picker-button">Show picker</button>
            </div>
        </div>
    </div>
    <div class="mbsc-form-group">
        <div class="mbsc-row">
            <div class="mbsc-col-12">
                <div class="mbsc-txt-muted md-mobile-picker-header">Use the picker with a Mobiscroll input</div>
                <label class="md-mobile-picker-box-label">
                    <input mbsc-input id="demo-mobile-select-mobiscroll-input" placeholder="Please select..." data-dropdown="true" data-input-style="box" />
                </label>
                <select id="demo-mobile-select-mobiscroll">
                    <option value="atl">Atlanta</option>
                    <option value="ber">Berlin</option>
                    <option value="chi">Chicago</option>
                    <option value="lon">London</option>
                </select>
            </div>
        </div>
    </div>
    <div class="mbsc-txt-muted md-mobile-picker-header">Use the picker inline in any page</div>
</div>
<div class="md-mobile-picker-inline">
    <select id="demo-mobile-select-inline">
        <option value="atl">Atlanta</option>
        <option value="ber">Berlin</option>
        <option value="chi">Chicago</option>
        <option value="lon">London</option>
    </select>
</div>
  `,
  css: `
.md-mobile-picker-header {
    font-size: 14px;
}

.md-mobile-picker-input {
    color: initial;
    width: 100%;
    padding: 10px;
    margin: 6px 0 12px 0;
    border: 1px solid #ccc;
    border-radius: 0;
    font-family: arial, verdana, sans-serif;
    font-size: 14px;
    box-sizing: border-box;
    -webkit-appearance: none;
}

.md-mobile-picker-button.mbsc-button {
    font-size: 13px;
    padding: 0 15px;
    line-height: 36px;
    float: right;
    margin: 6px 0;
    width: 100%;
}

.mbsc-col-no-padding {
    padding-left: 0;
}

.md-mobile-picker-box-label.mbsc-textfield-wrapper-box,
.md-mobile-picker-box-label .mbsc-textfield-wrapper-box,
.md-mobile-picker-inline {
    margin: 6px 0 12px 0;
}
  `,
};
