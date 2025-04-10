import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var calendar;
    var popup;
    var oldMeal;
    var tempMeal;
    var deleteMeal;
    var restoreMeal;
    var formatDate = mobiscroll.formatDate;
    var nameInput = document.getElementById('meal-name-input');
    var caloriesInput = document.getElementById('meal-calories-input');
    var notesTextarea = document.getElementById('meal-notes-textarea');
    var deleteButton = document.getElementById('meal-delete');
    var typeCont = document.getElementById('meal-type-segmented');
    var typesSegmented;

    var types = [
      {
        id: 1,
        name: 'Breakfast',
        color: '#e20f0f',
        kcal: '300 - 400 kcal',
        icon: '&#x1f373',
      },
      {
        id: 2,
        name: 'Elevenses',
        color: '#157d13',
        kcal: '100 - 200 kcal',
        icon: '&#x1f34c',
      },
      {
        id: 3,
        name: 'Lunch',
        color: '#32a6de',
        kcal: '500 - 700 kcal',
        icon: '&#x1f35c',
      },
      {
        id: 4,
        name: 'Dinner',
        color: '#e29d1d',
        kcal: '400 - 600 kcal',
        icon: '&#x1f959',
      },
      {
        id: 5,
        name: 'Snack',
        color: '#68169c',
        kcal: '100 - 200 kcal',
        icon: '&#x1f968',
      },
    ];

    function addMealPopup() {
      // Hide delete button inside add popup
      deleteButton.style.display = 'none';

      deleteMeal = true;
      restoreMeal = false;

      // Set popup header text and buttons for adding
      popup.setOptions({
        headerText: '<div>New meal</div><div class="md-meal-type">' + formatDate('DDDD, DD MMMM YYYY', new Date(tempMeal.start)) + '</div>',
        buttons: [
          'cancel',
          {
            text: 'Add',
            keyCode: 'enter',
            handler: function () {
              calendar.updateEvent(tempMeal);

              deleteMeal = false;
              popup.close();
            },
            cssClass: 'mbsc-popup-button-primary',
          },
        ],
      });

      // Fill popup with a new event data
      mobiscroll.getInst(nameInput).value = tempMeal.title;
      mobiscroll.getInst(caloriesInput).value = '';
      mobiscroll.getInst(notesTextarea).value = '';

      typesSegmented.forEach(function (elm) {
        mobiscroll.getInst(elm).checked = +elm.value == tempMeal.resource;
      });

      popup.open();
    }

    function editMealPopup(args) {
      var ev = args.event;
      var resource = args.resourceObj;

      // Show delete button inside edit popup
      deleteButton.style.display = 'block';

      deleteMeal = false;
      restoreMeal = true;

      // // set popup header text and buttons for editing
      popup.setOptions({
        headerText:
          '<div>' + resource.name + '</div><div class="md-meal-type">' + formatDate('DDDD, DD MMMM YYYY', new Date(ev.start)) + '</div>',
        buttons: [
          'cancel',
          {
            text: 'Save',
            keyCode: 'enter',
            handler: function () {
              // Update event with the new properties on save button click
              calendar.updateEvent({
                id: ev.id,
                title: tempMeal.title,
                calories: tempMeal.calories,
                notes: tempMeal.notes,
                start: ev.start,
                end: ev.end,
                resource: tempMeal.resource,
              });

              restoreMeal = false;
              popup.close();
            },
            cssClass: 'mbsc-popup-button-primary',
          },
        ],
      });

      // Fill popup with the selected event data
      mobiscroll.getInst(nameInput).value = ev.title || '';
      mobiscroll.getInst(caloriesInput).value = ev.calories || '';
      mobiscroll.getInst(notesTextarea).value = ev.notes || '';

      typesSegmented.forEach(function (elm) {
        mobiscroll.getInst(elm).checked = +elm.value == tempMeal.resource;
      });

      popup.open();
    }

    calendar = mobiscroll.eventcalendar('#demo-meal-planner', {
      view: {
        timeline: {
          type: 'week',
          eventList: true,
          startDay: 1,
          endDay: 5,
        },
      },
      resources: types,
      dragToCreate: false,
      dragToResize: false,
      dragToMove: true,
      clickToCreate: true,
      extendDefaultEvent: function () {
        return {
          title: 'New meal',
        };
      },
      onEventCreated: function (args) {
        // Store temporary event
        tempMeal = args.event;
        setTimeout(function () {
          addMealPopup();
        }, 100);
      },
      onEventClick: function (args) {
        oldMeal = Object.assign({}, args.event);
        tempMeal = args.event;

        if (!popup.isVisible()) {
          editMealPopup(args);
        }
      },
      renderResource: function (resource) {
        return (
          '<div class="md-meal-planner-cont">' +
          '<div class="md-meal-planner-title" style="color:' +
          resource.color +
          '">' +
          '<span class="md-meal-planner-icon">' +
          resource.icon +
          '</span>' +
          resource.name +
          '</div>' +
          '<div class="md-meal-planner-kcal">' +
          resource.kcal +
          '</div>' +
          '</div>'
        );
      },
      renderScheduleEventContent: function (args) {
        var event = args.original;
        return (
          '<div class="md-meal-planner-event">' +
          '<div class="md-meal-planner-event-title">' +
          event.title +
          '</div>' +
          (event.calories ? '<div class="md-meal-planner-event-desc">Calories: ' + event.calories + ' kcal</div>' : '') +
          '</div>'
        );
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/meal-planner/',
      function (events) {
        calendar.setEvents(events);
      },
      'jsonp',
    );

    popup = mobiscroll.popup('#meal-planner-popup', {
      display: 'bottom',
      contentPadding: false,
      fullScreen: true,
      onClose: function () {
        if (deleteMeal) {
          calendar.removeEvent(tempMeal);
        } else if (restoreMeal) {
          calendar.updateEvent(oldMeal);
        }
      },
      responsive: {
        medium: {
          display: 'center',
          width: 400,
          fullScreen: false,
          touchUi: false,
          showOverlay: false,
        },
      },
    });

    function appendTypes() {
      var segmented = '<div mbsc-segmented-group>';

      for (var i = 0; i < types.length; ++i) {
        var type = types[i];
        segmented +=
          '<label>' +
          type.name +
          '<input type="radio" mbsc-segmented name="meal-planner-type" value="' +
          type.id +
          '" class="meal-planner-type"></label>';
      }

      segmented += '</div>';
      typeCont.innerHTML = segmented;
      mobiscroll.enhance(typeCont);
      typesSegmented = document.querySelectorAll('input[name=meal-planner-type]');

      typesSegmented.forEach(function (elm) {
        elm.addEventListener('change', function (ev) {
          tempMeal.resource = +ev.target.value;
        });
      });
    }

    appendTypes();

    nameInput.addEventListener('change', function (ev) {
      tempMeal.title = ev.target.value;
    });

    caloriesInput.addEventListener('change', function (ev) {
      tempMeal.calories = ev.target.value;
    });

    notesTextarea.addEventListener('change', function (ev) {
      tempMeal.notes = ev.target.value;
    });

    deleteButton.addEventListener('click', function () {
      // Delete current event on button click
      calendar.removeEvent(tempMeal);
      popup.close();

      // Save a local reference to the deleted event
      var deletedMeal = tempMeal;

      mobiscroll.snackbar({
        button: {
          action: function () {
            calendar.addEvent(deletedMeal);
          },
          text: 'Undo',
        },
        message: 'Event deleted',
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-meal-planner" class="md-meal-planner-calendar"></div>

<div id="meal-planner-popup" class="md-meal-planner-popup">
    <div id="meal-type-segmented" class="mbsc-form-group"></div>
    <div class="mbsc-form-group">
        <label>
            Name
            <input mbsc-input id="meal-name-input" />
        </label>
        <label>
            Calories
            <input mbsc-input id="meal-calories-input" type="number" />
        </label>
        <label>
            Notes
            <textarea mbsc-textarea id="meal-notes-textarea"></textarea>
        </label>
    </div>
    <div class="mbsc-button-group">
        <button class="mbsc-button-block" id="meal-delete" mbsc-button data-color="danger" data-variant="outline">Delete meal</button>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-meal-type {
    font-size: 14px;
    font-weight: 600;
    opacity: .6;
}

.md-meal-planner-popup .mbsc-popup .mbsc-popup-header {
    padding-top: 8px;
    padding-bottom: 8px;
}

.md-meal-planner-cont {
    position: relative;
    padding-left: 34px;
    text-align: left;
}

.md-meal-planner-title {
    font-size: 20px;
}

.md-meal-planner-kcal {
    color: #929292;
}

.md-meal-planner-icon {
    position: absolute;
    left: 0;
}

.md-meal-planner-calendar.mbsc-calendar .mbsc-schedule-event-all-day-inner {
    height: 40px;
    display: flex;
    align-items: center;
}

.md-meal-planner-calendar .md-meal-planner-event-title {
    font-size: 12px;
}

.md-meal-planner-calendar .md-meal-planner-event-desc {
    opacity: .6;
}

.md-meal-planner-popup .mbsc-segmented-item:first-child .mbsc-selected.mbsc-material,
.md-meal-planner-popup .mbsc-segmented-item:first-child .mbsc-selected.mbsc-windows,
.md-meal-planner-popup .mbsc-segmented-item:first-child .mbsc-segmented-selectbox-inner {
    background: #f08786;
}

.md-meal-planner-popup .mbsc-segmented-item:nth-child(2) .mbsc-selected.mbsc-material,
.md-meal-planner-popup .mbsc-segmented-item:nth-child(2) .mbsc-selected.mbsc-windows,
.md-meal-planner-popup .mbsc-segmented-item:nth-child(2) .mbsc-segmented-selectbox-inner {
    background: #8abe89;
}

.md-meal-planner-popup .mbsc-segmented-item:nth-child(3) .mbsc-selected.mbsc-material,
.md-meal-planner-popup .mbsc-segmented-item:nth-child(3) .mbsc-selected.mbsc-windows,
.md-meal-planner-popup .mbsc-segmented-item:nth-child(3) .mbsc-segmented-selectbox-inner {
    background: #99d3ef;
}

.md-meal-planner-popup .mbsc-segmented-item:nth-child(4) .mbsc-selected.mbsc-material,
.md-meal-planner-popup .mbsc-segmented-item:nth-child(4) .mbsc-selected.mbsc-windows,
.md-meal-planner-popup .mbsc-segmented-item:nth-child(4) .mbsc-segmented-selectbox-inner {
    background: #f0ce8e;
}

.md-meal-planner-popup .mbsc-segmented-item:last-child .mbsc-selected.mbsc-material,
.md-meal-planner-popup .mbsc-segmented-item:last-child .mbsc-selected.mbsc-windows,
.md-meal-planner-popup .mbsc-segmented-item:last-child .mbsc-segmented-selectbox-inner {
    background: #b48bce;
}
  `,
};
