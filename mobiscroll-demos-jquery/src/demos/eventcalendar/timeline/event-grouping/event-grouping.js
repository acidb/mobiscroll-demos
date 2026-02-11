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
        // Enterprise Solutions Group - Large group with 12 tasks across 4 employees
        {
          id: 1,
          title: 'HVAC System Overhaul - Building A',
          start: '2026-01-15',
          end: '2026-02-10',
          resource: 1,
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 2,
          title: 'Complete Electrical System Inspection',
          start: '2026-02-15',
          end: '2026-03-05',
          resource: 1,
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 3,
          title: 'ICU Plumbing Infrastructure Renovation',
          start: '2026-03-10',
          end: '2026-03-31',
          resource: 4,
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 4,
          title: 'Fire Safety System Upgrade & Testing',
          start: '2026-04-20',
          end: '2026-05-30',
          resource: 4,
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 5,
          title: 'Emergency Generator Complete Overhaul',
          start: '2026-06-01',
          end: '2026-07-10',
          resource: 1,
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 6,
          title: 'Boiler Room Equipment Replacement',
          start: '2026-03-15',
          end: '2026-04-10',
          resource: 1,
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 7,
          title: 'Server Room HVAC Installation Project',
          start: '2026-01-10',
          end: '2026-02-20',
          resource: 3,
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 8,
          title: 'Data Center Cable Infrastructure Upgrade',
          start: '2026-02-25',
          end: '2026-04-10',
          resource: 3,
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 9,
          title: 'Power Distribution System Modernization',
          start: '2026-04-15',
          end: '2026-06-05',
          resource: 3,
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 10,
          title: 'Backup Power System Implementation',
          start: '2026-06-10',
          end: '2026-07-20',
          resource: 3,
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 11,
          title: 'Network Equipment Room Cooling Upgrade',
          start: '2026-01-20',
          end: '2026-02-15',
          resource: 4,
          clientGroup: 'Enterprise Solutions Group',
        },
        {
          id: 12,
          title: 'Security System Integration',
          start: '2026-05-01',
          end: '2026-06-15',
          resource: 4,
          clientGroup: 'Enterprise Solutions Group',
        },

        // Retail Partners - Medium group with 6 tasks across 2 employees
        {
          id: 13,
          title: 'Storefront LED Lighting Conversion',
          start: '2026-01-12',
          end: '2026-02-05',
          resource: 5,
          clientGroup: 'Retail Partners',
        },
        {
          id: 14,
          title: 'Parking Lot Lighting System Replacement',
          start: '2026-02-10',
          end: '2026-03-20',
          resource: 7,
          clientGroup: 'Retail Partners',
        },
        {
          id: 15,
          title: 'Store-wide HVAC Filter & Duct Cleaning',
          start: '2026-03-25',
          end: '2026-04-20',
          resource: 5,
          clientGroup: 'Retail Partners',
        },
        {
          id: 16,
          title: 'Automatic Door System Replacement',
          start: '2026-04-25',
          end: '2026-05-25',
          resource: 7,
          clientGroup: 'Retail Partners',
        },
        {
          id: 17,
          title: 'Point of Sale Electrical Infrastructure',
          start: '2026-01-08',
          end: '2026-01-30',
          resource: 5,
          clientGroup: 'Retail Partners',
        },
        {
          id: 18,
          title: 'Emergency Lighting System Certification',
          start: '2026-06-15',
          end: '2026-07-10',
          resource: 7,
          clientGroup: 'Retail Partners',
        },

        // City Municipal Services - Small group with 3 tasks across 2 employees
        {
          id: 19,
          title: 'City Hall HVAC Modernization',
          start: '2026-01-14',
          end: '2026-02-25',
          resource: 2,
          clientGroup: 'City Municipal Services',
        },
        {
          id: 20,
          title: 'Public Library Climate Control',
          start: '2026-03-01',
          end: '2026-04-10',
          resource: 6,
          clientGroup: 'City Municipal Services',
        },
        {
          id: 21,
          title: 'Community Center Lighting Retrofit',
          start: '2026-04-02',
          end: '2026-06-15',
          resource: 2,
          clientGroup: 'City Municipal Services',
        },

        // Industrial Manufacturing Co - Large group with 9 tasks across 1 employee
        {
          id: 22,
          title: 'Warehouse High-Bay Lighting Installation',
          start: '2026-01-11',
          end: '2026-02-15',
          resource: 8,
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 23,
          title: 'Industrial Compressor System Overhaul',
          start: '2026-02-20',
          end: '2026-04-05',
          resource: 8,
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 24,
          title: 'Loading Dock Door Automation Project',
          start: '2026-04-10',
          end: '2026-05-10',
          resource: 8,
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 25,
          title: 'Factory Ventilation System Upgrade',
          start: '2026-05-15',
          end: '2026-06-30',
          resource: 8,
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 26,
          title: 'Main Electrical Panel Replacement Project',
          start: '2026-03-05',
          end: '2026-04-20',
          resource: 8,
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 27,
          title: 'Production Floor Lighting Modernization',
          start: '2026-01-15',
          end: '2026-02-10',
          resource: 8,
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 28,
          title: 'Overhead Crane Electrical Certification',
          start: '2026-06-10',
          end: '2026-07-15',
          resource: 8,
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 29,
          title: 'Production Line Power Infrastructure',
          start: '2026-04-25',
          end: '2026-05-30',
          resource: 8,
          clientGroup: 'Industrial Manufacturing Co',
        },
        {
          id: 30,
          title: 'Chiller Plant Annual Overhaul',
          start: '2026-02-18',
          end: '2026-03-15',
          resource: 8,
          clientGroup: 'Industrial Manufacturing Co',
        },

        // Education District - Medium group with 5 tasks across 2 employees
        {
          id: 31,
          title: 'Classroom Building HVAC Renovation',
          start: '2026-01-16',
          end: '2026-02-28',
          resource: 3,
          clientGroup: 'Education District',
        },
        {
          id: 32,
          title: 'Gymnasium Lighting System Replacement',
          start: '2026-04-20',
          end: '2026-05-25',
          resource: 3,
          clientGroup: 'Education District',
        },
        {
          id: 33,
          title: 'Auditorium Climate Control Installation',
          start: '2026-03-09',
          end: '2026-05-05',
          resource: 6,
          clientGroup: 'Education District',
        },
        {
          id: 34,
          title: 'Science Lab Electrical Infrastructure',
          start: '2026-05-10',
          end: '2026-06-20',
          resource: 3,
          clientGroup: 'Education District',
        },
        {
          id: 35,
          title: 'Campus Fire Alarm System Certification',
          start: '2026-01-20',
          end: '2026-02-20',
          resource: 6,
          clientGroup: 'Education District',
        },

        // Hospitality Group - Medium group with 7 tasks across 2 employees
        {
          id: 36,
          title: 'Hotel Lobby Climate System Replacement',
          start: '2026-01-13',
          end: '2026-02-25',
          resource: 4,
          clientGroup: 'Hospitality Group',
        },
        {
          id: 37,
          title: 'Commercial Kitchen Exhaust Installation',
          start: '2026-03-05',
          end: '2026-04-20',
          resource: 6,
          clientGroup: 'Hospitality Group',
        },
        {
          id: 38,
          title: 'Pool Area LED Lighting Conversion',
          start: '2026-04-25',
          end: '2026-05-30',
          resource: 4,
          clientGroup: 'Hospitality Group',
        },
        {
          id: 39,
          title: 'Guest Room HVAC Zone Upgrade Project',
          start: '2026-06-05',
          end: '2026-07-20',
          resource: 6,
          clientGroup: 'Hospitality Group',
        },
        {
          id: 40,
          title: 'Conference Center AV & Electrical Setup',
          start: '2026-02-01',
          end: '2026-03-10',
          resource: 4,
          clientGroup: 'Hospitality Group',
        },
        {
          id: 41,
          title: 'Spa Facility Equipment Installation',
          start: '2026-05-05',
          end: '2026-06-10',
          resource: 4,
          clientGroup: 'Hospitality Group',
        },
        {
          id: 42,
          title: 'Ballroom Lighting & Rigging Project',
          start: '2026-06-15',
          end: '2026-07-30',
          resource: 6,
          clientGroup: 'Hospitality Group',
        },

        // Greenfield Medical Center - Small group with 2 tasks across 1 employee
        {
          id: 43,
          title: 'Operating Room HVAC Upgrade',
          start: '2026-01-08',
          end: '2026-03-15',
          resource: 1,
          clientGroup: 'Greenfield Medical Center',
        },
        {
          id: 44,
          title: 'Medical Equipment Power Installation',
          start: '2026-04-10',
          end: '2026-06-20',
          resource: 1,
          clientGroup: 'Greenfield Medical Center',
        },

        // Tech Startup Hub - Small group with 4 tasks across 3 employees
        {
          id: 45,
          title: 'Open Office Climate Control',
          start: '2026-01-05',
          end: '2026-02-10',
          resource: 5,
          clientGroup: 'Tech Startup Hub',
        },
        {
          id: 46,
          title: 'Conference Room AV Setup',
          start: '2026-02-15',
          end: '2026-03-20',
          resource: 7,
          clientGroup: 'Tech Startup Hub',
        },
        {
          id: 47,
          title: 'Server Closet Cooling System',
          start: '2026-03-25',
          end: '2026-04-30',
          resource: 3,
          clientGroup: 'Tech Startup Hub',
        },
        {
          id: 48,
          title: 'Emergency Exit Lighting',
          start: '2026-05-05',
          end: '2026-07-01',
          resource: 7,
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

      var groupedEvents = [];
      var selectedGrouping = 'user';

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

      function groupEventsByClient(events) {
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

          // Group events by 3-month periods
          var periodGroups = {};

          clientEvents.forEach(function (event) {
            var eventStart = new Date(event.start);
            var month = eventStart.getMonth(); // 0-11
            var year = eventStart.getFullYear();

            // Calculate 3-month period (0: Jan-Mar, 1: Apr-Jun, 2: Jul-Sep, 3: Oct-Dec)
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

            var firstEmployee = myResources.find(function (r) {
              return periodEvents.some(function (e) {
                return e.resource === r.id;
              });
            });

            var eventIds = periodEvents
              .map(function (e) {
                return e.id;
              })
              .join('-');

            // Use actual task dates instead of full period dates
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
              color: firstEmployee ? firstEmployee.color : '#64748b',
              count: periodEvents.length,
              originalEvents: periodEvents,
            });
          });
        });

        return result;
      }

      var calendar = $('#demo-event-grouping')
        .mobiscroll()
        .eventcalendar({
          dragToMove: true,
          dragToResize: true,
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
            } else {
              // Client resource - get color from first employee
              var employees = myResources.filter(function (r) {
                return myEvents.some(function (e) {
                  return e.clientGroup === resource.name && e.resource === r.id;
                });
              });

              var color = employees.length > 0 ? employees[0].color : '#64748b';

              var employeeHtml = employees
                .map(function (emp) {
                  return (
                    '<div class="mds-event-grouping-employee-item">' +
                    '<img src="' +
                    emp.img +
                    '" alt="' +
                    emp.name +
                    '" class="mds-event-grouping-employee-avatar" />' +
                    '<span class="mds-event-grouping-employee-name">' +
                    emp.name +
                    '</span>' +
                    '</div>'
                  );
                })
                .join('');

              return (
                '<div class="mds-event-grouping-client-resource">' +
                '<div class="mds-event-grouping-client-header">' +
                '<div class="mds-event-grouping-client-badge" style="background-color: ' +
                color +
                '"></div>' +
                '<div class="mds-event-grouping-client-name">' +
                resource.name +
                '</div>' +
                '</div>' +
                '<div class="mds-event-grouping-employees-list">' +
                employeeHtml +
                '</div>' +
                '</div>'
              );
            }
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">' +
              '<label>' +
              '<input mbsc-input id="event-grouping-input" data-dropdown="true" data-input-style="box" />' +
              '</label>' +
              '<select id="event-grouping-select">' +
              '<option value="user" selected>Assigned User</option>' +
              '<option value="group">Client Group</option>' +
              '</select>' +
              '</div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>'
            );
          },
          onEventUpdate: function (args) {
            var updatedEvent = args.event;
            var oldEvent = args.oldEvent;

            var oldStart = new Date(oldEvent.start).getTime();
            var newStart = new Date(updatedEvent.start).getTime();
            var oldEnd = new Date(oldEvent.end).getTime();
            var newEnd = new Date(updatedEvent.end).getTime();

            var startDelta = newStart - oldStart;
            var endDelta = newEnd - oldEnd;

            var eventsToUpdate = [];

            if (selectedGrouping === 'group') {
              // Find the grouped event that was moved/resized
              var movedGroupedEvent = groupedEvents.find(function (ge) {
                return ge.id === updatedEvent.id;
              });

              if (!movedGroupedEvent) return false;

              var clientGroupName = movedGroupedEvent.clientGroup;

              // Update all events within this grouped event (same 3-month period)
              movedGroupedEvent.originalEvents.forEach(function (originalEvent) {
                var eventInMyEvents = myEvents.find(function (e) {
                  return e.id === originalEvent.id;
                });

                if (eventInMyEvents) {
                  if (startDelta !== 0) {
                    eventInMyEvents.start = new Date(new Date(eventInMyEvents.start).getTime() + startDelta).toISOString().split('T')[0];
                  }
                  if (endDelta !== 0) {
                    eventInMyEvents.end = new Date(new Date(eventInMyEvents.end).getTime() + endDelta).toISOString().split('T')[0];
                  }
                  eventsToUpdate.push(eventInMyEvents);
                }
              });

              // Regenerate grouped events
              groupedEvents = groupEventsByClient(myEvents);

              calendar.setOptions({
                data: groupedEvents,
              });

              mobiscroll.toast({
                message: eventsToUpdate.length + ' event(s) for ' + clientGroupName + ' have been updated.',
              });
            } else {
              eventsToUpdate = myEvents.filter(function (event) {
                return (
                  event.resource === updatedEvent.resource && event.clientGroup === updatedEvent.clientGroup && event.id !== updatedEvent.id
                );
              });

              eventsToUpdate.forEach(function (event) {
                if (startDelta !== 0) {
                  event.start = new Date(new Date(event.start).getTime() + startDelta).toISOString().split('T')[0];
                }
                if (endDelta !== 0) {
                  event.end = new Date(new Date(event.end).getTime() + endDelta).toISOString().split('T')[0];
                }
              });

              calendar.setOptions({
                data: myEvents,
              });

              var resource = myResources.find(function (r) {
                return r.id === updatedEvent.resource;
              });
              var resourceName = resource ? resource.name : 'Unknown';

              if (eventsToUpdate.length > 0) {
                mobiscroll.toast({
                  message:
                    eventsToUpdate.length + 1 + ' event(s) for ' + resourceName + ' (' + updatedEvent.clientGroup + ') have been updated.',
                });
              }
            }

            return true;
          },
        })
        .mobiscroll('getInst');

      $('#event-grouping-select')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('event-grouping-input'),
          touchUi: false,
          onChange: function (args) {
            if (args.value == 'user') {
              groupedEvents = [];
              selectedGrouping = 'user';
              calendar.setOptions({
                data: myEvents,
                resources: myResources,
                renderScheduleEvent: null,
              });
            } else {
              var clientResources = getClientResources();
              groupedEvents = groupEventsByClient(myEvents);
              selectedGrouping = 'group';
              calendar.setOptions({
                data: groupedEvents,
                resources: clientResources,
                renderScheduleEvent: function (event) {
                  var origEvent = event.original;

                  var assignedEmployees = {};
                  origEvent.originalEvents.forEach(function (ev) {
                    var emp = myResources.find(function (r) {
                      return r.id === ev.resource;
                    });
                    if (emp) {
                      assignedEmployees[emp.id] = emp;
                    }
                  });

                  var employeeCount = Object.keys(assignedEmployees).length;

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
                    employeeCount +
                    ' client' +
                    (employeeCount > 1 ? 's' : '') +
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
                },
              });
            }
          },
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
            var employee = myResources.find(function (r) {
              return r.id === ev.resource;
            });
            var employeeName = employee ? employee.name : 'Unknown';

            return (
              '<div class="mds-event-grouping-original-event">' +
              '<div class="mds-event-grouping-event-content">' +
              '<div class="mds-event-grouping-event-title">' +
              ev.title +
              ' <span class="mds-event-grouping-event-employee">· ' +
              employeeName +
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
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-event-grouping-calendar .mbsc-timeline-row {
  height: 140px;
}
.mds-event-grouping-calendar .mbsc-timeline-resource-col {
  width: 240px;
}
.mds-event-grouping-calendar .mbsc-select.mbsc-textfield {
  height: 32px;
  width: 180px;
  padding: 0 16px;
}
.mds-event-grouping-calendar .mbsc-ios.mbsc-textfield-wrapper {
  margin: 12px 12px 12px 28px;
}
.mds-event-grouping-calendar .mbsc-ios.mbsc-select-icon {
  width: 20px;
  height: 20px;
  top: 7px;
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

/* User view - old grouped task styles */
.mds-event-grouping-client {
  font-size: 15px;
  font-weight: 500;
  line-height: 42px;
}
.mds-event-grouping-count {
  font-size: 13px;
  color: #64748b;
}
.mds-event-grouping-info {
  position: absolute;
  top: 10px;
  right: 40px;
  font-size: 12px;
  background: rgba(255,255,255,0.7);
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 400;
  white-space: nowrap;
}

/* Client view specific styling */
.mds-event-grouping-task-client {
  background-color: #f8f9fa;
  border-left-width: 4px;
  border-left-style: solid;
  border-radius: 0 8px 8px 0;
  height: 40px;
  transition: height 0.3s ease-out, padding 0.3s ease-out;
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

.mds-event-grouping-employees-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mds-event-grouping-employee-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.mds-event-grouping-employee-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.mds-event-grouping-employee-name {
  font-size: 12px;
  font-weight: 400;
}
  `,
};
