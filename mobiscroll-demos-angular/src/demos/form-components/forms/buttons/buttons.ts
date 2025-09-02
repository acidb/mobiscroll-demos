import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscModule, Notifications, setOptions } from '@mobiscroll/angular';

setOptions({
  // theme,
});

@Component({
  selector: 'app-forms-buttons',
  templateUrl: './buttons.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  constructor(public notify: Notifications) {}

  actionToast(): void {
    this.notify.toast({
      message: 'Button was clicked',
    });
  }
}
