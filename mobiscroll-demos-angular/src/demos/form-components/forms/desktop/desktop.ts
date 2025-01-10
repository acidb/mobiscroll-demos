import { Component, ViewEncapsulation } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-forms-desktop',
  styleUrl: './desktop.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './desktop.html',
  standalone: false,
})
export class AppComponent {}
