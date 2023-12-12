import React from 'react';
//<demo-only>import { Eventcalendar, getJson, Toast, setOptions,  Button/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const getJson = mobiscroll.getJson;
const Toast = mobiscroll.Toast;
const setOptions = mobiscroll.setOptions;
const Button = mobiscroll.Button; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
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

  const view = React.useMemo(() => {
    return {
      calendar: {
        labels: false,
        popover: true,
        popoverClass: 'custom-event-popover',
      },
    };
  }, []);

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
    ev.stopPropagation();
    setToastText(getParticipant(data.participant).name + "'s event clicked");
    setToastOpen(true);
  };

  const renderEventContent = React.useCallback((data) => {
    return (
      <React.Fragment>
        <div>{data.title}</div>
        <div className="md-custom-event-cont">
          <img className="md-custom-event-img" src={getParticipant(data.original.participant).img} />
          <div className="mbsc-custom-event-name">{getParticipant(data.original.participant).name}</div>
          <Button className="md-custom-event-btn" color="primary" variant="outline" onClick={(domEvent) => add(domEvent, data.original)}>
            Add participant
          </Button>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div>
      <Eventcalendar renderEventContent={renderEventContent} data={myEvents} view={view} />
      <Toast message={toastText} isOpen={isToastOpen} onClose={closeToast} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
