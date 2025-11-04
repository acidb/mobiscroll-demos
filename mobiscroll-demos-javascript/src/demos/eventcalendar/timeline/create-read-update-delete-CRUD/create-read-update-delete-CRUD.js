import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      theme: 'ios',
      themeVariant: 'light',
    });

    function toggleDatetimePicker(allDay) {
      // Toggle between date and datetime picker
      eventStartEndPicker.setOptions({
        controls: allDay ? ['date'] : ['datetime'],
        responsive: allDay
          ? { medium: { controls: ['calendar'], touchUi: false } }
          : { medium: { controls: ['calendar', 'time'], touchUi: false } },
      });
    }

    function toggleTravelTime(allDay) {
      if (allDay) {
        timeGroupElm.remove();
      } else {
        timeGroupParent.appendChild(timeGroupElm);
      }
    }

    // Fills the popup with the event's data
    function fillPopup(event) {
      // Load event properties
      eventId = event.id;
      eventTitle = event.title || '';
      eventDescription = event.description || '';
      eventAllDay = event.allDay;
      eventStart = event.start;
      eventEnd = event.end;
      eventBuffer = event.bufferBefore || 0;
      eventColor = event.color || resourceColor;
      eventStatus = event.free;
      eventResource = event.resource;

      // Set event fields
      mobiscroll.getInst(eventTitleElm).value = eventTitle;
      mobiscroll.getInst(eventDescriptionElm).value = eventDescription;
      mobiscroll.getInst(eventAllDayElm).checked = eventAllDay;
      eventStartEndPicker.setVal([eventStart, eventEnd]);
      mobiscroll.getInst(eventBufferElm).value = eventBuffer;
      highlightColor(eventColor);
      updateColorPreview(eventColor);
      if (eventStatus) {
        mobiscroll.getInst(eventStatusFreeElm).checked = true;
      } else {
        mobiscroll.getInst(eventStatusBusyElm).checked = true;
      }
      toggleDatetimePicker(eventAllDay);
      toggleTravelTime(eventAllDay);
    }

    function getEventData() {
      return {
        id: eventId,
        title: eventTitle,
        description: eventDescription,
        allDay: eventAllDay,
        start: eventStart,
        end: eventEnd,
        bufferBefore: eventBuffer,
        color: eventColor,
        free: eventStatus,
        resource: eventResource,
      };
    }

    function createAddPopup(event, target) {
      var success = false;

      // Hide delete button inside add popup
      eventDeleteButtonElm.parentElement.style.display = 'none';

      // Set popup header text and buttons for adding
      addEditPopup.setOptions({
        anchor: target,
        headerText: 'New event',
        buttons: [
          'cancel',
          {
            text: 'Add',
            keyCode: 'enter',
            handler: function () {
              var newEvent = getEventData();
              calendar.updateEvent(newEvent);
              calendar.navigateToEvent(newEvent);
              success = true;
              addEditPopup.close();
            },
            cssClass: 'mbsc-popup-button-primary',
          },
        ],
        onClose: function () {
          // Remove event if popup is cancelled
          if (!success) {
            calendar.removeEvent(event);
          }
        },
      });

      fillPopup(event);
      addEditPopup.open();
    }

    function createEditPopup(event, target) {
      // Show delete button inside edit popup
      eventDeleteButtonElm.parentElement.style.display = 'block';

      editedEvent = event;

      // Set popup header text and buttons
      addEditPopup.setOptions({
        headerText: 'Edit event',
        anchor: target,
        buttons: [
          'cancel',
          {
            text: 'Save',
            keyCode: 'enter',
            handler: function () {
              var updatedEvent = getEventData();
              calendar.updateEvent(updatedEvent);
              calendar.navigateToEvent(updatedEvent);
              addEditPopup.close();
            },
            cssClass: 'mbsc-popup-button-primary',
          },
        ],
      });

      fillPopup(event);
      addEditPopup.open();
    }

    function highlightColor(color) {
      document.querySelector('.mds-crud-color-value').classList.remove('mds-crud-color-value-selected');
      document.querySelector('.mds-crud-color-value[data-value="' + color + '"]').classList.add('mds-crud-color-value-selected');
    }

    function updateColorPreview(color) {
      colorPreviewElm.style.background = color || '';
    }

    function applySelectedColor(color) {
      eventColor = color;
      updateColorPreview(color);
      eventColorPicker.close();
    }

    var editedEvent;
    var selectedColor;
    var resourceColor;

    var eventId;
    var eventTitle;
    var eventDescription;
    var eventAllDay;
    var eventStart;
    var eventEnd;
    var eventBuffer;
    var eventColor;
    var eventStatus;
    var eventResource;

    var eventTitleElm = document.getElementById('crud-popup-event-title');
    var eventDescriptionElm = document.getElementById('crud-popup-event-desc');
    var eventAllDayElm = document.getElementById('crud-popup-event-all-day');
    var eventBufferElm = document.getElementById('crud-popup-event-buffer');
    var eventColorElm = document.getElementById('crud-popup-event-color');
    var colorPreviewElm = document.getElementById('crud-popup-event-color-preview');
    var colorValueElms = document.querySelectorAll('.mds-crud-color-value');
    var eventStatusBusyElm = document.getElementById('crud-popup-event-status-busy');
    var eventStatusFreeElm = document.getElementById('crud-popup-event-status-free');
    var eventDeleteButtonElm = document.getElementById('crud-popup-event-delete');
    var timeGroupElm = document.getElementById('crud-popup-time-group');
    var timeGroupParent = timeGroupElm.parentNode;

    var myEvents = [
      {
        id: 1,
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,15)',
        title: "Lunch @ Butcher's",
        description: '',
        allDay: false,
        bufferBefore: 15,
        free: true,
        resource: 3,
      },
      {
        id: 2,
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,16)',
        title: 'Conference',
        description: '',
        allDay: false,
        bufferBefore: 30,
        free: false,
        resource: 5,
      },
      {
        id: 3,
        start: 'dyndatetime(y,m,d,18)',
        end: 'dyndatetime(y,m,d,22)',
        title: 'Site Visit',
        description: '',
        allDay: false,
        bufferBefore: 60,
        free: true,
        resource: 4,
      },
      {
        id: 4,
        start: 'dyndatetime(y,m,d,10,30)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Stakeholder mtg.',
        description: '',
        allDay: false,
        free: false,
        resource: 1,
      },
    ];

    var myResources = [
      {
        id: 1,
        name: 'Resource A',
        color: '#ffeb3c',
      },
      {
        id: 2,
        name: 'Resource B',
        color: '#f44437',
      },
      {
        id: 3,
        name: 'Resource C',
        color: '#3f51b5',
      },
      {
        id: 4,
        name: 'Resource D',
        color: '#4baf4f',
      },
      {
        id: 5,
        name: 'Resource E',
        color: '#ff9900',
      },
    ];

    // Init the event calendar
    var calendar = mobiscroll.eventcalendar('#demo-crud-event-calendar', {
      clickToCreate: 'double',
      dragToCreate: true,
      dragToMove: true,
      dragToResize: true,
      view: {
        timeline: { type: 'day' },
      },
      data: myEvents,
      resources: myResources,
      onEventClick: function (args) {
        resourceColor = args.resourceObj.color;
        createEditPopup(args.event, args.domEvent.currentTarget);
      },
      onEventCreated: function (args) {
        resourceColor = args.resourceObj.color;
        createAddPopup(args.event, args.target);
      },
      onEventDeleted: function (args) {
        mobiscroll.snackbar({
          button: {
            action: function () {
              calendar.addEvent(args.event);
            },
            text: 'Undo',
          },
          message: 'Event deleted',
        });
      },
    });

    // Init event start/end date picker
    var eventStartEndPicker = mobiscroll.datepicker('#crud-popup-event-dates', {
      controls: ['date'],
      select: 'range',
      startInput: '#crud-popup-event-start',
      endInput: '#crud-popup-event-end',
      showRangeLabels: false,
      touchUi: true,
      responsive: { medium: { touchUi: false } },
      onChange: function (args) {
        var dates = args.value;
        eventStart = dates[0];
        eventEnd = dates[1];
      },
    });

    // Init event color picker
    var eventColorPicker = mobiscroll.popup('#crud-color-picker-popup', {
      display: 'bottom',
      contentPadding: false,
      showArrow: false,
      showOverlay: false,
      buttons: [
        'cancel',
        {
          text: 'Set',
          keyCode: 'enter',
          handler: function () {
            applySelectedColor(selectedColor);
          },
          cssClass: 'mbsc-popup-button-primary',
        },
      ],
      responsive: {
        medium: {
          display: 'anchored',
          anchor: eventColorElm,
          buttons: [],
        },
      },
    });

    var addEditPopup = mobiscroll.popup('#crud-add-edit-popup', {
      display: 'bottom',
      contentPadding: false,
      fullScreen: true,
      scrollLock: false,
      responsive: {
        medium: {
          display: 'anchored',
          width: 400,
          fullScreen: false,
          touchUi: false,
        },
      },
    });

    eventTitleElm.addEventListener('input', function (ev) {
      eventTitle = ev.target.value;
    });

    eventDescriptionElm.addEventListener('change', function (ev) {
      eventDescription = ev.target.value;
    });

    eventAllDayElm.addEventListener('change', function (ev) {
      eventAllDay = ev.target.checked;
      toggleDatetimePicker(eventAllDay);
      toggleTravelTime(eventAllDay);
    });

    eventBufferElm.addEventListener('change', function (ev) {
      eventBuffer = +ev.target.value;
    });

    document.querySelectorAll('.mds-crud-popup-event-status').forEach(function (elm) {
      elm.addEventListener('change', function (ev) {
        eventStatus = ev.target.value === 'free';
      });
    });

    eventDeleteButtonElm.addEventListener('click', function () {
      calendar.removeEvent(editedEvent);
      addEditPopup.close();

      mobiscroll.snackbar({
        button: {
          action: function () {
            calendar.addEvent(editedEvent);
          },
          text: 'Undo',
        },
        message: 'Event deleted',
      });
    });

    eventColorElm.addEventListener('click', function () {
      highlightColor(eventColor || '');
      eventColorPicker.open();
    });

    colorValueElms.forEach(function (elm) {
      elm.addEventListener('click', function () {
        var color = elm.getAttribute('data-value');
        selectedColor = color;
        highlightColor(color);

        if (!eventColorPicker.s.buttons.length) {
          applySelectedColor(color);
        }
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-crud-event-calendar"></div>

<div style="display: none">
  <div id="crud-add-edit-popup">
    <div class="mbsc-form-group">
      <label>
        Title
        <input mbsc-input id="crud-popup-event-title" />
      </label>
      <label>
        Description
        <textarea mbsc-textarea id="crud-popup-event-desc"></textarea>
      </label>
    </div>
    <div class="mbsc-form-group">
      <div>
        <label>
          All-day
          <input mbsc-switch id="crud-popup-event-all-day" type="checkbox" />
        </label>
        <label>
          Starts
          <input mbsc-input id="crud-popup-event-start" />
        </label>
        <label>
          Ends
          <input mbsc-input id="crud-popup-event-end" />
        </label>
        <label id="crud-popup-time-group">
          <select data-label="Travel time" mbsc-dropdown id="crud-popup-event-buffer">
            <option value="0">None</option>
            <option value="5">5 minutes</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="90">1.5 hours</option>
            <option value="120">2 hours</option>
          </select>
        </label>
      </div>
      <div id="crud-popup-event-dates"></div>
      <div id="crud-event-color-picker" class="mbsc-flex mds-crud-event-color-cont">
        <div class="mbsc-flex-1-0">Color</div>
        <div id="crud-popup-event-color">
          <div id="crud-popup-event-color-preview" class="mds-crud-selected-event-color"></div>
        </div>
      </div>
      <label>
        Show as busy
        <input id="crud-popup-event-status-busy" class="mds-crud-popup-event-status" mbsc-segmented type="radio" name="event-status" value="busy" />
      </label>
      <label>
        Show as free
        <input id="crud-popup-event-status-free" class="mds-crud-popup-event-status" mbsc-segmented type="radio" name="event-status" value="free" />
      </label>
      <div class="mbsc-button-group">
        <button class="mbsc-button-block" id="crud-popup-event-delete" mbsc-button data-color="danger" data-variant="outline">
          Delete event
        </button>
      </div>
    </div>
  </div>

  <div id="crud-color-picker-popup">
    <div class="mbsc-flex mds-crud-color-row">
      <div class="mds-crud-color-value" data-value="#ffeb3c">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #ffeb3c"></div>
      </div>
      <div class="mds-crud-color-value" data-value="#ff9900">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #ff9900"></div>
      </div>
      <div class="mds-crud-color-value" data-value="#f44437">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #f44437"></div>
      </div>
      <div class="mds-crud-color-value" data-value="#ea1e63">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #ea1e63"></div>
      </div>
      <div class="mds-crud-color-value" data-value="#9c26b0">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #9c26b0"></div>
      </div>
    </div>
    <div class="mbsc-flex mds-crud-color-row">
      <div class="mds-crud-color-value" data-value="#3f51b5">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #3f51b5"></div>
      </div>
      <div class="mds-crud-color-value" data-value="">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check"></div>
      </div>
      <div class="mds-crud-color-value" data-value="#009788">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #009788"></div>
      </div>
      <div class="mds-crud-color-value" data-value="#4baf4f">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #4baf4f"></div>
      </div>
      <div class="mds-crud-color-value" data-value="#7e5d4e">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #7e5d4e"></div>
      </div>
    </div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-crud-event-color-cont {
  margin: 16px;
  align-items: center;
  cursor: pointer;
}

.mds-crud-selected-event-color {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 10px;
  margin-left: 240px;
  background: #5ac8fa;
}

.mds-crud-color-row {
  justify-content: center;
  margin: 5px;
}

.mds-crud-color {
  position: relative;
  min-width: 46px;
  min-height: 46px;
  margin: 2px;
  cursor: pointer;
  border-radius: 23px;
  background: #5ac8fa;
}

.mds-crud-color:before {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -10px;
  color: #f7f7f7;
  font-size: 20px;
  text-shadow: 0 0 3px #000;
  display: none;
}

.mds-crud-color-value {
  padding: 3px;
  margin: 2px;
}

.mds-crud-color-value.mds-crud-color-value-selected,
.mds-crud-color-value:hover {
  box-shadow: inset 0 0 0 3px #007bff;
  border-radius: 48px;
}

.mds-crud-color-value.mds-crud-color-value-selected .mds-crud-color:before {
  display: block;
}
  `,
};
