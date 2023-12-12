import React from 'react';
//<demo-only>import { Eventcalendar, getJson, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const getJson = mobiscroll.getJson;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();
const myData = [
  {
    title: 'Fixed event',
    start: new Date(now.getFullYear(), now.getMonth(), 18),
    end: new Date(now.getFullYear(), now.getMonth(), 19),
    color: '#9e9e9e',
    editable: false,
  },
  {
    title: 'Drag me',
    start: new Date(now.getFullYear(), now.getMonth(), 3),
    end: new Date(now.getFullYear(), now.getMonth(), 5),
    color: '#cc9900',
  },
  {
    title: 'Resize me',
    start: new Date(now.getFullYear(), now.getMonth(), 24),
    end: new Date(now.getFullYear(), now.getMonth(), 29),
    color: '#ca4747',
  },
  {
    title: 'Move me around',
    start: new Date(now.getFullYear(), now.getMonth(), 11),
    end: new Date(now.getFullYear(), now.getMonth(), 14),
    color: '#339966',
  },
];

function App() {
  const view = React.useMemo(() => {
    return {
      calendar: { labels: true },
    };
  }, []);

  return <Eventcalendar data={myData} view={view} dragToCreate={true} dragToMove={true} dragToResize={true} dragTimeStep={15} />;
}

ReactDOM.render(<App />, document.getElementById('content'));
