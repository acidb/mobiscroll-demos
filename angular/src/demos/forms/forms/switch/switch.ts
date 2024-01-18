import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-forms-switch',
  templateUrl: './switch.html',
})
export class AppComponent {
  sw1 = false;
  sw2 = true;
  sw3 = false;
  sw4 = true;
  primary = true;
  secondary = true;
  success = true;
  danger = true;
  warning = true;
  info = true;
}
