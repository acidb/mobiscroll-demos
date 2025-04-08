import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-forms-radio-button',
  templateUrl: './radio-button.html',
  standalone: false,
})
export class AppComponent {
  group = 'opt1';
  colors = 'success';
}
