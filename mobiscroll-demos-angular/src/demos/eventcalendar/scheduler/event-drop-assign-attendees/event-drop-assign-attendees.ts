import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscEventcalendarView,
  MbscItemDragEvent,
  MbscModule,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-event-drop-assign-attendees',
  styleUrl: './event-drop-assign-attendees.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './event-drop-assign-attendees.html',
  providers: [Notifications],
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  constructor(private notify: Notifications) { }

  rooms = [
    { id: 1, name: 'Conference Room' },
    { id: 2, name: 'Board Room' },
    { id: 3, name: 'Meeting Room' },
    { id: 4, name: 'Training Room' },
  ];

  meetings: MbscCalendarEvent[] = [
    { id: 'evt1', title: 'Sprint Planning', start: dyndatetime('y,m,d,9'), end: dyndatetime('y,m,d,11'), resource: 1, color: '#b52db9', attendees: [] },
    { id: 'evt2', title: 'Budget Review', start: dyndatetime('y,m,d,10'), end: dyndatetime('y,m,d,13'), resource: 2, color: '#669ce2', attendees: [] },
    { id: 'evt3', title: 'Client Presentation', start: dyndatetime('y,m,d,15'), end: dyndatetime('y,m,d,18'), resource: 2, color: '#88bd42', attendees: [] },
    { id: 'evt4', title: 'Project Kickoff', start: dyndatetime('y,m,d,9'), end: dyndatetime('y,m,d,11'), resource: 3, color: '#b6962f', attendees: [] },
    { id: 'evt5', title: 'New Hire Orientation', start: dyndatetime('y,m,d,13'), end: dyndatetime('y,m,d,16'), resource: 4, color: '#c864f0', attendees: [] },
    { id: 'evt6', title: 'Design Review', start: dyndatetime('y,m,d,13'), end: dyndatetime('y,m,d,15'), resource: 1, color: '#c7682d', attendees: [] },
    { id: 'evt7', title: 'Product Demo', start: dyndatetime('y,m,d+1,9'), end: dyndatetime('y,m,d+1,11'), resource: 1, color: '#ad2b6c', attendees: [] },
    { id: 'evt8', title: 'Stakeholder Update', start: dyndatetime('y,m,d+1,10'), end: dyndatetime('y,m,d+1,12'), resource: 2, color: '#0f60ca', attendees: [] },
    { id: 'evt9', title: 'Code Review', start: dyndatetime('y,m,d+1,10'), end: dyndatetime('y,m,d+1,12'), resource: 3, color: '#56a823', attendees: [] },
    { id: 'evt10', title: 'Safety Training', start: dyndatetime('y,m,d+1,13'), end: dyndatetime('y,m,d+1,16'), resource: 4, color: '#aa36d8', attendees: [] },
    { id: 'evt11', title: 'Retrospective', start: dyndatetime('y,m,d+2,9'), end: dyndatetime('y,m,d+2,11'), resource: 1, color: '#c45f20', attendees: [] },
    { id: 'evt12', title: 'Board Briefing', start: dyndatetime('y,m,d+2,13'), end: dyndatetime('y,m,d+2,16'), resource: 2, color: '#1e58a5', attendees: [] },
    { id: 'evt13', title: 'Marketing Sync', start: dyndatetime('y,m,d+2,10'), end: dyndatetime('y,m,d+2,12'), resource: 3, color: '#549e27', attendees: [] },
    { id: 'evt14', title: 'API Workshop', start: dyndatetime('y,m,d+2,13'), end: dyndatetime('y,m,d+2,16'), resource: 4, color: '#7c1ca1', attendees: [] },
    { id: 'evt15', title: 'Architecture Review', start: dyndatetime('y,m,d+3,9'), end: dyndatetime('y,m,d+3,11,30'), resource: 1, color: '#a7511c', attendees: [] },
    { id: 'evt16', title: 'Quarterly Planning', start: dyndatetime('y,m,d+3,13'), end: dyndatetime('y,m,d+3,16'), resource: 2, color: '#13488d', attendees: [] },
    { id: 'evt17', title: 'Hiring Debrief', start: dyndatetime('y,m,d+3,10'), end: dyndatetime('y,m,d+3,12'), resource: 3, color: '#51ac19', attendees: [] },
  ];

  employees = [
    { id: 'emp1', name: 'Alice Martin', avatar: 'AM', color: '#e74c3c' },
    { id: 'emp2', name: 'Bob Johnson', avatar: 'BJ', color: '#3498db' },
    { id: 'emp3', name: 'Carol Smith', avatar: 'CS', color: '#2ecc71' },
    { id: 'emp4', name: 'David Lee', avatar: 'DL', color: '#f39c12' },
    { id: 'emp5', name: 'Eva Chen', avatar: 'EC', color: '#9b59b6' },
    { id: 'emp6', name: 'Frank Diaz', avatar: 'FD', color: '#1abc9c' },
    { id: 'emp7', name: 'Grace Kim', avatar: 'GK', color: '#e67e22' },
    { id: 'emp8', name: 'Henry Patel', avatar: 'HP', color: '#34495e' },
    { id: 'emp9', name: 'Ivy Torres', avatar: 'IT', color: '#e84393' },
  ];

  isExternalDragging = false;
  dropStateMap: Record<string, string> = {};

  calendarView: MbscEventcalendarView = {
    scheduler: {
      type: 'week',
      startDay: 1,
      endDay: 5,
      startTime: '08:00',
      endTime: '18:00',
      timeCellStep: 30,
      timeLabelStep: 30,
      virtualScroll: false,
    },
  };

  calendarOptions: MbscEventcalendarOptions = {
    dragToCreate: false,
    dragToMove: false,
    dragToResize: false,
    clickToCreate: false,
    eventDelete: false,
    showEventTooltip: false,
  };

  getAssignmentCount(empId: string): number {
    let count = 0;
    for (const m of this.meetings) {
      const attendees = (m as any).attendees || [];
      count += attendees.filter((a: any) => a.id === empId).length;
    }
    return count;
  }

  findConflict(empId: string, targetEventId: string): MbscCalendarEvent | null {
    const target = this.meetings.find((m) => m.id === targetEventId);
    if (!target) return null;

    const targetStart = new Date(target.start as string).getTime();
    const targetEnd = new Date(target.end as string).getTime();

    for (const m of this.meetings) {
      if (m.id === targetEventId) continue;
      const attendees = (m as any).attendees || [];
      if (!attendees.some((a: any) => a.id === empId)) continue;

      const mStart = new Date(m.start as string).getTime();
      const mEnd = new Date(m.end as string).getTime();

      if (mStart < targetEnd && mEnd > targetStart) return m;
    }

    return null;
  }

  onEventDrop(args: MbscItemDragEvent, eventId: string): void {
    const employee = args.data;
    const meeting = this.meetings.find((m) => m.id === eventId) as any;
    if (!meeting) return;

    this.dropStateMap[eventId] = '';

    // Prevent duplicate assignment
    if (meeting.attendees.some((a: any) => a.id === employee.id)) {
      this.notify.toast({
        message: employee['name'] + ' is already assigned',
        color: 'danger',
      });
      return;
    }

    // Check for time conflicts
    const conflict = this.findConflict(employee.id as string, eventId);
    if (conflict) {
      this.notify.toast({
        message: employee['name'] + ' already has a ' + conflict.title + ' on this timeslot',
        color: 'danger',
      });
      return;
    }

    meeting.attendees = [...meeting.attendees, { id: employee.id, name: employee['name'], avatar: employee['avatar'], color: employee['color'] }];
    this.meetings = [...this.meetings];

    this.notify.toast({
      message: employee['name'] + ' assigned to ' + meeting.title,
      color: 'success',
    });
  }

  onEventDragEnter(args: MbscItemDragEvent, eventId: string): void {
    const employee = args.data;
    const meeting = this.meetings.find((m) => m.id === eventId) as any;

    if (employee && meeting && employee.id) {
      if (meeting.attendees.some((a: any) => a.id === employee.id) || this.findConflict(employee.id as string, eventId)) {
        this.dropStateMap[eventId] = 'conflict';
      } else {
        this.dropStateMap[eventId] = 'active';
      }
    } else {
      this.dropStateMap[eventId] = 'active';
    }

    this.dropStateMap = { ...this.dropStateMap };
  }

  onEventDragLeave(eventId: string): void {
    this.dropStateMap = { ...this.dropStateMap, [eventId]: '' };
  }

  removeAttendee(eventId: string, empId: string): void {
    const meeting = this.meetings.find((m) => m.id === eventId) as any;
    if (!meeting) return;

    const idx = meeting.attendees.findIndex((a: any) => a.id === empId);
    if (idx === -1) return;

    const removedAtt = meeting.attendees[idx];
    meeting.attendees = [...meeting.attendees.slice(0, idx), ...meeting.attendees.slice(idx + 1)];
    this.meetings = [...this.meetings];

    this.notify.snackbar({
      message: removedAtt.name + ' removed from ' + meeting.title,
      button: {
        text: 'Undo',
        action: () => {
          meeting.attendees = [...meeting.attendees.slice(0, idx), removedAtt, ...meeting.attendees.slice(idx)];
          this.meetings = [...this.meetings];
          this.notify.toast({
            message: 'Assignment restored',
            color: 'success',
          });
        },
      },
    });
  }

  onEmployeePointerDown(): void {
    const onMove = () => {
      this.isExternalDragging = true;
      document.removeEventListener('pointermove', onMove);
    };
    const onUp = () => {
      this.isExternalDragging = false;
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onUp);
    };
    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onUp);
  }
}
