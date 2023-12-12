import React from 'react';
//<demo-only>import { Select, Button, Page, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Select = mobiscroll.Select;
const Page = mobiscroll.Page;
const Button = mobiscroll.Button;
const setOptions = mobiscroll.setOptions; //</extra>

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

function App() {
  const [customSelected, setCustomSelected] = React.useState();
  const selectRef = React.useRef();

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

  const customButtons = React.useMemo(() => {
    return [
      {
        text: 'Custom',
        handler: () => {
          selectRef.current.setTempVal('chi');
        },
      },
      'set',
      'cancel',
    ];
  }, []);

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
}

ReactDOM.render(<App />, document.getElementById('content'));
