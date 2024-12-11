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
      var zoomLevel = 9;
      var now = new Date();
      var refDate = new Date(now.getFullYear() - 12, 0, 1);
      // var refDate = new Date().setDate(new Date().getDate() - 45);

      var myResources = [
        { id: 1, name: 'Resource A', color: '#e20000' },
        { id: 2, name: 'Resource B', color: '#76e083' },
        { id: 3, name: 'Resource C', color: '#4981d6' },
        { id: 4, name: 'Resource D', color: '#e25dd2' },
        { id: 5, name: 'Resource E', color: '#1dab2f' },
        { id: 6, name: 'Resource F', color: '#d6d145' },
      ];

      var myCalendar = $('#demo-calendar-zoom')
        .mobiscroll()
        .eventcalendar({
          // drag,
          resources: myResources,
          refDate: refDate,
          zoomLevel: zoomLevel,
          view: {
            timeline: {
              zoomLevels: {
                // 1: { type: 'year', size: 25, resolutionHorizontal: 'year', columnWidth: 'small' },
                // 2: { type: 'year', size: 25, resolutionHorizontal: 'year', columnWidth: 'xlarge' },
                // 3: { type: 'year', size: 7, resolutionHorizontal: 'quarter', columnWidth: 'small' },
                // 4: { type: 'year', size: 7, resolutionHorizontal: 'quarter', columnWidth: 'xlarge' },
                // 5: { type: 'year', size: 7, resolutionHorizontal: 'month', columnWidth: 'medium' },
                // 6: { type: 'year', size: 7, resolutionHorizontal: 'month', columnWidth: 'xxxlarge' },
                // 7: { type: 'day', size: 91, resolutionHorizontal: 'week', columnWidth: 'medium' },
                // 8: { type: 'day', size: 91, resolutionHorizontal: 'week', columnWidth: 'xxxlarge' },
                // 9: { type: 'day', size: 91, resolutionHorizontal: 'day', columnWidth: 'small' },
                // 10: { type: 'day', size: 91, resolutionHorizontal: 'day', columnWidth: 'xlarge' },
                // 11: { type: 'day', size: 15, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 720, timeLabelStep: 720 },
                // 12: { type: 'day', size: 15, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 360, timeLabelStep: 360 },
                // 13: { type: 'day', size: 15, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 180, timeLabelStep: 180 },
                // 14: { type: 'day', size: 15, resolutionHorizontal: 'hour', columnWidth: 'medium', timeCellStep: 60, timeLabelStep: 60 },
                // 15: { type: 'day', size: 7, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 30, columnWidth: 'medium' },
                // 16: { type: 'day', size: 7, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 30, columnWidth: 'xxxlarge' },
                // 17: { type: 'day', size: 7, resolutionHorizontal: 'hour', timeCellStep: 15, timeLabelStep: 15, columnWidth: 'xxxlarge' },
                // 18: { type: 'day', size: 7, resolutionHorizontal: 'hour', timeCellStep: 5, timeLabelStep: 5, columnWidth: 'large' },
                1: { type: 'year', size: 25, resolutionHorizontal: 'year', columnWidth: 'small' },
                2: { type: 'year', size: 25, resolutionHorizontal: 'year', columnWidth: 'xlarge' },
                3: { type: 'year', size: 25, resolutionHorizontal: 'quarter', columnWidth: 'small' },
                4: { type: 'year', size: 25, resolutionHorizontal: 'quarter', columnWidth: 'xlarge' },
                5: { type: 'year', size: 25, resolutionHorizontal: 'month', columnWidth: 'medium' },
                6: { type: 'year', size: 25, resolutionHorizontal: 'month', columnWidth: 'xxxlarge' },
                7: { type: 'year', size: 25, resolutionHorizontal: 'week', columnWidth: 'medium' },
                8: { type: 'year', size: 25, resolutionHorizontal: 'week', columnWidth: 'xxxlarge' },
                9: { type: 'year', size: 25, resolutionHorizontal: 'day', columnWidth: 'small' },
                10: { type: 'year', size: 25, resolutionHorizontal: 'day', columnWidth: 'xlarge' },
                11: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 720, timeLabelStep: 720 },
                12: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 360, timeLabelStep: 360 },
                13: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 180, timeLabelStep: 180 },
                14: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'medium', timeCellStep: 60, timeLabelStep: 60 },
                15: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 30, columnWidth: 'medium' },
                16: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 30, columnWidth: 'xxxlarge' },
                17: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 15, timeLabelStep: 15, columnWidth: 'xxxlarge' },
                18: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 5, timeLabelStep: 5, columnWidth: 'large' },
              },
            },
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">' +
              '<button class="mds-button-zoom-level mds-button-zoom-level-out" data-zoom="-1" mbsc-button data-icon="minus" data-variant="flat"></button>' +
              '<input id="demo-zoom-level-slider" type="range" min="1" max="18" value="8" />' +
              '<button class="mds-button-zoom-level mds-button-zoom-level-in" data-zoom="1" mbsc-button data-icon="plus" data-variant="flat"></button>' +
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
        $('.mds-button-zoom-level-in').prop('disabled', zoomLevel === 18);
        $('.mds-button-zoom-level-out').prop('disabled', zoomLevel === 1);

        var viewDate = myCalendar ? myCalendar.getViewDate() : new Date();
        // var refDate = new Date(viewDate.getFullYear() - 12, 0, 1);
        var refDates = {
          // 1: new Date(viewDate.getFullYear() - 12, 0, 1),
          // 2: new Date(viewDate.getFullYear() - 12, 0, 1),
          // 3: new Date(viewDate.getFullYear() - 3, 0, 1),
          // 4: new Date(viewDate.getFullYear() - 3, 0, 1),
          // 5: new Date(viewDate.getFullYear() - 3, 0, 1),
          // 6: new Date(viewDate.getFullYear() - 3, 0, 1),
          // 7: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 45),
          // 8: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 45),
          // 9: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 45),
          // 10: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 45),
          // 11: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 7),
          // 12: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 7),
          // 13: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 7),
          // 14: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 7),
          // 15: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 3),
          // 16: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 3),
          // 17: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 3),
          // 18: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 3),
          1: new Date(viewDate.getFullYear() - 12, 0, 1),
          2: new Date(viewDate.getFullYear() - 12, 0, 1),
          3: new Date(viewDate.getFullYear() - 12, 0, 1),
          4: new Date(viewDate.getFullYear() - 12, 0, 1),
          5: new Date(viewDate.getFullYear() - 12, 0, 1),
          6: new Date(viewDate.getFullYear() - 12, 0, 1),
          7: new Date(viewDate.getFullYear() - 12, 0, 1),
          8: new Date(viewDate.getFullYear() - 12, 0, 1),
          9: new Date(viewDate.getFullYear() - 12, 0, 1),
          10: new Date(viewDate.getFullYear() - 12, 0, 1),
          11: new Date(viewDate.getFullYear() - 1, 0, 1),
          12: new Date(viewDate.getFullYear() - 1, 0, 1),
          13: new Date(viewDate.getFullYear() - 1, 0, 1),
          14: new Date(viewDate.getFullYear() - 1, 0, 1),
          15: new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1),
          16: new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1),
          17: new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1),
          18: new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1),
        };

        myCalendar.setOptions({
          zoomLevel: zoomLevel,
          refDate: refDates[zoomLevel] || viewDate,
          // refDate: refDate,
        });
      }

      $('#demo-zoom-level-slider').on('input', function (ev) {
        handleZoom(+ev.target.value);
      });

      $('.mds-button-zoom-level').on('click', function () {
        // handleZoom($(this).data('zoom'));
        var newZoomLevel = zoomLevel + +$(this).data('zoom');
        handleZoom(newZoomLevel);
        $('#demo-zoom-level-slider').val(newZoomLevel);
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
<div id="demo-calendar-zoom"></div>
  `,
};
