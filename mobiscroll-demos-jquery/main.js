// --- THEME/VARIANT/LOCALE FOOTER CONTROLS ---
import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

// Supported locales (extend as needed)
var locales = [
  { value: mobiscroll.localeEn, text: 'English' },
  { value: mobiscroll.localeAr, text: 'Arabic' },
  { value: mobiscroll.localeBg, text: 'Bulgarian' },
  { value: mobiscroll.localeCa, text: 'Català' },
  { value: mobiscroll.localeCs, text: 'Cestina' },
  { value: mobiscroll.localeZh, text: 'Chinese' },
  { value: mobiscroll.localeHr, text: 'Croatian' },
  { value: mobiscroll.localeDa, text: 'Dansk' },
  { value: mobiscroll.localeDe, text: 'Deutsch' },
  { value: mobiscroll.localeEnGB, text: 'English (UK)' },
  { value: mobiscroll.localeEs, text: 'Español' },
  { value: mobiscroll.localeFr, text: 'Français' },
  { value: mobiscroll.localeEl, text: 'Greek' },
  { value: mobiscroll.localeHi, text: 'Hindi' },
  { value: mobiscroll.localeIt, text: 'Italiano' },
  { value: mobiscroll.localeJa, text: 'Japanese' },
  { value: mobiscroll.localeKo, text: 'Korean' },
  { value: mobiscroll.localeLt, text: 'Lietuvių' },
  { value: mobiscroll.localeHu, text: 'Magyar' },
  { value: mobiscroll.localeNl, text: 'Nederlands' },
  { value: mobiscroll.localeNo, text: 'Norsk' },
  { value: mobiscroll.localePl, text: 'Polski' },
  { value: mobiscroll.localePtPT, text: 'Português Europeu' },
  { value: mobiscroll.localePtBR, text: 'Pt. Brasileiro' },
  { value: mobiscroll.localeRo, text: 'Română' },
  { value: mobiscroll.localeSr, text: 'Serbian' },
  { value: mobiscroll.localeSk, text: 'Slovencina' },
  { value: mobiscroll.localeFi, text: 'Suomi' },
  { value: mobiscroll.localeSv, text: 'Svenska' },
  { value: mobiscroll.localeTh, text: 'Thai' },
  { value: mobiscroll.localeTr, text: 'Türkçe' },
  { value: mobiscroll.localeUa, text: 'Ukrainian' },
  { value: mobiscroll.localeVi, text: 'Vietnamese' },
  { value: mobiscroll.localeRu, text: 'Русский' },
  { value: mobiscroll.localeRuUA, text: 'Русский (UA)' },
  { value: mobiscroll.localeHe, text: 'עברית' },
  { value: mobiscroll.localeFa, text: 'فارسی' },
];

function setGlobalOptions(theme, themeVariant, locale) {
  console.log(theme, themeVariant, locale);
  mobiscroll.setOptions({
    theme: theme,
    themeVariant: themeVariant,
    locale: locale,
  });
}

function setupFooterControls() {
  // Initialize Mobiscroll select with input and data array
  var localeSelect = $('#mobiscroll-locale')
    .mobiscroll()
    .select({
      data: locales,
      touchUi: false,
      onChange: function (args) {
        console.log(args);
        setGlobalOptions(
          $("input[name='mobiscroll-theme']:checked").val(),
          $("input[name='mobiscroll-theme-variant']:checked").val(),
          args.value,
        );
      },
    })
    .mobiscroll('getInst');

  localeSelect.setVal(mobiscroll.localeEn);

  // Segmented change for theme
  $("input[name='mobiscroll-theme']").on('change', function () {
    setGlobalOptions(this.value, $("input[name='mobiscroll-theme-variant']:checked").val(), $('#mbsc-locale-select').val());
  });
  // Segmented change for themeVariant
  $("input[name='mobiscroll-theme-variant']").on('change', function () {
    setGlobalOptions($("input[name='mobiscroll-theme']:checked").val(), this.value, $('#mbsc-locale-select').val());
  });

  // Set initial
  setGlobalOptions(
    $("input[name='mobiscroll-theme']:checked").val(),
    $("input[name='mobiscroll-theme-variant']:checked").val(),
    localeSelect.getVal(),
  );
}

$(function () {
  setupFooterControls();
});
import {
  Button,
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Checkbox,
  Datepicker,
  Draggable,
  Dropcontainer,
  Dropdown,
  enhance,
  Eventcalendar,
  getInst,
  Input,
  Page,
  Popup,
  Radio,
  registerComponent,
  Segmented,
  SegmentedGroup,
  Select,
  Stepper,
  Switch,
  Textarea,
} from '@mobiscroll/jquery';
import { Router } from 'html5-history-router';
import '@mobiscroll/jquery/dist/css/mobiscroll.min.css';
import '@mobiscroll/print/dist/css/mobiscroll.min.css';
import './style.css';

import { demos, demoTitleMap } from './src/demos';
import HomePage from './src/pages/home';

registerComponent(Datepicker);
registerComponent(Draggable);
registerComponent(Dropcontainer);
registerComponent(Eventcalendar);
registerComponent(CalendarNav);
registerComponent(CalendarNext);
registerComponent(CalendarPrev);
registerComponent(CalendarToday);
registerComponent(Button);
registerComponent(Checkbox);
registerComponent(Input);
registerComponent(Dropdown);
registerComponent(Textarea);
registerComponent(Page);
registerComponent(Radio);
registerComponent(Segmented);
registerComponent(SegmentedGroup);
registerComponent(Select);
registerComponent(Stepper);
registerComponent(Switch);
registerComponent(Popup);

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

  app.innerHTML = '<div id="app-placeholder">' + page.markup + '</div>';
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
  loadPage(HomePage, 'Mobiscroll jQuery Demos');
});

document.addEventListener('click', function (ev) {
  var link = ev.target.closest('.app-link');
  if (link) {
    ev.preventDefault();
    router.pushState(link.getAttribute('href'));
  }
});
