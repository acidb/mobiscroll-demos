import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendar, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { print } from '@mobiscroll/print';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-printing-the-view',
  styleUrl: './printing-the-view.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './printing-the-view.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @ViewChild('calendar', { static: false })
  calendar!: MbscEventcalendar;

  myEvents: MbscCalendarEvent[] = [];
  myModules = [print];
  myView: MbscEventcalendarView = {
    agenda: { type: 'month' },
  };

  print(): void {
    this.calendar.print();
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
