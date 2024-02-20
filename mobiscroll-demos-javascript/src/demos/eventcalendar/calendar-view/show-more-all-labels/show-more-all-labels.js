import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var allLabels = mobiscroll.eventcalendar('#demo-labels-all', {
      view: {
        calendar: { type: 'month', labels: 'all' },
      },
    });

    var nrLabels = mobiscroll.eventcalendar('#demo-labels-nr', {
      view: {
        calendar: { type: 'month', labels: 3 },
      },
    });

    var fitLabels = mobiscroll.eventcalendar('#demo-labels-fit', {
      view: {
        calendar: { type: 'month', labels: true },
      },
    });

    var allLabelsWeeks = mobiscroll.eventcalendar('#demo-labels-all-w', {
      view: {
        calendar: { type: 'week', labels: 'all' },
      },
    });

    var nrLabelsWeeks = mobiscroll.eventcalendar('#demo-labels-nr-w', {
      view: {
        calendar: { type: 'week', labels: 3 },
      },
    });

    var labelsWeeks = mobiscroll.eventcalendar('#demo-labels-fit-w', {
      view: {
        calendar: { type: 'week', labels: true },
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        fitLabels.setEvents(events);
        allLabels.setEvents(events);
        nrLabels.setEvents(events);
        labelsWeeks.setEvents(events);
        allLabelsWeeks.setEvents(events);
        nrLabelsWeeks.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid">
    <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">All labels</div>
                <div id="demo-labels-all"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Up to 3 labels</div>
                <div id="demo-labels-nr"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Labels fitting the row</div>
                <div id="demo-labels-fit"></div>
            </div>
        </div>
    </div>
    <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">All labels</div>
                <div id="demo-labels-all-w"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Up to 3 labels</div>
                <div id="demo-labels-nr-w"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Labels fitting the row</div>
                <div id="demo-labels-fit-w"></div>
            </div>
        </div>
    </div>
</div>
  `,
};
