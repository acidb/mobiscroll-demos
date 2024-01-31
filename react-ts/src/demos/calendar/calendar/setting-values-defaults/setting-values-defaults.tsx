import { Datepicker, Button, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const initialValue = new Date(2020, 11, 24);

  const [now, setNow] = React.useState<any>();
  const nowButtons = React.useMemo<any>(
    () => [
      {
        text: 'Now',
        handler: () => {
          now.setVal(new Date());
          now.close();
        },
      },
      'set',
      'cancel',
    ],
    [now],
  );

  const [custom, setCustom] = React.useState<any>();
  const customButtons = React.useMemo<any>(
    () => [
      {
        text: '05 Jan 2020',
        handler: () => {
          custom.setVal(new Date(2020, 0, 5));
          custom.close();
        },
      },
      'set',
      'cancel',
    ],
    [custom],
  );

  const autoButtons = React.useMemo<any>(
    () => [
      {
        text: 'Close',
        handler: 'cancel',
      },
    ],
    [],
  );

  const [val, setVal] = React.useState<Date>();

  const setValue = () => {
    setVal(new Date(2020, 0, 2));
  };

  const setToday = () => {
    setVal(new Date());
  };

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Controlling the default value</div>
        <Datepicker label="Default" controls={['calendar']} placeholder="Please select...">
          Default
        </Datepicker>
        <Datepicker label="Custom default" controls={['calendar']} defaultSelection={initialValue} placeholder="Please select...">
          Custom default
        </Datepicker>
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Setting a custom value</div>
        <div className="mbsc-button-group-block">
          <Button onClick={setValue}>02-01-2020</Button>
          <Button onClick={setToday}>Today</Button>
        </div>
        <Datepicker controls={['calendar']} display="inline" value={val} />
      </div>

      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Buttons API</div>
        <Datepicker controls={['calendar']} buttons={nowButtons} ref={setNow} label="Now" placeholder="Please select..."></Datepicker>
        <Datepicker
          controls={['calendar']}
          buttons={customButtons}
          ref={setCustom}
          label="Custom"
          placeholder="Please select..."
        ></Datepicker>
        <Datepicker controls={['calendar']} buttons={autoButtons} label="Auto set" placeholder="Please select...">
          Auto set
        </Datepicker>
      </div>
    </Page>
  );
};
export default App;
