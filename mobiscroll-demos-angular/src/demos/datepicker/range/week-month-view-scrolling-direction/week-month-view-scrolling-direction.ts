import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-range-week-month-view-scrolling-direction',
  templateUrl: './week-month-view-scrolling-direction.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {}
