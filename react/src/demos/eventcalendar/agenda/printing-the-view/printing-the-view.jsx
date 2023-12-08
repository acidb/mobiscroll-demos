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
}

ReactDOM.render(<App />, document.getElementById('content'));
