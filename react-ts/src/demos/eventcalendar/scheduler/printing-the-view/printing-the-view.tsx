import React from 'react';
import {
  Eventcalendar,
  Page,
  Button,
  getJson,
  setOptions,
  MbscCalendarEvent,
  MbscEventcalendarView /* localeImport */,
} from '@mobiscroll/react';
import { print } from '@mobiscroll/print';

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

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      schedule: { type: 'week' },
    };
  }, []);

  const printView = () => {
    inst.print();
  };

  return (
    <Page>
      <Button onClick={printView}>Print scheduler</Button>
      <Eventcalendar
        // theme
        // locale
        data={myEvents}
        view={view}
        ref={setInst}
        modules={MY_MODULES}
      />
    </Page>
  );
};
export default App;
