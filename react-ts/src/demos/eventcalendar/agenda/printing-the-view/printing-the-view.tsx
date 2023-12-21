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

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [inst, setInst] = React.useState<Eventcalendar>();
  const setInstElement = React.useCallback((elm: Eventcalendar) => {
    setInst(elm);
  }, []);

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
      agenda: { type: 'month' },
    };
  }, []);

  const printView = () => {
    inst!.print();
  };

  return (
    <Page>
      <Button onClick={printView}>Print agenda</Button>
      <Eventcalendar
        // theme
        // locale
        data={myEvents}
        view={view}
        ref={setInstElement}
        modules={[print]}
      />
    </Page>
  );
};
export default App;
