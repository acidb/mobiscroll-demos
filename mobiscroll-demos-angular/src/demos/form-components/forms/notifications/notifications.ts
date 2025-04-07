import { Component } from '@angular/core';
import { Notifications, setOptions } from '@mobiscroll/angular';

setOptions({
  // theme,
});

@Component({
  selector: 'app-forms-notifications',
  templateUrl: './notifications.html',
  standalone: false,
})
export class AppComponent {
  constructor(public notify: Notifications) {}

  bottomToast(): void {
    this.notify.toast({
      message: 'Message sent',
    });
  }

  topToast(): void {
    this.notify.toast({
      message: 'Message sent',
      display: 'top',
    });
  }

  primaryToast(): void {
    this.notify.toast({
      message: 'Message sent',
      color: 'primary',
    });
  }

  secondaryToast(): void {
    this.notify.toast({
      message: 'Message sent',
      color: 'secondary',
    });
  }

  successToast(): void {
    this.notify.toast({
      message: 'Message sent',
      color: 'success',
    });
  }

  dangerToast(): void {
    this.notify.toast({
      message: 'Message sent',
      color: 'danger',
    });
  }

  warningToast(): void {
    this.notify.toast({
      message: 'Message sent',
      color: 'warning',
    });
  }

  infoToast(): void {
    this.notify.toast({
      message: 'Message sent',
      color: 'info',
    });
  }

  bottomSnackbar(): void {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
    });
  }

  topSnackbar(): void {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
      display: 'top',
    });
  }

  actionSnackbar(): void {
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
  }

  primarySnackbar(): void {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
      color: 'primary',
    });
  }

  secondarySnackbar(): void {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
      color: 'secondary',
    });
  }

  successSnackbar(): void {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
      color: 'success',
    });
  }

  dangerSnackbar(): void {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
      color: 'danger',
    });
  }

  warningSnackbar(): void {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
      color: 'warning',
    });
  }

  infoSnackbar(): void {
    this.notify.snackbar({
      message: 'Your draft has been discarded',
      color: 'info',
    });
  }
}
