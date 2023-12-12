import React from 'react';
//<demo-only>import { Eventcalendar, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const setOptions = mobiscroll.setOptions;
const Eventcalendar = mobiscroll.Eventcalendar; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const resourceNr = 200;
const eventsNr = 10000;
const myResources = [];
const myEventColors = ['#ff0101', '#239a21', '#8f1ed6', '#01adff', '#d8ca1a'];

for (var i = 1; i <= resourceNr; i++) {
  myResources.push({ name: 'Resource ' + i, id: i });
}

function App() {
  const [myEvents, setMyEvents] = React.useState([]);

  const myView = React.useMemo(() => {
    return {
      timeline: {
        type: 'year',
        eventList: true,
      },
    };
  }, []);

  const handlePageLoading = React.useCallback((args) => {
    setTimeout(() => {
      const year = args.firstDay.getFullYear();
      const newEvents = [];
      // Generate random events
      for (let i = 0; i < eventsNr; i++) {
        const day = getRandomInt(1, 31);
        const length = getRandomInt(2, 5);
        const resource = getRandomInt(1, resourceNr + 1);
        const month = getRandomInt(0, 12);
        const color = getRandomInt(0, 6);
        newEvents.push({
          color: myEventColors[color],
          end: new Date(year, month, day + length),
          resource: resource,
          start: new Date(year, month, day),
          title: 'Event ' + i,
        });
      }
      setMyEvents(newEvents);
    });
  }, []);

  return <Eventcalendar view={myView} data={myEvents} resources={myResources} onPageLoading={handlePageLoading} />;
}

ReactDOM.render(<App />, document.getElementById('content'));
