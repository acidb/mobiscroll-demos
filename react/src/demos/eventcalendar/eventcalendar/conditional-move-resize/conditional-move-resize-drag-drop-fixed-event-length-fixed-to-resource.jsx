import React from 'react';
//<demo-only>import { Eventcalendar, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const myView = React.useMemo(() => {
    return {
      calendar: { type: 'month' },
    };
  }, []);

  const myEvents = React.useMemo(() => {
    return [
      {
        color: 'cyan',
        end: 'dyndatetime(y,m,d-5)',
        start: 'dyndatetime(y,m,d-6)',
        title: 'Event 1',
      },
      {
        color: 'blue',
        dragInTime: false,
        end: 'dyndatetime(y,m,d-1)',
        start: 'dyndatetime(y,m,d-4)',
        title: 'Event 2 (cannot be moved in time)',
      },
      {
        color: 'brown',
        end: 'dyndatetime(y,m,d+3)',
        start: 'dyndatetime(y,m,d)',
        resize: false,
        title: 'Event 3 (cannot be resized)',
      },
      {
        color: 'teal',
        end: 'dyndatetime(y,m,d+4)',
        start: 'dyndatetime(y,m,d+3)',
        title: 'Event 4',
      },
      {
        color: 'yellow',
        end: 'dyndatetime(y,m,d+6)',
        start: 'dyndatetime(y,m,d+5)',
        title: 'Event 5',
      },
    ];
  }, []);

  return <Eventcalendar view={myView} data={myEvents} dragToMove={true} />;
}

ReactDOM.render(<App />, document.getElementById('content'));
