import React from 'react';
import { Eventcalendar, Page, Toast, MbscCalendarEvent, MbscEventcalendarView, Button /* localeImport */ } from '@mobiscroll/react';

const now = new Date();

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([
    {
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
      title: 'General orientation',
      color: '#35bb5a',
    },
  ]);
  const [selectedDate, setSelectedDate] = React.useState<Date>();
  const [isToastOpen, setToastOpen] = React.useState<boolean>(false);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  const view = React.useMemo<MbscEventcalendarView>(() => {
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
    <Page>
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
    </Page>
  );
};
export default App;
