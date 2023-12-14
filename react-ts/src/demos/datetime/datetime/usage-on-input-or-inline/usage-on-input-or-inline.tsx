import React from 'react';
import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const inputProps = {
    placeholder: 'Please Select...',
  };

  const boxInputProps = {
    label: 'Range',
    labelStyle: 'stacked',
    inputStyle: 'outline',
    placeholder: 'Please Select...',
  };

  return (
    <Page>
      <Datepicker controls={['date']} inputComponent="input" inputProps={inputProps} />
      <Datepicker controls={['date']} inputProps={boxInputProps} />
      <Datepicker controls={['date']} display="inline" />
    </Page>
  );
};
export default App;
