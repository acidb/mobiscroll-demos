import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // theme
    });

    document.getElementById('md-toast-bottom').addEventListener('click', function () {
      mobiscroll.toast({
        //<hidden>
        // theme, //</hidden>
        message: 'Message sent',
      });
    });

    document.getElementById('md-toast-top').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Message sent',
        display: 'top',
      });
    });

    document.getElementById('md-toast-primary').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Message sent',
        color: 'primary',
      });
    });

    document.getElementById('md-toast-secondary').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Message sent',
        color: 'secondary',
      });
    });

    document.getElementById('md-toast-success').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Message sent',
        color: 'success',
      });
    });

    document.getElementById('md-toast-danger').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Message sent',
        color: 'danger',
      });
    });

    document.getElementById('md-toast-warning').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Message sent',
        color: 'warning',
      });
    });

    document.getElementById('md-toast-info').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Message sent',
        color: 'info',
      });
    });

    document.getElementById('md-snackbar-bottom').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
      });
    });

    document.getElementById('md-snackbar-top').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
        display: 'top',
      });
    });

    document.getElementById('md-snackbar-action').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Connection timed out. Showing limited messages.',
        button: {
          text: 'Retry',
          action: function () {
            mobiscroll.toast({
              message: 'Retrying...',
            });
          },
        },
      });
    });

    document.getElementById('md-snackbar-primary').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
        color: 'primary',
      });
    });

    document.getElementById('md-snackbar-secondary').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
        color: 'secondary',
      });
    });

    document.getElementById('md-snackbar-success').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
        color: 'success',
      });
    });

    document.getElementById('md-snackbar-danger').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
        color: 'danger',
      });
    });

    document.getElementById('md-snackbar-warning').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
        color: 'warning',
      });
    });

    document.getElementById('md-snackbar-info').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
        color: 'info',
      });
    });
  },
  markup: `
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Toast</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="md-toast-bottom">Bottom toast</button>
        <button mbsc-button id="md-toast-top">Top toast</button>
        <button mbsc-button id="md-toast-primary">Primary toast</button>
        <button mbsc-button id="md-toast-secondary">Secondary toast</button>
        <button mbsc-button id="md-toast-success">Success toast</button>
        <button mbsc-button id="md-toast-danger">Danger toast</button>
        <button mbsc-button id="md-toast-warning">Warning toast</button>
        <button mbsc-button id="md-toast-info">Info toast</button>
    </div>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Snackbar</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="md-snackbar-bottom">Bottom snackbar</button>
        <button mbsc-button id="md-snackbar-top">Top snackbar</button>
        <button mbsc-button id="md-snackbar-action">Snackbar with action</button>
        <button mbsc-button id="md-snackbar-primary">Primary snackbar</button>
        <button mbsc-button id="md-snackbar-secondary">Secondary snackbar</button>
        <button mbsc-button id="md-snackbar-success">Success snackbar</button>
        <button mbsc-button id="md-snackbar-danger">Danger snackbar</button>
        <button mbsc-button id="md-snackbar-warning">Warning snackbar</button>
        <button mbsc-button id="md-snackbar-info">Info snackbar</button>
    </div>
</div>
  `,
};
