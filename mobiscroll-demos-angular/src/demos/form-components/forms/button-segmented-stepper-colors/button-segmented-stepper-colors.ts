import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MbscModule, setOptions } from '@mobiscroll/angular';

setOptions({
  // theme,
});

@Component({
  selector: 'app-forms-button-segmented-stepper-colors',
  templateUrl: './button-segmented-stepper-colors.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent {
  primary = 100;
  secondary = 100;
  success = 100;
  danger = 100;
  warning = 100;
  info = 100;
}
