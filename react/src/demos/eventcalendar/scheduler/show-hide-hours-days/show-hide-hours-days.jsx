import React from 'react';
function App() {
  const [myEvents, setEvents] = React.useState([]);
  const invalids = [
    {
      start: '12:00',
      end: '13:00',
      title: 'Lunch break',
      recurring: {
        repeat: 'weekly',
        weekDays: 'MO,TU,WE,TH,FR',
      },
    },
  ];

  React.useEffect(() => {
    mobiscroll.util.http.getJson(
      'https://trial.mobiscroll.com//workday-events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo(() => {
    return {
      schedule: {
        type: 'week',
        startDay: 1,
        endDay: 5,
        startTime: '09:00',
        endTime: '18:00',
        timeCellStep: 30,
        timeLabelStep: 30,
      },
    };
  }, []);

  return (
    <mobiscroll.Eventcalendar
      // theme
      // locale
      invalid={invalids}
      data={myEvents}
      view={view}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
