import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    // refactor ids, class names
    // mouse out should not triggered when moving the cursor on link
    // need some other approach than setTimeout

    $(function () {
      var popupContent = $('#popup-hover-demo');

      var popup = $('#popup-hover-demo')
        .mobiscroll()
        .popup({
          // context,
          display: 'anchored',
          buttons: [],
        })
        .mobiscroll('getInst');

      function setContent(anchorId, content) {
        popupContent.html(content);
        mobiscroll.enhance(popupContent[0]);
        popup.setOptions({ anchor: $(anchorId)[0] });
        popup.open();
      }
      const content1 = `
        <div class="mbsc-align-center mbsc-padding">
            <img src="https://img.mobiscroll.com/demos/f1.png">
            <h3><b>Liza Taylor</b></h3>
            <p>liza.taylor@mobiscroll.com <br> (202) 555-0127</p>
        </div>
      `;

      const content2 = `
        <div class="mbsc-align-center mbsc-padding">
            <img src="https://img.mobiscroll.com/demos/m1.png">
            <h3><b>Mike Smith</b></h3>
            <p>mike.smith@mobiscroll.com <br> (202) 555-9126</p>
        </div>
      `;

      $('#link').on('mouseover', function () {
        setContent('#link', content1);
      });

      $('#link2').on('mouseover', function () {
        setContent('#link2', content2);
      });

      $('#link, #link2').on('mouseout', function () {
        setTimeout(function () {
          popup.close();
        }, 1000);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-form>
  <div class="mbsc-align-center">
    <div class="mbsc-note mbsc-note-primary">
      Hover on the link to show popup.
    </div>
  </div>
  <div class="mbsc-padding">
    <p>
      Meet web developer
      <a id="link" style="cursor: pointer; text-decoration: underline">Liza</a>
      who designs and builds websites. She is responsible for the appearance, of
      the site and technical aspects, such as site speed and how much traffic
      the site can handle. She also creates site content that requires technical
      features.
    </p><br>
    <p>
      Meet
      <a id="link2" style="cursor: pointer; text-decoration: underline">Mike</a
      >, a backend developer specializing in server management and database
      integration. He ensures the site runs smoothly by handling server-side
      logic, optimizing performance, and implementing security measures.
    </p>
  </div>
</div>
<div id="popup-hover-demo" class="mbsc-cloak"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: ``,
};
