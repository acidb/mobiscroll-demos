import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-range-adding-event-start-end',
  templateUrl: './adding-event-start-end.html',
  standalone: false,
})
export class AppComponent {
  allDay = false;
  showAs = 'busy';
  controls = ['datetime'];

  allDayChange(): void {
    this.controls = this.allDay ? ['date'] : ['datetime'];
  }
}
