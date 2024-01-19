import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var now = new Date(),
      curr = new Date(),
      yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1),
      startWeek = new Date(curr.setDate(curr.getDate() - curr.getDay())),
      endWeek = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6)),
      startMonth = new Date(curr.getFullYear(), curr.getMonth() - 1, 1),
      endMonth = new Date(curr.getFullYear(), curr.getMonth(), 0),
      inst = mobiscroll.datepicker('#demo', {
        controls: ['calendar'],
        select: 'range',
        display: 'inline',
        showRangeLabels: false,
      });

    document.querySelector('.md-today').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Today Selected',
      });
      inst.setVal([now, now]);
    });

    document.querySelector('.md-yesterday').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Yesterday Selected',
      });
      inst.setVal([yesterday, yesterday]);
    });

    document.querySelector('.md-week').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'This Week Selected',
      });
      inst.setVal([startWeek, endWeek]);
    });

    document.querySelector('.md-month').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Last Month Selected',
      });
      inst.setVal([startMonth, endMonth]);
    });

    document.querySelector('.md-clear').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Clear Value',
      });
      inst.setVal(null);
    });
  },
  markup: `
<div class="md-range-filter">
    <h4 class="md-header">Filter Results by</h4>
    <div class="mbsc-padding">
        <button mbsc-button class="md-today mbsc-button-block">Today</button>
        <button mbsc-button class="md-yesterday mbsc-button-block">Yesterday</button>
        <button mbsc-button class="md-week mbsc-button-block">This Week</button>
        <button mbsc-button class="md-month mbsc-button-block">Last Month</button>
        <button mbsc-button class="md-clear mbsc-button-block">Clear</button>
    </div>
    <div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Or by a custom range</div>
        <div id="demo"></div>
    </div>
</div>
  `,
  css: `
.md-range-filter .md-header {
    text-align: center;
    padding: 1em .75em 0 .75em;
    margin: 0;
}
  `,
};
