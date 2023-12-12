import React from 'react';
//<demo-only>import { Datepicker, Page, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;
const Page = mobiscroll.Page;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return (
    <Page>
      <Datepicker
        controls={['datetime']}
        inputProps={{
          label: 'Compact date & time picker',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['date', 'time']}
        inputProps={{
          label: 'Expanded date & time picker',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <div className="mbsc-grid mbsc-no-padding">
        <div className="mbsc-row">
          <div className="mbsc-col-6">
            <Datepicker
              controls={['date']}
              inputProps={{
                label: 'Date',
                labelStyle: 'stacked',
                inputStyle: 'outline',
                placeholder: 'Please Select...',
              }}
            />
          </div>
          <div className="mbsc-col-6">
            <Datepicker
              controls={['time']}
              inputProps={{
                label: 'Time',
                labelStyle: 'stacked',
                inputStyle: 'outline',
                placeholder: 'Please Select...',
              }}
            />
          </div>
        </div>
      </div>
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
