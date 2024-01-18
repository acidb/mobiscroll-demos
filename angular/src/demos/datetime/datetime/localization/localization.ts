import { Component } from '@angular/core';
import { setOptions, localeEs } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-datetime-localization',
  templateUrl: './localization.html',
})
export class AppComponent {
  myLocale = localeEs; // sets the language of the component
}
