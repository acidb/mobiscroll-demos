import { Component, ViewEncapsulation } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'desktop',
  styleUrl: './desktop.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './desktop.html',
})
export class AppComponent {}
