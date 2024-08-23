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
      var $popupContent = $('#demo-popup-hover');
      var timer;

      var popup = $popupContent
        .mobiscroll()
        .popup({
          // context,
          showOverlay: false,
          display: 'anchored',
        })
        .mobiscroll('getInst');

      function setContent(anchor, content) {
        $popupContent.html(content);
        popup.setOptions({ anchor: anchor });
        popup.open();
      }

      var content1 =
        '<div class="mbsc-align-center mbsc-padding">' +
        '<img style="height: 80px;" src="https://img.mobiscroll.com/demos/f1.png">' +
        '<h3><b>Liza Taylor</b></h3>' +
        '<p>liza.taylor@mobiscroll.com <br> (202) 555-0127</p>' +
        '</div>';

      var content2 =
        '<div class="mbsc-align-center mbsc-padding">' +
        '<img style="height: 80px;" src="https://img.mobiscroll.com/demos/m1.png">' +
        '<h3><b>Mike Smith</b></h3>' +
        '<p>mike.smith@mobiscroll.com <br> (202) 555-9126</p>' +
        '</div>';

      $('#demo-popup-hover-link').on('mouseenter', function () {
        clearTimeout(timer);
        setContent(this, content1);
      });

      $('#demo-popup-hover-link2').on('mouseenter', function () {
        clearTimeout(timer);
        setContent(this, content2);
      });

      $('#demo-popup-hover-link, #demo-popup-hover-link2').on('mouseleave', function () {
        timer = setTimeout(function () {
          popup.close();
        }, 500);
      });

      $popupContent.on('mouseenter', function () {
        clearTimeout(timer);
      });

      $popupContent.on('mouseleave', function () {
        timer = setTimeout(function () {
          popup.close();
        }, 500);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-align-center">
  <div class="mbsc-note">
    Hover on the link to show popup.
  </div>
</div>
<div class="mbsc-padding">
  <p>
    Meet web developer
    <a id="demo-popup-hover-link" style="cursor: pointer; text-decoration: underline">Liza</a>
    who designs and builds websites. She is responsible for the appearance, of
    the site and technical aspects, such as site speed and how much traffic
    the site can handle. She also creates site content that requires technical
    features.
  </p><br>
  <p>
    Meet
    <a id="demo-popup-hover-link2" style="cursor: pointer; text-decoration: underline">Mike</a
    >, a backend developer specializing in server management and database
    integration. He ensures the site runs smoothly by handling server-side
    logic, optimizing performance, and implementing security measures.
  </p>
</div>
<div id="demo-popup-hover"></div>
  `,
};
