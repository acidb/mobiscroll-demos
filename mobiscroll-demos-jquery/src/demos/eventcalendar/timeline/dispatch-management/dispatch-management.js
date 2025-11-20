import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var myEvents = [
        // Resource 1–3 (size <=3.5)
        {
          resource: 1,
          from: '100 Main St, Dallas, TX',
          to: '50 Congress Ave, Tulsa, OK',
          size: 3,
          pickup: ['dyndatetime(y,m,d-1,8)', 'dyndatetime(y,m,d-1,10)'],
          drop: ['dyndatetime(y,m,d-1,12)', 'dyndatetime(y,m,d-1,14)'],
          status: 'completed',
        },
        {
          resource: 2,
          from: '200 Elm St, Fargo, ND',
          to: '75 N 3rd St, Bismarck, ND',
          size: 2.5,
          pickup: ['dyndatetime(y,m,d,9)', 'dyndatetime(y,m,d,11)'],
          drop: ['dyndatetime(y,m,d,13)', 'dyndatetime(y,m,d,15)'],
          status: 'started',
        },
        {
          resource: 3,
          from: '150 Broadway, Manchester, NH',
          to: '50 Kennedy Memorial Dr, Waterville, ME',
          size: 3.5,
          pickup: ['dyndatetime(y,m,d+1,7)', 'dyndatetime(y,m,d+1,9)'],
          drop: ['dyndatetime(y,m,d+1,12)', 'dyndatetime(y,m,d+1,14)'],
          status: 'scheduled',
        },
        {
          resource: 1,
          from: '50 N Main St, Phoenix, AZ',
          to: '200 Broadway Ave, Albuquerque, NM',
          size: 3,
          pickup: ['dyndatetime(y,m,d+3,10)', 'dyndatetime(y,m,d+3,12)'],
          drop: ['dyndatetime(y,m,d+3,15)', 'dyndatetime(y,m,d+3,17)'],
          status: 'scheduled',
        },
        // Resource 4–6 (size <=7)
        {
          resource: 4,
          from: '85 Arch St, Boston, MA',
          to: '40 Middle St, Portland, ME',
          size: 6.5,
          pickup: ['dyndatetime(y,m,d-1,8)', 'dyndatetime(y,m,d-1,10)'],
          drop: ['dyndatetime(y,m,d-1,12)', 'dyndatetime(y,m,d-1,14)'],
          status: 'completed',
        },
        {
          resource: 5,
          from: '300 E Main St, Richmond, VA',
          to: '100 S Tryon St, Charlotte, NC',
          size: 7,
          pickup: ['dyndatetime(y,m,d,5)', 'dyndatetime(y,m,d,7)'],
          drop: ['dyndatetime(y,m,d,10)', 'dyndatetime(y,m,d,12)'],
          status: 'completed',
        },
        {
          resource: 6,
          from: '900 W Belmont Ave, Chicago, IL',
          to: '300 Market St, St Louis, MO',
          size: 6,
          pickup: ['dyndatetime(y,m,d+2,9)', 'dyndatetime(y,m,d+2,11)'],
          drop: ['dyndatetime(y,m,d+2,14)', 'dyndatetime(y,m,d+2,16)'],
          status: 'scheduled',
        },
        {
          resource: 4,
          from: '250 King St, Greensboro, NC',
          to: '200 Hay St, Fayetteville, NC',
          size: 6.5,
          pickup: ['dyndatetime(y,m,d+5,8)', 'dyndatetime(y,m,d+5,10)'],
          drop: ['dyndatetime(y,m,d+5,13)', 'dyndatetime(y,m,d+5,15)'],
          status: 'scheduled',
        },
        // Resource 7–9 (size <=12)
        {
          resource: 7,
          from: '233 S Wacker Dr, Chicago, IL',
          to: '10 Public Square, Cleveland, OH',
          size: 11,
          pickup: ['dyndatetime(y,m,d,8)', 'dyndatetime(y,m,d,11)'],
          drop: ['dyndatetime(y,m,d,16)', 'dyndatetime(y,m,d,19)'],
          status: 'scheduled',
        },
        {
          resource: 8,
          from: '180 S High St, Columbus, OH',
          to: '75 E Main St, Lexington, KY',
          size: 12,
          pickup: ['dyndatetime(y,m,d+2,7)', 'dyndatetime(y,m,d+2,10)'],
          drop: ['dyndatetime(y,m,d+2,15)', 'dyndatetime(y,m,d+2,18)'],
          status: 'scheduled',
        },
        {
          resource: 9,
          from: '100 E Capitol St, Jackson, MS',
          to: '250 Riverfront Pkwy, Chattanooga, TN',
          size: 10,
          pickup: ['dyndatetime(y,m,d+5,7)', 'dyndatetime(y,m,d+5,10)'],
          drop: ['dyndatetime(y,m,d+5,16)', 'dyndatetime(y,m,d+5,19)'],
          status: 'scheduled',
        },
        {
          resource: 7,
          from: '50 Arch St, Boston, MA',
          to: '200 Middle St, Portland, ME',
          size: 9,
          pickup: ['dyndatetime(y,m,d+6,8)', 'dyndatetime(y,m,d+6,10)'],
          drop: ['dyndatetime(y,m,d+6,12)', 'dyndatetime(y,m,d+6,14)'],
          status: 'scheduled',
        },
        // Resource 10–12 (size <=20)
        {
          resource: 10,
          from: '50 N 1st Ave, Phoenix, AZ',
          to: '200 Broadway Ave, Albuquerque, NM',
          size: 20,
          pickup: ['dyndatetime(y,m,d,10)', 'dyndatetime(y,m,d,13)'],
          drop: ['dyndatetime(y,m,d,18)', 'dyndatetime(y,m,d,21)'],
          status: 'started',
        },
        {
          resource: 11,
          from: '120 Broadway, New York, NY',
          to: '55 Canal St, New Orleans, LA',
          size: 18,
          pickup: ['dyndatetime(y,m,d+3,6)', 'dyndatetime(y,m,d+3,9)'],
          drop: ['dyndatetime(y,m,d+3,10)', 'dyndatetime(y,m,d+3,14)'],
          status: 'scheduled',
        },
        {
          resource: 12,
          from: '600 Poydras St, New Orleans, LA',
          to: '200 Commerce St, Montgomery, AL',
          size: 20,
          pickup: ['dyndatetime(y,m,d+7,6)', 'dyndatetime(y,m,d+7,9)'],
          drop: ['dyndatetime(y,m,d+7,14)', 'dyndatetime(y,m,d+7,17)'],
          status: 'scheduled',
        },
        {
          resource: 10,
          from: '120 Main St, Boston, MA',
          to: '50 Canal St, New Orleans, LA',
          size: 19,
          pickup: ['dyndatetime(y,m,d+1,7)', 'dyndatetime(y,m,d+1,10)'],
          drop: ['dyndatetime(y,m,d+1,14)', 'dyndatetime(y,m,d+1,17)'],
          status: 'scheduled',
        },
        // Resource 13–15 (size <=24)
        {
          resource: 13,
          from: '100 Main St, Dallas, TX',
          to: '15 Broadway St, Denver, CO',
          size: 22,
          pickup: ['dyndatetime(y,m,d,7)', 'dyndatetime(y,m,d,10)'],
          drop: ['dyndatetime(y,m,d+1,4)', 'dyndatetime(y,m,d+1,8)'],
          status: 'scheduled',
        },
        {
          resource: 14,
          from: '300 Main St, Houston, TX',
          to: '120 W Capitol Ave, Little Rock, AR',
          size: 24,
          pickup: ['dyndatetime(y,m,d+2,6)', 'dyndatetime(y,m,d+2,9)'],
          drop: ['dyndatetime(y,m,d+2,14)', 'dyndatetime(y,m,d+2,18)'],
          status: 'scheduled',
        },
        {
          resource: 15,
          from: '900 S Flower St, Los Angeles, CA',
          to: '300 2nd Ave, Seattle, WA',
          size: 23,
          pickup: ['dyndatetime(y,m,d+5,5)', 'dyndatetime(y,m,d+5,8)'],
          drop: ['dyndatetime(y,m,d+5,12)', 'dyndatetime(y,m,d+5,16)'],
          status: 'scheduled',
        },
        {
          resource: 13,
          from: '350 S Spring St, Los Angeles, CA',
          to: '500 E Rim Rd, El Paso, TX',
          size: 24,
          pickup: ['dyndatetime(y,m,d+8,6)', 'dyndatetime(y,m,d+8,9)'],
          drop: ['dyndatetime(y,m,d+8,18)', 'dyndatetime(y,m,d+8,21)'],
          status: 'scheduled',
        },
        {
          resource: 14,
          from: '200 Market St, Philadelphia, PA',
          to: '400 Washington Ave, Minneapolis, MN',
          size: 23,
          pickup: ['dyndatetime(y,m,d+3,7)', 'dyndatetime(y,m,d+3,10)'],
          drop: ['dyndatetime(y,m,d+3,14)', 'dyndatetime(y,m,d+3,17)'],
          status: 'scheduled',
        },
        {
          resource: 15,
          from: '500 S Wacker Dr, Chicago, IL',
          to: '100 State St, Portland, ME',
          size: 24,
          pickup: ['dyndatetime(y,m,d+6,8)', 'dyndatetime(y,m,d+6,11)'],
          drop: ['dyndatetime(y,m,d+6,16)', 'dyndatetime(y,m,d+6,19)'],
          status: 'scheduled',
        },
      ];

      var myResources = [
        {
          id: 'cap1',
          name: '3.5 tons capacity',
          eventCreation: false,
          children: [
            {
              id: 1,
              color: '#7a8df5',
              name: 'Isuzu N-Series N35',
              capacity: 3.5,
              status: 'operational',
              plate: 'AB14 KTP',
            },
            {
              id: '1-actual',
              color: '#7a8df5',
              name: '',
              capacity: 3.5,
              status: 'operational',
              plate: 'AB14 KTP',
              eventCreation: false,
              cssClass: 'mds-actual-resource',
            },
            {
              id: 2,
              color: '#5cb87a',
              name: 'Mercedes-Benz Sprinter 3500',
              capacity: 3.5,
              status: 'operational',
              plate: 'FR19 XDL',
            },
            {
              id: '2-actual',
              color: '#5cb87a',
              name: '',
              capacity: 3.5,
              status: 'operational',
              plate: 'FR19 XDL',
              eventCreation: false,
              cssClass: 'mds-actual-resource',
            },
            {
              id: 3,
              color: '#c46c5a',
              name: 'Ford Transit 350',
              capacity: 3.5,
              status: 'maintenance',
              plate: 'QN62 RPV',
            },
            {
              id: '3-actual',
              color: '#c46c5a',
              name: '',
              capacity: 3.5,
              status: 'maintenance',
              plate: 'QN62 RPV',
              eventCreation: false,
              cssClass: 'mds-actual-resource',
            },
          ],
        },
        {
          id: 'cap2',
          name: '7 tons capacity',
          eventCreation: false,
          children: [
            {
              id: 4,
              color: '#c54242',
              name: 'Ford F-150',
              capacity: 7,
              status: 'operational',
              plate: 'GR12 PEV',
            },
            {
              id: '4-actual',
              color: '#c54242',
              name: '',
              capacity: 7,
              status: 'operational',
              plate: 'GR12 PEV',
              eventCreation: false,
              cssClass: 'mds-actual-resource',
            },
            {
              id: 5,
              color: '#7c4fcf',
              name: 'Isuzu F-Series FTR',
              capacity: 7,
              status: 'operational',
              plate: 'MB27 FTK',
            },
            {
              id: '5-actual',
              color: '#7c4fcf',
              name: '',
              capacity: 7,
              status: 'operational',
              plate: 'MB27 FTK',
              eventCreation: false,
              cssClass: 'mds-actual-resource',
            },
            {
              id: 6,
              color: '#a5d852',
              name: 'Hino 300 Series 716',
              capacity: 7,
              status: 'maintenance',
              plate: 'KT73 ZLD',
            },
            {
              id: '6-actual',
              color: '#a5d852',
              name: '',
              capacity: 7,
              status: 'maintenance',
              plate: 'KT73 ZLD',
              eventCreation: false,
              cssClass: 'mds-actual-resource',
            },
          ],
        },
        {
          id: 'cap3',
          name: '12 tons capacity',
          eventCreation: false,
          children: [
            {
              id: 7,
              color: '#439ad1',
              name: 'Hino 500 Series FD',
              capacity: 12,
              status: 'operational',
              plate: 'EP17 GMF',
            },
            {
              id: '7-actual',
              color: '#439ad1',
              name: '',
              capacity: 12,
              status: 'maintenance',
              plate: 'EP17 GMF',
              eventCreation: false,
              cssClass: 'mds-actual-resource',
            },
            {
              id: 8,
              color: '#af5b1a',
              name: 'Isuzu F-Series FVR',
              capacity: 12,
              status: 'operational',
              plate: 'DS41 CXP',
            },
            {
              id: '8-actual',
              color: '#af5b1a',
              name: '',
              capacity: 12,
              status: 'maintenance',
              plate: 'DS41 CXP',
              eventCreation: false,
              cssClass: 'mds-actual-resource',
            },
            {
              id: 9,
              color: '#6e6e6e',
              name: 'Mercedes-Benz Atego 1218',
              capacity: 12,
              status: 'maintenance',
              plate: 'NH65 QWD',
            },
            {
              id: '9-actual',
              color: '#6e6e6e',
              name: '',
              capacity: 12,
              status: 'maintenance',
              plate: 'NH65 QWD',
              eventCreation: false,
              cssClass: 'mds-actual-resource',
            },
          ],
        },
        {
          id: 'cap4',
          name: '20 tons capacity',
          eventCreation: false,
          children: [
            {
              id: 10,
              color: '#62a83d',
              name: 'Mercedes Actros 2545',
              capacity: 20,
              status: 'maintenance',
              plate: 'KT19 LNV',
            },
            {
              id: '10-actual',
              color: '#62a83d',
              name: '',
              capacity: 20,
              status: 'maintenance',
              plate: 'KT19 LNV',
              eventCreation: false,
              cssClass: 'mds-actual-resource',
            },
            {
              id: 11,
              color: '#2d9b92',
              name: 'DAF XF 530',
              capacity: 20,
              status: 'operational',
              plate: 'WP64 GBX',
            },
            {
              id: '11-actual',
              color: '#2d9b92',
              name: '',
              capacity: 20,
              status: 'operational',
              plate: 'WP64 GBX',
              eventCreation: false,
              cssClass: 'mds-actual-resource',
            },
            {
              id: 12,
              color: '#b82f5e',
              name: 'Renault T High 520',
              capacity: 20,
              status: 'operational',
              plate: 'CD70 UJE',
            },
            {
              id: '12-actual',
              color: '#b82f5e',
              name: '',
              capacity: 20,
              status: 'operational',
              plate: 'CD70 UJE',
              eventCreation: false,
              cssClass: 'mds-actual-resource',
            },
          ],
        },
        {
          id: 'cap5',
          name: '24 tons capacity',
          eventCreation: false,
          children: [
            {
              id: 13,
              color: '#3a6cc5',
              name: 'Volvo FH16',
              capacity: 24,
              status: 'operational',
              plate: 'BD67 HTA',
            },
            {
              id: '13-actual',
              color: '#3a6cc5',
              name: '',
              capacity: 24,
              status: 'operational',
              plate: 'BD67 HTA',
              eventCreation: false,
              cssClass: 'mds-actual-resource',
            },
            {
              id: 14,
              color: '#d94c1a',
              name: 'Freightliner Cascadia',
              capacity: 24,
              status: 'maintenance',
              plate: 'VA18 RQW',
            },
            {
              id: '14-actual',
              color: '#d94c1a',
              name: '',
              capacity: 24,
              status: 'maintenance',
              plate: 'VA18 RQW',
              eventCreation: false,
              cssClass: 'mds-actual-resource',
            },
            {
              id: 15,
              color: '#8e3d2f',
              name: 'Kenworth T680',
              capacity: 24,
              status: 'operational',
              plate: 'HY22 BPL',
            },
            {
              id: '15-actual',
              color: '#8e3d2f',
              name: '',
              capacity: 24,
              status: 'operational',
              plate: 'HY22 BPL',
              eventCreation: false,
              cssClass: 'mds-actual-resource',
            },
          ],
        },
      ];

      var externalEvents = [
        {
          id: 1,
          from: '1500 Market St, Philadelphia, PA',
          to: '600 Liberty St, Pittsburgh, PA',
          size: 11,
          pickup: ['dyndatetime(y,m,d,7)', 'dyndatetime(y,m,d,9)'],
          drop: ['dyndatetime(y,m,d,10)', 'dyndatetime(y,m,d,14)'],
        },
        {
          id: 2,
          from: '200 Peachtree St NW, Atlanta, GA',
          to: '50 Music Sq E, Nashville, TN',
          size: 18,
          pickup: ['dyndatetime(y,m,d+1,8)', 'dyndatetime(y,m,d+1,10)'],
          drop: ['dyndatetime(y,m,d+1,12)', 'dyndatetime(y,m,d+1,16)'],
        },
        {
          id: 3,
          from: '400 S 4th St, Louisville, KY',
          to: '1400 Main St, Cincinnati, OH',
          size: 7,
          pickup: ['dyndatetime(y,m,d+2,6)', 'dyndatetime(y,m,d+2,8)'],
          drop: ['dyndatetime(y,m,d+2,9)', 'dyndatetime(y,m,d+2,12)'],
        },
        {
          id: 4,
          from: '999 3rd Ave, Seattle, WA',
          to: '500 W 8th St, Vancouver, WA',
          size: 3,
          pickup: ['dyndatetime(y,m,d+3,9)', 'dyndatetime(y,m,d+3,11)'],
          drop: ['dyndatetime(y,m,d+3,12)', 'dyndatetime(y,m,d+3,17)'],
        },
        {
          id: 5,
          from: '100 State St, Madison, WI',
          to: '300 S Wacker Dr, Chicago, IL',
          size: 22,
          pickup: ['dyndatetime(y,m,d,5)', 'dyndatetime(y,m,d,7)'],
          drop: ['dyndatetime(y,m,d,8)', 'dyndatetime(y,m,d,13)'],
        },
        {
          id: 6,
          from: '1100 Congress Ave, Austin, TX',
          to: '500 E Main St, Dallas, TX',
          size: 20,
          pickup: ['dyndatetime(y,m,d+1,7)', 'dyndatetime(y,m,d+1,9)'],
          drop: ['dyndatetime(y,m,d+1,10)', 'dyndatetime(y,m,d+1,15)'],
        },
        {
          id: 7,
          from: '1 E 1st St, Tulsa, OK',
          to: '250 W Capitol Ave, Little Rock, AR',
          size: 11.5,
          pickup: ['dyndatetime(y,m,d+2,6,30)', 'dyndatetime(y,m,d+2,8,30)'],
          drop: ['dyndatetime(y,m,d+2,10,30)', 'dyndatetime(y,m,d+2,15,30)'],
        },
        {
          id: 8,
          from: '50 S Main St, Salt Lake City, UT',
          to: '300 N Broadway, Denver, CO',
          size: 5,
          pickup: ['dyndatetime(y,m,d+3,10)', 'dyndatetime(y,m,d+3,12)'],
          drop: ['dyndatetime(y,m,d+3,13)', 'dyndatetime(y,m,d+3,18)'],
        },
        {
          id: 9,
          from: '2000 Q St, Sacramento, CA',
          to: '500 Poydras St, New Orleans, LA',
          size: 22.5,
          pickup: ['dyndatetime(y,m,d,9)', 'dyndatetime(y,m,d,11)'],
          drop: ['dyndatetime(y,m,d,12)', 'dyndatetime(y,m,d,17)'],
        },
        {
          id: 10,
          from: '500 Boylston St, Boston, MA',
          to: '200 State St, Portland, ME',
          size: 3.5,
          pickup: ['dyndatetime(y,m,d+1,8,30)', 'dyndatetime(y,m,d+1,10,30)'],
          drop: ['dyndatetime(y,m,d+1,12,30)', 'dyndatetime(y,m,d+1,18,30)'],
        },
      ];

      var $calendarElm = $('#demo-dispatch-management');
      var $popupElm = $('#demo-dispatch-management-filtering-popup');
      var $resourceList = $('#demo-dispatch-management-resource-list');

      var filters = {};
      var filteredResources = myResources;
      var searchTimeout;
      var searchQuery;
      var zoomLevel = 5;
      var now = new Date();
      var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      function getActualDates(start, end) {
        var duration = end.getTime() - start.getTime(); // Get duration in milliseconds

        // Define possible offset intervals in minutes
        var possibleOffsets = [15, 30, 60, 90, 120]; // 15min, 30min, 1h, 1.5h, 2h

        // Randomly select an offset
        var randomOffsetMinutes = possibleOffsets[Math.floor(Math.random() * possibleOffsets.length)];
        var offsetMs = randomOffsetMinutes * 60 * 1000;

        // Randomly choose positive or negative offset
        var offset = Math.random() > 0.5 ? offsetMs : -offsetMs;

        // Create new start and end time
        var actualStart = new Date(start.getTime() + offset);
        var actualEnd = new Date(actualStart.getTime() + duration);

        return [actualStart, actualEnd];
      }

      function refresh() {
        var events = calendar.getEvents().length > 0 ? calendar.getEvents() : myEvents;
        var yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

        now = new Date();
        today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        for (var i = 0; i < events.length; ++i) {
          var event = events[i];
          // Convert dates to date objects
          event.start = event.start ? new Date(event.start) : event.start;
          event.end = event.end ? new Date(event.end) : event.end;
          // Mark past events
          event.editable = event.start && new Date() < event.start;
          // Add actual events for ongoing jobs
          if (event.start < now && event.end > now && event.status !== 'actual' && !event.actual) {
            var actualDates = getActualDates(event.start, event.end);
            var newEvent = {
              resource: event.resource + '-actual',
              size: event.size,
              start: actualDates[0],
              end: actualDates[1],
              status: 'actual',
              cssClass: 'mds-actual-event',
            };

            event.actual = true;
            events.push(newEvent);
          }
        }
        calendar.setOptions({
          min: new Date(now.setTime(now.getTime() + 2 * 60 * 60 * 1000)), // This is not working
          invalid: [
            {
              recurring: {
                repeat: 'daily',
                until: yesterday,
              },
              start: today,
              end: new Date(now.setTime(now.getTime() + 2 * 60 * 60 * 1000)),
            },
          ],
          data: events,
        });
      }

      function setEventData() {
        for (var i = 0; i < myEvents.length; i++) {
          var event = myEvents[i];
          event.start = event.start ? event.start : event.pickup[0];
          event.end = event.end ? event.end : event.drop[0];
          event.title = event.from + ' → ' + event.to;
        }
      }

      function setupDispatchJobs() {
        var container = $('#dispatch-management-events');

        for (var i = 0; i < externalEvents.length; i++) {
          var job = externalEvents[i];

          var $jobEl = $('<div></div>')
            .attr('id', 'mds-dispatch-management-event-' + (i + 1))
            .addClass('mds-dispatch-management-jobs');

          var $fromEl = $('<div></div>').html('<span style="font-weight:bold">From:</span> ' + job.from);
          var $toEl = $('<div></div>').html('<span style="font-weight:bold">To:</span> ' + job.to);
          var $sizeEl = $('<div></div>').html('<span style="font-weight:bold">Size:</span> ' + job.size + ' tons');

          // Append inner divs to job element
          $jobEl.append($fromEl, $toEl, $sizeEl);
          container.append($jobEl);

          // Initialize mobiscroll draggable
          $jobEl.mobiscroll().draggable({
            dragData: job,
          });
        }
      }

      function filterResources() {
        filteredResources = myResources
          .map(function (category) {
            return {
              id: category.id,
              name: category.name,
              eventCreation: category.eventCreation,
              children: category.children.filter(function (resource) {
                return (
                  filters[resource.status] &&
                  (!searchQuery ||
                    resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    resource.plate.toLowerCase().includes(searchQuery.toLowerCase()))
                );
              }),
            };
          })
          .filter(function (res) {
            return res.children.length > 0 && filters[res.id];
          });

        calendar.setOptions({ resources: filteredResources });
      }

      function handleZoom(zoom) {
        zoomLevel = zoom;

        $('#demo-dispatch-management-zoom-level-slider').val(zoomLevel);
        $('#demo-dispatch-management-zoom-level-in').prop('disabled', zoomLevel === 8);
        $('#demo-dispatch-management-zoom-level-out').prop('disabled', zoomLevel === 1);

        calendar.setOptions({
          zoomLevel: zoomLevel,
        });
      }

      function invalidateResources(event) {
        var now = new Date();
        var twoHoursFromNow = new Date(now.getTime() + 2 * 60 * 60 * 1000);
        var sevenDaysFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        var invalidIds = [];

        // Calculate event window
        var eventStart = new Date(event.pickup[0]);
        var eventEnd = new Date(event.drop[1]);

        for (var i = 0; i < myResources.length; i++) {
          var res = myResources[i];
          for (var j = 0; j < res.children.length; j++) {
            var truck = res.children[j];

            // Capacity check
            if (truck.capacity < event.size) {
              truck.eventCreation = false;
              invalidIds.push(truck.id);
            }

            // Overlap check
            var truckEvents = calendar.getEvents().filter(function (ev) {
              return ev.resource === truck.id;
            });

            var overlappingEvent = truckEvents.find(function (ev) {
              var evStart = new Date(ev.start);
              var evEnd = new Date(ev.end);
              return evEnd > eventStart && evStart < eventEnd;
            });

            if (overlappingEvent) {
              truck.eventCreation = false;
              invalidIds.push(truck.id);
            }
          }
        }

        console.log('Start date: ' + eventStart);
        console.log('End date: ' + eventEnd);

        calendar.setOptions({
          invalid: [
            {
              start: today,
              end: eventStart < twoHoursFromNow ? twoHoursFromNow : eventStart,
            },
            {
              start: today,
              end: sevenDaysFromNow,
              resource: invalidIds,
              cssClass: 'mds-dispatch-management-disabled-row mbsc-flex',
            },
            {
              start: eventEnd,
              end: sevenDaysFromNow,
            },
          ],
        });
      }

      function findFirstAvailableSlot(resource, date, duration) {
        now = new Date();
        today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        var pointer = new Date(date);

        // Ensure pointer is at least 2 hours from now
        var minStart = new Date(now.getTime() + 2 * 60 * 60 * 1000);
        if (pointer < minStart) {
          pointer = minStart;
        }

        // Filter events for this resource on this day
        var dayEvents = calendar.getEvents(today).filter(function (ev) {
          return ev.resource === resource;
        });

        // If no events, whole day from pointer is free
        if (dayEvents.length === 0) {
          return { start: new Date(pointer), end: new Date(pointer.getTime() + duration) };
        }

        // Check gaps including before the first event
        for (var i = 0; i <= dayEvents.length; i++) {
          var gapStart = pointer;
          var gapEnd = i < dayEvents.length ? dayEvents[i].start : null;

          if (gapEnd) {
            // If the gap from pointer to event start is enough
            if (gapEnd - gapStart >= duration) {
              return { start: new Date(gapStart), end: new Date(gapStart.getTime() + duration) };
            }

            // Move pointer to the later of current pointer or event end
            pointer = dayEvents[i].end > pointer ? dayEvents[i].end : pointer;

            // Also enforce 2-hour minimum from now
            if (pointer < minStart) {
              pointer = minStart;
            }
          } else {
            // After the last event
            return { start: new Date(pointer), end: new Date(pointer.getTime() + duration) };
          }
        }
      }

      function moveToFirstAvailableSlot(draggedEvent, isEdit) {
        var duration = draggedEvent.end - draggedEvent.start;
        var slot = findFirstAvailableSlot(draggedEvent.resource, draggedEvent.start, duration);

        draggedEvent.start = slot.start;
        draggedEvent.end = slot.end;

        if (isEdit) {
          calendar.updateEvent(draggedEvent);
        } else {
          calendar.addEvent(draggedEvent);
        }
      }

      var popup = $popupElm
        .mobiscroll()
        .popup({
          buttons: [
            'cancel',
            {
              text: 'Apply',
              keyCode: 'enter',
              handler: function () {
                $('.mds-dispatch-management-checkbox').each(function () {
                  filters[this.value] = this.checked;
                });
                filterResources();
                popup.close();
                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: 'Filters applied',
                });
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          contentPadding: false,
          display: 'anchored',
          focusOnClose: false,
          focusOnOpen: false,
          showOverlay: false,
          width: 400,
        })
        .mobiscroll('getInst');

      $calendarElm.on('input', '#demo-dispatch-management-search-input', function (event) {
        clearTimeout(searchTimeout);
        searchQuery = event.target.value.toLowerCase();
        searchTimeout = setTimeout(filterResources, 300);
      });

      $calendarElm.on('click', '#demo-dispatch-management-filter-button', function () {
        // Create resource checkbox list
        var checkboxes = '';
        myResources.forEach(function (res) {
          checkboxes +=
            '<label>' +
            '<input type="checkbox" mbsc-checkbox class="mds-dispatch-management-checkbox" value="' +
            res.id +
            '" checked /> ' +
            res.name +
            '</label>';
        });

        $resourceList.html(checkboxes);
        mobiscroll.enhance($resourceList[0]);

        // Set checkbox checked states
        $('.mds-dispatch-management-checkbox').each(function () {
          var checkbox = $(this).mobiscroll('getInst');
          checkbox.checked = filters[this.value];
        });

        popup.setOptions({ anchor: this });
        popup.open();
      });

      $calendarElm.on('click', '#demo-dispatch-management-reset-filters', function () {
        searchQuery = '';

        $('#demo-dispatch-management-search-input').val('');
        $('.mds-dispatch-management-checkbox').each(function () {
          var checkbox = $(this).mobiscroll('getInst');
          checkbox.checked = true;
          filters[this.value] = true;
        });

        filterResources();

        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Filters cleared',
        });
      });

      // Set initial filters
      filters['operational'] = true;
      filters['maintenance'] = true;

      myResources.forEach(function (category) {
        filters[category.id] = true;
        category.children.forEach(function (resource) {
          filters[resource.id] = true;
        });
      });

      setEventData();

      var calendar = $calendarElm
        .mobiscroll()
        .eventcalendar({
          // context,
          clickToCreate: false,
          dragToCreate: false,
          dragToResize: false,
          dragToMove: true,
          externalDrop: true,
          eventOverlap: false,
          cssClass: 'mds-dispatch-management-calendar',
          zoomLevel: zoomLevel,
          view: {
            timeline: {
              type: 'day',
              size: 7,
              timeCellStep: 180,
              timeLabelStep: 180,
              eventHeight: 'variable',
              zoomLevels: {
                1: { type: 'day', size: 7, columnWidth: 'xxsmall' },
                2: { type: 'day', size: 7, columnWidth: 'xsmall' },
                3: { type: 'day', size: 7, columnWidth: 'small' },
                4: { type: 'day', size: 7, columnWidth: 'medium' },
                5: { type: 'day', size: 7, columnWidth: 'large' },
                6: { type: 'day', size: 7, columnWidth: 'xlarge' },
                7: { type: 'day', size: 7, columnWidth: 'xxlarge' },
                8: { type: 'day', size: 7, columnWidth: 'xxxlarge' },
              },
            },
          },
          data: myEvents,
          resources: filteredResources,
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">' +
              '<button id="demo-dispatch-management-zoom-level-out" mbsc-button data-icon="minus" data-variant="flat"></button>' +
              '<input id="demo-dispatch-management-zoom-level-slider" type="range" min="1" max="8" value="5" />' +
              '<button id="demo-dispatch-management-zoom-level-in" mbsc-button data-icon="plus" data-variant="flat"></button>' +
              '</div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>' +
              '</div>'
            );
          },
          renderResource: function (resource) {
            return (
              '<div>' +
              '<div class="mds-dispatch-management-name">' +
              resource.name +
              (resource.name && resource.plate ? '<span class="mds-dispatch-management-plate">' + resource.plate + '</span>' : '') +
              '</div>' +
              (!resource.isParent && resource.name
                ? '<div class="mds-dispatch-management-status">' +
                  '<span class="mds-dispatch-management-status-dot" style="background-color:' +
                  (resource.status === 'operational' ? 'green' : 'orange') +
                  ';"></span>' +
                  resource.status +
                  '</div>'
                : '') +
              '</div>'
            );
          },
          renderResourceEmpty: function () {
            return (
              '<div class="mds-dispatch-management-empty mbsc-flex mbsc-align-items-center">' +
              '<div class="mbsc-flex-1-1">' +
              '<img src="https://img.mobiscroll.com/demos/filter-no-result.png" alt="Empty list" style="width:100px;" />' +
              '<p class="mbsc-font mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">No resources match your search.</p>' +
              '<p class="mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">Adjust your filters or try a different keyword.</p>' +
              '<button mbsc-button id="demo-dispatch-management-reset-filters" data-variant="outline">Reset Filters</button>' +
              '</div>' +
              '</div>'
            );
          },
          renderResourceHeader: function () {
            return (
              '<div class="mbsc-flex mbsc-align-items-center mbsc-font mds-dispatch-management-search">' +
              '<label class="mbsc-flex-1-1">' +
              '<input type="text" mbsc-input id="demo-dispatch-management-search-input" autocomplete="off" data-input-style="outline" data-start-icon="material-search" placeholder="Search..." />' +
              '</label>' +
              '<button mbsc-button id="demo-dispatch-management-filter-button" data-start-icon="material-filter-list" data-variant="outline" class="mbsc-flex-none">Filter</button>' +
              '</div>'
            );
          },
          renderScheduleEventContent: function (data) {
            var job = data.original;
            return job.status === 'actual' ? '' : '<div>' + job.from + ' → ' + job.to + '</div>';
          },
          onEventCreated: function (args) {
            if (args.action === 'externalDrop') {
              $('#mds-dispatch-management-event-' + args.event.id).remove();
            }
            mobiscroll.toast({
              // context,
              message: args.event.from + ' → ' + args.event.to + ' added',
            });
          },
          onEventCreateFailed: function (args) {
            var draggedEvent = args.event;
            moveToFirstAvailableSlot(draggedEvent, false);
            if (args.action === 'externalDrop') {
              $('#mds-dispatch-management-event-' + args.event.id).remove();
            }
            mobiscroll.toast({
              // context,
              message: draggedEvent.from + ' → ' + draggedEvent.to + ' added to first available slot',
            });
          },
          onEventUpdateFailed: function (args) {
            var draggedEvent = args.event;
            moveToFirstAvailableSlot(draggedEvent, true);
            mobiscroll.toast({
              // context,
              message: draggedEvent.from + ' → ' + draggedEvent.to + ' moved to first available slot',
            });
          },
          onEventDragStart: function (args) {
            invalidateResources(args.event);
          },
          onEventDragEnd: function () {
            calendar.setOptions({
              resources: myResources,
              invalid: [],
            });
          },
        })
        .mobiscroll('getInst');

      $('#demo-dispatch-management-zoom-level-slider').on('input', function (ev) {
        handleZoom(+ev.target.value);
      });

      $('#demo-dispatch-management-zoom-level-in').on('click', function () {
        handleZoom(zoomLevel + 1);
      });

      $('#demo-dispatch-management-zoom-level-out').on('click', function () {
        handleZoom(zoomLevel - 1);
      });

      setupDispatchJobs();
      refresh();
      setInterval(refresh, 60000);
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding mds-full-height">
  <div class="mbsc-row mds-full-height">
    <div class="mbsc-col-sm-3 mds-full-height mds-dispatch-management-wrapper">
      <div class="mbsc-form-group-title">Transport jobs</div>
      <div id="dispatch-management-events" class="mbsc-flex-col mbsc-flex-1-0 mbsc-padding"></div>
    </div>
    <div class="mbsc-col-sm-9 mds-dispatch-management-calendar mds-full-height">
      <div id="demo-dispatch-management"></div>
    </div>
  </div>
