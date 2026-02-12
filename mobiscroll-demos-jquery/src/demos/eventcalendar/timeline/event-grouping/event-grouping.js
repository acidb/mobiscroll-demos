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
        // Enterprise Solutions Group - Large group with tasks across 4 employees
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

        // Retail Partners - Medium group with tasks across 2 employees
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
          id: 63,
          title: 'Summer Cooling System Service',
          start: '2026-07-10',
          end: '2026-09-10',
          resource: 5,
          type: 'Maintenance',
          clientGroup: 'Retail Partners',
        },

        // City Municipal Services - Group with tasks across 2 employees
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
          id: 53,
          title: 'Municipal Building Fire System Upgrade',
          start: '2026-07-01',
          end: '2026-09-20',
          resource: 6,
          type: 'Upgrade',
          clientGroup: 'City Municipal Services',
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

        // Industrial Manufacturing Co - Large group with tasks across 1 employee
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
          resource: 8,
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
          resource: 8,
          type: 'Upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 26,
          title: 'Main Electrical Panel Replacement Project',
          start: '2026-01-15',
          end: '2026-03-20',
          resource: 8,
          type: 'Repair',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 27,
          title: 'Production Floor Lighting Modernization',
          start: '2026-02-10',
          end: '2026-03-31',
          resource: 8,
          type: 'Upgrade',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 28,
          title: 'Overhead Crane Electrical Certification',
          start: '2026-04-15',
          end: '2026-06-15',
          resource: 8,
          type: 'Inspection',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 29,
          title: 'Production Line Power Infrastructure',
          start: '2026-05-10',
          end: '2026-06-30',
          resource: 8,
          type: 'Installation',
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 30,
          title: 'Chiller Plant Annual Overhaul',
          start: '2026-01-20',
          end: '2026-03-25',
          resource: 8,
          type: 'Maintenance',
          clientGroup: 'Industrial Manufacturing Co',
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
          resource: 8,
          type: 'Inspection',
          clientGroup: 'Industrial Manufacturing Co',
        },

        // Education District - Medium group with tasks across 2 employees
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

        // Hospitality Group - Medium group with tasks across 2 employees
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
          id: 58,
          title: 'Fall Season HVAC Maintenance',
          start: '2026-07-15',
          end: '2026-09-30',
          resource: 4,
          type: 'Maintenance',
          clientGroup: 'Hospitality Group',
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

        // Greenfield Medical Center - Group with tasks across 1 employee
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

        // Tech Startup Hub - Group with tasks across 3 employees
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
      ];

      var myResources = [
        {
          id: 1,
          name: 'Sarah Johnson',
          title: 'Senior HVAC Technician',
          color: '#3b82f6',
          img: 'https://img.mobiscroll.com/demos/f1.png',
        },
        {
          id: 2,
          name: 'Mike Chen',
          title: 'Lead Facilities Engineer',
          color: '#8b5cf6',
          img: 'https://img.mobiscroll.com/demos/m1.png',
        },
        {
          id: 3,
          name: 'Emily Rodriguez',
          title: 'Electrical Systems Specialist',
          color: '#ec4899',
          img: 'https://img.mobiscroll.com/demos/f2.png',
        },
        {
          id: 4,
          name: 'James Wilson',
          title: 'Master Electrician',
          color: '#10b981',
          img: 'https://img.mobiscroll.com/demos/m2.png',
        },
        {
          id: 5,
          name: 'Lisa Anderson',
          title: 'Building Automation Technician',
          color: '#f59e0b',
          img: 'https://img.mobiscroll.com/demos/f3.png',
        },
        {
          id: 6,
          name: 'David Kim',
          title: 'HVAC Project Manager',
          color: '#06b6d4',
          img: 'https://img.mobiscroll.com/demos/m3.png',
        },
        {
          id: 7,
          name: 'Maria Garcia',
          title: 'Lighting Systems Specialist',
          color: '#ef4444',
          img: 'https://img.mobiscroll.com/demos/f4.png',
        },
        {
          id: 8,
          name: 'Robert Taylor',
          title: 'Industrial Maintenance Lead',
          color: '#84cc16',
          img: 'https://img.mobiscroll.com/demos/m4.png',
        },
      ];

      var typeResources = [
        {
          id: 'installation',
          name: 'Installation',
          color: '#3b82f6',
        },
        {
          id: 'maintenance',
          name: 'Maintenance',
          color: '#10b981',
        },
        {
          id: 'repair',
          name: 'Repair',
          color: '#f59e0b',
        },
        {
          id: 'inspection',
          name: 'Inspection',
          color: '#8b5cf6',
        },
        {
          id: 'upgrade',
          name: 'Upgrade',
          color: '#ef4444',
        },
      ];

      var groupedEvents = [];
      var groupBy = 'assignee'; // 'assignee' or 'type'
      var groupByClientQuarter = false;

      // Generate client resources dynamically from events
      function getClientResources() {
        var clientGroups = {};

        myEvents.forEach(function (event) {
          if (!clientGroups[event.clientGroup]) {
            clientGroups[event.clientGroup] = true;
          }
        });

        return Object.keys(clientGroups).map(function (clientGroup, index) {
          return {
            id: 'client-' + index,
            name: clientGroup,
          };
        });
      }

      function groupEventsByClientQuarter(events) {
        var groups = {};
        var result = [];
        var clientResources = getClientResources();

        // Group events by client
        events.forEach(function (event) {
          if (!groups[event.clientGroup]) {
            groups[event.clientGroup] = [];
          }
          groups[event.clientGroup].push(event);
        });

        Object.keys(groups).forEach(function (clientGroup) {
          var clientEvents = groups[clientGroup];

          var clientResource = clientResources.find(function (r) {
            return r.name === clientGroup;
          });

          // Group events by 3-month periods based on START date only
          var periodGroups = {};

          clientEvents.forEach(function (event) {
            var eventStart = new Date(event.start);
            var month = eventStart.getMonth(); // 0-11
            var year = eventStart.getFullYear();

            // Calculate 3-month period based on start date (0: Jan-Mar, 1: Apr-Jun, 2: Jul-Sep, 3: Oct-Dec)
            var period = Math.floor(month / 3);
            var periodKey = year + '-' + period;

            if (!periodGroups[periodKey]) {
              periodGroups[periodKey] = {
                events: [],
                year: year,
                period: period,
              };
            }

            periodGroups[periodKey].events.push(event);
          });

          // Create a grouped event for each 3-month period
          Object.keys(periodGroups).forEach(function (periodKey) {
            var periodData = periodGroups[periodKey];
            var periodEvents = periodData.events.sort(function (a, b) {
              return a.start < b.start ? -1 : a.start > b.start ? 1 : 0;
            });

            // Get color based on groupBy mode
            var color;
            if (groupBy === 'assignee') {
              var firstEmployee = myResources.find(function (r) {
                return periodEvents.some(function (e) {
                  return e.resource === r.id;
                });
              });
              color = firstEmployee ? firstEmployee.color : '#64748b';
            } else {
              var firstType = typeResources.find(function (r) {
                return periodEvents.some(function (e) {
                  return e.type.toLowerCase() === r.id;
                });
              });
              color = firstType ? firstType.color : '#64748b';
            }

            var eventIds = periodEvents
              .map(function (e) {
                return e.id;
              })
              .join('-');

            // Use actual task dates - let end date span across quarters
            var earliestStart = periodEvents[0].start;
            var latestEnd = periodEvents.reduce(function (latest, event) {
              return event.end > latest ? event.end : latest;
            }, periodEvents[0].end);

            result.push({
              id: 'group-client-' + eventIds,
              resource: clientResource ? clientResource.id : clientGroup,
              clientGroup: clientGroup,
              start: earliestStart,
              end: latestEnd,
              color: color,
              count: periodEvents.length,
              originalEvents: periodEvents,
            });
          });
        });

        return result;
      }

      function updateView() {
        var currentResources;
        var currentEvents;

        if (groupByClientQuarter) {
          // Grouped view by client/quarter
          var clientResources = getClientResources();
          groupedEvents = groupEventsByClientQuarter(myEvents, groupBy === 'assignee' ? 'resource' : 'type');
          currentResources = clientResources;
          currentEvents = groupedEvents;
        } else {
          // Simple view
          groupedEvents = [];
          if (groupBy === 'assignee') {
            currentResources = myResources;
            currentEvents = myEvents;
          } else {
            // By type - need to map events to type resources
            currentResources = typeResources;
            currentEvents = myEvents.map(function (event) {
              return {
                id: event.id,
                title: event.title,
                start: event.start,
                end: event.end,
                resource: event.type.toLowerCase(),
                type: event.type,
                assignee: event.resource,
                clientGroup: event.clientGroup,
                color: typeResources.find(function (t) {
                  return t.id === event.type.toLowerCase();
                }).color,
              };
            });
          }
        }

        calendar.setOptions({
          data: currentEvents,
          resources: currentResources,
          renderScheduleEvent: groupByClientQuarter ? renderGroupedEvent : null,
        });
      }

      function renderGroupedEvent(event) {
        var origEvent = event.original;

        // Get unique assignees or types depending on groupBy
        var uniqueItems = {};
        origEvent.originalEvents.forEach(function (ev) {
          if (groupBy === 'assignee') {
            var emp = myResources.find(function (r) {
              return r.id === ev.resource;
            });
            if (emp) {
              uniqueItems[emp.id] = emp;
            }
          } else {
            var typeObj = typeResources.find(function (r) {
              return r.id === ev.type.toLowerCase();
            });
            if (typeObj) {
              uniqueItems[typeObj.id] = typeObj;
            }
          }
        });

        var itemCount = Object.keys(uniqueItems).length;
        var itemLabel = groupBy === 'assignee' ? 'employee' : 'type';

        return (
          '<div class="mds-event-grouping-task mds-event-grouping-task-client" style="border-left: 4px solid ' +
          origEvent.color +
          '">' +
          '<div class="mds-event-grouping-summary">' +
          '<div class="mds-event-grouping-title-text">' +
          origEvent.count +
          ' task' +
          (origEvent.count > 1 ? 's' : '') +
          ' with ' +
          itemCount +
          ' ' +
          itemLabel +
          (itemCount > 1 ? 's' : '') +
          '</div>' +
          '<div class="mds-event-grouping-date-range">' +
          mobiscroll.formatDate('DD MMM', new Date(origEvent.start)) +
          ' - ' +
          mobiscroll.formatDate('DD MMM', new Date(origEvent.end)) +
          '</div>' +
          '</div>' +
          '<div id="mds-event-grouping-icon-' +
          origEvent.id +
          '" class="mds-event-grouping-icon mbsc-icon mbsc-font-icon mbsc-icon-material-keyboard-arrow-down"></div>' +
          '<div id="mds-event-grouping-events-' +
          origEvent.id +
          '" class="mds-event-grouping-events"></div>' +
          '</div>'
        );
      }

      var calendar = $('#demo-event-grouping')
        .mobiscroll()
        .eventcalendar({
          dragToMove: true,
          view: {
            timeline: {
              type: 'year',
              resolutionHorizontal: 'month',
              eventHeight: 'variable',
            },
          },
          data: myEvents,
          resources: myResources,
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
            } else if (
              resource.name &&
              !resource.img &&
              typeResources.find(function (t) {
                return t.id === resource.id;
              })
            ) {
              // Type resource
              return (
                '<div class="mds-event-grouping-type-resource">' +
                '<div class="mds-event-grouping-type-badge" style="background-color: ' +
                resource.color +
                '"></div>' +
                '<div class="mds-event-grouping-type-name">' +
                resource.name +
                '</div>' +
                '</div>'
              );
            } else {
              // Client resource - only show name (no badge) when groupByClientQuarter is ON
              if (groupByClientQuarter) {
                return (
                  '<div class="mds-event-grouping-client-resource">' +
                  '<div class="mds-event-grouping-client-name">' +
                  resource.name +
                  '</div>' +
                  '</div>'
                );
              } else {
                // This shouldn't happen, but just in case
                return '<div>' + resource.name + '</div>';
              }
            }
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">' +
              '<button id="group-filter-btn" mbsc-button data-variant="flat">Group & Filter</button>' +
              '</div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>'
            );
          },
          onEventUpdate: function (args) {
            if (groupByClientQuarter) {
              var updatedEvent = args.event;
              var oldEvent = args.oldEvent;

              var oldStart = new Date(oldEvent.start).getTime();
              var newStart = new Date(updatedEvent.start).getTime();

              var startDelta = newStart - oldStart;

              // If no movement, just return
              if (startDelta === 0) {
                return true;
              }

              // Find the grouped event that was moved
              var movedGroupedEvent = groupedEvents.find(function (ge) {
                return ge.id === updatedEvent.id;
              });

              if (!movedGroupedEvent) return false;

              var clientGroupName = movedGroupedEvent.clientGroup;
              var eventsToUpdate = [];

              // Update all events within this grouped event (same 3-month period)
              movedGroupedEvent.originalEvents.forEach(function (originalEvent) {
                var eventInMyEvents = myEvents.find(function (e) {
                  return e.id === originalEvent.id;
                });

                if (eventInMyEvents) {
                  eventInMyEvents.start = new Date(new Date(eventInMyEvents.start).getTime() + startDelta).toISOString().split('T')[0];
                  eventInMyEvents.end = new Date(new Date(eventInMyEvents.end).getTime() + startDelta).toISOString().split('T')[0];
                  eventsToUpdate.push(eventInMyEvents);
                }
              });

              // Regenerate grouped events
              updateView();

              mobiscroll.toast({
                message: eventsToUpdate.length + ' event(s) for ' + clientGroupName + ' have been moved.',
              });

              return true;
            }
          },
        })
        .mobiscroll('getInst');

      // Group & Filter popup
      var popup = $('#group-filter-popup')
        .mobiscroll()
        .popup({
          display: 'anchored',
          showArrow: false,
          showOverlay: false,
          contentPadding: false,
          width: 300,
        })
        .mobiscroll('getInst');

      $('#demo-event-grouping').on('click', '#group-filter-btn', function () {
        console.log(popup, this);
        popup.open();
      });

      // Radio buttons for groupBy
      $('input[name="group-by-radio"]').on('change', function () {
        groupBy = this.value;
        updateView();
      });

      // Checkbox for client/quarter grouping
      $('#group-by-client-quarter').on('change', function () {
        groupByClientQuarter = this.checked;
        updateView();
      });

      $(document).on('click', '.mds-event-grouping-icon', function (event) {
        var iconId = event.currentTarget.id;
        var groupId = iconId.replace('mds-event-grouping-icon-', '');

        var groupedEvent = groupedEvents.find(function (e) {
          return e.id === groupId;
        });

        if (!groupedEvent) return;

        var icon = event.currentTarget;
        var container = $(icon).closest('.mds-event-grouping-task')[0];
        var scheduleEvent = $(icon).closest('.mbsc-schedule-event')[0];
        var eventsDiv = $('#mds-event-grouping-events-' + groupId)[0];

        if (!container || !scheduleEvent || !eventsDiv) return;

        var isExpanded = container.classList.contains('expanded');

        if (isExpanded) {
          collapse(container, scheduleEvent, eventsDiv, icon);
        } else {
          expand(container, scheduleEvent, eventsDiv, icon, groupedEvent);
        }
      });

      function expand(container, scheduleEvent, eventsDiv, icon, groupedEvent) {
        var html = groupedEvent.originalEvents
          .map(function (ev) {
            var detailText;
            if (groupBy === 'assignee') {
              var employee = myResources.find(function (r) {
                return r.id === ev.resource;
              });
              detailText = employee ? employee.name : 'Unknown';
            } else {
              detailText = ev.type;
            }

            return (
              '<div class="mds-event-grouping-original-event">' +
              '<div class="mds-event-grouping-event-content">' +
              '<div class="mds-event-grouping-event-title">' +
              ev.title +
              ' <span class="mds-event-grouping-event-employee">- ' +
              detailText +
              '</span>' +
              '</div>' +
              '<div class="mds-event-grouping-event-date">' +
              mobiscroll.formatDate('DD MMM', new Date(ev.start)) +
              ' - ' +
              mobiscroll.formatDate('DD MMM', new Date(ev.end)) +
              '</div>' +
              '</div>' +
              '</div>'
            );
          })
          .join('');

        eventsDiv.innerHTML = html;
        container.classList.add('expanded');
        scheduleEvent.style.zIndex = '3';

        toggleIcon(icon, true);

        // Trigger layout recalculation by setting new array
        setTimeout(function () {
          calendar.setOptions({
            data: groupedEvents.slice(),
          });
        }, 50);
      }

      function collapse(container, scheduleEvent, eventsDiv, icon) {
        container.classList.remove('expanded');
        scheduleEvent.style.zIndex = '';

        toggleIcon(icon, false);

        setTimeout(function () {
          eventsDiv.innerHTML = '';

          // Trigger layout recalculation by setting new array
          calendar.setOptions({
            data: groupedEvents.slice(),
          });
        }, 300);
      }

      function toggleIcon(icon, isExpanding) {
        var downClass = 'mbsc-icon-material-keyboard-arrow-down';
        var upClass = 'mbsc-icon-material-keyboard-arrow-up';
        icon.classList.remove(isExpanding ? downClass : upClass);
        icon.classList.add(isExpanding ? upClass : downClass);
      }
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-event-grouping" class="mds-event-grouping-calendar"></div>
<div id="group-filter-popup" style="display: none;">
  <label>
    <input mbsc-radio type="radio" name="group-by-radio" value="assignee" checked data-description="View by assignee" />
  </label>
  <label>
    <input mbsc-radio type="radio" name="group-by-radio" value="type" data-description="View by type" />
  </label>
  <label>
    <input mbsc-checkbox type="checkbox" id="group-by-client-quarter" data-description="Group by client/quarter" />
  </label>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-event-grouping-calendar .mbsc-timeline-row {
  height: 140px;
}
.mds-event-grouping-calendar .mbsc-timeline-resource-col {
  width: 240px;
}

