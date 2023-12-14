import React from 'react';
import {
  Eventcalendar,
  getJson,
  toast,
  setOptions,
  CalendarNav,
  SegmentedGroup,
  SegmentedItem,
  CalendarPrev,
  CalendarToday,
  CalendarNext /* localeImport */,
} from '@mobiscroll/react';
import './resource-filtering-in-header.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [selected, setSelected] = React.useState({ 1: true });
  const [events, setEvents] = React.useState([]);
  const [filteredEvents, setFilteredEvents] = React.useState([]);
  const [view, setView] = React.useState('month');
  const [toastText, setToastText] = React.useState();
  const [isToastOpen, setToastOpen] = React.useState(false);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/custom-events/',
      (events) => {
        setEvents(events);
        filterEvents(events, selected);
      },
      'jsonp',
    );
  }, []);

  const filterEvents = (events, selected) => {
    let ev = [];
    for (let i = 0; i < events.length; ++i) {
      const item = events[i];
      if (selected[item.participant]) {
        if (item.participant == 1) {
          item.color = '#328e39';
        } else if (item.participant == 2) {
          item.color = '#00aabb';
        } else if (item.participant == 3) {
          item.color = '#ea72c0';
        }
        ev.push(item);
      }
    }

    setFilteredEvents(ev);
  };

  const [calView, setCalView] = React.useState({
    schedule: { type: 'week' },
  });

  const filter = (ev) => {
    const value = ev.target.value;
    const checked = ev.target.checked;

    selected[value] = checked;

    setSelected(selected);

    filterEvents(events, selected);

    setToastText((checked ? 'Showing ' : 'Hiding ') + document.querySelector('.md-header-filter-name-' + value).textContent + ' events');
    setToastOpen(true);
  };

  const customWithNavButtons = () => {
    return (
      <React.Fragment>
        <CalendarNav className="md-header-filter-nav" />
        <div className="md-header-filter-controls">
          <SegmentedGroup select="multiple">
            <SegmentedItem value={1} checked={selected[1]} onChange={filter}>
              <img className="md-header-filter-img" src="https://img.mobiscroll.com/demos/m1.png" />
              <span className="md-header-filter-name md-header-filter-name-1">Barry</span>
            </SegmentedItem>
            <SegmentedItem value={2} checked={selected[2]} onChange={filter}>
              <img className="md-header-filter-img" src="https://img.mobiscroll.com/demos/f1.png" />
              <span className="md-header-filter-name md-header-filter-name-2">Hortense</span>
            </SegmentedItem>
            <SegmentedItem value={3} checked={selected[3]} onChange={filter}>
              <img className="md-header-filter-img" src="https://img.mobiscroll.com/demos/m2.png" />
              <span className="md-header-filter-name md-header-filter-name-3">Carl</span>
            </SegmentedItem>
          </SegmentedGroup>
        </div>
        <CalendarPrev className="md-header-filter-prev" />
        <CalendarNext className="md-header-filter-next" />
      </React.Fragment>
    );
  };

  return (
    <div>
      <Eventcalendar renderHeader={customWithNavButtons} view={calView} data={filteredEvents} cssClass="md-custom-header-filtering" />
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
