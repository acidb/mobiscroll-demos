import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-forms-checkbox',
  templateUrl: './checkbox.html',
})
export class AppComponent {
  ch1 = true;
  ch2 = false;
  ch3 = false;
  ch4 = true;
  primary = true;
  secondary = true;
  success = true;
  danger = true;
  warning = true;
  info = true;
}
