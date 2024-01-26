import {
  Eventcalendar,
  getJson,
  Toast,
  MbscCalendarEvent,
  MbscEventcalendarView,
  setOptions,
  CalendarNav,
  SegmentedGroup,
  SegmentedItem,
  CalendarPrev,
  CalendarNext /* localeImport */,
} from '@mobiscroll/react';
import React from 'react';
import './resource-filtering-in-header.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [selected, setSelected] = React.useState<any>({ 1: true });
  const [events, setEvents] = React.useState<any>([]);
  const [filteredEvents, setFilteredEvents] = React.useState<any>([]);
  const [view, setView] = React.useState<string>('month');
  const [isToastOpen, setToastOpen] = React.useState<boolean>(false);
  const [toastText, setToastText] = React.useState<string>();

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const handleCloseToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  const [calView, setCalView] = React.useState<MbscEventcalendarView>({
    schedule: { type: 'week' },
  });

  const filterEvents = (events: any, selected: any) => {
    const ev = [];
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

  const filter = (ev: any) => {
    const value = ev.target.value;
    const checked = ev.target.checked;

    selected[value] = checked;

    setSelected(selected);

    filterEvents(events, selected);

    setToastText((checked ? 'Showing ' : 'Hiding ') + document.querySelector('.md-header-filter-name-' + value).textContent + ' events');
    setToastOpen(true);
  };

  const customWithNavButtons = () => (
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

  return (
    <>
      <div>
        <Eventcalendar
          // drag
          renderHeader={customWithNavButtons}
          view={calView}
          data={filteredEvents}
          cssClass="md-custom-header-filtering"
        />
        <Toast message={toastText} isOpen={isToastOpen} onClose={handleCloseToast} />
      </div>
    </>
  );
};
export default App;
