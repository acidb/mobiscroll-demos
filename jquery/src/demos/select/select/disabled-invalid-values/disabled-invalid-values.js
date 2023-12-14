import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-disabled-values').mobiscroll().select({
        display: 'inline',
      });
    });
  },
  markup: `
<select id="demo-disabled-values">
    <option value="atl">Atlanta</option>
    <option value="ber">Berlin</option>
    <option value="bos">Boston</option>
    <option value="chi" disabled>Chicago</option>
    <option value="lon" disabled>London</option>
    <option value="la">Los Angeles</option>
    <option value="ny">New York</option>
    <option value="par">Paris</option>
    <option value="sf">San Francisco</option>
</select>
  `,
};
