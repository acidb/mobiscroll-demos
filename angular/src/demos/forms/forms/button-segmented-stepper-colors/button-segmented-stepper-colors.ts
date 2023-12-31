import { Component } from '@angular/core';
import { setOptions } from '@mobiscroll/angular';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});

@Component({
  selector: 'button-segmented-stepper-colors',
  templateUrl: './button-segmented-stepper-colors.html',
})
export class AppComponent {
  primary = 100;
  secondary = 100;
  success = 100;
  danger = 100;
  warning = 100;
  info = 100;
}
