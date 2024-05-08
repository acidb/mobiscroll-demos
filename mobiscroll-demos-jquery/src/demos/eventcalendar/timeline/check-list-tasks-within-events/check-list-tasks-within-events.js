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
      var displayTasks = function (tasks) {
        var list = '';
        tasks.forEach(function (task) {
          list += '<div class="mds-check-list-tasks-li">' + task + '</div>';
        });
        return list;
      };

      var calInst = $('#demo-check-list-tasks-events')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'week',
              eventHeight: 'variable',
              eventList: true,
            },
          },
          dragToCreate: true,
          clickToCreate: true,
          dragToMove: true,
          dragToResize: true,
          extendDefaultEvent: function () {
            return {
              title: 'New Event',
              tasks: ['Default task'],
            };
          },
          renderResource: function (resource) {
            return (
              '<div class="mds-check-list-tasks-resource-name">' +
              resource.name +
              '</div>' +
              '<div class="mds-check-list-tasks-resource-description">' +
              resource.description +
              '</div>'
            );
          },
          renderScheduleEventContent: function (event) {
            return (
              '<div class="mds-check-list-tasks-title">' +
              event.title +
              '</div>' +
              '<div class="mds-check-list-tasks-subtitle">Task list</div>' +
              '<div class="mds-check-list-tasks-list">' +
              displayTasks(event.original.tasks) +
              '<div class="mds-check-list-tasks-li mds-check-list-tasks-add" id="demo-check-list-tasks-add-button">+ Add task</div>' +
              '</div>'
            );
          },
          onEventClick: function (args) {
            if (args.domEvent.srcElement.id === 'demo-check-list-tasks-add-button') {
              createEditPopup(args);
            }
          },
          resources: [
            {
              id: 1,
              name: 'Site Plumbing Squad',
              description: 'Elite construction plumbers ensuring flawless pipeline installations on every site.',
              color: '#01adff',
            },
            {
              id: 2,
              name: 'Pipeline Builders',
              description: 'Constructing fluid pathways, one precision connection at a time.',
              color: '#239a21',
            },
            {
              id: 3,
              name: 'Blueprint Plumbers',
              description: 'Turning plans into precise pipelines with expert craftsmanship.',
              color: '#ff4600',
            },
            {
              id: 4,
              name: 'Site Supply Specialists',
              description: 'Delivering essential plumbing materials promptly to construction sites',
              color: '#4981d6',
            },
            {
              id: 5,
              name: 'Infrastructure Installers',
              description: ' Building the backbone of modern plumbing systems efficiently.',
              color: '#f1e920',
            },
            {
              id: 6,
              name: 'Steel Sinks Squad',
              description: 'Installing robust sinks for industrial and commercial settings.',
              color: '#f7961e',
            },
          ],
        })
        .mobiscroll('getInst');

      function createEditPopup(args) {
        var ev = args.event;
        mobiscroll.prompt({
          title: 'Add new task to ' + ev.title,
          inputType: 'text',
          callback: function (value) {
            if (value) {
              var updatedTasks = ev.tasks.slice();
              updatedTasks.push(value);
              ev.tasks = updatedTasks;
              calInst.updateEvent(ev);
              mobiscroll.toast({
                duration: 3000,
                message: 'Tasks updated for ' + ev.title,
              });
            }
          },
        });
      }
      // TODO CHANGE trialdev to trial
      $.getJSON(
        'https://trialdev.mobiscroll.com/events-check-list-tasks/?callback=?',
        function (events) {
          calInst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-check-list-tasks-events" class="mds-check-list-tasks-events"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
  .mds-check-list-tasks-resource-name {
    padding: 15px 0 8px 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }
  .mds-check-list-tasks-resource-description {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  .mds-check-list-tasks-title {
    padding: 16px 8px 0 8px;
    white-space: normal;
    word-break: normal;
    line-height: 24px;
    font-size: 16px;
    font-weight: 700;
  }
  .mds-check-list-tasks-subtitle {
    font-weight: 600;
    font-size: 14px;
    padding: 8px 8px 0 8px;
  }
  .mds-check-list-tasks-list {
    margin: 8px 8px 16px;
    border-radius: 0.25em;
    background-color: #ffffff69;
  }
  .mds-check-list-tasks-li {
    padding: 8px;
    white-space: normal;
    font-size: 12px;
    line-height: 16px;
    color: #000;
    border-bottom: 1px solid #00000033;
    font-weight: 400;
  }
  .mds-check-list-tasks-add {
    padding-top: 4px;
    border-bottom: none;
    font-weight: 700;
  }
  .mds-check-list-tasks-add:hover {
    text-shadow: 0 0 .25px #333, 0 0 .25px #333;
  }
  .mds-check-list-tasks-events .mbsc-schedule-event-range {
    display: none;
  }
  .mds-check-list-tasks-events .mbsc-schedule-event-inner {
    width: 100%;
    height: auto;
  }
  `,
};
