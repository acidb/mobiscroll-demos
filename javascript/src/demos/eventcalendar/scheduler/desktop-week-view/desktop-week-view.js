import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    var inst = mobiscroll.eventcalendar('#demo-desktop-week-view', {
      // locale,
      // theme,
      view: {
        schedule: { type: 'week' },
      },
      colors: [
        {
          title: 'Session',
          start: '09:30',
          end: '11:30',
          resource: 1,
          color: 'red',
          // cssClass: "md-session-data",
          background: 'red',
          recurring: {
            repeat: 'weekly',
            weekDays: 'TH',
          },
        },
      ],
      onCellHoverIn: (ev, inst) => {
        const cellStart = ev.date;
        const cellEnd = new Date(+ev.date + 3600000);
        const events = inst.getEvents(cellStart, cellEnd);
        const invalids = inst.getInvalids(cellStart, cellEnd);
        console.log('ev', ev);
        console.log('cc', events, invalids, inst);
      },
      onEventClick: function (event, inst) {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: event.event.title,
        });
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        inst.setEvents(events);
      },
      'jsonp',
    );
  },
  markup: `
<div id="demo-desktop-week-view" style="height: 500px;"></div>
  `,
};
