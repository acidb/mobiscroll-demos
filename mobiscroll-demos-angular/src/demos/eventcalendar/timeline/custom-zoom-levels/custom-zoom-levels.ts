import { Component, ViewChild } from '@angular/core';
import { MbscEventcalendar, MbscEventcalendarView, MbscResource, setOptions } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-custom-zoom-levels',
  templateUrl: './custom-zoom-levels.html',
})
export class AppComponent {
  public refDate: Date = new Date(new Date().setDate(new Date().getDate() - 10));

  public zoomLevel = 4;
  public viewMode = 'timeline';

  @ViewChild('calendar', { static: false })
  public calendar!: MbscEventcalendar;

  public myView: MbscEventcalendarView = {
    timeline: {
      currentTimeIndicator: true,
      zoomLevels: {
        [-4]: { type: 'year', size: 9, resolutionHorizontal: 'year' },
        [-3]: { type: 'month', size: 12, resolutionHorizontal: 'month' },
        [-2]: { type: 'week', size: 9, resolutionHorizontal: 'week' },
        [-1]: { type: 'week', size: 5, resolutionHorizontal: 'day' },
        0: { type: 'week', size: 5, resolutionHorizontal: 'day', columnWidth: 'large' },
        1: { type: 'week', size: 5, resolutionHorizontal: 'day', columnWidth: 'xlarge' },
        2: { type: 'day', size: 5, resolutionHorizontal: 'hour', timeCellStep: 360, timeLabelStep: 360 },
        3: { type: 'day', size: 3, resolutionHorizontal: 'hour', timeCellStep: 180, timeLabelStep: 360 },
        4: { type: 'day', size: 3, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 60 },
      },
    },
  };

  public myResources: MbscResource[] = [
    { color: '#e20000', id: 1, name: 'Resource A' },
    { color: '#76e083', id: 2, name: 'Resource B' },
    { color: '#4981d6', id: 3, name: 'Resource C' },
    { color: '#e25dd2', id: 4, name: 'Resource D' },
    { color: '#1dab2f', id: 5, name: 'Resource E' },
    { color: '#d6d145', id: 6, name: 'Resource F' },
  ];

  public handleZoom(zoom: number): void {
    this.zoomLevel += zoom;
    const viewDate = this.calendar?.getViewDate() || new Date();

    const newRefDateMap: { [key: number]: Date } = {
      [-4]: new Date(viewDate.getFullYear() - 4, 0, 1),
      [-3]: new Date(viewDate.getFullYear(), viewDate.getMonth() - 5, 1),
      [-2]: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 28),
      [-1]: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 14),
      0: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 14),
      1: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 14),
      2: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 2),
      3: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 1),
      4: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 1),
    };

    this.refDate = newRefDateMap[this.zoomLevel] || viewDate;
  }
}
