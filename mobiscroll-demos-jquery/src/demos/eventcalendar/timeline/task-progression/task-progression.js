import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({});

    $(function () {
      var eventId;
      var eventTitle;
      var eventStart;
      var eventEnd;
      var eventProgress = 2;
      var isDraggingDot = false;

      var $eventProgress = $('#popup-progress-slider');
      var $eventTitle = $('#popup-event-title');
      var $eventDeleteButton = $('#popup-event-delete');

      var myEvents = [
        {
          start: '2024-05-02',
          end: '2024-05-07',
          title: 'Design Homepage',
          resource: 'alice',
          progress: 50,
        },
        {
          start: '2024-05-09',
          end: '2024-05-1',
          title: 'Create Wireframes',
          resource: 'bob',
          progress: 35,
        },
        {
          start: '2024-05-11',
          end: '2024-05-19',
          title: 'Develop Frontend',
          resource: 'charlie',
          progress: 45,
        },
        {
          start: '2024-05-13',
          end: '2024-05-17',
          title: 'Develop Backend',
          resource: 'dave',
          progress: 19,
        },
        {
          start: '2024-05-11',
          end: '2024-05-14',
          title: 'Test Website',
          resource: 'erin',
          progress: 92,
        },
        {
          start: '2024-05-08',
          end: '2024-05-15',
          title: 'Fix Bugs',
          resource: 'frank',
          progress: 88,
        },
        {
          start: '2024-05-16',
          end: '2024-05-20',
          title: 'Deploy Website',
          resource: 'george',
          progress: 60,
        },
      ];

      var myResources = [
        {
          id: 'alice',
          name: 'Alice - Designer',
          color: '#1dab2f',
        },
        {
          id: 'bob',
          name: 'Bob - Designer',
          color: '#76e083',
        },
        {
          id: 'charlie',
          name: 'Charlie - Frontend Developer',
          color: '#4981d6',
        },
        {
          id: 'gro1',
          name: 'Development Team',
          color: '#ff1717',
          eventCreation: false,
          children: [
            {
              id: 'dave',
              name: 'Dave - Backend Developer',
              color: '#f7961e',
            },
            {
              id: 'frank',
              name: 'Frank - Full-Stack Developer',
              color: '#34c8e0',
            },
          ],
        },
        {
          id: 'gro2',
          name: 'Support Team',
          collapsed: true,
          eventCreation: false,
          children: [
            {
              id: 'erin',
              name: 'Erin - QA Tester',
              color: '#d6d145',
            },
            {
              id: 'george',
              name: 'George - DevOps Engineer',
              color: '#e25dd2',
            },
          ],
        },
      ];

      function renderEvent(data) {
        var event = data.original;
        var color = data.color;
        var progress = event.progress || 0;

        return (
          '<div class="event-container" style="border-color:' +
          color +
          '; background:' +
          color +
          ';">' +
          '<div class="event-padding">' +
          '<span class="event-title">' +
          event.title +
          '</span>' +
          '</div>' +
          '<div class="progress-bar-overlay" style="width:' +
          progress +
          '%;">' +
          '<div class="progress-dot" data-event-id="' +
          event.id +
          '"></div>' +
          '</div>' +
          '<span class="progress-percentage real-time-progress" >' +
          progress +
          '%</span>' +
          '</div>'
        );
      }

      var calendar = $('#demo-task-progression')
        .mobiscroll()
        .eventcalendar({
          dragToMove: true,
          dragToResize: true,
          eventList: true,
          //   timeCellStep: 1440,
          //   timeLabelsStep: 1440,
          view: { timeline: { type: 'month' } },
          data: myEvents,
          resources: myResources,
          onEventClick: function (args) {
            if (!isDraggingDot) {
              createEditPopup(args.event, args.domEvent.currentTarget);
            } else {
              // to clean this flag
              isDraggingDot = false;
              args.event.progress = eventProgress;
            }
          },
          onEventCreate: function (args) {
            createAddPopup(args.event, args.target);
          },
          renderScheduleEvent: renderEvent,
        })
        .mobiscroll('getInst');

      var eventStartEndPicker = $('#popup-event-dates')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          select: 'range',
          startInput: '#popup-event-start',
          endInput: '#popup-event-end',
          showRangeLabels: false,
          touchUi: true,
          responsive: { medium: { touchUi: false } },
        })
        .mobiscroll('getInst');

      var addEditPopup = $('#demo-add-edit-popup')
        .mobiscroll()
        .popup({
          display: 'bottom',
          contentPadding: false,
          fullScreen: true,
          scrollLock: false,
          height: 500,
          responsive: {
            medium: {
              display: 'anchored',
              width: 510,
              fullScreen: false,
              touchUi: false,
            },
          },
        })
        .mobiscroll('getInst');

      function createAddPopup(event, target) {
        addEditPopup.setOptions({
          anchor: target,
          headerText: 'New event',
          buttons: [
            'cancel',
            {
              text: 'Add',
              keyCode: 'enter',
              handler: function () {
                var newEvent = {
                  id: eventId,
                  title: eventTitle,
                  start: eventStart,
                  end: eventEnd,
                  resource: event.resource,
                  progress: eventProgress,
                };
                calendar.addEvent(newEvent);
                addEditPopup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
        });

        fillPopup(event);
        addEditPopup.open();
      }

      function createEditPopup(event, target) {
        $eventDeleteButton.parent().show();
        eventId = event.id;
        eventTitle = event.title || '';
        eventStart = event.start;
        eventEnd = event.end;

        $('#progress-percentage').text(event.progress + ' %');
        $('#popup-progress-slider').val(event.progress);

        addEditPopup.setOptions({
          headerText: 'Edit event',
          anchor: target,
          buttons: [
            'cancel',
            {
              text: 'Save',
              keyCode: 'enter',
              handler: function () {
                var updatedEvent = {
                  id: eventId,
                  title: eventTitle,
                  start: eventStart,
                  end: eventEnd,
                  resource: event.resource,
                  progress: eventProgress,
                };
                calendar.updateEvent(updatedEvent);
                addEditPopup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
        });

        fillPopup(event);
        addEditPopup.open();
      }

      function fillPopup(event) {
        $eventTitle.mobiscroll('getInst').value = event.title || '';
        $eventProgress.mobiscroll('getInst').value = event.progress || 0;
        eventStartEndPicker.setVal([event.start, event.end]);
      }

      $('#popup-progress-slider').on('input', function () {
        var sliderValue = $(this).val();
        $('#progress-percentage').text(sliderValue + ' %');
        eventProgress = sliderValue;
      });

      // test
      // ! dot dragging not working after the event drag or popup

      $('.progress-dot').on('mousedown', function (event) {
        event.stopPropagation();

        var dot = $(this);
        var parent = dot.closest('.progress-bar-overlay');
        var startX = event.pageX;
        var initialProgress = (parseInt(parent.css('width'), 10) / parent.parent().width()) * 100;

        function onMouseMove(e) {
          var dx = e.pageX - startX;
          var newProgress = initialProgress + (dx / parent.parent().width()) * 100;
          newProgress = Math.max(0, Math.min(100, newProgress));
          parent.css('width', newProgress + '%');

          eventProgress = Math.floor(newProgress);
          dot
            .closest('.event-container')
            .find('.real-time-progress')
            .text(newProgress.toFixed(0) + '%');
        }

        // stop dragging
        function onMouseUp() {
          $(document).off('mousemove', onMouseMove);
          $(document).off('mouseup', onMouseUp);
          // flag to prevent popup after drag -> need to clean this
          isDraggingDot = true;
        }
        $(document).on('mousemove', onMouseMove);
        $(document).on('mouseup', onMouseUp);
      });

      // end test

      $eventTitle.on('input', function () {
        eventTitle = this.value;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
  <div id="demo-task-progression"></div>
  <div style="display: none;">
    <div id="demo-add-edit-popup">
      <div class="mbsc-form-group">
        <label>Title
          <input mbsc-input id="popup-event-title" />
        </label>
      </div>
      <div class="mbsc-form-group">
        <label>
          <input mbsc-input data-label="Starts" id="popup-event-start" />
        </label>
        <label>
          <input mbsc-input data-label="Ends" id="popup-event-end" />
        </label>
        <br>
        <div class="mbsc-progress-container">
          <label style='padding-left: 15px;'>Progress</label>
          <input id="popup-progress-slider" mbsc-slider type="range" min="0" max="100" />
          <span id="progress-percentage">0%</span> 
        </div>
        <div id="popup-event-dates"></div>
      </div>
    </div>
  </div>
  
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mbsc-progress-container {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-right: 10px;
}

#popup-progress-slider {
    flex-grow: 1;
   
}
#progress-percentage {
    margin-left: 10px;
}
.event-container {
    border-radius: 5px;
    position: relative;
}

.event-padding {
    padding: 5px;
}

.event-title {
    color: black;
    font-weight: normal;
}

.progress-bar-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
}

.progress-dot {
    position: absolute;
    right: 0px;
    top: 100%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent white transparent;
    cursor: ew-resize;
}

.progress-percentage {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    padding-right: 5px;
    color: black;
    font-weight: bold;
}

.real-time-progress {
    position: absolute;
    bottom: 0; 
    right: 0; 
    padding-right: 5px;
    color: black;
    font-weight: bold;
}
  `,
};
