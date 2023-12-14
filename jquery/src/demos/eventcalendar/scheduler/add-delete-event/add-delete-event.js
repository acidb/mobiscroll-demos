import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var calendar,
        addPopup,
        deletePopup,
        clickedEvent,
        tempEventID = 5,
        title = $('#eventTitle'),
        desc = $('#eventDesc'),
        startInst,
        endInst,
        allDay = $('#allDay'),
        busy = $('input[name=free][value=busy]'),
        now = new Date(),
        myData = [
          {
            id: 1,
            start: new Date(now.getFullYear(), now.getMonth(), 8, 13),
            end: new Date(now.getFullYear(), now.getMonth(), 8, 13, 30),
            title: "Lunch @ Butcher's",
            color: '#26c57d',
          },
          {
            id: 2,
            start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15),
            end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16),
            title: 'General orientation',
            color: '#fd966a',
          },
          {
            id: 3,
            start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 18),
            end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 22),
            title: 'Dexter BD',
            color: '#37bbe4',
          },
          {
            id: 4,
            start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 30),
            end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 11, 30),
            title: 'Stakeholder mtg.',
            color: '#d00f0f',
          },
        ];

      calendar = $('#demo-add-delete-event')
        .mobiscroll()
        .eventcalendar({
          view: {
            schedule: { type: 'week' },
          },
          data: myData,
          onEventClick: function (event, inst) {
            clickedEvent = event.event;
            if (clickedEvent.id != 'temp') {
              deletePopup.setOptions({ anchor: event.domEvent.currentTarget });
              deletePopup.open();
            }
          },
          onCellClick: function (event, inst) {
            var d = event.date;
            startInst.setVal(d);
            endInst.setVal(new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() + 1));
            endInst.setOptions({ min: d });
            addPopup.setOptions({ anchor: event.domEvent.currentTarget });
            addPopup.open();
          },
        })
        .mobiscroll('getInst');

      startInst = $('#startInput')
        .mobiscroll()
        .datetime({
          touchUi: false,
          dateWheels: '|DDD MMM D|',
          mode: 'datetime',
          onChange: function (event) {
            endInst.setOptions({ min: event.value });
          },
        })
        .mobiscroll('getInst');

      endInst = $('#endInput')
        .mobiscroll()
        .datetime({
          touchUi: false,
          dateWheels: '|DDD MMM D|',
          mode: 'datetime',
          min: now,
        })
        .mobiscroll('getInst');

      allDay.on('change', function () {
        var mode = this.checked ? 'date' : 'datetime';
        var dateWheels = this.checked ? 'MMMM DD YYYY' : '|DDD MMM D|';
        startInst.setOptions({ dateWheels: dateWheels, mode: mode });
        endInst.setOptions({ dateWheels: dateWheels, mode: mode });
      });

      addPopup = $('#demo-add-popup')
        .mobiscroll()
        .popup({
          display: 'bubble',
          contentPadding: false,
          showOverlay: false,
          buttons: [
            'cancel',
            {
              text: 'Add',
              handler: function (event) {
                calendar.addEvent(getNewEvent());
                tempEventID += 1;
                addPopup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          onOpen: function () {
            title.val('New Event');
            desc.val('');
            allDay.mobiscroll('getInst').checked = false;
            startInst.setOptions({ dateWheels: '|DDD MMM D|', mode: 'datetime' });
            endInst.setOptions({ dateWheels: '|DDD MMM D|', mode: 'datetime' });
            busy.mobiscroll('getInst').checked = true;
            calendar.addEvent(getNewEvent(true));
          },
          onClose: function (event, inst) {
            calendar.removeEvent('temp');
          },
          headerText: 'New event',
          maxWidth: '400px',
        })
        .mobiscroll('getInst');

      deletePopup = $('#demo-delete-popup')
        .mobiscroll()
        .popup({
          // context,
          display: 'bubble',
          showOverlay: false,
          buttons: [
            {
              text: 'Delete event',
              handler: function (event) {
                calendar.removeEvent([clickedEvent.id]);
                deletePopup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
            'cancel',
          ],
        })
        .mobiscroll('getInst');

      function getNewEvent(newEvent) {
        return {
          id: newEvent ? 'temp' : tempEventID,
          title: title.val(),
          desc: desc.val(),
          start: startInst.getVal(),
          end: endInst.getVal(),
          allDay: newEvent ? false : allDay.mobiscroll('getInst').checked,
          free: busy.mobiscroll('getInst').checked ? 'busy' : 'free',
        };
      }
    });
  },
  markup: `
<div id="demo-add-delete-event"></div>

<div id="demo-add-popup">
    <div class="mbsc-form-group">
        <label>
            Title
            <input mbsc-input id="eventTitle">
        </label>
        <label>
            Description
            <textarea mbsc-textarea id="eventDesc"></textarea>
        </label>
    </div>
    <div class="mbsc-form-group">
        <label for="allDay">
            All-day
            <input mbsc-switch id="allDay" type="checkbox">
        </label>
        <label for="eventDate">
            Starts
            <input mbsc-input id="startInput">
        </label>
        <label>
            Ends
            <input mbsc-input id="endInput">
        </label>
        <label>
            Show as busy
            <input mbsc-segmented type="radio" name="free" value="busy">
        </label>
        <label>
            Show as free
            <input mbsc-segmented type="radio" name="free" value="free">
        </label>
    </div>
</div>

<div id="demo-delete-popup">
    Are you sure you want to delete this event?
    <!--<div class="mbsc-button-group-block">-->
    <!--    <button data-color="danger" mbsc-button>Delete</button>-->
    <!--</div>-->
</div>
  `,
  css: `
.md-add-event-demo {
    position: absolute;
    height: 100%;
}

.md-add-event-demo .mbsc-row {
    height: 100%;
}

.md-add-event-demo .md-col-right {
    overflow: auto;
    height: 100%;
    border-left: 1px solid #ccc;
}

.md-add-event-demo .md-delete-btn {
    margin: 0;
    position: absolute;
    right: 10px;
    top: 15px;
    z-index: 1;
    transition: background-color .3s ease-out;
}

.demo-add-delete-event {
    height: 100%;
}
  `,
};
