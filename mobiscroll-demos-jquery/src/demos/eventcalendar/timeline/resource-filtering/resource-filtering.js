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
        {
          start: 'dyndatetime(y,m,d,5)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Excavate Foundation',
          resource: 'bulldozer - TX1234',
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,h+18)',
          title: 'Install Framing',
          resource: 'crane - NY9101',
        },
        {
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,20)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL1213',
        },
        {
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,22)',
          title: 'Roofing',
          resource: 'crane - IL1617',
        },
        {
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Site Cleanup',
          resource: 'bulldozer - PA1819',
        },

        {
          start: 'dyndatetime(y,m,d,5)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Foundation Work',
          resource: 'concrete mixer - CA2223',
        },
        {
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Steel Framing',
          resource: 'crane - NY2425',
        },
        {
          start: 'dyndatetime(y,m,d,h+8)',
          end: 'dyndatetime(y,m,d,h+13)',
          title: 'Interior Plumbing',
          resource: 'excavator - FL2627',
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,20)',
          title: 'Masonry Work',
          resource: 'crane - IL3031',
        },
        {
          start: 'dyndatetime(y,m,d,h-4)',
          end: 'dyndatetime(y,m,d,h+8)',
          title: 'Exterior Finishing',
          resource: 'bulldozer - PA3233',
        },

        {
          start: 'dyndatetime(y,m,d,h+1)',
          end: 'dyndatetime(y,m,d,h+6)',
          title: 'Ground Breaking',
          resource: 'bulldozer - TX3435',
        },
        {
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Wall Construction',
          resource: 'crane - NY3839',
        },
        {
          start: 'dyndatetime(y,m,d,h+9)',
          end: 'dyndatetime(y,m,d,h+14)',
          title: 'Roof Installation',
          resource: 'excavator - FL4041',
        },
        {
          start: 'dyndatetime(y,m,d,h-4)',
          end: 'dyndatetime(y,m,d,h+6)',
          title: 'Painting',
          resource: 'crane - IL4445',
        },
        {
          start: 'dyndatetime(y,m,d,h-3)',
          end: 'dyndatetime(y,m,d,h+8)',
          title: 'Driveway Paving',
          resource: 'bulldozer - PA4647',
        },

        {
          start: 'dyndatetime(y,m,d,h+1)',
          end: 'dyndatetime(y,m,d,h+6)',
          title: 'Foundation',
          resource: 'concrete mixer - CA5051',
        },
        {
          start: 'dyndatetime(y,m,d,h+4)',
          end: 'dyndatetime(y,m,d,h+9)',
          title: 'Building Erection',
          resource: 'crane - NY5253',
        },
        {
          start: 'dyndatetime(y,m,d,h+7)',
          end: 'dyndatetime(y,m,d,h+12)',
          title: 'Electrical Wiring',
          resource: 'excavator - FL5455',
        },
        {
          start: 'dyndatetime(y,m,d,h-4)',
          end: 'dyndatetime(y,m,d,h+5)',
          title: 'Roofing',
          resource: 'crane - IL5859',
        },
        {
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,20)',
          title: 'Finishing Touches',
          resource: 'bulldozer - PA6061',
        },

        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Site Preparation',
          resource: 'bulldozer - TX6263',
        },
        {
          start: 'dyndatetime(y,m,d,h+4)',
          end: 'dyndatetime(y,m,d,h+9)',
          title: 'Piling Work',
          resource: 'crane - NY6667',
        },
        {
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Concrete Pouring',
          resource: 'excavator - FL6869',
        },
        {
          start: 'dyndatetime(y,m,d,6)',
          end: 'dyndatetime(y,m,d,22)',
          title: 'Deck Construction',
          resource: 'drill - OH7071',
        },
        {
          start: 'dyndatetime(y,m,d,h-3)',
          end: 'dyndatetime(y,m,d,h+8)',
          title: 'Final Touches',
          resource: 'bulldozer - PA7475',
        },
      ];

      var myResources = [
        {
          id: 'site1',
          name: 'Downtown Construction',
          color: '#76e083',
          eventCreation: false,
          children: [
            {
              id: 'bulldozer - TX1234',
              name: 'Bulldozer - TX1234',
              color: '#1dab2f',
              status: 'on site',
            },
            {
              id: 'concrete mixer - CA5678',
              name: 'Concrete Mixer - CA5678',
              color: '#76e083',
              status: 'maintenance',
            },
            {
              id: 'crane - NY9101',
              name: 'Crane - NY9101',
              color: '#4981d6',
              status: 'on site',
            },
            {
              id: 'excavator - FL1213',
              name: 'Excavator - FL1213',
              color: '#f7961e',
              status: 'on site',
            },
            {
              id: 'drill - OH1415',
              name: 'Drill - OH1415',
              color: '#34c8e0',
              status: 'maintenance',
            },
            {
              id: 'crane - IL1617',
              name: 'Crane - IL1617',
              color: '#e25dd2',
              status: 'on site',
            },
            {
              id: 'bulldozer - PA1819',
              name: 'Bulldozer - PA1819',
              color: '#d6d145',
              status: 'on site',
            },
          ],
        },
        {
          id: 'site2',
          name: 'Uptown Development',
          color: '#ff1717',
          eventCreation: false,
          children: [
            {
              id: 'bulldozer - TX2021',
              name: 'Bulldozer - TX2021',
              color: '#1dab2f',
              status: 'maintenance',
            },
            {
              id: 'concrete mixer - CA2223',
              name: 'Concrete Mixer - CA2223',
              color: '#76e083',
              status: 'on site',
            },
            {
              id: 'crane - NY2425',
              name: 'Crane - NY2425',
              color: '#4981d6',
              status: 'on site',
            },
            {
              id: 'excavator - FL2627',
              name: 'Excavator - FL2627',
              color: '#f7961e',
              status: 'on site',
            },
            {
              id: 'drill - OH2829',
              name: 'Drill - OH2829',
              color: '#34c8e0',
              status: 'maintenance',
            },
            {
              id: 'crane - IL3031',
              name: 'Crane - IL3031',
              color: '#e25dd2',
              status: 'on site',
            },
            {
              id: 'bulldozer - PA3233',
              name: 'Bulldozer - PA3233',
              color: '#d6d145',
              status: 'on site',
            },
          ],
        },
        {
          id: 'site3',
          name: 'Suburban Project',
          color: '#d6d145',
          eventCreation: false,
          children: [
            {
              id: 'bulldozer - TX3435',
              name: 'Bulldozer - TX3435',
              color: '#1dab2f',
              status: 'on site',
            },
            {
              id: 'concrete mixer - CA3637',
              name: 'Concrete Mixer - CA3637',
              color: '#76e083',
              status: 'maintenance',
            },
            {
              id: 'crane - NY3839',
              name: 'Crane - NY3839',
              color: '#4981d6',
              status: 'on site',
            },
            {
              id: 'excavator - FL4041',
              name: 'Excavator - FL4041',
              color: '#f7961e',
              status: 'on site',
            },
            {
              id: 'crane - IL4445',
              name: 'Crane - IL4445',
              color: '#e25dd2',
              status: 'on site',
            },
            {
              id: 'bulldozer - PA4647',
              name: 'Bulldozer - PA4647',
              color: '#d6d145',
              status: 'on site',
            },
          ],
        },
        {
          id: 'site4',
          name: 'Industrial Park',
          color: '#a1d6e2',
          eventCreation: false,
          children: [
            {
              id: 'bulldozer - TX4849',
              name: 'Bulldozer - TX4849',
              color: '#1dab2f',
              status: 'maintenance',
            },
            {
              id: 'concrete mixer - CA5051',
              name: 'Concrete Mixer - CA5051',
              color: '#76e083',
              status: 'on site',
            },
            {
              id: 'crane - NY5253',
              name: 'Crane - NY5253',
              color: '#4981d6',
              status: 'on site',
            },
            {
              id: 'excavator - FL5455',
              name: 'Excavator - FL5455',
              color: '#f7961e',
              status: 'on site',
            },
            {
              id: 'drill - OH5657',
              name: 'Drill - OH5657',
              color: '#34c8e0',
              status: 'maintenance',
            },
            {
              id: 'crane - IL5859',
              name: 'Crane - IL5859',
              color: '#e25dd2',
              status: 'on site',
            },
            {
              id: 'bulldozer - PA6061',
              name: 'Bulldozer - PA6061',
              color: '#d6d145',
              status: 'on site',
            },
          ],
        },
        {
          id: 'site5',
          name: 'Bridge Construction',
          color: '#00ff00',
          eventCreation: false,
          children: [
            {
              id: 'bulldozer - TX6263',
              name: 'Bulldozer - TX6263',
              color: '#1dab2f',
              status: 'on site',
            },
            {
              id: 'concrete mixer - CA6465',
              name: 'Concrete Mixer - CA6465',
              color: '#76e083',
              status: 'maintenance',
            },
            {
              id: 'crane - NY6667',
              name: 'Crane - NY6667',
              color: '#4981d6',
              status: 'on site',
            },
            {
              id: 'excavator - FL6869',
              name: 'Excavator - FL6869',
              color: '#f7961e',
              status: 'on site',
            },
            {
              id: 'drill - OH7071',
              name: 'Drill - OH7071',
              color: '#34c8e0',
              status: 'on site',
            },
            {
              id: 'crane - IL7273',
              name: 'Crane - IL7273',
              color: '#e25dd2',
              status: 'maintenance',
            },
            {
              id: 'bulldozer - PA7475',
              name: 'Bulldozer - PA7475',
              color: '#d6d145',
              status: 'on site',
            },
          ],
        },
      ];

      var $calendarElement = $('#demo-filtering-calendar');
      var $resourceList = $('#demo-resource-list');
      var $maintenanceCheckbox = $('.mds-status-checkbox-maintenance');
      var $onSiteCheckbox = $('.mds-status-checkbox-on-site');

      var initialFilterCheckboxStates = [];
      var filterCheckboxes = [];
      var filteredResources = myResources;
      var searchTimeout;
      var searchQuery;
      var success = false;
      var onSiteFilter = false;
      var onSiteFilterTemp = false;
      var maintenanceFilter = false;
      var maintenanceFilterTemp = false;

      function filterResources() {
        maintenanceFilter = !$maintenanceCheckbox.is(':checked');
        onSiteFilter = !$onSiteCheckbox.is(':checked');

        // todo
        var selectedResources = $('.mds-resource-checkbox:checked')
          .map(function () {
            return $(this).val();
          })
          .get();

        filteredResources = myResources
          .map(function (site) {
            return {
              id: site.id,
              name: site.name,
              color: site.color,
              eventCreation: site.eventCreation,
              children: site.children.filter(function (resource) {
                return (
                  selectedResources.includes(resource.id) &&
                  !(maintenanceFilter && resource.status === 'maintenance') &&
                  !(onSiteFilter && resource.status === 'on site') &&
                  (!searchQuery || resource.name.toLowerCase().includes(searchQuery.toLowerCase()))
                );
              }),
            };
          })
          .filter(function (site) {
            return site.children.length > 0;
          });

        calendar.setOptions({ resources: filteredResources });
      }

      function refreshPopupResourceList() {
        $resourceList.children().hide();

        myResources.forEach(function (site) {
          site.children.forEach(function (resource) {
            var resourceItem = $resourceList.find('input[value="' + resource.id + '"]').parent();
            if (
              (!maintenanceFilter || resource.status !== 'maintenance') &&
              (!onSiteFilter || resource.status !== 'on site') &&
              (!searchQuery || resource.name.toLowerCase().includes(searchQuery.toLowerCase()))
            ) {
              resourceItem.show();
            }
          });
        });
      }

      var popup = $('#demo-filtering-popup')
        .mobiscroll()
        .popup({
          buttons: [
            'cancel',
            {
              text: 'Apply',
              keyCode: 'enter',
              handler: function () {
                success = true;
                filterResources();
                popup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          onOpen: function () {
            refreshPopupResourceList();
            success = false;
            // todo
            $('.mds-popup-checkbox').each(function () {
              var checkbox = $(this).mobiscroll('getInst');
              filterCheckboxes.push(checkbox);
            });
            initialFilterCheckboxStates = filterCheckboxes.map(function (checkbox) {
              return checkbox.checked;
            });
            maintenanceFilterTemp = maintenanceFilter;
            onSiteFilterTemp = onSiteFilter;
          },
          onClose: function () {
            if (!success) {
              maintenanceFilter = maintenanceFilterTemp;
              onSiteFilter = onSiteFilterTemp;
              filterCheckboxes.forEach(function (checkbox, index) {
                checkbox.checked = initialFilterCheckboxStates[index];
              });
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

      var calendar = $calendarElement
        .mobiscroll()
        .eventcalendar({
          class: 'mds-resource-filtering-calendar',
          clickToCreate: true,
          dragToCreate: true,
          dragToResize: true,
          dragToMove: true,
          view: {
            timeline: {
              type: 'day',
              startTime: '05:00',
              endTime: '22:00',
              timeCellStep: 60,
              timeLabelStep: 60,
              weekNumbers: false,
            },
          },
          data: myEvents,
          resources: myResources,
          onInit: function () {
            $resourceList.empty();
            var content = '';
            myResources.forEach(function (site) {
              site.children.forEach(function (resource) {
                content +=
                  '<label>' +
                  '<input type="checkbox" mbsc-checkbox class="mds-resource-checkbox mds-popup-checkbox" value="' +
                  resource.id +
                  '" checked> ' +
                  resource.name +
                  '</label>';
              });
            });

            $resourceList.html(content);
            mobiscroll.enhance($resourceList[0]);
          },
          renderResource: function (resource) {
            var statusHtml = '';
            if (resource.status) {
              var statusColor = resource.status === 'on site' ? 'green' : 'orange';
              statusHtml =
                '<div class="mds-construction-machine-status-label">' +
                '<span class="mds-construction-machine-status-dot" style="background-color:' +
                statusColor +
                ';"></span>' +
                resource.status +
                '</div>';
            }
            return '<div>' + '<div class="mds-construction-machine-name">' + resource.name + '</div>' + statusHtml + '</div>';
          },
          renderResourceEmpty: function () {
            return (
              '<div class="mds-filtering-empty-resource-container mbsc-flex mbsc-align-items-center">' +
              '<div class="mds-filtering-empty-resource-content">' +
              '<div class="mds-filtering-empty-resource-text">No resources match your search. Adjust your filters or try a different keyword.</div>' +
              '<button mbsc-button class="mds-filtering-reset-filters-button"' +
              '>Reset Filters</button>' +
              '</div>' +
              '</div>'
            );
          },
          renderResourceHeader: function () {
            return (
              '<div class="mbsc-flex mbsc-align-items-center mds-resource-filtering-header-container">' +
              '<label class=mds-search-label>' +
              '<input type="text" mbsc-input id="demo-search-input" autocomplete="off" data-input-style="box" data-start-icon="material-search" placeholder="Search..." class="mds-resource-header-template-search-input"/>' +
              '</label>' +
              '<button mbsc-button id="demo-filter-button" class="mds-resource-header-template-filter-button" data-icon="">' +
              'Filter' +
              '</button>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $calendarElement.on('click', '.mds-filtering-reset-filters-button', function () {
        filterCheckboxes.forEach(function (checkbox) {
          checkbox.checked = true;
        });

        setTimeout(function () {
          searchQuery = '';
          $('#demo-search-input').val('');
          onSiteFilter = false;
          maintenanceFilter = false;
          filterResources();
        });
      });

      $calendarElement.on('input', '#demo-search-input', function (event) {
        searchQuery = event.target.value.toLowerCase();

        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(function () {
          filterResources();
        }, 300);
      });

      $calendarElement.on('click', '#demo-filter-button', function () {
        popup.setOptions({ anchor: this });
        popup.open();
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
  <div id="demo-filtering-calendar"></div>
  <div id="demo-filtering-popup" class="mds-resrouce-filtering-popup">
    <div>
    <div class="mbsc-form-group-title">Operational Status</div>
    <label>
      <input
        type="checkbox"
        mbsc-checkbox
        data-label="maintenance"
        class="mds-popup-checkbox mds-status-checkbox-maintenance"
        checked
      />
    </label>
    <label>
      <input
        type="checkbox"
        mbsc-checkbox
        data-label="on site"
        class="mds-popup-checkbox mds-status-checkbox-on-site"
        checked
      />
    </label>
   </div>
      <div>
      <div class="mbsc-form-group-title">Resources</div>
        <div id="demo-resource-list"></div>
      </div>
    </div>
  </div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
    /* mbsc customs */
    
    .mds-resrouce-filtering-popup
    .mbsc-form-control-label {
      font-size: 14px;
    }

    .mds-resource-filtering-calendar 
    .mbsc-textfield-wrapper {
      max-width: 500px;
      margin: 18px auto;
    }

    .mds-resource-filtering-calendar 
    .mbsc-timeline-row-gutter {
      height: 6px;
    }

    .mds-resource-filtering-calendar 
    .mbsc-timeline-resources {
      width: 300px;
    }

    .mds-resource-filtering-calendar 
    .mbsc-timeline-resource-header-cont {
      width: 300px;
      height: 60px;
    }

    .mds-resource-filtering-calendar 
    .mbsc-timeline-resource-header {
      margin-top: 4px;
      padding: 0;
    }

    .mds-resource-filtering-calendar 
    .mbsc-timeline-resource-title {
      height: 100%;
    }

    .mds-resource-filtering-calendar 
    .mbsc-timeline-parent {
      height: 34px;
    }

    .mds-resource-filtering-calendar 
    .mbsc-textfield-wrapper.mbsc-form-control-wrapper {
      margin: 3px;
    }

    /* resrouce header */

    .mds-resource-header-template-filter-button {
      white-space: nowrap;
    }

    .mds-resource-header-template {
      width: 300px;
    }

    /* resources */

    .mds-construction-machine-name {
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 7px;
    }

    .mds-construction-machine-status-dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 5px;
    }

    .mds-construction-machine-status-label {
      font-size: 13px;
      font-weight: normal;
    }

    /* empty resources */
    .mds-filtering-empty-resource-container {
      height: 100%;
    }

    .mds-filtering-empty-resource-content {
      text-align: center;
    }

    .mds-filtering-empty-resource-text {
      color: #999;
      font-style: italic;
      margin-bottom: 15px;
    }
  `,
};
