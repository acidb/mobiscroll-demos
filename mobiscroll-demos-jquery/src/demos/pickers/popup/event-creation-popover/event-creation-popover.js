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
                popup.close();
                mobiscroll.toast({
                  // context,
                  message: 'Event added',
                });
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
        })
        .mobiscroll('getInst');

      $('#demo-popup-add-btn').on('click', function () {
        range.setVal([new Date(), new Date()]);
        $('#demo-popup-event-title').mobiscroll('getInst').value = 'New Event';
        $('#demo-popup-status-busy').mobiscroll('getInst').checked = true;
        popup.open();
        return false;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
  <div class="mbsc-button-group-block">
    <button mbsc-button id="demo-popup-add-btn">Add event</button>
  </div>
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
          <input mbsc-input>
      </label>
    </div>
    <div class="mbsc-form-group">
      <label>
        All-day
        <input mbsc-switch type="checkbox" />
      </label>
      <label>
        Starts
        <input mbsc-input id="demo-popup-start-input" />
      </label>
      <label>
        Ends
        <input mbsc-input id="demo-popup-end-input" />
      </label>
      <label>
        <select data-label="Travel time" mbsc-dropdown>
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
  `,
};
