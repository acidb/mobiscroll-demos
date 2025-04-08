import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-datetime-time-picker',
  templateUrl: './time-picker.html',
  standalone: false,
})
export class AppComponent {}
