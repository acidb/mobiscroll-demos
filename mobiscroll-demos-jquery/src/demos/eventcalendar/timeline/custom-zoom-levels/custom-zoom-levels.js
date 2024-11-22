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
      var zoomLevel = 0;
      var refDate = new Date().setDate(new Date().getDate() - 10);

      var myResources = [
        {
          id: 1,
          name: 'Resource A',
          color: '#e20000',
        },
        {
          id: 2,
          name: 'Resource B',
          color: '#76e083',
        },
        {
          id: 3,
          name: 'Resource C',
          color: '#4981d6',
        },
        {
          id: 4,
          name: 'Resource D',
          color: '#e25dd2',
        },
        {
          id: 5,
          name: 'Resource E',
          color: '#1dab2f',
        },
        {
          id: 6,
          name: 'Resource F',
          color: '#d6d145',
        },
      ];

      var myCalendar = $('#demo-custom-zoom-levels')
        .mobiscroll()
        .eventcalendar('', {
          // drag,
          dragToCreate: true,
          resources: myResources,
          refDate: refDate,
          zoomLevel: zoomLevel,
          view: {
            timeline: {
              currentTimeIndicator: true,
              zoomLevels: {
                '-4': { type: 'year', size: 9, resolutionHorizontal: 'year' },
                '-3': { type: 'month', size: 12, resolutionHorizontal: 'month' },
                '-2': { type: 'week', size: 9, resolutionHorizontal: 'week' },
                '-1': { type: 'week', size: 5, resolutionHorizontal: 'day' },
                0: { type: 'week', size: 5, resolutionHorizontal: 'day', columnWidth: 'large' },
                1: { type: 'week', size: 5, resolutionHorizontal: 'day', columnWidth: 'xlarge' },
                2: { type: 'day', size: 5, resolutionHorizontal: 'hour', timeCellStep: 360, timeLabelStep: 360 },
                3: { type: 'day', size: 3, resolutionHorizontal: 'hour', timeCellStep: 180, timeLabelStep: 360 },
                4: { type: 'day', size: 3, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 60 },
              },
            },
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="mds-calendar-controls">' +
              '<div class="md-zoom-cont mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">' +
              '<div><button class="mds-button-zoom-level mds-button-zoom-level-in" data-zoom="1" mbsc-button data-icon="material-zoom-in" ' +
              '></button></div>' +
              '<div><button class="mds-button-zoom-level mds-button-zoom-level-out" data-zoom="-1" mbsc-button data-icon="material-zoom-out" ' +
              '></button></div>' +
              '</div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>' +
              '</div>'
            );
          },
        });

      function handleZoom(zoom) {
        zoomLevel += zoom;
        $('.mds-button-zoom-level-in').prop('disabled', zoomLevel === 4);
        $('.mds-button-zoom-level-out').prop('disabled', zoomLevel === -4);

        var viewDate = myCalendar ? myCalendar.getViewDate() : new Date();
        var refDates = {
          '-4': new Date(viewDate.getFullYear() - 4, 0, 1),
          '-3': new Date(viewDate.getFullYear(), viewDate.getMonth() - 5, 1),
          '-2': new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 28),
          '-1': new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 14),
          0: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 14),
          1: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 14),
          2: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 2),
          3: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 1),
          4: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 1),
        };

        myCalendar.setOptions({
          zoomLevel: zoomLevel,
          refDate: refDates[zoomLevel] || viewDate,
        });
      }

      $('.mds-button-zoom-level').on('click', function () {
        handleZoom($(this).data('zoom'));
      });

      $.getJSON(
        'https://trial.mobiscroll.com/timeline-events/?callback=?',
        function (events) {
          myCalendar.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-custom-zoom-levels"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-calendar-controls {
  display: flex;
  flex: 1 0 auto;
  justify-content: end;
  align-items: center;
}
  `,
};
