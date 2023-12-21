import React from 'react';
import { Eventcalendar, Page, Button, getJson, setOptions, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/react';
import { print } from '@mobiscroll/print';

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

  const printView = () => {
    inst.print();
  };

  return (
    <Page>
      <Button onClick={printView}>Print calendar</Button>
      <Eventcalendar
        // theme
        // locale
        data={myEvents}
        ref={setInst}
        modules={[print]}
      />
    </Page>
  );
};
export default App;
