import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-forms-mobile',
  templateUrl: './mobile.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {}
