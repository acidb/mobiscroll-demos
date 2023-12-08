import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'themes-ios-material-windows',
  templateUrl: './themes-ios-material-windows.html',
})
export class AppComponent {
  sel = 'Opel';
  sw = true;
  ch = true;
  ra = 1;
}
