import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MbscCalendarEvent, MbscEventcalendarView, MbscModule, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale
});

@Component({
  selector: 'app-timeline-themes-ios-material-windows',
  styleUrl: './themes-ios-material-windows.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './themes-ios-material-windows.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  myEvents: MbscCalendarEvent[] = [];
  myResources: MbscResource[] = [
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
  myView: MbscEventcalendarView = { agenda: { type: 'month' } };

  theme = 'auto';
  themeVariant: 'auto' | 'light' | 'dark' = 'auto';

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/timeline-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
