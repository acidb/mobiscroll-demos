import React from 'react';
//<demo-only>import { Select, Page, setOptions, getJson/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Select = mobiscroll.Select;
const Page = mobiscroll.Page;
const setOptions = mobiscroll.setOptions;
const getJson = mobiscroll.getJson; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

const names = [
  {
    text: 'Abigail Hodges',
    value: 1,
  },
  {
    text: 'Adam Robertson',
    value: 2,
  },
  {
    text: 'Blake Nolan',
    value: 3,
  },
  {
    text: 'Dylan Manning',
    value: 4,
  },
  {
    text: 'Jane Clarkson',
    value: 5,
  },
  {
    text: 'Julian Parr',
    value: 6,
  },
  {
    text: 'Lily Blake',
    value: 7,
  },
  {
    text: 'Luke Wright',
    value: 8,
  },
  {
    text: 'Nathan Poole',
    value: 9,
  },
  {
    text: 'Olivia Vance',
    value: 10,
  },
  {
    text: 'Paul Hudson',
    value: 11,
  },
  {
    text: 'Rose Taylor',
    value: 12,
  },
  {
    text: 'Samantha Martin',
    value: 13,
  },
  {
    text: 'Steven Cameron',
    value: 14,
  },
  {
    text: 'Wanda Mills',
    value: 15,
  },
];

function App() {
  const [remoteData, setRemoteData] = React.useState([]);

  const inputProps = {
    inputStyle: 'box',
    labelStyle: 'stacked',
    placeholder: 'Please select...',
  };

  const remoteFiltering = React.useCallback((filterText) => {
    getJson(
      'https://trial.mobiscroll.com/airports/' + encodeURIComponent(filterText),
      (data) => {
        const airports = [];
        for (const item of data) {
          airports.push({ text: item.name, value: item.code });
        }
        setRemoteData(airports);
      },
      'jsonp',
    );
  }, []);

  const onFilter = React.useCallback(
    (ev) => {
      remoteFiltering(ev.filterText);
      return false;
    },
    [remoteFiltering],
  );

  React.useEffect(() => {
    remoteFiltering('');
  });

  return (
    <Page>
      <div className="mbsc-grid mbsc-form-grid">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-12 mbsc-col-md-6">
            <Select data={names} display="anchored" filter={true} label="Local data" inputProps={inputProps} />
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-6">
            <Select data={remoteData} display="anchored" filter={true} label="Remote data" inputProps={inputProps} onFilter={onFilter} />
          </div>
        </div>
      </div>
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
