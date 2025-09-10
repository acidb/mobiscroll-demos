import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-forms-desktop',
  styleUrl: './desktop.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './desktop.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {}
