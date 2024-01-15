import { print } from '@mobiscroll/print';
import { Button, Eventcalendar, getJson, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useEffect, useCallback, useMemo, useState } from 'react';

const MY_MODULES = [print];

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState([]);
  const [inst, setInst] = useState(null);

  const view = useMemo(() => ({ agenda: { type: 'month' } }), []);

  const printView = useCallback(() => {
    inst.print();
  }, [inst]);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Page>
      <Button onClick={printView}>Print agenda</Button>
      <Eventcalendar data={myEvents} view={view} ref={setInst} modules={MY_MODULES} />
    </Page>
  );
}

export default App;
