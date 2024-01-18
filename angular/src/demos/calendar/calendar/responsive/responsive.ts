import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-responsive',
  templateUrl: './responsive.html',
})
export class AppComponent {
  responsive: any = {
    xsmall: {
      display: 'bottom',
    },
    small: {
      display: 'anchored',
    },
    custom: {
      // Custom breakpoint
      breakpoint: 800,
      display: 'anchored',
      touchUi: false,
    },
  };
}
