import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });
  },
  markup: `
<div class="mbsc-form-group">
    <label>
        <input mbsc-input data-label="Input field" type="text" placeholder="Input with label" />
    </label>
    <label>
        <textarea mbsc-textarea data-label="Textarea" placeholder="Textarea with label"></textarea>
    </label>
    <label>
        <select mbsc-dropdown data-label="Select">
            <option value="Opel">Opel</option>
            <option value="Renault">Renault</option>
            <option value="Citroen">Citroen</option>
            <option value="Lotus">Lotus</option>
        </select>
    </label>
    <label>
        <input mbsc-switch data-label="Switch" type="checkbox" checked />
    </label>
    <label>
        <input mbsc-checkbox data-label="Checkbox" type="checkbox" checked />
    </label>
    <div mbsc-radio-group>
        <label>
            <input type="radio" name="rad" mbsc-radio data-label="Radio 1" checked />
        </label>
        <label>
            <input type="radio" name="rad" mbsc-radio data-label="Radio 2" />
        </label>
    </div>
    <label>
        <input mbsc-stepper data-label="Stepper" />
    </label>
    <div class="mbsc-button-group-block">
        <button mbsc-button>Button</button>
    </div>
    <div mbsc-segmented-group>
        <label>
            Segmented 1
            <input mbsc-segmented name="seg" type="radio">
        </label>
        <label>
            Segmented 2
            <input mbsc-segmented name="seg" type="radio">
        </label>
    </div>
</div>
  `,
};
