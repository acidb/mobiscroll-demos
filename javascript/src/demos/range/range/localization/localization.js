import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // theme
    });

    mobiscroll.datepicker('#demo', {
      controls: ['calendar'],
      select: 'range',
      display: 'inline',
      locale: mobiscroll.localeEs, // sets the language of the component
    });
  },
  markup: `
<div id="demo"></div>
  `,
};
