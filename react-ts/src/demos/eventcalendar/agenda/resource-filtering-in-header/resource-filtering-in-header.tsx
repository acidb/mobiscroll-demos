import React from 'react';
import {
  Eventcalendar,
  getJson,
  Toast,
  setOptions,
  CalendarNav,
  SegmentedGroup,
  SegmentedItem,
  CalendarPrev,
  CalendarToday,
  CalendarNext,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource /* localeImport */,
} from '@mobiscroll/react';
import './resource-filtering-in-header.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [selected, setSelected] = React.useState<any>({ 1: true });
  const [events, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = React.useState<boolean>(false);
  const [toastText, setToastText] = React.useState<string>();

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  const calView = React.useMemo<MbscEventcalendarView>(() => {
    return {
      agenda: {
        type: 'month',
      },
    };
  }, []);
  const myResources = React.useMemo<MbscResource[]>(() => {
    return [
      {
        id: 1,
        name: 'Barry',
        color: '#328e39',
        img: 'https://img.mobiscroll.com/demos/m1.png',
        checked: true,
      },
      {
        id: 2,
        name: 'Hortense',
        color: '#00aabb',
        img: 'https://img.mobiscroll.com/demos/f1.png',
        checked: false,
      },
      {
        id: 3,
        name: 'Carl',
        color: '#ea72c0',
        img: 'https://img.mobiscroll.com/demos/m2.png',
        checked: false,
      },
    ];
  }, []);

  const filterEvents = React.useCallback(
    (events: MbscCalendarEvent, selected: any) => {
      let evs = [];
      for (let i = 0; i < events.length; ++i) {
        const item = events[i];
        if (selected[item.resource]) {
          evs.push(item);
        }
      }
      setFilteredEvents(evs);
    },
    [myResources],
  );

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/filter-resource-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
        filterEvents(events, selected);
      },
      'jsonp',
    );
  }, [filterEvents, selected]);

  const filter = (ev: any) => {
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
            {myResources.map((res: any) => {
              return (
                <SegmentedItem key={res.id} value={res.id} checked={selected[res.id]} onChange={filter}>
                  <img className="md-header-filter-img" src={res.img} alt={res.name} />
                  <span className={'md-header-filter-name md-header-filter-name-' + res.id}>{res.name}</span>
                </SegmentedItem>
              );
            })}
          </SegmentedGroup>
        </div>
        <CalendarPrev className="md-header-filter-prev" />
        <CalendarToday />
        <CalendarNext className="md-header-filter-next" />
      </React.Fragment>
    );
  };

  return (
    <div>
      <Eventcalendar
        renderHeader={customWithNavButtons}
        view={calView}
        resources={myResources}
        data={filteredEvents}
        cssClass="md-custom-header-filtering"
      />
      <Toast
        // theme
        message={toastText}
        isOpen={isToastOpen}
        onClose={closeToast}
      />
    </div>
  );
};
export default App;
