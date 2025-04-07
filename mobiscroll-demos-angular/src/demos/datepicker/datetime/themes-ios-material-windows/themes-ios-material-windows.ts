import { Component } from '@angular/core';
import { MbscDatepickerOptions /* localeImport */ } from '@mobiscroll/angular';

@Component({
  selector: 'app-datetime-themes-ios-material-windows',
  templateUrl: './themes-ios-material-windows.html',
  standalone: false,
})
export class AppComponent {
  datetimeSettings: MbscDatepickerOptions = {
    // locale,
    theme: 'material', // Can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', it will automatically be set based on the platform
    themeVariant: 'dark', // Can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
  };
}
