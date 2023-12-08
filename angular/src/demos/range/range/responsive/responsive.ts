import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'responsive',
  templateUrl: './responsive.html',
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
