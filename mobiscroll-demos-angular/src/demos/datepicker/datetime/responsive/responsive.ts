import { Component } from '@angular/core';
import { MbscDatepickerOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-datetime-responsive',
  templateUrl: './responsive.html',
})
export class AppComponent {
  responsiveDrop: { [key: string]: MbscDatepickerOptions & { breakpoint?: number } } = {
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

  responsiveCal: { [key: string]: MbscDatepickerOptions & { breakpoint?: number } } = {
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
