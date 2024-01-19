import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscEventcalendarOptions,
  MbscPopupOptions,
  MbscPopup,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-custom-event-tooltip',
  styleUrl: './custom-event-tooltip.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './custom-event-tooltip.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}
  @ViewChild('popup', { static: false })
  tooltip!: MbscPopup;

  doctors = [
    {
      id: 1,
      name: 'Dr. Breanne Lorinda',
      color: '#b33d3d',
    },
    {
      id: 2,
      name: 'Dr. Ryan Melicent',
      color: '#309346',
    },
    {
      id: 3,
      name: 'Dr. Meredith Chantelle',
      color: '#c77c0a',
    },
  ];

  appointments = [
    {
      title: 'Jude Chester',
      age: 69,
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,8,45)',
      confirmed: false,
      reason: 'Headaches morning & afternoon',
      location: 'Topmed, Building A, Room 203',
      resource: 1,
    },
    {
      title: 'Leon Porter',
      age: 44,
      start: 'dyndatetime(y,m,d,9)',
      end: 'dyndatetime(y,m,d,9,45)',
      confirmed: false,
      reason: 'Left abdominal pain',
      location: 'Topmed, Building D, Room 360',
      resource: 1,
    },
    {
      title: 'Merv Kenny',
      age: 56,
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,10,45)',
      confirmed: true,
      reason: 'Itchy, red rashes',
      location: 'Topmed, Building D, Room 360',
      resource: 1,
    },
    {
      title: 'Derek Austyn',
      age: 72,
      start: 'dyndatetime(y,m,d,13)',
      end: 'dyndatetime(y,m,d,13,45)',
      confirmed: false,
      reason: 'Nausea & weakness',
      location: 'Rose Medical Center, Room 18',
      resource: 1,
    },
    {
      title: 'Jenifer Kalyn',
      age: 65,
      start: 'dyndatetime(y,m,d,14)',
      end: 'dyndatetime(y,m,d,14,45)',
      confirmed: true,
      reason: 'Cough & fever',
      location: 'Rose Medical Center, Room 18',
      resource: 1,
    },
    {
      title: 'Lily Racquel',
      age: 54,
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,10,45)',
      confirmed: true,
      reason: 'Dry, persistent cough & headache',
      location: 'Procare, Building C, Room 12',
      resource: 2,
    },
    {
      title: 'Mia Sawyer',
      age: 59,
      start: 'dyndatetime(y,m,d,11)',
      end: 'dyndatetime(y,m,d,11,45)',
      confirmed: true,
      reason: 'Difficulty sleeping & loss of appetite',
      location: 'Procare, Building C, Room 12',
      resource: 2,
    },
    {
      title: 'Fred Valdez',
      age: 62,
      start: 'dyndatetime(y,m,d,15)',
      end: 'dyndatetime(y,m,d,15,45)',
      confirmed: false,
      reason: 'High blood pressure',
      location: 'Procare, Building C, Room 40',
      resource: 2,
    },
    {
      title: 'Sylvia Cale',
      age: 41,
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,8,45)',
      confirmed: false,
      reason: 'Fever & sore throat',
      location: 'MedStar, Building A, Room 1',
      resource: 3,
    },
    {
      title: 'Isadora Lyric',
      age: 30,
      start: 'dyndatetime(y,m,d,9)',
      end: 'dyndatetime(y,m,d,9,45)',
      confirmed: false,
      reason: 'Constant tiredness & weakness',
      location: 'MedStar, Building A, Room 1',
      resource: 3,
    },
    {
      title: 'Jon Candace',
      age: 63,
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,12,45)',
      confirmed: true,
      reason: 'Nausea & weakness',
      location: 'MedStar, Building A, Room 1',
      resource: 3,
    },
    {
      title: 'Layton Drake',
      age: 57,
      start: 'dyndatetime(y,m,d,13)',
      end: 'dyndatetime(y,m,d,13,45)',
      confirmed: true,
      reason: 'Headaches & loss of appetite',
      location: 'Vitalife, Room 160',
      resource: 3,
    },
    {
      title: 'Florence Amy',
      age: 73,
      start: 'dyndatetime(y,m,d,14)',
      end: 'dyndatetime(y,m,d,14,45)',
      confirmed: false,
      reason: 'Dry, persistent cough & headache',
      location: 'Vitalife, Room 160',
      resource: 3,
    },
    {
      title: 'Willis Kane',
      age: 44,
      start: 'dyndatetime(y,m,d+1,8)',
      end: 'dyndatetime(y,m,d+1,8,45)',
      confirmed: true,
      reason: 'Back pain',
      location: 'Care Cente, Room 320r',
      resource: 1,
    },
    {
      title: 'Theo Calanthia',
      age: 60,
      start: 'dyndatetime(y,m,d+1,9)',
      end: 'dyndatetime(y,m,d+1,9,45)',
      confirmed: true,
      reason: 'Anxiousness & sleeping disorder',
      location: 'Care Center, Room 320',
      resource: 1,
    },
    {
      title: 'Ford Kaiden',
      age: 53,
      start: 'dyndatetime(y,m,d+1,14)',
      end: 'dyndatetime(y,m,d+1,14,45)',
      confirmed: true,
      reason: 'Nausea & vomiting',
      location: 'Care Center, Room 206',
      resource: 1,
    },
    {
      title: 'Jewell Ryder',
      age: 75,
      start: 'dyndatetime(y,m,d+1,15)',
      end: 'dyndatetime(y,m,d+1,15,45)',
      confirmed: false,
      reason: 'High blood pressure',
      location: 'Care Center, Room 206',
      resource: 1,
    },
    {
      title: 'Antonia Cindra',
      age: 48,
      start: 'dyndatetime(y,m,d+1,12)',
      end: 'dyndatetime(y,m,d+1,12,45)',
      confirmed: true,
      reason: 'Dry, persistent cough',
      location: 'Medica Zone, Building C, Room 2',
      resource: 3,
    },
    {
      title: 'Gerry Irma',
      age: 50,
      start: 'dyndatetime(y,m,d+1,13)',
      end: 'dyndatetime(y,m,d+1,13,45)',
      confirmed: false,
      reason: 'Fever & sore throat',
      location: 'Medica Zone, Building C, Room 2',
      resource: 3,
    },
    {
      title: 'Carlyn Dorothy',
      age: 36,
      start: 'dyndatetime(y,m,d+1,14)',
      end: 'dyndatetime(y,m,d+1,14,45)',
      confirmed: true,
      reason: 'Tiredness & muscle pain',
      location: 'Medica Zone, Building C, Room 2',
      resource: 3,
    },
    {
      title: 'Alma Potter',
      age: 74,
      start: 'dyndatetime(y,m,d-1,10)',
      end: 'dyndatetime(y,m,d-1,10,45)',
      confirmed: true,
      reason: 'High blood pressure',
      location: 'Vitacure, Building D, Room 2',
      resource: 1,
    },
    {
      title: 'Debra Aguilar',
      age: 47,
      start: 'dyndatetime(y,m,d-1,11)',
      end: 'dyndatetime(y,m,d-1,11,45)',
      confirmed: false,
      reason: 'Fever & sore throat',
      location: 'Vitacure, Building D, Room 2',
      resource: 1,
    },
    {
      title: 'Tommie Love',
      age: 42,
      start: 'dyndatetime(y,m,d-1,12)',
      end: 'dyndatetime(y,m,d-1,12,45)',
      confirmed: false,
      reason: 'Dry, persistent cough & headache',
      location: 'Vitacure, Building D, Room 2',
      resource: 1,
    },
    {
      title: 'Marjorie White',
      age: 55,
      start: 'dyndatetime(y,m,d-1,13)',
      end: 'dyndatetime(y,m,d-1,13,45)',
      confirmed: true,
      reason: 'Back pain',
      location: 'Vitacure, Building D, Room 2',
      resource: 1,
    },
    {
      title: 'Brandon Perkins',
      age: 68,
      start: 'dyndatetime(y,m,d-1,14)',
      end: 'dyndatetime(y,m,d-1,14,45)',
      confirmed: true,
      reason: 'Swollen ankles',
      location: 'Vitacure, Building D, Room 2',
      resource: 1,
    },
    {
      title: 'Lora Wilson',
      age: 66,
      start: 'dyndatetime(y,m,d-1,15)',
      end: 'dyndatetime(y,m,d-1,15,45)',
      confirmed: false,
      reason: 'Fever & headache',
      location: 'Vitacure, Building D, Room 2',
      resource: 1,
    },
    {
      title: 'Ismael Bates',
      age: 58,
      start: 'dyndatetime(y,m,d-1,8)',
      end: 'dyndatetime(y,m,d-1,8,45)',
      confirmed: false,
      reason: 'Tiredness & muscle pain',
      location: 'Care Center, Room 300',
      resource: 2,
    },
    {
      title: 'Archie Wilkins',
      age: 69,
      start: 'dyndatetime(y,m,d-1,9)',
      end: 'dyndatetime(y,m,d-1,9,45)',
      confirmed: true,
      reason: 'Fever & headache',
      location: 'Care Center, Room 300',
      resource: 2,
    },
    {
      title: 'Christie Baker',
      age: 71,
      start: 'dyndatetime(y,m,d-1,10)',
      end: 'dyndatetime(y,m,d-1,10,45)',
      confirmed: true,
      reason: 'Headaches morning & afternoon',
      location: 'Care Center, Room 300',
      resource: 2,
    },
    {
      title: 'Laura Shelton',
      age: 45,
      start: 'dyndatetime(y,m,d-1,12)',
      end: 'dyndatetime(y,m,d-1,12,45)',
      confirmed: false,
      reason: 'Dry, persistent cough',
      location: 'Care Center, Room 300',
      resource: 2,
    },
    {
      title: 'Mary Hudson',
      age: 77,
      start: 'dyndatetime(y,m,d-1,9)',
      end: 'dyndatetime(y,m,d-1,9,45)',
      confirmed: true,
      reason: 'Fever & sore throat',
      location: 'Medica Zone, Room 45',
      resource: 3,
    },
    {
      title: 'Ralph Rice',
      age: 64,
      start: 'dyndatetime(y,m,d-1,10)',
      end: 'dyndatetime(y,m,d-1,10,45)',
      confirmed: true,
      reason: 'Left abdominal pain',
      location: 'Medica Zone, Room 45',
      resource: 3,
    },
    {
      title: 'Marc Hoffman',
      age: 53,
      start: 'dyndatetime(y,m,d-1,12)',
      end: 'dyndatetime(y,m,d-1,12,45)',
      confirmed: true,
      reason: 'Dry, persistent cough & headache',
      location: 'Medica Zone, Room 45',
      resource: 3,
    },
    {
      title: 'Arlene Lyons',
      age: 41,
      start: 'dyndatetime(y,m,d-1,14)',
      end: 'dyndatetime(y,m,d-1,14,45)',
      confirmed: true,
      reason: 'Nausea & weakness',
      location: 'Care Center, Room 202',
      resource: 3,
    },
    {
      title: 'Thelma Shaw',
      age: 26,
      start: 'dyndatetime(y,m,d-1,15)',
      end: 'dyndatetime(y,m,d-1,15,45)',
      confirmed: true,
      reason: 'Anxiousness & sleeping disorder',
      location: 'Care Center, Room 202',
      resource: 3,
    },
    {
      title: 'Dory Edie',
      age: 45,
      start: 'dyndatetime(y,m,d-2,9)',
      end: 'dyndatetime(y,m,d-2,9,45)',
      confirmed: true,
      reason: 'Right abdominal pain',
      location: 'Vitacure, Building A, Room 203',
      resource: 2,
    },
    {
      title: 'Kaylin Toni',
      age: 68,
      start: 'dyndatetime(y,m,d-2,10)',
      end: 'dyndatetime(y,m,d-2,10,45)',
      confirmed: true,
      reason: 'Itchy, red rashes',
      location: 'Vitacure, Building A, Room 203',
      resource: 2,
    },
    {
      title: 'Gray Kestrel',
      age: 60,
      start: 'dyndatetime(y,m,d-2,12)',
      end: 'dyndatetime(y,m,d-2,12,45)',
      confirmed: true,
      reason: 'Cough & fever',
      location: 'Vitacure, Building A, Room 203',
      resource: 2,
    },
    {
      title: 'Reg Izabelle',
      age: 41,
      start: 'dyndatetime(y,m,d-2,14)',
      end: 'dyndatetime(y,m,d-2,14,45)',
      confirmed: true,
      reason: 'Fever & headache',
      location: 'Medica Zone, Room 13',
      resource: 2,
    },
    {
      title: 'Lou Andie',
      age: 76,
      start: 'dyndatetime(y,m,d-2,15)',
      end: 'dyndatetime(y,m,d-2,15,45)',
      confirmed: true,
      reason: 'High blood pressure',
      location: 'Medica Zone, Room 13',
      resource: 2,
    },
    {
      title: 'Yancy Dustin',
      age: 52,
      start: 'dyndatetime(y,m,d-2,10)',
      end: 'dyndatetime(y,m,d-2,10,45)',
      confirmed: true,
      reason: 'Fever & headache',
      location: 'Vitacure, Building E, Room 50',
      resource: 3,
    },
    {
      title: 'Terry Clark',
      age: 78,
      start: 'dyndatetime(y,m,d-2,11)',
      end: 'dyndatetime(y,m,d-2,11,45)',
      confirmed: true,
      reason: 'Swollen ankles',
      location: 'Vitacure, Building E, Room 50',
      resource: 3,
    },
  ];

  currentEvent: any;
  closeOnOverlayClick = false;
  status = '';
  buttonText = '';
  buttonType: any;
  bgColor = '';
  info = '';
  time = '';
  reason = '';
  location = '';
  anchor: HTMLElement | undefined;
  timer: any;

  openTooltip(args: any, closeOption: boolean): void {
    const event: any = args.event;
    const resource: any = this.doctors.find((dr) => dr.id === event.resource);
    const time = formatDate('hh:mm A', new Date(event.start)) + ' - ' + formatDate('hh:mm A', new Date(event.end));

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

    this.bgColor = resource.color;
    this.info = event.title + ', Age: ' + event.age;
    this.time = time;
    this.reason = event.reason;
    this.location = event.location;

    clearTimeout(this.timer);
    this.timer = null;

    this.anchor = args.domEvent.currentTarget || args.domEvent.target;
    this.closeOnOverlayClick = closeOption;
    this.tooltip.open();
  }

  calendarOptions: MbscEventcalendarOptions = {
    view: {
      schedule: {
        type: 'week',
        startDay: 1,
        endDay: 5,
        startTime: '08:00',
        endTime: '16:00',
        allDay: false,
      },
    },
    clickToCreate: false,
    dragToCreate: false,
    dragToMove: true,
    dragToResize: false,
    showEventTooltip: false,
    onEventHoverIn: (args) => {
      this.openTooltip(args, false);
    },
    onEventHoverOut: () => {
      if (!this.timer) {
        this.timer = setTimeout(() => {
          this.tooltip.close();
        }, 200);
      }
    },
    onEventClick: (args) => {
      if (!this.tooltip.isVisible()) {
        this.openTooltip(args, true);
      }
    },
  };

  popupOptions: MbscPopupOptions = {
    display: 'anchored',
    touchUi: false,
    showOverlay: false,
    contentPadding: false,
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
