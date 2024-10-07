import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var timer;
    var searchResults = document.getElementById('demo-search-results');

    var list = mobiscroll.eventcalendar('#demo-search-results', {
      view: {
        agenda: { type: 'year', size: 5 },
      },
      showControls: false,
      onEventClick: function (args) {
        calendar.navigateToEvent(args.event);
        calendar.setSelectedEvents([args.event]);
      },
    });

    var calendar = mobiscroll.eventcalendar('#demo-search-events', {
      clickToCreate: false,
      dragToCreate: false,
      dragToMove: false,
      dragToResize: false,
      selectMultipleEvents: true,
      view: {
        calendar: { labels: true },
      },
      onPageLoading: function (args) {
        var start = mobiscroll.formatDate('YYYY-MM-DD', args.viewStart);
        var end = mobiscroll.formatDate('YYYY-MM-DD', args.viewEnd);

        mobiscroll.getJson(
          'https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end,
          function (data) {
            calendar.setEvents(data);
          },
          'jsonp',
        );
      },
    });

    searchResults.style.visibility = 'hidden';

    document.getElementById('demo-search-input').addEventListener('input', function (ev) {
      var searchText = ev.target.value;
      clearTimeout(timer);
      timer = setTimeout(function () {
        if (searchText.length > 0) {
          mobiscroll.getJson(
            'https://trial.mobiscroll.com/searchevents/?text=' + searchText,
            function (data) {
              list.setEvents(data);
              searchResults.style.visibility = 'visible';
            },
            'jsonp',
          );
        } else {
          searchResults.style.visibility = 'hidden';
        }
      }, 200);
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page class="mds-full-height">
  <div class="mds-full-height mbsc-flex">
    <div class="mds-search-sidebar mbsc-flex-col mbsc-flex-none">
      <label>
        <input id="demo-search-input" mbsc-input autocomplete="off" data-start-icon="material-search" data-input-style="outline" placeholder="Search events"></input>
      </label>
      <div id="demo-search-results"></div>
    </div>
    <div class="mds-search-calendar mbsc-flex-1-1">
      <div id="demo-search-events"></div>
    </div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-full-height {
  height: 100%;
}

.mds-search-calendar {
  border-left: 1px solid #ccc;
  overflow: hidden;
}

.mds-search-sidebar {
  width: 350px;
}

.mds-search-sidebar .mbsc-textfield-wrapper.mbsc-ios {
  margin-top: 27px;
  margin-bottom: 26px;
}

.mds-search-sidebar .mbsc-textfield-wrapper.mbsc-material {
  margin-top: 26px;
  margin-bottom: 26px;
}

.mds-search-sidebar .mbsc-textfield-wrapper.mbsc-windows {
  margin-top: 35px;
  margin-bottom: 35px;
}

@media (min-width: 1135px) {
  .mds-search-sidebar .mbsc-textfield-wrapper.mbsc-windows {
    margin-top: 40px;
    margin-bottom: 40px;
  }
}
  `,
};
