import React from 'react';
//<demo-only>import { Eventcalendar, CalendarNav, CalendarPrev, CalendarNext, CalendarToday, Select, Checkbox, setOptions, formatDate/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const setOptions = mobiscroll.setOptions;
const CalendarNav = mobiscroll.CalendarNav;
const CalendarPrev = mobiscroll.CalendarPrev;
const CalendarNext = mobiscroll.CalendarNext;
const CalendarToday = mobiscroll.CalendarToday;
const Select = mobiscroll.Select;
const Checkbox = mobiscroll.Checkbox;
const formatDate = mobiscroll.formatDate; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

const resources = [
  {
    id: 1,
    name: 'Barista',
    icon: '\u2615\uFE0F',
    eventCreation: false,
    children: [
      {
        id: 11,
        name: 'Jude Chester',
        color: '#1dab2f',
      },
      {
        id: 12,
        name: 'Willis Kane',
        color: '#1dab2f',
      },
      {
        id: 13,
        name: 'Ryan Melicent',
        color: '#1dab2f',
      },
    ],
  },
  {
    id: 2,
    name: 'Bartenders',
    icon: '\uD83C\uDF78',
    eventCreation: false,
    children: [
      {
        id: 21,
        name: 'Derek Austyn',
        color: '#4981d6',
      },
      {
        id: 22,
        name: 'Merv Kenny',
        color: '#4981d6',
      },
      {
        id: 23,
        name: 'Theo Calanthia',
        color: '#4981d6',
      },
    ],
  },
  {
    id: 3,
    name: 'Chefs',
    icon: '\uD83D\uDC69\u200D\uD83C\uDF73',
    eventCreation: false,
    children: [
      {
        id: 31,
        name: 'Ford Kaiden',
        color: '#d6d145',
      },
      {
        id: 32,
        name: 'Jewell Ryder',
        color: '#d6d145',
      },
      {
        id: 33,
        name: 'Dory Edie',
        color: '#d6d145',
      },
    ],
  },
  {
    id: 4,
    name: 'Cleaners',
    icon: '\uD83E\uDDF9',
    eventCreation: false,
    children: [
      {
        id: 41,
        name: 'Breanne Lorinda',
        color: '#ff1717',
      },
      {
        id: 42,
        name: 'Jenifer Kalyn',
        color: '#ff1717',
      },
      {
        id: 43,
        name: 'Natalie Racquel',
        color: '#ff1717',
      },
      {
        id: 44,
        name: 'Kaylin Toni',
        color: '#ff1717',
      },
      {
        id: 45,
        name: 'Gray Kestrel',
        color: '#ff1717',
      },
      {
        id: 46,
        name: 'Florence Amy',
        color: '#ff1717',
      },
    ],
  },
  {
    id: 5,
    name: 'Cooks',
    icon: '\uD83C\uDF72',
    eventCreation: false,
    children: [
      {
        id: 51,
        name: 'Meredith Chantelle',
        color: '#f7961e',
      },
      {
        id: 52,
        name: 'Jon Drake',
        color: '#f7961e',
      },
      {
        id: 53,
        name: 'Carlyn Dorothy',
        color: '#f7961e',
      },
      {
        id: 54,
        name: 'Isadora Lyric',
        color: '#f7961e',
      },
    ],
  },
  {
    id: 6,
    name: 'Hosts',
    icon: '\uD83D\uDECE',
    eventCreation: false,
    children: [
      {
        id: 61,
        name: 'Layton Candace',
        color: '#7056ff',
      },
      {
        id: 62,
        name: 'Sylvia Cale',
        color: '#7056ff',
      },
    ],
  },
  {
    id: 7,
    name: 'Managers',
    icon: '\uD83D\uDC69\u200D\uD83D\uDCBC',
    eventCreation: false,
    children: [
      {
        id: 71,
        name: 'Fred Valdez',
        color: '#3a8700',
      },
      {
        id: 72,
        name: 'Antonia Cindra',
        color: '#3a8700',
      },
      {
        id: 73,
        name: 'Gerry Irma',
        color: '#3a8700',
      },
    ],
  },
  {
    id: 8,
    name: 'Servers',
    icon: '\uD83E\uDD35',
    eventCreation: false,
    children: [
      {
        id: 81,
        name: 'Reg Izabelle',
        color: '#e25dd2',
      },
      {
        id: 82,
        name: 'Adrianna Sawyer',
        color: '#e25dd2',
      },
      {
        id: 83,
        name: 'Lou Andie',
        color: '#e25dd2',
      },
      {
        id: 84,
        name: 'Leon Porter',
        color: '#e25dd2',
      },
    ],
  },
  {
    id: 9,
    name: 'Sommeliers',
    icon: '\uD83C\uDF77',
    eventCreation: false,
    children: [
      {
        id: 91,
        name: 'Yancy Dustin',
        color: '#34c8e0',
      },
      {
        id: 92,
        name: 'Sierra Clark',
        color: '#34c8e0',
      },
    ],
  },
];

