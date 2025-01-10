import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-date-time-picker',
  templateUrl: './date-time-picker.html',
  standalone: false,
})
export class AppComponent {}
