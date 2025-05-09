import { Component, ViewEncapsulation } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-customize-marked-day-shapes',
  styleUrl: './customize-marked-day-shapes.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './customize-marked-day-shapes.html',
  standalone: false,
})
export class AppComponent {
  marked = [
    { date: dyndatetime('y,m,2'), color: '#46c4f3', markCssClass: 'square-mark' },
    { date: dyndatetime('y,m,4'), color: '#159833', markCssClass: 'triangle-mark' },
    { date: dyndatetime('y,m,6'), color: '#b05cbf', markCssClass: 'square-mark' },
    { date: dyndatetime('y,m,6'), color: '#3adecf', markCssClass: 'triangle-mark' },
    { date: dyndatetime('y,m,6'), color: '#c8d235' },
    { date: dyndatetime('y,m,8'), color: '#46c4f3' },
    { date: dyndatetime('y,m,10'), color: '#7e56bd', markCssClass: 'square-mark' },
    { date: dyndatetime('y,m,13'), color: '#f13f77' },
    { date: dyndatetime('y,m,16'), color: '#21b326', markCssClass: 'square-mark' },
    { date: dyndatetime('y,m,16'), color: '#ffa93a', markCssClass: 'triangle-mark' },
    { date: dyndatetime('y,m,18'), color: '#89d7c9', markCssClass: 'triangle-mark' },
    { date: dyndatetime('y,m,21'), color: '#ffc400', markCssClass: 'square-mark' },
    { date: dyndatetime('y,m,26'), color: '#8dec7d', markCssClass: 'triangle-mark' },
  ];
}
