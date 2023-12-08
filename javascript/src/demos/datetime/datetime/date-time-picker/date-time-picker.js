import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.datepicker('#demo-compact', {
      controls: ['datetime'],
    });

    mobiscroll.datepicker('#demo-expanded', {
      controls: ['date', 'time'],
      onChange: (args) => {
        console.log('here', args, args.value === null);
        if (args.value === null) {
          const inst = args.inst;
          inst.setVal(inst._selectedTime);
        }
        // inst.setVal()
      },
    });

    mobiscroll.datepicker('#demo-date', {
      controls: ['date'],
    });

    mobiscroll.datepicker('#demo-time', {
      controls: ['time'],
    });
  },
  markup: `
<label>
    Compact date & time picker
    <input id="demo-compact" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Expanded date & time picker
    <input id="demo-expanded" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
<div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
        <div class="mbsc-col-6">
            <label>
                Date
                <input id="demo-date" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
        <div class="mbsc-col-6">
            <label>
                Time
                <input id="demo-time" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
    </div>
</div>
  `,
};
