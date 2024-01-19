import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var monthInst, dayInst;

    monthInst = mobiscroll.eventcalendar('#demo-month', {
      view: {
        calendar: { popover: false, labels: false },
      },
      onSelectedDateChange: function (event) {
        dayInst.navigate(event.date);
      },
    });

    dayInst = mobiscroll.eventcalendar('#demo-day', {
      view: {
        agenda: { type: 'day' },
      },
      onPageChange: function (event) {
        monthInst.navigate(event.firstDay);
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        dayInst.setEvents(events);
        monthInst.setEvents(events);
      },
      'jsonp',
    );
  },
  markup: `
<div class="mbsc-grid md-demo-synchronized-views">
    <div class="mbsc-row mbsc-no-padding">
        <div class="mbsc-col-md-4 mbsc-col-12">
            <div id="demo-month"></div>
        </div>
        <div class="mbsc-col-md-8 mbsc-col-12 md-col-right">
            <div id="demo-day"></div>
        </div>
    </div>
</div>
  `,
  css: `
.md-sync-views {
    display: flex;
}

.md-sync-cal {
    width: 350px;
}

.md-sync-list {
    flex: 1;
    border-left: 1px solid #ccc;
}

.demo-synchronized-views,
.md-sync-views,
.md-sync-list {
    height: 100%;
}

@media screen and (max-width: 700px) {
    .md-sync-views {
        display: block;
    }
    .md-sync-cal {
        width: auto;
    }
}
  `,
};
