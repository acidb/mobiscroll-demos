import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
      themeVariant: 'light',
    });

    // DESCRIPTION V1
    // To show the popup, you can use different approaches: open it by clicking a designated button, clicking on an input cell,
    // or hovering over a specified area, making it easy to use in various scenarios.

    $(function () {
      var account = $('#demo')
        .mobiscroll()
        .popup({
          display: 'center',
        })
        .mobiscroll('getInst');

      var update = $('#list')
        .mobiscroll()
        .popup({
          display: 'center',
          onSet: function (event, inst) {
            $('#showPopup').val($('input[name="update"]:checked').val());
          },
        })
        .mobiscroll('getInst');

      var scrollable = $('#scrollable')
        .mobiscroll()
        .popup({
          display: 'center',
          scrollLock: false,
          cssClass: 'mbsc-no-padding md-content-scroll',
          buttons: [],
        })
        .mobiscroll('getInst');

      // $('#listview')
      //   .mobiscroll()
      //   .listview({
      //     enhance: true,
      //     swipe: false,
      //     onItemTap: function () {
      //       scrollable.hide();
      //       mobiscroll.toast({
      //         message: event.target.textContent + ' clicked',
      //       });
      //     },
      //   });

      $('#showAccount').click(function () {
        account.open();
        return false;
      });

      $('#showPopup').click(function () {
        update.open();
        return false;
      });

      $('#showScrollable').click(function () {
        scrollable.open();
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
      <div class="mbsc-btn-group-block">
          <button mbsc-button id="showAccount">Show Popup</button>
      </div>
  </div>
  <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">With return value</div>
      <label> Update
          <input mbsc-input id="showPopup" placeholder="Please Select..." readonly />
      </label>
  </div>
  <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">With scrollable content</div>
      <div class="mbsc-btn-group-block">
          <button mbsc-button id="showScrollable">Show Popup</button>
      </div>
  </div>
</div>

<div id="demo" class="mbsc-cloak">
  <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/f1.png">
      <h3>Liza Taylor</h3>
      <p>liza.taylor@mobiscroll.com <br> (202) 555-0127</p>
  </div>
</div>

<div id="list" class="mbsc-cloak">
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

<div id="scrollable" class="mbsc-cloak">
  <ul id="listview" class="mbsc-cloak">
      <li data-icon="connection">Wifi</li>
      <li data-icon="location">Location</li>
      <li data-icon="volume-medium">Sound</li>
      <li data-icon="fa-rotate-left">Rotation</li>
      <li data-icon="ion-bluetooth">Bluetooth</li>
      <li data-icon="cogs">Settings</li>
      <li data-icon="user4">Reading</li>
      <li data-icon="download">Data</li>
      <li data-icon="eye">Eye comfort</li>
      <li data-icon="mobile">Screenshot</li>
      <li data-icon="airplane">Airplane Mode</li>
      <li data-icon="alarm2">Alarm</li>
      <li data-icon="material-message">Messages</li>
      <li data-icon="meteo-weather4">Weather</li>
      <li data-icon="camera">Camera</li>
      <li data-icon="material-photo-size-select-large">Edit</li>
  </ul>
</div>


  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `

.md-content-scroll .mbsc-fr-c {
    height: 400px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

.md-content-scroll .mbsc-popup {
    filter: blur(8px);
}
`,
};
