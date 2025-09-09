import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-forms-checkbox',
  templateUrl: './checkbox.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
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
