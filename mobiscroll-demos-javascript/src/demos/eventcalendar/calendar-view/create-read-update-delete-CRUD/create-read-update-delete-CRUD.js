import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var oldEvent;
    var tempEvent = {};
    var deleteEvent;
    var restoreEvent;
    var colorPicker;
    var tempColor;
    var titleInput = document.getElementById('event-title');
    var descriptionTextarea = document.getElementById('event-desc');
    var allDaySwitch = document.getElementById('event-all-day');
    var freeSegmented = document.getElementById('event-status-free');
    var busySegmented = document.getElementById('event-status-busy');
    var deleteButton = document.getElementById('event-delete');
    var colorSelect = document.getElementById('event-color-picker');
    var pickedColor = document.getElementById('event-color');
    var colorElms = document.querySelectorAll('.crud-color-c');
    var travelTime = document.getElementById('travel-time-selection');
    var datePickerResponsive = {
      medium: {
        controls: ['calendar'],
        touchUi: false,
      },
    };
    var datetimePickerResponsive = {
      medium: {
        controls: ['calendar', 'time'],
        touchUi: false,
      },
    };
    var myData = [
      {
        id: 1,
        start: 'dyndatetime(y,m,8,13)',
        end: 'dyndatetime(y,m,8,13,45)',
        title: "Lunch @ Butcher's",
        description: '',
        allDay: false,
        bufferBefore: 15,
        free: true,
        color: '#009788',
      },
      {
        id: 2,
        start: 'dyndatetime(y,m,d,15)',
        end: 'dyndatetime(y,m,d,16)',
        title: 'Conference',
        description: '',
        allDay: false,
        bufferBefore: 30,
        free: false,
        color: '#ff9900',
      },
      {
        id: 3,
        start: 'dyndatetime(y,m,d-1,18)',
        end: 'dyndatetime(y,m,d-1,22)',
        title: 'Site Visit',
        description: '',
        allDay: false,
        bufferBefore: 60,
        free: true,
        color: '#3f51b5',
      },
      {
        id: 4,
        start: 'dyndatetime(y,m,d+1,10,30)',
        end: 'dyndatetime(y,m,d+1,11,30)',
        title: 'Stakeholder mtg.',
        description: '',
        allDay: false,
        free: false,
        color: '#f44437',
      },
    ];

    function createAddPopup(elm) {
      // Hide delete button inside add popup
      deleteButton.style.display = 'none';

      deleteEvent = true;
      restoreEvent = false;

      // Set popup header text and buttons for adding
      popup.setOptions({
        headerText: 'New event',
        buttons: [
          'cancel',
          {
            text: 'Add',
            keyCode: 'enter',
            handler: function () {
              calendar.updateEvent({
                id: tempEvent.id,
                title: tempEvent.title,
                description: tempEvent.description,
                allDay: tempEvent.allDay,
                bufferBefore: travelTime.value,
                start: tempEvent.start,
                end: tempEvent.end,
                color: tempEvent.color,
              });
              // Navigate the calendar to the correct view
              calendar.navigateToEvent(tempEvent);
              deleteEvent = false;
              popup.close();
            },
            cssClass: 'mbsc-popup-button-primary',
          },
        ],
      });

      // Fill popup with a new event data
      mobiscroll.getInst(titleInput).value = tempEvent.title;
      mobiscroll.getInst(descriptionTextarea).value = '';
      mobiscroll.getInst(allDaySwitch).checked = false;
      range.setVal([tempEvent.start, tempEvent.end]);
      mobiscroll.getInst(busySegmented).checked = true;
      range.setOptions({ controls: ['date'], responsive: datePickerResponsive });
      pickedColor.style.background = '';
      travelTime.value = 0;

      // Set anchor for the popup
      popup.setOptions({ anchor: elm });

      popup.open();
    }

    function createEditPopup(args) {
      var ev = args.event;

      // Show delete button inside edit popup
      deleteButton.style.display = 'block';

      deleteEvent = false;
      restoreEvent = true;

      // Set popup header text and buttons for editing
      popup.setOptions({
        headerText: 'Edit event',
        buttons: [
          'cancel',
          {
            text: 'Save',
            keyCode: 'enter',
            handler: function () {
              var date = range.getVal();
              var eventToSave = {
                id: ev.id,
                title: titleInput.value,
                description: descriptionTextarea.value,
                allDay: mobiscroll.getInst(allDaySwitch).checked,
                bufferBefore: travelTime.value,
                start: date[0],
                end: date[1],
                free: mobiscroll.getInst(freeSegmented).checked,
                color: ev.color,
              };
              // Update event with the new properties on save button click
              calendar.updateEvent(eventToSave);
              // Navigate the calendar to the correct view
              calendar.navigateToEvent(eventToSave);
              restoreEvent = false;
              popup.close();
            },
            cssClass: 'mbsc-popup-button-primary',
          },
        ],
      });

      // Fill popup with the selected event data
      mobiscroll.getInst(titleInput).value = ev.title || '';
      mobiscroll.getInst(descriptionTextarea).value = ev.description || '';
      mobiscroll.getInst(allDaySwitch).checked = ev.allDay || false;
      range.setVal([ev.start, ev.end]);
      pickedColor.style.background = ev.color || '';
      travelTime.value = ev.bufferBefore !== undefined ? ev.bufferBefore : 0;

      if (ev.free) {
        mobiscroll.getInst(freeSegmented).checked = true;
      } else {
        mobiscroll.getInst(busySegmented).checked = true;
      }

      // Change range settings based on the allDay
      range.setOptions({
        controls: ev.allDay ? ['date'] : ['datetime'],
        responsive: ev.allDay ? datePickerResponsive : datetimePickerResponsive,
      });

      // Set anchor for the popup
      popup.setOptions({ anchor: args.domEvent.currentTarget });
      popup.open();
    }

    var calendar = mobiscroll.eventcalendar('#demo-add-delete-event', {
      clickToCreate: 'double',
      dragToCreate: true,
      dragToMove: true,
      dragToResize: true,
      view: {
        calendar: { labels: true },
      },
      data: myData,
      onEventClick: function (args) {
        oldEvent = Object.assign({}, args.event);
        tempEvent = args.event;

        if (!popup.isVisible()) {
          createEditPopup(args);
        }
      },
      onEventCreated: function (args) {
        popup.close();
        // Store temporary event
        tempEvent = args.event;
        createAddPopup(args.target);
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

    var popup = mobiscroll.popup('#demo-add-popup', {
      display: 'bottom',
      contentPadding: false,
      fullScreen: true,
      onClose: function () {
        if (deleteEvent) {
          calendar.removeEvent(tempEvent);
        } else if (restoreEvent) {
          calendar.updateEvent(oldEvent);
        }
      },
      responsive: {
        medium: {
          display: 'anchored',
          width: 400,
          fullScreen: false,
          touchUi: false,
        },
      },
    });

    titleInput.addEventListener('input', function (ev) {
      // Update current event's title
      tempEvent.title = ev.target.value;
    });

    descriptionTextarea.addEventListener('change', function (ev) {
      // Update current event's title
      tempEvent.description = ev.target.value;
    });

    allDaySwitch.addEventListener('change', function () {
      var checked = this.checked;

      var travelTimeGroup = document.querySelector('#travel-time-group');
      if (checked) {
        travelTimeGroup.style.display = 'none';
        travelTime.value = 0;
      } else {
        travelTimeGroup.style.display = 'flex';
      }

      // Change range settings based on the allDay
      range.setOptions({
        controls: checked ? ['date'] : ['datetime'],
        responsive: checked ? datePickerResponsive : datetimePickerResponsive,
      });

      // Update current event's allDay property
      tempEvent.allDay = checked;
    });

    var range = mobiscroll.datepicker('#event-date', {
      controls: ['date'],
      select: 'range',
      startInput: '#start-input',
      endInput: '#end-input',
      showRangeLabels: false,
      touchUi: true,
      responsive: datePickerResponsive,
      onChange: function (args) {
        var date = args.value;
        // Update event's start date
        tempEvent.start = date[0];
        tempEvent.end = date[1];
      },
    });

    document.querySelectorAll('input[name=event-status]').forEach(function (elm) {
      elm.addEventListener('change', function () {
        // Update current event's free property
        tempEvent.free = mobiscroll.getInst(freeSegmented).checked;
      });
    });

    deleteButton.addEventListener('click', function () {
      // Delete current event on button click
      calendar.removeEvent(tempEvent);

      // Save a local reference to the deleted event
      var deletedEvent = tempEvent;

      popup.close();

      mobiscroll.snackbar({
        button: {
          action: function () {
            calendar.addEvent(deletedEvent);
          },
          text: 'Undo',
        },
        message: 'Event deleted',
      });
    });

    colorPicker = mobiscroll.popup('#demo-event-color', {
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
            setSelectedColor();
          },
          cssClass: 'mbsc-popup-button-primary',
        },
      ],
      responsive: {
        medium: {
          display: 'anchored',
          anchor: document.getElementById('event-color-cont'),
          buttons: {},
        },
      },
    });

    function selectColor(color, setColor) {
      var selectedElm = document.querySelector('.crud-color-c.selected');
      var newSelected = document.querySelector('.crud-color-c[data-value="' + color + '"]');

      if (selectedElm) {
        selectedElm.classList.remove('selected');
      }
      if (newSelected) {
        newSelected.classList.add('selected');
      }
      if (setColor) {
        pickedColor.style.background = color || '';
      }
    }

    function setSelectedColor() {
      tempEvent.color = tempColor;
      pickedColor.style.background = tempColor;
      colorPicker.close();
    }

    colorSelect.addEventListener('click', function () {
      selectColor(tempEvent.color || '');
      colorPicker.open();
    });

    colorElms.forEach(function (elm) {
      elm.addEventListener('click', function () {
        tempColor = elm.getAttribute('data-value');
        selectColor(tempColor);

        if (!colorPicker.s.buttons.length) {
          setSelectedColor();
        }
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-add-delete-event"></div>

<div style="display: none">
    <div id="demo-add-popup">
        <div class="mbsc-form-group">
            <label>
            Title
            <input mbsc-input id="event-title">
        </label>
            <label>
            Description
            <textarea mbsc-textarea id="event-desc"></textarea>
        </label>
        </div>
        <div class="mbsc-form-group">
            <label>
            All-day
            <input mbsc-switch id="event-all-day" type="checkbox" />
        </label>
            <label>
            Starts
            <input mbsc-input id="start-input" />
        </label>
            <label>
            Ends
            <input mbsc-input id="end-input" />
        </label>
        <label id="travel-time-group">
            <select data-label="Travel time" mbsc-dropdown id="travel-time-selection">
                <option value="0">None</option>
                <option value="5">5 minutes</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="90">1.5 hours</option>
                <option value="120">2 hours</option>
            </select>
        </label>
            <div id="event-date"></div>
            <div id="event-color-picker" class="event-color-c">
                <div class="event-color-label">Color</div>
                <div id="event-color-cont">
                    <div id="event-color" class="event-color"></div>
                </div>
            </div>
            <label>
            Show as busy
            <input id="event-status-busy" mbsc-segmented type="radio" name="event-status" value="busy">
        </label>
            <label>
            Show as free
            <input id="event-status-free" mbsc-segmented type="radio" name="event-status" value="free">
        </label>
            <div class="mbsc-button-group">
                <button class="mbsc-button-block" id="event-delete" mbsc-button data-color="danger" data-variant="outline">Delete event</button>
            </div>
        </div>
    </div>

    <div id="demo-event-color">
        <div class="crud-color-row">
            <div class="crud-color-c" data-value="#ffeb3c">
                <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#ffeb3c"></div>
            </div>
            <div class="crud-color-c" data-value="#ff9900">
                <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#ff9900"></div>
            </div>
            <div class="crud-color-c" data-value="#f44437">
                <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#f44437"></div>
            </div>
            <div class="crud-color-c" data-value="#ea1e63">
                <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#ea1e63"></div>
            </div>
            <div class="crud-color-c" data-value="#9c26b0">
                <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#9c26b0"></div>
            </div>
        </div>
        <div class="crud-color-row">
            <div class="crud-color-c" data-value="#3f51b5">
                <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#3f51b5"></div>
            </div>
            <div class="crud-color-c" data-value="">
                <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check"></div>
            </div>
            <div class="crud-color-c" data-value="#009788">
                <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#009788"></div>
            </div>
            <div class="crud-color-c" data-value="#4baf4f">
                <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#4baf4f"></div>
            </div>
            <div class="crud-color-c" data-value="#7e5d4e">
                <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#7e5d4e"></div>
            </div>
        </div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.event-color-c {
    display: flex;
    margin: 16px;
    align-items: center;
    cursor: pointer;
}

.event-color-label {
    flex: 1 0 auto;
}

.event-color {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-right: 10px;
    margin-left: 240px;
    background: #5ac8fa;
}

.crud-color-row {
    display: flex;
    justify-content: center;
    margin: 5px;
}

.crud-color-c {
    padding: 3px;
    margin: 2px;
}

.crud-color {
    position: relative;
    min-width: 46px;
    min-height: 46px;
    margin: 2px;
    cursor: pointer;
    border-radius: 23px;
    background: #5ac8fa;
}

.crud-color-c.selected,
.crud-color-c:hover {
    box-shadow: inset 0 0 0 3px #007bff;
    border-radius: 48px;
}

.crud-color:before {
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

.crud-color-c.selected .crud-color:before {
    display: block;
}
  `,
};
