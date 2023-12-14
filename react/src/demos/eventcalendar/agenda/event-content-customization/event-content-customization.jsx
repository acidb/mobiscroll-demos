import React from 'react';
import { Eventcalendar, Button, getJson, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import './event-content-customization.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [view, setView] = React.useState('month');
  const [myEvents, setEvents] = React.useState([]);
  const [isToastOpen, setToastOpen] = React.useState(false);
  const [toastText, setToastText] = React.useState();

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/custom-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  const [calView, setCalView] = React.useState({
    calendar: { type: 'week' },
    agenda: { type: 'day' },
  });

  const getParticipant = (id) => {
    switch (id) {
      case 1:
        return {
          img: 'https://img.mobiscroll.com/demos/m1.png',
          name: 'Barry L.',
        };
      case 2:
        return {
          img: 'https://img.mobiscroll.com/demos/f1.png',
          name: 'Hortense T.',
        };
      case 3:
        return {
          img: 'https://img.mobiscroll.com/demos/m2.png',
          name: 'Carl H.',
        };
    }
  };

  const add = (ev, data) => {
    setToastText(data.title + ' clicked');
    setToastOpen(true);
  };

  const renderEventContent = React.useCallback((data) => {
    return (
      <React.Fragment>
        <div>{data.title}</div>
        <div className="md-custom-event-cont">
          <img className="md-custom-event-img" src={getParticipant(data.original.participant).img} />
          <div className="mbsc-custom-event-name">{getParticipant(data.original.participant).name}</div>
          <Button className="md-custom-event-btn" color="secondary" variant="outline" onClick={(domEvent) => add(domEvent, data.original)}>
            Add participant
          </Button>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="md-switching-view-cont">
      <div className="md-switching-view-cal-cont">
        <Eventcalendar renderEventContent={renderEventContent} view={calView} data={myEvents} />
      </div>
      <Toast
        // theme
        message={toastText}
        isOpen={isToastOpen}
        onClose={closeToast}
      />
    </div>
  );
}

export default App;
