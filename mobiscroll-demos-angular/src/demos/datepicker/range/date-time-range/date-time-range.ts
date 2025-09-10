import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-range-date-time-range',
  templateUrl: './date-time-range.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {}
