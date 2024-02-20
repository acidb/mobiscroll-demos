import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
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
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
  `,
};
