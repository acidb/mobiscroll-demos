import { Component } from '@angular/core';
import { MbscDatepickerOptions /* localeImport */ } from '@mobiscroll/angular';

@Component({
  selector: 'app-calendar-themes-ios-material-windows',
  templateUrl: './themes-ios-material-windows.html',
})
export class AppComponent {
  calendarSettings: MbscDatepickerOptions = {
    // locale,
    theme: 'material', // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
    themeVariant: 'dark', // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
  };
}
