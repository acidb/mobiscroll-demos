import { Component, ViewEncapsulation } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'quarter-year-view',
  styleUrl: './quarter-year-view.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './quarter-year-view.html',
})
export class AppComponent {
  viewType = 'q4';
  calType: 'year' | 'month' | 'week' = 'month';
  selectedDate = new Date();
  activeDate = new Date();

  changeView(): void {
    const year = this.activeDate.getFullYear();
    let date: Date;
    switch (this.viewType) {
      case 'q1':
        this.calType = 'month';
        date = new Date(year, 1, 1);
        break;
      case 'q2':
        this.calType = 'month';
        date = new Date(year, 4, 1);
        break;
      case 'q3':
        this.calType = 'month';
        date = new Date(year, 7, 1);
        break;
      case 'q4':
        this.calType = 'month';
        date = new Date(year, 10, 1);
        break;
      case 'year':
        this.calType = 'year';
        date = new Date(year, this.selectedDate.getMonth(), 1);
        break;
      default:
        this.calType = 'year';
        date = new Date(year, this.selectedDate.getMonth(), 1);
    }
    this.selectedDate = date;
    this.activeDate = date;
  }
  onPageChange(args: any): void {
    let type = '';
    if (this.calType === 'year') {
      type = 'year';
    } else {
      const month = args.firstDay.getMonth();
      if (month < 3) {
        type = 'q1';
      } else if (month < 6) {
        type = 'q2';
      } else if (month < 9) {
        type = 'q3';
      } else {
        type = 'q4';
      }
    }
    this.viewType = type;
    this.activeDate = args.firstDay;
  }
}
