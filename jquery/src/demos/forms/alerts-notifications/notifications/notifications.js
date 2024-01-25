import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // theme
    });

    $(function () {
      $('#md-toast-bottom').on('click', function () {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Message sent',
        });
      });

      $('#md-toast-top').on('click', function () {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Message sent',
          display: 'top',
        });
      });

      $('#md-toast-primary').on('click', function () {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Message sent',
          color: 'primary',
        });
      });

      $('#md-toast-secondary').on('click', function () {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Message sent',
          color: 'secondary',
        });
      });

      $('#md-toast-success').on('click', function () {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Message sent',
          color: 'success',
        });
      });

      $('#md-toast-danger').on('click', function () {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Message sent',
          color: 'danger',
        });
      });

      $('#md-toast-warning').on('click', function () {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Message sent',
          color: 'warning',
        });
      });

      $('#md-toast-info').on('click', function () {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Message sent',
          color: 'info',
        });
      });

      $('#md-snackbar-bottom').on('click', function () {
        mobiscroll.snackbar({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Your draft has been discarded',
        });
      });

      $('#md-snackbar-top').on('click', function () {
        mobiscroll.snackbar({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Your draft has been discarded',
          display: 'top',
        });
      });

      $('#md-snackbar-action').on('click', function () {
        mobiscroll.snackbar({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Connection timed out. Showing limited messages.',
          button: {
            text: 'Retry',
            action: function () {
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: 'Retrying...',
              });
            },
          },
        });
      });

      $('#md-snackbar-primary').on('click', function () {
        mobiscroll.snackbar({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Your draft has been discarded',
          color: 'primary',
        });
      });

      $('#md-snackbar-secondary').on('click', function () {
        mobiscroll.snackbar({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Your draft has been discarded',
          color: 'secondary',
        });
      });

      $('#md-snackbar-success').on('click', function () {
        mobiscroll.snackbar({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Your draft has been discarded',
          color: 'success',
        });
      });

      $('#md-snackbar-danger').on('click', function () {
        mobiscroll.snackbar({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Your draft has been discarded',
          color: 'danger',
        });
      });

      $('#md-snackbar-warning').on('click', function () {
        mobiscroll.snackbar({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Your draft has been discarded',
          color: 'warning',
        });
      });

      $('#md-snackbar-info').on('click', function () {
        mobiscroll.snackbar({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Your draft has been discarded',
          color: 'info',
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
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
