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
      var guid = 0;
      var $availableInstallersList = $('#demo-ext-res-drop-list');

      var installers = [
        {
          id: 1,
          name: 'Installer team 1',
          eventCreation: false,
          reorder: false,
          children: [
            {
              id: 2,
              name: 'Emily Carter',
              color: '#007acc',
              title: 'Electrician',
            },
            {
              id: 3,
              name: 'Michael Lawson',
              color: '#008000',
              title: 'Plumber',
            },
          ],
        },
        //<hide-comment>
        {
          id: 4,
          name: 'Installer team 2',
          eventCreation: false,
          reorder: false,
          children: [
            {
              id: 5,
              name: 'James Brown',
              color: '#FF5733',
              title: 'Carpenter',
            },
          ],
        },
        {
          id: 6,
          name: 'Installer team 3',
          eventCreation: false,
          reorder: false,
          children: [
            {
              id: 7,
              name: 'Daniel Wilson',
              color: '#900C3F',
              title: 'Welder',
            },
          ],
        },
        {
          id: 8,
          name: 'Installer team 4',
          eventCreation: false,
          reorder: false,
          children: [
            {
              id: 9,
              name: 'Benjamin Harris',
              color: '#1ABC9C',
              title: 'Heavy Equipment Operator',
            },
          ],
        },
        {
          id: 10,
          name: 'Installer team 5',
          eventCreation: false,
          reorder: false,
          children: [
            {
              id: 11,
              name: 'William Anderson',
              color: '#F39C12',
              title: 'Concrete Finisher',
            },
            {
              id: 12,
              name: 'Emma Thompson',
              color: '#D35400',
              title: 'Steelworker',
            },
          ],
        },
        {
          id: 13,
          name: 'Installer team 6',
          eventCreation: false,
          reorder: false,
          children: [
            {
              id: 14,
              name: 'Alexander Roberts',
              color: '#8E44AD',
              title: 'Painter',
            },
          ],
        },
        //</hide-comment>
      ];

      var availableInstallers = [
        {
          externalId: 1,
          name: 'Adam Miller',
          color: '#C70039',
          title: 'Mason',
        },
        {
          externalId: 2,
          name: 'Isabella Martinez',
          color: '#2ECC71',
          title: 'Surveyor',
        },
        {
          externalId: 3,
          name: 'Mark White',
          color: '#34495E',
          title: 'Glazier',
        },
        //<hide-comment>
        {
          externalId: 4,
          name: 'Liam Foster',
          color: '#1E90FF',
          title: 'Concrete Finisher',
        },
        {
          externalId: 5,
          name: 'Sophia Adams',
          color: '#FF4500',
          title: 'Steelworker',
        },
        {
          externalId: 6,
          name: 'Ethan Murphy',
          color: '#228B22',
          title: 'Heavy Equipment Operator',
        },
        {
          externalId: 7,
          name: 'Ava Mitchell',
          color: '#FFD700',
          title: 'Surveyor',
        },
        {
          externalId: 8,
          name: 'Noah Carter',
          color: '#8B4513',
          title: 'Painter',
        },
        {
          externalId: 9,
          name: 'Emma Scott',
          color: '#800080',
          title: 'Roofer',
        },
        {
          externalId: 10,
          name: 'William Bennett',
          color: '#DC143C',
          title: 'Plasterer',
        },
        {
          externalId: 11,
          name: 'Olivia Parker',
          color: '#4682B4',
          title: 'Demolition Specialist',
        },
        //</hide-comment>
      ];

      var tasks = [
        {
          id: 'work-1',
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Electrical wiring installation',
          resource: 2,
        },
        {
          id: 'work-2',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Power panel connection',
          resource: 2,
        },
        {
          id: 'work-3',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Water pipe fitting',
          resource: 3,
        },
        //<hide-comment>
        {
          id: 'work-4',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Leak inspection and sealing',
          resource: 3,
        },
        {
          id: 'work-5',
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Wood framing for new walls',
          resource: 5,
        },
        {
          id: 'work-6',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Door and window frame assembly',
          resource: 5,
        },
        {
          id: 'work-7',
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Bricklaying for foundation',
          resource: 6,
        },
        {
          id: 'work-8',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,16)',
          title: 'Applying cement mortar',
          resource: 6,
        },
        {
          id: 'work-9',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Welding steel beams',
          resource: 8,
        },
        {
          id: 'work-10',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Structural reinforcement welding',
          resource: 8,
        },
        {
          id: 'work-11',
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Roof tiling',
          resource: 9,
        },
        {
          id: 'work-12',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Leak-proofing and insulation',
          resource: 9,
        },
        {
          id: 'work-13',
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,14)',
          title: 'Operating bulldozer for site leveling',
          resource: 11,
        },
        {
          id: 'work-14',
          start: 'dyndatetime(y,m,d,14,20)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Material lifting with crane',
          resource: 11,
        },
        {
          id: 'work-15',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Land survey for new roads',
          resource: 12,
        },
        {
          id: 'work-16',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Boundary marking for structures',
          resource: 12,
        },
        {
          id: 'work-17',
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Concrete floor polishing',
          resource: 14,
        },
        {
          id: 'work-18',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Applying protective coatings on concrete',
          resource: 14,
        },
        {
          id: 'work-19',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Steel frame installation',
          resource: 15,
        },
        {
          id: 'work-20',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Bolting and securing steel structures',
          resource: 15,
        },
        {
          id: 'work-21',
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,14)',
          title: 'Interior painting preparation',
          resource: 17,
        },
        {
          id: 'work-22',
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,d,18,10)',
          title: 'Applying finishing coats',
          resource: 17,
        },
        {
          id: 'work-23',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Glass panel measurement and cutting',
          resource: 18,
        },
        {
          id: 'work-24',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Installing large glass windows',
          resource: 18,
        },
        {
          id: 'work-3',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Concrete foundation pouring',
          resource: 19,
        },
        {
          id: 'work-4',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Curing and leveling concrete',
          resource: 19,
        },
        {
          id: 'work-5',
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Structural steel beam welding',
          resource: 20,
        },
        {
          id: 'work-6',
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Reinforcement bar assembly',
          resource: 20,
        },
        {
          id: 'work-7',
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,14)',
          title: 'Excavation for foundation',
          resource: 21,
        },
        {
          id: 'work-8',
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,17,30)',
          title: 'Operating crane for material transport',
          resource: 21,
        },
        {
          id: 'work-9',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Land survey for new section',
          resource: 22,
        },
        {
          id: 'work-10',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Marking layout for construction work',
          resource: 22,
        },
        {
          id: 'work-11',
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Exterior wall painting',
          resource: 23,
        },
        {
          id: 'work-12',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Applying protective coatings',
          resource: 23,
        },
        {
          id: 'work-13',
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Roof tiling installation',
          resource: 24,
        },
        {
          id: 'work-14',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17,45)',
          title: 'Leak-proofing and insulation work',
          resource: 24,
        },
        {
          id: 'work-15',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Plastering interior walls',
          resource: 25,
        },
        {
          id: 'work-16',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Ceiling plaster and finishing',
          resource: 25,
        },
        {
          id: 'work-17',
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Controlled demolition of old structure',
          resource: 26,
        },
        {
          id: 'work-18',
          start: 'dyndatetime(y,m,d,15,15)',
          end: 'dyndatetime(y,m,d,17,45)',
          title: 'Site cleanup and debris removal',
          resource: 26,
        },
        //</hide-comment>
      ];

      var tempResource = {
        temp: true,
        name: 'Drag Technicians here',
        title: '',
        reorder: false,
      };

      function generateExternalResources() {
        $availableInstallersList.empty();
        availableInstallers.forEach(function (installer) {
          var workElm =
            '<div id="demo-ext-res-' +
            installer.id +
            '" class="mbsc-flex mds-ext-res-item">' +
            '<div class="mds-ext-res-avatar" style="background: ' +
            installer.color +
            '">' +
            installer.name[0] +
            '</div>' +
            '<div class="mds-ext-res-cont">' +
            '<div class="mds-ext-res-name">' +
            installer.name +
            '</div>' +
            '<div class="mds-ext-res-title">' +
            installer.title +
            '</div>' +
            '</div>';

          $availableInstallersList.append(workElm);

          $('#demo-ext-res-' + installer.id)
            .mobiscroll()
            .draggable({
              dragData: installer,
              type: 'resource',
            });
        });
      }

      var timelineInst = $('#demo-ext-res-drop-calendar')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            timeline: { type: 'day', resourceReorder: true, startTime: '07:00', endTime: '18:00', listing: true },
          },
          data: tasks,
          dragBetweenResources: false,
          externalResourceDrop: true,
          externalResourceDrag: true,
          resources: installers,
          renderResourceHeader: function () {
            return (
              '<div class="mbsc-flex mbsc-align-items-center"><div class="mds-ext-res-header">Set up teams</div>' +
              '<button mbsc-button id="demo-ext-res-add" data-variant="outline" class="mds-ext-res-add">Add team</button></div>'
            );
          },
          renderResource: function (resource) {
            return resource.isParent || resource.temp
              ? '<div class="mds-ext-res-name mbsc-flex' + (resource.temp ? ' mds-ext-res-name-temp' : '') + '">' + resource.name + '</div>'
              : '<div class="mbsc-flex">' +
                  '<div class="mds-ext-res-avatar" style="background: ' +
                  resource.color +
                  '">' +
                  resource.name[0] +
                  '</div>' +
                  '<div class="mds-ext-res-cont">' +
                  '<div class="mds-ext-res-name ' +
                  '">' +
                  resource.name +
                  '</div>' +
                  '<div class="mds-ext-res-title">' +
                  resource.title +
                  '</div>' +
                  '</div>' +
                  '</div>';
          },
          onResourceCreate: function (args) {
            var newResourceId = args.resource.externalId;
            availableInstallers = availableInstallers.filter(function (installer) {
              return installer.id !== newResourceId;
            });

            $('#demo-ext-res-' + newResourceId).remove();
            mobiscroll.toast({
              // context,
              message: args.resource.name + ' added to ' + args.parent.name,
            });
          },
          onResourceOrderUpdate: function (args) {
            installers = args.resources;
            var parent = args.parent;
            var oldParent = args.oldParent;

            if (parent && parent.children) {
              // Remove placeholder resource
              parent.children = parent.children.filter(function (child) {
                return !child.temp;
              });
            }
            if (oldParent && !oldParent.children.length) {
              // Add placeholder resource
              tempResource.id = 'temp-it' + guid++;
              oldParent.children.push(tempResource);
            }
          },
          onResourceDelete: function (args) {
            mobiscroll.toast({
              // context,
              message: args.resource.name + ' is available',
            });
          },
        })
        .mobiscroll('getInst');

      $('#demo-ext-res-drop-cont')
        .mobiscroll()
        .dropcontainer({
          onItemDrop: function (args) {
            if (args.data && args.dataType === 'resource') {
              if (args.data.externalId === undefined) {
                args.data.externalId = 'res-' + guid++;
              }
              availableInstallers.push(args.data);
              generateExternalResources();
            }
          },
        });

      $('#demo-ext-res-drop-calendar').on('click', '#demo-ext-res-add', function () {
        var teamLength = installers.length + 1;
        var resourceId = 'it-' + guid++;
        tempResource.id = 'temp-' + resourceId;
        installers.push({
          id: resourceId,
          eventCreation: false,
          reorder: false,
          name: 'Installer team ' + teamLength,
          children: [tempResource],
        });
        timelineInst.setOptions({ resources: installers.slice() });

        setTimeout(function () {
          timelineInst.navigateToEvent({
            start: new Date(),
            resource: resourceId,
          });
        });
      });

      generateExternalResources();
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding mds-ext-res-drop">
  <div class="mbsc-row">
    <div id="demo-ext-res-drop-cont" class="mbsc-col-sm-3 mbsc-flex-col mds-ext-res-drop-cont">
      <div class="mds-workers-title">Available technicians</div>
      <div id="demo-ext-res-drop-list" class="mds-workers-list"></div>
    </div>
    <div class="mbsc-col-sm-9 mds-ext-res-drop-calendar">
      <div id="demo-ext-res-drop-calendar"></div>
    </div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-ext-res-drop-calendar {
  border-left: 1px solid #ccc;
}

