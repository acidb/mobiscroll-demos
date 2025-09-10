import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscModule, setOptions } from '@mobiscroll/angular';

setOptions({
  // theme,
});

@Component({
  selector: 'app-forms-stepper',
  templateUrl: './stepper.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {}
