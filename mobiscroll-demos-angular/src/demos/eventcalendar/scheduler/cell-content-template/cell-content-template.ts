import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-cell-content-template',
  styleUrl: './cell-content-template.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cell-content-template.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  myEvents: MbscCalendarEvent[] = [
    {
      id: 1,
      title: 'Team Sync Meeting',
      start: dyndatetime('y, m, d - 1, 10, 15'),
      end: dyndatetime('y, m, d - 1, 11, 30'),
    },
    {
      id: 2,
      title: 'Apply Security Update',
      start: dyndatetime('y, m, d - 1, 15, 0'),
      end: dyndatetime('y, m, d - 1, 16, 0'),
    },
    {
      id: 3,
      title: 'Database Backup',
      start: dyndatetime('y, m, d - 2, 12, 0'),
      end: dyndatetime('y, m, d - 2, 13, 0'),
    },
    {
      id: 4,
      title: 'Project Kickoff & Coffee',
      start: dyndatetime('y, m, d - 2, 9, 0'),
      end: dyndatetime('y, m, d - 2, 10, 0'),
    },
    {
      id: 5,
      title: 'System Health Review',
      start: dyndatetime('y, m, d - 2, 8, 0'),
      end: dyndatetime('y, m, d - 2, 8, 45'),
    },
    {
      id: 6,
      title: 'Quarterly Health Audit',
      start: dyndatetime('y, m, d, 16, 0'),
      end: dyndatetime('y, m, d, 17, 0'),
    },
    {
      id: 7,
      title: 'Deployment Window',
      start: dyndatetime('y, m, d, 14, 0'),
      end: dyndatetime('y, m, d, 15, 0'),
    },
    {
      id: 8,
      title: 'Nightly Backup Prep',
      start: dyndatetime('y, m, d, 12, 0'),
      end: dyndatetime('y, m, d, 13, 0'),
    },
    {
      id: 9,
      title: 'Morning System Scan',
      start: dyndatetime('y, m, d, 8, 0'),
      end: dyndatetime('y, m, d, 8, 45'),
    },
    {
      id: 10,
      title: 'Sprint Review & Coffee',
      start: dyndatetime('y, m, d + 2, 9, 0'),
      end: dyndatetime('y, m, d + 2, 9, 45'),
    },
    {
      id: 11,
      title: 'Final Health Check',
      start: dyndatetime('y, m, d + 2, 16, 0'),
      end: dyndatetime('y, m, d + 2, 16, 45'),
    },
    {
      id: 12,
      title: 'Weekly Backup',
      start: dyndatetime('y, m, d + 2, 12, 0'),
      end: dyndatetime('y, m, d + 2, 12, 45'),
    },
    {
      id: 13,
      title: 'Morning Health Scan',
      start: dyndatetime('y, m, d + 1, 8, 15'),
      end: dyndatetime('y, m, d + 1, 9, 0'),
    },
    {
      id: 14,
      title: 'Afternoon Backup',
      start: dyndatetime('y, m, d + 1, 12, 15'),
      end: dyndatetime('y, m, d + 1, 13, 0'),
    },
  ];

  myView: MbscEventcalendarView = {
    scheduler: { type: 'week', startTime: '08:00', endTime: '18:00', startDay: 1, endDay: 5 },
  };

  getIcons(args: any) {
    const h = args.date.getHours();
    const d = args.date.getDay();
    const icons: { icon: string; title: string }[] = [];

    if ((d === 1 || d === 5) && h === 9) {
      icons.push(
        { icon: 'material-people', title: d === 1 ? 'Launch Meeting' : 'Sprint Review' },
        { icon: 'material-message', title: 'Coffee Break' },
      );
    }
    if (h === 13) icons.push({ icon: 'bubbles', title: 'Lunch Time' });
    if (d >= 1 && d <= 5 && h === 17) icons.push({ icon: 'clock', title: 'Wrap Up' });
    if (d === 2 && (h === 10 || h === 11)) icons.push({ icon: 'loop2', title: 'Dev Sync' });
    if (h % 4 === 0) icons.push({ icon: 'cogs', title: 'Health Check' });
    if (h === 3) icons.push({ icon: 'connection', title: 'Network Probe' });
    if (h === 12) icons.push({ icon: 'upload', title: 'Backup' });
    if (d === 3 && h === 14) icons.push({ icon: 'line-paperplane', title: 'Deploy Window' });

    return icons;
  }
}
