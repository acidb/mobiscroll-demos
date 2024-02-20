import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var myCalendar = mobiscroll.eventcalendar('#external-drop-calendar', {
      view: {
        schedule: { type: 'week' },
      },
      dragToMove: true,
      dragToCreate: true,
      externalDrop: true,
      externalDrag: true,
      onEventCreate: function (args) {
        var elm = document.getElementById('md-event-' + args.event.id);
        if (elm) {
          elm.remove();
        }
        mobiscroll.toast({
          message: args.event.title + ' added',
        });
      },
      onEventDelete: function (args) {
        mobiscroll.toast({
          message: args.event.title + ' unscheduled',
        });
      },
    });

    mobiscroll.dropcontainer('#external-drop-cont', {
      onItemDrop: function (args) {
        if (args.data) {
          var event = args.data;
          var eventLength = Math.abs(new Date(event.end) - new Date(event.start)) / (60 * 60 * 1000);
          var elm = document.createElement('div');

          elm.setAttribute('id', 'md-event-' + event.id);
          elm.classList.add('external-drop-task');
          elm.style.background = event.color;
          elm.innerHTML = '<div>' + event.title + '</div><div>' + eventLength + ' hour' + (eventLength > 1 ? 's' : '') + '</div>';

          document.getElementById('task-cont').appendChild(elm);

          mobiscroll.draggable('#md-event-' + event.id, {
            dragData: event,
          });
        }
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/drag-drop-events/',
      function (events) {
        myCalendar.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
        <div class="mbsc-col-sm-9 external-drop-calendar">
            <div id="external-drop-calendar"></div>
        </div>
        <div id="external-drop-cont" class="mbsc-col-sm-3 external-drop-cont">
            <div class="mbsc-form-group-title">Available tasks</div>
            <div id="task-cont">
                <div id="md-event-1" mbsc-draggable data-drag-data='{"id":"1","title":"Product team meeting","start":"08:00","end":"09:30","color":"#cf4343"}' class="external-drop-task" style="background: #cf4343;">
                    <div>Product team meeting</div>
                    <div>1.5 hours</div>
                </div>

                <div id="md-event-2" mbsc-draggable data-drag-data='{"id":"2","title":"General orientation","start":"08:00","end":"10:00","color":"#e49516"}' class="external-drop-task" style="background: #e49516;">
                    <div>General orientation</div>
                    <div>2 hours</div>
                </div>

                <div id="md-event-3" mbsc-draggable data-drag-data='{"id":"3","title":"Client Training","start":"10:00","end":"14:00","color":"#8c429f"}' class="external-drop-task" style="background: #8c429f;">
                    <div>Client Training</div>
                    <div>4 hours</div>
                </div>

                <div id="md-event-4" mbsc-draggable data-drag-data='{"id":"4","title":"CEO Conference","start":"12:00","end":"18:00","color":"#63b548"}' class="external-drop-task" style="background: #63b548;">
                    <div>CEO Conference</div>
                    <div>6 hours</div>
                </div>
            </div>
        </div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.external-drop-calendar {
    border-right: 1px solid #ccc;
}

.external-drop-cont {
    height: 100%;
    overflow: auto;
}

.external-drop-task {
    color: #fff;
    padding: 10px;
    margin: 20px;
    border-radius: 8px;
    font-family: -apple-system, Segoe UI, Roboto, sans-serif;
}

.external-drop-task {
    background: #999;
}

.demo-external-drag-drop-schedule-unschedule.demo-wrapper,
.demo-external-drag-drop-schedule-unschedule .mbsc-grid,
.demo-external-drag-drop-schedule-unschedule .mbsc-row,
.demo-external-drag-drop-schedule-unschedule .external-drop-calendar {
    height: 100%;
}
  `,
};
