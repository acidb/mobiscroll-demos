import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.datepicker('#demo', {
      // locale,
      controls: ['calendar'],
      select: 'range',
      display: 'inline',
      theme: 'material', // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
      themeVariant: 'dark', // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
    });
  },
  markup: `
<div id="demo"></div>
  `,
};
