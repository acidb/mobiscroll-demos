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
      text1: 'Mercury – Act 1',
      text: {},
      year: '2021',
      artist: 'Imagine Dragons',
      value: '56243',
      img: 'Mercury_Act_1',
    },
    {
      text1: 'Divide',
      text: {},
      year: '2017',
      artist: 'Ed Sheeran',
      value: '18659',
      img: 'Divide',
    },
    {
      text1: 'Evolution',
      text: {},
      year: '2018',
      artist: 'Disturbed',
      value: '88459',
      img: 'Evolution',
    },
    {
      text1: 'Future Nostalgia',
      text: {},
      year: '2020',
      artist: 'Dua Lipa',
      value: '65422',
      img: 'Future_Nostalgia',
    },
    {
      text1: 'Blue Banisters',
      year: '2021',
      artist: 'Lana Del Rey',
      value: '67111',
      img: 'Blue_Banisters',
    },
    {
      text1: 'Human',
      year: '2021',
      artist: 'OneRepublic',
      value: '60589',
      img: 'Human',
    },
    {
      text1: 'Kamikaze',
      year: '2018',
      artist: 'Eminem',
      value: '42122',
      img: 'Kamikaze',
    },
    {
      text1: 'Simulation Theory',
      year: '2018',
      artist: 'Muse',
      value: '80040',
      img: 'Simulation_Theory',
    },
    {
      text1: 'The Nothing',
      year: '2019',
      artist: 'Korn',
      value: '46611',
      img: 'Nothing',
    },
  ];
}
