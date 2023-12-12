import React from 'react';
//<demo-only>import { Eventcalendar, Toast, Button/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const Toast = mobiscroll.Toast;
const Button = mobiscroll.Button; //</extra>

const now = new Date();

function App() {
  const [myEvents, setEvents] = React.useState([
    {
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
      title: 'General orientation',
      color: '#35bb5a',
    },
  ]);

  const [selectedDate, setSelectedDate] = React.useState();
  const [isToastOpen, setToastOpen] = React.useState(false);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  const view = React.useMemo(() => {
    return {
      agenda: {
        type: 'month',
      },
    };
  }, []);

  const addEvent = () => {
    const newEvent = {
      // base properties
      title: 'Product planning',
      color: '#56ca70',
      start: new Date(2018, 11, 21, 13),
      end: new Date(2018, 11, 21, 14),
      // add any property you'd like
      busy: true,
      description: 'Weekly meeting with team',
      location: 'Office',
    };

    setSelectedDate(new Date(2018, 11, 21));
    setEvents([...myEvents, newEvent]);
    setToastOpen(true);
  };

  return (
    <div>
      <Eventcalendar
        // theme
        // locale
        data={myEvents}
        view={view}
        selectedDate={selectedDate}
      />
      <div className="mbsc-button-group-block">
        <Button onClick={addEvent}>Add event to calendar</Button>
      </div>
      <Toast message="Event added" isOpen={isToastOpen} onClose={closeToast} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
