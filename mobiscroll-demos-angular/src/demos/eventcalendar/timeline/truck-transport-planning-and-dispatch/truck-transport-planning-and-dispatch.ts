import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendar,
  MbscEventcalendarView,
  MbscModule,
  MbscPopup,
  MbscPopupButton,
  MbscPopupOptions,
  MbscResource,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-dispatch-management',
  styleUrl: './truck-transport-planning-and-dispatch.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './truck-transport-planning-and-dispatch.html',
  providers: [Notifications],
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('calendar') calendarRef!: MbscEventcalendar;
  @ViewChild('filterPopup') filterPopupRef!: MbscPopup;
  @ViewChild('rangePopup') rangePopupRef!: MbscPopup;

  constructor(private notify: Notifications) {}

  myResources: MbscResource[] = [
    {
      id: 'cap1',
      name: '3.5 tons capacity',
      eventCreation: false,
      children: [
        { id: 1, name: 'Isuzu N-Series N35', capacity: 3.5, status: 'operational', plate: 'AB14 KTP' },
        {
          id: '1-actual',
          name: '',
          capacity: 3.5,
          status: 'operational',
          plate: 'AB14 KTP',
          eventCreation: false,
          cssClass: 'mds-dispatch-actual-resource',
        },
        { id: 2, name: 'Mercedes-Benz Sprinter 3500', capacity: 3.5, status: 'operational', plate: 'FR19 XDL' },
        {
          id: '2-actual',
          name: '',
          capacity: 3.5,
          status: 'operational',
          plate: 'FR19 XDL',
          eventCreation: false,
          cssClass: 'mds-dispatch-actual-resource',
        },
        {
          id: 3,
          name: 'Ford Transit 350',
          capacity: 3.5,
          status: 'operational',
          plate: 'QN62 RPV',
          maintenanceFrom: dyndatetime('y,m,d-2,0'),
          maintenanceTo: dyndatetime('y,m,d+2,0'),
        },
        {
          id: '3-actual',
          name: '',
          capacity: 3.5,
          status: 'operational',
          plate: 'QN62 RPV',
          eventCreation: false,
          cssClass: 'mds-dispatch-actual-resource',
          maintenanceFrom: dyndatetime('y,m,d-2,0'),
          maintenanceTo: dyndatetime('y,m,d+2,0'),
        },
      ],
    },
    {
      id: 'cap2',
      name: '7 tons capacity',
      eventCreation: false,
      children: [
        { id: 4, name: 'Ford F-650 Super Duty', capacity: 7, status: 'operational', plate: 'GR12 PEV' },
        {
          id: '4-actual',
          name: '',
          capacity: 7,
          status: 'operational',
          plate: 'GR12 PEV',
          eventCreation: false,
          cssClass: 'mds-dispatch-actual-resource',
        },
        { id: 5, name: 'Isuzu F-Series FTR', capacity: 7, status: 'operational', plate: 'MB27 FTK' },
        {
          id: '5-actual',
          name: '',
          capacity: 7,
          status: 'operational',
          plate: 'MB27 FTK',
          eventCreation: false,
          cssClass: 'mds-dispatch-actual-resource',
        },
        {
          id: 6,
          name: 'Hino 300 Series 716',
          capacity: 7,
          status: 'operational',
          plate: 'KT73 ZLD',
          maintenanceFrom: dyndatetime('y,m,d+2,0'),
          maintenanceTo: dyndatetime('y,m,d+5,0'),
        },
        {
          id: '6-actual',
          name: '',
          capacity: 7,
          status: 'operational',
          plate: 'KT73 ZLD',
          eventCreation: false,
          cssClass: 'mds-dispatch-actual-resource',
          maintenanceFrom: dyndatetime('y,m,d+2,0'),
          maintenanceTo: dyndatetime('y,m,d+5,0'),
        },
      ],
    },
    {
      id: 'cap3',
      name: '12 tons capacity',
      eventCreation: false,
      children: [
        { id: 7, name: 'Hino 500 Series FD', capacity: 12, status: 'operational', plate: 'EP17 GMF' },
        {
          id: '7-actual',
          name: '',
          capacity: 12,
          status: 'operational',
          plate: 'EP17 GMF',
          eventCreation: false,
          cssClass: 'mds-dispatch-actual-resource',
        },
        { id: 8, name: 'Isuzu F-Series FVR', capacity: 12, status: 'operational', plate: 'DS41 CXP' },
        {
          id: '8-actual',
          name: '',
          capacity: 12,
          status: 'operational',
          plate: 'DS41 CXP',
          eventCreation: false,
          cssClass: 'mds-dispatch-actual-resource',
        },
        {
          id: 9,
          name: 'Mercedes-Benz Atego 1218',
          capacity: 12,
          status: 'operational',
          plate: 'NH65 QWD',
          maintenanceFrom: dyndatetime('y,m,d-1,0'),
          maintenanceTo: dyndatetime('y,m,d+1,0'),
        },
        {
          id: '9-actual',
          name: '',
          capacity: 12,
          status: 'operational',
          plate: 'NH65 QWD',
          eventCreation: false,
          cssClass: 'mds-dispatch-actual-resource',
          maintenanceFrom: dyndatetime('y,m,d-1,0'),
          maintenanceTo: dyndatetime('y,m,d+1,0'),
        },
      ],
    },
    {
      id: 'cap4',
      name: '20 tons capacity',
      eventCreation: false,
      children: [
        { id: 10, name: 'Mercedes Actros 2545', capacity: 20, status: 'operational', plate: 'KT19 LNV' },
        {
          id: '10-actual',
          name: '',
          capacity: 20,
          status: 'operational',
          plate: 'KT19 LNV',
          eventCreation: false,
          cssClass: 'mds-dispatch-actual-resource',
        },
        { id: 11, name: 'DAF XF 530', capacity: 20, status: 'operational', plate: 'WP64 GBX' },
        {
          id: '11-actual',
          name: '',
          capacity: 20,
          status: 'operational',
          plate: 'WP64 GBX',
          eventCreation: false,
          cssClass: 'mds-dispatch-actual-resource',
        },
        {
          id: 12,
          name: 'Renault T High 520',
          capacity: 20,
          status: 'operational',
          plate: 'CD70 UJE',
          maintenanceFrom: dyndatetime('y,m,d+4,0'),
          maintenanceTo: dyndatetime('y,m,d+7,0'),
        },
        {
          id: '12-actual',
          name: '',
          capacity: 20,
          status: 'operational',
          plate: 'CD70 UJE',
          eventCreation: false,
          cssClass: 'mds-dispatch-actual-resource',
          maintenanceFrom: dyndatetime('y,m,d+4,0'),
          maintenanceTo: dyndatetime('y,m,d+7,0'),
        },
      ],
    },
    {
      id: 'cap5',
      name: '24 tons capacity',
      eventCreation: false,
      children: [
        { id: 13, name: 'Volvo FH16', capacity: 24, status: 'operational', plate: 'BD67 HTA' },
        {
          id: '13-actual',
          name: '',
          capacity: 24,
          status: 'operational',
          plate: 'BD67 HTA',
          eventCreation: false,
          cssClass: 'mds-dispatch-actual-resource',
        },
        { id: 14, name: 'Freightliner Cascadia', capacity: 24, status: 'operational', plate: 'VA18 RQW' },
        {
          id: '14-actual',
          name: '',
          capacity: 24,
          status: 'operational',
          plate: 'VA18 RQW',
          eventCreation: false,
          cssClass: 'mds-dispatch-actual-resource',
        },
        { id: 15, name: 'Kenworth T680', capacity: 24, status: 'operational', plate: 'HY22 BPL' },
        {
          id: '15-actual',
          name: '',
          capacity: 24,
          status: 'operational',
          plate: 'HY22 BPL',
          eventCreation: false,
          cssClass: 'mds-dispatch-actual-resource',
        },
      ],
    },
  ];

  private myEvents: MbscCalendarEvent[] = [
    {
      resource: 1,
      from: '100 Main St, Dallas, TX',
      to: '50 Congress Ave, Tulsa, OK',
      size: 3,
      pickup: [dyndatetime('y,m,d-1,8'), dyndatetime('y,m,d-1,10')],
      drop: [dyndatetime('y,m,d-1,12'), dyndatetime('y,m,d-1,14')],
      status: 'completed',
    },
    {
      resource: 2,
      from: '200 Elm St, Fargo, ND',
      to: '75 N 3rd St, Bismarck, ND',
      size: 2.5,
      pickup: [dyndatetime('y,m,d,9'), dyndatetime('y,m,d,11')],
      drop: [dyndatetime('y,m,d,13'), dyndatetime('y,m,d,15')],
      status: 'in progress',
    },
    {
      resource: 3,
      from: '150 Broadway, Manchester, NH',
      to: '50 Kennedy Memorial Dr, Waterville, ME',
      size: 3.5,
      pickup: [dyndatetime('y,m,d+3,7'), dyndatetime('y,m,d+3,9')],
      drop: [dyndatetime('y,m,d+3,12'), dyndatetime('y,m,d+3,14')],
      status: 'scheduled',
    },
    {
      resource: 1,
      from: '50 N Main St, Phoenix, AZ',
      to: '200 Broadway Ave, Albuquerque, NM',
      size: 3,
      pickup: [dyndatetime('y,m,d+3,10'), dyndatetime('y,m,d+3,12')],
      drop: [dyndatetime('y,m,d+3,15'), dyndatetime('y,m,d+3,17')],
      status: 'scheduled',
    },
    {
      resource: 4,
      from: '85 Arch St, Boston, MA',
      to: '40 Middle St, Portland, ME',
      size: 6.5,
      pickup: [dyndatetime('y,m,d-1,8'), dyndatetime('y,m,d-1,10')],
      drop: [dyndatetime('y,m,d-1,12'), dyndatetime('y,m,d-1,14')],
      status: 'completed',
    },
    {
      resource: 5,
      from: '300 E Main St, Richmond, VA',
      to: '100 S Tryon St, Charlotte, NC',
      size: 7,
      pickup: [dyndatetime('y,m,d,5'), dyndatetime('y,m,d,7')],
      drop: [dyndatetime('y,m,d,10'), dyndatetime('y,m,d,12')],
      status: 'completed',
    },
    {
      resource: 6,
      from: '900 W Belmont Ave, Chicago, IL',
      to: '300 Market St, St Louis, MO',
      size: 6,
      pickup: [dyndatetime('y,m,d+6,9'), dyndatetime('y,m,d+6,11')],
      drop: [dyndatetime('y,m,d+6,14'), dyndatetime('y,m,d+6,16')],
      status: 'scheduled',
    },
    {
      resource: 4,
      from: '250 King St, Greensboro, NC',
      to: '200 Hay St, Fayetteville, NC',
      size: 6.5,
      pickup: [dyndatetime('y,m,d,13'), dyndatetime('y,m,d,15')],
      drop: [dyndatetime('y,m,d,18'), dyndatetime('y,m,d,20')],
      status: 'scheduled',
    },
    {
      resource: 7,
      from: '233 S Wacker Dr, Chicago, IL',
      to: '10 Public Square, Cleveland, OH',
      size: 11,
      pickup: [dyndatetime('y,m,d,8'), dyndatetime('y,m,d,11')],
      drop: [dyndatetime('y,m,d,16'), dyndatetime('y,m,d,19')],
      status: 'scheduled',
    },
    {
      resource: 8,
      from: '180 S High St, Columbus, OH',
      to: '75 E Main St, Lexington, KY',
      size: 12,
      pickup: [dyndatetime('y,m,d+2,7'), dyndatetime('y,m,d+2,10')],
      drop: [dyndatetime('y,m,d+2,15'), dyndatetime('y,m,d+2,18')],
      status: 'scheduled',
    },
    {
      resource: 9,
      from: '100 E Capitol St, Jackson, MS',
      to: '250 Riverfront Pkwy, Chattanooga, TN',
      size: 10,
      pickup: [dyndatetime('y,m,d+5,7'), dyndatetime('y,m,d+5,10')],
      drop: [dyndatetime('y,m,d+5,16'), dyndatetime('y,m,d+5,19')],
      status: 'scheduled',
    },
    {
      resource: 7,
      from: '50 Arch St, Boston, MA',
      to: '200 Middle St, Portland, ME',
      size: 9,
      pickup: [dyndatetime('y,m,d+6,8'), dyndatetime('y,m,d+6,10')],
      drop: [dyndatetime('y,m,d+6,12'), dyndatetime('y,m,d+6,14')],
      status: 'scheduled',
    },
    {
      resource: 10,
      from: '50 N 1st Ave, Phoenix, AZ',
      to: '200 Broadway Ave, Albuquerque, NM',
      size: 20,
      pickup: [dyndatetime('y,m,d,10'), dyndatetime('y,m,d,13')],
      drop: [dyndatetime('y,m,d,18'), dyndatetime('y,m,d,21')],
      status: 'in progress',
    },
    {
      resource: 11,
      from: '120 Broadway, New York, NY',
      to: '55 Canal St, New Orleans, LA',
      size: 18,
      pickup: [dyndatetime('y,m,d+3,6'), dyndatetime('y,m,d+3,9')],
      drop: [dyndatetime('y,m,d+3,10'), dyndatetime('y,m,d+3,14')],
      status: 'scheduled',
    },
    {
      resource: 12,
      from: '600 Poydras St, New Orleans, LA',
      to: '200 Commerce St, Montgomery, AL',
      size: 20,
      pickup: [dyndatetime('y,m,d+7,6'), dyndatetime('y,m,d+7,9')],
      drop: [dyndatetime('y,m,d+7,14'), dyndatetime('y,m,d+7,17')],
      status: 'scheduled',
    },
    {
      resource: 10,
      from: '120 Main St, Boston, MA',
      to: '50 Canal St, New Orleans, LA',
      size: 19,
      pickup: [dyndatetime('y,m,d+1,7'), dyndatetime('y,m,d+1,10')],
      drop: [dyndatetime('y,m,d+1,14'), dyndatetime('y,m,d+1,17')],
      status: 'scheduled',
    },
    {
      resource: 13,
      from: '100 Main St, Dallas, TX',
      to: '15 Broadway St, Denver, CO',
      size: 22,
      pickup: [dyndatetime('y,m,d,7'), dyndatetime('y,m,d,10')],
      drop: [dyndatetime('y,m,d+1,4'), dyndatetime('y,m,d+1,8')],
      status: 'scheduled',
    },
    {
      resource: 14,
      from: '300 Main St, Houston, TX',
      to: '120 W Capitol Ave, Little Rock, AR',
      size: 24,
      pickup: [dyndatetime('y,m,d+2,10'), dyndatetime('y,m,d+2,13')],
      drop: [dyndatetime('y,m,d+2,18'), dyndatetime('y,m,d+2,22')],
      status: 'scheduled',
    },
    {
      resource: 15,
      from: '900 S Flower St, Los Angeles, CA',
      to: '300 2nd Ave, Seattle, WA',
      size: 23,
      pickup: [dyndatetime('y,m,d+5,5'), dyndatetime('y,m,d+5,8')],
      drop: [dyndatetime('y,m,d+5,12'), dyndatetime('y,m,d+5,16')],
      status: 'scheduled',
    },
    {
      resource: 13,
      from: '350 S Spring St, Los Angeles, CA',
      to: '500 E Rim Rd, El Paso, TX',
      size: 24,
      pickup: [dyndatetime('y,m,d+8,6'), dyndatetime('y,m,d+8,9')],
      drop: [dyndatetime('y,m,d+8,18'), dyndatetime('y,m,d+8,21')],
      status: 'scheduled',
    },
    {
      resource: 14,
      from: '200 Market St, Philadelphia, PA',
      to: '400 Washington Ave, Minneapolis, MN',
      size: 23,
      pickup: [dyndatetime('y,m,d+3,13'), dyndatetime('y,m,d+3,16')],
      drop: [dyndatetime('y,m,d+3,20'), dyndatetime('y,m,d+3,23')],
      status: 'scheduled',
    },
    {
      resource: 15,
      from: '500 S Wacker Dr, Chicago, IL',
      to: '100 State St, Portland, ME',
      size: 24,
      pickup: [dyndatetime('y,m,d+6,8'), dyndatetime('y,m,d+6,11')],
      drop: [dyndatetime('y,m,d+6,16'), dyndatetime('y,m,d+6,19')],
      status: 'scheduled',
    },
    {
      resource: 1,
      from: '300 W Madison St, Chicago, IL',
      to: '500 Euclid Ave, Cleveland, OH',
      size: 3,
      pickup: [dyndatetime('y,m,d+1,8'), dyndatetime('y,m,d+1,10')],
      drop: [dyndatetime('y,m,d+1,13'), dyndatetime('y,m,d+1,16')],
      status: 'scheduled',
    },
    {
      resource: 4,
      from: '800 N 3rd St, Philadelphia, PA',
      to: '200 W Baltimore St, Baltimore, MD',
      size: 6.5,
      pickup: [dyndatetime('y,m,d+2,7'), dyndatetime('y,m,d+2,9')],
      drop: [dyndatetime('y,m,d+2,12'), dyndatetime('y,m,d+2,15')],
      status: 'scheduled',
    },
    {
      resource: 5,
      from: '900 Biscayne Blvd, Miami, FL',
      to: '400 N Orange Ave, Orlando, FL',
      size: 7,
      pickup: [dyndatetime('y,m,d+1,9'), dyndatetime('y,m,d+1,11')],
      drop: [dyndatetime('y,m,d+1,14'), dyndatetime('y,m,d+1,18')],
      status: 'scheduled',
    },
    {
      resource: 7,
      from: '100 S 5th St, Minneapolis, MN',
      to: '300 W Kellogg Blvd, St Paul, MN',
      size: 9,
      pickup: [dyndatetime('y,m,d+3,8'), dyndatetime('y,m,d+3,10')],
      drop: [dyndatetime('y,m,d+3,14'), dyndatetime('y,m,d+3,17')],
      status: 'scheduled',
    },
    {
      resource: 8,
      from: '500 W 2nd St, Austin, TX',
      to: '2200 Post Oak Blvd, Houston, TX',
      size: 12,
      pickup: [dyndatetime('y,m,d+4,7'), dyndatetime('y,m,d+4,10')],
      drop: [dyndatetime('y,m,d+4,15'), dyndatetime('y,m,d+4,18')],
      status: 'scheduled',
    },
    {
      resource: 11,
      from: '600 Grant St, Pittsburgh, PA',
      to: '200 W Washington St, Indianapolis, IN',
      size: 18,
      pickup: [dyndatetime('y,m,d+1,6'), dyndatetime('y,m,d+1,9')],
      drop: [dyndatetime('y,m,d+1,16'), dyndatetime('y,m,d+1,20')],
      status: 'scheduled',
    },
    {
      resource: 14,
      from: '400 N Michigan Ave, Chicago, IL',
      to: '250 E Wisconsin Ave, Milwaukee, WI',
      size: 23,
      pickup: [dyndatetime('y,m,d+5,8'), dyndatetime('y,m,d+5,11')],
      drop: [dyndatetime('y,m,d+5,15'), dyndatetime('y,m,d+5,18')],
      status: 'scheduled',
    },
    {
      resource: 13,
      from: '700 Figueroa St, Los Angeles, CA',
      to: '50 W San Fernando St, San Jose, CA',
      size: 22,
      pickup: [dyndatetime('y,m,d+4,6'), dyndatetime('y,m,d+4,9')],
      drop: [dyndatetime('y,m,d+4,17'), dyndatetime('y,m,d+4,21')],
      status: 'scheduled',
    },
  ];

  private externalEvents: any[] = [
    {
      id: 1,
      from: '2000 Q St, Sacramento, CA',
      to: '500 Poydras St, New Orleans, LA',
      size: 9,
      pickup: [dyndatetime('y,m,d,9'), dyndatetime('y,m,d,11')],
      drop: [dyndatetime('y,m,d,12'), dyndatetime('y,m,d,17')],
    },
    {
      id: 2,
      from: '100 State St, Madison, WI',
      to: '300 S Wacker Dr, Chicago, IL',
      size: 22,
      pickup: [dyndatetime('y,m,d,13'), dyndatetime('y,m,d,15')],
      drop: [dyndatetime('y,m,d,16'), dyndatetime('y,m,d,21')],
    },
    {
      id: 3,
      from: '1500 Market St, Philadelphia, PA',
      to: '600 Liberty St, Pittsburgh, PA',
      size: 13,
      pickup: [dyndatetime('y,m,d,13'), dyndatetime('y,m,d,17')],
      drop: [dyndatetime('y,m,d,18'), dyndatetime('y,m,d,22')],
    },
    {
      id: 25,
      from: '350 Fifth Ave, New York, NY',
      to: '100 Broad St, Newark, NJ',
      size: 3.5,
      pickup: [dyndatetime('y,m,d,14'), dyndatetime('y,m,d,16')],
      drop: [dyndatetime('y,m,d,18'), dyndatetime('y,m,d,21')],
    },
    {
      id: 26,
      from: '800 Market St, San Francisco, CA',
      to: '400 Capitol Mall, Sacramento, CA',
      size: 6,
      pickup: [dyndatetime('y,m,d,15'), dyndatetime('y,m,d,17')],
      drop: [dyndatetime('y,m,d,19'), dyndatetime('y,m,d,22')],
    },
    {
      id: 4,
      from: '1100 Congress Ave, Austin, TX',
      to: '500 E Main St, Dallas, TX',
      size: 20,
      pickup: [dyndatetime('y,m,d+1,7'), dyndatetime('y,m,d+1,9')],
      drop: [dyndatetime('y,m,d+1,10'), dyndatetime('y,m,d+1,15')],
    },
    {
      id: 5,
      from: '200 Peachtree St NW, Atlanta, GA',
      to: '50 Music Sq E, Nashville, TN',
      size: 8,
      pickup: [dyndatetime('y,m,d+1,8'), dyndatetime('y,m,d+1,10')],
      drop: [dyndatetime('y,m,d+1,12'), dyndatetime('y,m,d+1,16')],
    },
    {
      id: 6,
      from: '500 Boylston St, Boston, MA',
      to: '200 State St, Portland, ME',
      size: 3.5,
      pickup: [dyndatetime('y,m,d+1,8,30'), dyndatetime('y,m,d+1,10,30')],
      drop: [dyndatetime('y,m,d+1,12,30'), dyndatetime('y,m,d+1,18,30')],
    },
    {
      id: 27,
      from: '200 S Lamar Blvd, Austin, TX',
      to: '500 Commerce St, Dallas, TX',
      size: 19,
      pickup: [dyndatetime('y,m,d+1,13'), dyndatetime('y,m,d+1,15')],
      drop: [dyndatetime('y,m,d+1,18'), dyndatetime('y,m,d+1,22')],
    },
    {
      id: 28,
      from: '300 W Colfax Ave, Denver, CO',
      to: '100 N Main St, Pueblo, CO',
      size: 10,
      pickup: [dyndatetime('y,m,d+2,10'), dyndatetime('y,m,d+2,12')],
      drop: [dyndatetime('y,m,d+2,14'), dyndatetime('y,m,d+2,18')],
    },
    {
      id: 7,
      from: '400 S 4th St, Louisville, KY',
      to: '1400 Main St, Cincinnati, OH',
      size: 7,
      pickup: [dyndatetime('y,m,d+2,6'), dyndatetime('y,m,d+2,8')],
      drop: [dyndatetime('y,m,d+2,9'), dyndatetime('y,m,d+2,12')],
    },
    {
      id: 8,
      from: '410 S Houston Ave, Tulsa, OK',
      to: '250 W Capitol Ave, Little Rock, AR',
      size: 11.5,
      pickup: [dyndatetime('y,m,d+2,6,30'), dyndatetime('y,m,d+2,8,30')],
      drop: [dyndatetime('y,m,d+2,10,30'), dyndatetime('y,m,d+2,15,30')],
    },
    {
      id: 29,
      from: '450 Sutter St, San Francisco, CA',
      to: '200 Pine Ave, Long Beach, CA',
      size: 22,
      pickup: [dyndatetime('y,m,d+3,7'), dyndatetime('y,m,d+3,9')],
      drop: [dyndatetime('y,m,d+3,13'), dyndatetime('y,m,d+3,17')],
    },
    {
      id: 9,
      from: '999 3rd Ave, Seattle, WA',
      to: '500 W 8th St, Vancouver, WA',
      size: 3,
      pickup: [dyndatetime('y,m,d+3,9'), dyndatetime('y,m,d+3,11')],
      drop: [dyndatetime('y,m,d+3,12'), dyndatetime('y,m,d+3,17')],
    },
    {
      id: 10,
      from: '50 S Main St, Salt Lake City, UT',
      to: '300 N Broadway, Denver, CO',
      size: 5,
      pickup: [dyndatetime('y,m,d+3,10'), dyndatetime('y,m,d+3,12')],
      drop: [dyndatetime('y,m,d+3,13'), dyndatetime('y,m,d+3,18')],
    },
    {
      id: 11,
      from: '300 S Grand Ave, Los Angeles, CA',
      to: '400 E Van Buren St, Phoenix, AZ',
      size: 5,
      pickup: [dyndatetime('y,m,d+7,8'), dyndatetime('y,m,d+7,10')],
      drop: [dyndatetime('y,m,d+7,13'), dyndatetime('y,m,d+7,18')],
    },
    {
      id: 12,
      from: '200 W Washington St, Indianapolis, IN',
      to: '100 N Main St, Louisville, KY',
      size: 18,
      pickup: [dyndatetime('y,m,d+8,7'), dyndatetime('y,m,d+8,9')],
      drop: [dyndatetime('y,m,d+8,12'), dyndatetime('y,m,d+8,17')],
    },
    {
      id: 13,
      from: '500 N Michigan Ave, Chicago, IL',
      to: '250 Marquette Ave, Minneapolis, MN',
      size: 3,
      pickup: [dyndatetime('y,m,d+9,9'), dyndatetime('y,m,d+9,11')],
      drop: [dyndatetime('y,m,d+9,14'), dyndatetime('y,m,d+9,19')],
    },
    {
      id: 14,
      from: '600 Congress Ave, Austin, TX',
      to: '700 Texas Ave, Houston, TX',
      size: 12,
      pickup: [dyndatetime('y,m,d+10,6'), dyndatetime('y,m,d+10,8')],
      drop: [dyndatetime('y,m,d+10,11'), dyndatetime('y,m,d+10,16')],
    },
    {
      id: 15,
      from: '100 Broad St, Newark, NJ',
      to: '200 S Orange Ave, Orlando, FL',
      size: 7,
      pickup: [dyndatetime('y,m,d+12,10'), dyndatetime('y,m,d+12,12')],
      drop: [dyndatetime('y,m,d+12,15'), dyndatetime('y,m,d+12,20')],
    },
    {
      id: 16,
      from: '400 Pike St, Seattle, WA',
      to: '800 SW Broadway, Portland, OR',
      size: 9,
      pickup: [dyndatetime('y,m,d+14,7'), dyndatetime('y,m,d+14,9')],
      drop: [dyndatetime('y,m,d+14,12'), dyndatetime('y,m,d+14,16')],
    },
    {
      id: 17,
      from: '300 Main St, Buffalo, NY',
      to: '500 Euclid Ave, Cleveland, OH',
      size: 22,
      pickup: [dyndatetime('y,m,d+15,8'), dyndatetime('y,m,d+15,11')],
      drop: [dyndatetime('y,m,d+15,14'), dyndatetime('y,m,d+15,19')],
    },
    {
      id: 18,
      from: '150 S Miami Ave, Miami, FL',
      to: '300 Peachtree St, Atlanta, GA',
      size: 6,
      pickup: [dyndatetime('y,m,d+16,9'), dyndatetime('y,m,d+16,11')],
      drop: [dyndatetime('y,m,d+16,13'), dyndatetime('y,m,d+16,18')],
    },
    {
      id: 19,
      from: '700 W 3rd St, Kansas City, MO',
      to: '400 N Broadway, St Louis, MO',
      size: 15,
      pickup: [dyndatetime('y,m,d+18,6'), dyndatetime('y,m,d+18,8')],
      drop: [dyndatetime('y,m,d+18,10'), dyndatetime('y,m,d+18,15')],
    },
    {
      id: 20,
      from: '250 E Houston St, San Antonio, TX',
      to: '1200 Commerce St, Dallas, TX',
      size: 4,
      pickup: [dyndatetime('y,m,d+19,11'), dyndatetime('y,m,d+19,13')],
      drop: [dyndatetime('y,m,d+19,15'), dyndatetime('y,m,d+19,20')],
    },
    {
      id: 21,
      from: '800 N Michigan Ave, Chicago, IL',
      to: '500 Woodward Ave, Detroit, MI',
      size: 11,
      pickup: [dyndatetime('y,m,d+21,7'), dyndatetime('y,m,d+21,9')],
      drop: [dyndatetime('y,m,d+21,12'), dyndatetime('y,m,d+21,17')],
    },
    {
      id: 22,
      from: '900 Market St, San Francisco, CA',
      to: '600 Wilshire Blvd, Los Angeles, CA',
      size: 20,
      pickup: [dyndatetime('y,m,d+22,8'), dyndatetime('y,m,d+22,10')],
      drop: [dyndatetime('y,m,d+22,14'), dyndatetime('y,m,d+22,19')],
    },
    {
      id: 23,
      from: '350 5th Ave, New York, NY',
      to: '100 Federal St, Boston, MA',
      size: 3.5,
      pickup: [dyndatetime('y,m,d+23,9'), dyndatetime('y,m,d+23,11')],
      drop: [dyndatetime('y,m,d+23,13'), dyndatetime('y,m,d+23,17')],
    },
    {
      id: 24,
      from: '200 S Tryon St, Charlotte, NC',
      to: '100 N Main St, Greenville, SC',
      size: 8,
      pickup: [dyndatetime('y,m,d+25,6'), dyndatetime('y,m,d+25,8')],
      drop: [dyndatetime('y,m,d+25,10'), dyndatetime('y,m,d+25,14')],
    },
  ];

  private statusColors: Record<string, string> = {
    scheduled: '#2196f3',
    'in progress': '#f97316',
    completed: '#78909c',
  };

  private maintenanceColors: Record<string, string> = {
    'in-maintenance': '#f44336',
    'maintenance-planned': '#ff9800',
    operational: '#4caf50',
  };

  private maintenanceLabelsMap: Record<string, string> = {
    'in-maintenance': 'In Maintenance',
    'maintenance-planned': 'Maintenance Planned',
    operational: 'Operational',
  };

  private now = new Date();
  private today = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate());
  private myInvalids: any[] = [];
  private maintenanceInvalids: any[] = [];
  private scheduledJobIds: (string | number)[] = [];
  private currentViewStart = this.today;
  private currentViewEnd = new Date(this.today.getTime() + 7 * 24 * 60 * 60 * 1000);
  private currentRangeStart = this.today;
  private currentRangeDays = 7;
  private pendingRangeStart = this.today;
  private pendingRangeDays = 7;
  private refreshInterval: any;
  private searchTimeout: any;

  filters: Record<string, boolean> = {};
  statusFilters: string[] = ['scheduled', 'in progress', 'completed'];
  filteredResources: MbscResource[] = [];
  calendarData: MbscCalendarEvent[] = [];
  calendarInvalid: any[] = [];
  zoomLevel = 3;
  refDate: Date = this.today;
  calView: MbscEventcalendarView = this.buildViewConfig(7);
  rangeLabel = '';
  visibleJobs: any[] = [];
  jobListItems: any[] = [];
  searchQuery = '';
  filterAnchor: HTMLElement | undefined;
  tempFilters: Record<string, boolean> = {};
  rangeSelectValue = '7';
  rangeInputsDisabled = true;
  calendarRangeValue: Date[] = [];
  rangeSelectorData = [
    { value: 'custom', text: 'Custom' },
    { value: '7', text: 'Next 7 days' },
    { value: '14', text: 'Next 14 days' },
    { value: '30', text: 'Next 30 days' },
    { value: '60', text: 'Next 60 days' },
    { value: '90', text: 'Next 90 days' },
  ];

  rangePopupResponsive: Record<string, MbscPopupOptions & { breakpoint?: number }> = {
    xsmall: {
      display: 'bottom',
      touchUi: true,
      buttons: [
        {
          text: 'Apply',
          keyCode: 'enter' as const,
          handler: () => {
            this.applyPendingRange();
          },
          cssClass: 'mbsc-popup-button-primary',
        },
        'cancel',
      ],
    },
    custom: {
      breakpoint: 575,
      buttons: [],
      display: 'anchored',
      touchUi: false,
      scrollLock: false,
      maxWidth: 920,
    },
  };

  filterPopupButtons: (MbscPopupButton | 'ok' | 'close' | 'set' | 'cancel')[] = [
    'cancel',
    {
      text: 'Apply',
      keyCode: 'enter' as const,
      handler: () => {
        this.filters = { ...this.tempFilters };
        this.filterResources();
        this.refreshJobList();
        this.filterPopupRef.close();
        this.showToast('Filters applied');
      },
      cssClass: 'mbsc-popup-button-primary',
    },
  ];

  ngOnInit(): void {
    this.filters['operational'] = true;
    this.filters['maintenance'] = true;
    this.myResources.forEach((category) => {
      this.filters[category.id as string] = true;
    });

    this.setEventData(this.myEvents);
    this.addActualEvents(this.myEvents);
    this.setupMaintenanceDates();
    this.maintenanceInvalids = this.buildMaintenanceInvalids();
    this.filteredResources = this.computeFilteredResources();
    this.calendarData = this.getStatusFilteredEvents();
    this.calendarInvalid = [...this.maintenanceInvalids];

    this.setEventData(this.externalEvents);
    const end = new Date(this.today.getTime() + 6 * 24 * 60 * 60 * 1000);
    this.calendarRangeValue = [this.today, end];

    this.rangeLabel = this.formatRangeLabel(this.today, 7);
    this.refreshJobList();

    this.refreshInterval = setInterval(() => this.refresh(), 60000);
  }

  ngOnDestroy(): void {
    clearInterval(this.refreshInterval);
  }

  private showToast(message: string): void {
    this.notify.toast({ message });
  }

  private getResourceMaintenanceStatus(resource: any): string {
    if (!resource.maintenanceFrom || !resource.maintenanceTo) return 'operational';
    const from = new Date(resource.maintenanceFrom);
    const to = new Date(resource.maintenanceTo);
    if (this.now >= from && this.now <= to) return 'in-maintenance';
    if (from < this.currentViewEnd && to > this.currentViewStart) return 'maintenance-planned';
    return 'operational';
  }

  getMaintenanceColor(resource: any): string {
    return this.maintenanceColors[this.getResourceMaintenanceStatus(resource)] || '#4caf50';
  }

  getMaintenanceLabel(resource: any): string {
    return this.maintenanceLabelsMap[this.getResourceMaintenanceStatus(resource)] || 'Operational';
  }

  private buildMaintenanceInvalids(): any[] {
    const invalids: any[] = [];
    this.myResources.forEach((group: any) => {
      group.children?.forEach((resource: any) => {
        if (resource.maintenanceFrom && resource.maintenanceTo && !String(resource.id).includes('actual')) {
          invalids.push({
            start: resource.maintenanceFrom,
            end: resource.maintenanceTo,
            resource: resource.id,
            cssClass: 'mds-dispatch-maintenance-invalid',
          });
        }
      });
    });
    return invalids;
  }

  private setupMaintenanceDates(): void {
    this.myResources.forEach((group: any) => {
      group.children?.forEach((resource: any) => {
        if (resource.maintenanceFrom) resource.maintenanceFrom = new Date(resource.maintenanceFrom);
        if (resource.maintenanceTo) resource.maintenanceTo = new Date(resource.maintenanceTo);
      });
    });
  }

  private getActualDates(start: Date, end: Date): Date[] {
    const possibleOffsets = [-120, -90, -60, -30, -15, 0, 15, 30, 60, 90, 120];
    const departureOffset = possibleOffsets[Math.floor(Math.random() * possibleOffsets.length)] * 60000;
    const arrivalOffset = possibleOffsets[Math.floor(Math.random() * possibleOffsets.length)] * 60000;
    return [new Date(start.getTime() + departureOffset), new Date(end.getTime() + arrivalOffset)];
  }

  private addActualEvents(events: any[]): void {
    for (const event of events) {
      event.start = event.start ? new Date(event.start) : event.start;
      event.end = event.end ? new Date(event.end) : event.end;

      if (event.status === 'actual') continue;

      if (event.end <= this.now) {
        event.color = this.statusColors['completed'];
      } else if (event.start < this.now) {
        event.color = this.statusColors['in progress'];
      } else {
        event.color = this.statusColors[event.status] || this.statusColors['scheduled'];
      }

      event.editable = this.now < event.start;

      if (event.start < this.now && event.end > this.now) {
        if (!event.actual) {
          const actualDates = this.getActualDates(event.start, new Date(event.drop[0]));
          const actualStart = actualDates[0] >= event.start && actualDates[0] < this.now ? actualDates[0] : event.start;
          const newEvent = {
            resource: event.resource + '-actual',
            from: event.from,
            to: event.to,
            pickup: event.pickup,
            drop: event.drop,
            size: event.size,
            start: actualStart,
            end: this.now,
            title: 'In progress',
            status: 'actual',
            color: event.color,
            cssClass: 'mds-dispatch-actual-event mds-dispatch-pulse',
            editable: false,
          };
          event.actual = true;
          event.actualRef = newEvent;
          events.push(newEvent);
        } else if (event.actualRef) {
          event.actualRef.end = this.now;
        }
      } else if (event.end <= this.now) {
        if (!event.actual) {
          const completedActualDates = this.getActualDates(event.start, new Date(event.drop[0]));
          const completedActualStart =
            completedActualDates[0] >= event.start && completedActualDates[0] < event.end ? completedActualDates[0] : event.start;
          let completedActualEnd = completedActualDates[1];
          const minEnd = new Date(completedActualStart.getTime() + 30 * 60000);
          if (completedActualEnd < minEnd) completedActualEnd = minEnd;
          const completedNewEvent = {
            resource: event.resource + '-actual',
            from: event.from,
            to: event.to,
            pickup: event.pickup,
            drop: event.drop,
            size: event.size,
            start: completedActualStart,
            end: completedActualEnd,
            title: 'Completed',
            status: 'actual',
            color: event.color,
            cssClass: 'mds-dispatch-actual-event',
            editable: false,
          };
          event.actual = true;
          event.actualRef = completedNewEvent;
          events.push(completedNewEvent);
        } else if (event.actualRef && event.actualRef.title !== 'Completed') {
          const completedActualDates = this.getActualDates(event.actualRef.start, new Date(event.drop[0]));
          let completedActualEnd = completedActualDates[1];
          const minEnd = new Date(event.actualRef.start.getTime() + 30 * 60000);
          if (completedActualEnd < minEnd) completedActualEnd = minEnd;
          event.actualRef.end = completedActualEnd;
          event.actualRef.color = event.color;
          event.actualRef.cssClass = 'mds-dispatch-actual-event';
          event.actualRef.title = 'Completed';
        }
      }
    }
  }

  private setEventData(events: any[]): void {
    for (const event of events) {
      event.start = event.start ? event.start : event.pickup[0];
      event.end = event.end ? event.end : event.drop[0];
      event.title = event.from + ' → ' + event.to;
    }
  }

  private computeFilteredResources(): MbscResource[] {
    return this.myResources
      .map((category: any) => {
        const keptIds: Record<string, boolean> = {};
        category.children?.forEach((resource: any) => {
          if (String(resource.id).includes('actual')) return;
          const filterKey = this.getResourceMaintenanceStatus(resource) === 'operational' ? 'operational' : 'maintenance';
          if (
            this.filters[filterKey] &&
            (!this.searchQuery ||
              resource.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              resource.plate.toLowerCase().includes(this.searchQuery.toLowerCase()))
          ) {
            keptIds[resource.id] = true;
          }
        });
        return {
          id: category.id,
          name: category.name,
          eventCreation: category.eventCreation,
          children: category.children?.filter((resource: any) => {
            if (String(resource.id).includes('actual')) {
              const parentId = String(resource.id).replace('-actual', '');
              if (!keptIds[parentId]) return false;
              const parent = category.children?.find((r: any) => String(r.id) === parentId);
              return !parent || this.getResourceMaintenanceStatus(parent) === 'operational';
            }
            return keptIds[resource.id];
          }),
        };
      })
      .filter((res: any) => res.children?.length > 0 && this.filters[res.id]);
  }

  private filterResources(): void {
    this.filteredResources = this.computeFilteredResources();
  }

  private getEffectiveStatus(ev: any): string {
    if (ev.status === 'actual') return ev.title === 'Completed' ? 'completed' : 'in progress';
    if (ev.end && ev.end <= this.now) return 'completed';
    if (ev.start && ev.start < this.now) return 'in progress';
    return ev.status || 'scheduled';
  }

  private getStatusFilteredEvents(): MbscCalendarEvent[] {
    return this.myEvents.filter((ev) => this.statusFilters.includes(this.getEffectiveStatus(ev)));
  }

  private getMaxAvailableCapacity(): number {
    let max = 0;
    this.myResources.forEach((group: any) => {
      if (this.filters[group.id]) {
        group.children?.forEach((child: any) => {
          if (!String(child.id).includes('actual') && child.capacity > max) max = child.capacity;
        });
      }
    });
    return max;
  }

  private buildViewConfig(days: number): MbscEventcalendarView {
    return {
      timeline: {
        type: 'day',
        size: days,
        timeCellStep: 60,
        timeLabelStep: 60,
        eventHeight: 'variable',
        zoomLevels: {
          1: { type: 'day', size: days, columnWidth: 'xsmall', timeCellStep: 240, timeLabelStep: 240 },
          2: { type: 'day', size: days, columnWidth: 'small', timeCellStep: 120, timeLabelStep: 120 },
          3: { type: 'day', size: days, columnWidth: 'medium', timeCellStep: 60, timeLabelStep: 60 },
          4: { type: 'day', size: days, columnWidth: 'xlarge', timeCellStep: 30, timeLabelStep: 60 },
          5: { type: 'day', size: days, columnWidth: 'xlarge', timeCellStep: 15, timeLabelStep: 60 },
        },
      },
    };
  }

  private applyDaysRange(days: number, startDate?: Date): void {
    const target = startDate || this.today;
    this.currentViewStart = target;
    this.currentViewEnd = new Date(target.getTime() + days * 24 * 60 * 60 * 1000);
    this.filteredResources = this.computeFilteredResources();
    this.refDate = target;
    this.calView = this.buildViewConfig(days);
    const navigateTo = this.today >= target && this.today < this.currentViewEnd ? this.now : target;
    setTimeout(() => {
      this.calendarRef?.navigate(navigateTo);
    }, 100);
  }

  private formatDelay(minutes: number): string {
    if (Math.abs(minutes) < 5) return 'on time';
    if (minutes > 0) return minutes + ' min late';
    return Math.abs(minutes) + ' min early';
  }

  private formatDuration(ms: number): string {
    const totalMin = Math.round(ms / 60000);
    const h = Math.floor(totalMin / 60);
    const m = totalMin % 60;
    if (h === 0) return m + ' min';
    if (m === 0) return h + ' h';
    return h + ' h ' + m + ' min';
  }

  private formatRangeLabel(start: Date, days: number): string {
    const end = new Date(start.getTime() + (days - 1) * 24 * 60 * 60 * 1000);
    return formatDate('MMM D', start) + ' – ' + formatDate('MMM D, YYYY', end);
  }

  formatTime(date: Date | string): string {
    return formatDate('H:mm', new Date(date));
  }

  private findResourceById(id: any): any {
    const baseId = String(id).replace('-actual', '');
    for (const group of this.myResources as any[]) {
      for (const child of group.children || []) {
        if (String(child.id) === baseId) return child;
      }
    }
    return null;
  }

  private findFirstSlot(draggedEvent: any): { start: Date; end: Date } | null {
    this.now = new Date();
    const minStart = new Date(this.now.getTime() + 2 * 60 * 60 * 1000);
    const windowStart = new Date(draggedEvent.pickup[0]);
    const windowEnd = new Date(draggedEvent.drop[1]);
    let eventStart = new Date(draggedEvent.start);
    let eventEnd = new Date(draggedEvent.end);

    const effectiveWindowStart = windowStart < minStart ? minStart : windowStart;
    const eventDuration = eventEnd.getTime() - eventStart.getTime();
    const windowSize = windowEnd.getTime() - effectiveWindowStart.getTime();

    if (eventDuration > windowSize) return null;
    if (eventStart < effectiveWindowStart) {
      eventStart = new Date(effectiveWindowStart);
      eventEnd = new Date(effectiveWindowStart.getTime() + eventDuration);
    }
    if (eventEnd > windowEnd) {
      eventEnd = new Date(windowEnd);
      eventStart = new Date(windowEnd.getTime() - eventDuration);
    }

    if (draggedEvent.resource) {
      const resource = this.findResourceById(draggedEvent.resource);
      if (resource?.maintenanceFrom && resource?.maintenanceTo) {
        const mFrom = new Date(resource.maintenanceFrom);
        const mTo = new Date(resource.maintenanceTo);
        if (eventStart < mTo && eventEnd > mFrom) {
          eventStart = new Date(mTo);
          eventEnd = new Date(mTo.getTime() + eventDuration);
          if (eventEnd > windowEnd) return null;
        }
      }
    }

    return { start: eventStart, end: eventEnd };
  }

  private moveToFirstAvailableSlot(draggedEvent: any, isEdit: boolean): boolean {
    const slot = this.findFirstSlot(draggedEvent);
    if (slot) {
      draggedEvent.start = slot.start;
      draggedEvent.end = slot.end;
      if (isEdit) {
        this.calendarRef.updateEvent(draggedEvent);
      } else {
        this.calendarRef.addEvent(draggedEvent);
      }
      return true;
    }
    return false;
  }

  private invalidateResources(event: any): any {
    this.now = new Date();
    const minTime = new Date(this.now.getTime() + 2 * 60 * 60 * 1000);
    const sevenDaysFromNow = new Date(this.now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const invalidIds: any[] = [];
    const validIds: any[] = [];
    const windowStart = new Date(event.pickup[0]);
    const windowEnd = new Date(event.drop[1]);

    for (const group of this.myResources as any[]) {
      for (const truck of group.children || []) {
        let isValid = true;
        if (truck.capacity < event.size) {
          truck.eventCreation = false;
          invalidIds.push(truck.id);
          isValid = false;
        }
        if (isValid) {
          const truckEvents = this.calendarRef.getEvents().filter((ev: any) => ev.resource === truck.id);
          const overlappingEvent = truckEvents.find((ev: any) => {
            const evEnd = ev.drop ? new Date(ev.drop[1]) : ev.end;
            return evEnd > windowStart && ev.start < windowEnd;
          });
          if (overlappingEvent && event.resource !== truck.id) {
            truck.eventCreation = false;
            invalidIds.push(truck.id);
            if (!String(truck.id).includes('actual')) invalidIds.push(truck.id + '-actual');
            isValid = false;
          }
        }
        if (isValid && !String(truck.id).includes('actual')) validIds.push(truck.id);
      }
    }

    this.myInvalids = [
      { start: this.today, end: windowStart < minTime ? minTime : windowStart, cssClass: 'mds-dispatch-disabled-row' },
      { start: windowStart < minTime ? minTime : windowStart, end: windowEnd, resource: invalidIds, cssClass: 'mds-dispatch-disabled-row' },
      { start: windowEnd, end: sevenDaysFromNow, cssClass: 'mds-dispatch-disabled-row' },
    ];

    setTimeout(() => {
      this.calendarInvalid = [...this.myInvalids, ...this.maintenanceInvalids];
    });

    return validIds.length > 0 ? validIds[0] : null;
  }

  private resetEventCreationFlags(): void {
    for (const group of this.myResources as any[]) {
      for (const truck of group.children || []) {
        if (!String(truck.id).includes('actual')) truck.eventCreation = true;
      }
    }
  }

  private refresh(): void {
    this.now = new Date();
    this.filteredResources = this.computeFilteredResources();
    this.addActualEvents(this.myEvents);
    setTimeout(() => {
      this.calendarData = this.getStatusFilteredEvents();
      this.calendarInvalid = [...this.myInvalids, ...this.maintenanceInvalids];
    });
  }

  refreshJobList(): void {
    this.now = new Date();
    const rangeEnd = new Date(this.currentRangeStart.getTime() + this.currentRangeDays * 24 * 60 * 60 * 1000);
    const minPickup = new Date(this.now.getTime() + 2 * 60 * 60 * 1000);
    const maxCapacity = this.getMaxAvailableCapacity();
    this.visibleJobs = this.externalEvents.filter((job) => {
      if (this.scheduledJobIds.indexOf(job.id) !== -1) return false;
      if (job.size > maxCapacity) return false;
      const pickupStart = new Date(job.pickup[0]);
      if (pickupStart < minPickup) return false;
      return pickupStart >= this.currentRangeStart && pickupStart < rangeEnd;
    });

    const items: any[] = [];
    let lastDayKey: string | null = null;
    for (const job of this.visibleJobs) {
      const pickupDate = new Date(job.pickup[0]);
      const dayKey = formatDate('YYYY-MM-DD', pickupDate);
      if (dayKey !== lastDayKey) {
        items.push({ type: 'header', label: formatDate('DDD, DD MMM', pickupDate) });
        lastDayKey = dayKey;
      }
      items.push({ type: 'job', job });
    }
    this.jobListItems = items;
  }

  handleZoom(zoom: number): void {
    this.zoomLevel = zoom;
    this.calView = this.buildViewConfig(this.currentRangeDays);
  }

  onStatusFilterChange(): void {
    this.calendarData = this.getStatusFilteredEvents();
  }

  onSearchChange(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.filteredResources = this.computeFilteredResources();
    }, 300);
  }

  openFilterPopup(event: MouseEvent): void {
    this.tempFilters = { ...this.filters };
    this.filterAnchor = event.target as HTMLElement;
    this.filterPopupRef.open();
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.myResources.forEach((cat: any) => {
      this.filters[cat.id] = true;
    });
    this.filters['operational'] = true;
    this.filters['maintenance'] = true;
    this.filterResources();
    this.refreshJobList();
    this.showToast('Filters cleared');
  }

  openRangePopup(): void {
    this.rangePopupRef.open();
  }

  applyPendingRange(): void {
    this.currentRangeStart = this.pendingRangeStart;
    this.currentRangeDays = this.pendingRangeDays;
    this.applyDaysRange(this.currentRangeDays, this.currentRangeStart);
    this.rangeLabel = this.formatRangeLabel(this.currentRangeStart, this.currentRangeDays);
    this.refreshJobList();
    this.rangePopupRef.close();
  }

  onRangeSelectChange(args: any): void {
    const val = args.value;
    if (val === 'custom') {
      this.rangeInputsDisabled = false;
    } else {
      this.rangeInputsDisabled = true;
      this.pendingRangeDays = +val;
      this.pendingRangeStart = this.today;
      const end = new Date(this.today.getTime() + (this.pendingRangeDays - 1) * 24 * 60 * 60 * 1000);
      this.calendarRangeValue = [this.today, end];
    }
  }

  onCalendarRangeChange(args: any): void {
    const dates = args.value;
    if (dates) {
      this.rangeInputsDisabled = false;
      this.rangeSelectValue = 'custom';
      if (dates[0] && dates[1]) {
        const start = new Date(dates[0]);
        const end = new Date(dates[1]);
        this.pendingRangeStart = start;
        this.pendingRangeDays = Math.round((end.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)) + 1;
      }
    }
  }

  goLive(): void {
    this.now = new Date();
    this.today = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate());
    this.currentRangeStart = this.today;
    this.applyDaysRange(this.currentRangeDays, this.today);
    this.rangeLabel = this.formatRangeLabel(this.today, this.currentRangeDays);
    setTimeout(() => this.calendarRef?.navigate(this.now));
    this.refreshJobList();
  }

  onEventCreated(args: any): void {
    if (args.action === 'externalDrop') {
      this.scheduledJobIds.push(args.event.id);
      const scheduledEvent = { ...args.event, status: 'scheduled', color: this.statusColors['scheduled'] };
      this.calendarRef.updateEvent(scheduledEvent);
      this.myEvents.push(scheduledEvent);
      setTimeout(() => {
        this.visibleJobs = this.visibleJobs.filter((j) => j.id !== args.event.id);
        this.jobListItems = this.jobListItems.filter((item) => item.type !== 'job' || item.job.id !== args.event.id);
      });
    }
    this.showToast(args.event.from + ' → ' + args.event.to + ' added');
  }

  onEventCreateFailed(args: any): void {
    const draggedEvent = args.event;
    const moved = this.moveToFirstAvailableSlot(draggedEvent, false);
    if (moved) {
      if (args.action === 'externalDrop') {
        setTimeout(() => {
          this.visibleJobs = this.visibleJobs.filter((j) => j.id !== args.event.id);
          this.jobListItems = this.jobListItems.filter((item) => item.type !== 'job' || item.job.id !== args.event.id);
        });
      }
      setTimeout(() => this.calendarRef?.navigateToEvent({ start: draggedEvent.start, resource: draggedEvent.resource }));
      this.showToast(draggedEvent.from + ' → ' + draggedEvent.to + ' added to first available slot');
    } else {
      this.showToast('No available slot found for ' + args.event.from + ' → ' + args.event.to);
    }
  }

  onEventUpdateFailed(args: any): void {
    const draggedEvent = args.event;
    const moved = this.moveToFirstAvailableSlot(draggedEvent, true);
    if (moved) {
      setTimeout(() => this.calendarRef?.navigateToEvent({ start: draggedEvent.start, resource: draggedEvent.resource }));
      this.showToast(draggedEvent.from + ' → ' + draggedEvent.to + ' moved to first available slot');
    } else {
      const originalEvent = args.oldEvent;
      setTimeout(() => this.calendarRef?.navigateToEvent({ start: originalEvent.start, resource: originalEvent.resource }));
      this.showToast('No available slot found for ' + args.event.from + ' → ' + args.event.to);
    }
  }

  onEventDragStart(args: any): void {
    const resourceToNavigate = this.invalidateResources(args.event);
    if (!args.event.resource) {
      if (resourceToNavigate && this.findFirstSlot(args.event)) {
        this.calendarRef.navigateToEvent({ start: args.event.start, resource: resourceToNavigate });
      } else {
        this.showToast('No available slot for: ' + args.event.from + ' → ' + args.event.to);
      }
    }
  }

  onEventDragEnd(): void {
    this.resetEventCreationFlags();
    this.myInvalids = [];
    this.filteredResources = this.computeFilteredResources();
    this.calendarInvalid = [...this.maintenanceInvalids];
  }

  onEventClick(args: any): void {
    if (args.event.status === 'actual') {
      const ev = args.event;
      const actualStart = new Date(ev.start);
      const scheduledDeparture = new Date(ev.pickup[0]);
      const departureDelay = Math.round((actualStart.getTime() - scheduledDeparture.getTime()) / 60000);
      let msg: string;
      if (ev.title === 'In progress') {
        msg =
          'Actual transport: departed ' +
          this.formatDelay(departureDelay) +
          ' · running ' +
          this.formatDuration(new Date().getTime() - actualStart.getTime());
      } else {
        const actualEnd = new Date(ev.end);
        const scheduledArrival = new Date(ev.drop[0]);
        const arrivalDelay = Math.round((actualEnd.getTime() - scheduledArrival.getTime()) / 60000);
        msg = 'Actual transport: departed ' + this.formatDelay(departureDelay) + ' · arrived ' + this.formatDelay(arrivalDelay);
      }
      this.notify.toast({ message: msg });
    }
  }

  onPageLoaded(args: any): void {
    this.currentViewStart = args.firstDay;
    this.currentViewEnd = args.lastDay;
  }
}
