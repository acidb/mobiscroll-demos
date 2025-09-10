import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-week-view',
  templateUrl: './week-view.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {}
