import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });
    var inst = mobiscroll.eventcalendar('#demo-custom-empty-agenda', {
      // context,
      view: {
        calendar: { type: 'week' },
        agenda: { type: 'week' },
      },
      data: [
        {
          title: 'Zumba Class',
          start: 'dyndatetime(y,m,d-7,17)',
          end: 'dyndatetime(y,m,d-7,19)',
        },
        {
          title: 'Silent Party',
          start: 'dyndatetime(y,m,d-7,21)',
          end: 'dyndatetime(y,m,d-7,23)',
        },
        {
          title: 'Garbage Collection',
          start: 'dyndatetime(y,m,d+7,15)',
          end: 'dyndatetime(y,m,d+7,17)',
        },
        {
          title: 'Karaoke Night',
          start: 'dyndatetime(y,m,d+7,20)',
          end: 'dyndatetime(y,m,d+7,22)',
        },
      ],
      renderAgendaEmpty: function () {
        return (
          '<div class="md-empty-agenda-wrapper" >' +
          '<img src="https://img.mobiscroll.com/demos/smart-empty-tin-can.png" width="200" />' +
          '<div class="md-bold"> Looks like this can is empty </div>' +
          '<button mbsc-button class="md-custom-agenda-btn" id="md-agenda-btn"' +
          'data-color="primary" data-variant="outline">Add something to it!</button>' +
          '<div class="md-illustration-description">Illustration by <a ' +
          'href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a>' +
          ' from <a href="https://icons8.com/illustrations">Ouch!</a></div>' +
          '</div>'
        );
      },
    });
    var myElement = document.getElementById('demo-custom-empty-agenda');
    myElement.addEventListener('click', function (e) {
      if (e.target.id === 'md-agenda-btn') {
        mobiscroll.toast({ message: 'Add button clicked!' });
      }
    });
  },
  markup: `
<div id="demo-custom-empty-agenda"></div>
  `,
  css: `
.md-empty-agenda-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
}

.md-bold {
    font-weight: 500;
}

.md-illustration-description {
    font-size: 8px;
}

.md-custom-agenda-btn.mbsc-button {
    line-height: 20px;
}
  `,
};
