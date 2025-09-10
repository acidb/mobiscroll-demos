import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscModule, MbscSelectOptions /* localeImport */ } from '@mobiscroll/angular';

@Component({
  selector: 'app-select-themes-ios-material-windows',
  templateUrl: './themes-ios-material-windows.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
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
  selectSettings: MbscSelectOptions = {
    // locale,
    display: 'inline',
    theme: 'material', // Can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', it will automatically be set based on the platform
    themeVariant: 'dark', // Can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
  };
}