/* Resource rendering */
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

/* Type resource styling */
.mds-event-grouping-type-resource {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
}

.mds-event-grouping-type-badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

.mds-event-grouping-type-name {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}

/* Base task styling */
.mds-event-grouping-task {
  position: relative;
  border-radius: 8px;
  padding: 10px 14px;
  background-color: #e1e1e1;
  height: 50px;
  box-sizing: border-box;
  overflow: hidden;
  transition: height 0.25s ease-out;
}

/* Client view specific styling */
.mds-event-grouping-task-client {
  background-color: #f8f9fa;
  border-left-width: 4px;
  border-left-style: solid;
  border-radius: 0 8px 8px 0;
  height: 40px;
  transition: height 0.3s ease-out, padding 0.3s ease-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08);
}

.mds-event-grouping-task.expanded {
  height: auto;
  padding-bottom: 8px;
  overflow: visible;
}

.mds-event-grouping-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
}

.mds-event-grouping-title-text {
  font-size: 13px;
  font-weight: 600;
  color: #1e293b;
  line-height: 18px;
  margin: 0;
  flex-shrink: 0;
}

.mds-event-grouping-date-range {
  font-size: 11px;
  color: #64748b;
  line-height: 14px;
  margin: 0;
  flex-shrink: 0;
  margin-right: 25px;
}

