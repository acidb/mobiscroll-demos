import { Component, ViewEncapsulation } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'week-to-month',
  styleUrl: './week-to-month.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './week-to-month.html',
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
