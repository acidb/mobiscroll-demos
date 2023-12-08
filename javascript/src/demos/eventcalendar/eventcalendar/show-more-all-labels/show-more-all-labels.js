import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var allLabels, nrLabels, fitLabels;
    var allLabelsWeeks, nrLabelsWeek, labelsWeeks;

    allLabels = mobiscroll.eventcalendar('#demo-labels-all', {
      view: {
        calendar: { type: 'month', labels: 'all' },
      },
    });

    nrLabels = mobiscroll.eventcalendar('#demo-labels-nr', {
      view: {
        calendar: { type: 'month', labels: 3 },
      },
    });

    fitLabels = mobiscroll.eventcalendar('#demo-labels-fit', {
      view: {
        calendar: { type: 'month', labels: true },
      },
    });

    allLabelsWeeks = mobiscroll.eventcalendar('#demo-labels-all-w', {
      view: {
        calendar: { type: 'week', labels: 'all' },
      },
    });

    nrLabelsWeeks = mobiscroll.eventcalendar('#demo-labels-nr-w', {
      view: {
        calendar: { type: 'week', labels: 3 },
      },
    });

    labelsWeek = mobiscroll.eventcalendar('#demo-labels-fit-w', {
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
        labelsWeek.setEvents(events);
        allLabelsWeeks.setEvents(events);
        nrLabelsWeeks.setEvents(events);
      },
      'jsonp',
    );
  },
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