/* Expanded events list */
.mds-event-grouping-events {
  max-height: 0;
  opacity: 0;
  margin-top: 0;
  width: 100%;
  overflow: hidden;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out, margin-top 0.3s ease-out;
}

.mds-event-grouping-task.expanded .mds-event-grouping-events {
  max-height: 1000px;
  opacity: 1;
  margin-top: 8px;
}

.mds-event-grouping-original-event {
  background: #fff;
  border-radius: 6px;
  margin: 0 0 4px 0;
  padding: 6px 10px;
  font-size: 13px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 0.3s ease-out 0.15s, transform 0.3s ease-out 0.15s;
}

.mds-event-grouping-task.expanded .mds-event-grouping-original-event {
  opacity: 1;
  transform: translateY(0);
}

.mds-event-grouping-original-event:last-child {
  margin-bottom: 0;
}

.mds-event-grouping-event-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.mds-event-grouping-event-title {
  font-weight: 600;
  color: #1e293b;
  font-size: 13px;
  line-height: 18px;
  margin: 0;
  flex: 1;
  min-width: 0;
}

.mds-event-grouping-event-employee {
  font-weight: 400;
  color: #64748b;
}

.mds-event-grouping-event-date {
  font-size: 11px;
  color: #94a3b8;
  white-space: nowrap;
  line-height: 18px;
}

/* Expand/collapse icon */
.mds-event-grouping-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  transform: rotate(0deg);
  transition: transform 0.3s ease-out;
}

.mds-event-grouping-task.expanded .mds-event-grouping-icon {
  transform: rotate(180deg);
}

/* Client resource styling */
.mds-event-grouping-client-resource {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
}

.mds-event-grouping-client-name {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
  `,
};
