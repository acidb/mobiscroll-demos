import React from 'react';
import { Datepicker, Button, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const initialValue = new Date(2020, 11, 24);

  const [now, setNow] = React.useState();
  const nowButtons = React.useMemo(() => {
    return [
      {
        text: 'Now',
        handler: () => {
          now.setVal(new Date());
          now.close();
        },
      },
      'set',
      'cancel',
    ];
  }, [now]);

  const [custom, setCustom] = React.useState();
  const customButtons = React.useMemo(() => {
    return [
      {
        text: '05 Jan 2020',
        handler: () => {
          custom.setVal(new Date(2020, 0, 5));
          custom.close();
        },
      },
      'set',
      'cancel',
    ];
  }, [custom]);

  const autoButtons = React.useMemo(() => {
    return [
      {
        text: 'Close',
        handler: 'cancel',
      },
    ];
  }, []);

  const [val, setVal] = React.useState();

  const setValue = (event) => {
    setVal(new Date(2020, 0, 2));
  };

  const setToday = (event) => {
    setVal(new Date());
  };

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Controlling the default value</div>
        <Datepicker label="Default" controls={['date']} placeholder="Please select...">
          Default
        </Datepicker>
        <Datepicker label="Custom default" controls={['date']} defaultSelection={initialValue} placeholder="Please select...">
          Custom default
        </Datepicker>
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Setting a custom value</div>
        <div className="mbsc-button-group-block">
          <Button onClick={setValue}>02-01-2020</Button>
          <Button onClick={setToday}>Today</Button>
        </div>
        <Datepicker controls={['date']} display="inline" value={val} />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Buttons API</div>
        <Datepicker controls={['date']} buttons={nowButtons} ref={setNow} label="Now" placeholder="Please select..."></Datepicker>
        <Datepicker controls={['date']} buttons={customButtons} ref={setCustom} label="Custom" placeholder="Please select..."></Datepicker>
        <Datepicker controls={['date']} buttons={autoButtons} label="Auto set" placeholder="Please select...">
          Auto set
        </Datepicker>
      </div>
    </Page>
  );
}

export default App;
