import { Component } from '@angular/core';
import { setOptions, Notifications } from '@mobiscroll/angular';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});

@Component({
  selector: 'buttons',
  templateUrl: './buttons.html',
})
export class AppComponent {
  constructor(public notify: Notifications) {}

  actionToast(): void {
    this.notify.toast({
      message: 'Button was clicked',
    });
  }
}
