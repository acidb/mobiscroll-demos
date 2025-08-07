import { Component, ViewChild } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPopup,
  MbscPopupOptions,
  MbscPopupPositionEvent,
  MbscResource,
  // MbscResourceHoverEvent,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-display-resource-information-on-hover',
  styleUrl: './display-resource-information-on-hover.css',
  templateUrl: './display-resource-information-on-hover.html',
  standalone: false,
})
export class AppComponent {
  constructor(private notify: Notifications) { }

  @ViewChild('popup', { static: false })
  popup!: MbscPopup;

  myResources: MbscResource[] = [
    {
      id: 'res1',
      name: 'Adam Miller',
      color: '#F39C12',
      profession: 'Mason',
      avatar: 'https://img.mobiscroll.com/demos/m1.png',
      cost: '15',
    },
    {
      id: 'res2',
      name: 'Emily Carter',
      color: '#76e083',
      profession: 'Electrician',
      avatar: 'https://img.mobiscroll.com/demos/f1.png',
      cost: '20',
    },
    {
      id: 'res3',
      name: 'James Brown',
      color: '#b13f49',
      profession: 'Carpenter',
      avatar: 'https://img.mobiscroll.com/demos/m2.png',
      cost: '18',
    },
    {
      id: 'res4',
      name: 'Daniel Wilson',
      color: '#e25dd2',
      profession: 'Welder',
      avatar: 'https://img.mobiscroll.com/demos/m3.png',
      cost: '22',
    },
    {
      id: 'res5',
      name: 'Benjamin Harris',
      color: '#7056ff',
      profession: 'Plumber',
      avatar: 'https://img.mobiscroll.com/demos/m4.png',
      cost: '20',
    },
    {
      id: 'res6',
      name: 'Olivia Anderson',
      color: '#56aaff',
      profession: 'Concrete Finisher',
      avatar: 'https://img.mobiscroll.com/demos/f2.png',
      cost: '15',
    },
    {
      id: 'res7',
      name: 'Emma Thompson',
      color: '#84852f',
      profession: 'Steelworker',
      avatar: 'https://img.mobiscroll.com/demos/f3.png',
      cost: '18',
    },
    {
      id: 'res8',
      name: 'Natalie Roberts',
      color: '#ff6e56',
      profession: 'Painter',
      avatar: 'https://img.mobiscroll.com/demos/f4.png',
      cost: '25',
    },
  ];

  myEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d-1,12'),
      end: dyndatetime('y,m,d-1,15'),
      title: 'Repoint Brick Facade',
      resource: 'res1',
    },
    {
      start: dyndatetime('y,m,d-1,9'),
      end: dyndatetime('y,m,d-1,12'),
      title: 'Install Custom Wood Trim',
      resource: 'res3',
    },
    {
      start: dyndatetime('y,m,d-1,14'),
      end: dyndatetime('y,m,d-1,18'),
      title: 'Repair Steel Stair Treads',
      resource: 'res4',
    },
    {
      start: dyndatetime('y,m,d-1,10'),
      end: dyndatetime('y,m,d-1,13'),
      title: 'Pour and Finish Driveway Slab',
      resource: 'res6',
    },
    {
      start: dyndatetime('y,m,d-1,11'),
      end: dyndatetime('y,m,d-1,16'),
      title: 'Paint Interior Drywall',
      resource: 'res8',
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,11'),
      title: 'Block Wall Construction',
      resource: 'res1',
    },
    {
      start: dyndatetime('y,m,d,14'),
      end: dyndatetime('y,m,d,16'),
      title: 'Task 2',
      resource: 'Paver Installation',
    },
    {
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,17'),
      title: 'Install ceiling fan',
      resource: 'res2',
    },
    {
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,14'),
      title: 'Roof Beam Replacement',
      resource: 'res3',
    },
    {
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,12'),
      title: 'Custom Metalworks Creation',
      resource: 'res4',
    },
    {
      start: dyndatetime('y,m,d,14'),
      end: dyndatetime('y,m,d,17'),
      title: 'Pipe Welding',
      resource: 'res4',
    },
    {
      start: dyndatetime('y,m,10,8'),
      end: dyndatetime('y,m,11,20'),
      title: 'Leak Detection & Repair',
      resource: 'res5',
    },
    {
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,17'),
      title: 'Faucet & Sink Fitting',
      resource: 'res5',
    },
    {
      start: dyndatetime('y,m,d,18'),
      end: dyndatetime('y,m,d,20'),
      title: 'Drainage System Setup',
      resource: 'res5',
    },
    {
      start: dyndatetime('y,m,d,9'),
      end: dyndatetime('y,m,d,13'),
      title: 'Surface Polishing',
      resource: 'res6',
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,10'),
      title: 'Structural Steel Inspections',
      resource: 'res7',
    },
    {
      start: dyndatetime('y,m,d,13'),
      end: dyndatetime('y,m,d,16'),
      title: 'Metal Structure Assembly',
      resource: 'res7',
    },
    {
      start: dyndatetime('y,m,d,17'),
      end: dyndatetime('y,m,d,19'),
      title: 'Heavy Steel Beam Placement',
      resource: 'res7',
    },
    {
      start: dyndatetime('y,m,d,9'),
      end: dyndatetime('y,m,d,12'),
      title: 'Exterior House Painting',
      resource: 'res8',
    },
    {
      start: dyndatetime('y,m,d,15'),
      end: dyndatetime('y,m,d,18'),
      title: 'Deck Staining & Sealing',
      resource: 'res8',
    },
    {
      start: dyndatetime('y,m,d+1,12'),
      end: dyndatetime('y,m,d+1,15'),
      title: 'Troubleshoot Faulty Breaker',
      resource: 'res2',
    },
    {
      start: dyndatetime('y,m,d+1,10'),
      end: dyndatetime('y,m,d+1,13'),
      title: 'Frame Interior Partitions',
      resource: 'res3',
    },
    {
      start: dyndatetime('y,m,d+1,16'),
      end: dyndatetime('y,m,d+1,20'),
      title: 'Weld Structural Beam Connections',
      resource: 'res4',
    },
    {
      start: dyndatetime('y,m,d+1,12'),
      end: dyndatetime('y,m,d+1,16'),
      title: 'Apply Smooth Trowel Finish to Basement Floor',
      resource: 'res6',
    },
  ];

  resourceAvatar: string = '';
  resourceName: string | undefined = '';
  resourceCost: string = '';
  resourceDate: string = '';
  resourceTotal: string = '';

  currentResource: MbscResource | undefined;
  hoveredResourceElm: HTMLElement | null = null;
  mySelectedDate: Date = new Date();

  openTimer?: ReturnType<typeof setTimeout>;
  closeTimer?: ReturnType<typeof setTimeout>;

  calView: MbscEventcalendarView = {
    timeline: {
      type: 'day',
      startTime: '07:00',
      endTime: '22:00',
    },
  };

  popupOptions: MbscPopupOptions = {
    display: 'anchored',
    showOverlay: false,
    touchUi: false,
    width: 280,
    onPosition: (args: MbscPopupPositionEvent, inst: any) => {
      const popupElm: HTMLElement | null = args.target.querySelector('.mbsc-popup');
      const rect: DOMRect = this.hoveredResourceElm!.getBoundingClientRect();

      popupElm!.style.top = rect.top - 10 + 'px';

      if (inst.s.rtl) {
        popupElm!.style.right = window.innerWidth - rect.left + 10 + 'px';
      } else {
        popupElm!.style.left = rect.right + 10 + 'px';
      }
      return false; // Prevent default positioning
    }
  }

  getTotalHoursForResource(resourceId: string | number): number {
    return this.myEvents.filter((e: MbscCalendarEvent) => e.resource === resourceId)
      .reduce((sum: number, e: MbscCalendarEvent) => {
        const start: Date = new Date(e.start as Date);
        const end: Date = new Date(e.end as Date);
        const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
        return sum + hours;
      }, 0);
  }

  openTooltip(resource: MbscResource, target: HTMLElement) {

    clearTimeout(this.closeTimer);
    clearTimeout(this.openTimer);

    this.openTimer = setTimeout(() => {
      const totalHours = this.getTotalHoursForResource(resource.id);

      this.currentResource = resource;
      this.hoveredResourceElm = target;

      this.resourceAvatar = resource['avatar'];
      this.resourceName = resource.name;
      this.resourceCost = '$' + resource['cost'];
      this.resourceDate = formatDate('D DDD MMM YYYY', this.mySelectedDate);
      this.resourceTotal = totalHours + 'h, $' + totalHours * resource['cost'];

      // popupRef.position();
      this.popup.open();

      this.openTimer = undefined;
    }, 100);
  }

  closeTooltip() {
    clearTimeout(this.openTimer);
    clearTimeout(this.closeTimer);

    this.closeTimer = setTimeout(() => {
      this.popup.close();
      this.closeTimer = undefined;
    }, 200);
  }

  onResourceHoverIn(args: any): void {
    console.log('hover in')
    this.openTooltip(args.resource, args.target);
  }

  onResourceHoverOut(resource: any): void {
    console.log('hover out')
    resource.target.classList.remove('mds-resource-info-hover');
    this.closeTooltip();
  }

  handlePopupMouseEnter(): void {
    clearTimeout(this.closeTimer);
  }
  handlePopupMouseLeave(): void {
    this.closeTooltip();
  }

  handlePay(): void {
    this.popup.close();
    this.notify.toast({
      message: this.currentResource!.name + ' paid'
    });
  }

}
