import { Component } from '@angular/core';
import { setOptions } from '@mobiscroll/angular';

setOptions({
  // theme,
});

@Component({
  selector: 'app-forms-button-segmented-stepper-colors',
  templateUrl: './button-segmented-stepper-colors.html',
  standalone: false,
})
export class AppComponent {
  primary = 100;
  secondary = 100;
  success = 100;
  danger = 100;
  warning = 100;
  info = 100;
}
