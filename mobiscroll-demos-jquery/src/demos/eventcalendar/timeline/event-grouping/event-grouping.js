import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      theme: 'ios',
      themeVariant: 'light',
    });

    $(function () {
      var myEvents = [
        {
          id: 1,
          title: 'HVAC System Overhaul - Building A',
          start: '2026-01-15',
          end: '2026-03-10',
          resource: 1,
          type: 'Installation',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 2,
          title: 'Complete Electrical System Inspection',
          start: '2026-02-15',
          end: '2026-03-25',
          resource: 1,
          type: 'Inspection',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 3,
          title: 'ICU Plumbing Infrastructure Renovation',
          start: '2026-01-20',
          end: '2026-03-15',
          resource: 2,
          type: 'Upgrade',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 4,
          title: 'Fire Safety System Upgrade & Testing',
          start: '2026-04-05',
          end: '2026-06-20',
          resource: 4,
          type: 'Upgrade',
          clientGroup: 'Enterprise Solutions Group',
        },
        //<hide-comment>
        {
          id: 5,
          title: 'Emergency Generator Complete Overhaul',
          start: '2026-05-01',
          end: '2026-06-30',
          resource: 1,
          type: 'Maintenance',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 6,
          title: 'Boiler Room Equipment Replacement',
          start: '2026-04-15',
          end: '2026-06-10',
          resource: 1,
          type: 'Repair',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 7,
          title: 'Server Room HVAC Installation Project',
          start: '2026-01-10',
          end: '2026-03-20',
          resource: 3,
          type: 'Installation',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 8,
          title: 'Data Center Cable Infrastructure Upgrade',
          start: '2026-02-10',
          end: '2026-03-30',
          resource: 3,
          type: 'Upgrade',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 9,
          title: 'Power Distribution System Modernization',
          start: '2026-04-10',
          end: '2026-06-25',
          resource: 2,
          type: 'Upgrade',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 10,
          title: 'Backup Power System Implementation',
          start: '2026-05-10',
          end: '2026-06-30',
          resource: 3,
          type: 'Installation',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 11,
          title: 'Network Equipment Room Cooling Upgrade',
          start: '2026-01-25',
          end: '2026-03-15',
          resource: 4,
          type: 'Upgrade',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 12,
          title: 'Security System Integration',
          start: '2026-05-05',
          end: '2026-06-20',
          resource: 4,
          type: 'Installation',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 13,
          title: 'Storefront LED Lighting Conversion',
          start: '2026-01-08',
          end: '2026-03-10',
          resource: 5,
          type: 'Upgrade',
          clientGroup: 'Retail Partners',
        },
        {
          id: 14,
          title: 'Parking Lot Lighting System Replacement',
          start: '2026-02-05',
          end: '2026-03-30',
          resource: 7,
          type: 'Repair',
          clientGroup: 'Retail Partners',
        },
        {
          id: 15,
          title: 'Store-wide HVAC Filter & Duct Cleaning',
          start: '2026-04-10',
          end: '2026-06-20',
          resource: 5,
          type: 'Maintenance',
          clientGroup: 'Retail Partners',
        },
        {
          id: 16,
          title: 'Automatic Door System Replacement',
          start: '2026-05-01',
          end: '2026-06-30',
          resource: 7,
          type: 'Repair',
          clientGroup: 'Retail Partners',
        },
        {
          id: 17,
          title: 'Point of Sale Electrical Infrastructure',
          start: '2026-01-15',
          end: '2026-03-05',
          resource: 5,
          type: 'Installation',
          clientGroup: 'Retail Partners',
        },
        {
          id: 18,
          title: 'Emergency Lighting System Certification',
          start: '2026-04-15',
          end: '2026-06-10',
          resource: 7,
          type: 'Inspection',
          clientGroup: 'Retail Partners',
        },
        {
          id: 19,
          title: 'City Hall HVAC Modernization',
          start: '2026-01-10',
          end: '2026-03-20',
          resource: 2,
          type: 'Upgrade',
          clientGroup: 'City Municipal Services',
        },
        {
          id: 20,
          title: 'Public Library Climate Control',
          start: '2026-02-01',
          end: '2026-03-31',
          resource: 6,
          type: 'Maintenance',
          clientGroup: 'City Municipal Services',
        },
        {
          id: 21,
          title: 'Community Center Lighting Retrofit',
          start: '2026-04-10',
          end: '2026-06-25',
          resource: 2,
          type: 'Upgrade',
          clientGroup: 'City Municipal Services',
        },
        {
          id: 22,
          title: 'Warehouse High-Bay Lighting Installation',
          start: '2026-01-05',
          end: '2026-03-15',
          resource: 8,
          type: 'Installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 23,
          title: 'Industrial Compressor System Overhaul',
          start: '2026-02-01',
          end: '2026-03-31',
          resource: 3,
          type: 'Maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 24,
          title: 'Loading Dock Door Automation Project',
          start: '2026-04-05',
          end: '2026-06-20',
          resource: 8,
          type: 'Installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 25,
          title: 'Factory Ventilation System Upgrade',
          start: '2026-05-01',
          end: '2026-06-30',
          resource: 2,
          type: 'Upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 26,
          title: 'Main Electrical Panel Replacement Project',
          start: '2026-01-15',
          end: '2026-03-20',
          resource: 4,
          type: 'Repair',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 27,
          title: 'Production Floor Lighting Modernization',
          start: '2026-02-10',
          end: '2026-03-31',
          resource: 7,
          type: 'Upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 28,
          title: 'Overhead Crane Electrical Certification',
          start: '2026-04-15',
          end: '2026-06-15',
          resource: 4,
          type: 'Inspection',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 29,
          title: 'Production Line Power Infrastructure',
          start: '2026-05-10',
          end: '2026-06-30',
          resource: 3,
          type: 'Installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 30,
          title: 'Chiller Plant Annual Overhaul',
          start: '2026-01-20',
          end: '2026-03-25',
          resource: 2,
          type: 'Maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 31,
          title: 'Classroom Building HVAC Renovation',
          start: '2026-01-10',
          end: '2026-03-20',
          resource: 3,
          type: 'Upgrade',
          clientGroup: 'Education District',
        },
        {
          id: 32,
          title: 'Gymnasium Lighting System Replacement',
          start: '2026-04-10',
          end: '2026-06-15',
          resource: 3,
          type: 'Repair',
          clientGroup: 'Education District',
        },
        {
          id: 33,
          title: 'Auditorium Climate Control Installation',
          start: '2026-01-20',
          end: '2026-03-31',
          resource: 6,
          type: 'Installation',
          clientGroup: 'Education District',
        },
        {
          id: 34,
          title: 'Science Lab Electrical Infrastructure',
          start: '2026-05-01',
          end: '2026-06-30',
          resource: 3,
          type: 'Installation',
          clientGroup: 'Education District',
        },
        {
          id: 35,
          title: 'Campus Fire Alarm System Certification',
          start: '2026-02-01',
          end: '2026-03-20',
          resource: 6,
          type: 'Inspection',
          clientGroup: 'Education District',
        },
        {
          id: 36,
          title: 'Hotel Lobby Climate System Replacement',
          start: '2026-01-10',
          end: '2026-03-15',
          resource: 4,
          type: 'Repair',
          clientGroup: 'Hospitality Group',
        },
        {
          id: 37,
          title: 'Commercial Kitchen Exhaust Installation',
          start: '2026-02-05',
          end: '2026-03-31',
          resource: 6,
          type: 'Installation',
          clientGroup: 'Hospitality Group',
        },
        {
          id: 38,
          title: 'Pool Area LED Lighting Conversion',
          start: '2026-04-10',
          end: '2026-06-20',
          resource: 4,
          type: 'Upgrade',
          clientGroup: 'Hospitality Group',
        },
        {
          id: 39,
          title: 'Guest Room HVAC Zone Upgrade Project',
          start: '2026-05-01',
          end: '2026-06-30',
          resource: 6,
          type: 'Upgrade',
          clientGroup: 'Hospitality Group',
        },
        {
          id: 40,
          title: 'Conference Center AV & Electrical Setup',
          start: '2026-01-15',
          end: '2026-03-10',
          resource: 4,
          type: 'Installation',
          clientGroup: 'Hospitality Group',
        },
        {
          id: 41,
          title: 'Spa Facility Equipment Installation',
          start: '2026-04-20',
          end: '2026-06-15',
          resource: 4,
          type: 'Installation',
          clientGroup: 'Hospitality Group',
        },
        {
          id: 42,
          title: 'Ballroom Lighting & Rigging Project',
          start: '2026-05-10',
          end: '2026-06-30',
          resource: 6,
          type: 'Installation',
          clientGroup: 'Hospitality Group',
        },
        {
          id: 43,
          title: 'Operating Room HVAC Upgrade',
          start: '2026-01-15',
          end: '2026-03-30',
          resource: 1,
          type: 'Upgrade',
          clientGroup: 'Greenfield Medical Center',
        },
        {
          id: 44,
          title: 'Medical Equipment Power Installation',
          start: '2026-04-05',
          end: '2026-06-20',
          resource: 1,
          type: 'Installation',
          clientGroup: 'Greenfield Medical Center',
        },
        {
          id: 45,
          title: 'Open Office Climate Control',
          start: '2026-01-05',
          end: '2026-03-10',
          resource: 5,
          type: 'Installation',
          clientGroup: 'Tech Startup Hub',
        },
        {
          id: 46,
          title: 'Conference Room AV Setup',
          start: '2026-02-10',
          end: '2026-03-31',
          resource: 7,
          type: 'Installation',
          clientGroup: 'Tech Startup Hub',
        },
        {
          id: 47,
          title: 'Server Closet Cooling System',
          start: '2026-01-20',
          end: '2026-03-20',
          resource: 3,
          type: 'Installation',
          clientGroup: 'Tech Startup Hub',
        },
        {
          id: 48,
          title: 'Emergency Exit Lighting',
          start: '2026-04-10',
          end: '2026-06-15',
          resource: 7,
          type: 'Maintenance',
          clientGroup: 'Tech Startup Hub',
        },
        {
          id: 49,
          title: 'Annual HVAC System Winterization',
          start: '2026-10-01',
          end: '2026-12-15',
          resource: 1,
          type: 'Maintenance',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 50,
          title: 'Year-End Electrical Safety Audit',
          start: '2026-11-01',
          end: '2026-12-31',
          resource: 3,
          type: 'Inspection',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 51,
          title: 'Holiday Lighting Installation',
          start: '2026-10-01',
          end: '2026-12-15',
          resource: 5,
          type: 'Installation',
          clientGroup: 'Retail Partners',
        },
        {
          id: 52,
          title: 'Winter HVAC Maintenance',
          start: '2026-11-01',
          end: '2026-12-31',
          resource: 7,
          type: 'Maintenance',
          clientGroup: 'Retail Partners',
        },
        {
          id: 53,
          title: 'Municipal Building Fire System Upgrade',
          start: '2026-07-01',
          end: '2026-09-20',
          resource: 6,
          type: 'Upgrade',
          clientGroup: 'City Municipal Services',
        },
        {
          id: 54,
          title: 'Fall Preventive Maintenance Program',
          start: '2026-07-15',
          end: '2026-09-30',
          resource: 8,
          type: 'Maintenance',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 55,
          title: 'Year-End Equipment Calibration',
          start: '2026-10-01',
          end: '2026-12-20',
          resource: 7,
          type: 'Inspection',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 56,
          title: 'School Year-End HVAC Service',
          start: '2026-07-01',
          end: '2026-09-15',
          resource: 3,
          type: 'Maintenance',
          clientGroup: 'Education District',
        },
        {
          id: 57,
          title: 'Winter Heating System Preparation',
          start: '2026-10-01',
          end: '2026-12-10',
          resource: 6,
          type: 'Maintenance',
          clientGroup: 'Education District',
        },
        {
          id: 58,
          title: 'Fall Season HVAC Maintenance',
          start: '2026-07-15',
          end: '2026-09-30',
          resource: 4,
          type: 'Maintenance',
          clientGroup: 'Hospitality Group',
        },
        {
          id: 59,
          title: 'Emergency Room Electrical Upgrade',
          start: '2026-07-01',
          end: '2026-09-15',
          resource: 1,
          type: 'Upgrade',
          clientGroup: 'Greenfield Medical Center',
        },
        {
          id: 60,
          title: 'Medical Facility Winter Readiness',
          start: '2026-10-10',
          end: '2026-12-20',
          resource: 1,
          type: 'Maintenance',
          clientGroup: 'Greenfield Medical Center',
        },
        {
          id: 61,
          title: 'Summer Cooling System Optimization',
          start: '2026-07-01',
          end: '2026-09-15',
          resource: 2,
          type: 'Maintenance',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 62,
          title: 'Backup Generator Testing & Certification',
          start: '2026-08-10',
          end: '2026-09-30',
          resource: 4,
          type: 'Inspection',
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 63,
          title: 'Summer Cooling System Service',
          start: '2026-07-10',
          end: '2026-09-10',
          resource: 5,
          type: 'Maintenance',
          clientGroup: 'Retail Partners',
        },
        {
          id: 64,
          title: 'Year-End Facility Safety Inspection',
          start: '2026-10-15',
          end: '2026-12-20',
          resource: 2,
          type: 'Inspection',
          clientGroup: 'City Municipal Services',
        },
        {
          id: 65,
          title: 'Holiday Season Preparation',
          start: '2026-10-15',
          end: '2026-12-31',
          resource: 6,
          type: 'Maintenance',
          clientGroup: 'Hospitality Group',
        },
        {
          id: 66,
          title: 'Office Expansion Electrical Work',
          start: '2026-07-15',
          end: '2026-09-25',
          resource: 5,
          type: 'Installation',
          clientGroup: 'Tech Startup Hub',
        },
        {
          id: 67,
          title: 'Year-End System Maintenance',
          start: '2026-10-20',
          end: '2026-12-30',
          resource: 3,
          type: 'Maintenance',
          clientGroup: 'Tech Startup Hub',
        },
        //</hide-comment>
      ];

      var myResources = [
        {
          id: 1,
          name: 'Sarah Johnson',
          title: 'Senior HVAC Technician',
          color: '#4a7c9e',
          img: 'https://img.mobiscroll.com/demos/f1.png',
        },
        {
          id: 2,
          name: 'Mike Chen',
          title: 'Lead Facilities Engineer',
          color: '#7c6ba1',
          img: 'https://img.mobiscroll.com/demos/m1.png',
        },
        {
          id: 3,
          name: 'Emily Rodriguez',
          title: 'Electrical Systems Specialist',
          color: '#c76b8a',
          img: 'https://img.mobiscroll.com/demos/f2.png',
        },
        {
          id: 4,
          name: 'James Wilson',
          title: 'Master Electrician',
          color: '#5a9d76',
          img: 'https://img.mobiscroll.com/demos/m2.png',
        },
        {
          id: 5,
          name: 'Lisa Anderson',
          title: 'Building Automation Technician',
          color: '#d4a056',
          img: 'https://img.mobiscroll.com/demos/f3.png',
        },
        {
          id: 6,
          name: 'David Kim',
          title: 'HVAC Project Manager',
          color: '#4a9dad',
          img: 'https://img.mobiscroll.com/demos/m3.png',
        },
        {
          id: 7,
          name: 'Maria Garcia',
          title: 'Lighting Systems Specialist',
          color: '#c67e5c',
          img: 'https://img.mobiscroll.com/demos/f4.png',
        },
        {
          id: 8,
          name: 'Robert Taylor',
          title: 'Industrial Maintenance Lead',
          color: '#7fa650',
          img: 'https://img.mobiscroll.com/demos/m4.png',
        },
      ];

      var typeResources = [
        {
          id: 'installation',
          name: 'Installation',
          color: '#3b5998',
        },
        {
          id: 'maintenance',
          name: 'Maintenance',
          color: '#2d7a4f',
        },
        {
          id: 'repair',
          name: 'Repair',
          color: '#b8621b',
        },
        {
          id: 'inspection',
          name: 'Inspection',
          color: '#6b4fa3',
        },
        {
          id: 'upgrade',
          name: 'Upgrade',
          color: '#a03a3a',
        },
      ];

      var clientGroupColors = {
        'Enterprise Solutions Group': '#7fb069',
        'Retail Partners': '#d4b949',
        'City Municipal Services': '#9b87d4',
        'Industrial Manufacturing Co': '#c97a7a',
        'Education District': '#d888b8',
        'Hospitality Group': '#e89a5f',
        'Greenfield Medical Center': '#5fadce',
        'Tech Startup Hub': '#8f98d4',
      };

      var groupedEvents = [];
      var groupBy = 'assignee'; // 'assignee' or 'type'
      var groupByClientQuarter = false;

      function groupEventsByClientQuarter(events) {
        var groups = {};
        var result = [];

        // Group events by resource (assignee or type) + client + quarter
        events.forEach(function (event) {
          var resourceId = groupBy === 'assignee' ? event.resource : event.type.toLowerCase();
          var eventStart = new Date(event.start);
          var month = eventStart.getMonth();
          var year = eventStart.getFullYear();
          var period = Math.floor(month / 3);

          var groupKey = resourceId + '-' + event.clientGroup + '-' + year + '-' + period;

          if (!groups[groupKey]) {
            groups[groupKey] = {
              resource: resourceId,
              clientGroup: event.clientGroup,
              year: year,
              period: period,
              events: [],
            };
          }

          groups[groupKey].events.push(event);
        });

        // Create grouped events
        Object.keys(groups).forEach(function (groupKey) {
          var groupData = groups[groupKey];
          var periodEvents = groupData.events.sort(function (a, b) {
            return a.start < b.start ? -1 : a.start > b.start ? 1 : 0;
          });

          // Get color based on groupBy mode
          var color;
          if (groupBy === 'assignee') {
            var resourceItem = myResources.find(function (r) {
              return r.id === groupData.resource;
            });
            color = resourceItem.color;
          } else {
            var typeObj = typeResources.find(function (r) {
              return r.id === groupData.resource;
            });
            color = typeObj.color;
          }

          var eventIds = periodEvents
            .map(function (e) {
              return e.id;
            })
            .join('-');

          var earliestStart = periodEvents[0].start;
          var latestEnd = periodEvents.reduce(function (latest, event) {
            return event.end > latest ? event.end : latest;
          }, periodEvents[0].end);

          result.push({
            id: 'group-' + groupKey + '-' + eventIds,
            title: groupData.clientGroup,
            resource: groupData.resource,
            clientGroup: groupData.clientGroup,
            start: earliestStart,
            end: latestEnd,
            color: color,
            count: periodEvents.length,
            originalEvents: periodEvents,
          });
        });

        return result;
      }

      function prepareEventsForDisplay(events, colorByType) {
        return events.map(function (event) {
          // Use client group color for simple view
          var color = clientGroupColors[event.clientGroup];

          return {
            id: event.id,
            title: event.title,
            start: event.start,
            end: event.end,
            resource: colorByType ? event.resource : event.type.toLowerCase(),
            type: event.type,
            assignee: event.resource,
            clientGroup: event.clientGroup,
            color: color,
          };
        });
      }

      function updateView() {
        var currentResources;
        var currentEvents;

        if (groupByClientQuarter) {
          // Grouped view
          groupedEvents = groupEventsByClientQuarter(myEvents);

          if (groupBy === 'assignee') {
            currentResources = myResources;
          } else {
            currentResources = typeResources;
          }

          currentEvents = groupedEvents;
        } else {
          // Simple view
          groupedEvents = [];
          if (groupBy === 'assignee') {
            currentResources = myResources;
            currentEvents = prepareEventsForDisplay(myEvents, true);
          } else {
            currentResources = typeResources;
            currentEvents = prepareEventsForDisplay(myEvents, false);
          }
        }

        calendar.setOptions({
          data: currentEvents,
          resources: currentResources,
          renderScheduleEvent: groupByClientQuarter ? renderGroupedEvent : renderSimpleEvent,
        });
      }

      function renderGroupedEvent(event) {
        var origEvent = event.original;

        // Get unique items (opposite of groupBy)
        var uniqueItems = {};
        origEvent.originalEvents.forEach(function (ev) {
          if (groupBy === 'assignee') {
            // Show types
            var typeObj = typeResources.find(function (r) {
              return r.id === ev.type.toLowerCase();
            });
            if (typeObj) {
              uniqueItems[typeObj.id] = typeObj;
            }
          } else {
            // Show employees
            var emp = myResources.find(function (r) {
              return r.id === ev.resource;
            });
            if (emp) {
              uniqueItems[emp.id] = emp;
            }
          }
        });

        var itemCount = Object.keys(uniqueItems).length;
        var itemLabel = groupBy === 'assignee' ? 'type' : 'employee';

        return (
          '<div class="mbsc-flex mds-event-grouping-task mds-event-grouping-task-client" style="border-left-color: ' +
          origEvent.color +
          '">' +
          '<div class="mbsc-flex mds-event-grouping-content">' +
          '<div class="mds-event-grouping-title-text">' +
          origEvent.clientGroup +
          '</div>' +
          '<div class="mbsc-flex mds-event-grouping-right">' +
          '<div class="mbsc-flex mds-event-grouping-meta">' +
          '<div class="mds-event-grouping-date-range">' +
          mobiscroll.formatDate('DD MMM', new Date(origEvent.start)) +
          ' - ' +
          mobiscroll.formatDate('DD MMM', new Date(origEvent.end)) +
          '</div>' +
          '<div class="mds-event-grouping-count">' +
          origEvent.count +
          ' task' +
          (origEvent.count > 1 ? 's' : '') +
          ', ' +
          itemCount +
          ' ' +
          itemLabel +
          (itemCount > 1 ? 's' : '') +
          '</div>' +
          '</div>' +
          '<div class="mbsc-flex mds-event-grouping-icon mbsc-icon mbsc-font-icon mbsc-icon-material-keyboard-arrow-down"></div>' +
          '</div>' +
          '</div>' +
          '<div class="mds-event-grouping-events"><div class="mds-event-grouping-events-inner"></div></div>' +
          '</div>'
        );
      }

      function renderSimpleEvent(event) {
        var origEvent = event.original;
        var detailText = '';
        var avatarUrl = '';
        var typeDotColor = '';

        if (groupBy === 'assignee') {
          // Show type with colored dot
          var typeObj = typeResources.find(function (t) {
            return t.id === origEvent.type.toLowerCase();
          });
          if (typeObj) {
            detailText = typeObj.name;
            typeDotColor = typeObj.color;
          }
        } else {
          // Show assignee with avatar
          var employee = myResources.find(function (r) {
            return r.id === origEvent.assignee;
          });
          if (employee) {
            detailText = employee.name;
            avatarUrl = employee.img;
          }
        }

        return (
          '<div class="mbsc-flex mds-event-simple" style="background-color: ' +
          origEvent.color +
          '">' +
          '<div class="mds-event-simple-title">' +
          origEvent.title +
          '</div>' +
          '<div class="mbsc-flex mds-event-simple-right">' +
          '<div class="mds-event-simple-date">' +
          mobiscroll.formatDate('DD MMM', new Date(origEvent.start)) +
          ' - ' +
          mobiscroll.formatDate('DD MMM', new Date(origEvent.end)) +
          '</div>' +
          (detailText
            ? '<div class="mbsc-flex mds-event-simple-subtitle-wrapper">' +
              (avatarUrl ? '<img src="' + avatarUrl + '" alt="' + detailText + '" class="mds-event-simple-avatar" />' : '') +
              (typeDotColor ? '<span class="mds-event-simple-type-dot" style="background-color: ' + typeDotColor + '"></span>' : '') +
              '<div class="mbsc-flex mds-event-simple-subtitle">' +
              detailText +
              '</div>' +
              '</div>'
            : '') +
          '</div>' +
          '</div>'
        );
      }

      function toggleIcon(icon, isExpanded) {
        if (isExpanded) {
          icon.classList.remove('mbsc-icon-material-keyboard-arrow-up');
          icon.classList.add('mbsc-icon-material-keyboard-arrow-down');
        } else {
          icon.classList.remove('mbsc-icon-material-keyboard-arrow-down');
          icon.classList.add('mbsc-icon-material-keyboard-arrow-up');
        }
      }

      function expand(task, scheduleEvent, eventsInner, icon, groupedEvent) {
        var html = groupedEvent.originalEvents
          .map(function (ev) {
            var detailText = '';
            var typeDotColor = '';
            var avatarUrl = '';

            if (groupBy === 'assignee') {
              // Show type with colored dot
              var typeObj = typeResources.find(function (r) {
                return r.id === ev.type.toLowerCase();
              });
              if (typeObj) {
                detailText = typeObj.name;
                typeDotColor = typeObj.color;
              }
            } else {
              // Show assignee with avatar
              var employee = myResources.find(function (r) {
                return r.id === ev.resource;
              });
              if (employee) {
                detailText = employee.name;
                avatarUrl = employee.img;
              }
            }

            return (
              '<div class="mds-event-grouping-original-event">' +
              '<div class="mbsc-flex mds-event-grouping-event-content">' +
              '<div class="mds-event-grouping-event-title">' +
              ev.title +
              '</div>' +
              '<div class="mbsc-flex mds-event-grouping-event-right">' +
              '<div class="mds-event-grouping-event-date">' +
              mobiscroll.formatDate('DD MMM', new Date(ev.start)) +
              ' - ' +
              mobiscroll.formatDate('DD MMM', new Date(ev.end)) +
              '</div>' +
              '<div class="mbsc-flex mds-event-grouping-event-detail">' +
              (avatarUrl ? '<img src="' + avatarUrl + '" alt="' + detailText + '" class="mds-event-grouping-event-avatar" />' : '') +
              (typeDotColor ? '<span class="mds-event-grouping-type-dot" style="background-color: ' + typeDotColor + '"></span>' : '') +
              '<div class="mds-event-grouping-event-employee">' +
              detailText +
              '</div>' +
              '</div>' +
              '</div>' +
              '</div>' +
              '</div>'
            );
          })
          .join('');

        eventsInner.innerHTML = html;
        scheduleEvent.style.zIndex = '3';
        eventsInner.offsetHeight; // Force reflow

        task.classList.add('expanded');
        toggleIcon(icon, false);

        setTimeout(function () {
          calendar.refresh();
        }, 250);
      }

      function collapse(task, scheduleEvent, eventsInner, icon) {
        task.classList.remove('expanded');
        scheduleEvent.style.zIndex = '';
        toggleIcon(icon, true);

        setTimeout(function () {
          eventsInner.innerHTML = '';
          calendar.refresh();
        }, 250);
      }

      var calendar = $('#demo-event-grouping')
        .mobiscroll()
        .eventcalendar({
          dragToMove: true,
          dragToResize: false,
          dragBetweenResources: false,
          view: {
            timeline: {
              type: 'year',
              resolutionHorizontal: 'month',
              eventHeight: 'variable',
            },
          },
          data: myEvents,
          resources: myResources,
          renderScheduleEvent: renderSimpleEvent,
          renderResource: function (resource) {
            if (resource.img) {
              // Employee resource
              return (
                '<div class="mbsc-flex">' +
                '<img alt="' +
                resource.name +
                '" class="mds-event-grouping-avatar" src="' +
                resource.img +
                '"/>' +
                '<div class="mds-event-grouping-cont">' +
                '<div class="mds-event-grouping-name">' +
                resource.name +
                '</div>' +
                '<div class="mds-event-grouping-title">' +
                resource.title +
                '</div>' +
                '</div>' +
                '</div>'
              );
            } else {
              // Type resource
              return (
                '<div class="mbsc-flex mds-event-grouping-type-resource">' +
                '<div class="mds-event-grouping-type-badge" style="background-color: ' +
                resource.color +
                '"></div>' +
                '<div class="mds-event-grouping-type-name">' +
                resource.name +
                '</div>' +
                '</div>'
              );
            }
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end mds-event-grouping-header-controls">' +
              '<label>' +
              '<input mbsc-checkbox type="checkbox" id="group-by-client-quarter" data-input-style="box" data-label="Group by Client/Quarter" />' +
              '</label>' +
              '<label>' +
              '<input mbsc-input id="event-grouping-input" class="mds-event-grouping-select" data-dropdown="true" data-input-style="box" />' +
              '</label>' +
              '<select id="group-by-select">' +
              '<option value="assignee" selected>View by Assignee</option>' +
              '<option value="type">View by Type</option>' +
              '</select>' +
              '</div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>'
            );
          },
          onEventUpdate: function (args) {
            if (groupByClientQuarter) {
              // Grouping is ON - handle grouped event moves
              var updatedEvent = args.event;
              var oldEvent = args.oldEvent;

              var oldStart = new Date(oldEvent.start).getTime();
              var newStart = new Date(updatedEvent.start).getTime();
              var startDelta = newStart - oldStart;

              if (startDelta !== 0) {
                // Find the grouped event that was moved
                var movedGroupedEvent = groupedEvents.find(function (ge) {
                  return ge.id === updatedEvent.id;
                });

                if (movedGroupedEvent) {
                  var clientGroupName = movedGroupedEvent.clientGroup;
                  var eventsToUpdate = [];

                  // Update all events within this grouped event
                  movedGroupedEvent.originalEvents.forEach(function (originalEvent) {
                    var eventInMyEvents = myEvents.find(function (e) {
                      return e.id === originalEvent.id;
                    });

                    if (eventInMyEvents) {
                      eventInMyEvents.start = new Date(new Date(eventInMyEvents.start).getTime() + startDelta);
                      eventInMyEvents.end = new Date(new Date(eventInMyEvents.end).getTime() + startDelta);
                      eventsToUpdate.push(eventInMyEvents);
                    }
                  });

                  // Regenerate grouped events
                  updateView();

                  mobiscroll.toast({
                    message: eventsToUpdate.length + ' event(s) for ' + clientGroupName + ' have been moved.',
                  });
                }
              }
            }
          },
        })
        .mobiscroll('getInst');

      // Initialize Mobiscroll select dropdown
      $('#group-by-select')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('event-grouping-input'),
          touchUi: false,
          onChange: function (args) {
            groupBy = args.value;
            updateView();
          },
        })
        .mobiscroll('getInst');

      // Checkbox for client/quarter grouping
      $('#group-by-client-quarter').on('change', function () {
        groupByClientQuarter = this.checked;
        updateView();
      });

      // Expand/collapse icon click handler
      $(document).on('click', '.mds-event-grouping-icon', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var icon = event.currentTarget;
        var task = $(icon).closest('.mds-event-grouping-task')[0];
        var scheduleEvent = $(icon).closest('.mbsc-schedule-event')[0];
        var eventsInner = $(task).find('.mds-event-grouping-events-inner')[0];

        if (!task || !scheduleEvent || !eventsInner) return;

        var isExpanded = task.classList.contains('expanded');

        // Find grouped event by client group text
        var clientText = $(task).find('.mds-event-grouping-title-text').text();
        var groupedEvent = groupedEvents.find(function (e) {
          return e.clientGroup === clientText;
        });

        if (!groupedEvent) return;

        if (isExpanded) {
          collapse(task, scheduleEvent, eventsInner, icon);
        } else {
          expand(task, scheduleEvent, eventsInner, icon, groupedEvent);
        }
      });

      updateView();
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-event-grouping" class="mds-event-grouping-calendar"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
/* Calendar base styles */

