import { Component } from '@angular/core';
import { Notifications, setOptions } from '@mobiscroll/angular';

setOptions({
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
      //<hidden>
      // theme,//</hidden>
      // context,
      title: 'Cellular Data is Turned Off for "Safari"',
      message: 'You can turn on cellular data for this app in Settings.',
      callback: () => {
        this.notify.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Alert closed',
        });
      },
    });
  };

  showConfirm = () => {
    this.notify.confirm({
      //<hidden>
      // theme,//</hidden>
      // context,
      title: 'Use location service?',
      message: 'Help apps determine location. This means sending anonymous location data, even when no apps are running.',
      okText: 'Agree',
      cancelText: 'Disagree',
      callback: (res) => {
        this.notify.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: res ? 'Agreed' : 'Disagreed',
        });
      },
    });
  };

  showPrompt = () => {
    this.notify.prompt({
      //<hidden>
      // theme,//</hidden>
      // context,
      title: 'Sign in to iTunes Store',
      message: 'Enter the Apple ID password for "hello@mobiscroll.com".',
      placeholder: 'Password',
      inputType: 'password',
      callback: (value) => {
        this.notify.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: value === null ? 'Cancel was pressed.' : 'The password: ' + value,
        });
      },
    });
  };
}
