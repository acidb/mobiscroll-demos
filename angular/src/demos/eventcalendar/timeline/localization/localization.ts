import { Component, OnInit } from '@angular/core';
import { locale, setOptions, MbscEventcalendarOptions, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // theme
});

@Component({
  selector: 'localization',
  templateUrl: './localization.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];
  localeStr = 'en';
  localeAll = locale;

  settings: MbscEventcalendarOptions = {
    view: {
      timeline: { type: 'week' },
    },
  };

  myResources = [
    {
      id: 1,
      name: 'Ryan',
      color: '#fdf500',
    },
    {
      id: 2,
      name: 'Kate',
      color: '#ff4600',
    },
    {
      id: 3,
      name: 'John',
      color: '#ff0101',
    },
    {
      id: 4,
      name: 'Mark',
      color: '#239a21',
    },
    {
      id: 5,
      name: 'Sharon',
      color: '#8f1ed6',
    },
    {
      id: 6,
      name: 'Ashley',
      color: '#01adff',
    },
  ];

  languages = [
    {
      value: 'en',
      name: 'English',
    },
    {
      value: 'ar',
      name: 'Arabic',
    },
    {
      value: 'bg',
      name: 'Bulgarian',
    },
    {
      value: 'ca',
      name: 'Català',
    },
    {
      value: 'cs',
      name: 'Cestina',
    },
    {
      value: 'zh',
      name: 'Chinese',
    },
    {
      value: 'hr',
      name: 'Croatian',
    },
    {
      value: 'da',
      name: 'Dansk',
    },
    {
      value: 'de',
      name: 'Deutsch',
    },
    {
      value: 'en-GB',
      name: 'English (UK)',
    },
    {
      value: 'es',
      name: 'Español',
    },
    {
      value: 'fr',
      name: 'Français',
    },
    {
      value: 'el',
      name: 'Greek',
    },
    {
      value: 'hi',
      name: 'Hindi',
    },
    {
      value: 'it',
      name: 'Italiano',
    },
    {
      value: 'ja',
      name: 'Japanese',
    },
    {
      value: 'ko',
      name: 'Korean',
    },
    {
      value: 'lt',
      name: 'Lietuvių',
    },
    {
      value: 'hu',
      name: 'Magyar',
    },
    {
      value: 'nl',
      name: 'Nederlands',
    },
    {
      value: 'no',
      name: 'Norsk',
    },
    {
      value: 'pl',
      name: 'Polski',
    },
    {
      value: 'pt-PT',
      name: 'Português Europeu',
    },
    {
      value: 'pt-BR',
      name: 'Pt. Brasileiro',
    },
    {
      value: 'ro',
      name: 'Româna',
    },
    {
      value: 'sr',
      name: 'Serbian',
    },
    {
      value: 'sk',
      name: 'Slovencina',
    },
    {
      value: 'fi',
      name: 'Suomi',
    },
    {
      value: 'sv',
      name: 'Svenska',
    },
    {
      value: 'th',
      name: 'Thai',
    },
    {
      value: 'tr',
      name: 'Türkçe',
    },
    {
      value: 'ua',
      name: 'Ukrainian',
    },
    {
      value: 'vi',
      name: 'Vietnamese',
    },
    {
      value: 'ru',
      name: 'Русский',
    },
    {
      value: 'ru-UA',
      name: 'Русский (UA)',
    },
    {
      value: 'he',
      name: 'עברית',
    },
    {
      value: 'fa',
      name: 'فارسی',
    },
  ];

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/timeline-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
