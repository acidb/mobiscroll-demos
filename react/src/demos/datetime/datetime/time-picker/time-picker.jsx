import React from 'react';
import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return (
    <Page>
      <Datepicker
        controls={['time']}
        inputProps={{
          label: 'Time picker',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['time']}
        timeFormat="HH:mm"
        inputProps={{
          label: '24 hour picker',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['time']}
        timeFormat="h:mm A"
        inputProps={{
          label: '12 h picker with AM/PM',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
      <Datepicker
        controls={['time']}
        timeFormat="HH:mm:ss"
        headerText="Time: {value}"
        inputProps={{
          label: 'Hour, Min, Sec',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
      />
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
