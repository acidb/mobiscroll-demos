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
      var eventProgress;
      var isDraggingDot;

      var $popupSlider = $('.mds-popup-progress-slider');
      var $eventTitle = $('.mds-popup-event-title');

      var myEvents = [
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+3)',
          title: 'Design Homepage',
          resource: 'alice',
          progress: 100,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+4)',
          title: 'Create Wireframes',
          resource: 'bob',
          progress: 100,
        },
        {
          start: 'dyndatetime(y,m,d+4)',
          end: 'dyndatetime(y,m,d+9)',
          title: 'Develop Frontend',
          resource: 'charlie',
          progress: 45,
        },
        {
          start: 'dyndatetime(y,m,d+4)',
          end: 'dyndatetime(y,m,d+9)',
          title: 'Develop Backend',
          resource: 'dave',
          progress: 35,
        },
        {
          start: 'dyndatetime(y,m,d+9)',
          end: 'dyndatetime(y,m,d+13)',
          title: 'Test Website',
          resource: 'erin',
          progress: 0,
        },
        {
          start: 'dyndatetime(y,m,d+6)',
          end: 'dyndatetime(y,m,d+13)',
          title: 'Fix Bugs',
          resource: 'frank',
          progress: 0,
        },
        {
          start: 'dyndatetime(y,m,d+13)',
          end: 'dyndatetime(y,m,d+16)',
          title: 'Deploy Website',
          resource: 'george',
          progress: 0,
        },
      ];

      var myResources = [
        {
          id: 'alice',
          name: 'Alice',
          title: 'Designer',
          color: '#1dab2f',
        },
        {
          id: 'bob',
          name: 'Bob',
          title: 'Designer',
          color: '#76e083',
        },

        {
          id: 'gro1',
          name: 'Development Team',
          color: '#ff1717',
          eventCreation: false,
          children: [
            {
              id: 'charlie',
              name: 'Charlie',
              title: 'Frontend Developer',
              color: '#4981d6',
            },
            {
              id: 'dave',
              name: 'Dave',
              title: 'Backend Developer',
              color: '#f7961e',
            },
            {
              id: 'frank',
              name: 'Frank',
              title: 'Full-Stack Developer',
              color: '#34c8e0',
            },
            {
              id: 'erin',
              name: 'Erin',
              title: 'QA Tester',
              color: '#d6d145',
            },
            {
              id: 'george',
              name: 'George',
              title: 'DevOps Engineer',
              color: '#e25dd2',
            },
          ],
        },
      ];

      function renderEvent(data) {
        var event = data.original;
        var color = data.color;
        var progress = event.progress || 0;

        attachProgressDotDragEvents();

        return (
          '<div class="mds-event-container" style="border-color:' +
          color +
          '; background:' +
          color +
          ';">' +
          '<div class="mds-event-padding">' +
          '<span class="mds-event-title">' +
          event.title +
          '</span>' +
          '</div>' +
          '<div class="mds-progress-bar-overlay" style="width:' +
          progress +
          '%;">' +
          '<div class="mds-progress-dot" data-event-id="' +
          event.id +
          '"></div>' +
          '</div>' +
          '<span class="mds-progress-label" >' +
          progress +
          '%</span>' +
          '</div>'
        );
      }

      function renderCustomResource(resource) {
        return (
          '<div class="mds-resource-group"><div class="mds-employee-name">' +
          resource.name +
          '</div>' +
          (resource.title !== undefined ? '<div class="mds-employee-title">' + resource.title + '</div>' : '') +
          '</div>' +
          '</div>'
        );
      }

      var calendar = $('#demo-task-progression')
        .mobiscroll()
        .eventcalendar({
          dragToMove: true,
          dragToResize: true,
          clickToCreate: 'double',
          view: { timeline: { type: 'month', eventList: true } },
          data: myEvents,
          resources: myResources,
          onEventClick: function (args) {
            if (!isDraggingDot) {
              createEditPopup(args.event, args.domEvent.currentTarget);
            } else {
              // todo, remove flagging
              isDraggingDot = false;
              args.event.progress = eventProgress;
            }
          },
          onEventCreated: function (args) {
            createAddPopup(args.event, args.target);
          },
          renderScheduleEvent: renderEvent,
          renderResource: renderCustomResource,
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
          onChange: function (args) {
            var dates = args.value;
            eventStart = dates[0];
            eventEnd = dates[1];
          },
        })
        .mobiscroll('getInst');

      var addEditPopup = $('#demo-add-edit-popup')
        .mobiscroll()
        .popup({
          display: 'bottom',
          contentPadding: false,
          fullScreen: true,
          scrollLock: false,
          height: 320,
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
        var success = false;

        $('.mds-popup-progress-label').text(0 + ' %');
        $popupSlider.val(0);

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
                calendar.updateEvent(newEvent);
                success = true;
                addEditPopup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          onClose: function () {
            if (!success) {
              calendar.removeEvent(event);
            }
          },
        });

        fillPopup(event);
        addEditPopup.open();
      }

      function createEditPopup(event, target) {
        eventId = event.id;
        eventTitle = event.title || '';
        eventStart = event.start;
        eventEnd = event.end;

        $('.mds-popup-progress-label').text(event.progress + ' %');
        $popupSlider.val(event.progress);

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
        eventId = event.id;
        eventTitle = event.title || '';
        eventStart = event.start;
        eventEnd = event.end;

        $eventTitle.mobiscroll('getInst').value = event.title || '';
        $popupSlider.mobiscroll('getInst').value = event.progress || 0;
        eventStartEndPicker.setVal([event.start, event.end]);
        eventProgress = event.progress;
      }

      $popupSlider.on('input', function () {
        eventProgress = $(this).val();
        $('.mds-popup-progress-label').text(eventProgress + ' %');
      });

      function attachProgressDotDragEvents() {
        var dots = $('.mds-progress-dot');

        dots.each(function () {
          var dot = $(this);

          dot.on('mousedown', function (event) {
            event.stopPropagation();

            var parent = dot.closest('.mds-progress-bar-overlay');
            var startX = event.pageX;
            var initialProgress = (parseInt(parent.css('width'), 10) / parent.parent().width()) * 100;

            function onMouseMove(e) {
              var dx = e.pageX - startX;
              var newProgress = initialProgress + (dx / parent.parent().width()) * 100;
              newProgress = Math.max(0, Math.min(100, newProgress));
              parent.css('width', newProgress + '%');

              eventProgress = Math.floor(newProgress);
              dot
                .closest('.mds-event-container')
                .find('.mds-progress-label')
                .text(newProgress.toFixed(0) + '%');
            }

            function onMouseUp() {
              $(document).off('mousemove', onMouseMove);
              $(document).off('mouseup', onMouseUp);
              // todo, remove flagging
              isDraggingDot = true;
            }

            $(document).on('mousemove', onMouseMove);
            $(document).on('mouseup', onMouseUp);
          });
        });
      }

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
          <input mbsc-input class="mds-popup-event-title" />
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
        <div class="mbsc-progress-container mbsc-flex mbsc-align-items-center">
          <label style='padding-left: 15px;'>Progress</label>
          <input class="mds-popup-progress-slider" type="range" min="0" max="100" />
          <label class="mds-popup-progress-label">0%</label> 
        </div>
        <div id="popup-event-dates"></div>
      </div>
    </div>
  </div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mbsc-progress-container {
    gap: 10px;
    padding-right: 10px;
}

.mds-popup-progress-slider {
    flex-grow: 1;
}
.mds-popup-progress-label {
    margin-left: 10px;
}

.mds-event-container {
    border-radius: 5px;
    position: relative;
}

.mds-event-padding {
    padding: 10px;
}

.mds-event-title {
    color: white;
    z-index: 1;
    position: relative;
    font-size: 14px;
}

.mds-progress-bar-overlay {
    border-radius: 5px;
    position: absolute;
    top: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

.mds-progress-dot {
    position: absolute;
    right: -7px;
    top: 92%;
    transform: translateY(-50%);
    border-style: solid;
    border-width: 0 7px 7px 7px;
    border-color: transparent transparent white transparent;
    cursor: ew-resize;
}

.mds-progress-label {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    padding-right: 5px;
    color: white;
    font-weight: bold;
    font-size: 14px;
}
.mds-employee-name {
  font-size: 16px;
}
.mds-employee-title {
  font-size: 12px;
  margin-top: 5px;
}
.mds-resource-group{
  padding: 5px 0 0 10px;
}
  `,
};
