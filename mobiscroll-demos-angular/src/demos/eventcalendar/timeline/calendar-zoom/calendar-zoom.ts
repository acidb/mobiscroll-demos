import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MbscCalendarEvent,
  MbscEventcalendar,
  MbscEventcalendarView,
  MbscModule,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-calendar-zoom',
  templateUrl: './calendar-zoom.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @ViewChild('calendar', { static: false })
  public myCalendar!: MbscEventcalendar;

  public zoomLevel = 9;
  public refDate = this.getRefDate(new Date());

  public myEvents: MbscCalendarEvent[] = [];

  public myResources: MbscResource[] = [
    { color: '#e20000', id: 1, name: 'Resource A' },
    { color: '#76e083', id: 2, name: 'Resource B' },
    { color: '#4981d6', id: 3, name: 'Resource C' },
    { color: '#e25dd2', id: 4, name: 'Resource D' },
    { color: '#1dab2f', id: 5, name: 'Resource E' },
    { color: '#d6d145', id: 6, name: 'Resource F' },
  ];

  public myView: MbscEventcalendarView = {
    timeline: {
      zoomLevels: {
        1: { type: 'year', size: 25, resolutionHorizontal: 'year', columnWidth: 'small' },
        2: { type: 'year', size: 25, resolutionHorizontal: 'year', columnWidth: 'xlarge' },
        3: { type: 'year', size: 25, resolutionHorizontal: 'quarter', columnWidth: 'small' },
        4: { type: 'year', size: 25, resolutionHorizontal: 'quarter', columnWidth: 'xlarge' },
        5: { type: 'year', size: 25, resolutionHorizontal: 'month', columnWidth: 'medium' },
        6: { type: 'year', size: 25, resolutionHorizontal: 'month', columnWidth: 'xxxlarge' },
        7: { type: 'year', size: 25, resolutionHorizontal: 'week', columnWidth: 'medium' },
        8: { type: 'year', size: 25, resolutionHorizontal: 'week', columnWidth: 'xxxlarge' },
        9: { type: 'year', size: 25, resolutionHorizontal: 'day', columnWidth: 'small' },
        10: { type: 'year', size: 25, resolutionHorizontal: 'day', columnWidth: 'xlarge' },
        11: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 720, timeLabelStep: 720 },
        12: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 360, timeLabelStep: 360 },
        13: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 180, timeLabelStep: 180 },
        14: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'medium', timeCellStep: 60, timeLabelStep: 60 },
        15: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 30, columnWidth: 'medium' },
        16: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 30, columnWidth: 'xxxlarge' },
        17: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 15, timeLabelStep: 15, columnWidth: 'xxxlarge' },
        18: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 5, timeLabelStep: 5, columnWidth: 'large' },
      },
    },
  };

  public getRefDate(viewDate: Date): Date {
    if (this.zoomLevel < 11) {
      return new Date(viewDate.getFullYear() - 12, 0, 1);
    }
    if (this.zoomLevel < 15) {
      return new Date(viewDate.getFullYear() - 1, 0, 1);
    }
    return new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
  }

  public handleZoom(zoom: number): void {
    this.zoomLevel = Math.max(1, Math.min(zoom, 18));
    this.refDate = this.getRefDate(this.myCalendar.getViewDate());
  }

  public handleInput(ev: Event): void {
    this.handleZoom(+(ev.target as HTMLInputElement).value);
  }

  public ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/timeline-zoom-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
