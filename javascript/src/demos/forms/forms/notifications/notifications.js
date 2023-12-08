import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    document.getElementById('bottom-toast').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Message sent',
      });
    });

    document.getElementById('top-toast').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Message sent',
        display: 'top',
      });
    });

    document.getElementById('primary-toast').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Message sent',
        color: 'primary',
      });
    });

    document.getElementById('secondary-toast').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Message sent',
        color: 'secondary',
      });
    });

    document.getElementById('success-toast').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Message sent',
        color: 'success',
      });
    });

    document.getElementById('danger-toast').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Message sent',
        color: 'danger',
      });
    });

    document.getElementById('warning-toast').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Message sent',
        color: 'warning',
      });
    });

    document.getElementById('info-toast').addEventListener('click', function () {
      mobiscroll.toast({
        message: 'Message sent',
        color: 'info',
      });
    });

    document.getElementById('bottom-snackbar').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
      });
    });

    document.getElementById('top-snackbar').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
        display: 'top',
      });
    });

    document.getElementById('action-snackbar').addEventListener('click', function () {
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

    document.getElementById('primary-snackbar').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
        color: 'primary',
      });
    });

    document.getElementById('secondary-snackbar').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
        color: 'secondary',
      });
    });

    document.getElementById('success-snackbar').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
        color: 'success',
      });
    });

    document.getElementById('danger-snackbar').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
        color: 'danger',
      });
    });

    document.getElementById('warning-snackbar').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
        color: 'warning',
      });
    });

    document.getElementById('info-snackbar').addEventListener('click', function () {
      mobiscroll.snackbar({
        message: 'Your draft has been discarded',
        color: 'info',
      });
    });
  },
  markup: `
<div class="mbsc-from-group">
    <div class="mbsc-form-group-title">Toast</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="bottom-toast">Bottom toast</button>
        <button mbsc-button id="top-toast">Top toast</button>
        <button mbsc-button id="primary-toast">Primary toast</button>
        <button mbsc-button id="secondary-toast">Secondary toast</button>
        <button mbsc-button id="success-toast">Success toast</button>
        <button mbsc-button id="danger-toast">Danger toast</button>
        <button mbsc-button id="warning-toast">Warning toast</button>
        <button mbsc-button id="info-toast">Info toast</button>
    </div>
</div>
<div class="mbsc-from-group">
    <div class="mbsc-form-group-title">Snackbar</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="bottom-snackbar">Bottom snackbar</button>
        <button mbsc-button id="top-snackbar">Top snackbar</button>
        <button mbsc-button id="action-snackbar">Snackbar with action</button>
        <button mbsc-button id="primary-snackbar">Primary snackbar</button>
        <button mbsc-button id="secondary-snackbar">Secondary snackbar</button>
        <button mbsc-button id="success-snackbar">Success snackbar</button>
        <button mbsc-button id="danger-snackbar">Danger snackbar</button>
        <button mbsc-button id="warning-snackbar">Warning snackbar</button>
        <button mbsc-button id="info-snackbar">Info snackbar</button>
    </div>
</div>
  `,
};
