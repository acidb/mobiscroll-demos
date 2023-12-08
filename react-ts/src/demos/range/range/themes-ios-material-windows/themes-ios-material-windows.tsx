import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  return (
    <Datepicker
      controls={['calendar']}
      select="range"
      display="inline"
      theme="material" // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
      themeVariant="dark" // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
    />
  );
};
