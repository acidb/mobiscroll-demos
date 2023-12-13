import $ from 'jquery';
import { Router } from 'html5-history-router';
import './style.css';
import '@mobiscroll/jquery/dist/css/mobiscroll.min.css';

import { enhance } from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

import HomePage from './pages/home/home';
import WorkWeekHoursPage from './src/demos/eventcalendar/scheduler/work-week-hours/work-week-hours';
import CompareResourcesPage from './src/demos/eventcalendar/timeline/compare-resources-fixed-at-top/compare-resources-fixed-at-top';

const router = new Router();

function loadPage(page) {
  // app[0].innerHTML = "<div id='jquery-demo-placeholder'>" + page.markup + '</div>';
  app.html("<div id='jquery-demo-placeholder'>" + page.markup + '</div>');

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

const app = $('#app');

$(document).on('click', (ev) => {
  const link = ev.target.closest('.app-link');
  if (link) {
    ev.preventDefault();
    router.pushState(link.getAttribute('href'));
  }
});
