import { Component, ViewEncapsulation } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-week-to-month',
  styleUrl: './week-to-month.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './week-to-month.html',
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
