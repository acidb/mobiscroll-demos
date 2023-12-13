import { Router } from 'html5-history-router';
import './style.css';
import '@mobiscroll/javascript/dist/css/mobiscroll.min.css';

import { enhance } from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

import HomePage from './pages/home/home';
import WorkWeekHoursPage from './src/demos/eventcalendar/scheduler/work-week-hours/work-week-hours';
import CompareResourcesPage from './src/demos/eventcalendar/timeline/compare-resources-fixed-at-top/compare-resources-fixed-at-top';

const router = new Router();

const app = document.getElementById('app');

function loadPage(page) {
  app.innerHTML = "<div id='javascript-demo-placeholder'>" + page.markup + '</div>';

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

router
  .on('/', () => {
    loadPage(HomePage);
  })
  .on('/timeline/compare-resources', () => {
    loadPage(CompareResourcesPage);
  })
  .on('/scheduler/work-week-hours', () => {
    loadPage(WorkWeekHoursPage);
  });

document.addEventListener('click', (ev) => {
  const link = ev.target.closest('.app-link');
  if (link) {
    ev.preventDefault();
    router.pushState(link.getAttribute('href'));
  }
});
