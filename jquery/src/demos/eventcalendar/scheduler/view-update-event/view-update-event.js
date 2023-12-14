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
        editPopup,
        selectedEvent,
        title = $('#updateEventTitle'),
        desc = $('#updateEventDesc'),
        allDay = $('#updateAllDay'),
        startInst,
        endInst,
        now = new Date(),
        myData = [
          {
            start: new Date(now.getFullYear(), now.getMonth(), 8, 13),
            end: new Date(now.getFullYear(), now.getMonth(), 8, 13, 30),
            title: "Lunch @ Butcher's",
            color: '#26c57d',
          },
          {
            start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15),
            end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16),
            title: 'General orientation',
            color: '#fd966a',
          },
          {
            start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 18),
            end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 22),
            title: 'Dexter BD',
            color: '#37bbe4',
          },
          {
            start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 30),
            end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 11, 30),
            title: 'Stakeholder mtg.',
            color: '#d00f0f',
          },
        ];

      calendar = $('#demo-view-update-event')
        .mobiscroll()
        .eventcalendar({
          view: {
            schedule: { type: 'week' },
          },
          data: myData,
          onEventClick: function (event, inst) {
            var ev = event.event;
            var mode = ev.allDay ? 'date' : 'datetime';
            var dateWheels = ev.allDay ? 'MMMM DD YYYY' : '|DDD MMM D|';

            startInst.setOptions({ dateWheels: dateWheels, mode: mode });
            endInst.setOptions({ dateWheels: dateWheels, mode: mode });

            title.val(ev.title);
            desc.val(ev.desc);
            allDay.mobiscroll('getInst').checked = ev.allDay || false;
            startInst.setVal(ev.start);
            endInst.setVal(ev.end);
            $('input[name=updateFree][value=' + (ev.free || 'busy') + ']').mobiscroll('getInst').checked = true;
            selectedEvent = ev;

            endInst.setOptions({ min: ev.start });
            editPopup.setOptions({ anchor: event.domEvent.target });
            editPopup.open();
          },
        })
        .mobiscroll('getInst');

      startInst = $('#updateStartInput')
        .mobiscroll()
        .datetime({
          touchUi: false,
          dateWheels: '|DDD MMM D|',
          mode: 'datetime',
          onChange: function (event, inst) {
            endInst.setOptions({ min: event.value });
          },
        })
        .mobiscroll('getInst');

      endInst = $('#updateEndInput')
        .mobiscroll()
        .datetime({
          touchUi: false,
          dateWheels: '|DDD MMM D|',
          mode: 'datetime',
        })
        .mobiscroll('getInst');

      allDay.on('change', function () {
        var mode = this.checked ? 'date' : 'datetime';
        var dateWheels = this.checked ? 'MMMM DD YYYY' : '|DDD MMM D|';
        startInst.setOptions({ dateWheels: dateWheels, mode: mode });
        endInst.setOptions({ dateWheels: dateWheels, mode: mode });
      });

      editPopup = $('#demo-edit-popup')
        .mobiscroll()
        .popup({
          display: 'bubble',
          contentPadding: false,
          showOverlay: false,
          buttons: [
            'cancel',
            {
              text: 'Save',
              handler: function (event) {
                var eventToSave = {
                  id: selectedEvent.id,
                  title: title.val(),
                  desc: desc.val(),
                  allDay: allDay.mobiscroll('getInst').checked,
                  start: startInst.getVal(),
                  end: endInst.getVal(),
                  free: $('input[name=updateFree][value=busy]').mobiscroll('getInst').checked ? 'busy' : 'free',
                  color: selectedEvent.color,
                };

                calendar.updateEvent(eventToSave);
                editPopup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          headerText: 'Edit event',
          maxWidth: '400px',
        })
        .mobiscroll('getInst');
    });
  },
  markup: `
<div id="demo-view-update-event"></div>

<div id="demo-edit-popup">
    <div class="mbsc-form-group">
        <label>
            Title
            <input mbsc-input id="updateEventTitle">
        </label>
        <label>
            Description
            <textarea mbsc-textarea id="updateEventDesc"></textarea>
        </label>
    </div>
    <div class="mbsc-form-group">
        <label for="updateAllDay">
            All-day
            <input mbsc-switch id="updateAllDay" type="checkbox">
        </label>
        <label for="eventDate">
            Starts
            <input mbsc-input id="updateStartInput">
        </label>
        <label>
            Ends
            <input mbsc-input id="updateEndInput">
        </label>
        <label>
            Show as busy
            <input mbsc-segmented type="radio" name="updateFree" value="busy" checked>
        </label>
        <label>
            Show as free
            <input mbsc-segmented type="radio" name="updateFree" value="free">
        </label>
    </div>
</div>
  `,
  css: `
.demo-view-update-event {
    height: 100%;
}
  `,
};
