import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-forms-responsive',
  styleUrl: './responsive.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './responsive.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {}