const allShifts = [
  //<hide-comment>
  {
    start: 'dyndatetime(y,m,d-2,2)',
    end: 'dyndatetime(y,m,d-2,10)',
    title: 'Derek',
    resource: 21,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d-2,2)',
    end: 'dyndatetime(y,m,d-2,10)',
    title: 'Florence',
    resource: 46,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,12)',
    title: 'Willis',
    resource: 12,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,12)',
    title: 'Jewell',
    resource: 32,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,12)',
    title: 'Jenifer',
    resource: 42,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,12)',
    title: 'Jon',
    resource: 52,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,12)',
    title: 'Fred',
    resource: 71,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,12)',
    title: 'Adrianna',
    resource: 82,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,12)',
    title: 'Jude',
    resource: 11,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Jewell',
    resource: 32,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Gray',
    resource: 45,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Isadora',
    resource: 54,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Antonia',
    resource: 72,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Adrianna',
    resource: 82,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Leon',
    resource: 84,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Yancy',
    resource: 91,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Ryan',
    resource: 13,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Merv',
    resource: 22,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Ford',
    resource: 31,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Dory',
    resource: 33,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Breanne',
    resource: 41,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Meredith',
    resource: 51,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Carlyn',
    resource: 53,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-2, 16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Layton',
    resource: 61,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Gerry',
    resource: 73,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Reg',
    resource: 81,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-2, 16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Lou',
    resource: 83,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Sierra',
    resource: 92,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,11,59)',
    title: 'Derek',
    resource: 21,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,11,59)',
    title: 'Natalie',
    resource: 43,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,11,59)',
    title: 'Kaylin',
    resource: 44,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,11,59)',
    title: 'Fred',
    resource: 71,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d-1,2)',
    end: 'dyndatetime(y,m,d-1,10)',
    title: 'Merv',
    resource: 22,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d-1,2)',
    end: 'dyndatetime(y,m,d-1,10)',
    title: 'Florence',
    resource: 46,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Ryan',
    resource: 13,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Jewell',
    resource: 32,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Florence',
    resource: 46,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Carlyn',
    resource: 53,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Fred',
    resource: 71,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Leon',
    resource: 84,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Jude',
    resource: 11,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Ford',
    resource: 31,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Natalie',
    resource: 43,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Carlyn',
    resource: 53,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Gerry',
    resource: 73,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Lou',
    resource: 83,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Leon',
    resource: 84,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Yancy',
    resource: 91,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Willis',
    resource: 12,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Merv',
    resource: 22,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Jewell',
    resource: 32,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Dory',
    resource: 33,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Gray',
    resource: 45,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Jon',
    resource: 52,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Isadora',
    resource: 54,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-1, 16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Layton',
    resource: 61,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Antonia',
    resource: 72,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Reg',
    resource: 81,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-1, 16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Lou',
    resource: 83,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Sierra',
    resource: 92,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,11,59)',
    title: 'Derek',
    resource: 21,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,11,59)',
    title: 'Natalie',
    resource: 43,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,11,59)',
    title: 'Kaylin',
    resource: 44,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,11,59)',
    title: 'Fred',
    resource: 71,
    slot: 5,
  }, //</hide-comment>
  {
    start: 'dyndatetime(y,m,d,2)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Derek',
    resource: 21,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d,2)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Florence',
    resource: 46,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Willis',
    resource: 12,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Jewell',
    resource: 32,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Jenifer',
    resource: 42,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Jon',
    resource: 52,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Fred',
    resource: 71,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Adrianna',
    resource: 82,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Jude',
    resource: 11,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Jewell',
    resource: 32,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Gray',
    resource: 45,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Isadora',
    resource: 54,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Antonia',
    resource: 72,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Adrianna',
    resource: 82,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Leon',
    resource: 84,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Yancy',
    resource: 91,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Ryan',
    resource: 13,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Merv',
    resource: 22,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Ford',
    resource: 31,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Dory',
    resource: 33,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Breanne',
    resource: 41,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Meredith',
    resource: 51,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Carlyn',
    resource: 53,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d, 16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Layton',
    resource: 61,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Gerry',
    resource: 73,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Reg',
    resource: 81,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d, 16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Lou',
    resource: 83,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Sierra',
    resource: 92,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,11,59)',
    title: 'Derek',
    resource: 21,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,11,59)',
    title: 'Natalie',
    resource: 43,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,11,59)',
    title: 'Kaylin',
    resource: 44,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,11,59)',
    title: 'Fred',
    resource: 71,
    slot: 5,
  }, //<hide-comment>
  {
    start: 'dyndatetime(y,m,d+1,2)',
    end: 'dyndatetime(y,m,d+1,10)',
    title: 'Theo',
    resource: 23,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d+1,2)',
    end: 'dyndatetime(y,m,d+1,10)',
    title: 'Jenifer',
    resource: 42,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Jude',
    resource: 11,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Jewell',
    resource: 32,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Florence',
    resource: 46,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Jon',
    resource: 52,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Gerry',
    resource: 73,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Adrianna',
    resource: 82,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Jude',
    resource: 11,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Dory',
    resource: 33,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Natalie',
    resource: 43,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Meredith',
    resource: 51,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Fred',
    resource: 71,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Lou',
    resource: 83,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Leon',
    resource: 84,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Sierra',
    resource: 92,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Willis',
    resource: 12,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Derek',
    resource: 21,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Ford',
    resource: 31,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Dory',
    resource: 33,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Kaylin',
    resource: 44,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Meredith',
    resource: 51,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Isadora',
    resource: 54,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+1, 16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Sylvia',
    resource: 62,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Antonia',
    resource: 72,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Reg',
    resource: 81,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+1, 16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Lou',
    resource: 83,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Sierra',
    resource: 92,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,11,59)',
    title: 'Derek',
    resource: 21,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,11,59)',
    title: 'Natalie',
    resource: 43,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,11,59)',
    title: 'Kaylin',
    resource: 44,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,11,59)',
    title: 'Fred',
    resource: 71,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d+2,2)',
    end: 'dyndatetime(y,m,d+2,10)',
    title: 'Merv',
    resource: 22,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d+2,2)',
    end: 'dyndatetime(y,m,d+2,10)',
    title: 'Florence',
    resource: 46,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,12)',
    title: 'Ryan',
    resource: 13,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,12)',
    title: 'Jewell',
    resource: 32,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,12)',
    title: 'Florence',
    resource: 46,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,12)',
    title: 'Carlyn',
    resource: 53,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,12)',
    title: 'Fred',
    resource: 71,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,12)',
    title: 'Leon',
    resource: 84,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,12)',
    title: 'Jude',
    resource: 11,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Ford',
    resource: 31,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Natalie',
    resource: 43,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Carlyn',
    resource: 53,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Gerry',
    resource: 73,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Lou',
    resource: 83,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Leon',
    resource: 84,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Yancy',
    resource: 91,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Willis',
    resource: 12,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Merv',
    resource: 22,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Jewell',
    resource: 32,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Dory',
    resource: 33,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Gray',
    resource: 45,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Jon',
    resource: 52,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Isadora',
    resource: 54,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+2, 16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Layton',
    resource: 61,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Antonia',
    resource: 72,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Reg',
    resource: 81,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+2, 16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Lou',
    resource: 83,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Sierra',
    resource: 92,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,11,59)',
    title: 'Derek',
    resource: 21,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,11,59)',
    title: 'Natalie',
    resource: 43,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,11,59)',
    title: 'Kaylin',
    resource: 44,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,11,59)',
    title: 'Fred',
    resource: 71,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d+3,2)',
    end: 'dyndatetime(y,m,d+3,10)',
    title: 'Derek',
    resource: 21,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d+3,2)',
    end: 'dyndatetime(y,m,d+3,10)',
    title: 'Florence',
    resource: 46,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,12)',
    title: 'Willis',
    resource: 12,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,12)',
    title: 'Jewell',
    resource: 32,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,12)',
    title: 'Jenifer',
    resource: 42,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,12)',
    title: 'Jon',
    resource: 52,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,12)',
    title: 'Fred',
    resource: 71,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,12)',
    title: 'Adrianna',
    resource: 82,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,12)',
    title: 'Jude',
    resource: 11,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,15)',
    title: 'Jewell',
    resource: 32,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,15)',
    title: 'Gray',
    resource: 45,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,15)',
    title: 'Isadora',
    resource: 54,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,15)',
    title: 'Antonia',
    resource: 72,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,15)',
    title: 'Adrianna',
    resource: 82,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,15)',
    title: 'Leon',
    resource: 84,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,15)',
    title: 'Yancy',
    resource: 91,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Ryan',
    resource: 13,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Merv',
    resource: 22,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Ford',
    resource: 31,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Dory',
    resource: 33,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Breanne',
    resource: 41,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Meredith',
    resource: 51,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Carlyn',
    resource: 53,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+3, 16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Layton',
    resource: 61,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Gerry',
    resource: 73,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Reg',
    resource: 81,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+3, 16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Lou',
    resource: 83,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Sierra',
    resource: 92,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,11,59)',
    title: 'Derek',
    resource: 21,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,11,59)',
    title: 'Natalie',
    resource: 43,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,11,59)',
    title: 'Kaylin',
    resource: 44,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,11,59)',
    title: 'Fred',
    resource: 71,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d+4,2)',
    end: 'dyndatetime(y,m,d+4,10)',
    title: 'Theo',
    resource: 23,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d+4,2)',
    end: 'dyndatetime(y,m,d+4,10)',
    title: 'Jenifer',
    resource: 42,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,12)',
    title: 'Jude',
    resource: 11,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,12)',
    title: 'Jewell',
    resource: 32,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,12)',
    title: 'Florence',
    resource: 46,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,12)',
    title: 'Jon',
    resource: 52,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,12)',
    title: 'Gerry',
    resource: 73,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,12)',
    title: 'Adrianna',
    resource: 82,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,12)',
    title: 'Jude',
    resource: 11,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Dory',
    resource: 33,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Natalie',
    resource: 43,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Meredith',
    resource: 51,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Fred',
    resource: 71,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Lou',
    resource: 83,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Leon',
    resource: 84,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Sierra',
    resource: 92,
    slot: 3,
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Willis',
    resource: 12,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Derek',
    resource: 21,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Ford',
    resource: 31,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Dory',
    resource: 33,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Kaylin',
    resource: 44,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Meredith',
    resource: 51,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Isadora',
    resource: 54,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+4, 16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Sylvia',
    resource: 62,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Antonia',
    resource: 72,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Reg',
    resource: 81,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+4, 16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Lou',
    resource: 83,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Sierra',
    resource: 92,
    slot: 4,
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,11,59)',
    title: 'Derek',
    resource: 21,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,11,59)',
    title: 'Natalie',
    resource: 43,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,11,59)',
    title: 'Kaylin',
    resource: 44,
    slot: 5,
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,11,59)',
    title: 'Fred',
    resource: 71,
    slot: 5,
  }, //</hide-comment>
];

