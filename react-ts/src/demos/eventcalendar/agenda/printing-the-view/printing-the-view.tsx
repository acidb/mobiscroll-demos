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

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo(() => {
    return {
      agenda: { type: 'month' },
    };
  }, []);

  const printView = () => {
    inst.print();
  };

  return (
    <Page>
      <Button onClick={printView}>Print agenda</Button>
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
