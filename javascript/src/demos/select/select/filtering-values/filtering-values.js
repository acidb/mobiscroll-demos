import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var names = [
      {
        text: 'Abigail Hodges',
        value: 1,
      },
      {
        text: 'Adam Robertson',
        value: 2,
      },
      {
        text: 'Blake Nolan',
        value: 3,
      },
      {
        text: 'Dylan Manning',
        value: 4,
      },
      {
        text: 'Jane Clarkson',
        value: 5,
      },
      {
        text: 'Julian Parr',
        value: 6,
      },
      {
        text: 'Lily Blake',
        value: 7,
      },
      {
        text: 'Luke Wright',
        value: 8,
      },
      {
        text: 'Nathan Poole',
        value: 9,
      },
      {
        text: 'Olivia Vance',
        value: 10,
      },
      {
        text: 'Paul Hudson',
        value: 11,
      },
      {
        text: 'Rose Taylor',
        value: 12,
      },
      {
        text: 'Samantha Martin',
        value: 13,
      },
      {
        text: 'Steven Cameron',
        value: 14,
      },
      {
        text: 'Wanda Mills',
        value: 15,
      },
    ];
    myData = [];

    mobiscroll.select('#demo-local-data', {
      display: 'anchored',
      data: names,
      filter: true,
    });

    var inst = mobiscroll.select('#demo-remote-data', {
      display: 'anchored',
      filter: true,
      data: [],
      onFilter: function (ev) {
        remoteFiltering(ev.filterText);
        return false;
      },
    });

    function remoteFiltering(filterText) {
      mobiscroll.getJson(
        'https://trial.mobiscroll.com/airports/' + encodeURIComponent(filterText),
        function (data) {
          var item;
          var airports = [];

          for (var i = 0; i < data.length; i++) {
            item = data[i];
            airports.push({ text: item.name, value: item.code });
          }

          inst.setOptions({ data: airports });
        },
        'jsonp',
      );
    }

    remoteFiltering('');
  },
  markup: `
<div class="mbsc-grid mbsc-form-grid">
    <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-6">
            <label>
                Local data
                <input mbsc-input id="demo-local-data" data-dropdown="true" data-input-style="box" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-6">
            <label>
                Remote data
                <input mbsc-input id="demo-remote-data" data-dropdown="true" data-input-style="box" data-label-style="stacked" placeholder="Please select..."></select>
            </label>
        </div>
    </div>
</div>
  `,
};
