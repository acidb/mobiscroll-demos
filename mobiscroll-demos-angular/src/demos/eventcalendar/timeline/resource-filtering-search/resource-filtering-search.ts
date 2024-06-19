import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscPopup,
  MbscPopupButton,
  MbscPopupOptions,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-resource-filtering-search',
  styleUrl: './resource-filtering-search.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './resource-filtering-search.html',
  providers: [Notifications],
})
export class AppComponent {
  myEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d,5'),
      end: dyndatetime('y,m,d,19'),
      title: 'Excavate Foundation',
      resource: 'bulldozer - TX1234',
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,18'),
      title: 'Install Framing',
      resource: 'crane - NY9101',
    },
    {
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,20'),
      title: 'Electrical Wiring',
      resource: 'excavator - FL1213',
    },
    {
      start: dyndatetime('y,m,d,5'),
      end: dyndatetime('y,m,d,22'),
      title: 'Roofing',
      resource: 'crane - IL1617',
    },
    {
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,19'),
      title: 'Site Cleanup',
      resource: 'bulldozer - PA1819',
    },
    {
      start: dyndatetime('y,m,d,5'),
      end: dyndatetime('y,m,d,18'),
      title: 'Foundation Work',
      resource: 'concrete mixer - CA2223',
    },
    {
      start: dyndatetime('y,m,d,5'),
      end: dyndatetime('y,m,d,22'),
      title: 'Steel Framing',
      resource: 'crane - NY2425',
    },
    {
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,16'),
      title: 'Interior Plumbing',
      resource: 'excavator - FL2627',
    },
    {
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,16'),
      title: 'Masonry Work',
      resource: 'crane - IL3031',
    },
    {
      start: dyndatetime('y,m,d,6'),
      end: dyndatetime('y,m,d,15'),
      title: 'Exterior Work',
      resource: 'bulldozer - PA3233',
    },
    {
      start: dyndatetime('y,m,d,6'),
      end: dyndatetime('y,m,d,15'),
      title: 'Ground Breaking',
      resource: 'bulldozer - TX3435',
    },
    {
      start: dyndatetime('y,m,d,9'),
      end: dyndatetime('y,m,d,21'),
      title: 'Wall Construction',
      resource: 'crane - NY3839',
    },
    {
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,16'),
      title: 'Roof Installation',
      resource: 'excavator - FL4041',
    },
    {
      start: dyndatetime('y,m,d,6'),
      end: dyndatetime('y,m,d,19'),
      title: 'Painting',
      resource: 'crane - IL4445',
    },
    {
      start: dyndatetime('y,m,d,5'),
      end: dyndatetime('y,m,d,20'),
      title: 'Driveway Paving',
      resource: 'bulldozer - PA4647',
    },
    {
      start: dyndatetime('y,m,d,5'),
      end: dyndatetime('y,m,d,18'),
      title: 'Foundation',
      resource: 'concrete mixer - CA5051',
    },
    {
      start: dyndatetime('y,m,d,5'),
      end: dyndatetime('y,m,d,19'),
      title: 'Demolition',
      resource: 'crane - NY5253',
    },
    {
      start: dyndatetime('y,m,d,6'),
      end: dyndatetime('y,m,d,16'),
      title: 'Electrical Wiring',
      resource: 'excavator - FL5455',
    },
    {
      start: dyndatetime('y,m,d,5'),
      end: dyndatetime('y,m,d,17'),
      title: 'Roofing',
      resource: 'crane - IL5859',
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,18'),
      title: 'Finishing Touches',
      resource: 'bulldozer - PA6061',
    },
    {
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,22'),
      title: 'Site Preparation',
      resource: 'bulldozer - TX6263',
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,19'),
      title: 'Piling Work',
      resource: 'crane - NY6667',
    },
    {
      start: dyndatetime('y,m,d,7'),
      end: dyndatetime('y,m,d,18'),
      title: 'Concrete Pouring',
      resource: 'excavator - FL6869',
    },
    {
      start: dyndatetime('y,m,d,5'),
      end: dyndatetime('y,m,d,21'),
      title: 'Deck Construction',
      resource: 'drill - OH7071',
    },
    {
      start: dyndatetime('y,m,d,5'),
      end: dyndatetime('y,m,d,20'),
      title: 'Final Touches',
      resource: 'bulldozer - PA7475',
    },
    {
      start: dyndatetime('y,m,d+1,5'),
      end: dyndatetime('y,m,d+1,19'),
      title: 'Foundation Work',
      resource: 'bulldozer - TX1234',
    },
    {
      start: dyndatetime('y,m,d+1,8'),
      end: dyndatetime('y,m,d+1,18'),
      title: 'Steel Framing',
      resource: 'crane - NY9101',
    },
    {
      start: dyndatetime('y,m,d+1,10'),
      end: dyndatetime('y,m,d+1,20'),
      title: 'Electrical Wiring',
      resource: 'excavator - FL1213',
    },
    {
      start: dyndatetime('y,m,d+1,14'),
      end: dyndatetime('y,m,d+1,22'),
      title: 'Roofing',
      resource: 'crane - IL1617',
    },
    {
      start: dyndatetime('y,m,d+1,7'),
      end: dyndatetime('y,m,d+1,19'),
      title: 'Site Cleanup',
      resource: 'bulldozer - PA1819',
    },
    {
      start: dyndatetime('y,m,d+1,5'),
      end: dyndatetime('y,m,d+1,18'),
      title: 'Foundation Work',
      resource: 'concrete mixer - CA2223',
    },
    {
      start: dyndatetime('y,m,d+1,9'),
      end: dyndatetime('y,m,d+1,18'),
      title: 'Steel Framing',
      resource: 'crane - NY2425',
    },
    {
      start: dyndatetime('y,m,d+1,8'),
      end: dyndatetime('y,m,d+1,19'),
      title: 'Interior Plumbing',
      resource: 'excavator - FL2627',
    },
    {
      start: dyndatetime('y,m,d+1,8'),
      end: dyndatetime('y,m,d+1,20'),
      title: 'Masonry Work',
      resource: 'crane - IL3031',
    },
    {
      start: dyndatetime('y,m,d+1,5'),
      end: dyndatetime('y,m,d+1,13'),
      title: 'Exterior Work',
      resource: 'bulldozer - PA3233',
    },
    {
      start: dyndatetime('y,m,d+1,5'),
      end: dyndatetime('y,m,d+1,16'),
      title: 'Ground Work',
      resource: 'bulldozer - TX3435',
    },
    {
      start: dyndatetime('y,m,d+1,7'),
      end: dyndatetime('y,m,d+1,19'),
      title: 'Wall Construction',
      resource: 'crane - NY3839',
    },
    {
      start: dyndatetime('y,m,d+1,9'),
      end: dyndatetime('y,m,d+1,14'),
      title: 'Roof Installation',
      resource: 'excavator - FL4041',
    },
    {
      start: dyndatetime('y,m,d+1,5'),
      end: dyndatetime('y,m,d+1,16'),
      title: 'Painting',
      resource: 'crane - IL4445',
    },
    {
      start: dyndatetime('y,m,d+1,6'),
      end: dyndatetime('y,m,d+1,18'),
      title: 'Driveway Paving',
      resource: 'bulldozer - PA4647',
    },
    {
      start: dyndatetime('y,m,d+1,7'),
      end: dyndatetime('y,m,d+1,16'),
      title: 'Foundation',
      resource: 'concrete mixer - CA5051',
    },
    {
      start: dyndatetime('y,m,d+1,8'),
      end: dyndatetime('y,m,d+1,17'),
      title: 'Demolition',
      resource: 'crane - NY5253',
    },
    {
      start: dyndatetime('y,m,d+1,7'),
      end: dyndatetime('y,m,d+1,19'),
      title: 'Electrical Wiring',
      resource: 'excavator - FL5455',
    },
    {
      start: dyndatetime('y,m,d+1,5'),
      end: dyndatetime('y,m,d+1,18'),
      title: 'Roofing',
      resource: 'crane - IL5859',
    },
    {
      start: dyndatetime('y,m,d+1,6'),
      end: dyndatetime('y,m,d+1,17'),
      title: 'Finishing Touches',
      resource: 'bulldozer - PA6061',
    },
    {
      start: dyndatetime('y,m,d+1,5'),
      end: dyndatetime('y,m,d+1,13'),
      title: 'Site Preparation',
      resource: 'bulldozer - TX6263',
    },
    {
      start: dyndatetime('y,m,d+1,7'),
      end: dyndatetime('y,m,d+1,20'),
      title: 'Piling Work',
      resource: 'crane - NY6667',
    },
    {
      start: dyndatetime('y,m,d+1,6'),
      end: dyndatetime('y,m,d+1,15'),
      title: 'Concrete Pouring',
      resource: 'excavator - FL6869',
    },
    {
      start: dyndatetime('y,m,d+1,5'),
      end: dyndatetime('y,m,d+1,21'),
      title: 'Deck Construction',
      resource: 'drill - OH7071',
    },
    {
      start: dyndatetime('y,m,d+1,5'),
      end: dyndatetime('y,m,d+1,18'),
      title: 'Final Touches',
      resource: 'bulldozer - PA7475',
    },
  ];

  myResources = [
    {
      id: 'site1',
      name: '123 Main St, Downtown City',
      eventCreation: false,
      children: [
        {
          id: 'bulldozer - TX1234',
          name: 'Bulldozer - TX1234',
          color: '#1dab2f',
          status: 'on site',
        },
        {
          id: 'concrete mixer - CA5678',
          name: 'Concrete Mixer - CA5678',
          color: '#1dab2f',
          status: 'in maintenance',
        },
        {
          id: 'crane - NY9101',
          name: 'Crane - NY9101',
          color: '#1dab2f',
          status: 'on site',
        },
        {
          id: 'excavator - FL1213',
          name: 'Excavator - FL1213',
          color: '#1dab2f',
          status: 'on site',
        },
        {
          id: 'drill - OH1415',
          name: 'Drill - OH1415',
          color: '#1dab2f',
          status: 'in maintenance',
        },
        {
          id: 'crane - IL1617',
          name: 'Crane - IL1617',
          color: '#1dab2f',
          status: 'on site',
        },
        {
          id: 'bulldozer - PA1819',
          name: 'Bulldozer - PA1819',
          color: '#1dab2f',
          status: 'on site',
        },
      ],
    },
    {
      id: 'site2',
      name: '456 Elm St, Uptown City',
      eventCreation: false,
      children: [
        {
          id: 'bulldozer - TX2021',
          name: 'Bulldozer - TX2021',
          color: '#4981d6',
          status: 'in maintenance',
        },
        {
          id: 'concrete mixer - CA2223',
          name: 'Concrete Mixer - CA2223',
          color: '#4981d6',
          status: 'on site',
        },
        {
          id: 'crane - NY2425',
          name: 'Crane - NY2425',
          color: '#4981d6',
          status: 'on site',
        },
        {
          id: 'excavator - FL2627',
          name: 'Excavator - FL2627',
          color: '#4981d6',
          status: 'on site',
        },
        {
          id: 'drill - OH2829',
          name: 'Drill - OH2829',
          color: '#4981d6',
          status: 'in maintenance',
        },
        {
          id: 'crane - IL3031',
          name: 'Crane - IL3031',
          color: '#4981d6',
          status: 'on site',
        },
        {
          id: 'bulldozer - PA3233',
          name: 'Bulldozer - PA3233',
          color: '#4981d6',
          status: 'on site',
        },
      ],
    },
    {
      id: 'site3',
      name: '789 Maple Ave, Suburban Area',
      eventCreation: false,
      children: [
        {
          id: 'bulldozer - TX3435',
          name: 'Bulldozer - TX3435',
          color: '#f7961e',
          status: 'on site',
        },
        {
          id: 'concrete mixer - CA3637',
          name: 'Concrete Mixer - CA3637',
          color: '#f7961e',
          status: 'in maintenance',
        },
        {
          id: 'crane - NY3839',
          name: 'Crane - NY3839',
          color: '#f7961e',
          status: 'on site',
        },
        {
          id: 'excavator - FL4041',
          name: 'Excavator - FL4041',
          color: '#f7961e',
          status: 'on site',
        },
        {
          id: 'crane - IL4445',
          name: 'Crane - IL4445',
          color: '#f7961e',
          status: 'on site',
        },
        {
          id: 'bulldozer - PA4647',
          name: 'Bulldozer - PA4647',
          color: '#f7961e',
          status: 'on site',
        },
      ],
    },
    {
      id: 'site4',
      name: '101 Industrial Blvd, Industrial City',
      eventCreation: false,
      children: [
        {
          id: 'bulldozer - TX4849',
          name: 'Bulldozer - TX4849',
          color: '#e25dd2',
          status: 'in maintenance',
        },
        {
          id: 'concrete mixer - CA5051',
          name: 'Concrete Mixer - CA5051',
          color: '#e25dd2',
          status: 'on site',
        },
        {
          id: 'crane - NY5253',
          name: 'Crane - NY5253',
          color: '#e25dd2',
          status: 'on site',
        },
        {
          id: 'excavator - FL5455',
          name: 'Excavator - FL5455',
          color: '#e25dd2',
          status: 'on site',
        },
        {
          id: 'drill - OH5657',
          name: 'Drill - OH5657',
          color: '#e25dd2',
          status: 'in maintenance',
        },
        {
          id: 'crane - IL5859',
          name: 'Crane - IL5859',
          color: '#e25dd2',
          status: 'on site',
        },
        {
          id: 'bulldozer - PA6061',
          name: 'Bulldozer - PA6061',
          color: '#e25dd2',
          status: 'on site',
        },
      ],
    },
    {
      id: 'site5',
      name: '202 River Rd, Riverside City',
      eventCreation: false,
      children: [
        {
          id: 'bulldozer - TX6263',
          name: 'Bulldozer - TX6263',
          color: '#34c8e0',
          status: 'on site',
        },
        {
          id: 'concrete mixer - CA6465',
          name: 'Concrete Mixer - CA6465',
          color: '#34c8e0',
          status: 'in maintenance',
        },
        {
          id: 'crane - NY6667',
          name: 'Crane - NY6667',
          color: '#34c8e0',
          status: 'on site',
        },
        {
          id: 'excavator - FL6869',
          name: 'Excavator - FL6869',
          color: '#34c8e0',
          status: 'on site',
        },
        {
          id: 'drill - OH7071',
          name: 'Drill - OH7071',
          color: '#34c8e0',
          status: 'on site',
        },
        {
          id: 'crane - IL7273',
          name: 'Crane - IL7273',
          color: '#34c8e0',
          status: 'in maintenance',
        },
        {
          id: 'bulldozer - PA7475',
          name: 'Bulldozer - PA7475',
          color: '#34c8e0',
          status: 'on site',
        },
      ],
    },
  ];

  myFilters: { id: string; name: string; value: boolean }[] = [
    { id: 'on site', name: 'On site', value: true },
    { id: 'in maintenance', name: 'In maintenance', value: true },
  ];

  constructor(private notify: Notifications) {
    this.myResources.forEach((site) => {
      this.myFilters.push({ id: site.id, name: site.name, value: true });
    });

    this.filters = this.myFilters.reduce<{ [key: string]: boolean }>((map, filter) => {
      map[filter.id] = true;
      return map;
    }, {});
  }

  @ViewChild('popup', { static: false })
  popup!: MbscPopup;
  filteredResources = this.myResources;
  searchQuery: any = '';
  filters: { [key: string]: boolean } = {};
  tempFilters: { [key: string]: boolean } = {};
  searchTimeout: any;

  filterResources(currentFilters: { [key: string]: boolean }, currentQuery: string) {
    this.filteredResources = this.myResources
      .map((site) => ({
        id: site.id,
        name: site.name,
        eventCreation: site.eventCreation,
        children: site.children.filter(
          (resource) =>
            currentFilters[resource.status] && (!currentQuery || resource.name.toLowerCase().includes(currentQuery.toLowerCase())),
        ),
      }))
      .filter((site) => site.children.length > 0 && currentFilters[site.id]);
  }

  openFilters(event: MouseEvent) {
    this.tempFilters = { ...this.filters };
    this.popupAnchor = event.target as HTMLElement;
    this.popup.open();
    this.filterResources(this.tempFilters, this.searchQuery);
  }

  applyFilters() {
    this.filters = { ...this.tempFilters };
    this.filterResources(this.tempFilters, this.searchQuery);
    this.popup.close();
    this.notify.toast({
      message: 'Filters applied',
    });
  }

  resetFilters() {
    const updatedFilters = this.myFilters.reduce<{ [key: string]: boolean }>((map, filter) => {
      map[filter.id] = true;
      return map;
    }, {});
    this.searchQuery = '';
    this.filters = { ...updatedFilters };
    this.filterResources(updatedFilters, '');
    this.notify.toast({
      message: 'Filters cleared',
    });
  }

  handleSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.filterResources(this.filters, this.searchQuery);
    }, 300);
  }

  handleCheckboxChange(key: string) {
    this.tempFilters[key] = !this.tempFilters[key];
    this.tempFilters = { ...this.tempFilters };
  }

  popupButtons: Array<MbscPopupButton | 'cancel'> = [
    'cancel',
    {
      handler: () => {
        this.applyFilters();
      },
      keyCode: 'enter',
      text: 'Apply',
      cssClass: 'mbsc-popup-button-primary',
    },
  ];

  calendarOptions: MbscEventcalendarOptions = {
    class: 'mds-resource-filtering-calendar',
    clickToCreate: true,
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    view: {
      timeline: {
        type: 'week',
        startTime: '05:00',
        endTime: '22:00',
        startDay: 1,
        endDay: 5,
        timeCellStep: 60,
        timeLabelStep: 60,
        weekNumbers: true,
      },
    },
  };

  popupAnchor: HTMLElement | undefined;

  popupOptions: MbscPopupOptions = {
    display: 'anchored',
    contentPadding: false,
    focusOnClose: false,
    focusOnOpen: false,
    showOverlay: false,
    width: 400,
  };
}
