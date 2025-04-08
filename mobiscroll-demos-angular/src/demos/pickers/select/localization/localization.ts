import { Component } from '@angular/core';
import { localeEs, setOptions } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-select-localization',
  templateUrl: './localization.html',
  standalone: false,
})
export class AppComponent {
  myData = [
    {
      text: 'Atlanta',
      value: 'atl',
    },
    {
      text: 'Berlin',
      value: 'ber',
    },
    {
      text: 'Boston',
      value: 'bos',
    },
    {
      text: 'Chicago',
      value: 'chi',
    },
    {
      text: 'London',
      value: 'lon',
    },
    {
      text: 'Los Angeles',
      value: 'la',
    },
    {
      text: 'New York',
      value: 'ny',
    },
    {
      text: 'Paris',
      value: 'par',
    },
    {
      text: 'San Francisco',
      value: 'sf',
    },
  ];
  myLocale = localeEs; // Sets the language of the component
}
