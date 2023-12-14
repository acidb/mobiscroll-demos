import React from 'react';
import { Datepicker /* localeImport */ } from '@mobiscroll/react';

function App() {
  return (
    <Datepicker
      // locale
      controls={['calendar']}
      display="inline"
      theme="material" // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
      themeVariant="dark" // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
    />
  );
}

export default App;
