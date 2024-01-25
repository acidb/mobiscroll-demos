import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscDateType, MbscEventcalendarOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-synchronized-views',
  styleUrl: './synchronized-views.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './synchronized-views.html',
})
export class AppComponent implements OnInit {
  selectedDate: MbscDateType;

  constructor(private http: HttpClient) {
    this.selectedDate = new Date();
  }

  myEvents: MbscCalendarEvent[] = [];

  monthSettings: MbscEventcalendarOptions = {
    view: {
      calendar: { popover: false, labels: false },
    },
  };

  daySettings: MbscEventcalendarOptions = {
    view: {
      agenda: { type: 'day' },
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp: any) => {
      this.myEvents = resp;
    });
  }
}
