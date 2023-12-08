import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var selectedDate = new Date();

    var myCalendar = mobiscroll.datepicker('#demo-quarter-year-view', {
      controls: ['calendar'],
      display: 'inline',
      calendarType: 'month',
      calendarSize: 3,
      showWeekNumbers: true,
      renderCalendarHeader: function () {
        return (
          '<div mbsc-calendar-nav></div>' +
          '<div class="quarter-year-header-picker">' +
          '<label><input mbsc-segmented type="radio" name="view" value="q1" class="md-quarter-year-view-change">Q1</label>' +
          '<label><input mbsc-segmented type="radio" name="view" value="q2" class="md-quarter-year-view-change">Q2</label>' +
          '<label><input mbsc-segmented type="radio" name="view" value="q3" class="md-quarter-year-view-change">Q3</label>' +
          '<label><input mbsc-segmented type="radio" name="view" value="q4" class="md-quarter-year-view-change">Q4</label>' +
          '<label><input mbsc-segmented typce="radio" name="view" value="year" class="md-quarter-year-view-change">Year</label></div>' +
          '<div mbsc-calendar-prev></div>' +
          '<div mbsc-calendar-next></div>'
        );
      },
      onPageChange: function (event, inst) {
        selectedDate = event.firstDay;
        setType(mobiscroll.getInst(document.querySelectorAll('.md-quarter-year-view-change[value="year"]')[0]).checked);
      },
    });

    function setType(yearView) {
      var type = '';
      if (yearView) {
        type = 'year';
      } else {
        var month = selectedDate.getMonth();
        if (month < 3) {
          type = 'q1';
        } else if (month < 6) {
          type = 'q2';
        } else if (month < 9) {
          type = 'q3';
        } else {
          type = 'q4';
        }
      }
      mobiscroll.getInst(document.querySelectorAll('.md-quarter-year-view-change[value=' + type + ']')[0]).checked = true;
    }

    setTimeout(function () {
      document.querySelectorAll('.md-quarter-year-view-change').forEach(function (elm) {
        elm.addEventListener('change', function (ev) {
          var year = selectedDate.getFullYear();
          var type;
          var date;

          switch (ev.target.value) {
            case 'q1':
              type = 'month';
              date = new Date(year, 0, 1);
              break;
            case 'q2':
              type = 'month';
              date = new Date(year, 3, 1);
              break;
            case 'q3':
              type = 'month';
              date = new Date(year, 6, 1);
              break;
            case 'q4':
              type = 'month';
              date = new Date(year, 9, 1);
              break;
            case 'year':
              type = 'year';
              date = new Date(year, selectedDate.getMonth(), 1);
              break;
          }
          myCalendar.setOptions({ calendarType: type });
          myCalendar.navigate(date);
        });
      });
      setType();
    }, 1000);
  },
  markup: `
<div id="demo-quarter-year-view"></div>
  `,
  css: `
.mbsc-datepicker .quarter-year-header-picker .mbsc-segmented {
    max-width: 280px;
    margin: 0 auto;
}

.quarter-year-header-picker {
    flex: 1 0 auto;
}
  `,
};
