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
      var sortColumn = 'initial';
      var sortDirection = '';
      var selectedMetric = 'Availability';

      var myEvents = [
        {
          start: 'dyndatetime(y,m,d+4)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #001 - New York to Los Angeles',
          resource: 7,
          color: '#FF5733',
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #003 - Philadelphia to Phoenix',
          resource: 9,
          color: '#33FF57',
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #004 - San Antonio to San Diego',
          resource: 10,
          color: '#3357FF',
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #005 - Dallas to San Francisco',
          resource: 7,
          color: '#FF5733',
        },
        {
          start: 'dyndatetime(y,m,d+4)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #006 - Los Angeles to Chicago',
          resource: 8,
          color: '#FF33A6',
        },
        {
          start: 'dyndatetime(y,m,d+3)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #007 - Houston to New York',
          resource: 9,
          color: '#33FF57',
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #009 - San Diego to Dallas',
          resource: 7,
          color: '#FF5733',
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #010 - San Francisco to Los Angeles',
          resource: 8,
          color: '#FF33A6',
        },
        {
          start: 'dyndatetime(y,m,d+2)',
          end: 'dyndatetime(y,m,d+5)',
          title: 'Tour #013 - Miami to Seattle',
          resource: 1,
          color: '#FF9933',
        },
        {
          start: 'dyndatetime(y,m,d+1)',
          end: 'dyndatetime(y,m,d+3)',
          title: 'Tour #014 - Denver to Boston',
          resource: 2,
          color: '#33FFA6',
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+3)',
          title: 'Tour #015 - Orlando to Austin',
          resource: 3,
          color: '#9933FF',
        },
        {
          start: 'dyndatetime(y,m,d+3)',
          end: 'dyndatetime(y,m,d+4)',
          title: 'Tour #016 - Detroit to Baltimore',
          resource: 4,
          color: '#33A6FF',
        },
        {
          start: 'dyndatetime(y,m,d+2)',
          end: 'dyndatetime(y,m,d+5)',
          title: 'Tour #017 - Las Vegas to Portland',
          resource: 5,
          color: '#FF5733',
        },
        {
          start: 'dyndatetime(y,m,d+1)',
          end: 'dyndatetime(y,m,d+5)',
          title: 'Tour #018 - Atlanta to Kansas City',
          resource: 6,
          color: '#33FF99',
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+4)',
          title: 'Tour #019 - Charlotte to Indianapolis',
          resource: 7,
          color: '#FF5733',
        },
        {
          start: 'dyndatetime(y,m,d+3)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #022 - Cleveland to Cincinnati',
          resource: 10,
          color: '#3357FF',
        },
      ];

      var myResources = [
        { id: 1, name: 'NY-TRK-1200', capacity: 25, location: 'New York', utilization: 65 },
        { id: 2, name: 'LA-TRK-0090', capacity: 18, location: 'Los Angeles', utilization: 55 },
        { id: 3, name: 'CH-TRK-0700', capacity: 22, location: 'Phoenix', utilization: 70 },
        { id: 4, name: 'HO-TRK-0850', capacity: 28, location: 'Houston', utilization: 75 },
        { id: 5, name: 'PH-TRK-0900', capacity: 24, location: 'Chicago', utilization: 80 },
        { id: 6, name: 'PA-TRK-0300', capacity: 15, location: 'Philadelphia', utilization: 70 },
        { id: 8, name: 'SD-TRK-0250', capacity: 12, location: 'San Francisco', utilization: 90 },
        { id: 9, name: 'DA-TRK-0400', capacity: 20, location: 'Dallas', utilization: 30 },
        { id: 10, name: 'SF-TRK-0550', capacity: 17, location: 'San Diego', utilization: 50 },
      ];

      function refreshData(inst) {
        var myEvents = inst.getEvents();
        myResources.forEach(function (resource) {
          return (resource.availability = 168);
        });
        myEvents.forEach(function (event) {
          var resource = myResources.find(function (resource) {
            return resource.id === event.resource;
          });
          if (resource) {
            resource.availability -= (new Date(event.end) - new Date(event.start)) / (1000 * 60 * 60);
          }
        });
      }

      function sortResources(crudAction) {
        if (!crudAction || (crudAction && sortColumn === 'availability')) {
          myResources.sort(function (a, b) {
            if (sortDirection === 'asc') {
              return a[sortColumn] > b[sortColumn] ? 1 : -1;
            }
            if (sortDirection === 'desc') {
              return a[sortColumn] < b[sortColumn] ? 1 : -1;
            }
            return a.id - b.id;
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
              '<div class="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-availability">' +
              selectedMetric +
              '</div>'
            );
          },
          renderResource: function (resource) {
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
              resource.name +
              '</div>' +
              '<div class="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-availability">' +
              metricValue +
              (selectedMetric.toLowerCase() === 'utilization' ? '%' : selectedMetric.toLowerCase() === 'availability' ? 'h' : '') +
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
              '<button id="demo-popup-sort-button" data-start-icon="bars" data-variant="flat" mbsc-button style="margin-left: auto;">Metrics</button>'
            );
          },
          onPageLoading: function (args, inst) {
            refreshData(inst);
          },
          onEventCreated: function (args, inst) {
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
        sortColumn = selectedMetric.toLowerCase();
      });

      $('input[name="group2"]').on('change', function () {
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
        <input mbsc-radio data-label="Availability" data-value="Availability" name="group" type="radio" checked/>
        </label>
        <label>
        <input mbsc-radio data-label="Utilization" data-value="Utilization" name="group" type="radio"/>
        </label>
      </div>
    </div>
    <div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Sort direction</div>
    <label>
        Asc
        <input mbsc-segmented type="radio" name="range" checked>
    </label>
    <label>
        Desc
        <input mbsc-segmented type="radio" name="range">
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
    width: 100px; 
    margin-bottom: 5px;
}


.metric-bar {
    height: 100%;
    border-radius: 5px;
    transition: width 0.3s ease; 
}

.green-bar {
    background-color: #4caf50; /* Green for 0-33% */
}

.yellow-bar {
    background-color: #ffeb3b; /* Yellow for 33-66% */
}

.red-bar {
    background-color: #f44336; /* Red for above 66% */
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
  width: 250px;
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
  line-height: 25px;
}

.mds-popup-sort-resource-cell-name {
  width: 120px;
}


.mds-popup-sort-resource-cell-availability {
  width: 100px;
}

.mds-popup-sort-resource-cell-availability {
  border-left: 1px solid #ccc;
}

.mds-timeline-popup-sort.mbsc-ios-dark .mds-popup-sort-resource-cell-availability,
.mds-timeline-popup-sort.mbsc-material-dark .mds-popup-sort-resource-cell-availability,
.mds-timeline-popup-sort.mbsc-windows-dark .mds-popup-sort-resource-cell-availability {
  border-left: 1px solid #333;
}

/*<hidden>*/

.demo-timeline-popup-sort {
  height: 100%;
}

/*</hidden>*/
  `,
};
