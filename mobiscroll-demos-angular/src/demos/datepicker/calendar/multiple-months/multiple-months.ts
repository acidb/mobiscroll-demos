import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-multiple-months',
  templateUrl: './multiple-months.html',
  standalone: false,
})
export class AppComponent {}
