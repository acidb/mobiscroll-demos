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
      <Datepicker controls={['calendar']} inputComponent="input" inputProps={inputProps} />
      <Datepicker controls={['calendar']} inputProps={boxInputProps} />
      <Datepicker controls={['calendar']} display="inline" />
    </Page>
  );
};
export default App;