</div>
<div style="display:none">
  <div id="demo-dispatch-management-filtering-popup">
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Capacity</div>
      <div id="demo-dispatch-management-resource-list"></div>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Operational Status</div>
      <label>
        <input
          type="checkbox"
          mbsc-checkbox
          data-label="In maintenance"
          class="mds-dispatch-management-checkbox"
          value="maintenance"
          checked
        />
      </label>
      <label>
        <input
          type="checkbox"
          mbsc-checkbox
          data-label="Operational"
          class="mds-dispatch-management-checkbox"
          value="operational"
          checked
        />
      </label>
    </div>
  </div>
</div>

`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-full-height {
  height: 100%;
}

.mds-dispatch-management-calendar {
  border-left: 1px solid #ccc;
}

.mds-dispatch-management-wrapper {
  overflow: auto;
}

.mds-dispatch-management-jobs {
  margin: 5px 0;
  padding: 10px 12px;
  align-content: center;
  touch-action: none;
  color: #fff;
  background-color: #488dc5;
  border-radius: 8px;
  flex: 0 0 4.2em;
  font-family: -apple-system, Segoe UI, Roboto, sans-serif;
  font-size: 12px; 
}
  
.mds-dispatch-management-calendar .mbsc-timeline-resource-header {
  height: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.mds-dispatch-management-calendar .mbsc-timeline-resource-col {
  width: 350px;
}

.mds-dispatch-management-calendar .mbsc-timeline-resource-title {
  height: 100%;
  box-sizing: border-box;
}

.mds-dispatch-management-calendar .mbsc-timeline-row:not(.mds-actual-resource) {
  height: 58px;
}
  
.mds-dispatch-management-calendar .mds-actual-resource {
  height: 18px;
}

.mds-dispatch-management-calendar .mbsc-timeline-parent {
  height: 34px;
}

.mds-dispatch-management-calendar .mbsc-timeline-row-gutter {
  height: 6px;
}

.mds-dispatch-management-calendar .mbsc-readonly-event {
  opacity: 0.6;
}

.mds-dispatch-management-search {
  height: 100%;
}

.mds-dispatch-management-search .mbsc-textfield-wrapper {
  margin: 0;
}

.mds-dispatch-management-search .mbsc-textfield-wrapper.mbsc-ltr {
  margin-right: 8px;
}

.mds-dispatch-management-search .mbsc-textfield-wrapper.mbsc-rtl {
  margin-left: 8px;
}

.mds-dispatch-management-search .mbsc-textfield-wrapper.mbsc-material {
  margin-top: 2px;
}

.mds-dispatch-management-search .mbsc-textfield {
  height: 36px;
  padding: 0 8px 0 38px;
}

.mds-dispatch-management-search .mbsc-textfield-icon {
  top: 50%;
  left: 8px;
  font-size: 20px;
  height: 24px;
  line-height: 24px;
  margin-top: -12px;
}

.mds-dispatch-management-search .mbsc-button {
  margin: 0;
  height: 36px;
  font-size: 14px;
}

.mds-dispatch-management-name {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

.mds-dispatch-management-plate {
    border: 1px solid #488dc5;
    border-radius: 4px;
    margin: 0 5px;
    padding: 0 5px;
}

.mds-dispatch-management-status-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

.mds-dispatch-management-status {
  font-size: 13px;
  font-weight: normal;
}

.mds-dispatch-management-empty {
  height: 100%;
  text-align: center;
}

.mds-actual-event .mbsc-schedule-event-range {
  display: none;
}

.mds-actual-event {
  height: 20px;
}

.mds-dispatch-management-disabled-row.mbsc-schedule-invalid {
    background: repeating-linear-gradient(-45deg, #f3f3f3, #f3f3f3 11px, #e5e5e5 11px, #e5e5e5 22px);
}

// move this to website css with updated unique name
.demo-dispatch-management {
  height: 100%;
}
`,
};
