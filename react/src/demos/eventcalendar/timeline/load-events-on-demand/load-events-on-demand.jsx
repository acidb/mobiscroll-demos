import React from 'react';
//<demo-only>import { Eventcalendar, getJson, setOptions, toast/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const getJson = mobiscroll.getJson;
const setOptions = mobiscroll.setOptions;
const toast = mobiscroll.toast; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [events, setEvents] = React.useState([]);
  const myResources = [
    {
      id: 1,
      name: 'Resource A',
      color: '#fdf500',
    },
    {
      id: 2,
      name: 'Resource B',
      color: '#ff0101',
    },
    {
      id: 3,
      name: 'Resource C',
      color: '#01adff',
    },
    {
      id: 4,
      name: 'Resource D',
      color: '#239a21',
    },
    {
      id: 5,
      name: 'Resource E',
      color: '#ff4600',
    },
  ];

  const onPageLoading = React.useCallback((event, inst) => {
    const year = event.month.getFullYear();
    const month = event.month.getMonth();
    const day = event.firstDay.getDate();

    getJson(
      'https://trial.mobiscroll.com/weeklyevents/?year=' + year + '&month=' + month + '&day=' + day,
      (data) => {
        const newEvents = [];

        for (const d of data) {
          newEvents.push({
            start: d.start,
            end: d.end,
            title: d.title,
            resource: d.resource,
          });
        }

        setEvents(newEvents);

        toast({
          message: 'New events loaded',
        });
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo(() => {
    return {
      timeline: { type: 'day' },
    };
  }, []);

  return <Eventcalendar data={events} view={view} resources={myResources} onPageLoading={onPageLoading} />;
}

ReactDOM.render(<App />, document.getElementById('content'));