.mds-ext-res-drop-calendar .mbsc-timeline-row { 
  height: 50px; 
}

.mds-ext-res-drop-calendar .mbsc-timeline-row-gutter { 
  height: 8px; 
}

.mds-ext-res-drop-calendar .mbsc-timeline-resource-col {
  width: 250px;
}

.mds-ext-res-drop-calendar .mbsc-timeline-parent { 
  height: 32px; 
}

.mds-ext-res-drop-calendar .mbsc-timeline-resource {
  align-items: center;
  align-content: center;
}

.mds-ext-res-drop-calendar .mds-ext-res-add {
  margin-left: auto;
  padding: 2px 6px;
  line-height: 24px;
}

.mds-ext-res-header {
  font-weight: 600;
  font-size: .875em;
  line-height: 1.5em;
  text-transform: uppercase;
  color: #6e6e6e;
}

.mds-ext-res-name-temp {
  font-style: italic;
  opacity: 0.4;
}

.mds-ext-res-drop-cont {
  height: 100%; 
}

.mds-ext-res-drop-cont .mds-ext-res-title {
  padding: 12px 16px;
}

.mds-ext-res-list {
  overflow: auto;
}

.mds-ext-res-item {
  background: #dde0d8;
  padding: 10px;
  margin: 16px;
  border-radius: 8px;
  font-family: -apple-system, Segoe UI, Roboto, sans-serif;
}

.mds-ext-res-item:first-child {
  margin-top: 0
}

.mds-ext-res-cont {
  padding: 0 7px;
}

.mds-ext-res-name {
  font-size: 14px;
  font-weight: 600;
}

.mds-ext-res-title {
  padding-top: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.mds-ext-res-avatar {
  width: 36px;
  min-width: 36px;
  height: 36px;
  line-height: 36px;
  border-radius: 18px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  font-weight: 400;
}

.mds-ext-res-drop,
.mds-ext-res-drop .mbsc-row,
.mds-ext-res-drop-calendar {
  height: 100%;
}
  `,
};
