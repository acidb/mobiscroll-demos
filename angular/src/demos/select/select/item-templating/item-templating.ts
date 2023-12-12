import { Component, ViewEncapsulation } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'item-templating',
  styleUrl: './item-templating.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './item-templating.html',
})
export class AppComponent {
  myData = [
    {
      text: 'Mercury – Act 1',
      year: '2021',
      artist: 'Imagine Dragons',
      value: '56243',
      img: 'Mercury_Act_1',
    },
    {
      text: 'Divide',
      year: '2017',
      artist: 'Ed Sheeran',
      value: '18659',
      img: 'Divide',
    },
    {
      text: 'Evolution',
      year: '2018',
      artist: 'Disturbed',
      value: '88459',
      img: 'Evolution',
    },
    {
      text: 'Future Nostalgia',
      year: '2020',
      artist: 'Dua Lipa',
      value: '65422',
      img: 'Future_Nostalgia',
    },
    {
      text: 'Blue Banisters',
      year: '2021',
      artist: 'Lana Del Rey',
      value: '67111',
      img: 'Blue_Banisters',
    },
    {
      text: 'Human',
      year: '2021',
      artist: 'OneRepublic',
      value: '60589',
      img: 'Human',
    },
    {
      text: 'Kamikaze',
      year: '2018',
      artist: 'Eminem',
      value: '42122',
      img: 'Kamikaze',
    },
    {
      text: 'Simulation Theory',
      year: '2018',
      artist: 'Muse',
      value: '80040',
      img: 'Simulation_Theory',
    },
    {
      text: 'The Nothing',
      year: '2019',
      artist: 'Korn',
      value: '46611',
      img: 'Nothing',
    },
  ];
}
