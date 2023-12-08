import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var calendar = $('#demo-vertical-resolution')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'month',
              resolutionVertical: 'day',
            },
          },
          renderSidebarFooter: (resource) => {
            return `<div>` + resource.name + `</div>` + `<p>` + resource.description + `</p>` + `<img src="` + resource.img + `"/>`;
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/timeline-vertical-events/?callback=?', function (events) {
        calendar.setEvents(events);
      });
    });
  },
  markup: `
<div id="demo-vertical-resolution" class="md-vertical-timeline"></div>
  `,
  css: `
.md-vertical-timeline .mbsc-timeline-row-gutter {
    height: 8px;
}
  `,
};
