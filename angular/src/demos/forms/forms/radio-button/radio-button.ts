import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.html',
})
export class AppComponent {
  group = 'opt1';
  colors = 'success';
}
