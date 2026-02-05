import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-range-responsive',
  templateUrl: './responsive.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
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
