import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // theme
    });

    $(function () {
      $('#md-notif-alert').on('click', function () {
        mobiscroll.alert({
          //<hidden>
          // theme,//</hidden>
          // context,
          title: 'Cellular Data is Turned Off for "Safari"',
          message: 'You can turn on cellular data for this app in Settings.',
          callback: function () {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: 'Alert closed',
            });
          },
        });
      });

      $('#md-notif-confirm').on('click', function () {
        mobiscroll.confirm({
          //<hidden>
          // theme,//</hidden>
          // context,
          title: 'Use location service?',
          message: 'Help apps determine location. This means sending anonymous location data, even when no apps are running.',
          okText: 'Agree',
          cancelText: 'Disagree',
          callback: function (res) {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: res ? 'Agreed' : 'Disagreed',
            });
          },
        });
      });

      $('#md-notif-prompt').on('click', function () {
        mobiscroll.prompt({
          //<hidden>
          // theme,//</hidden>
          // context,
          title: 'Sign in to iTunes Store',
          message: 'Enter the Apple ID password for "hello@mobiscroll.com".',
          placeholder: 'Password',
          inputType: 'password',
          callback: function (value) {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: value === null ? 'Cancel was pressed.' : 'The password: ' + value,
            });
          },
        });
      });
    });
  },
  markup: `
<div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Alerts</div>
        <div class="mbsc-button-group-block">
            <button mbsc-button id="md-notif-alert">Alert</button>
            <button mbsc-button id="md-notif-confirm">Confirm</button>
            <button mbsc-button id="md-notif-prompt">Prompt</button>
        </div>
    </div>
  `,
};
