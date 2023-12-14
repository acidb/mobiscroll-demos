import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var dateInstance = mobiscroll.datepicker('#demo-date', {
        controls: ['calendar'],
        select: 'range',
        onChange: function (event, inst) {
          updateValue('returnVal', inst);
          returnMoment;
        },
      }),
      isoInstance = mobiscroll.datepicker('#demo-iso', {
        controls: ['calendar'],
        select: 'range',
        returnFormat: 'iso8601',
        onChange: function (event, inst) {
          updateValue('returnISO', inst);
        },
      }),
      momentInstance = mobiscroll.datepicker('#demo-moment', {
        controls: ['calendar'],
        select: 'range',
        returnFormat: 'moment',
        onChange: function (event, inst) {
          updateValue('returnMoment', inst);
        },
      });

    document.getElementById('setDate').addEventListener(
      'click',
      function () {
        dateInstance.setVal([new Date(2020, 10, 15), new Date(2020, 10, 21)], true);
        updateValue('returnVal', dateInstance);
      },
      false,
    );

    document.getElementById('setISO').addEventListener(
      'click',
      function () {
        isoInstance.setVal(['2020-05-20', '2020-05-26'], true);
        updateValue('returnISO', isoInstance);
      },
      false,
    );

    document.getElementById('setMoment').addEventListener(
      'click',
      function () {
        // make sure that moment js is loaded
        momentInstance.setVal([moment([2020, 2, 6]), moment([2020, 2, 12])], true);
        updateValue('returnMoment', momentInstance);
      },
      false,
    );

    function updateValue(id, inst) {
      setTimeout(function () {
        if (id == 'returnMoment') {
          var value = inst.getVal();
          document.getElementById(id).innerHTML = value[0].format() + ' - ' + value[1].format();
        } else {
          document.getElementById(id).innerHTML = inst.getVal();
        }
      });
    }
  },
  markup: `
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Working with Js Date Objects</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="setDate">Set: Sun Nov 15 2020 - Sat Nov 21 2020</button>
    </div>
    <label>
        Date object
        <input mbsc-input id="demo-date" />
    </label>
</div>
<div class="mbsc-padding">
    Return value: <text id="returnVal"></text>
</div>

<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Working with Date strings</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="setISO">Set: 2020-05-20 - 2020-05-26</button>
    </div>
    <label>
        ISO string
        <input mbsc-input id="demo-iso" />
    </label>
</div>
<div class="mbsc-padding">
    Return value: <text id="returnISO"></text>
</div>

<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Working with Moment JS Objects</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="setMoment">Set: 2020-03-06 - 2020-03-12</button>
    </div>
    <label>
        Moment JS
        <input mbsc-input id="demo-moment" />
    </label>
</div>
<div class="mbsc-padding">
    Return value: <text id="returnMoment"></text>
</div>
  `,
};
