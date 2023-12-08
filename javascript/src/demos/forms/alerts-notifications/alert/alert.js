import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // theme
    });

    document.getElementById('md-notif-alert').addEventListener('click', function () {
      mobiscroll.alert({
        title: 'Cellular Data is Turned Off for "Safari"',
        message: 'You can turn on cellular data for this app in Settings.',
        callback: function () {
          mobiscroll.toast({
            message: 'Alert closed',
          });
        },
      });
    });

    document.getElementById('md-notif-confirm').addEventListener('click', function () {
      mobiscroll.confirm({
        title: 'Use location service?',
        message: 'Help apps determine location. This means sending anonymous location data, even when no apps are running.',
        okText: 'Agree',
        cancelText: 'Disagree',
        callback: function (res) {
          mobiscroll.toast({
            message: res ? 'Agreed' : 'Disagreed',
          });
        },
      });
    });

    document.getElementById('md-notif-prompt').addEventListener('click', function () {
      mobiscroll.prompt({
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
