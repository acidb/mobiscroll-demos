import { Component } from '@angular/core';
import { Notifications, setOptions } from '@mobiscroll/angular';

setOptions({
  // theme,
});

@Component({
  selector: 'app-forms-alert-confirm-prompt',
  templateUrl: './alert-confirm-prompt.html',
})
export class AppComponent {
  constructor(public notify: Notifications) {}

  showAlert(): void {
    this.notify.alert({
      title: 'Cellular Data is Turned Off for "Safari"',
      message: 'You can turn on cellular data for this app in Settings.',
    });
  }

  showConfirm(): void {
    this.notify.confirm({
      title: 'Use location service?',
      message: 'Help apps determinde location. This means sending anonymous location data, even when no apps are running.',
      okText: 'Agree',
      cancelText: 'Disagree',
    });
  }

  showPrompt(): void {
    this.notify.prompt({
      title: 'Sign in to iTunes Store',
      message: 'Enter the Apple ID password for "hello@mobiscroll.com".',
      placeholder: 'Password',
      inputType: 'password',
    });
  }
}
