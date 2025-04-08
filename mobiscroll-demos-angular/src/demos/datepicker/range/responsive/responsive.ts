import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-range-responsive',
  templateUrl: './responsive.html',
  standalone: false,
})
export class AppComponent {
  responsive: any = {
    xsmall: {
      display: 'bottom',
    },
    small: {
      display: 'bubble',
    },
    custom: {
      // Custom breakpoint
      breakpoint: 800,
      display: 'bubble',
      touchUi: false,
    },
  };
}
