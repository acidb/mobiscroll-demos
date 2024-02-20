import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // theme
    });

    mobiscroll.datepicker('#demo', {
      controls: ['calendar'],
      display: 'inline',
      locale: mobiscroll.localeEs, // sets the language of the component
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
  `,
};
