import { Component, ViewEncapsulation } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'responsive',
  styleUrl: './responsive.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './responsive.html',
})
export class AppComponent {}
