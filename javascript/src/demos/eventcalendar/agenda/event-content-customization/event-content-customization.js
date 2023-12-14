import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var inst = mobiscroll.eventcalendar('#demo-custom-event-content', {
      // context,
      view: {
        calendar: { type: 'week' },
        agenda: { type: 'day' },
      },
      renderEventContent: function (data) {
        return (
          '<div">' +
          data.title +
          '</div>' +
          '<div class="md-custom-event-cont">' +
          '<img class="md-custom-event-img" src="' +
          getParticipant(data.original.participant).img +
          '"/>' +
          '<div class="mbsc-custom-event-name">' +
          getParticipant(data.original.participant).name +
          '</div>' +
          '<button mbsc-button class="md-custom-event-btn" data-color="secondary" data-variant="outline">Add participant</button>' +
          '</div>'
        );
      },
      onEventClick: function (event, inst) {
        const ev = event.event.original || event.event;

        if (event.domEvent.target.classList.contains('md-custom-event-btn')) {
          mobiscroll.toast({
            //<hidden>
            // theme,//</hidden>
            // context,
            message: ev.title + ' clicked',
          });
        }
      },
    });

    function getParticipant(id) {
      switch (id) {
        case 1:
          return {
            img: 'https://img.mobiscroll.com/demos/m1.png',
            name: 'Barry L.',
          };
        case 2:
          return {
            img: 'https://img.mobiscroll.com/demos/f1.png',
            name: 'Hortense T.',
          };
        case 3:
          return {
            img: 'https://img.mobiscroll.com/demos/m2.png',
            name: 'Carl H.',
          };
      }
    }

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/custom-events/',
      function (events) {
        inst.setEvents(events);
      },
      'jsonp',
    );
  },
  markup: `
<div id="demo-custom-event-content"></div>
  `,
  css: `
.md-custom-event-img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}

.md-custom-event-cont {
    display: flex;
    align-items: center;
    padding-top: 10px;
    font-size: 13px;
}

.md-custom-event-btn,
.md-custom-event-btn.mbsc-button {
    position: absolute;
    right: 10px;
    bottom: 8px;
    line-height: 20px;
}

.md-custom-event .mbsc-material.mbsc-event-time {
    margin-top: 5px;
}

/*<hidden>*/

.demo-event-content-customization {
    height: 100%;
}

/*</hidden>*/
  `,
};
