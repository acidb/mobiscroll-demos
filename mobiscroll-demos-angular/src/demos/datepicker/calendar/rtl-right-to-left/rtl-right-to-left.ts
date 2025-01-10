import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-rtl-right-to-left',
  templateUrl: './rtl-right-to-left.html',
  standalone: false,
})
export class AppComponent {}
