import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => (
  <div>
    <Datepicker
      controls={['calendar']}
      select="range"
      display="inline"
      calendarType="month"
      pages={2}
      showWeekNumbers={true}
      showOuterDays={true}
    />
    <Datepicker
      controls={['calendar']}
      select="range"
      display="inline"
      calendarType="week"
      calendarSize={2}
      showWeekNumbers={true}
      calendarScroll="vertical"
    />
  </div>
);
export default App;
