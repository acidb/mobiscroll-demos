import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-week-to-month',
  styleUrl: './week-to-month.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './week-to-month.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
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
