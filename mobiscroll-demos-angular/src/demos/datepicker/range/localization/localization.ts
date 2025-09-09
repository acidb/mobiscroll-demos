import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { localeEs, MbscModule, setOptions } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-range-localization',
  templateUrl: './localization.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  myLocale = localeEs; // Sets the language of the component
}
