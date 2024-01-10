import { Component } from '@angular/core';
import { Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'alert',
  templateUrl: './alert.html',
})
export class AppComponent {
  constructor(public notify: Notifications) {}

  showAlert = () => {
    this.notify.alert({
      title: 'Cellular Data is Turned Off for "Safari"',
      message: 'You can turn on cellular data for this app in Settings.',
      callback: () => {
        this.notify.toast({
          message: 'Alert closed',
        });
      },
    });
  };

  showConfirm = () => {
    this.notify.confirm({
      title: 'Use location service?',
      message: 'Help apps determine location. This means sending anonymous location data, even when no apps are running.',
      okText: 'Agree',
      cancelText: 'Disagree',
      callback: (res) => {
        this.notify.toast({
          message: res ? 'Agreed' : 'Disagreed',
        });
      },
    });
  };

  showPrompt = () => {
    this.notify.prompt({
      title: 'Sign in to iTunes Store',
      message: 'Enter the Apple ID password for "hello@mobiscroll.com".',
      placeholder: 'Password',
      inputType: 'password',
      callback: (value) => {
        this.notify.toast({
          message: value === null ? 'Cancel was pressed.' : 'The password: ' + value,
        });
      },
    });
  };
}
