import { Component } from '@angular/core';
import { localeEs, setOptions } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-calendar-localization',
  templateUrl: './localization.html',
  standalone: false,
})
export class AppComponent {
  myLocale = localeEs; // Sets the language of the component
}
