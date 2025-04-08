import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-week-select',
  templateUrl: './week-select.html',
  standalone: false,
})
export class AppComponent {}
