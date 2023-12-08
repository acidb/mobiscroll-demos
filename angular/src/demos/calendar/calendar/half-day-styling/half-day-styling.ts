import { Component, ViewEncapsulation } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();

@Component({
  selector: 'half-day-styling',
  styleUrl: './half-day-styling.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './half-day-styling.html',
})
export class AppComponent {
  colors = [
    {
      date: new Date(year, month, 12),
      cellCssClass: 'check-in',
    },
    {
      date: new Date(year, month, 16),
      cellCssClass: 'check-out',
    },
    {
      start: new Date(year, month, 13),
      end: new Date(year, month, 15),
      background: '#46c4f3',
    },
  ];
}
