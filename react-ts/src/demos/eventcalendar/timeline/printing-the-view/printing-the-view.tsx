import { print } from '@mobiscroll/print';
import {
  Eventcalendar,
  Page,
  Button,
  MbscResource,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import React from 'react';

const MY_MODULES = [print];

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [inst, setInst] = React.useState<any>(null);
  const myResources = React.useMemo<MbscResource[]>(
    () => [
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
    ],
    [],
  );

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/daily-weekly-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
        allDay: false,
        startDay: 1,
        endDay: 5,
      },
    }),
    [],
  );

  const printView = () => {
    inst.print();
  };

  return (
    <Page>
      <Button onClick={printView}>Print timeline</Button>
      <Eventcalendar
        // theme
        // locale
        data={myEvents}
        resources={myResources}
        view={view}
        ref={setInst}
        modules={MY_MODULES}
      />
    </Page>
  );
};
export default App;
