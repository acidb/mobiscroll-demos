import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    $(function () {
      $('#demo').mobiscroll().select({
        // locale,
        display: 'inline',
        theme: 'material', // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
        themeVariant: 'dark', // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
      });
    });
  },
  markup: `
<select id="demo">
    <option value="atl">Atlanta</option>
    <option value="ber">Berlin</option>
    <option value="bos">Boston</option>
    <option value="chi">Chicago</option>
    <option value="lon">London</option>
    <option value="la">Los Angeles</option>
    <option value="ny">New York</option>
    <option value="par">Paris</option>
    <option value="sf">San Francisco</option>
</select>
  `,
};
