import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarColor,
  MbscCalendarEvent,
  MbscCellHoverEvent,
  MbscEventcalendarOptions,
  MbscEventCreateEvent,
  MbscEventDeleteEvent,
  MbscEventDragEvent,
  MbscEventUpdateEvent,
  MbscModule,
  MbscNewEventData,
  MbscResource,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

interface Shift {
  startHour: number;
  endHour: number;
  title: string;
  color: string;
  nextDay?: boolean;
}

@Component({
  selector: 'app-24-hour-manufacturing-shift-rota-planning',
  standalone: true,
  imports: [CommonModule, MbscModule],
  templateUrl: './24-hour-manufacturing-shift-rota-planning.html',
  styleUrls: ['./24-hour-manufacturing-shift-rota-planning.css'],
  providers: [Notifications],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  shifts: Record<string, Shift> = {
    morning: { startHour: 6, endHour: 14, title: 'Morning Shift', color: '#4a8c4d' },
    afternoon: { startHour: 14, endHour: 22, title: 'Afternoon Shift', color: '#f87c6b' },
    night: { startHour: 22, endHour: 6, nextDay: true, title: 'Night Shift', color: '#8567AD' },
  };

  getShiftByHour(hour: number) {
    if (hour >= 6 && hour < 14) {
      return this.shifts['morning'];
    }
    if (hour >= 14 && hour < 22) {
      return this.shifts['afternoon'];
    }
    if (hour >= 22 || hour < 6) {
      return this.shifts['night'];
    }
    return this.shifts['afternoon'];
  }

  calculateStart(start: Date): Date {
    const d = new Date(start);
    const originalHour = d.getHours();
    const shift = this.getShiftByHour(originalHour);
    d.setHours(shift.startHour, 0, 0, 0);
    if (shift.startHour === 22 && originalHour < 6) {
      d.setDate(d.getDate() - 1);
    }
    return d;
  }

  calculateEnd(start: Date): Date {
    const d = new Date(start);
    const startHour = d.getHours();
    const shift = this.getShiftByHour(d.getHours());
    d.setHours(shift.endHour, 0, 0, 0);
    if (shift.nextDay && startHour === 22) {
      d.setDate(d.getDate() + 1);
    }
    return d;
  }

  getTitle(startHours: number): string {
    return this.getShiftByHour(startHours).title;
  }

  getColor(startHours: number): string {
    return this.getShiftByHour(startHours).color;
  }

  morningColor = '#4a8c4d';
  afternoonColor = '#f87c6b';
  nightColor = '#8567AD';

  draggedEventStart: Date | null = null;
  draggedEventEnd: Date | null = null;
  draggedEventResource: string | null = null;
  availableSlotOnHover: MbscCalendarColor | null = null;
  redResources: Record<string, boolean> = {};
  colors: MbscCalendarColor[] = [];

  getAvailableSlots(inst: any, resourceId: string, dayStart: Date): Record<string, boolean> {
    const dayEnd = new Date(dayStart);
    dayEnd.setDate(dayEnd.getDate() + 1);
    dayEnd.setHours(6, 0, 0, 0);
    const dayEvents = inst.getEvents(dayStart, dayEnd);
    const slots: Record<string, boolean> = { morning: true, afternoon: true, night: true };
    dayEvents.forEach((e: MbscCalendarEvent) => {
      if (e.resource === resourceId) {
        slots['morning'] = slots['afternoon'] = slots['night'] = false;
      } else {
        const startHour = new Date(e.start as Date).getHours();
        if (startHour === 6) {
          slots['morning'] = false;
        } else if (startHour === 14) {
          slots['afternoon'] = false;
        } else if (startHour === 22) {
          slots['night'] = false;
        }
      }
    });
    return slots;
  }

  clearColorsForResource(colors: MbscCalendarColor[], resourceId: string, date: Date): MbscCalendarColor[] {
    const base = new Date(date);
    base.setHours(0, 0, 0, 0);
    const baseTime = +base;
    return colors.filter((c) => {
      if (c.resource === resourceId) {
        const cDate = new Date(c.start as Date);
        cDate.setHours(0, 0, 0, 0);
        if (+cDate === baseTime) {
          const hour = new Date(c.start as Date).getHours();
          if (hour === 6 || hour === 14 || hour === 22) {
            return false;
          }
        }
      }
      return true;
    });
  }

  myEvents: MbscCalendarEvent[] = [
    { resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d-6,6'), end: dyndatetime('y,m,d-6,14'), color: this.morningColor },
    {
      resource: 'B',
      title: 'Afternoon Shift',
      start: dyndatetime('y,m,d-6,14'),
      end: dyndatetime('y,m,d-6,22'),
      color: this.afternoonColor,
    },
    { resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d-6,22'), end: dyndatetime('y,m,d-5,6'), color: this.nightColor },
    { resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d-5,6'), end: dyndatetime('y,m,d-5,14'), color: this.morningColor },
    {
      resource: 'B',
      title: 'Afternoon Shift',
      start: dyndatetime('y,m,d-5,14'),
      end: dyndatetime('y,m,d-5,22'),
      color: this.afternoonColor,
    },
    { resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d-5,22'), end: dyndatetime('y,m,d-4,6'), color: this.nightColor },
    //<hide-comment>
    { resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d-4,6'), end: dyndatetime('y,m,d-4,14'), color: this.morningColor },
    {
      resource: 'B',
      title: 'Afternoon Shift',
      start: dyndatetime('y,m,d-4,14'),
      end: dyndatetime('y,m,d-4,22'),
      color: this.afternoonColor,
    },
    { resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d-4,22'), end: dyndatetime('y,m,d-3,6'), color: this.nightColor },
    { resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d-3,6'), end: dyndatetime('y,m,d-3,14'), color: this.morningColor },
    {
      resource: 'A',
      title: 'Afternoon Shift',
      start: dyndatetime('y,m,d-3,14'),
      end: dyndatetime('y,m,d-3,22'),
      color: this.afternoonColor,
    },
    { resource: 'B', title: 'Night Shift', start: dyndatetime('y,m,d-3,22'), end: dyndatetime('y,m,d-2,6'), color: this.nightColor },
    { resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d-2,6'), end: dyndatetime('y,m,d-2,14'), color: this.morningColor },
    {
      resource: 'A',
      title: 'Afternoon Shift',
      start: dyndatetime('y,m,d-2,14'),
      end: dyndatetime('y,m,d-2,22'),
      color: this.afternoonColor,
    },
    { resource: 'B', title: 'Night Shift', start: dyndatetime('y,m,d-2,22'), end: dyndatetime('y,m,d-1,6'), color: this.nightColor },
    { resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d-1,6'), end: dyndatetime('y,m,d-1,14'), color: this.morningColor },
    {
      resource: 'A',
      title: 'Afternoon Shift',
      start: dyndatetime('y,m,d-1,14'),
      end: dyndatetime('y,m,d-1,22'),
      color: this.afternoonColor,
    },
    { resource: 'B', title: 'Night Shift', start: dyndatetime('y,m,d-1,22'), end: dyndatetime('y,m,d,6'), color: this.nightColor },
    { resource: 'B', title: 'Morning Shift', start: dyndatetime('y,m,d,6'), end: dyndatetime('y,m,d,14'), color: this.morningColor },
    { resource: 'C', title: 'Afternoon Shift', start: dyndatetime('y,m,d,14'), end: dyndatetime('y,m,d,22'), color: this.afternoonColor },
    { resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d,22'), end: dyndatetime('y,m,d+1,6'), color: this.nightColor },
    { resource: 'B', title: 'Morning Shift', start: dyndatetime('y,m,d+1,6'), end: dyndatetime('y,m,d+1,14'), color: this.morningColor },
    {
      resource: 'C',
      title: 'Afternoon Shift',
      start: dyndatetime('y,m,d+1,14'),
      end: dyndatetime('y,m,d+1,22'),
      color: this.afternoonColor,
    },
    { resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d+1,22'), end: dyndatetime('y,m,d+2,6'), color: this.nightColor },
    { resource: 'B', title: 'Morning Shift', start: dyndatetime('y,m,d+2,6'), end: dyndatetime('y,m,d+2,14'), color: this.morningColor },
    {
      resource: 'C',
      title: 'Afternoon Shift',
      start: dyndatetime('y,m,d+2,14'),
      end: dyndatetime('y,m,d+2,22'),
      color: this.afternoonColor,
    },
    { resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d+2,22'), end: dyndatetime('y,m,d+3,6'), color: this.nightColor },
    { resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d+3,6'), end: dyndatetime('y,m,d+3,14'), color: this.morningColor },
    {
      resource: 'B',
      title: 'Afternoon Shift',
      start: dyndatetime('y,m,d+3,14'),
      end: dyndatetime('y,m,d+3,22'),
      color: this.afternoonColor,
    },
    { resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d+3,22'), end: dyndatetime('y,m,d+4,6'), color: this.nightColor },
    { resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d+4,6'), end: dyndatetime('y,m,d+4,14'), color: this.morningColor },
    {
      resource: 'B',
      title: 'Afternoon Shift',
      start: dyndatetime('y,m,d+4,14'),
      end: dyndatetime('y,m,d+4,22'),
      color: this.afternoonColor,
    },
    { resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d+4,22'), end: dyndatetime('y,m,d+5,6'), color: this.nightColor },
    { resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d+5,6'), end: dyndatetime('y,m,d+5,14'), color: this.morningColor },
    {
      resource: 'B',
      title: 'Afternoon Shift',
      start: dyndatetime('y,m,d+5,14'),
      end: dyndatetime('y,m,d+5,22'),
      color: this.afternoonColor,
    },
    { resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d+5,22'), end: dyndatetime('y,m,d+6,6'), color: this.nightColor },
    { resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d+6,6'), end: dyndatetime('y,m,d+6,14'), color: this.morningColor },
    {
      resource: 'B',
      title: 'Afternoon Shift',
      start: dyndatetime('y,m,d+6,14'),
      end: dyndatetime('y,m,d+6,22'),
      color: this.afternoonColor,
    },
    { resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d+6,22'), end: dyndatetime('y,m,d+7,6'), color: this.nightColor },
    { resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d+7,6'), end: dyndatetime('y,m,d+7,14'), color: this.morningColor },
    {
      resource: 'B',
      title: 'Afternoon Shift',
      start: dyndatetime('y,m,d+7,14'),
      end: dyndatetime('y,m,d+7,22'),
      color: this.afternoonColor,
    },
    { resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d+7,22'), end: dyndatetime('y,m,d+8,6'), color: this.nightColor },
    { resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d+8,6'), end: dyndatetime('y,m,d+8,14'), color: this.morningColor },
    {
      resource: 'B',
      title: 'Afternoon Shift',
      start: dyndatetime('y,m,d+8,14'),
      end: dyndatetime('y,m,d+8,22'),
      color: this.afternoonColor,
    },
    { resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d+8,22'), end: dyndatetime('y,m,d+9,6'), color: this.nightColor },
    //</hide-comment>
  ];

  myResources: MbscResource[] = [
    { id: 'A', name: 'Crew A' },
    { id: 'B', name: 'Crew B' },
    { id: 'C', name: 'Crew C' },
  ];

  myOptions: MbscEventcalendarOptions = {
    cssClass: 'mds-24-hour-manufacturing-calendar',
    dragToMove: true,
    dragToCreate: false,
    clickToCreate: 'single',
    dragToResize: false,
    dragTimeStep: 480,
    eventDelete: true,
    eventOverlap: false,
    extendDefaultEvent: (args: MbscNewEventData): MbscCalendarEvent => {
      const start = new Date(args.start);
      const newStart = this.calculateStart(start);
      const newEnd = this.calculateEnd(start);
      const title = this.getTitle(newStart.getHours());
      const color = this.getColor(newStart.getHours());
      return {
        title: title,
        start: newStart,
        end: newEnd,
        color: color,
      };
    },
    onCellHoverIn: (args: MbscCellHoverEvent, inst) => {
      const hoveredDate = new Date(args.date);
      const shift = this.getShiftByHour(hoveredDate.getHours());
      if (!shift) {
        return;
      }

      const dayStart = new Date(args.date);
      dayStart.setHours(6, 0, 0, 0);
      const availableSlots = this.getAvailableSlots(inst, String(args.resource.id), dayStart);
      const slotKey = Object.keys(availableSlots).find((key) => availableSlots[key] && this.shifts[key].startHour === shift.startHour);
      if (slotKey) {
        const startTime = new Date(dayStart);
        startTime.setHours(this.shifts[slotKey].startHour, 0, 0, 0);
        const endTime = new Date(+startTime + 8 * 60 * 60 * 1000 - 1);
        this.availableSlotOnHover = {
          background: '#c1ffe180',
          cssClass: 'available-slot mbsc-font-icon mbsc-icon-plus',
          start: (+startTime + 1) as any,
          end: endTime,
          resource: String(args.resource.id),
        };
        this.colors = [...this.colors, this.availableSlotOnHover!];
      }
    },
    onCellHoverOut: () => {
      if (this.availableSlotOnHover) {
        this.colors = this.colors.filter((c) => c !== this.availableSlotOnHover);
        this.availableSlotOnHover = null;
      }
    },
    onEventCreate: (args: MbscEventCreateEvent, inst) => {
      const event = args.event;
      const dayStart = new Date(event.start as Date);
      dayStart.setHours(6, 0, 0, 0);
      const dayEnd = new Date(dayStart);
      dayEnd.setDate(dayEnd.getDate() + 1);
      dayEnd.setHours(6, 0, 0, 0);
      const dayEvents = inst.getEvents(dayStart, dayEnd);
      const conflict = dayEvents.find(
        (ev) => ev.resource === event.resource || +new Date(ev.start as Date) === +new Date(event.start as Date),
      );
      if (conflict) {
        this.notify.toast({ message: 'Already assigned' });
        return false;
      }
      this.colors = this.clearColorsForResource(this.colors, event.resource as string, event.start as Date);
      const day = new Date(event.start as Date);
      day.setHours(0, 0, 0, 0);
      this.redResources[String(event.resource) + day.toISOString()] = false;
      this.availableSlotOnHover = null;
      return;
    },
    onEventClick: () => {
      this.notify.toast({
        message: 'Already assigned',
      });
    },
    onEventDelete: (args: MbscEventDeleteEvent) => {
      const colorStart = new Date(args.event.start as Date);
      colorStart.setHours(6, 0, 0, 0);
      const colorEnd = new Date(args.event.start as Date);
      colorEnd.setDate(colorEnd.getDate() + 1);
      colorEnd.setHours(6, 0, 0, 0);

      this.colors = [
        ...this.colors,
        { start: colorStart, end: colorEnd, background: '#ffdbd280', resource: args.event.resource as string },
      ];
      const resource = args.event.resource as string;
      const day = new Date(args.event.start as Date);
      day.setHours(0, 0, 0, 0);
      this.redResources[resource + day.toISOString()] = true;
      this.notify.toast({
        message: (args.event.title as string) + ' deleted',
      });
    },
    onEventDragStart: (args: MbscEventDragEvent) => {
      this.draggedEventStart = args.event.start as Date | null;
      this.draggedEventEnd = args.event.end as Date | null;
      this.draggedEventResource = args.event.resource as string | null;
    },
    onEventUpdateFailed: () => {
      this.notify.toast({
        message: 'Already assigned',
      });
    },
    onEventUpdate: (args: MbscEventUpdateEvent, inst) => {
      const event = args.event;
      const dayStart = new Date(event.start as Date);
      dayStart.setHours(6, 0, 0, 0);
      const dragStartDay = new Date(this.draggedEventStart!);
      dragStartDay.setHours(6, 0, 0, 0);
      if (+dayStart !== +dragStartDay) {
        return false;
      }

      const dayEvents = inst.getEvents(dayStart);
      const conflicts = dayEvents.filter(
        (ev) => ev.id !== event.id && (ev.resource === event.resource || +new Date(ev.start as Date) === +new Date(event.start as Date)),
      );
      const evStart = new Date(event.start as Date);
      event.title = this.getTitle(evStart.getHours());
      event.color = this.getColor(evStart.getHours());

      if (conflicts.length) {
        let shouldReturn = false;
        conflicts.forEach((sh) => {
          const shStart = new Date(sh.start as Date);
          if (shStart.getHours() === evStart.getHours()) {
            shouldReturn = true;
          }
        });
        if (shouldReturn) {
          this.notify.toast({ message: 'Already assigned' });
          return false;
        }
        inst.updateEvent([...conflicts, event]);
      } else {
        if (
          dayEvents.some((ev) => {
            const evStartDate = new Date(ev.start as Date);
            return evStartDate.getHours() === evStart.getHours() && ev.resource === event.resource;
          })
        ) {
          this.notify.toast({ message: 'Already assigned' });
          return false;
        }
      }

      this.colors = this.clearColorsForResource(this.colors, event.resource as string, event.start as Date);
      const day = new Date(event.start as Date);
      day.setHours(0, 0, 0, 0);
      this.redResources[String(event.resource) + day.toISOString()] = false;
      if (!conflicts.length && event.resource !== this.draggedEventResource) {
        const colorEnd = new Date(dayStart);
        colorEnd.setDate(colorEnd.getDate() + 1);
        colorEnd.setHours(6, 0, 0, 0);
        this.colors = [
          ...this.colors,
          { start: dayStart, end: colorEnd, background: '#ffdbd280', resource: args.oldEvent!.resource as string },
        ];
        this.redResources[(args.oldEvent!.resource as string) + day.toISOString()] = true;
      }
      this.draggedEventStart = null;
      this.draggedEventEnd = null;
      this.draggedEventResource = null;
      return;
    },
    groupBy: 'date',
    resources: this.myResources,
    view: {
      schedule: {
        type: 'week',
        allDay: false,
        startTime: '06:00',
        endTime: '06:00+1',
        timeCellStep: 120,
        timeLabelStep: 120,
      },
    },
  };

  getResourceStyle(resource: MbscResource, day: Date): Record<string, string> {
    return day && this.redResources[resource.id + day.toISOString()]
      ? { color: '#53000080', background: '#ffdbd280', margin: '-0.5em', padding: '0.5em' }
      : {};
  }
}
