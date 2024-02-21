import {
  Button,
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Checkbox,
  Draggable,
  Dropcontainer,
  Dropdown,
  enhance,
  getInst,
  Input,
  Page,
  Radio,
  registerComponent,
  Segmented,
  SegmentedGroup,
  Stepper,
  Switch,
  Textarea,
} from '@mobiscroll/javascript';

import { Router } from 'html5-history-router';
import '@mobiscroll/javascript/dist/css/mobiscroll.min.css';
import '@mobiscroll/print/dist/css/mobiscroll.min.css';
import './style.css';

import { demos, demoTitleMap } from './src/demos';
import HomePage from './src/pages/home';

registerComponent(Button);
registerComponent(Checkbox);
registerComponent(Input);
registerComponent(Draggable);
registerComponent(Dropcontainer);
registerComponent(Dropdown);
registerComponent(Textarea);
registerComponent(Page);
registerComponent(Radio);
registerComponent(Segmented);
registerComponent(SegmentedGroup);
registerComponent(Stepper);
registerComponent(Switch);
registerComponent(CalendarNext);
registerComponent(CalendarPrev);
registerComponent(CalendarToday);
registerComponent(CalendarNav);

window.isMbscDemo = true;

var router = new Router();

var app = document.getElementById('app');
var appBack = document.getElementById('app-back');
var appPath = document.getElementById('app-path');
var appTitle = document.getElementById('app-title');

var currentPage;

function destroyPage() {
  var selectors = [
    '[mbsc-button]',
    '[mbsc-calendar-nav]',
    '[mbsc-calendar-next]',
    '[mbsc-calendar-prev]',
    '[mbsc-calendar-today]',
    '[mbsc-segmented]',
    '[mbsc-segmented-group]',
    '[mbsc-page]',
    '.mbsc-eventcalendar',
    '.mds-popup',
    '.mds-select',
  ];
  app.querySelectorAll(selectors.join(',')).forEach(function (elm) {
    getInst(elm).destroy();
  });
}

function loadPage(page, title, path) {
  if (currentPage) {
    destroyPage();
    if (currentPage.destroy) {
      currentPage.destroy();
    }
  }

  app.innerHTML = "<div id='app-placeholder'>" + page.markup + '</div>';
  appTitle.innerHTML = title;
  appPath.innerHTML = path ? './src/demos' + path : '';
  appBack.style.display = path ? 'block' : 'none';

  if (page.css && !page.loaded) {
    page.loaded = true;
    var style = document.createElement('style');
    style.innerHTML = page.css;
    document.getElementsByTagName('head')[0].appendChild(style);
  }

  if (page.init) {
    page.init();
  }

  currentPage = page;

  enhance(app);
}

demos.forEach(function (main) {
  main.items.forEach(function (sub) {
    sub.items.forEach(function (group) {
      group.items.forEach(function (demo) {
        var path = '/' + main.unique + '/' + sub.unique + '/' + demo.unique;
        demoTitleMap[path] = demo.name;
        router.on(path, function () {
          loadPage(demo.component, demo.name, path);
        });
      });
    });
  });
});

router.on('/', function () {
  loadPage(HomePage, 'Mobiscroll JavaScript Demos');
});

document.addEventListener('click', function (ev) {
  var link = ev.target.closest('.app-link');
  if (link) {
    ev.preventDefault();
    router.pushState(link.getAttribute('href'));
  }
});
