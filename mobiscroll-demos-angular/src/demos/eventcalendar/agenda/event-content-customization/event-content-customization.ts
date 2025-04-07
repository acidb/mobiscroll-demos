import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-event-content-customization',
  styleUrl: './event-content-customization.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './event-content-customization.html',
  providers: [Notifications],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  myParticipants: { [key: number]: { img: string; name: string } } = {
    1: { name: 'Barry L.', img: 'https://img.mobiscroll.com/demos/m1.png' },
    2: { name: 'Hortense T.', img: 'https://img.mobiscroll.com/demos/f1.png' },
    3: { name: 'Carl H.', img: 'https://img.mobiscroll.com/demos/m2.png' },
  };

  myView: MbscEventcalendarView = {
    calendar: { type: 'week' },
    agenda: { type: 'day' },
  };

  add(data: MbscCalendarEvent): void {
    this.notify.toast({
      message: data.title + ' clicked',
    });
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/custom-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
