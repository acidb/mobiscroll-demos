import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var timer;

      var myEvents = [
        {
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d+3,18)',
          title: 'Test event 1',
          color: '#ff6d42',
        },
        {
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d+1,21)',
          title: 'Test event 2',
          color: '#7bde83',
        },
        {
          start: 'dyndatetime(y,m,d+7,13)',
          end: 'dyndatetime(y,m,d+8,21)',
          title: 'Test event 3',
          color: '#7bde83',
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,9)',
          title: 'Test event 4',
          color: '#913aa7',
        },
        {
          start: 'dyndatetime(y,m,d+1,7)',
          end: 'dyndatetime(y,m,d+1,8)',
          title: 'Test event 5',
          color: '#6e7f29',
        },
        {
          start: 'dyndatetime(y,m,d-1,8,45)',
          end: 'dyndatetime(y,m,d-1,10)',
          title: 'Test event 6',
          color: '#de3d83',
        },
        {
          start: 'dyndatetime(y,m,8,9,30)',
          end: 'dyndatetime(y,m,8,10,30)',
          title: 'Test event 7',
          color: '#f67944',
        },
        {
          start: 'dyndatetime(y,m,8,11,0)',
          end: 'dyndatetime(y,m,8,11,45)',
          title: 'Test event 8',
          color: '#a144f6',
        },
        {
          start: 'dyndatetime(y,m,8,13,0)',
          end: 'dyndatetime(y,m,8,13,45)',
          title: 'Test event 9',
          color: '#00aabb',
        },
        {
          start: 'dyndatetime(y,m,8,15,0)',
          end: 'dyndatetime(y,m,8,16,0)',
          title: 'Test event 10',
          color: '#a71111',
        },
      ];

      var list = $('#demo-search-results')
        .mobiscroll()
        .eventcalendar({
          view: {
            agenda: { type: 'year', size: 5 },
          },
          refDate: new Date(),
          showControls: false,
          onEventClick: function (args) {
            calendar.navigateToEvent(args.event);
            calendar.setSelectedEvents([args.event]);
            popup.close();
          },
        })
        .mobiscroll('getInst');

      var calendar = $('#demo-search-events')
        .mobiscroll()
        .eventcalendar({
          clickToCreate: false,
          dragToCreate: false,
          dragToMove: false,
          dragToResize: false,
          selectMultipleEvents: true,
          data: myEvents,
          view: {
            calendar: { labels: true },
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
        })
        .mobiscroll('getInst');

      var $searchInput = $('#demo-search-input');

      var popup = $('#demo-search-popup')
        .mobiscroll()
        .popup({
          anchor: $searchInput[0],
          contentPadding: false,
          display: 'anchored',
          focusElm: $searchInput[0],
          focusOnClose: false,
          focusOnOpen: false,
          maxHeight: 500,
          scrollLock: false,
          showArrow: false,
          showOverlay: false,
          width: 400,
        })
        .mobiscroll('getInst');

      $searchInput.on('input', function (ev) {
        var searchText = ev.target.value;
        clearTimeout(timer);
        timer = setTimeout(function () {
          if (searchText.length > 0) {
            list.setEvents(myEvents);
            popup.open();
          } else {
            popup.close();
          }
        }, 200);
      });

      $searchInput.on('focus', function (ev) {
        if (ev.target.value.length > 0) {
          popup.open();
        }
      });
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
