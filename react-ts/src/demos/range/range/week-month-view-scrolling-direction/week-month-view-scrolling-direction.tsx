import React from 'react';
import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  return (
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
        weeks={2}
        showWeekNumbers={true}
        calendarScroll="vertical"
      />
    </div>
  );
};
