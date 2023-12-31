import { Component } from '@angular/core';
import { setOptions, MbscDatepickerOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'responsive',
  templateUrl: './responsive.html',
})
export class AppComponent {
  responsiveDrop: any = {
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

  responsiveCal: any = {
    xsmall: {
      controls: ['date'],
      display: 'bottom',
      touchUi: true,
    },
    small: {
      controls: ['date'],
      display: 'anchored',
      touchUi: true,
    },
    custom: {
      // Custom breakpoint
      breakpoint: 800,
      controls: ['calendar'],
      display: 'anchored',
      touchUi: false,
    },
  };
}
