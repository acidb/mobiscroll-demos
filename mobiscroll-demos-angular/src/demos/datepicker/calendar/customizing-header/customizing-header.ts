import { Component, ViewEncapsulation } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-customizing-header',
  styleUrl: './customizing-header.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './customizing-header.html',
  standalone: false,
})
export class AppComponent {
  view = 'week';
  calendarType: any = 'week';
  changeView(): void {
    setTimeout(() => {
      switch (this.view) {
        case 'week':
          this.calendarType = 'week';
          break;
        case 'month':
          this.calendarType = 'month';
          break;
      }
    });
  }
}
