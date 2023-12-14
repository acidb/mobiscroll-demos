import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var timer;
    var searchList = document.getElementById('demo-search-sidebar-list');

    var list = mobiscroll.eventcalendar('#demo-search-sidebar-list', {
      view: {
        agenda: {
          type: 'year',
          size: 5,
        },
      },
      showControls: false,
      onEventClick: function (args) {
        calendar.navigate(args.event.start);
        calendar.setSelectedEvents([args.event]);
      },
    });

    var calendar = mobiscroll.eventcalendar('#demo-search-sidebar-events', {
      clickToCreate: false,
      dragToCreate: false,
      dragToMove: false,
      dragToResize: false,
      selectMultipleEvents: true,
      view: {
        calendar: {
          labels: true,
        },
      },
      onPageLoading: function (args, inst) {
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

    searchList.style.display = 'none';

    document.getElementById('md-search-sidebar-demo-input').addEventListener('input', function (ev) {
      var text = ev.target.value;
      clearTimeout(timer);
      timer = setTimeout(function () {
        if (text.length > 0) {
          mobiscroll.getJson(
            'https://trial.mobiscroll.com/searchevents/?text=' + text,
            function (data) {
              list.setEvents(data);
              searchList.style.display = 'block';
            },
            'jsonp',
          );
        } else {
          searchList.style.display = 'none';
        }
      }, 200);
    });
  },
  markup: `
<div class="md-search-events-sidebar mbsc-flex">
    <div class="md-search-events-cont mbsc-flex-col mbsc-flex-none">
        <label>
            <input id="md-search-sidebar-demo-input" mbsc-input data-start-icon="material-search" data-input-style="outline" placeholder="Search events"></input>
        </label>
        <div id="demo-search-sidebar-list"></div>
    </div>
    <div class="md-search-events-calendar mbsc-flex-1-1">
        <div id="demo-search-sidebar-events"></div>
    </div>
</div>
  `,
  css: `
.md-search-events-cont {
    width: 350px;
}

.md-search-events-cont .mbsc-textfield-wrapper.mbsc-ios {
    margin-top: 8px;
    margin-bottom: 9px;
}

.md-search-events-cont .mbsc-textfield-wrapper.mbsc-material {
    margin-top: 15px;
    margin-bottom: 15px;
}

.md-search-events-cont .mbsc-textfield-wrapper.mbsc-windows {
    margin-top: 28px;
    margin-bottom: 29px;
}

@media (min-width:1135px) {
    .md-search-events-cont .mbsc-textfield-wrapper.mbsc-ios {
        margin-top: 20px;
        margin-bottom: 20px;
    }
}

.md-search-events-calendar {
    border-left: 1px solid #ccc;
}

.demo-searching-events-in-sidebar,
.md-search-events-sidebar,
.md-search-events-calendar {
    height: 100%;
}
  `,
};
