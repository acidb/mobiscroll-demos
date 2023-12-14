import React from 'react';
import {
  Eventcalendar,
  getJson,
  setOptions,
  CalendarNav,
  Button,
  CalendarToday,
  SegmentedGroup,
  SegmentedItem /* localeImport */,
} from '@mobiscroll/react';
import './customizing-header.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const cal = React.useRef();
  const [view, setView] = React.useState('agenda');
  const [myEvents, setEvents] = React.useState([]);
  const [currentDate, setCurrentDate] = React.useState(new Date());

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const [calView, setCalView] = React.useState({
    agenda: { type: 'month' },
  });

  const changeView = (event) => {
    let view;
    switch (event.target.value) {
      case 'calendar':
        view = {
          calendar: { labels: true },
        };
        break;
      case 'agenda':
        view = {
          agenda: { type: 'month' },
        };
        break;
    }

    setView(event.target.value);
    setCalView(view);
  };

  const onSelectedDateChange = React.useCallback((event, inst) => {
    setCurrentDate(event.date);
  }, []);

  const navigateToPrevPage = () => {
    const prevPage = new Date(currentDate);

    prevPage.setDate(1);
    prevPage.setMonth(prevPage.getMonth() - 1);
    setCurrentDate(prevPage);
  };

  const navigateToNextPage = () => {
    const nextPage = new Date(currentDate);

    nextPage.setDate(1);
    nextPage.setMonth(nextPage.getMonth() + 1);
    setCurrentDate(nextPage);
  };

  const customWithNavButtons = () => {
    return (
      <React.Fragment>
        <CalendarNav className="md-custom-header-nav" />
        <div className="md-custom-header-controls">
          <Button onClick={navigateToPrevPage} icon="material-arrow-back" variant="flat" className="md-custom-header-button"></Button>
          <CalendarToday className="md-custom-header-today" />
          <Button onClick={navigateToNextPage} icon="material-arrow-forward" variant="flat" className="md-custom-header-button"></Button>
        </div>
        <div className="md-custom-header-view">
          <SegmentedGroup value={view} onChange={changeView}>
            <SegmentedItem value="agenda" icon="material-view-day" />
            <SegmentedItem value="calendar" icon="calendar" />
          </SegmentedGroup>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="md-custom-header">
      <Eventcalendar
        onSelectedDateChange={onSelectedDateChange}
        selectedDate={currentDate}
        renderHeader={customWithNavButtons}
        view={calView}
        data={myEvents}
      />
    </div>
  );
}

export default App;
