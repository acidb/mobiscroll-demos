import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var confirmOpen;
    var firstDay;
    var lastDay;
    var selectedEvent;
    var formatDate = mobiscroll.formatDate;
    var listElm = document.createElement('ul');
    document.getElementById('selected-event-list').append(listElm);

    function getSelectedEventTitles(events) {
      var eventTitles = [];
      for (var i = 0; i < events.length; ++i) {
        eventTitles.push(events[i].title);
      }
      return eventTitles;
    }

    function deleteSelectedEvents() {
      var selectedEvents = calendar.getSelectedEvents();
      var events = selectedEvents.length == 0 && selectedEvent ? [selectedEvent] : selectedEvents;

      confirmOpen = true;

      mobiscroll.confirm({
        title: 'Are you sure you want to delete the following events?',
        message: getSelectedEventTitles(events).join(', '),
        okText: 'Delete',
        callback: function (result) {
          if (result) {
            var eventsToDelete = [];
            var eventsToUpdate = [];

            for (var i = 0; i < events.length; ++i) {
              var event = events[i];
              if (event.recurring) {
                var origEvent = event.original;
                var exc = origEvent.recurringException || [];
                exc.push(event.start);
                origEvent.recurringException = exc;
                eventsToUpdate.push(origEvent);
              } else {
                eventsToDelete.push(event);
              }
            }
            calendar.updateEvent(eventsToUpdate);
            calendar.removeEvent(eventsToDelete);
            calendar.setSelectedEvents([]);
            mobiscroll.toast({
              message: 'Deleted',
            });
          }
          confirmOpen = false;
        },
      });
    }

    function updateSelectedEvents() {
      var selectedEvents = calendar.getSelectedEvents();
      var events = selectedEvents.length == 0 && selectedEvent ? [selectedEvent] : selectedEvents;
      var eventsToUpdate = [];
      var newEvents = [];

      for (var i = 0; i < events.length; ++i) {
        var event = events[i];
        if (event.recurring) {
          var origEvent = event.original;
          var exc = origEvent.recurringException || [];
          var newEvent = event;

          newEvent.recurring = undefined;
          newEvent.color = 'orange';
          newEvent.id += '_' + formatDate('YYYY-MM-DD', event.start);
          newEvents.push(newEvent);

          exc.push(event.start);
          origEvent.recurringException = exc;
          eventsToUpdate.push(origEvent);
        } else {
          event.color = 'orange';
          eventsToUpdate.push(event);
        }
      }
      calendar.updateEvent(eventsToUpdate);
      calendar.addEvent(newEvents);
      calendar.setSelectedEvents([]);

      mobiscroll.toast({
        message: "All selected event's color changed to orange",
      });
    }

    var calendar = mobiscroll.eventcalendar('#demo-multiple-event-selection', {
      // drag,
      selectMultipleEvents: true,
      view: {
        timeline: {
          type: 'week',
        },
      },
      resources: [
        {
          id: 1,
          name: 'Ryan',
          color: '#fdf500',
        },
        {
          id: 2,
          name: 'Kate',
          color: '#ff4600',
        },
        {
          id: 3,
          name: 'John',
          color: '#ff0101',
        },
        {
          id: 4,
          name: 'Mark',
          color: '#239a21',
        },
        {
          id: 5,
          name: 'Sharon',
          color: '#8f1ed6',
        },
        {
          id: 6,
          name: 'Ashley',
          color: '#01adff',
        },
      ],
      onEventUpdate: function (args) {
        if (args.isDelete) {
          if (!confirmOpen) {
            deleteSelectedEvents();
          }
          return false;
        }
      },
      onEventDelete: function () {
        if (!confirmOpen) {
          deleteSelectedEvents();
          return false;
        }
      },
      onPageLoading: function (args) {
        firstDay = args.firstDay;
        lastDay = args.lastDay;
      },
      onEventRightClick: function (args) {
        selectedEvent = args.event;
        args.domEvent.preventDefault();
        menu.setOptions({
          anchor: args.domEvent.target,
        });
        setTimeout(function () {
          menu.open();
        });
      },
    });

    var menu = mobiscroll.select('#demo-context-menu', {
      touchUi: false,
      display: 'anchored',
      buttons: [],
      inputElement: document.getElementById('context-menu-input'),
      onChange: function (args) {
        if (args.value === 'update') {
          updateSelectedEvents();
        } else if (args.value === 'delete') {
          deleteSelectedEvents();
        }
      },
      onClose: function () {
        // Clear selection
        menu.setVal();
      },
    });

    document.getElementById('select-all-events').addEventListener('click', function () {
      calendar.setSelectedEvents(calendar.getEvents(firstDay, lastDay));
      mobiscroll.toast({
        message: 'All events selected this month',
      });
    });

    document.getElementById('reset-selection').addEventListener('click', function () {
      calendar.setSelectedEvents([]);
      mobiscroll.toast({
        message: 'Selection cleared',
      });
    });

    document.querySelector('.md-bulk-operations').addEventListener('keydown', function (ev) {
      if (!confirmOpen && (ev.keyCode === 8 || ev.keyCode === 46)) {
        deleteSelectedEvents();
      }
    });

    document.getElementById('update-selected').addEventListener('click', function () {
      updateSelectedEvents();
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      function (events) {
        calendar.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page class="md-bulk-operations">
    <div class="mbsc-grid mbsc-no-padding">
        <div class="mbsc-row">
            <div class="mbsc-col-sm-9 mbsc-push-sm-3">
                <div id="demo-multiple-event-selection" class="md-bulk-operations-border"></div>
                <input id="context-menu-input" type="hidden" />
                <select id="demo-context-menu">
                    <option value="update">Update</option>
                    <option value="delete">Delete</option>
                </select>
            </div>
            <div class="mbsc-col-sm-3 mbsc-pull-sm-9">
                <div class="mbsc-form-group">
                    <div class="mbsc-button-group-block">
                        <button id="select-all-events" mbsc-button>Select all from view</button>
                        <button id="reset-selection" mbsc-button>Reset selection</button>
                        <button id="update-selected" mbsc-button>Update selected</button>
                    </div>
                </div>
                <div class="mbsc-form-group-title">Currently selected</div>
                <div id="selected-event-list" class="mbsc-padding md-selected-event-list"></div>
            </div>
        </div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-bulk-operations-border {
    border-left: 1px solid #ccc;
}

.md-selected-event-list {
    height: 500px;
    overflow: auto;
    padding-top: 0;
    padding-bottom: 0;
}
  `,
};
