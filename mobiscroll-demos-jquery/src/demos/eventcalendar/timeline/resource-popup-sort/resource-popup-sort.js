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
      var sortColumn = 'name';
      var sortDirection = 'asc';

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
        { id: 1, name: 'NY-TRK-1200', capacity: 25, location: 'New York', availability: 168 },
        { id: 2, name: 'LA-TRK-0090', capacity: 18, location: 'Los Angeles', availability: 168 },
        { id: 3, name: 'CH-TRK-0700', capacity: 22, location: 'Chicago', availability: 168 },
        { id: 4, name: 'HO-TRK-0850', capacity: 28, location: 'Houston', availability: 168 },
        { id: 5, name: 'PH-TRK-0900', capacity: 24, location: 'Phoenix', availability: 168 },
        { id: 6, name: 'PA-TRK-0300', capacity: 15, location: 'Philadelphia', availability: 168 },
        { id: 8, name: 'SD-TRK-0250', capacity: 12, location: 'San Diego', availability: 168 },
        { id: 9, name: 'DA-TRK-0400', capacity: 20, location: 'Dallas', availability: 168 },
        { id: 10, name: 'SF-TRK-0550', capacity: 17, location: 'San Francisco', availability: 168 },
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
              text: 'Clear sort',
              handler: function () {
                popup.close();
                sortDirection = '';
                sortColumn = 'name';

                $('input[name="group"][data-value="name"]').mobiscroll('getInst').checked = true;
                $('input[name="group2"][data-value="asc"]').mobiscroll('getInst').checked = true;

                sortResources();
                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: 'Filters cleared',
                });
              },
            },
            {
              text: 'Apply',
              keyCode: 'enter',
              handler: function () {
                initialSortColumn = sortColumn;
                initialSortDirection = sortDirection;
                popup.close();
                sortResources();
                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: 'Resources sorted',
                });
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          onClose: function () {
            $('input[name="group"][data-value="' + initialSortColumn + '"]').mobiscroll('getInst').checked = true;
            $('input[name="group2"][data-value="' + initialSortDirection + '"]').mobiscroll('getInst').checked = true;
            sortColumn = initialSortColumn;
            sortDirection = initialSortDirection;
          },
          contentPadding: false,
          display: 'anchored',
          focusOnClose: false,
          focusOnOpen: false,
          showOverlay: false,
          width: 400,
        })
        .mobiscroll('getInst');

      var calendar = $('#demo-popup-sort')
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
              '<div class="mds-resource-sort-header mds-resource-cell mds-resource-cell-name">' +
              'Truck' +
              '</div>' +
              '<div class="mds-resource-sort-header mds-resource-cell mds-resource-cell-capacity">' +
              'Capacity' +
              '</div>' +
              '<div class="mds-resource-sort-header mds-resource-cell mds-resource-cell-location">' +
              'Location' +
              '</div>' +
              '<div class="mds-resource-sort-header mds-resource-cell mds-resource-cell-availability">' +
              'Availability' +
              '</div>'
            );
          },
          renderResource: function (resource) {
            return (
              '<div class="mds-resource-cell mds-resource-cell-name">' +
              resource.name +
              '</div>' +
              '<div class="mds-resource-cell mds-resource-cell-capacity">' +
              resource.capacity +
              'T</div>' +
              '<div class="mds-resource-cell mds-resource-cell-location">' +
              resource.location +
              '</div>' +
              '<div class="mds-resource-cell mds-resource-cell-availability">' +
              resource.availability +
              'H' +
              '</div>'
            );
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-next></div>' +
              '<div mbsc-calendar-nav></div>' +
              '<button id="demo-popup-sort-button" mbsc-button style="margin-left: auto;">Sort</button>'
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
            console.log('on event updated');
            refreshData(inst);
            sortResources(true);
          },
        })
        .mobiscroll('getInst');

      $('#demo-popup-sort-button').on('click', function () {
        initialSortColumn = $('input[name="group"]:checked').attr('data-value');
        initialSortDirection = $('input[name="group2"]:checked').attr('data-value');
        popup.setOptions({ anchor: this });
        popup.open();
      });

      $('input[name="group"]').on('change', function () {
        sortColumn = $(this).attr('data-value');
      });

      $('input[name="group2"]').on('change', function () {
        sortDirection = $(this).attr('data-value');
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-popup-sort" class="mds-resource-details"></div>
<div style="display:none">
  <div id="demo-filtering-popup">
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Sort by</div>
      <div mbsc-radio-group>
        <label>
          <input mbsc-radio data-label="Truck name" data-value="name" name="group" type="radio" checked />
        </label>
        <label>
          <input mbsc-radio data-label="Capacity" data-value="capacity" name="group" type="radio" />
        </label>
        <label>
          <input mbsc-radio data-label="Location" data-value="location" name="group" type="radio" />
        </label>
        <label>
          <input mbsc-radio data-label="Availability" data-value="availability" name="group" type="radio" />
        </label>
      </div>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Sort direction</div>
      <div mbsc-radio-group>
        <label>
          <input mbsc-radio data-label="Ascending" data-value="asc" name="group2" type="radio" checked />
        </label>
        <label>
          <input mbsc-radio data-label="Descending" data-value="desc" name="group2" type="radio" />
        </label>
      </div>
    </div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
/* Overrides */

.mds-resource-details .mbsc-timeline-resource-header,
.mds-resource-details .mbsc-timeline-resource-title,
.mds-resource-details .mbsc-timeline-resource-footer,
.mds-resource-details .mbsc-timeline-sidebar-header,
.mds-resource-details .mbsc-timeline-sidebar-resource-title,
.mds-resource-details .mbsc-timeline-sidebar-footer {
  padding: 0;
}

.mds-resource-details .mbsc-timeline-resource-col {
  width: 430px;
}

.mds-resource-details .mbsc-timeline-resource-title {
  height: 100%;
}

/* Resource grid */

.mds-resource-cell {
  display: inline-block;
  height: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  vertical-align: top;
  line-height: 25px;
}

.mds-resource-cell-name {
  width: 120px;
}

.mds-resource-cell-capacity,
.mds-resource-cell-availability,
.mds-resource-cell-location {
  width: 100px;
}

.mds-resource-cell-capacity {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.mds-resource-cell-location {
  border-right: 1px solid #ccc;
}

.mds-resource-details.mbsc-ios-dark .mds-resource-cell-capacity,
.mds-resource-details.mbsc-material-dark .mds-resource-cell-capacity,
.mds-resource-details.mbsc-windows-dark .mds-resource-cell-capacity {
  border-left: 1px solid #333;
  border-right: 1px solid #333;
}

.mds-resource-details.mbsc-ios-dark .mds-resource-cell-location,
.mds-resource-details.mbsc-material-dark .mds-resource-cell-location,
.mds-resource-details.mbsc-windows-dark .mds-resource-cell-location {
  border-right: 1px solid #333;
}

/*<hidden>*/

.demo-timeline-resource-details {
  height: 100%;
}

/*</hidden>*/
  `,
};
