import React from 'react';
import { Eventcalendar, Toast, setOptions /* localeImport */ } from '@mobiscroll/react';

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
      start: new Date(y, m, d - 3),
      end: new Date(y, m, d - 1),
      title: 'Event 1',
    },
    {
      start: new Date(y, m, d),
      end: new Date(y, m, d + 2),
      title: 'Event 2 (no event overlap)',
      overlap: false,
    },
    {
      start: new Date(y, m, d + 3),
      end: new Date(y, m, d + 5),
      title: 'Event 3',
    },
    {
      start: new Date(y, m, d + 5),
      end: new Date(y, m, d + 7),
      title: 'Event 4 (no event overlap)',
      overlap: false,
    },
  ]);

  const myView = React.useMemo(() => {
    return {
      calendar: { type: 'month', labels: 'all' },
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
        view={myView}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        clickToCreate={true}
        eventOverlap={false}
        onEventUpdateFailed={onEventFailed}
        onEventCreateFailed={onEventFailed}
        exclusiveEndDates={true}
      />
      <Toast message="Make sure not to double book" isOpen={isToastOpen} onClose={closeToast} />
    </div>
  );
}

export default App;
