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
      var displayTasks = function (tasks) {
        var list = '';
        tasks.forEach(function (task) {
          list += '<li class="mds-check-list-tasks-li">' + task + '</li>';
        });
        return list;
      };

      var calInst = $('#demo-check-list-tasks-events')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'week',
              eventHeight: 'variable',
              eventList: true,
            },
          },
          dragToCreate: false,
          clickToCreate: false,
          eventOverlap: false,
          dragToMove: false,
          dragToResize: false,
          renderResource: function (resource) {
            return (
              '<div class="mds-check-list-tasks-resource-name">' +
              resource.name +
              '</div>' +
              '<p class="mds-check-list-tasks-resource-description">' +
              resource.description +
              '</p>'
            );
          },
          renderScheduleEvent: function (event) {
            console.log(event);
            return (
              '<div class="mds-check-list-tasks-event" style="background: ' +
              event.color +
              ';"><div class="mds-check-list-tasks-title" style="color: ' +
              event.style.color +
              ';">' +
              event.title +
              '</div><ul class="mds-check-list-tasks-list">' +
              displayTasks(event.original.tasks) +
              '<li class="mds-check-list-tasks-li mds-check-list-tasks-add" id="demo-check-list-tasks-add-button">ADD TASK</li>' +
              '</ul></div>'
            );
          },
          onEventClick: function (args) {
            console.log(args.domEvent.srcElement.id);
            if (args.domEvent.srcElement.id === 'demo-check-list-tasks-add-button') {
              createEditPopup(args);
            }
          },
          resources: [
            {
              id: 1,
              name: 'Site Plumbing Squad',
              description: 'Elite construction plumbers ensuring flawless pipeline installations on every site.',
              color: '#01adff',
            },
            {
              id: 2,
              name: 'Pipeline Builders',
              description: 'Constructing fluid pathways, one precision connection at a time.',
              color: '#239a21',
            },
            {
              id: 3,
              name: 'Blueprint Plumbers',
              description: 'Turning plans into precise pipelines with expert craftsmanship.',
              color: '#ff4600',
            },
            {
              id: 4,
              name: 'Site Supply Specialists',
              description: 'Delivering essential plumbing materials promptly to construction sites',
              color: '#4981d6',
            },
            {
              id: 5,
              name: 'Infrastructure Installers',
              description: ' Building the backbone of modern plumbing systems efficiently.',
              color: '#f1e920',
            },
            {
              id: 6,
              name: 'Steel Sinks Squad',
              description: 'Installing robust sinks for industrial and commercial settings.',
              color: '#f7961e',
            },
          ],
          data: [
            {
              id: 1,
              start: 'dyndatetime(y,m,d-3)',
              end: 'dyndatetime(y,m,d-1)',
              allDay: true,
              title: 'Underground Pipe Installation',
              tasks: [
                'Excavate trenches for underground pipes',
                'Lay PVC or PEX pipes for water supply and drainage',
                'Inspect pipes for proper alignment and slope',
              ],
              resource: 1,
            },
            {
              id: 2,
              start: 'dyndatetime(y,m,d)',
              end: 'dyndatetime(y,m,d+2)',
              allDay: true,
              title: 'Fixture Installation',
              tasks: [
                'Install sinks, toilets, and bathtubs in bathrooms',
                'Install kitchen sinks and faucets',
                'Connect fixtures to water supply and drainage lines',
                'Install showerheads and valves',
                'Test fixtures for proper function',
                'Caulk fixtures as needed',
              ],
              resource: 1,
            },
            {
              id: 3,
              start: 'dyndatetime(y,m,d+3)',
              end: 'dyndatetime(y,m,d+4)',
              allDay: true,
              title: 'Water Heater Installation',
              tasks: [
                'Install water heater unit in designated location',
                'Connect water heater to main water supply line',
                'Connect water heater to hot water distribution lines',
                'Install temperature and pressure relief valve',
                'Test water heater for proper operation',
              ],
              resource: 1,
            },
            {
              id: 4,
              start: 'dyndatetime(y,m,d+5)',
              end: 'dyndatetime(y,m,d+6)',
              allDay: true,
              title: 'Gas Line Installation',
              tasks: [
                'Plan layout for gas lines to kitchen and heating systems',
                'Install gas pipes in designated locations',
                'Test gas lines for leaks',
                'Secure gas lines to structure',
              ],
              resource: 1,
            },
            {
              id: 5,
              start: 'dyndatetime(y,m,d+7)',
              end: 'dyndatetime(y,m,d+7)',
              allDay: true,
              title: 'Backflow Preventer Installation',
              tasks: [
                'Install backflow preventer device near main water supply connection',
                'Connect backflow preventer to water supply line',
                'Test backflow preventer for proper operation',
              ],
              resource: 1,
            },
            {
              id: 6,
              start: 'dyndatetime(y,m,d-3)',
              end: 'dyndatetime(y,m,d)',
              allDay: true,
              title: 'Water Meter Installation',
              tasks: [
                'Install water meter in designated location',
                'Connect water meter to main water supply line',
                'Test water meter for accurate measurement',
                'Install remote meter reading device',
                'Secure meter in place',
                'Document meter installation for billing purposes',
              ],
              resource: 2,
            },
            {
              id: 7,
              start: 'dyndatetime(y,m,d+1)',
              end: 'dyndatetime(y,m,d+4)',
              allDay: true,
              title: 'Sump Pump Installation',
              tasks: [
                'Dig sump pit in basement or crawlspace',
                'Install sump pump unit in sump pit',
                'Connect sump pump to drainage system',
              ],
              resource: 2,
            },
            {
              id: 8,
              start: 'dyndatetime(y,m,d+5)',
              end: 'dyndatetime(y,m,d+7)',
              allDay: true,
              title: 'Water Filtration System Installation',
              tasks: [
                'Install water filtration unit in utility room or basement',
                'Connect filtration system to main water supply line',
                'Test water filtration system for proper operation',
                'Set up filter replacement schedule',
                'Educate occupants on filter maintenance',
                'Provide water quality testing services',
              ],
              resource: 2,
            },
            {
              id: 9,
              start: 'dyndatetime(y,m,d-3)',
              end: 'dyndatetime(y,m,d-1)',
              allDay: true,
              title: 'Stormwater Management System Installation',
              tasks: [
                'Install stormwater drainage pipes around building perimeter',
                'Connect stormwater pipes to municipal storm drain system',
                'Install catch basins and grates as needed',
                'Set up sediment traps to prevent pollution',
                'Test stormwater system for proper drainage',
                'Provide stormwater management plan for site',
              ],
              resource: 3,
            },
            {
              id: 10,
              start: 'dyndatetime(y,m,d)',
              end: 'dyndatetime(y,m,d+3)',
              allDay: true,
              title: 'Hot Water Recirculation System Installation',
              tasks: [
                'Install recirculation pump near water heater',
                'Connect recirculation pump to hot water distribution lines',
                'Test recirculation system for proper operation',
              ],
              resource: 3,
            },
            {
              id: 11,
              start: 'dyndatetime(y,m,d+4)',
              end: 'dyndatetime(y,m,d+7)',
              allDay: true,
              title: 'Grease Trap Installation',
              tasks: [
                'Dig trench for grease trap installation',
                'Install grease trap unit in designated location',
                'Connect grease trap to drainage system from kitchen fixtures',
                'Test grease trap for proper function',
                'Install access hatch for maintenance',
              ],
              resource: 3,
            },
            {
              id: 12,
              start: 'dyndatetime(y,m,d-3)',
              end: 'dyndatetime(y,m,d)',
              allDay: true,
              title: 'Septic System Installation',
              tasks: [
                'Excavate area for septic tank and drain field',
                'Install septic tank and distribution box',
                'Lay perforated pipes in drain field trenches',
              ],
              resource: 4,
            },
            {
              id: 13,
              start: 'dyndatetime(y,m,d+1)',
              end: 'dyndatetime(y,m,d+2)',
              allDay: true,
              title: 'Water Softener Installation',
              tasks: [
                'Install water softener unit in utility room or basement',
                'Connect water softener to main water supply line',
                'Set up brine tank for regeneration process',
                'Adjust water softener settings for hardness levels',
                'Test water softener for effectiveness',
                'Provide water softener operation manual',
              ],
              resource: 4,
            },
            {
              id: 14,
              start: 'dyndatetime(y,m,d+3)',
              end: 'dyndatetime(y,m,d+5)',
              allDay: true,
              title: 'Water Main Connection',
              tasks: [
                'Locate municipal water main connection point',
                'Dig trench to expose water main line',
                "Connect building's water supply line to municipal water main",
              ],
              resource: 4,
            },
            {
              id: 15,
              start: 'dyndatetime(y,m,d+6)',
              end: 'dyndatetime(y,m,d+7)',
              allDay: true,
              title: 'Hydronic Heating System Installation',
              tasks: [
                'Install boiler unit in utility room or basement',
                'Lay radiant heating pipes in floors or walls',
                'Connect hydronic heating system to main water supply',
              ],
              resource: 4,
            },
            {
              id: 16,
              start: 'dyndatetime(y,m,d-3)',
              end: 'dyndatetime(y,m,d+1)',
              allDay: true,
              title: 'Gas Appliance Installation',
              tasks: [
                'Install gas lines to kitchen appliances (e.g., range, oven)',
                'Connect gas lines to heating units (e.g., furnace, water heater)',
                'Test gas appliances for proper function and safety',
                'Check gas pressure and adjust as needed',
                'Ensure proper ventilation for gas appliances',
                'Provide appliance operation manual to occupants',
              ],
              resource: 5,
            },
            {
              id: 17,
              start: 'dyndatetime(y,m,d+2)',
              end: 'dyndatetime(y,m,d+3)',
              allDay: true,
              title: 'Water Feature Installation',
              tasks: [
                'Install water feature (e.g., fountain, pond) on building site',
                'Connect water feature to main water supply line',
                'Test water feature for proper operation',
              ],
              resource: 5,
            },
            {
              id: 18,
              start: 'dyndatetime(y,m,d+4)',
              end: 'dyndatetime(y,m,d+4)',
              allDay: true,
              title: 'Plumbing System Flushing',
              tasks: [
                'Flush water supply lines to remove debris or sediment',
                'Flush hot water tank to remove sediment buildup',
                'Test water quality after flushing',
                'Install whole-house water filter system',
                'Perform chemical flush to remove mineral deposits',
                'Educate occupants on flushing frequency and benefits',
              ],
              resource: 5,
            },
            {
              id: 19,
              start: 'dyndatetime(y,m,d+5)',
              end: 'dyndatetime(y,m,d+7)',
              allDay: true,
              title: 'Emergency Shut-Off Valve Installation',
              tasks: [
                "Install shut-off valves on building's main water supply line",
                'Install shut-off valves at strategic points throughout building',
                'Label shut-off valves for easy identification',
              ],
              resource: 5,
            },
            {
              id: 20,
              start: 'dyndatetime(y,m,d-3)',
              end: 'dyndatetime(y,m,d-3)',
              allDay: true,
              title: 'Water Quality Testing',
              tasks: [
                'Collect water samples from various points in building',
                'Test water samples for contaminants (e.g., bacteria, lead)',
                'Provide water quality report and recommendations',
                'Install water filtration or purification system as needed',
                'Schedule regular water quality testing and maintenance',
                'Educate occupants on interpreting water quality test results',
              ],
              resource: 6,
            },
            {
              id: 21,
              start: 'dyndatetime(y,m,d-2)',
              end: 'dyndatetime(y,m,d+1)',
              allDay: true,
              title: 'Plumbing System Ventilation Installation',
              tasks: [
                'Install vent pipes to allow proper air flow in drainage system',
                'Connect vent pipes to main drain stack or sewer line',
                'Test ventilation system for proper function',
                'Ensure proper vent pipe sizing and placement',
                'Seal vent pipe connections to prevent leaks',
                'Educate occupants on importance of plumbing system ventilation',
              ],
              resource: 6,
            },
            {
              id: 22,
              start: 'dyndatetime(y,m,d+2)',
              end: 'dyndatetime(y,m,d+3)',
              allDay: true,
              title: 'Plumbing System Retrofitting for Accessibility',
              tasks: [
                'Install grab bars and handrails in bathrooms',
                'Lower sink heights for wheelchair accessibility',
                'Install lever-style faucets for easier operation',
              ],
              resource: 6,
            },
            {
              id: 23,
              start: 'dyndatetime(y,m,d+4)',
              end: 'dyndatetime(y,m,d+7)',
              allDay: true,
              title: 'Plumbing System Monitoring Installation',
              tasks: [
                'Install water leak detection sensors in key areas',
                "Connect sensors to building's monitoring system",
                'Test sensors for accurate detection',
                'Set up alerts for abnormal water usage or leaks',
                'Provide training on monitoring system operation',
                'Conduct regular system checks and maintenance',
              ],
              resource: 6,
            },
          ],
        })
        .mobiscroll('getInst');

      function createEditPopup(args) {
        var ev = args.event;
        mobiscroll.prompt({
          title: 'Add new task to ' + ev.title,
          inputType: 'text',
          callback: function (value) {
            if (value) {
              var updatedTasks = ev.tasks.slice();
              updatedTasks.push(value);
              ev.tasks = updatedTasks;
              calInst.updateEvent(ev);
              mobiscroll.toast({
                duration: 3000,
                message: 'Tasks updated for ' + ev.title,
              });
            }
          },
        });
      }
      // TODO CDN integration
      //   $.getJSON(
      //     'https://trial.mobiscroll.com/timeline-events/?callback=?',
      //     function (events) {
      //       inst.setEvents(events);
      //     },
      //     'jsonp',
      //   );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-check-list-tasks-events"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
  .mds-check-list-tasks-resource-name {
    padding: 12px 0 0 0;
    font-size: 16px;
    font-weight: 700;
  }
  .mds-check-list-tasks-resource-description {
    color: #888;
  }
  .mds-check-list-tasks-event {
    padding: 1em;
  }
  .mds-check-list-tasks-event:hover {
    cursor: context-menu;
  }
  .mds-check-list-tasks-title {
    white-space: normal;
    word-break: normal;
    line-height: 16px;
    font-size: 16px;
    font-weight: 700;
  }
  .mds-check-list-tasks-list {
    list-style-type: none;
    margin: 0 !important;
    padding: 16px 0 8px 0 !important;
    white-space: normal;
    font-size: 12px;
    line-height: 20px !important;
  }
  .mds-check-list-tasks-li {
    padding: 0 4px 0 4px;
  }
  .mds-check-list-tasks-li:nth-child(odd) {
    background-color: #fff;
    color: #888;
  }
  .mds-check-list-tasks-li:nth-child(even) {
    background-color: #778899;
    color: #fff;
  }
  .mds-check-list-tasks-add {
    display: inline-block;
    font-style: italic;
    cursor: pointer;
  }
  .mds-check-list-tasks-add:hover {
    font-weight: 600;
  }
  .mbsc-timeline-events-track {
    display: flex;
  }
  `,
};
