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
      var $popupElm = $('#demo-filtering-popup');
      var initialSortColumn;
      var initialSortDirection;
      var sortColumn = 'availability';
      var sortDirection = 'asc';
      var selectedMetric = 'availability';
      var selectedMetricDesc = 'Standby Time';
      var loadedEvents;

      var myEvents = [
        {
          start: 'dyndatetime(y,m,d+4)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #001 - New York to Los Angeles',
          resource: 7,
          color: '#FF5733',
          payload: 20,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #003 - Philadelphia to Phoenix',
          resource: 9,
          color: '#33FF57',
          payload: 0,
        },
        {
          start: 'dyndatetime(y,m,d-4)',
          end: 'dyndatetime(y,m,d+1)',
          title: 'Tour #004 - San Antonio to San Diego',
          resource: 10,
          color: '#3357FF',
          payload: 15,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #005 - Dallas to San Francisco',
          resource: 7,
          color: '#FF5733',
          payload: 18,
        },
        {
          start: 'dyndatetime(y,m,d+4)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #006 - Los Angeles to Chicago',
          resource: 8,
          color: '#FF33A6',
          payload: 10,
        },
        {
          start: 'dyndatetime(y,m,d+3)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #007 - Houston to New York',
          resource: 9,
          color: '#33FF57',
          payload: 0,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #009 - San Diego to Dallas',
          resource: 7,
          color: '#FF5733',
          payload: 16,
        },
        {
          start: 'dyndatetime(y,m,d-2)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #010 - San Francisco to Los Angeles',
          resource: 8,
          color: '#FF33A6',
          payload: 0,
        },
        {
          start: 'dyndatetime(y,m,d-1)',
          end: 'dyndatetime(y,m,d+3)',
          title: 'Tour #013 - Miami to Seattle',
          resource: 1,
          color: '#FF9933',
          payload: 25,
        },
        {
          start: 'dyndatetime(y,m,d+1)',
          end: 'dyndatetime(y,m,d+3)',
          title: 'Tour #014 - Denver to Boston',
          resource: 2,
          color: '#33FFA6',
          payload: 18,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+3)',
          title: 'Tour #015 - Orlando to Austin',
          resource: 3,
          color: '#9933FF',
          payload: 20,
        },
        {
          start: 'dyndatetime(y,m,d+1)',
          end: 'dyndatetime(y,m,d+4)',
          title: 'Tour #016 - Detroit to Baltimore',
          resource: 4,
          color: '#33A6FF',
          payload: 0,
        },
        {
          start: 'dyndatetime(y,m,d+2)',
          end: 'dyndatetime(y,m,d+5)',
          title: 'Tour #017 - Las Vegas to Portland',
          resource: 5,
          color: '#FF5733',
          payload: 20,
        },
        {
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d+3)',
          title: 'Tour #018 - Atlanta to Kansas City',
          resource: 6,
          color: '#33FF99',
          payload: 0,
        },
        {
          start: 'dyndatetime(y,m,d-4,11)',
          end: 'dyndatetime(y,m,d)',
          title: 'Tour #018 - ? to Atlanta',
          resource: 6,
          color: '#33FF99',
          payload: 14,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+4)',
          title: 'Tour #019 - Charlotte to Indianapolis',
          resource: 7,
          color: '#FF5733',
          payload: 22,
        },
        {
          start: 'dyndatetime(y,m,d+3)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #022 - Cleveland to Cincinnati',
          resource: 10,
          color: '#3357FF',
          payload: 17,
        },
        {
          start: 'dyndatetime(y,m,d-4)',
          end: 'dyndatetime(y,m,d+1)',
          title: 'Tour #023 - Boston to Philadelphia',
          resource: 11,
          color: '#FF9933',
          payload: 19,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #024 - Las Vegas to San Diego',
          resource: 12,
          color: '#33FF57',
          payload: 28,
        },
        {
          start: 'dyndatetime(y,m,d-3)',
          end: 'dyndatetime(y,m,d)',
          title: 'Tour #025 - Miami to Charlotte',
          resource: 13,
          color: '#9933FF',
          payload: 26,
        },
        {
          start: 'dyndatetime(y,m,d+2)',
          end: 'dyndatetime(y,m,d+5)',
          title: 'Tour #026 - Seattle to Portland',
          resource: 14,
          color: '#33A6FF',
          payload: 12,
        },
        {
          start: 'dyndatetime(y,m,d-1)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #027 - Atlanta to Orlando',
          resource: 15,
          color: '#FF5733',
          payload: 17,
        },
        {
          start: 'dyndatetime(y,m,d-4)',
          end: 'dyndatetime(y,m,d-1)',
          title: 'Tour #028 - ? to Philadelphiax',
          resource: 9,
          color: '#33FF57',
          payload: 10,
        },
      ];

      var myResources = [
        { id: 1, name: 'NY-TRK-1200', capacity: 25, location: 'New York', model: 'Renault Magnum' },
        { id: 2, name: 'LA-TRK-0090', capacity: 18, location: 'Los Angeles', model: 'Mercedes Actros' },
        { id: 3, name: 'CH-TRK-0700', capacity: 22, location: 'Phoenix', model: 'Scania R500' },
        { id: 4, name: 'HO-TRK-0850', capacity: 28, location: 'Houston', model: 'Volvo FH16' },
        { id: 5, name: 'PH-TRK-0900', capacity: 24, location: 'Chicago', model: 'MAN TGX' },
        { id: 6, name: 'PA-TRK-0300', capacity: 15, location: 'Philadelphia', model: 'Renault T High' },
        { id: 8, name: 'SD-TRK-0250', capacity: 12, location: 'San Francisco', model: 'Mercedes Arocs' },
        { id: 9, name: 'DA-TRK-0400', capacity: 20, location: 'Dallas', model: 'DAF XF' },
        { id: 10, name: 'SF-TRK-0550', capacity: 17, location: 'San Diego', model: 'Iveco Stralis' },
        { id: 11, name: 'BO-TRK-1100', capacity: 23, location: 'Boston', model: 'Kenworth T680' },
        { id: 12, name: 'LV-TRK-2200', capacity: 30, location: 'Las Vegas', model: 'Volvo FH16' },
        { id: 13, name: 'MI-TRK-3300', capacity: 26, location: 'Miami', model: 'Peterbilt 579' },
        { id: 14, name: 'SE-TRK-4400', capacity: 16, location: 'Seattle', model: 'Mack Anthem' },
        { id: 15, name: 'AT-TRK-5500', capacity: 19, location: 'Atlanta', model: 'Renault Magnum' },
      ];

      function refreshData(inst) {
        // todo if alleady selected just sort
        // merge common logic
        if (inst) {
          loadedEvents = inst.getEvents();
        }
        if (selectedMetric == 'availability') {
          myResources.forEach(function (resource) {
            return (resource.availability = 168);
          });
          loadedEvents.forEach(function (event) {
            var resource = myResources.find(function (resource) {
              return resource.id === event.resource;
            });
            if (resource) {
              resource.availability -= (new Date(event.end) - new Date(event.start)) / (1000 * 60 * 60);
            }
          });
        }

        if (selectedMetric == 'utilization') {
          myResources.forEach(function (resource) {
            var resourceEvents = loadedEvents.filter(function (event) {
              return event.resource === resource.id;
            });

            var totalPayload = resourceEvents.reduce(function (total, event) {
              return total + (event.payload || 0);
            }, 0);

            if (resource.capacity) {
              resource.utilization = Math.round((totalPayload / resource.capacity) * 100);
            } else {
              resource.utilization = 0;
            }
          });
        }

        if (selectedMetric === 'deadhead') {
          myResources.forEach(function (resource) {
            var resourceEvents = loadedEvents.filter(function (event) {
              return event.resource === resource.id;
            });

            var totalLoadedTime = resourceEvents.reduce(function (total, event) {
              if (event.payload && event.payload > 0) {
                return total + (new Date(event.end) - new Date(event.start)) / (1000 * 60 * 60);
              }
              return total;
            }, 0);

            resource.deadhead = 168 - totalLoadedTime;
          });
        }
      }

      function sortResources(crudAction) {
        console.log(sortColumn);
        console.log(sortDirection);

        if (!crudAction || (crudAction && sortColumn === 'availability')) {
          myResources.sort(function (a, b) {
            if (sortDirection === 'asc') {
              return a[sortColumn] > b[sortColumn] ? 1 : -1;
            }
            if (sortDirection === 'desc') {
              return a[sortColumn] < b[sortColumn] ? 1 : -1;
            }
          });
        }
        calendar.setOptions({ resources: myResources.slice() });
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
                if (sortColumn != 'initial' && sortDirection == '') {
                  $('input[name="group2"][data-value="asc"]').mobiscroll('getInst').checked = true;
                  sortDirection = 'asc';
                }
                sortDirection = sortColumn == 'initial' ? '' : sortDirection;
                refreshData();
                sortResources();
                //todo
                initialSortColumn = sortColumn;
                initialSortDirection = sortDirection;
                popup.close();

                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: 'Metrics calculated',
                });
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          onClose: function () {
            // todo
            $('input[name="group"][data-value="' + initialSortColumn + '"]').mobiscroll('getInst').checked = true;
            $('input[name="group2"]:checked').mobiscroll('getInst').checked = false;
            if (initialSortDirection != '' && initialSortColumn != 'initial') {
              $('input[name="group2"][data-value="' + initialSortDirection + '"]').mobiscroll('getInst').checked = true;
            }
          },
          contentPadding: false,
          display: 'anchored',
          focusOnClose: false,
          focusOnOpen: false,
          showOverlay: false,
          width: 400,
        })
        .mobiscroll('getInst');

      var calendar = $('#demo-timeline-popup-sort')
        .mobiscroll()
        .eventcalendar({
          clickToCreate: true,
          dragToResize: true,
          dragToMove: true,
          dragToCreate: true,
          data: myEvents,
          view: {
            timeline: {
              type: 'week',
              resolutionHorizontal: 'day',
            },
          },
          resources: myResources,
          renderResourceHeader: function () {
            return (
              '<div class="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-name">' +
              'Truck' +
              '</div>' +
              '<div class="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-custom">' +
              selectedMetricDesc +
              '</div>'
            );
          },
          renderResource: function (resource) {
            // test
            if (selectedMetric == 'deadhead') selectedMetric = 'availability';
            var metricValue = resource[selectedMetric.toLowerCase()];

            var barValue;
            if (selectedMetric.toLowerCase() === 'utilization') {
              barValue = metricValue;
            } else if (selectedMetric.toLowerCase() === 'availability') {
              barValue = (metricValue / 168) * 100;
            } else {
              barValue = 100;
            }

            var barColorClass;
            if (barValue <= 33) {
              barColorClass = 'green-bar';
            } else if (barValue <= 66) {
              barColorClass = 'yellow-bar';
            } else {
              barColorClass = 'red-bar';
            }

            return (
              '<div class="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-name">' +
              '<strong>' +
              resource.name +
              '</strong>' +
              '<div style="font-size: 12px; color: #666;">Model: ' +
              (resource.model || 'N/A') +
              '</div>' +
              '<div style="font-size: 12px; color: #666;">Capacity: ' +
              resource.capacity +
              'T</div>' +
              '</div>' +
              '<div class="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-custom">' +
              '<div class="metric-value" style="margin-top: 10px;">' +
              metricValue +
              (selectedMetric.toLowerCase() === 'utilization' ? '%' : selectedMetric.toLowerCase() === 'availability' ? 'h' : '') +
              '</div>' +
              '<div class="metric-bar-container">' +
              '<div class="metric-bar ' +
              barColorClass +
              '" style="width:' +
              barValue +
              '%;"></div>' +
              '</div>' +
              '</div>'
            );
          },

          renderHeader: function () {
            return (
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-next></div>' +
              '<div mbsc-calendar-nav></div>' +
              '<button id="demo-popup-sort-button" data-start-icon="bars" data-variant="flat" mbsc-button style="margin-left: auto;">Calculate & Sort</button>'
            );
          },
          onPageLoading: function (args, inst) {
            refreshData(inst);
          },
          onPageLoaded: function () {
            sortResources();
          },
          onEventCreated: function (args, inst) {
            // add random payload based on resource capacity
            var eventResource = myResources.find(function (resource) {
              return resource.id === args.event.resource;
            });

            var maxPayload = eventResource.capacity;
            var randomPayload = Math.floor(Math.random() * (maxPayload - 5 + 1)) + 5;
            args.event.payload = randomPayload;

            refreshData(inst);
            sortResources(true);
          },
          onEventDeleted: function (args, inst) {
            refreshData(inst);
            sortResources(true);
          },
          onEventUpdated: function (args, inst) {
            refreshData(inst);
            sortResources(true);
          },
          onEventClick: function (data) {
            console.log('payload ->', data.event.payload);
          },
        })
        .mobiscroll('getInst');

      $('#demo-popup-sort-button').on('click', function () {
        popup.setOptions({ anchor: this });
        initialSortColumn = sortColumn;
        initialSortDirection = sortDirection;
        popup.open();
      });

      $('input[name="group"]').on('change', function () {
        selectedMetric = $(this).attr('data-value');
        selectedMetricDesc = $(this).attr('data-label');
        sortColumn = selectedMetric;
      });

      $('input[name="direction"]').on('change', function () {
        sortDirection = $(this).attr('data-value');
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-timeline-popup-sort" class="mds-timeline-popup-sort"></div>
<div style="display:none">
  <div id="demo-filtering-popup">
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Metric do display</div>
      <div mbsc-radio-group>
        <label>
          <input mbsc-radio data-label="Standby Time" data-value="availability" name="group" type="radio" checked/>
        </label>
        <label>
          <input mbsc-radio data-label="Payload Efficiency" data-value="utilization" name="group" type="radio"/>
        </label>
        <label>
          <input mbsc-radio data-label="Deadhead Time" data-value="deadhead" name="group" type="radio"/>
        </label>

      </div>
    </div>
    <div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Sort direction</div>
    <label>
        Asc
        <input mbsc-segmented type="radio" data-value="asc" name="direction" checked>
    </label>
    <label>
        Desc
        <input mbsc-segmented type="radio" data-value="desc" name="direction">
    </label>
</div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.metric-bar-container {
    position: relative;
    background-color: #f0f0f0;
    border-radius: 5px;
    height: 10px;
    width: 125px; 
    margin-bottom: 5px;
    margin-top: 5px;
}


.metric-bar {
    height: 100%;
    border-radius: 5px;
    transition: width 0.3s ease; 
}

.green-bar {
    background-color: #4caf50; 
}

.yellow-bar {
    background-color: #ffeb3b; 
}

.red-bar {
    background-color: #f44336; 
}

/* Overrides */

.mds-timeline-popup-sort .mbsc-timeline-resource-header,
.mds-timeline-popup-sort .mbsc-timeline-resource-title,
.mds-timeline-popup-sort .mbsc-timeline-resource-footer,
.mds-timeline-popup-sort .mbsc-timeline-sidebar-header,
.mds-timeline-popup-sort .mbsc-timeline-sidebar-resource-title,
.mds-timeline-popup-sort .mbsc-timeline-sidebar-footer {
  padding: 0;
}

.mds-timeline-popup-sort .mbsc-timeline-resource-col {
  width: 310px;
}

.mds-timeline-popup-sort .mbsc-timeline-resource-title {
  height: 100%;
}

/* Resource grid */

.mds-popup-sort-resource-cell {
  display: inline-block;
  height: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  vertical-align: top;
  line-height: 20px;
}

.mds-popup-sort-resource-cell-name {
  width: 170px;
}


.mds-popup-sort-resource-cell-custom {
  width: 135px;
}

.mds-popup-sort-resource-cell-custom {
  border-left: 1px solid #ccc;
}

.mds-timeline-popup-sort.mbsc-ios-dark .mds-popup-sort-resource-cell-custom,
.mds-timeline-popup-sort.mbsc-material-dark .mds-popup-sort-resource-cell-custom,
.mds-timeline-popup-sort.mbsc-windows-dark .mds-popup-sort-resource-cell-custom {
  border-left: 1px solid #333;
}

/*<hidden>*/

.demo-timeline-popup-sort {
  height: 100%;
}

/*</hidden>*/
  `,
};
