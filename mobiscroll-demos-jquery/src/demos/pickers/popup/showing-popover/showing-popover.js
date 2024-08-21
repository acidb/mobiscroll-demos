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
      var subscribePopup = $('#demo-showing-popover')
        .mobiscroll()
        .popup({
          // context,
          display: 'center',
          buttons: [
            {
              text: 'Subscribe',
              handler: function () {
                subscribePopup.close();
                mobiscroll.toast({
                  // context,
                  message: 'Subscribed!',
                });
              },
            },
          ],
        })
        .mobiscroll('getInst');

      var update = $('#showing-popover-list')
        .mobiscroll()
        .popup({
          // context,
          display: 'center',
          buttons: [
            {
              text: 'Ok',
              handler: 'cancel',
            },
          ],
          onClose: function () {
            $('#showPopup').val($('input[name="update"]:checked').val());
          },
        })
        .mobiscroll('getInst');

      $('#showAccount').on('click', function () {
        subscribePopup.open();
        return false;
      });
      $('#showPopup').on('click', function () {
        update.open();
        return false;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-form>
  <div class="mbsc-align-center">
    <div class="mbsc-note mbsc-note-primary">Use the popup popup with or without return value.</div>
  </div>
  <div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Without return value</div>
    <div class="mbsc-button-group-block">
      <button mbsc-button id="showAccount">Show on Click</button>
    </div>
  </div>
  <div class="mbsc-form-group">
    <div class="mbsc-form-group-title">With return value</div>
    <label> Update
      <input mbsc-input id="showPopup" placeholder="Please Select..." readonly />
    </label>
  </div>
</div>

<div id="demo-showing-popover">
  <div class="mbsc-align-center>
    <img class="responsive-logo" src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
    <h2>Stay with us!</h2>
    <p>Join our newsletter and be the first <br> to receive exciting updates and news!</p>
      <label>
          <input mbsc-input data-input-style="box" placeholder="Enter your email address" />
      </label>
    <div class="mbsc-form-group">
      <label>
        Weekly
        <input mbsc-segmented type="radio" name="range" checked>
      </label>
      <label>
        Monthly
        <input mbsc-segmented type="radio" name="range">
      </label>
    </div>
  </div>
</div>

<div id="showing-popover-list">
  <div mbsc-form>
    <div class="mbsc-form-group-inset">
      <p>Some updates are available for you. <br> When would you like to install them?</p>
    </div>
    <div class="mbsc-form-group-inset">
      <label>
        <input mbsc-radio type="radio" name="update" value="Right now" checked /> Right now
      </label>
      <label>
        <input mbsc-radio type="radio" name="update" value="Later on today" /> Later on today
      </label>
      <label>
        <input mbsc-radio type="radio" name="update" value="Remind me tomorrow" /> Remind me tomorrow
      </label>
    </div>
  </div>
</div>
  `,
};
