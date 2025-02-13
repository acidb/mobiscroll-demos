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
      var $externalCont = $('#mds-ext-res-drop-cont');
      var $nightShiftList = $('#mds-workers-list');
      var installers = [
        {
          id: 1,
          name: 'Installer team 1',
          children: [
            {
              id: 2,
              name: 'Emily Carter',
              color: '#007acc',
              title: 'Electrician',
              img: 'https://img.mobiscroll.com/demos/f1.png',
            },
            {
              id: 3,
              name: 'Michael Lawson',
              color: '#008000',
              title: 'Plumber',
              img: 'https://img.mobiscroll.com/demos/f2.png',
            },
          ],
        },
        //<hidden>
        {
          id: 4,
          name: 'Installer team 2',
          children: [
            {
              id: 5,
              name: 'James Brown',
              color: '#FF5733',
              title: 'Carpenter',
              img: 'https://img.mobiscroll.com/demos/f3.png',
            },
          ],
        },

        {
          id: 7,
          name: 'Installer team 3',
          children: [
            {
              id: 8,
              name: 'Daniel Wilson',
              color: '#900C3F',
              title: 'Welder',
              img: 'https://img.mobiscroll.com/demos/f5.png',
            },
          ],
        },
        {
          id: 10,
          name: 'Installer team 4',
          children: [
            {
              id: 11,
              name: 'Benjamin Harris',
              color: '#1ABC9C',
              title: 'Heavy Equipment Operator',
              img: 'https://img.mobiscroll.com/demos/f7.png',
            },
          ],
        },
        {
          id: 13,
          name: 'Installer team 5',
          children: [
            {
              id: 14,
              name: 'William Anderson',
              color: '#F39C12',
              title: 'Concrete Finisher',
              img: 'https://img.mobiscroll.com/demos/f9.png',
            },
            {
              id: 15,
              name: 'Emma Thompson',
              color: '#D35400',
              title: 'Steelworker',
              img: 'https://img.mobiscroll.com/demos/f10.png',
            },
          ],
        },
        // {
        //   id: 16,
        //   name: 'Installer team 6',
        //   children: [
        //     {
        //       id: 17,
        //       name: 'Alexander Roberts',
        //       color: '#8E44AD',
        //       title: 'Painter',
        //       img: 'https://img.mobiscroll.com/demos/f11.png',
        //     },
        //     {
        //       id: 18,
        //       name: 'Charlotte White',
        //       color: '#34495E',
        //       title: 'Glazier',
        //       img: 'https://img.mobiscroll.com/demos/f12.png',
        //     },
        //   ],
        // },
        //</hidden>
      ];

      var availableInstallers = [
        {
          id: 6,
          name: 'Adam Miller',
          color: '#C70039',
          title: 'Mason',
          img: 'https://img.mobiscroll.com/demos/f4.png',
          type: 'resource',
        },
        {
          id: 12,
          name: 'Isabella Martinez',
          color: '#2ECC71',
          title: 'Surveyor',
          img: 'https://img.mobiscroll.com/demos/f8.png',
          type: 'resource',
        },
        {
          id: 18,
          name: 'Mark White',
          color: '#34495E',
          title: 'Glazier',
          img: 'https://img.mobiscroll.com/demos/f12.png',
          type: 'resource',
        },
        //<hidden>
        {
          id: 19,
          name: 'Liam Foster',
          color: '#1E90FF',
          title: 'Concrete Finisher',
          img: 'https://img.mobiscroll.com/demos/f13.png',
          type: 'resource',
        },
        {
          id: 20,
          name: 'Sophia Adams',
          color: '#FF4500',
          title: 'Steelworker',
          img: 'https://img.mobiscroll.com/demos/f14.png',
          type: 'resource',
        },
        {
          id: 21,
          name: 'Ethan Murphy',
          color: '#228B22',
          title: 'Heavy Equipment Operator',
          img: 'https://img.mobiscroll.com/demos/f15.png',
          type: 'resource',
        },
        {
          id: 22,
          name: 'Ava Mitchell',
          color: '#FFD700',
          title: 'Surveyor',
          img: 'https://img.mobiscroll.com/demos/f16.png',
          type: 'resource',
        },
        // {
        //   id: 23,
        //   name: 'Noah Carter',
        //   color: '#8B4513',
        //   title: 'Painter',
        //   img: 'https://img.mobiscroll.com/demos/f17.png',
        //   type: 'resource',
        // },
        // {
        //   id: 24,
        //   name: 'Emma Scott',
        //   color: '#800080',
        //   title: 'Roofer',
        //   img: 'https://img.mobiscroll.com/demos/f18.png',
        //   type: 'resource',
        // },
        // {
        //   id: 25,
        //   name: 'William Bennett',
        //   color: '#DC143C',
        //   title: 'Plasterer',
        //   img: 'https://img.mobiscroll.com/demos/f19.png',
        //   type: 'resource',
        // },
        // {
        //   id: 26,
        //   name: 'Olivia Parker',
        //   color: '#4682B4',
        //   title: 'Demolition Specialist',
        //   img: 'https://img.mobiscroll.com/demos/f20.png',
        //   type: 'resource',
        // },
        //</hidden>
      ];

      var constructionWork = [
        // Group 1
        {
          id: 'shift-1',
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Electrical wiring installation',
          resource: 2,
        },
        {
          id: 'shift-2',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,20)',
          title: 'Power panel connection',
          resource: 2,
        },
        {
          id: 'shift-3',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Water pipe fitting',
          resource: 3,
        },
        //<hidden>
        {
          id: 'shift-4',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Leak inspection and sealing',
          resource: 3,
        },
        {
          id: 'shift-5',
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Wood framing for new walls',
          resource: 5,
        },
        {
          id: 'shift-6',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Door and window frame assembly',
          resource: 5,
        },
        {
          id: 'shift-7',
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Bricklaying for foundation',
          resource: 6,
        },
        {
          id: 'shift-8',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,20)',
          title: 'Applying cement mortar',
          resource: 6,
        },
        {
          id: 'shift-9',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Welding steel beams',
          resource: 8,
        },
        {
          id: 'shift-10',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Structural reinforcement welding',
          resource: 8,
        },
        {
          id: 'shift-11',
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Roof tiling',
          resource: 9,
        },
        {
          id: 'shift-12',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Leak-proofing and insulation',
          resource: 9,
        },
        {
          id: 'shift-13',
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,14)',
          title: 'Operating bulldozer for site leveling',
          resource: 11,
        },
        {
          id: 'shift-14',
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,d,21)',
          title: 'Material lifting with crane',
          resource: 11,
        },
        {
          id: 'shift-15',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Land survey for new roads',
          resource: 12,
        },
        {
          id: 'shift-16',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Boundary marking for structures',
          resource: 12,
        },
        {
          id: 'shift-17',
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Concrete floor polishing',
          resource: 14,
        },
        {
          id: 'shift-18',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Applying protective coatings on concrete',
          resource: 14,
        },
        {
          id: 'shift-19',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Steel frame installation',
          resource: 15,
        },
        {
          id: 'shift-20',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Bolting and securing steel structures',
          resource: 15,
        },
        {
          id: 'shift-21',
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,14)',
          title: 'Interior painting preparation',
          resource: 17,
        },
        {
          id: 'shift-22',
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Applying finishing coats',
          resource: 17,
        },
        {
          id: 'shift-23',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Glass panel measurement and cutting',
          resource: 18,
        },
        {
          id: 'shift-24',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Installing large glass windows',
          resource: 18,
        },
        {
          id: 'shift-1',
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Glass panel installation',
          resource: 18,
        },
        {
          id: 'shift-2',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,20)',
          title: 'Window fitting and sealing',
          resource: 18,
        },
        {
          id: 'shift-3',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Concrete foundation pouring',
          resource: 19,
        },
        {
          id: 'shift-4',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Curing and leveling concrete',
          resource: 19,
        },
        {
          id: 'shift-5',
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Structural steel beam welding',
          resource: 20,
        },
        {
          id: 'shift-6',
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,22)',
          title: 'Reinforcement bar assembly',
          resource: 20,
        },
        {
          id: 'shift-7',
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,14)',
          title: 'Excavation for foundation',
          resource: 21,
        },
        {
          id: 'shift-8',
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,d,21)',
          title: 'Operating crane for material transport',
          resource: 21,
        },
        {
          id: 'shift-9',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Land survey for new section',
          resource: 22,
        },
        {
          id: 'shift-10',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Marking layout for construction work',
          resource: 22,
        },
        {
          id: 'shift-11',
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Exterior wall painting',
          resource: 23,
        },
        {
          id: 'shift-12',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Applying protective coatings',
          resource: 23,
        },
        {
          id: 'shift-13',
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Roof tiling installation',
          resource: 24,
        },
        {
          id: 'shift-14',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Leak-proofing and insulation work',
          resource: 24,
        },
        {
          id: 'shift-15',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Plastering interior walls',
          resource: 25,
        },
        {
          id: 'shift-16',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Ceiling plaster and finishing',
          resource: 25,
        },
        {
          id: 'shift-17',
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Controlled demolition of old structure',
          resource: 26,
        },
        {
          id: 'shift-18',
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,22)',
          title: 'Site cleanup and debris removal',
          resource: 26,
        },
        //</hidden>
      ];

      function generateExternalResources(nightShift) {
        if (nightShift && availableInstallers.length) {
          $nightShiftList.html('');
          availableInstallers.forEach(function (shift) {
            var shiftElm =
              '<div id="md-resource-' +
              shift.id +
              '" class="mbsc-flex mds-ext-res-drop-task">' +
              '<div class="mds-ext-res-dnd-avatar" style="background: ' +
              shift.color +
              '">' +
              shift.name[0] +
              '</div>' +
              '<div class="mds-ext-res-dnd-cont">' +
              '<div class="mds-ext-res-dnd-name">' +
              shift.name +
              '</div>' +
              '<div class="mds-ext-res-dnd-title">' +
              shift.title +
              '</div>' +
              '</div>';

            $nightShiftList.append(shiftElm);

            $('#md-resource-' + shift.id)
              .mobiscroll()
              .draggable({
                dragData: shift,
              });
          });
        }
      }

      var timelineInst = $('#mds-ext-res-drop-calendar')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            timeline: { type: 'day', resourceReorder: true, startTime: '07:00', endTime: '18:00' },
          },
          data: constructionWork,
          dragToMove: true,
          dragToCreate: true,
          externalDrop: true,
          externalDrag: true,
          resources: installers,
          dragBetweenResources: false,
          renderResourceHeader: function () {
            return '<div class="mbsc-flex mbsc-align-items-center"><div class="mds-workers-title">Set up teams</div><button mbsc-button class="mds-create-new-team">Add new team</button></div>';
          },
          renderResource: function (resource) {
            return resource.children
              ? '<div class="mds-ext-res-dnd-name mbsc-no-padding">' + resource.name + '</div>'
              : '<div class="mbsc-flex">' +
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
            var parent = args.parent;
            var newResId = args.resource.id;

            if (parent && parent.children.length >= 2) {
              mobiscroll.toast({
                // context,
                message: 'Build teams up to two members',
              });
              return false;
            } else {
              availableInstallers = availableInstallers.filter(function (s) {
                return s.id !== newResId;
              });

              $('#md-resource-' + newResId).remove();
              mobiscroll.toast({
                // context,
                message: args.resource.name + ' added',
              });
            }
          },
          onResourceOrderUpdate: function (args) {
            installers = args.resources;
          },
          onResourceDelete: function (args) {
            mobiscroll.toast({
              // context,
              message: args.resource.name + ' unscheduled',
            });
          },
        })
        .mobiscroll('getInst');

      $externalCont.mobiscroll().dropcontainer({
        onItemDrop: function (args) {
          if (args.data) {
            availableInstallers.push(args.data);
            generateExternalResources(availableInstallers);
          }
        },
      });

      $('.mds-create-new-team').on('click', function () {
        var teamLength = installers.length + 1;
        installers.push({ id: 'it-' + teamLength, name: 'Installer team ' + teamLength, children: [] });
        timelineInst.setOptions({ resources: installers.slice() });
      });

      generateExternalResources(availableInstallers);
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
     <div id="mds-ext-res-drop-cont" class="mbsc-col-sm-3 mds-ext-res-drop-cont mbsc-flex-col">
          <div class="mds-workers-title">Available technicians</div>
          <div id="mds-workers-list"></div>
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
  height: 70px; 
}

.mds-ext-res-drop-calendar .mbsc-timeline-parent { 
  height: 32px; 
}

.mds-ext-res-drop-calendar .mbsc-timeline-resource-col {
  width: 250px;
}

.mds-workers-title {
  font-weight: 600;
   font-size: .875em;
  line-height: 1.5em;
  text-transform: uppercase;
  color: #6e6e6e;
}

.mds-ext-res-drop-cont .mds-workers-title {
  padding: 16px 16px 0 16px;
}

.mds-ext-res-drop-cont {
    height: 100%;
    overflow: auto;
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
  line-height: 24px;
}

.mds-ext-res-dnd-title {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.mds-ext-res-dnd-avatar {
  width: 36px;
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
