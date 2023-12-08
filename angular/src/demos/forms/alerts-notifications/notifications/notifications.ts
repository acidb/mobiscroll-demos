import { Component } from '@angular/core';
import { setOptions, Notifications } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'notifications',
  templateUrl: './notifications.html',
})
export class AppComponent {
  constructor(public notify: Notifications) {}

  showBottomToast = () => {
    this.notify.toast({
      message: 'Message sent',
    });
  };

  showTopToast = () => {
    this.notify.toast({
      message: 'Message sent',
      display: 'top',
    });
  };

  showPrimaryToast = () => {
    this.notify.toast({
      message: 'Message sent',
      color: 'primary',
    });
  };

  showSecondaryToast = () => {
    this.notify.toast({
      message: 'Message sent',
      color: 'secondary',
    });
  };

  showSuccessToast = () => {
    this.notify.toast({
      message: 'Message sent',
      color: 'success',
    });
  };

  showDangerToast = () => {
    this.notify.toast({
      message: 'Message sent',
      color: 'danger',
    });
  };

  showWarningToast = () => {
    this.notify.toast({
      message: 'Message sent',
      color: 'warning',
    });
  };

  showInfoToast = () => {
    this.notify.toast({
      message: 'Message sent',
      color: 'info',
    });
  };

  showBottomSnackbar = () => {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
    });
  };

  showTopSnackbar = () => {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
      display: 'top',
    });
  };

  showSnackbarAction = () => {
    this.notify.snackbar({
      message: 'Connection timed out. Showing limited messages.',
      button: {
        text: 'Retry',
        action: () => {
          this.notify.toast({
            message: 'Retrying...',
          });
        },
      },
    });
  };

  showPrimarySnackbar = () => {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
      color: 'primary',
    });
  };

  showSecondarySnackbar = () => {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
      color: 'secondary',
    });
  };

  showSuccessSnackbar = () => {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
      color: 'success',
    });
  };

  showDangerSnackbar = () => {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
      color: 'danger',
    });
  };

  showWarningSnackbar = () => {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
      color: 'warning',
    });
  };

  showInfoSnackbar = () => {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
      color: 'info',
    });
  };
}
