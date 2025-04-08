import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-forms-themes-ios-material-windows',
  templateUrl: './themes-ios-material-windows.html',
  standalone: false,
})
export class AppComponent {
  sel = 'Opel';
  sw = true;
  ch = true;
  ra = 1;
}
