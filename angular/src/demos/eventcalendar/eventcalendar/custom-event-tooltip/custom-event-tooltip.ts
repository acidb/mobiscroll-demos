import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscPopupOptions,
  MbscPopup,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

interface MyEvent extends MbscCalendarEvent {
  age?: number;
  confirmed?: boolean;
  location?: string;
  reason?: string;
}

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'custom-event-tooltip',
  styleUrl: './custom-event-tooltip.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './custom-event-tooltip.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}
  @ViewChild('popup', { static: false })
  tooltip!: MbscPopup;

  appointments: MyEvent[] = [
    {
      title: 'Jude Chester',
      age: 69,
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9)',
      confirmed: false,
      reason: 'Headaches morning & afternoon',
      location: 'Topmed, Building A, Room 203',
      color: '#b33d3d',
    },
    {
      title: 'Leon Porter',
      age: 44,
      start: 'dyndatetime(y,m,d,9)',
      end: 'dyndatetime(y,m,d,10)',
      confirmed: false,
      reason: 'Left abdominal pain',
      location: 'Topmed, Building D, Room 360',
      color: '#b33d3d',
    },
    {
      title: 'Lily Racquel',
      age: 54,
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,11)',
      confirmed: true,
      reason: 'Dry, persistent cough & headache',
      location: 'Procare, Building C, Room 12',
      color: '#309346',
    },
    {
      title: 'Mia Sawyer',
      age: 59,
      start: 'dyndatetime(y,m,d,11)',
      end: 'dyndatetime(y,m,d,12)',
      confirmed: true,
      reason: 'Difficulty sleeping & loss of appetite',
      location: 'Procare, Building C, Room 12',
      color: '#309346',
    },
    {
      title: 'Jon Candace',
      age: 63,
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,13)',
      confirmed: true,
      reason: 'Nausea & weakness',
      location: 'MedStar, Building A, Room 1',
      color: '#c77c0a',
    },
    {
      title: 'Layton Drake',
      age: 57,
      start: 'dyndatetime(y,m,d,13)',
      end: 'dyndatetime(y,m,d,14)',
      confirmed: true,
      reason: 'Headaches & loss of appetite',
      location: 'Vitalife, Room 160',
      color: '#c77c0a',
    },
    {
      title: 'Willis Kane',
      age: 44,
      start: 'dyndatetime(y,m,d+1,8)',
      end: 'dyndatetime(y,m,d+1,9)',
      confirmed: true,
      reason: 'Back pain',
      location: 'Care Cente, Room 320r',
      color: '#b33d3d',
    },
    {
      title: 'Theo Calanthia',
      age: 60,
      start: 'dyndatetime(y,m,d+1,9)',
      end: 'dyndatetime(y,m,d+1,10)',
      confirmed: true,
      reason: 'Anxiousness & sleeping disorder',
      location: 'Care Center, Room 320',
      color: '#b33d3d',
    },
    {
      title: 'Ford Kaiden',
      age: 53,
      start: 'dyndatetime(y,m,d+1,14)',
      end: 'dyndatetime(y,m,d+1,15)',
      confirmed: true,
      reason: 'Nausea & vomiting',
      location: 'Care Center, Room 206',
      color: '#b33d3d',
    },
    {
      title: 'Gerry Irma',
      age: 50,
      start: 'dyndatetime(y,m,d+1,13)',
      end: 'dyndatetime(y,m,d+1,14)',
      confirmed: false,
      reason: 'Fever & sore throat',
      location: 'Medica Zone, Building C, Room 2',
      color: '#c77c0a',
    },
    {
      title: 'Carlyn Dorothy',
      age: 36,
      start: 'dyndatetime(y,m,d+1,14)',
      end: 'dyndatetime(y,m,d+1,15)',
      confirmed: true,
      reason: 'Tiredness & muscle pain',
      location: 'Medica Zone, Building C, Room 2',
      color: '#c77c0a',
    },
    {
      title: 'Alma Potter',
      age: 74,
      start: 'dyndatetime(y,m,d-1,10)',
      end: 'dyndatetime(y,m,d-1,11)',
      confirmed: true,
      reason: 'High blood pressure',
      location: 'Vitacure, Building D, Room 2',
      color: '#b33d3d',
    },
    {
      title: 'Debra Aguilar',
      age: 47,
      start: 'dyndatetime(y,m,d-1,11)',
      end: 'dyndatetime(y,m,d-1,12)',
      confirmed: false,
      reason: 'Fever & sore throat',
      location: 'Vitacure, Building D, Room 2',
      color: '#b33d3d',
    },
    {
      title: 'Marjorie White',
      age: 55,
      start: 'dyndatetime(y,m,d-1,13)',
      end: 'dyndatetime(y,m,d-1,14)',
      confirmed: true,
      reason: 'Back pain',
      location: 'Vitacure, Building D, Room 2',
      color: '#b33d3d',
    },
    {
      title: 'Lora Wilson',
      age: 66,
      start: 'dyndatetime(y,m,d-1,15)',
      end: 'dyndatetime(y,m,d-1,16)',
      confirmed: false,
      reason: 'Fever & headache',
      location: 'Vitacure, Building D, Room 2',
      color: '#b33d3d',
    },
    {
      title: 'Christie Baker',
      age: 71,
      start: 'dyndatetime(y,m,d-1,10)',
      end: 'dyndatetime(y,m,d-1,11)',
      confirmed: true,
      reason: 'Headaches morning & afternoon',
      location: 'Care Center, Room 300',
      color: '#309346',
    },
    {
      title: 'Arlene Lyons',
      age: 41,
      start: 'dyndatetime(y,m,d-1,14)',
      end: 'dyndatetime(y,m,d-1,15)',
      confirmed: true,
      reason: 'Nausea & weakness',
      location: 'Care Center, Room 202',
      color: '#c77c0a',
    },
    {
      title: 'Dory Edie',
      age: 45,
      start: 'dyndatetime(y,m,d-2,9)',
      end: 'dyndatetime(y,m,d-2,10)',
      confirmed: true,
      reason: 'Right abdominal pain',
      location: 'Vitacure, Building A, Room 203',
      color: '#309346',
    },
    {
      title: 'Kaylin Toni',
      age: 68,
      start: 'dyndatetime(y,m,d-2,10)',
      end: 'dyndatetime(y,m,d-2,11)',
      confirmed: true,
      reason: 'Itchy, red rashes',
      location: 'Vitacure, Building A, Room 203',
      color: '#309346',
    },
    {
      title: 'Gray Kestrel',
      age: 60,
      start: 'dyndatetime(y,m,d-2,12)',
      end: 'dyndatetime(y,m,d-2,13)',
      confirmed: true,
      reason: 'Cough & fever',
      location: 'Vitacure, Building A, Room 203',
      color: '#309346',
    },
    {
      title: 'Lou Andie',
      age: 76,
      start: 'dyndatetime(y,m,d-2,15)',
      end: 'dyndatetime(y,m,d-2,16)',
      confirmed: true,
      reason: 'High blood pressure',
      location: 'Medica Zone, Room 13',
      color: '#309346',
    },
    {
      title: 'Yancy Dustin',
      age: 52,
      start: 'dyndatetime(y,m,d-2,10)',
      end: 'dyndatetime(y,m,d-2,11)',
      confirmed: true,
      reason: 'Fever & headache',
      location: 'Vitacure, Building E, Room 50',
      color: '#c77c0a',
    },
    {
      title: 'Terry Clark',
      age: 78,
      start: 'dyndatetime(y,m,d-2,11)',
      end: 'dyndatetime(y,m,d-2,12)',
      confirmed: true,
      reason: 'Swollen ankles',
      location: 'Vitacure, Building E, Room 50',
      color: '#c77c0a',
    },
  ];

  currentEvent!: MyEvent;
  status?: string;
  buttonText?: string;
  buttonType?: 'success' | 'warning';
  bgColor?: string;
  info?: string;
  time?: string;
  reason?: string;
  location?: string;
  anchor?: HTMLElement;
  timer: any;

  calendarOptions: MbscEventcalendarOptions = {
    view: {
      calendar: {
        type: 'week',
      },
    },
    clickToCreate: false,
    dragToCreate: false,
    showEventTooltip: false,
    height: 260,
    onEventHoverIn: (args) => {
      const event: MyEvent = args.event;
      const time = formatDate('hh:mm A', new Date(event.start as string)) + ' - ' + formatDate('hh:mm A', new Date(event.end as string));

      this.currentEvent = event;

      if (event.confirmed) {
        this.status = 'Confirmed';
        this.buttonText = 'Cancel appointment';
        this.buttonType = 'warning';
      } else {
        this.status = 'Canceled';
        this.buttonText = 'Confirm appointment';
        this.buttonType = 'success';
      }

      this.bgColor = event.color;
      this.info = event.title + ', Age: ' + event.age;
      this.time = time;
      this.reason = event.reason;
      this.location = event.location;

      clearTimeout(this.timer);
      this.timer = null;

      this.anchor = args.domEvent.target;
      this.tooltip.open();
    },
    onEventHoverOut: () => {
      if (!this.timer) {
        this.timer = setTimeout(() => {
          this.tooltip.close();
        }, 200);
      }
    },
    onEventClick: () => {
      this.tooltip.open();
    },
  };

  popupOptions: MbscPopupOptions = {
    display: 'anchored',
    touchUi: false,
    showOverlay: false,
    contentPadding: false,
    closeOnOverlayClick: false,
    width: 350,
  };

  mouseEnter(): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  mouseLeave(): void {
    this.timer = setTimeout(() => {
      this.tooltip.close();
    }, 200);
  }

  setStatus(): void {
    const index = this.appointments.findIndex((item: any) => item.id === this.currentEvent.id);
    this.appointments[index].confirmed = !this.appointments[index].confirmed;
    this.tooltip.close();
    this.notify.toast({
      message: 'Appointment ' + (this.currentEvent.confirmed ? 'confirmed' : 'canceled'),
    });
  }

  viewFile(): void {
    this.tooltip.close();
    this.notify.toast({
      message: 'View file',
    });
  }

  deleteApp(): void {
    this.appointments = this.appointments.filter((item: any) => item.id !== this.currentEvent.id);
    this.tooltip.close();
    this.notify.toast({
      message: 'Appointment deleted',
    });
  }
}
