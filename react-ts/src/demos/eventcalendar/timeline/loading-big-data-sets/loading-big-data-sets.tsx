import React from 'react';
import { Eventcalendar, MbscEventcalendarView, MbscPageLoadingEvent, setOptions /* localeImport */ } from '@mobiscroll/react';
import './loading-big-data-sets.css';

setOptions({
  // localeJs,
  // themeJs
});

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

const resourceNr = 200;
const eventsNr = 10000;
const myResources = [];
const myEventColors = ['#ff0101', '#239a21', '#8f1ed6', '#01adff', '#d8ca1a'];

for (var i = 1; i <= resourceNr; i++) {
  myResources.push({ name: 'Resource ' + i, id: i });
}

const App: React.FC = () => {
  const [myEvents, setMyEvents] = React.useState([]);

  const myView = React.useMemo<MbscEventcalendarView>(() => {
    return {
      timeline: {
        type: 'year',
        eventList: true,
      },
    };
  }, []);

  const handlePageLoading = React.useCallback((args: MbscPageLoadingEvent) => {
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
};
export default App;
