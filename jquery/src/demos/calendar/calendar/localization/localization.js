import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // theme
    });

    $(function () {
      $('#demo')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          locale: mobiscroll.localeEs, // sets the language of the component
        });
    });
  },
  markup: `
<div id="demo"></div>
  `,
};
