import * as mobiscroll from '@mobiscroll/javascript';
import dragula from 'dragula';
import Sortable from 'sortablejs';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.eventcalendar('#demo-external-drag-drop-sortable-dragula', {
      view: {
        timeline: {
          type: 'week',
        },
      },
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-external-drag-drop-sortable-dragula"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: ``,
};
