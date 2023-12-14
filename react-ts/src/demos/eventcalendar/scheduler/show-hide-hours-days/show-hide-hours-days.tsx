import React from 'react';
import { Eventcalendar, getJson, MbscCalendarEvent, MbscEventcalendarView, toast/* localeImport */ } from '@mobiscroll/react';

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const invalids = [{
      start: '12:00',
      end: '13:00',
      title: 'Lunch break',
      recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR'
      }
  }];

  React.useEffect(() => {
      getJson('https://trial.mobiscroll.com//workday-events/?vers=5', (events: any) => {
          setEvents(events);
      }, 'jsonp');
  }, []);
  
  const view = React.useMemo<MbscEventcalendarView>(() => {
      return {
          schedule: {
              type: 'week',
              startDay: 1,
              endDay: 5,
              startTime: '09:00',
              endTime: '18:00'
              timeCellStep: 30,
              timeLabelStep: 30
          }
      };
  }, []);
  
  return (
      <Eventcalendar
          dragToCreatse={true}
          dragToResize={true}
          dragToMove={true}
          invalid={invalids}
          data={myEvents}
          view={view}
      />
  );
};
export default App;