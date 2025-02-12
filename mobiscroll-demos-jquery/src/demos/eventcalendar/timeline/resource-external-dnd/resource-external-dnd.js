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
      var $nightShiftList = $('#mds-nightshift-list');
      var doctors = [
        {
          id: 2,
          name: 'Dr. Emily Carter',
          color: '#007acc',
          title: 'Neurology',
          img: 'https://img.mobiscroll.com/demos/f1.png',
        },
        {
          id: 3,
          name: 'Dr. Michael Lawson',
          color: '#008000',
          title: 'Orthopedics',
          img: 'https://img.mobiscroll.com/demos/m2.png',
        },
        {
          id: 4,
          name: 'Dr. Sophia Bennett',
          color: '#ff9900',
          title: 'Pediatrics',
          img: 'https://img.mobiscroll.com/demos/f2.png',
        },
        {
          id: 5,
          name: 'Dr. James Anderson',
          color: '#800080',
          title: 'Oncology',
          img: 'https://img.mobiscroll.com/demos/m3.png',
        },
      ];

      var nightShift = [
        {
          id: 1,
          name: 'Dr. Ryan Gregor',
          color: '#e20000',
          title: 'Cardiology',
          img: 'https://img.mobiscroll.com/demos/m1.png',
          type: 'resource',
        },
        {
          id: 6,
          name: 'Dr. Olivia Turner',
          color: '#ff4500',
          title: 'Dermatology',
          img: 'https://img.mobiscroll.com/demos/f3.png',
          type: 'resource',
        },
        {
          id: 7,
          name: 'Dr. William Harris',
          color: '#00ced1',
          title: 'Radiology',
          img: 'https://img.mobiscroll.com/demos/m4.png',
          type: 'resource',
        },
        {
          id: 8,
          name: 'Dr. Ava Mitchell',
          color: '#ff1493',
          title: 'Gynecology',
          img: 'https://img.mobiscroll.com/demos/f4.png',
          type: 'resource',
        },
        {
          id: 9,
          name: 'Dr. Benjamin Collins',
          color: '#32cd32',
          title: 'General Surgery',
          img: 'https://img.mobiscroll.com/demos/m3.png',
          type: 'resource',
        },
        // {
        //   id: 10,
        //   name: 'Dr. Isabella Reed',
        //   color: '#8b4513',
        //   title: 'Endocrinology',
        //   img: 'https://img.mobiscroll.com/demos/f5.png',
        // },
        // {
        //   id: 11,
        //   name: 'Dr. Daniel Scott',
        //   color: '#4682b4',
        //   title: 'Psychiatry',
        //   img: 'https://img.mobiscroll.com/demos/m6.png',
        // },
      ];

      var shiftTodos = [
        // Day Shifts
        {
          id: 'shift-1',
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Cardio tests result checks',
          resource: 1,
        },
        {
          id: 'shift-2',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,20)',
          title: 'ECG monitoring & patient consultations',
          resource: 1,
        },
        {
          id: 'shift-3',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Neurological assessments & MRI reviews',
          resource: 2,
        },
        {
          id: 'shift-4',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Epilepsy case follow-ups',
          resource: 2,
        },
        {
          id: 'shift-5',
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Fracture treatment & X-ray analysis',
          resource: 3,
        },
        {
          id: 'shift-6',
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,22)',
          title: 'Joint replacement surgery review',
          resource: 3,
        },
        {
          id: 'shift-7',
          start: 'dyndatetime(y,m,d,7,30)',
          end: 'dyndatetime(y,m,d,12,30)',
          title: 'Pediatric wellness check-ups',
          resource: 4,
        },
        {
          id: 'shift-8',
          start: 'dyndatetime(y,m,d,13,30)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Vaccination & newborn assessments',
          resource: 4,
        },
        {
          id: 'shift-9',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,14)',
          title: 'Oncology patient consultations',
          resource: 5,
        },
        {
          id: 'shift-10',
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,d,21)',
          title: 'Chemotherapy treatment reviews',
          resource: 5,
        },
        // Night Shifts
        {
          id: 'shift-11',
          start: 'dyndatetime(y,m,d,20)',
          end: 'dyndatetime(y,m,d+1,2)',
          title: 'Emergency dermatology cases',
          resource: 6,
        },
        {
          id: 'shift-12',
          start: 'dyndatetime(y,m,d+1,2,30)',
          end: 'dyndatetime(y,m,d+1,8)',
          title: 'Skin allergy treatment & consultations',
          resource: 6,
        },
        {
          id: 'shift-13',
          start: 'dyndatetime(y,m,d,21)',
          end: 'dyndatetime(y,m,d+1,3)',
          title: 'Late-night MRI scans & imaging',
          resource: 7,
        },
        {
          id: 'shift-14',
          start: 'dyndatetime(y,m,d+1,3,30)',
          end: 'dyndatetime(y,m,d+1,9)',
          title: 'Radiology report reviews',
          resource: 7,
        },
        {
          id: 'shift-15',
          start: 'dyndatetime(y,m,d,22)',
          end: 'dyndatetime(y,m,d+1,4)',
          title: 'Overnight maternity ward rounds',
          resource: 8,
        },
        {
          id: 'shift-16',
          start: 'dyndatetime(y,m,d+1,4,30)',
          end: 'dyndatetime(y,m,d+1,10)',
          title: 'Ultrasound scans & prenatal care',
          resource: 8,
        },
        {
          id: 'shift-17',
          start: 'dyndatetime(y,m,d,23)',
          end: 'dyndatetime(y,m,d+1,5)',
          title: 'Emergency general surgery',
          resource: 9,
        },
        {
          id: 'shift-18',
          start: 'dyndatetime(y,m,d+1,5,30)',
          end: 'dyndatetime(y,m,d+1,11)',
          title: 'Post-surgical patient monitoring',
          resource: 9,
        },
        {
          id: 'shift-19',
          start: 'dyndatetime(y,m,d,23,30)',
          end: 'dyndatetime(y,m,d+1,6)',
          title: 'Psychiatric emergency consultations',
          resource: 10,
        },
        {
          id: 'shift-20',
          start: 'dyndatetime(y,m,d+1,6,30)',
          end: 'dyndatetime(y,m,d+1,12)',
          title: 'Mental health evaluations',
          resource: 10,
        },
      ];

      function generateExternalResources(nightShift) {
        if (nightShift && nightShift.length) {
          $nightShiftList.html('');
          nightShift.forEach(function (shift) {
            var shiftElm =
              '<div id="md-resource-' +
              shift.id +
              '" class="mbsc-flex mds-ext-res-drop-task"' +
              // ' style="background: ' +
              // shift.color +
              // '"' +
              '>' +
              '<img draggable="false" alt="Dr. Ryan Gregor" class="mds-ext-res-dnd-avatar" src="' +
              shift.img +
              '"/>' +
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

      $('#mds-ext-res-drop-calendar')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            timeline: { type: 'day', resourceReorder: true },
          },
          data: shiftTodos,

          dragToMove: true,
          dragToCreate: true,
          externalDrop: true,
          externalDrag: true,
          resources: doctors,
          renderResourceHeader: function () {
            return '<div class="mds-nightshift-title">Scheduled Shifts</div>';
          },
          renderResource: function (resource) {
            return (
              '<div class="mbsc-flex">' +
              '<img alt="' +
              resource.name +
              '" class="mds-ext-res-dnd-avatar" src="' +
              resource.img +
              '"/>' +
              '<div class="mds-ext-res-dnd-cont">' +
              '<div class="mds-ext-res-dnd-name">' +
              resource.name +
              '</div>' +
              '<div class="mds-ext-res-dnd-title">' +
              resource.title +
              '</div>' +
              '</div>' +
              '</div>'
            );
          },
          onResourceCreate: function (args) {
            var newResId = args.resource.id;
            nightShift = nightShift.filter(function (s) {
              return s.id !== newResId;
            });
            $('#md-resource-' + newResId).remove();
            mobiscroll.toast({
              // context,
              message: args.resource.name + ' added',
            });
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
            nightShift.push(args.data);
            generateExternalResources(nightShift);
          }
        },
      });

      generateExternalResources(nightShift);
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
     <div id="mds-ext-res-drop-cont" class="mbsc-col-sm-3 mds-ext-res-drop-cont">
          <div class="mds-nightshift-title">Available shifts </div>
          <div id="mds-nightshift-list"></div>
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

.mds-ext-res-drop-calendar .mbsc-timeline-resource-col {
  width: 250px;
}

.mds-nightshift-title {
  padding-top: 1em;
  text-align: center;
   font-size: .875em;
  line-height: 1.5em;
  text-transform: uppercase;
  color: #6e6e6e;
}

.mds-ext-res-drop-cont {
    height: 100%;
    min
    overflow: auto;
}

.mds-ext-res-drop-task {
    background: #dde0d8;
    padding: 10px;
    margin: 20px;
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
}

/*.demo-external-drag-drop-schedule-unschedule.demo-wrapper,
.demo-external-drag-drop-schedule-unschedule .mbsc-grid,
.demo-external-drag-drop-schedule-unschedule .mbsc-row,
.demo-external-drag-drop-schedule-unschedule .mds-ext-res-drop-calendar {
    height: 100%;
}*/
  `,
};
