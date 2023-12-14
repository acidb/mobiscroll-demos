import React from 'react';
import { Select, Page, setOptions, getJson /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const myData = [
  {
    text: 'Atlanta',
    value: 'atl',
  },
  {
    text: 'Berlin',
    value: 'ber',
  },
  {
    text: 'Boston',
    value: 'bos',
  },
  {
    text: 'Chicago',
    value: 'chi',
  },
  {
    text: 'London',
    value: 'lon',
  },
  {
    text: 'Los Angeles',
    value: 'la',
  },
  {
    text: 'New York',
    value: 'ny',
  },
  {
    text: 'Paris',
    value: 'par',
  },
  {
    text: 'San Francisco',
    value: 'sf',
  },
];

const App: React.FC = () => {
  const [remoteData, setRemoteData] = React.useState<any>([]);

  const inputProps = {
    inputStyle: 'box',
    labelStyle: 'stacked',
    placeholder: 'Please select...',
  };

  React.useEffect(() => {
    getJson('https://trial.mobiscroll.com/content/languages.json', (resp: any) => {
      setRemoteData(resp);
    });
  }, []);

  return (
    <Page>
      <div className="mbsc-grid mbsc-form-grid">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-12 mbsc-col-md-6">
            <Select data={myData} label="Data object" inputProps={inputProps} />
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-6">
            <Select data={remoteData} label="Remote data" inputProps={inputProps} />
          </div>
        </div>
      </div>
    </Page>
  );
};
export default App;