const allSlots = [
  {
    id: 1,
    name: 'Night',
    time: '2AM - 10AM',
  },
  {
    id: 2,
    name: 'Breakfast',
    time: '8AM - 12PM',
  },
  {
    id: 3,
    name: 'Lunch',
    time: '11AM - 3PM',
  },
  {
    id: 4,
    name: 'Dinner',
    time: '4PM - 11PM',
  },
  {
    id: 5,
    name: 'After hours',
    time: '11PM - 1AM',
  },
];

const views = [
  {
    text: 'Day',
    value: 'day',
  },
  {
    text: 'Week',
    value: 'week',
  },
];

function App() {
  const [shifts, setShifts] = React.useState(allShifts);
  const [slots, setSlots] = React.useState(allSlots);
  const [shiftTimes, setShiftTimes] = React.useState([
    {
      id: 1,
      name: 'Night',
      checked: true,
      disabled: false,
    },
    {
      id: 2,
      name: 'Breakfast',
      checked: true,
      disabled: false,
    },
    {
      id: 3,
      name: 'Lunch',
      checked: true,
      disabled: false,
    },
    {
      id: 4,
      name: 'Dinner',
      checked: true,
      disabled: false,
    },
    {
      id: 5,
      name: 'After hours',
      checked: true,
      disabled: false,
    },
  ]);

  const [selectedView, setView] = React.useState('week');
  const view = React.useMemo(
    () =>
      selectedView === 'day'
        ? {
            timeline: {
              type: 'day',
              eventList: true,
            },
          }
        : {
            timeline: {
              type: 'week',
              eventList: true,
              startDay: 1,
              endDay: 5,
            },
          },
    [selectedView],
  );

  const getEmployeeName = React.useCallback((event) => {
    for (var i = 0; i < resources.length; ++i) {
      for (var j = 0; j < resources[i].children.length; ++j) {
        var employee = resources[i].children[j];
        if (employee.id === event.resource) {
          return employee.name.substr(0, employee.name.indexOf(' '));
        }
      }
    }
  }, []);

  const extendDefaultEvent = React.useCallback(
    (event) => {
      return {
        title: getEmployeeName(event),
      };
    },
    [getEmployeeName],
  );

  const formatMyDate = React.useCallback((date) => {
    return formatDate('YYYY-MM-DD', new Date(date));
  }, []);

  const getShiftsNrs = React.useCallback(
    (date, slotId) => {
      const shiftList = [];

      for (let i = 0; i < shifts.length; ++i) {
        const shift = shifts[i];
        // get slot id from resource id
        const resourceNr = +shift.resource.toString().charAt(0);
        if (shift.slot === slotId && date === formatMyDate(shift.start)) {
          shiftList[resourceNr - 1] = (shiftList[resourceNr - 1] || 0) + 1;
        }
      }
      return shiftList;
    },
    [shifts, formatMyDate],
  );

  const renderMyResource = (resource) => {
    const parent = resource.children;
    return (
      <div className={parent ? 'md-shift-resource' : ''} style={{ color: parent ? parent[0].color : '' }}>
        {parent && <span className="md-shift-resource-icon">{resource.icon}</span>}
        {resource.name}
      </div>
    );
  };

  const renderMySlot = (args) => {
    const slot = args.slot;
    const date = formatMyDate(args.date);
    const shiftList = getShiftsNrs(date, slot.id);
    let length = 0;

    return (
      <div className="md-shift-header">
        <div className="md-shift-name">
          {slot.name}
          <span className="md-shift-time">{slot.time}</span>
        </div>
        <div className={'md-shift-counts-' + date + '-' + slot.id}>
          {shiftList.length > 0 &&
            shiftList.map((shift, i) => {
              ++length;
              return (
                <React.Fragment key={i}>
                  <div className="md-shift-count">
                    <span className="md-shift-icon">{resources[i].icon}</span>
                    <span className={'md-shift-nr md-shift-nr-' + date + '-' + slot.id + '-' + (i + 1)}>{shift}</span>
                  </div>
                  {length === 4 && <br />}
                </React.Fragment>
              );
            })}
          {shiftList.length === 0 && <div className="md-shift-count">{'\uD83D\uDE36'} empty...</div>}
        </div>
      </div>
    );
  };

  const checkboxChange = React.useCallback(
    (ev) => {
      const value = +ev.target.value;
      const checked = ev.target.checked;
      let filteredSlots = [];
      let updatedTimes = shiftTimes.map((cs) => (cs.id === value ? { ...cs, checked } : cs));

      for (const slot of allSlots) {
        if (updatedTimes.find((us) => us.id === slot.id && us.checked)) {
          filteredSlots.push(slot);
        }
      }

      if (filteredSlots.length === 1) {
        updatedTimes = updatedTimes.map((ut) => (ut.checked ? { ...ut, disabled: true } : ut));
      } else {
        updatedTimes = updatedTimes.map((ut) => ({ ...ut, disabled: false }));
      }

      setSlots(filteredSlots);
      setShiftTimes(updatedTimes);
    },
    [shiftTimes],
  );

  const viewChange = React.useCallback((event) => {
    setView(event.value);
  }, []);

  const renderMyHeader = () => {
    return (
      <React.Fragment>
        <CalendarNav />
        <div className="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">
          {shiftTimes.map((cs) => {
            return (
              <Checkbox key={cs.id} value={cs.id} checked={cs.checked} disabled={cs.disabled} onChange={checkboxChange} theme="material">
                {cs.name}
              </Checkbox>
            );
          })}
        </div>
        <Select data={views} value={selectedView} onChange={viewChange} inputStyle="box" />
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </React.Fragment>
    );
  };

  const isDouble = React.useCallback((event, inst) => {
    const date = event.start.setHours(0);
    const events = inst.getEvents(date);
    const ev = events.find((e) => {
      return new Date(e.start).setHours(0) === date && e.resource === event.resource && e.slot === event.slot;
    });
    return ev;
  }, []);

  const createEvent = React.useCallback(
    (args, inst) => {
      if (isDouble(args.event, inst)) {
        return false;
      } else {
        setTimeout(() => {
          setShifts([...shifts, args.event]);
        });
      }
    },
    [shifts, isDouble],
  );

  const eventUpdate = React.useCallback(
    (args, inst) => {
      const event = args.event;

      if (isDouble(event, inst)) {
        return false;
      } else {
        const newName = getEmployeeName(event);
        if (newName) {
          const index = shifts.findIndex((x) => x.id === event.id);
          const newShifts = [...shifts];
          newShifts[index].title = newName;
          setShifts(newShifts);
        }
      }
    },
    [shifts, getEmployeeName, isDouble],
  );

  const deleteEvent = React.useCallback(
    (args) => {
      setShifts(shifts.filter((item) => item.id !== args.event.id));
    },
    [shifts],
  );

  return (
    <Eventcalendar
      view={view}
      data={shifts}
      resources={resources}
      slots={slots}
      clickToCreate={true}
      dragToMove={true}
      extendDefaultEvent={extendDefaultEvent}
      renderResource={renderMyResource}
      renderSlot={renderMySlot}
      renderHeader={renderMyHeader}
      onEventUpdate={eventUpdate}
      onEventCreate={createEvent}
      onEventDeleted={deleteEvent}
      cssClass="md-shift-management-calendar"
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
