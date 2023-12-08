import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'formatting-return-values',
  templateUrl: './formatting-return-values.html',
})
export class AppComponent {
  now = new Date();
}
