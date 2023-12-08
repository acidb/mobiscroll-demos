import { Component } from '@angular/core';
import { setOptions } from '@mobiscroll/angular';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});

@Component({
  selector: 'stepper',
  templateUrl: './stepper.html',
})
export class AppComponent {}
