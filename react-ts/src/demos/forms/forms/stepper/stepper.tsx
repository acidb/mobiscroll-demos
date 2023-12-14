import React from 'react';
import { Page, Stepper, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Passengers</div>
        <Stepper label="Adults" description="From 14 years" min={1} defaultValue={1} max={15} />
        <Stepper label="Children" description="2-14 years" inputPosition="start" max={15} />
        <Stepper label="Infant" description="0-2 years" inputPosition="start" max={10} />
      </div>
    </Page>
  );
};
export default App;
