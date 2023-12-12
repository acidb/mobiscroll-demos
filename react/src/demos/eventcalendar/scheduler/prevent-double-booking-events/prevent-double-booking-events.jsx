import React from 'react';
//<demo-only>import { Eventcalendar, Toast, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const Toast = mobiscroll.Toast;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();
const y = now.getFullYear();
const m = now.getMonth();
const d = now.getDate();

function App() {
  const [isToastOpen, setToastOpen] = React.useState(false);
  const [myEvents, setEvents] = React.useState([
    {
      start: new Date(y, m, d, 11),
      end: new Date(y, m, d, 13),
      title: 'Event 1',
      resource: 1,
    },
    {
      start: new Date(y, m, d, 16),
      end: new Date(y, m, d, 17),
      title: 'Event 2 (no event overlap)',
      overlap: false,
      resource: 1,
    },
    {
      start: new Date(y, m, d, 14),
      end: new Date(y, m, d, 16),
      title: 'Event 3',
      resource: 2,
    },
    {
      start: new Date(y, m, d, 8),
      end: new Date(y, m, d, 10),
      title: 'Event 4 (no event overlap)',
      resource: 2,
      overlap: false,
    },
    {
      start: new Date(y, m, d, 10),
      end: new Date(y, m, d, 13),
      title: 'Event 5',
      resource: 3,
    },
    {
      start: new Date(y, m, d, 11),
      end: new Date(y, m, d, 16),
      title: 'Event 6',
      resource: 4,
    },
  ]);

  const myResources = React.useMemo(
    () => [
      {
        id: 1,
        name: 'Resource 1',
      },
      {
        id: 2,
        name: 'Resource 2',
      },
      {
        id: 3,
        name: 'Resource 3',
      },
      {
        id: 4,
        name: 'Resource 4 - no event overlap allowed',
        eventOverlap: false,
      },
    ],
    [],
  );

  const myView = React.useMemo(() => {
    return {
      schedule: { type: 'day' },
    };
  }, []);

  const onEventFailed = React.useCallback(() => {
    setToastOpen(true);
  }, []);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <div>
      <Eventcalendar
        data={myEvents}
        resources={myResources}
        view={myView}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        clickToCreate={true}
        eventOverlap={true}
        onEventUpdateFailed={onEventFailed}
        onEventCreateFailed={onEventFailed}
      />
      <Toast message="Make sure not to double book" isOpen={isToastOpen} onClose={closeToast} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
