import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var availableWorkersList = document.querySelector('.mds-workers-list');
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
        id: 7,
        name: 'Installer team 3',
        eventCreation: false,
        reorder: false,
        children: [
          {
            id: 8,
            name: 'Daniel Wilson',
            color: '#900C3F',
            title: 'Welder',
          },
        ],
      },
      {
        id: 10,
        name: 'Installer team 4',
        eventCreation: false,
        reorder: false,
        children: [
          {
            id: 11,
            name: 'Benjamin Harris',
            color: '#1ABC9C',
            title: 'Heavy Equipment Operator',
          },
        ],
      },
      {
        id: 13,
        name: 'Installer team 5',
        eventCreation: false,
        reorder: false,
        children: [
          {
            id: 14,
            name: 'William Anderson',
            color: '#F39C12',
            title: 'Concrete Finisher',
          },
          {
            id: 15,
            name: 'Emma Thompson',
            color: '#D35400',
            title: 'Steelworker',
          },
        ],
      },
      {
        id: 16,
        name: 'Installer team 6',
        eventCreation: false,
        reorder: false,
        children: [
          {
            id: 17,
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
        id: 6,
        name: 'Adam Miller',
        color: '#C70039',
        title: 'Mason',
        type: 'resource',
      },
      {
        id: 12,
        name: 'Isabella Martinez',
        color: '#2ECC71',
        title: 'Surveyor',
        type: 'resource',
      },
      {
        id: 18,
        name: 'Mark White',
        color: '#34495E',
        title: 'Glazier',
        type: 'resource',
      },
      //<hide-comment>
      {
        id: 19,
        name: 'Liam Foster',
        color: '#1E90FF',
        title: 'Concrete Finisher',
        type: 'resource',
      },
      {
        id: 20,
        name: 'Sophia Adams',
        color: '#FF4500',
        title: 'Steelworker',
        type: 'resource',
      },
      {
        id: 21,
        name: 'Ethan Murphy',
        color: '#228B22',
        title: 'Heavy Equipment Operator',
        type: 'resource',
      },
      {
        id: 22,
        name: 'Ava Mitchell',
        color: '#FFD700',
        title: 'Surveyor',
        type: 'resource',
      },
      {
        id: 23,
        name: 'Noah Carter',
        color: '#8B4513',
        title: 'Painter',
        type: 'resource',
      },
      {
        id: 24,
        name: 'Emma Scott',
        color: '#800080',
        title: 'Roofer',
        type: 'resource',
      },
      {
        id: 25,
        name: 'William Bennett',
        color: '#DC143C',
        title: 'Plasterer',
        type: 'resource',
      },
      {
        id: 26,
        name: 'Olivia Parker',
        color: '#4682B4',
        title: 'Demolition Specialist',
        type: 'resource',
      },
      //</hide-comment>
    ];
    var constructionWork = [
      // Group 1
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

    function generateExternalResources(availableWorkers) {
      if (availableWorkers && availableInstallers.length) {
        availableWorkersList.innerHtml = '';
        availableInstallers.forEach(function (work) {
          var workElm = document.createElement('div');
          workElm.innerHTML =
            '<div id="md-resource-' +
            work.id +
            '" class="mbsc-flex mds-ext-res-drop-task">' +
            '<div class="mds-ext-res-dnd-avatar" style="background: ' +
            work.color +
            '">' +
            work.name[0] +
            '</div>' +
            '<div class="mds-ext-res-dnd-cont">' +
            '<div class="mds-ext-res-dnd-name">' +
            work.name +
            '</div>' +
            '<div class="mds-ext-res-dnd-title">' +
            work.title +
            '</div>' +
            '</div>';

          availableWorkersList.append(workElm);

          mobiscroll.draggable('#md-resource-' + work.id, {
            dragData: work,
          });
        });
      }
    }

    var timelineInst = mobiscroll.eventcalendar('#mds-ext-res-drop-calendar', {
      view: {
        timeline: { type: 'day', resourceReorder: true, startTime: '07:00', endTime: '18:00', listing: true },
      },
      data: constructionWork,
      externalResourceDrop: true,
      externalResourceDrag: true,
      resources: installers,
      dragBetweenResources: false,
      renderResourceHeader: function () {
        return (
          '<div class="mbsc-flex mbsc-align-items-center"><div class="mds-workers-title">Set up teams</div>' +
          '<button mbsc-button id="mds-create-new-team" data-variant="outline" class="mds-create-new-team">Add team</button></div>'
        );
      },
      renderResource: function (resource) {
        return resource.children
          ? '<div class="mds-ext-res-dnd-name mbsc-no-padding">' + resource.name + '</div>'
          : resource &&
              '<div class="mbsc-flex">' +
                '<div class="mds-ext-res-dnd-avatar" style="background: ' +
                resource.color +
                '">' +
                resource.name[0] +
                '</div>' +
                '<div class="mds-ext-res-dnd-cont">' +
                '<div class="mds-ext-res-dnd-name">' +
                resource.name +
                '</div>' +
                '<div class="mds-ext-res-dnd-title">' +
                resource.title +
                '</div>' +
                '</div>' +
                '</div>';
      },
      onResourceCreate: function (args) {
        var newResId = args.resource.id;
        availableInstallers = availableInstallers.filter(function (s) {
          return s.id !== newResId;
        });

        document.getElementById('md-resource-' + newResId).remove();

        mobiscroll.toast({
          message: args.resource.name + ' added',
        });
      },
      onResourceExpand: function (args) {
        var resource = args.resourceObj;

        if (resource.children) {
          resource.children = resource.children.filter(function (child) {
            return !child.temp;
          });
        }
      },
      onResourceOrderUpdate: function (args) {
        installers = args.resources;
      },
      onResourceDelete: function (args) {
        mobiscroll.toast({
          message: args.resource.name + ' is available',
        });
      },
    });

    mobiscroll.dropcontainer('#mds-ext-res-drop-cont', {
      onItemDrop: function (args) {
        if (args.data && args.data.type === 'resource') {
          availableInstallers.push(args.data);
          generateExternalResources(availableInstallers);
        }
      },
    });

    document.querySelector('.mds-ext-res-drop-calendar').addEventListener('click', function (event) {
      if (event.target.closest('.mds-create-new-team')) {
        var teamLength = installers.length + 1;
        var resId = 'it-' + teamLength;
        installers.push({
          id: resId,
          eventCreation: false,
          collapsed: true,
          reorder: false,
          name: 'Installer team ' + teamLength,
          temp: resId + 'temp',
          children: [
            {
              id: resId + 'temp',
              temp: true,
              name: 'Drag new resource here',
              title: '',
              reorder: false,
            },
          ],
        });
        timelineInst.setOptions({ resources: installers.slice() });

        setTimeout(function () {
          timelineInst.navigateToEvent({
            start: new Date(),
            resource: 'it-' + teamLength,
          });
        });
      }
    });

    generateExternalResources(availableInstallers);
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
     <div id="mds-ext-res-drop-cont" class="mbsc-col-sm-3 mds-ext-res-drop-cont mbsc-flex-col">
          <div class="mds-workers-title">Available technicians</div>
          <div class="mds-workers-list"></div>
      </div>
      <div class="mbsc-col-sm-9 mds-ext-res-drop-calendar">
          <div id="mds-ext-res-drop-calendar"></div>
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
}

.mds-workers-title {
  font-weight: 600;
  font-size: .875em;
  line-height: 1.5em;
  text-transform: uppercase;
  color: #6e6e6e;
}

.mds-ext-res-drop-cont .mds-workers-title {
  padding: 12px 16px;
}

.mds-ext-res-drop-cont {
    height: 100%; 
}

.mds-ext-res-drop-cont .mds-workers-list {
   overflow: auto;
}

.mds-ext-res-drop-task:first-child {
  margin-top: 0
}

.mds-ext-res-drop-task {
    background: #dde0d8;
    padding: 10px;
    margin: 16px;
    border-radius: 8px;
    font-family: -apple-system, Segoe UI, Roboto, sans-serif;
}

.mds-ext-res-dnd-cont {
  padding: 0 7px;
}

.mds-ext-res-dnd-name {
  font-size: 14px;
  font-weight: 600;
}

.mds-ext-res-dnd-title {
  padding-top: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.mds-ext-res-drop-calendar .mds-create-new-team {
  margin-left: auto;
  padding: 2px 6px;
  line-height: 24px;
}

.mds-ext-res-dnd-avatar {
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

.demo-resource-external-dnd .demo-wrapper,
.demo-resource-external-dnd .mbsc-grid,
.demo-resource-external-dnd .mbsc-row,
.demo-resource-external-dnd .mds-ext-res-drop-calendar {
    height: 100%;
}
  `,
};
