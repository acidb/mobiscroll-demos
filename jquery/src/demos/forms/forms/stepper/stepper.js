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
    <div class="mbsc-form-group-title">Passengers</div>
    <label>
        <input mbsc-stepper data-label="Adults" data-description="From 14 years" min="1" value="1" max="15" />
    </label>
    <label>
        <input mbsc-stepper data-label="Children" data-description="2-14 years" max="15" data-input-position="start" />
    </label>
    <label>
        <input mbsc-stepper data-label="Infant" data-description="0-2 years" data-input-position="start" max="10" />
    </label>
</div>
  `,
};
