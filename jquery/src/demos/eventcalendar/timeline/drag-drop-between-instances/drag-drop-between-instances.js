import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      function handleFirstScroll(ev) {
        if ($secondCalCont && !skipSecondScroll) {
          skipFirstScroll = true;
          $secondCalCont.scrollLeft(ev.target.scrollLeft);
        }
        skipFirstScroll = false;
      }

      function handleSecondScroll(ev) {
        if ($firstCalCont && !skipFirstScroll) {
          skipSecondScroll = true;
          $firstCalCont.scrollLeft(ev.target.scrollLeft);
        }
        skipSecondScroll = false;
      }

      var bookings = [
        {
          start: 'dyndatetime(y,m,d,6)',
          end: 'dyndatetime(y,m,d,10)',
          title: 'Budapest - Ljubljana',
          resource: 1,
        },
        {
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Ljubljana - Berlin',
          resource: 1,
        },
        {
          start: 'dyndatetime(y,m,d,4)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Los Angeles - Dublin',
          resource: 2,
        },
        {
          start: 'dyndatetime(y,m,d,18)',
          end: 'dyndatetime(y,m,d,23)',
          title: 'Dublin - Bucharest',
          resource: 2,
        },
        {
          start: 'dyndatetime(y,m,d,6)',
          end: 'dyndatetime(y,m,d,14)',
          title: 'Chicago - Amsterdam',
          resource: 3,
        },
        {
          start: 'dyndatetime(y,m,d,17)',
          end: 'dyndatetime(y,m,d,22)',
          title: 'Amsterdam - Cairo',
          resource: 3,
        },
        {
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,14)',
          title: 'Hong Kong - Sydney',
          resource: 4,
        },
        {
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,d,21)',
          title: 'Sydney - Tokyo',
          resource: 4,
        },
        {
          start: 'dyndatetime(y,m,d,4)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Paris - Washington, D.C.',
          resource: 5,
        },
        {
          start: 'dyndatetime(y,m,d,12)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Washington, D.C. - Los-Angeles',
          resource: 5,
        },
        {
          start: 'dyndatetime(y,m,d,3)',
          end: 'dyndatetime(y,m,d,11)',
          title: 'Los Angeles - Dublin',
          resource: 6,
        },
        {
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,18)',
          title: 'Dublin - Rome',
          resource: 6,
        },
        {
          start: 'dyndatetime(y,m,d,5)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Barcelona - Dubai',
          resource: 7,
        },
        {
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,20)',
          title: 'Dubai - Tokyo',
          resource: 7,
        },
        {
          start: 'dyndatetime(y,m,d,3,30)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Rome - Toronto',
          resource: 8,
        },
        {
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Toronto - New-York',
          resource: 8,
        },
        {
          start: 'dyndatetime(y,m,d,3)',
          end: 'dyndatetime(y,m,d,14)',
          title: 'Vienna - Shanghai',
          resource: 9,
        },
        {
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,23,30)',
          title: 'Shanghai - Moscow',
          resource: 9,
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'London - Cairo',
          resource: 10,
        },
        {
          start: 'dyndatetime(y,m,d,15,30)',
          end: 'dyndatetime(y,m,d,19,30)',
          title: 'Cairo - Sofia',
          resource: 10,
        },
        {
          start: 'dyndatetime(y,m,d,2)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Istanbul - New York',
          resource: 11,
        },
        {
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,20)',
          title: 'New York - Montreal',
          resource: 11,
        },
        {
          start: 'dyndatetime(y,m,d,5)',
          end: 'dyndatetime(y,m,d,11)',
          title: 'Seattle - Miami',
          resource: 12,
        },
        {
          start: 'dyndatetime(y,m,d,12)',
          end: 'dyndatetime(y,m,d,21)',
          title: 'Miami - Buenos-Aires',
          resource: 12,
        },
      ];

      var reservations = [
        {
          id: 1,
          name: 'Alison Reyes',
        },
        {
          id: 2,
          name: 'Shauna Perry',
        },
        {
          id: 3,
          name: 'Jan Whitney',
        },
        {
          id: 4,
          name: 'Freddie Durham',
        },
        {
          id: 5,
          name: 'William Dillon',
        },
        {
          id: 6,
          name: 'Tyrell Edwards',
        },
        {
          id: 7,
          name: 'Caitlyn Riddle',
        },
        {
          id: 8,
          name: 'Liam Mays',
        },
        {
          id: 9,
          name: 'Frank Medina',
        },
        {
          id: 10,
          name: 'Calvin Larsen',
        },
        {
          id: 11,
          name: 'Heather Walsh',
        },
        {
          id: 12,
          name: 'Conner Paul',
        },
      ];

      var jets = [
        {
          id: 'Op 1',
          name: 'Prestige Air',
          eventCreation: false,
          children: [
            {
              id: 1,
              code: '#AF 7703',
              crew: 52,
              name: 'Red Bolt',
              img: 'https://img.mobiscroll.com/demos/jet-1.jpg',
            },
            {
              id: 2,
              code: '#BQ 4718',
              crew: 47,
              name: 'Skyroar',
              img: 'https://img.mobiscroll.com/demos/jet-2.jpg',
            },
            {
              id: 3,
              code: '#ZM 8430',
              crew: 24,
              name: 'Agile Raven',
              img: 'https://img.mobiscroll.com/demos/jet-3.jpg',
            },
          ],
        },
        {
          id: 'Op 2',
          name: 'Elite Wings',
          eventCreation: false,
          children: [
            {
              id: 4,
              code: '#XG 5500',
              crew: 43,
              name: 'Monsterbolt',
              img: 'https://img.mobiscroll.com/demos/jet-4.jpg',
            },
            {
              id: 5,
              code: '#FL 2531',
              crew: 22,
              name: 'Airrise',
              img: 'https://img.mobiscroll.com/demos/jet-5.jpg',
            },
            {
              id: 6,
              code: '#PA 6487',
              crew: 84,
              name: 'Starblast',
              img: 'https://img.mobiscroll.com/demos/jet-6.jpg',
            },
            {
              id: 7,
              code: '#PP 9812',
              crew: 28,
              name: 'Ebonfire',
              img: 'https://img.mobiscroll.com/demos/jet-7.jpg',
            },
          ],
        },
        {
          id: 'Op 3',
          name: 'Luxury Skies',
          eventCreation: false,
          children: [
            {
              id: 8,
              code: '#DN 3191',
              crew: 36,
              name: 'Dark Bee',
              img: 'https://img.mobiscroll.com/demos/jet-8.jpg',
            },
            {
              id: 9,
              code: '#ZW 2328',
              crew: 76,
              name: 'Keen Sparrow',
              img: 'https://img.mobiscroll.com/demos/jet-9.jpg',
            },
            {
              id: 10,
              code: '#RX 9898',
              crew: 37,
              name: 'Jagged Bolt',
              img: 'https://img.mobiscroll.com/demos/jet-10.jpg',
            },
          ],
        },
      ];

      var firstDay;
      var lastDay;
      var $firstCalCont;
      var $secondCalCont;
      var skipFirstScroll;
      var skipSecondScroll;

      var firstCalendar = $('#demo-drag-drop-bw-inst-first')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'day',
              size: 1,
            },
          },
          dragToMove: false,
          dragToCreate: false,
          dragToResize: false,
          eventDelete: true,
          externalDrag: true,
          data: bookings,
          resources: reservations,
          onPageLoading: function (args) {
            firstDay = args.firstDay;
            lastDay = args.lastDay;
            if (secondCalendar) {
              secondCalendar.navigate(firstDay);
            }
          },
          onPageLoaded: function () {
            if (!$firstCalCont) {
              $firstCalCont = $('.md-drag-drop-bw-inst-first .mbsc-timeline-grid-scroll');
              $firstCalCont.on('scroll', handleFirstScroll);
            }
          },
          onEventDelete: function (args, inst) {
            // reservations = reservations.filter(function (f) { return f.id !== args.event.resource; });
            inst.setOptions({ resources: reservations });
          },
          onDestroy: function () {
            if ($firstCalCont) {
              $firstCalCont.off('scroll', handleFirstScroll);
            }
          },
        })
        .mobiscroll('getInst');

      var secondCalendar = $('#demo-drag-drop-bw-inst-second')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'day',
              size: 1,
            },
          },
          data: [
            {
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Barcelona - Dubai',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,15)',
              title: 'London - Cairo',
              resource: 6,
            },
            {
              start: 'dyndatetime(y,m,d,7,30)',
              end: 'dyndatetime(y,m,d,16)',
              title: 'Toronto - Rome',
              resource: 8,
            },
            {
              start: 'dyndatetime(y,m,d,4)',
              end: 'dyndatetime(y,m,d,8)',
              title: 'Ljubljana - Budapest',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d,2)',
              end: 'dyndatetime(y,m,d,10)',
              title: 'Paris - Washington, D.C.',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,23)',
              title: 'New York - Istanbul',
              resource: 7,
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,14)',
              title: 'Barcelona - Moscow',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d,15)',
              end: 'dyndatetime(y,m,d,23)',
              title: 'Moscow - Tokyo',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,19,30)',
              title: 'Montreal - Rio de Janeiro',
              resource: 2,
            },
          ],
          showControls: false,
          dragToCreate: false,
          dragToResize: false,
          dragInTime: false,
          externalDrop: true,
          dragToMove: true,
          dragBetweenResources: true,
          eventOverlap: false,
          resources: jets,
          renderResource: function (resource) {
            if (!resource.children) {
              return (
                '<div class="mbsc-flex mbsc-align-items-center mbsc-justify-content-start">' +
                '<img class="md-drag-drop-bw-inst-avatar" src="' +
                resource.img +
                '"/>' +
                '<div class="md-drag-drop-bw-inst-details mbsc-flex-col mbsc-flex-1-0">' +
                '<div>' +
                resource.name +
                '</div>' +
                '<div class="md-aircraft-code mbsc-flex mbsc-justify-content-between">' +
                '<div>' +
                resource.code +
                '</div>' +
                '<div>' +
                '&#x1F468;&#x1F3FE;&#x200D;&#x2708;' +
                resource.crew +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'
              );
            }
            return '<div>' + resource.name + '</div>';
          },
          onEventCreated: function (args, inst) {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: 'Flight scheduled',
            });
          },
          onEventCreateFailed: function (args, inst) {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: "There's already a flight on this date",
            });
          },
          onEventUpdateFailed: function (args, inst) {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: "There's already a flight on this date",
            });
          },
          onPageLoaded: function () {
            if (!$secondCalCont) {
              $secondCalCont = $('.md-drag-drop-bw-inst-second .mbsc-timeline-grid-scroll');
              $secondCalCont.on('scroll', handleSecondScroll);
            }
          },
          onDestroy: function () {
            if ($secondCalCont) {
              $secondCalCont.off('scroll', handleSecondScroll);
            }
          },
        })
        .mobiscroll('getInst');
    });
  },
  markup: `
<div class="mbsc-flex-col md-drag-drop-bw-inst-cont">
    <div id="demo-drag-drop-bw-inst-first" class="md-drag-drop-bw-inst-first"></div>
    <div id="demo-drag-drop-bw-inst-second" class="md-drag-drop-bw-inst-second"></div>
</div>
  `,
  css: `
.md-drag-drop-bw-inst-cont .mbsc-timeline-parent {
    height: 32px;
}

.md-drag-drop-bw-inst-cont .mbsc-timeline-resource {
    padding-left: 5px !important;
}

.md-drag-drop-bw-inst-cont .mbsc-timeline-row-gutter {
    height: 6px;
}

.md-aircraft-code {
    color: #939995;
}

.md-drag-drop-bw-inst-cont {
    min-height: 500px;
    height: 100%;
}

.md-drag-drop-bw-inst-first {
    border-bottom: 5px solid #ccc;
}

.md-drag-drop-bw-inst-avatar {
    max-height: 55px;
    max-width: 55px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
}

.md-drag-drop-bw-inst-details {
    margin-left: 16px;
    font-size: 12px;
}

.md-drag-drop-bw-inst-title {
    font-size: 12px;
    margin-top: 5px;
}
  `,
};
