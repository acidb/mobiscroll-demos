import { print } from '@mobiscroll/print';
import { Eventcalendar, Button, getJson, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useState, useMemo, useCallback, useEffect } from 'react';

const MY_MODULES = [print];

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState([]);
  const [inst, setInst] = useState(null);

  const myResources = useMemo(() => {
    return [
      {
        id: 1,
        name: 'Flatiron Room',
        color: '#fdf500',
      },
      {
        id: 2,
        name: 'The Capital City',
        color: '#ff0101',
      },
      {
        id: 3,
        name: 'Heroes Square',
        color: '#01adff',
      },
      {
        id: 4,
        name: 'Thunderdome',
        color: '#ff4600',
      },
      {
        id: 5,
        name: 'King’s Landing',
        color: '#239a21',
      },
      {
        id: 6,
        name: 'Gathering Field',
        color: '#8f1ed6',
      },
    ];
  }, []);

  const myView = useMemo(() => {
    return {
      timeline: {
        type: 'week',
        startDay: 1,
        endDay: 5,
        eventList: true,
      },
    };
  }, []);

  const printView = useCallback(() => {
    inst.print();
  }, [inst]);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/daily-weekly-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <>
      <Button onClick={printView}>Print timeline</Button>
      <Eventcalendar
        // drag
        data={myEvents}
        resources={myResources}
        view={myView}
        ref={setInst}
        modules={MY_MODULES}
      />
    </>
  );
}

export default App;
