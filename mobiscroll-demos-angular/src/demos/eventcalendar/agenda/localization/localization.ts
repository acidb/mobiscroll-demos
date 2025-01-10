import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { locale, MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-agenda-localization',
  styleUrl: './localization.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './localization.html',
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];
  myView: MbscEventcalendarView = {
    calendar: { type: 'week' },
    agenda: { type: 'day' },
  };

  localeStr = 'en';
  localeAll = locale;

  languages = [
    { name: 'Arabic', value: 'ar' },
    { name: 'Bulgarian', value: 'bg' },
    { name: 'Catala', value: 'ca' },
    { name: 'Cestina', value: 'cs' },
    { name: 'Dansk', value: 'da' },
    { name: 'Deutsch', value: 'de' },
    { name: 'Greek', value: 'el' },
    { name: 'English', value: 'en' },
    { name: 'English-UK', value: 'en-GB' },
    { name: 'Espanol', value: 'es' },
    { name: 'Farsi', value: 'fa' },
    { name: 'Suomi', value: 'fi' },
    { name: 'Français', value: 'fr' },
    { name: 'Hebrew', value: 'he' },
    { name: 'Hindi', value: 'hi' },
    { name: 'Croatian', value: 'hr' },
    { name: 'Magyar', value: 'hu' },
    { name: 'Italiano', value: 'it' },
    { name: 'Japanese', value: 'ja' },
    { name: 'Korean', value: 'ko' },
    { name: 'Lietuvių', value: 'lt' },
    { name: 'Nederlands', value: 'nl' },
    { name: 'Norsk', value: 'no' },
    { name: 'Polski', value: 'pl' },
    { name: 'Português Brasileiro', value: 'pt-BR' },
    { name: 'Português Europeu', value: 'pt-PT' },
    { name: 'Roman', value: 'ro' },
    { name: 'Russian UA', value: 'ru-UA' },
    { name: 'Russian', value: 'ru' },
    { name: 'Slovencina', value: 'sk' },
    { name: 'Serbian', value: 'sr' },
    { name: 'Svenska', value: 'sv' },
    { name: 'Thai', value: 'th' },
    { name: 'Türkçe', value: 'tr' },
    { name: 'Ukrainian', value: 'ua' },
    { name: 'Vietnamese', value: 'vi' },
    { name: 'Chinese', value: 'zh' },
  ];

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
