import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscDatepickerOptions, MbscModule /* localeImport */ } from '@mobiscroll/angular';

@Component({
  selector: 'app-range-themes-ios-material-windows',
  templateUrl: './themes-ios-material-windows.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  rangeSettings: MbscDatepickerOptions = {
    // locale,
    theme: 'material', // Can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', it will automatically be set based on the platform
    themeVariant: 'dark', // Can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
  };
}
