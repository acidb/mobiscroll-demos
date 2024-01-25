import { print } from '@mobiscroll/print';
import {
  Eventcalendar,
  Page,
  Button,
  getJson,
  setOptions,
  MbscCalendarEvent,
  MbscEventcalendarView /* localeImport */,
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

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo<MbscEventcalendarView>(
    () => ({
      schedule: { type: 'week' },
    }),
    [],
  );

  const printView = () => {
    inst.print();
  };

  return (
    <Page>
      <Button onClick={printView}>Print scheduler</Button>
      <Eventcalendar
        // theme
        // locale
        // drag
        data={myEvents}
        view={view}
        ref={setInst}
        modules={MY_MODULES}
      />
    </Page>
  );
};
export default App;
