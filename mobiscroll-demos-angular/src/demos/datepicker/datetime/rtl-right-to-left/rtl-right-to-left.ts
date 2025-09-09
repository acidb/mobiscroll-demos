import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-datetime-rtl-right-to-left',
  templateUrl: './rtl-right-to-left.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {}
