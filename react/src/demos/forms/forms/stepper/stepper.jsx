import React from 'react';
//<demo-only>import { setOptions, Page, Stepper/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const setOptions = mobiscroll.setOptions;
const Page = mobiscroll.Page;
const Stepper = mobiscroll.Stepper; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
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
}

ReactDOM.render(<App />, document.getElementById('content'));
