import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var selected = [1];
    var events = [];
    var calendar = mobiscroll.eventcalendar('#demo-header-functionality', {
      // context,
      view: {
        schedule: {
          type: 'week',
        },
      },
      renderHeader: function () {
        return (
          '<div mbsc-calendar-nav class="md-header-filter-nav"></div>' +
          '<div class="md-header-filter-controls">' +
          '<label>' +
          '<img class="md-header-filter-img" src="https://img.mobiscroll.com/demos/m1.png"/>' +
          '<span class="md-header-filter-name md-header-filter-name-1">Barry</span>' +
          '<input type="checkbox" mbsc-segmented name="participant" class="md-header-filter" value=1 checked>' +
          '</label>' +
          '<label>' +
          '<img class="md-header-filter-img" src="https://img.mobiscroll.com/demos/f1.png"/>' +
          '<span class="md-header-filter-name md-header-filter-name-2">Hortense</span>' +
          '<input type="checkbox" mbsc-segmented name="participant" class="md-header-filter" value=2>' +
          '</label>' +
          '<label>' +
          '<img class="md-header-filter-img" src="https://img.mobiscroll.com/demos/m2.png"/>' +
          '<span class="md-header-filter-name md-header-filter-name-3">Carl</span>' +
          '<input type="checkbox" mbsc-segmented name="participant" class="md-header-filter" value=3>' +
          '</label>' +
          '</div>' +
          '<div mbsc-calendar-prev class="md-header-filter-prev"></div>' +
          '<div mbsc-calendar-today class="md-header-filter-today"></div>' +
          '<div mbsc-calendar-next class="md-header-filter-next"></div>'
        );
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/custom-events/',
      function (arr) {
        filterEvents(arr, selected);
        events = arr;
      },
      'jsonp',
    );

    function filterEvents(events, selected) {
      var ev = [];
      for (var i = 0; i < events.length; ++i) {
        var item = events[i];
        if (selected.indexOf(item.participant) > -1) {
          if (item.participant == 1) {
            item.color = '#328e39';
          } else if (item.participant == 2) {
            item.color = '#00aabb';
          } else if (item.participant == 3) {
            item.color = '#ea72c0';
          }
          ev.push(item);
        }
      }

      calendar.setEvents(ev);
    }

    document.querySelectorAll('.md-header-filter').forEach(function (elm) {
      elm.addEventListener('change', function (ev) {
        var selected = [];
        var checkboxes = document.querySelectorAll('.md-header-filter:checked');

        for (var i = 0; i < checkboxes.length; i++) {
          selected.push(parseInt(checkboxes[i].value));
        }

        filterEvents(events, selected);

        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message:
            (ev.target.checked ? 'Showing ' : 'Hiding ') +
            document.getElementsByClassName('md-header-filter-name-' + ev.target.value)[0].textContent +
            ' events',
        });
      });
    });
  },
  markup: `
<div id="demo-header-functionality" class="md-custom-header-filtering"></div>
  `,
  css: `
.md-header-filter-controls {
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
}

.md-custom-header-filtering .mbsc-segmented {
    max-width: 400px;
    margin: 0 auto;
    flex: 1 0 auto;
}

.md-header-filter-img {
    width: 25px;
}

.md-header-filter-name {
    margin-left: 10px;
}

.md-header-filter-nav {
    width: 200px;
}

.md-header-filter-controls .mbsc-segmented-button.mbsc-selected {
    color: #fff;
}

.md-custom-header-filtering .mbsc-segmented-item:first-child .mbsc-selected.mbsc-material,
.md-custom-header-filtering .mbsc-segmented-item:first-child .mbsc-selected.mbsc-windows,
.md-custom-header-filtering .mbsc-segmented-item:first-child .mbsc-segmented-selectbox-inner {
    background: #328e39;
}

.md-custom-header-filtering .mbsc-segmented-item:nth-child(2) .mbsc-selected.mbsc-material,
.md-custom-header-filtering .mbsc-segmented-item:nth-child(2) .mbsc-selected.mbsc-windows,
.md-custom-header-filtering .mbsc-segmented-item:nth-child(2) .mbsc-segmented-selectbox-inner {
    background: #00aabb;
}

.md-custom-header-filtering .mbsc-segmented-item:nth-child(3) .mbsc-selected.mbsc-material,
.md-custom-header-filtering .mbsc-segmented-item:nth-child(3) .mbsc-selected.mbsc-windows,
.md-custom-header-filtering .mbsc-segmented-item:nth-child(3) .mbsc-segmented-selectbox-inner {
    background: #ea72c0;
}
  `,
};
