import { Component, ViewEncapsulation } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-half-day-styling',
  styleUrl: './half-day-styling.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './half-day-styling.html',
})
export class AppComponent {
  myColors = [
    { date: 'dyndatetime(y,m,12)', cellCssClass: 'check-in' },
    { date: 'dyndatetime(y,m,16)', cellCssClass: 'check-out' },
    { start: 'dyndatetime(y,m,13)', end: 'dyndatetime(y,m,15)', background: '#46c4f3' },
  ];
}
