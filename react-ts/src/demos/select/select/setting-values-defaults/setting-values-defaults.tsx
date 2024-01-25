import { Select, Button, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const myData = [
  {
    text: 'Atlanta',
    value: 'atl',
  },
  {
    text: 'Berlin',
    value: 'ber',
  },
  {
    text: 'Boston',
    value: 'bos',
  },
  {
    text: 'Chicago',
    value: 'chi',
  },
  {
    text: 'London',
    value: 'lon',
  },
];

const App: React.FC = () => {
  const [customSelected, setCustomSelected] = React.useState('');
  const selectRef = React.useRef<any>();

  const inputProps = {
    inputStyle: 'outline',
    labelStyle: 'stacked',
    placeholder: 'Please select...',
  };

  const setBoston = React.useCallback(() => {
    setCustomSelected('bos');
  }, []);

  const setLondon = React.useCallback(() => {
    setCustomSelected('lon');
  }, []);

  const customButtons = React.useMemo(
    () => [
      {
        text: 'Custom',
        handler: () => {
          selectRef.current.setTempVal('chi');
        },
      },
      'set',
      'cancel',
    ],
    [],
  );
  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Controlling the default value</div>
        <Select data={myData} label="Default" inputProps={inputProps} />
        <Select data={myData} label="Custom default" inputProps={inputProps} defaultSelection="ber" />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Setting a custom value</div>
        <div className="mbsc-button-group-block">
          <Button onClick={setBoston}>Boston</Button>
          <Button onClick={setLondon}>London</Button>
        </div>
        <Select data={myData} display="inline" value={customSelected} />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Buttons API</div>
        <Select data={myData} ref={selectRef} label="Custom" inputProps={inputProps} buttons={customButtons} />
        <Select data={myData} label="Auto set" inputProps={inputProps} buttons={['cancel']} />
      </div>
    </Page>
  );
};
export default App;
