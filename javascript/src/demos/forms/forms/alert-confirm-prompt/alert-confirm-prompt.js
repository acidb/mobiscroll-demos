import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    document.getElementById('show-alert').addEventListener('click', function () {
      mobiscroll.alert({
        title: 'Cellular Data is Turned Off for "Safari"',
        message: `You can turn on cellular data for \n\r this app in Settings.`,
      });
    });

    document.getElementById('show-confirm').addEventListener('click', function () {
      mobiscroll.confirm({
        title: 'Use location service?',
        message: 'Help apps determine location. This means sending anonymous location data, even when no apps are running.',
        okText: 'Agree',
        cancelText: 'Disagree',
        cssClass: 'teszt',
        duration: 1000000000000000,
      });
    });

    document.getElementById('show-prompt').addEventListener('click', function () {
      mobiscroll.prompt({
        title: 'Sign in to iTunes Store',
        message: 'Enter the Apple ID password for "hello@mobiscroll.com".',
        placeholder: 'Password',
        inputType: 'password',
      });
    });
  },
  markup: `
<button mbsc-button id="show-alert">Alert</button>
<button mbsc-button id="show-confirm">Confirm</button>
<button mbsc-button id="show-prompt">Prompt</button>
  `,
};
