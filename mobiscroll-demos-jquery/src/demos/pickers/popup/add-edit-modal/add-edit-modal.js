import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var tempEvent = {};
    var $travelTime = $('#travel-time-selection');
    var $status = $('#demo-popup-status-busy');
    var $title = $('#demo-popup-event-title');
    var $description = $('#demo-popup-event-description');
    var $allDay = $('#demo-popup-all-day');

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

    $(function () {
      var popup = $('#demo-add-event-popup')
        .mobiscroll()
        .popup({
          // context,
          width: 400,
          contentPadding: false,
          headerText: 'Add new event',
          display: 'center',
          buttons: [
            'cancel',
            {
              text: 'Add',
              keyCode: 'enter',
              handler: function () {
                calendar.addEvent({
                  title: $title.val(),
                  description: $description.val(),
                  allDay: $allDay.val(),
                  status: $status.val(),
                  bufferBefore: $travelTime.val(),
                  start: tempEvent.start || new Date(),
                  end: tempEvent.end || new Date(),
                });
                // move to eventcalendar lifecycle hook
                mobiscroll.toast({
                  // context,
                  message: 'Event added',
                });
                popup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          showOverlay: false,
        })
        .mobiscroll('getInst');

      var range = $('#demo-event-date')
        .mobiscroll()
        .datepicker({
          // context,
          controls: ['date'],
          select: 'range',
          startInput: '#demo-popup-start-input',
          endInput: '#demo-popup-end-input',
          display: 'anchored',
          touchUi: true,
          showRangeLabels: false,
          onChange: function (args) {
            var date = args.value;
            tempEvent.start = date[0];
            tempEvent.end = date[1];
          },
        })
        .mobiscroll('getInst');

      var calendar = $('#demo-calendar')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: {
            calendar: { labels: true },
          },
          data: myData,
          onEventCreated: function (event) {
            mobiscroll.toast({
              // context,
              message: 'Event added',
            });
          },
        })
        .mobiscroll('getInst');

      $('#demo-popup-add-btn').on('click', function () {
        range.setVal([new Date(), new Date()]);
        console.log('here');
        $title.mobiscroll('getInst').value = 'New Event';
        $description.mobiscroll('getInst').value = '';
        $allDay.mobiscroll('getInst').checked = false;
        $status.mobiscroll('getInst').checked = true;
        $('#travel-time-group').show();
        popup.open();
        return false;
      });

      $allDay.on('change', function () {
        var checked = this.checked;

        if (checked) {
          $('#travel-time-group').hide();
          $travelTime.val(0);
        } else {
          $('#travel-time-group').show();
        }

        // change range settings based on the allDay
        range.setOptions({
          controls: checked ? ['date'] : ['datetime'],
        });

        // update current event's allDay property
        tempEvent.allDay = checked;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-button-group-block">
  <button mbsc-button id="demo-popup-add-btn">Add new event</button>
</div>
<div style="display: none">
  <div id="demo-add-event-popup">
    <div class="mbsc-form-group">
      <label>
        Title
        <input mbsc-input id="demo-popup-event-title">
      </label>
      <label>
        Description
          <input mbsc-input id="demo-popup-event-description">
      </label>
    </div>
    <div class="mbsc-form-group">
      <label>
        All-day
        <input mbsc-switch type="checkbox" id="demo-popup-all-day"/>
      </label>
      <label>
        Starts
        <input mbsc-input id="demo-popup-start-input" />
      </label>
      <label>
        Ends
        <input mbsc-input id="demo-popup-end-input" />
      </label>
      <label id="travel-time-group">
        <select data-label="Travel time" mbsc-dropdown id="travel-time-selection>
        <option value="15">why this dont appear</option>
          <option value="0">None</option>
          <option value="15">15 minutes</option>
          <option value="30">30 minutes</option>
          <option value="60">1 hour</option>
          <option value="90">1.5 hours</option>
          <option value="120">2 hours</option>
        </select>
      </label>
    </div>
      <div class="mbsc-form-group">
        <label>
          Show as busy
          <input id="demo-popup-status-busy" mbsc-segmented type="radio" name="event-status" value="busy">
        </label>
        <label>
          Show as free
          <input id="demo-popup-status-free" mbsc-segmented type="radio" name="event-status" value="free">
        </label>
      </div>
    </div>
  <div id="demo-event-date"></div>
</div>
<div id="demo-calendar"></div>
  `,
};