.mds-event-grouping-calendar .mbsc-timeline-row {
  height: 140px;
}

.mds-event-grouping-calendar .mbsc-timeline-resource-col {
  width: 240px;
}

.mds-event-grouping-calendar .mbsc-ios.mbsc-textfield-wrapper-box {
  margin: 10px 20px;
}

/* Mobiscroll checkbox*/
.mds-event-grouping-calendar .mbsc-ios.mbsc-form-control-wrapper:before,
.mds-event-grouping-calendar .mbsc-ios.mbsc-form-control-wrapper:after {
  border: none;
}

.mds-event-grouping-calendar .mbsc-ios.mbsc-checkbox {
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 8px;
}

/* Resource rendering - Employees */

.mds-event-grouping-avatar {
  width: 40px;
  height: 40px;
}

.mds-event-grouping-cont {
  padding: 0 7px;
}

.mds-event-grouping-name {
  font-size: 14px;
  line-height: 24px;
}

.mds-event-grouping-title {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

/* Resource rendering - Types */

.mds-event-grouping-type-resource {
  align-items: center;
  padding: 8px 0;
}

.mds-event-grouping-type-badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
}

.mds-event-grouping-type-name {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}

/* Grouped event - collapsed state */

.mds-event-grouping-task-client {
  background-color: #f8f9fa;
  border-left: 4px solid;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08);
  flex-direction: column;
  overflow: hidden;
}

