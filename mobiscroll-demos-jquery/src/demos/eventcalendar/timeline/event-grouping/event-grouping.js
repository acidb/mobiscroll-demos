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
        // Healthcare Partners work orders
        {
          id: 1,
          title: 'HVAC System Overhaul - Building A',
          start: '2026-01-15',
          end: '2026-02-10',
          resource: 1,
          clientGroup: 'Healthcare Partners',
          workOrderNumber: 'WO-001',
        },
        {
          id: 2,
          title: 'Complete Electrical System Inspection',
          start: '2026-02-15',
          end: '2026-03-05',
          resource: 1,
          clientGroup: 'Healthcare Partners',
          workOrderNumber: 'WO-002',
        },
        {
          id: 3,
          title: 'ICU Plumbing Infrastructure Renovation',
          start: '2026-03-10',
          end: '2026-04-15',
          resource: 2,
          clientGroup: 'Healthcare Partners',
          workOrderNumber: 'WO-003',
        },
        {
          id: 4,
          title: 'Fire Safety System Upgrade & Testing',
          start: '2026-04-20',
          end: '2026-05-30',
          resource: 4,
          clientGroup: 'Healthcare Partners',
          workOrderNumber: 'WO-004',
        },
        {
          id: 5,
          title: 'Emergency Generator Complete Overhaul',
          start: '2026-06-01',
          end: '2026-07-10',
          resource: 1,
          clientGroup: 'Healthcare Partners',
          workOrderNumber: 'WO-005',
        },
        {
          id: 6,
          title: 'Boiler Room Equipment Replacement',
          start: '2026-03-15',
          end: '2026-04-10',
          resource: 1,
          clientGroup: 'Healthcare Partners',
          workOrderNumber: 'WO-006',
        },

        // Tech Solutions Inc work orders
        {
          id: 7,
          title: 'Server Room HVAC Installation Project',
          start: '2026-01-10',
          end: '2026-02-20',
          resource: 3,
          clientGroup: 'Tech Solutions Inc',
          workOrderNumber: 'WO-007',
        },
        {
          id: 8,
          title: 'Data Center Cable Infrastructure Upgrade',
          start: '2026-02-25',
          end: '2026-04-10',
          resource: 3,
          clientGroup: 'Tech Solutions Inc',
          workOrderNumber: 'WO-008',
        },
        {
          id: 9,
          title: 'Power Distribution System Modernization',
          start: '2026-04-15',
          end: '2026-06-05',
          resource: 6,
          clientGroup: 'Tech Solutions Inc',
          workOrderNumber: 'WO-009',
        },
        {
          id: 10,
          title: 'Backup Power System Implementation',
          start: '2026-06-10',
          end: '2026-07-20',
          resource: 3,
          clientGroup: 'Tech Solutions Inc',
          workOrderNumber: 'WO-010',
        },
        {
          id: 11,
          title: 'Data Center Deep Cleaning & Maintenance',
          start: '2026-03-01',
          end: '2026-03-25',
          resource: 6,
          clientGroup: 'Tech Solutions Inc',
          workOrderNumber: 'WO-011',
        },
        {
          id: 12,
          title: 'Network Equipment Room Cooling Upgrade',
          start: '2026-01-20',
          end: '2026-02-15',
          resource: 3,
          clientGroup: 'Tech Solutions Inc',
          workOrderNumber: 'WO-012',
        },

        // Retail Dynamics work orders
        {
          id: 13,
          title: 'Storefront LED Lighting Conversion',
          start: '2026-01-12',
          end: '2026-02-05',
          resource: 5,
          clientGroup: 'Retail Dynamics',
          workOrderNumber: 'WO-013',
        },
        {
          id: 14,
          title: 'Parking Lot Lighting System Replacement',
          start: '2026-02-10',
          end: '2026-03-20',
          resource: 7,
          clientGroup: 'Retail Dynamics',
          workOrderNumber: 'WO-014',
        },
        {
          id: 15,
          title: 'Store-wide HVAC Filter & Duct Cleaning',
          start: '2026-03-25',
          end: '2026-04-20',
          resource: 5,
          clientGroup: 'Retail Dynamics',
          workOrderNumber: 'WO-015',
        },
        {
          id: 16,
          title: 'Automatic Door System Replacement',
          start: '2026-04-25',
          end: '2026-05-25',
          resource: 7,
          clientGroup: 'Retail Dynamics',
          workOrderNumber: 'WO-016',
        },
        {
          id: 17,
          title: 'Complete Security System Installation',
          start: '2026-05-28',
          end: '2026-07-15',
          resource: 5,
          clientGroup: 'Retail Dynamics',
          workOrderNumber: 'WO-017',
        },
        {
          id: 18,
          title: 'Rooftop HVAC Units Replacement Project',
          start: '2026-02-15',
          end: '2026-03-15',
          resource: 7,
          clientGroup: 'Retail Dynamics',
          workOrderNumber: 'WO-018',
        },
        {
          id: 19,
          title: 'Point of Sale Electrical Infrastructure',
          start: '2026-01-08',
          end: '2026-01-30',
          resource: 5,
          clientGroup: 'Retail Dynamics',
          workOrderNumber: 'WO-019',
        },
        {
          id: 20,
          title: 'Emergency Lighting System Certification',
          start: '2026-06-15',
          end: '2026-07-10',
          resource: 7,
          clientGroup: 'Retail Dynamics',
          workOrderNumber: 'WO-020',
        },

        // Financial Services Co work orders
        {
          id: 21,
          title: 'Branch Office HVAC Modernization',
          start: '2026-01-14',
          end: '2026-02-25',
          resource: 2,
          clientGroup: 'Financial Services Co',
          workOrderNumber: 'WO-021',
        },
        {
          id: 22,
          title: 'ATM Facility Climate Control Installation',
          start: '2026-03-01',
          end: '2026-04-10',
          resource: 4,
          clientGroup: 'Financial Services Co',
          workOrderNumber: 'WO-022',
        },
        {
          id: 23,
          title: 'Corporate Office Lighting Retrofit',
          start: '2026-04-15',
          end: '2026-05-30',
          resource: 2,
          clientGroup: 'Financial Services Co',
          workOrderNumber: 'WO-023',
        },
        {
          id: 24,
          title: 'Emergency Exit Systems Compliance Upgrade',
          start: '2026-06-05',
          end: '2026-07-05',
          resource: 4,
          clientGroup: 'Financial Services Co',
          workOrderNumber: 'WO-024',
        },
        {
          id: 25,
          title: 'Vault Environmental Control System',
          start: '2026-02-28',
          end: '2026-03-25',
          resource: 2,
          clientGroup: 'Financial Services Co',
          workOrderNumber: 'WO-025',
        },
        {
          id: 26,
          title: 'Trading Floor HVAC Complete Renovation',
          start: '2026-01-05',
          end: '2026-02-10',
          resource: 2,
          clientGroup: 'Financial Services Co',
          workOrderNumber: 'WO-026',
        },

        // Manufacturing Plus work orders
        {
          id: 27,
          title: 'Warehouse High-Bay Lighting Installation',
          start: '2026-01-11',
          end: '2026-02-15',
          resource: 8,
          clientGroup: 'Manufacturing Plus',
          workOrderNumber: 'WO-027',
        },
        {
          id: 28,
          title: 'Industrial Compressor System Overhaul',
          start: '2026-02-20',
          end: '2026-04-05',
          resource: 8,
          clientGroup: 'Manufacturing Plus',
          workOrderNumber: 'WO-028',
        },
        {
          id: 29,
          title: 'Loading Dock Door Automation Project',
          start: '2026-04-10',
          end: '2026-05-10',
          resource: 8,
          clientGroup: 'Manufacturing Plus',
          workOrderNumber: 'WO-029',
        },
        {
          id: 30,
          title: 'Factory Ventilation System Upgrade',
          start: '2026-05-15',
          end: '2026-06-30',
          resource: 8,
          clientGroup: 'Manufacturing Plus',
          workOrderNumber: 'WO-030',
        },
        {
          id: 31,
          title: 'Main Electrical Panel Replacement Project',
          start: '2026-03-05',
          end: '2026-04-20',
          resource: 8,
          clientGroup: 'Manufacturing Plus',
          workOrderNumber: 'WO-031',
        },
        {
          id: 32,
          title: 'Production Floor Lighting Modernization',
          start: '2026-01-15',
          end: '2026-02-10',
          resource: 8,
          clientGroup: 'Manufacturing Plus',
          workOrderNumber: 'WO-032',
        },
        {
          id: 33,
          title: 'Overhead Crane Electrical Certification',
          start: '2026-06-10',
          end: '2026-07-15',
          resource: 8,
          clientGroup: 'Manufacturing Plus',
          workOrderNumber: 'WO-033',
        },
        {
          id: 34,
          title: 'Production Line Power Infrastructure',
          start: '2026-04-25',
          end: '2026-05-30',
          resource: 8,
          clientGroup: 'Manufacturing Plus',
          workOrderNumber: 'WO-034',
        },
        {
          id: 35,
          title: 'Chiller Plant Annual Overhaul',
          start: '2026-02-18',
          end: '2026-03-15',
          resource: 8,
          clientGroup: 'Manufacturing Plus',
          workOrderNumber: 'WO-035',
        },

        // Education Systems work orders
        {
          id: 36,
          title: 'Classroom Building HVAC Renovation',
          start: '2026-01-16',
          end: '2026-02-28',
          resource: 3,
          clientGroup: 'Education Systems',
          workOrderNumber: 'WO-036',
        },
        {
          id: 37,
          title: 'Gymnasium Lighting System Replacement',
          start: '2026-04-20',
          end: '2026-05-25',
          resource: 3,
          clientGroup: 'Education Systems',
          workOrderNumber: 'WO-037',
        },
        {
          id: 38,
          title: 'Auditorium Climate Control Installation',
          start: '2026-03-09',
          end: '2026-05-05',
          resource: 6,
          clientGroup: 'Education Systems',
          workOrderNumber: 'WO-038',
        },
        {
          id: 39,
          title: 'Science Lab Electrical Infrastructure',
          start: '2026-05-10',
          end: '2026-06-20',
          resource: 3,
          clientGroup: 'Education Systems',
          workOrderNumber: 'WO-039',
        },
        {
          id: 40,
          title: 'Cafeteria Kitchen Exhaust System Upgrade',
          start: '2026-06-25',
          end: '2026-07-25',
          resource: 6,
          clientGroup: 'Education Systems',
          workOrderNumber: 'WO-040',
        },
        {
          id: 41,
          title: 'Library HVAC Complete Modernization',
          start: '2026-05-10',
          end: '2026-06-30',
          resource: 6,
          clientGroup: 'Education Systems',
          workOrderNumber: 'WO-041',
        },
        {
          id: 42,
          title: 'Campus Fire Alarm System Certification',
          start: '2026-01-20',
          end: '2026-02-20',
          resource: 3,
          clientGroup: 'Education Systems',
          workOrderNumber: 'WO-042',
        },

        // Hospitality Group work orders
        {
          id: 43,
          title: 'Hotel Lobby Climate System Replacement',
          start: '2026-01-13',
          end: '2026-02-25',
          resource: 4,
          clientGroup: 'Hospitality Group',
          workOrderNumber: 'WO-043',
        },
        {
          id: 44,
          title: 'Commercial Kitchen Exhaust Installation',
          start: '2026-03-05',
          end: '2026-04-20',
          resource: 6,
          clientGroup: 'Hospitality Group',
          workOrderNumber: 'WO-044',
        },
        {
          id: 45,
          title: 'Pool Area LED Lighting Conversion',
          start: '2026-04-25',
          end: '2026-05-30',
          resource: 4,
          clientGroup: 'Hospitality Group',
          workOrderNumber: 'WO-045',
        },
        {
          id: 46,
          title: 'Guest Room HVAC Zone Upgrade Project',
          start: '2026-06-05',
          end: '2026-07-20',
          resource: 6,
          clientGroup: 'Hospitality Group',
          workOrderNumber: 'WO-046',
        },
        {
          id: 47,
          title: 'Conference Center AV & Electrical Setup',
          start: '2026-02-01',
          end: '2026-03-10',
          resource: 4,
          clientGroup: 'Hospitality Group',
          workOrderNumber: 'WO-047',
        },
        {
          id: 48,
          title: 'Parking Structure Electrical Modernization',
          start: '2026-03-15',
          end: '2026-04-30',
          resource: 6,
          clientGroup: 'Hospitality Group',
          workOrderNumber: 'WO-048',
        },
        {
          id: 49,
          title: 'Spa Facility Equipment Installation',
          start: '2026-05-05',
          end: '2026-06-10',
          resource: 4,
          clientGroup: 'Hospitality Group',
          workOrderNumber: 'WO-049',
        },
        {
          id: 50,
          title: 'Ballroom Lighting & Rigging Project',
          start: '2026-06-15',
          end: '2026-07-30',
          resource: 6,
          clientGroup: 'Hospitality Group',
          workOrderNumber: 'WO-050',
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

      function groupEventsByResourceAndClient(events, resources) {
        var groups = {};
        var result = [];

        // Group events by resource and clientGroup
        events.forEach(function (event) {
          var resourceId = event.resource;
          if (!groups[resourceId]) groups[resourceId] = {};
          if (!groups[resourceId][event.clientGroup]) groups[resourceId][event.clientGroup] = [];
          groups[resourceId][event.clientGroup].push(event);
        });

        // Create grouped events
        Object.keys(groups).forEach(function (resourceId) {
          var resource = resources.find(function (r) {
            return r.id === +resourceId;
          });
          var resourceColor = resource ? resource.color : '#cccccc';

          Object.keys(groups[resourceId]).forEach(function (clientGroup) {
            var events = groups[resourceId][clientGroup].sort(function (a, b) {
              return a.start < b.start ? -1 : a.start > b.start ? 1 : 0;
            });

            var eventIds = events
              .map(function (e) {
                return e.id;
              })
              .join('-');

            result.push({
              id: 'group-' + resourceId + '-' + eventIds,
              resource: +resourceId,
              clientGroup: clientGroup,
              start: events[0].start,
              end: events[events.length - 1].end,
              color: resourceColor,
              count: events.length,
              originalEvents: events,
            });
          });
        });

        return result;
      }

      var calendar = $('#demo-event-grouping')
        .mobiscroll()
        .eventcalendar({
          // drag,
          dragToMove: true,
          view: {
            timeline: {
              type: 'year',
              resolutionHorizontal: 'month',
            },
          },
          data: myEvents,
          resources: myResources,
          renderResource: function (resource) {
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
              calendar.setOptions({
                data: myEvents,
                renderScheduleEvent: null,
              });
            } else {
              groupedEvents = groupEventsByResourceAndClient(calendar.getEvents(), myResources);
              calendar.setOptions({
                data: groupedEvents,
                renderScheduleEvent: function (event) {
                  var origEvent = event.original;
                  return (
                    '<div class="mds-event-grouping-task" style="border: 2px solid ' +
                    origEvent.color +
                    '"><div class="mds-event-grouping-client">' +
                    origEvent.clientGroup +
                    '</div><div class="mds-event-grouping-info"><div>' +
                    mobiscroll.formatDate('DD MMM', new Date(origEvent.start)) +
                    ' - ' +
                    mobiscroll.formatDate('DD MMM', new Date(origEvent.end)) +
                    '</div><div class="mds-event-grouping-count">' +
                    origEvent.count +
                    (origEvent.count > 1 ? ' tasks' : ' task') +
                    '</div></div><div id="mds-event-grouping-icon-' +
                    origEvent.id +
                    '" class="mds-event-grouping-icon mbsc-icon mbsc-font-icon mbsc-icon-material-keyboard-arrow-down"></div>' +
                    '<div id="mds-event-grouping-events-' +
                    origEvent.id +
                    '" class="mds-event-grouping-events"></div></div>'
                  );
                },
              });
            }
          },
        });

      // Toggle expand/collapse for grouped events
      $(document).on('click', '.mds-event-grouping-icon', function (event) {
        // Get the group ID from the icon
        var iconId = event.currentTarget.id;
        var groupId = iconId.replace('mds-event-grouping-icon-', '');

        // Find the grouped event data
        var groupedEvent = groupedEvents.find(function (e) {
          return e.id === groupId;
        });

        if (!groupedEvent) return;

        // Get DOM elements
        var icon = event.currentTarget;
        var container = $(icon).closest('.mds-event-grouping-task')[0];
        var scheduleEvent = $(icon).closest('.mbsc-schedule-event')[0];
        var eventsDiv = $('#mds-event-grouping-events-' + groupId)[0];

        if (!container || !scheduleEvent || !eventsDiv) return;

        var isExpanded = container.classList.contains('expanded');

        if (isExpanded) {
          // Collapse
          collapse(container, scheduleEvent, eventsDiv, icon);
        } else {
          // Expand
          expand(container, scheduleEvent, eventsDiv, icon, groupedEvent);
        }
      });

      function expand(container, scheduleEvent, eventsDiv, icon, groupedEvent) {
        var html = groupedEvent.originalEvents
          .map(function (ev) {
            return (
              '<div class="mds-event-grouping-original-event">' +
              '<div><b>' +
              ev.title +
              '</b> - <span>' +
              mobiscroll.formatDate('DD MMM', new Date(ev.start)) +
              ' - ' +
              mobiscroll.formatDate('DD MMM', new Date(ev.end)) +
              '</span></div>' +
              '</div>'
            );
          })
          .join('');

        // Add content first
        eventsDiv.innerHTML = html;
        eventsDiv.style.display = 'block';

        // Measure heights
        var collapsedHeight = container.offsetHeight;
        container.style.height = 'auto';
        var expandedHeight = container.offsetHeight;
        container.style.height = collapsedHeight + 'px';

        // Trigger expansion
        container.classList.add('expanded');
        scheduleEvent.style.zIndex = '3';

        // Force reflow
        container.offsetHeight;

        // Animate
        container.style.height = expandedHeight + 'px';

        toggleIcon(icon, true);
      }

      function collapse(container, scheduleEvent, eventsDiv, icon) {
        // Lock current expanded height
        var currentHeight = container.offsetHeight;
        container.style.height = currentHeight + 'px';

        // Force reflow
        container.offsetHeight;

        // Remove expanded class - this triggers CSS fade out
        container.classList.remove('expanded');
        scheduleEvent.style.zIndex = '';

        // Animate to 65px (the CSS collapsed height)
        container.style.height = '65px';

        // Clean up AFTER animation completes
        setTimeout(function () {
          eventsDiv.innerHTML = '';
          eventsDiv.style.display = 'none';
          container.style.height = '';
        }, 250);

        toggleIcon(icon, false);
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
.mds-event-grouping-task {
  position: relative;
  border-radius: 8px;
  padding: 10px 14px;
  background-color: #e1e1e1;
  min-width: 400px;
  height: 65px;
  box-sizing: border-box;
  overflow: hidden;
  transition: height 0.25s ease-out;
}
.mds-event-grouping-task.expanded {
  overflow: visible;
}
.mds-event-grouping-events {
  transition: opacity 0.15s ease-out;
}
.mds-event-grouping-task:not(.expanded) .mds-event-grouping-events {
  opacity: 0;
  transition: opacity 0.15s ease-out;
  pointer-events: none;
}
.mds-event-grouping-task.expanded .mds-event-grouping-events {
  opacity: 1;
  transition: opacity 0.15s ease-in 0.1s;
}
.mds-event-grouping-original-event {
  background: #fff;
  border-radius: 6px;
  margin: 6px 0 0 0;
  padding: 8px 12px;
  font-size: 13px;
  box-sizing: border-box;
}
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
.mds-event-grouping-icon {
  position: absolute;
  top: 10px;
  right: 0;
  font-size: 26px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease-out;
}
  `,
};
