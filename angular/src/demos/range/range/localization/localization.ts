import { Component } from '@angular/core';
import { setOptions, localeEs /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'localization',
  templateUrl: './localization.html',
})
export class AppComponent {
  myLocale = localeEs; // sets the language of the component
}
