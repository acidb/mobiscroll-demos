import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
      themeVariant: 'dark',
    });

    var myEvents = [
      {
        start: 'dyndatetime(y,m,d,h+1)',
        end: 'dyndatetime(y,m,d,h+6)',
        title: 'Excavate Foundation',
        resource: 'bulldozer - XYZ123',
      },
      {
        start: 'dyndatetime(y,m,d,h+5)',
        end: 'dyndatetime(y,m,d,h+10)',
        title: 'Install Framing',
        resource: 'crane - DEF789',
      },
      {
        start: 'dyndatetime(y,m,d,h+7)',
        end: 'dyndatetime(y,m,d,h+12)',
        title: 'Electrical Wiring',
        resource: 'excavator - GHI012',
      },
      {
        start: 'dyndatetime(y,m,d,h-5)',
        end: 'dyndatetime(y,m,d,h+5)',
        title: 'Roofing',
        resource: 'crane - MNO678',
      },
      {
        start: 'dyndatetime(y,m,d,h-5)',
        end: 'dyndatetime(y,m,d,h+8)',
        title: 'Site Cleanup',
        resource: 'bulldozer - PQR901',
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
            id: 'bulldozer - XYZ123',
            name: 'Bulldozer - XYZ123',
            color: '#1dab2f',
            status: 'on site',
          },
          {
            id: 'concrete mixer - ABC456',
            name: 'Concrete Mixer - ABC456',
            color: '#76e083',
            status: 'maintenance',
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
            id: 'crane - DEF789',
            name: 'Crane - DEF789',
            color: '#4981d6',
            status: 'on site',
          },
          {
            id: 'excavator - GHI012',
            name: 'Excavator - GHI012',
            color: '#f7961e',
            status: 'on site',
          },
          {
            id: 'drill - JKL345',
            name: 'Drill - JKL345',
            color: '#34c8e0',
            status: 'maintenance',
          },
          {
            id: 'crane - MNO678',
            name: 'Crane - MNO678',
            color: '#e25dd2',
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
            id: 'bulldozer - PQR901',
            name: 'Bulldozer - PQR901',
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
            id: 'forklift - STU234',
            name: 'Forklift - STU234',
            color: '#ffcc00',
            status: 'maintenance',
          },
          {
            id: 'dump truck - VWX567',
            name: 'Dump Truck - VWX567',
            color: '#cc6600',
            status: 'maintenance',
          },
        ],
      },
    ];

    var popupPlaceholder = $('.mds-resource-filtering-popup-placeholder');
    var $filterButton = $('#filter-button');
    console.log($filterButton);

    function renderCustomResource(resource) {
      var statusHtml = '';
      if (resource.status) {
        var statusColor = resource.status === 'on site' ? 'green' : 'orange';
        statusHtml =
          '<div class="mds-construction-machine-status">' +
          '<span class="mds-resource-status-dot" style="background-color:' +
          statusColor +
          ';"></span>' +
          resource.status +
          '</div>';
      }
      return (
        '<div class="mds-construction-machine">' +
        '<div class="mds-construction-machine-name">' +
        resource.name +
        '</div>' +
        statusHtml +
        '</div>'
      );
    }

    function renderResourceHeader() {
      return (
        '<div class="mbsc-flex mbsc-align-items-center mds-resource-filtering-header">' +
        '<label class=mds-search-label>' +
        '<input type="text" mbsc-input id="search-input" data-input-style="box" data-start-icon="" placeholder="Search..." class="mds-resource-header-template-search-input"/>' +
        '</label>' +
        '<button mbsc-button id="filter-button" class="mds-resource-header-template-filter-button" data-icon="">' +
        'Filter' +
        '</button>' +
        '</div>'
      );
    }

    function renderResourceEmpty() {
      return (
        '<div class="mds-empty-resource-container">' +
        '<div class="mds-empty-resource-content">' +
        '<div class="mds-empty-resource-text">No resources match your search. Adjust your filters or try a different keyword.</div>' +
        '<button mbsc-button class="mds-reset-filters-button"' +
        '>Reset Filters</button>' +
        '</div>' +
        '</div>'
      );
    }

    function resetFilters() {
      // $('.mds-status-checkbox').prop('checked', true);
      // $('.mds-resource-checkbox').prop('checked', true);
      // console.log(1);

      onSiteFilter = false;
      maintenanceFilter = false;
      filterResources();
      refreshResourceList();
      popupPlaceholder.hide();
      inst.setOptions({ resources: filteredResources });
    }

    $(document).on('click', '.mds-reset-filters-button', resetFilters);

    function handleSearch(event) {
      var query = event.target.value.toLowerCase();

      clearTimeout(handleSearch.timeout);
      handleSearch.timeout = setTimeout(function () {
        filteredResources = myResources
          .map(function (site) {
            return {
              id: site.id,
              name: site.name,
              color: site.color,
              eventCreation: site.eventCreation,
              children: site.children.filter(function (resource) {
                return resource.name.toLowerCase().indexOf(query) !== -1;
              }),
            };
          })
          .filter(function (site) {
            return site.children.length > 0;
          });

        inst.setOptions({ resources: filteredResources });
      }, 300);
    }

    $(document).on('input', '#search-input', handleSearch);

    function generateResourceHTML(resource) {
      return (
        '<label>' +
        '<input type="checkbox" mbsc-checkbox class="mds-resource-checkbox" value="' +
        resource.id +
        '" checked> ' +
        resource.name +
        '</label>'
      );
    }

    function createResourceList() {
      // console.log(1);
      var resourceList = $('#resource-list');
      // resourceList.empty();

      myResources.forEach(function (site) {
        site.children.forEach(function (resource) {
          resourceList.append(generateResourceHTML(resource));
        });
      });
    }

    function refreshResourceList() {
      var resourceList = $('#resource-list');
      resourceList.children().hide();

      myResources.forEach(function (site) {
        site.children.forEach(function (resource) {
          var resourceItem = resourceList.find('input[value="' + resource.id + '"]').parent();
          if ((!maintenanceFilter || resource.status !== 'maintenance') && (!onSiteFilter || resource.status !== 'on site')) {
            resourceItem.show();
          }
        });
      });
    }

    createResourceList();

    var onSiteFilter = false;
    var maintenanceFilter = false;
    var filteredResources = [];

    function filterResources() {
      var selectedResources = $('.mds-resource-checkbox:checked')
        .map(function () {
          return $(this).val();
        })
        .get();

      filteredResources = myResources.map(function (site) {
        return {
          id: site.id,
          name: site.name,
          color: site.color,
          eventCreation: site.eventCreation,
          children: site.children.filter(function (resource) {
            return selectedResources.includes(resource.id);
          }),
        };
      });

      filteredResources = filteredResources.filter(function (site) {
        return site.children.length > 0;
      });

      if (maintenanceFilter) {
        filteredResources = filteredResources
          .map(function (site) {
            return {
              id: site.id,
              name: site.name,
              color: site.color,
              eventCreation: site.eventCreation,
              children: site.children.filter(function (resource) {
                return resource.status !== 'maintenance';
              }),
            };
          })
          .filter(function (site) {
            return site.children.length > 0;
          });
      }

      if (onSiteFilter) {
        filteredResources = filteredResources
          .map(function (site) {
            return {
              id: site.id,
              name: site.name,
              color: site.color,
              eventCreation: site.eventCreation,
              children: site.children.filter(function (resource) {
                return resource.status !== 'on site';
              }),
            };
          })
          .filter(function (site) {
            return site.children.length > 0;
          });
      }
    }

    $(document).on('change', '.mds-resource-checkbox', filterResources);

    $(document).on('change', '.mds-status-checkbox', function () {
      var selectedStatus = $('.mds-status-checkbox:checked')
        .map(function () {
          // console.log($(this).data('label'));
          return $(this).data('label');
        })
        .get();

      onSiteFilter = !selectedStatus.includes('on site');
      maintenanceFilter = !selectedStatus.includes('maintenance');

      filterResources();
      refreshResourceList();

      if (onSiteFilter && maintenanceFilter) {
        popupPlaceholder.show();
      } else {
        popupPlaceholder.hide();
      }
    });

    var popup = $('#demo-filter-popup')
      .mobiscroll()
      .popup({
        anchor: $filterButton[0],
        buttons: [
          'cancel',
          {
            text: 'Save',
            keyCode: 'enter',
            handler: function () {
              inst.setOptions({ resources: filteredResources });
              popup.close();
            },
            cssClass: 'mbsc-popup-button-primary',
          },
        ],
        contentPadding: false,
        display: 'anchored',
        // focusElm: $filterButton,
        focusOnClose: false,
        focusOnOpen: false,
        showOverlay: false,
        width: 400,
      })
      .mobiscroll('getInst');

    $(document).on('click', '#filter-button', function () {
      popup.open();
    });

    var inst = $('#calendar')
      .mobiscroll()
      .eventcalendar({
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
        height: 1000,
        data: myEvents,
        resources: myResources,
        renderResource: renderCustomResource,
        renderResourceEmpty: renderResourceEmpty,
        renderResourceHeader: renderResourceHeader,
      })
      .mobiscroll('getInst');
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
  <div id="calendar"></div>
  <div id="demo-filter-popup">
    <div>
      <div id="resource-list-group">
        <div class="mds-resource-filtering-popup-placeholder" style="display: none">
          <div class="mds-placeholder">No resources available</div>
        </div>
        <div id="resource-list"></div>
      </div>
      <br />
      <div id="checkbox-group">
        <label>
          <input
            type="checkbox"
            mbsc-checkbox
            data-label="maintenance"
            class="mds-status-checkbox"
            checked
          />
        </label>
        <label>
          <input
            type="checkbox"
            mbsc-checkbox
            data-label="on site"
            class="mds-status-checkbox"
            checked
          />
        </label>
      </div>
    </div>
  </div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
  .mds-resource-status-dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
  }
  
  .mds-construction-machine-name {
    margin-bottom: 5px;
  }
  
  .mbsc-timeline-resources {
    width: 300px;
  }
  
  .mbsc-timeline-resource-header-cont {
    width: 300px;
    margin: 0;
  }
  
  .mbsc-timeline-resource-header {
    padding: 0;
  }
  
  .mds-resource-header-template-search button,
  input {
    font-size: 14px;
  }
  
  #search-input {
    width: 100%;
  }
  
  .mds-construction-machine-status {
    font-size: 13px;
    font-weight: normal;
  }
  
  .mds-construction-machine-name {
    font-size: 14px;
    font-weight: normal;
  }
  
  .mds-resource-filtering-popup-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .mds-placeholder {
    color: #999;
    font-style: italic;
    margin-top: 15px;
  }
  
  .mds-search-label {
    margin: 0 !important;
    width: auto;
  }
  
  #filter-button {
    border-radius: 8px;
  }
  
  .mds-resource-header-template-search-input {
    height: 30px !important;
  }
  
  .mds-resource-header-template-filter-button {
    white-space: nowrap;
  }
  
  .mds-empty-resource-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .mds-empty-resource-content {
    text-align: center;
  }
  
  .mds-empty-resource-text {
    color: #999;
    font-style: italic;
    margin-bottom: 15px;
  }
  
  .mds-reset-filters-button {
    padding: 20px 20px;
    font-size: 14px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .mbsc-timeline-resource-title {
    height: 100%;
  }
  
  .mds-resource-header-template {
    width: 300px;
  }

  .mds-resource-filtering-header {
    justify-content: space-evenly;
    align-items: center;
  }
  `,
};
