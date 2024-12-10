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
      var zoomLevel = 7;
      var refDate = new Date().setDate(new Date().getDate() - 10);

      var myResources = [
        { id: 1, name: 'Resource A', color: '#e20000' },
        { id: 2, name: 'Resource B', color: '#76e083' },
        { id: 3, name: 'Resource C', color: '#4981d6' },
        { id: 4, name: 'Resource D', color: '#e25dd2' },
        { id: 5, name: 'Resource E', color: '#1dab2f' },
        { id: 6, name: 'Resource F', color: '#d6d145' },
      ];

      var myCalendar = $('#demo-custom-zoom-levels')
        .mobiscroll()
        .eventcalendar({
          // drag,
          dragToCreate: true,
          resources: myResources,
          refDate: refDate,
          zoomLevel: zoomLevel,
          view: {
            timeline: {
              currentTimeIndicator: true,
              zoomLevels: {
                1: { type: 'year', size: 25, resolutionHorizontal: 'year', columnWidth: 'small' },
                2: { type: 'year', size: 15, resolutionHorizontal: 'year', columnWidth: 'xxxlarge' },
                3: { type: 'year', size: 7, resolutionHorizontal: 'quarter', columnWidth: 'small' },
                4: { type: 'year', size: 7, resolutionHorizontal: 'quarter', columnWidth: 'xxxlarge' },
                5: { type: 'month', size: 15, resolutionHorizontal: 'month', columnWidth: 'xlarge' },
                6: { type: 'month', size: 15, resolutionHorizontal: 'month', columnWidth: 'xxxlarge' },
                7: { type: 'week', size: 15, resolutionHorizontal: 'week', columnWidth: 'xlarge' },
                8: { type: 'week', size: 15, resolutionHorizontal: 'week', columnWidth: 'xxxlarge' },
                9: { type: 'week', size: 5, resolutionHorizontal: 'day' },
                10: { type: 'week', size: 5, resolutionHorizontal: 'day', columnWidth: 'xlarge' },
                11: { type: 'day', size: 15, resolutionHorizontal: 'hour', columnWidth: 'medium', timeCellStep: 720, timeLabelStep: 720 },
                12: { type: 'day', size: 15, resolutionHorizontal: 'hour', timeCellStep: 360, timeLabelStep: 360 },
                13: { type: 'day', size: 5, resolutionHorizontal: 'hour', timeCellStep: 180, timeLabelStep: 180 },
                14: { type: 'day', size: 5, resolutionHorizontal: 'hour', timeCellStep: 60, timeLabelStep: 60 },
                15: { type: 'day', size: 5, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 30 },
              },
            },
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              // '<div class="mds-calendar-controls">' +
              // '<div class="md-zoom-cont mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">' +
              // '<div><button class="mds-button-zoom-level mds-button-zoom-level-in" data-zoom="1" mbsc-button data-icon="material-zoom-in" ' +
              // '></button></div>' +
              // '<div><button class="mds-button-zoom-level mds-button-zoom-level-out" data-zoom="-1" mbsc-button data-icon="material-zoom-out" ' +
              // '></button></div>' +
              // '</div>' +
              '<div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">' +
              '<input id="demo-zoom-level-slider" type="range" min="1" max="15" value="8" />' +
              '</div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      function handleZoom(zoom) {
        zoomLevel = zoom;
        // zoomLevel += zoom;
        // $('.mds-button-zoom-level-in').prop('disabled', zoomLevel === 4);
        // $('.mds-button-zoom-level-out').prop('disabled', zoomLevel === -4);

        var viewDate = myCalendar ? myCalendar.getViewDate() : new Date();
        var refDates = {
          1: new Date(viewDate.getFullYear() - 12, 0, 1),
          2: new Date(viewDate.getFullYear() - 7, 0, 1),
          3: new Date(viewDate.getFullYear() - 3, 0, 1),
          4: new Date(viewDate.getFullYear() - 3, 0, 1),
          5: new Date(viewDate.getFullYear(), viewDate.getMonth() - 7, 1),
          6: new Date(viewDate.getFullYear(), viewDate.getMonth() - 7, 1),
          7: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 49),
          8: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 49),
          9: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 14),
          10: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 14),
          11: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 7),
          12: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 7),
          13: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 2),
          14: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 2),
          15: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 2),
        };

        myCalendar.setOptions({
          zoomLevel: zoomLevel,
          refDate: refDates[zoomLevel] || viewDate,
        });
      }

      $('#demo-zoom-level-slider').on('input', function (ev) {
        handleZoom(+ev.target.value);
      });

      // $('.mds-button-zoom-level').on('click', function () {
      //   handleZoom($(this).data('zoom'));
      // });

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
