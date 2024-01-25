import { Button, Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const initialValue = new Date(2020, 11, 24);

  const [now, setNow] = useState();
  const [custom, setCustom] = useState();
  const [val, setVal] = useState();

  const nowButtons = useMemo(() => {
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

  const customButtons = useMemo(() => {
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

  const autoButtons = useMemo(() => {
    return [
      {
        text: 'Close',
        handler: 'cancel',
      },
    ];
  }, []);

  const setValue = useCallback(() => {
    setVal(new Date(2020, 0, 2));
  }, []);

  const setToday = useCallback(() => {
    setVal(new Date());
  }, []);

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Controlling the default value</div>
        <Datepicker label="Default" placeholder="Please select..." />
        <Datepicker label="Custom default" defaultSelection={initialValue} placeholder="Please select..." />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Setting a custom value</div>
        <div className="mbsc-button-group-block">
          <Button onClick={setValue}>02-01-2020</Button>
          <Button onClick={setToday}>Today</Button>
        </div>
        <Datepicker display="inline" value={val} />
      </div>

      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Buttons API</div>
        <Datepicker buttons={nowButtons} ref={setNow} label="Now" placeholder="Please select..." />
        <Datepicker buttons={customButtons} ref={setCustom} label="Custom" placeholder="Please select..." />
        <Datepicker buttons={autoButtons} label="Auto set" placeholder="Please select..." />
      </div>
    </Page>
  );
}

export default App;
