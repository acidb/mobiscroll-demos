import { Component } from '@angular/core';
import { Notifications, setOptions } from '@mobiscroll/angular';

setOptions({
  // theme,
});

@Component({
  selector: 'app-forms-buttons',
  templateUrl: './buttons.html',
  standalone: false,
})
export class AppComponent {
  constructor(public notify: Notifications) {}

  actionToast(): void {
    this.notify.toast({
      message: 'Button was clicked',
    });
  }
}
