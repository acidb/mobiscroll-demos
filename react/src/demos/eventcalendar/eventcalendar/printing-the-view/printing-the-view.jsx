import React from 'react';
import { Eventcalendar, Page, Button, getJson, setOptions /* localeImport */ } from '@mobiscroll/react';
import { print } from '@mobiscroll/print';

const MY_MODULES = [print];

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = React.useState([]);
  const [inst, setInst] = React.useState(null);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
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
        modules={MY_MODULES}
      />
    </Page>
  );
}

export default App;
