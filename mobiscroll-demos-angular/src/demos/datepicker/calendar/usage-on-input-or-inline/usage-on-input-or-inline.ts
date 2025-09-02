import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-usage-on-input-or-inline',
  templateUrl: './usage-on-input-or-inline.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {}
