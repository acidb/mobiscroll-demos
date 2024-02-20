import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo', {
      controls: ['date'],
    });

    mobiscroll.datepicker('#default', {
      controls: ['date'],
      defaultSelection: new Date(2020, 12, 24),
    });

    var instance = mobiscroll.datepicker('#inline', {
      controls: ['date'],
      display: 'inline',
    });

    var nowCal = mobiscroll.datepicker('#now', {
      controls: ['date'],
      buttons: [
        {
          text: 'Now',
          handler: function () {
            nowCal.setVal(new Date());
            nowCal.close();
          },
        },
        'set',
        'cancel',
      ],
    });

    var customCal = mobiscroll.datepicker('#custom', {
      controls: ['date'],
      buttons: [
        {
          text: '05 Jan 2020',
          handler: function () {
            customCal.setVal(new Date(2020, 0, 5));
            customCal.close();
          },
        },
        'set',
        'cancel',
      ],
    });

    mobiscroll.datepicker('#auto', {
      buttons: [
        {
          text: 'Close',
          handler: 'cancel',
        },
      ],
    });

    document.getElementById('today').addEventListener(
      'click',
      function () {
        instance.setVal(new Date());
      },
      false,
    );

    document.getElementById('jan').addEventListener(
      'click',
      function () {
        instance.setVal(new Date(2020, 0, 2));
      },
      false,
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Controlling the default value</div>
    <label>
        Default
        <input mbsc-input id="demo" placeholder="Please Select..." />
    </label>
    <label>
        Custom default
        <input mbsc-input id="default" placeholder="Please Select..." />
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Setting a custom value</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="jan">Set 02-01-2020</button>
        <button mbsc-button id="today">Set today</button>
    </div>
    <div id="inline"></div>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Buttons API</div>
    <label>
        Now
        <input mbsc-input id="now" placeholder="Please Select..." />
    </label>
    <label>
        Custom
        <input mbsc-input id="custom" placeholder="Please Select..." />
    </label>
    <label>
        Auto set
        <input mbsc-input id="auto" placeholder="Please Select..." />
    </label>
</div>
  `,
};
