import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var formatDate = mobiscroll.util.datetime.formatDate;
    var startDate, endDate;
    var tempStart, tempEnd;

    var myCalendar = mobiscroll.eventcalendar('#demo-custom-range-view', {
      view: {
        schedule: {
          type: 'day',
          size: 14,
        },
      },
      renderHeader: function () {
        return (
          '<div id="custom-date-range"><button mbsc-button data-variant="flat" class="mbsc-calendar-button">' +
          '<span id="custom-date-range-text" class="mbsc-calendar-title">Button' +
          '</span></button></div>' +
          '<div class="md-custom-range-view-controls">' +
          '<div mbsc-calendar-prev></div>' +
          '<div mbsc-calendar-today></div>' +
          '<div mbsc-calendar-next></div>' +
          '</div>'
        );
      },
      onPageLoaded: function (args) {
        startDate = args.firstDay;
        end = args.lastDay;
        endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1, 0);
        // set button text
        rangeButton.innerText = getFormattedRange(startDate, endDate);
        // set range value
        myRange.setVal([startDate, endDate]);
      },
    });

    var myRange = mobiscroll.datepicker('#custom-date-range', {
      select: 'range',
      display: 'anchored',
      showOverlay: false,
      touchUi: true,
      buttons: [],
      onClose: function (args, inst) {
        var date = inst.getVal();
        if (date[0] && date[1]) {
          if (date[0].getTime() !== startDate.getTime()) {
            // navigate the calendar
            myCalendar.navigate(date[0]);
          }
          startDate = date[0];
          endDate = date[1];
          // set calendar view
          myCalendar.setOptions({
            refDate: startDate,
            view: {
              schedule: {
                type: 'day',
                size: getNrDays(startDate, endDate),
              },
            },
          });
        } else {
          myRange.setVal([startDate, endDate]);
        }
      },
    });

    var rangeButton = document.getElementById('custom-date-range-text');

    // returns the formatted date
    function getFormattedRange(start, end) {
      return (
        formatDate('MMM D, YYYY', new Date(start)) +
        (end && getNrDays(start, end) > 1 ? ' - ' + formatDate('MMM D, YYYY', new Date(end)) : '')
      );
    }

    // returns the number of days between two dates
    function getNrDays(start, end) {
      return Math.round(Math.abs((end.setHours(0) - start.setHours(0)) / (24 * 60 * 60 * 1000))) + 1;
    }

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        myCalendar.setEvents(events);
      },
      'jsonp',
    );
  },
  markup: `
<div id="demo-custom-range-view"></div>
  `,
  css: `
.md-custom-range-view-controls {
    display: flex;
    flex: 1 0 auto;
    justify-content: end;
    align-items: center;
}

.mbsc-material .mbsc-calendar-title {
    font-size: 1.428572em;
    font-weight: 400;
    text-transform: none;
    line-height: 1.4em;
}
  `,
};
