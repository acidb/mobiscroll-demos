import React from 'react';
//<demo-only>import { Eventcalendar, getJson, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const getJson = mobiscroll.getJson;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

const myColors = [
  {
    start: 'dyndatetime(y,m,0)',
    end: 'dyndatetime(y,m,1)',
    background: '#fde4c880',
  },
  {
    start: 'dyndatetime(y,m,17)',
    end: 'dyndatetime(y,m,20)',
    background: '#d5f1ea80',
  },
  {
    date: 'dyndatetime(y,m,29)',
    background: '#ffdbdb80',
  },
  {
    date: 'dyndatetime(y,m+1,3)',
    background: '#fbedd080',
  },
  {
    date: 'dyndatetime(y,m+1,10)',
    background: '#fbedd080',
  },
  {
    background: '#d6e81e1a',
    recurring: {
      repeat: 'monthly',
      day: -1,
    },
  },
];

function App() {
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return <Eventcalendar data={myEvents} colors={myColors} />;
}

ReactDOM.render(<App />, document.getElementById('content'));
