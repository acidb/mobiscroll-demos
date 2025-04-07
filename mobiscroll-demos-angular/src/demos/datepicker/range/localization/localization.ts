import { Component } from '@angular/core';
import { localeEs, setOptions } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-range-localization',
  templateUrl: './localization.html',
  standalone: false,
})
export class AppComponent {
  myLocale = localeEs; // sets the language of the component
}
