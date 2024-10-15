import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var timer;

    var list = mobiscroll.eventcalendar('#demo-search-results', {
      view: {
        agenda: { type: 'year', size: 5 },
      },
      showControls: false,
      onEventClick: function (args) {
        calendar.navigateToEvent(args.event);
        calendar.setSelectedEvents([args.event]);
        popup.close();
      },
    });

    var calendar = mobiscroll.eventcalendar('#demo-search-events', {
      selectMultipleEvents: true,
      view: {
        agenda: { type: 'month' },
      },
      renderHeader: function () {
        return (
          '<div mbsc-calendar-nav></div>' +
          '<div class="mds-search-bar mbsc-flex-1-0">' +
          '<label>' +
          '<input id="demo-search-input" mbsc-input autocomplete="off" data-start-icon="material-search" data-input-style="box" placeholder="Search events" />' +
          '</label>' +
          '</div>' +
          '<button mbsc-calendar-prev></button>' +
          '<button mbsc-calendar-today></button>' +
          '<button mbsc-calendar-next></button>'
        );
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

    var searchInput = document.getElementById('demo-search-input');

    var popup = mobiscroll.popup('#demo-search-popup', {
      anchor: searchInput,
      contentPadding: false,
      display: 'anchored',
      focusElm: searchInput,
      focusOnClose: false,
      focusOnOpen: false,
      maxHeight: 500,
      scrollLock: false,
      showArrow: false,
      showOverlay: false,
      width: 400,
    });

    searchInput.addEventListener('input', function (ev) {
      var searchText = ev.target.value;
      clearTimeout(timer);
      timer = setTimeout(function () {
        if (searchText.length > 0) {
          mobiscroll.getJson(
            'https://trial.mobiscroll.com/searchevents/?text=' + searchText,
            function (data) {
              list.setEvents(data);
              popup.open();
            },
            'jsonp',
          );
        } else {
          popup.close();
        }
      }, 200);
    });

    searchInput.addEventListener('focus', function (ev) {
      if (ev.target.value.length > 0) {
        popup.open();
      }
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-search-events"></div>
<div id="demo-search-popup">
  <div>
    <div id="demo-search-results" class="mds-search-results"></div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-search-bar .mbsc-textfield-wrapper {
  max-width: 400px;
  margin: 8px auto;
}

.mds-search-bar .mbsc-textfield.mbsc-ios-dark {
  background: #313131;
}

.mds-search-results .mbsc-calendar-wrapper {
  margin-top: -1px;
}
  `,
};
