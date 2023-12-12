import React from 'react';
//<demo-only>import { Datepicker/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;//</extra>

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

ReactDOM.render(<App />, document.getElementById('content'));
