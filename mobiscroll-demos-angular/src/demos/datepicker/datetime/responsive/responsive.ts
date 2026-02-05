import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscDatepickerOptions, MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-datetime-responsive',
  templateUrl: './responsive.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  responsiveDrop: Record<string, MbscDatepickerOptions & { breakpoint?: number }> = {
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

  responsiveCal: Record<string, MbscDatepickerOptions & { breakpoint?: number }> = {
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