/* Grouped event header content */
.mds-event-grouping-content {
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
}

/* Client group title */
.mds-event-grouping-title-text {
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
  line-height: 20px;
  flex: 1;
  min-width: 0;
  margin-right: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Right side container (meta + icon) */
.mds-event-grouping-right {
  align-items: center;
  width: 130px;
}

/* Meta information (dates + counts) */
.mds-event-grouping-meta {
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  margin-right: 12px;
}

.mds-event-grouping-date-range {
color: #797979;
  font-size: 11px;
  line-height: 14px;
  white-space: nowrap;
  margin-bottom: 2px;
}

.mds-event-grouping-count {
  font-size: 11px;
  line-height: 14px;
  white-space: nowrap;
}

/* Expand/collapse icon */
.mds-event-grouping-icon {
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.3s ease;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
}

.mds-event-grouping-task.expanded .mds-event-grouping-icon {
  transform: rotate(180deg);
}

/* Grouped event - expanded state */

/* Grid wrapper for smooth animation */
.mds-event-grouping-events {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.25s ease;
}

.mds-event-grouping-events-inner {
  overflow: hidden;
  padding: 0 14px;
  transition: padding 0.25s ease;
}

.mds-event-grouping-task.expanded .mds-event-grouping-events {
  grid-template-rows: 1fr;
}

.mds-event-grouping-task.expanded .mds-event-grouping-events-inner {
  padding: 0 14px 10px 14px;
}

/* Individual event in expanded list */
.mds-event-grouping-original-event {
  background: #fff;
  border-radius: 6px;
  margin-bottom: 6px;
  padding: 8px 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}

.mds-event-grouping-original-event:last-child {
  margin-bottom: 0;
}

/* Event content layout */
.mds-event-grouping-event-content {
  justify-content: space-between;
  align-items: center;
}

/* Event title */
.mds-event-grouping-event-title {
  font-weight: 600;
  color: #1e293b;
  font-size: 13px;
  line-height: 18px;
  flex: 1;
  min-width: 0;
  margin-right: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Right side (date + detail) */
.mds-event-grouping-event-right {
  flex-direction: column;
  align-items: flex-end;
  min-width: 80px;
}

.mds-event-grouping-event-date {
  font-size: 11px;
  color: #94a3b8;
  white-space: nowrap;
  line-height: 14px;
  text-align: right;
  margin-bottom: 2px;
}

/* Detail container (avatar/dot + text) */
.mds-event-grouping-event-detail {
  align-items: center;
  justify-content: flex-end;
}

.mds-event-grouping-event-employee {
  font-size: 11px;
  font-weight: 700;
  color: #64748b;
  white-space: nowrap;
  line-height: 14px;
  text-align: right;
}

/* Avatar for assignee in type view */
.mds-event-grouping-event-avatar {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 6px;
}

/* Colored dot for type in assignee view */
.mds-event-grouping-type-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
}

/* Simple event styling (no grouping) */

.mds-event-simple {
  padding: 10px 12px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  height: 100%;
  color: #fff;
}

/* Event title */
.mds-event-simple-title {
  flex: 1;
  font-size: 13px;
  font-weight: 600;
  margin-right: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Right side container */
.mds-event-simple-right {
  flex-direction: column;
  align-items: flex-end;
  min-width: 80px;
}

/* Date range */
.mds-event-simple-date {
  font-size: 11px;
  line-height: 14px;
  opacity: 0.85;
  white-space: nowrap;
  text-align: right;
  margin-bottom: 2px;
}

/* Subtitle wrapper (avatar/dot + text) */
.mds-event-simple-subtitle-wrapper {
  align-items: center;
  justify-content: flex-end;
}

/* Avatar for assignee in type view */
.mds-event-simple-avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 6px;
}

/* Colored dot for type in assignee view */
.mds-event-simple-type-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  align-self: center;
}

/* Subtitle text (type or assignee name) */
.mds-event-simple-subtitle {
  font-size: 11px;
  font-weight: 700;
  text-align: right;
  white-space: nowrap;
  align-items: center;
}

/* Header controls */
.mds-event-grouping-header-controls {
  align-items: center;
}

/* Spacing between controls */
.mds-event-grouping-header-controls > * {
  margin-left: 12px;
}

.mds-event-grouping-header-controls > *:first-child {
  margin-left: 0;
}

/* Select input */
.mds-event-grouping-select.mbsc-textfield {
  width: 210px;
}
  `,
};
