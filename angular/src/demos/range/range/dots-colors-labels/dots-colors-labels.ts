import { Component } from '@angular/core';
import { MbscEventcalendarOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();

@Component({
  selector: 'dots-colors-labels',
  templateUrl: './dots-colors-labels.html',
})
export class AppComponent {
  markedDays: Array<any> = [
    { recurring: { repeat: 'yearly', month: 5, day: 1 }, color: '#ffc400' },
    { recurring: { repeat: 'yearly', month: 12, day: 24 }, color: '#ffee00' },
    { recurring: { repeat: 'yearly', month: 12, day: 25 }, color: 'red' },
    { date: new Date(now.getFullYear(), now.getMonth() + 1, 4) },
    { date: new Date(now.getFullYear(), now.getMonth() - 2, 13) },
    { date: new Date(now.getFullYear(), now.getMonth(), 2), color: '#46c4f3' },
    { date: new Date(now.getFullYear(), now.getMonth(), 6), color: '#7e56bd' },
    { date: new Date(now.getFullYear(), now.getMonth(), 11), color: '#7e56bd' },
    { date: new Date(now.getFullYear(), now.getMonth(), 19), color: '#89d7c9' },
    { date: new Date(now.getFullYear(), now.getMonth(), 28), color: '#ea4986' },
    { date: new Date(now.getFullYear(), now.getMonth(), 13), color: '#7e56bd' },
    { date: new Date(now.getFullYear(), now.getMonth(), 13), color: '#f13f77' },
    { date: new Date(now.getFullYear(), now.getMonth(), 13), color: '#89d7c9' },
    { date: new Date(now.getFullYear(), now.getMonth(), 13), color: '#8dec7d' },
    { date: new Date(now.getFullYear(), now.getMonth(), 21), color: '#ffc400' },
    { date: new Date(now.getFullYear(), now.getMonth(), 21), color: '#8dec7d' },
    {
      start: new Date(now.getFullYear(), now.getMonth() + 1, 15),
      end: new Date(now.getFullYear(), now.getMonth() + 1, 18),
      color: '#f4511e',
    },
  ];

  coloredDays: Array<any> = [
    { recurring: { repeat: 'yearly', month: 12, day: 8 }, background: '#9ccc65' },
    { recurring: { repeat: 'yearly', month: 5, day: 1 }, background: 'red' },
    { recurring: { repeat: 'yearly', month: 12, day: 24 }, background: '#fff568' },
    { recurring: { repeat: 'yearly', month: 12, day: 25 }, background: '#e88080' },
    { date: new Date(now.getFullYear(), now.getMonth() + 1, 4), background: '#cfd8dc' },
    { date: new Date(now.getFullYear(), now.getMonth() + 2, 24), background: '#9575cd' },
    { date: new Date(now.getFullYear(), now.getMonth() - 2, 13), background: '#d4e157' },
    { date: new Date(now.getFullYear(), now.getMonth() - 1, 6), background: '#f4511e' },
    { date: new Date(now.getFullYear(), now.getMonth() + 1, 6), background: '#46c4f3' },
    { date: new Date(now.getFullYear(), now.getMonth() + 1, 22), background: '#7e56bd' },
    { date: new Date(now.getFullYear(), now.getMonth() - 1, 11), background: '#46c4f3' },
    { date: new Date(now.getFullYear(), now.getMonth() - 1, 29), background: '#7e56bd' },
    { date: new Date(now.getFullYear(), now.getMonth(), 2), background: '#46c4f3' },
    { date: new Date(now.getFullYear(), now.getMonth(), 3), background: '#7e56bd' },
    { date: new Date(now.getFullYear(), now.getMonth(), 11), background: '#f13f77' },
    { date: new Date(now.getFullYear(), now.getMonth(), 19), background: '#8dec7d' },
    { date: new Date(now.getFullYear(), now.getMonth(), 28), background: '#ea4986' },
    {
      start: new Date(now.getFullYear(), now.getMonth() + 1, 15),
      end: new Date(now.getFullYear(), now.getMonth() + 1, 18),
      text: 'Conference',
      background: '#f4511e',
    },
  ];

  labelDays: Array<any> = [
    { recurring: { repeat: 'yearly', month: 12, day: 25 }, title: 'Christmas', color: '#f48fb1' },
    { recurring: { repeat: 'yearly', month: 1, day: 1 }, title: 'New year' },
    { recurring: { repeat: 'yearly', month: 12, day: 1 }, title: 'Meeting', color: '#ffc400' },
    { date: new Date(now.getFullYear(), now.getMonth() + 1, 4), text: 'Spa day', color: '#cfd8dc' },
    { date: new Date(now.getFullYear(), now.getMonth() + 2, 24), text: 'BD Party', color: '#9ccc65' },
    { date: new Date(now.getFullYear(), now.getMonth() - 2, 13), text: 'Exams', color: '#d4e157' },
    { date: new Date(now.getFullYear(), now.getMonth() - 1, 6), text: 'Trip', color: '#f4511e' },
    { date: new Date(now.getFullYear(), now.getMonth() + 1, 6), color: '#46c4f3', text: 'Pizza Night' },
    { date: new Date(now.getFullYear(), now.getMonth() + 1, 22), color: '#7e56bd', text: 'Beerpong' },
    { date: new Date(now.getFullYear(), now.getMonth() - 1, 11), color: '#46c4f3', text: 'Anniversary' },
    { date: new Date(now.getFullYear(), now.getMonth() - 1, 29), color: '#7e56bd', text: 'Pete BD' },
    { date: new Date(now.getFullYear(), now.getMonth(), 2), color: '#46c4f3', text: 'Ana BD' },
    { date: new Date(now.getFullYear(), now.getMonth(), 3), color: '#7e56bd', text: 'Concert' },
    { date: new Date(now.getFullYear(), now.getMonth(), 11), color: '#f13f77', text: 'Trip' },
    { date: new Date(now.getFullYear(), now.getMonth(), 19), color: '#8dec7d', text: 'Math exam' },
    { date: new Date(now.getFullYear(), now.getMonth(), 28), color: '#ea4986', text: 'Party' },
    {
      start: new Date(now.getFullYear(), now.getMonth() + 1, 15),
      end: new Date(now.getFullYear(), now.getMonth() + 1, 18),
      text: 'Conference',
      color: '#f4511e',
    },
  ];
}
