import React from 'react';
//<demo-only>import { Eventcalendar, Page, Popup, Input, CalendarNav, CalendarPrev, CalendarNext, CalendarToday, getJson, formatDate, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const Page = mobiscroll.Page;
const getJson = mobiscroll.getJson;
const Popup = mobiscroll.Popup;
const Input = mobiscroll.Input;
const CalendarNav = mobiscroll.CalendarNav;
const CalendarToday = mobiscroll.CalendarToday;
const CalendarPrev = mobiscroll.CalendarPrev;
const CalendarNext = mobiscroll.CalendarNext;
const setOptions = mobiscroll.setOptions;
const formatDate = mobiscroll.formatDate; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [calEvents, setCalEvents] = React.useState([]);
  const [listEvents, setListEvents] = React.useState([]);
  const [mySelectedEvent, setSelectedEvent] = React.useState([]);
  const [isOpen, setOpen] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [searchInput, setSearchInput] = React.useState(null);
  const inputRef = React.useRef();
  const timerRef = React.useRef(null);

  const calView = React.useMemo(() => {
    return {
      agenda: {
        type: 'month',
      },
    };
  }, []);

  const listView = React.useMemo(() => {
    return {
      agenda: {
        type: 'year',
        size: 5,
      },
    };
  }, []);

  const onSearch = React.useCallback((ev) => {
    const text = ev.target.value;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (text.length > 0) {
        getJson(
          'https://trial.mobiscroll.com/searchevents/?text=' + text,
          (data) => {
            setListEvents(data);
            setOpen(true);
          },
          'jsonp',
        );
      } else {
        setOpen(false);
      }
    }, 200);
  }, []);

  const onFocus = React.useCallback((ev) => {
    if (ev.target.value.length > 0) {
      setOpen(true);
    }
  }, []);

  const myHeader = () => {
    return (
      <React.Fragment>
        <CalendarNav />
        <div className="md-seach-header-bar mbsc-flex-1-0">
          <Input
            startIcon="material-search"
            ref={inputRef}
            onChange={onSearch}
            onFocus={onFocus}
            inputStyle="box"
            placeholder="Search events"
          />
        </div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </React.Fragment>
    );
  };

  const onPageLoading = React.useCallback((args) => {
    const start = formatDate('YYYY-MM-DD', args.viewStart);
    const end = formatDate('YYYY-MM-DD', args.viewEnd);

    setTimeout(() => {
      getJson(
        'https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end,
        (data) => {
          setCalEvents(data);
        },
        'jsonp',
      );
    });
  }, []);

  const popupInit = React.useCallback(() => {
    setSearchInput(inputRef.current.nativeElement);
  }, []);

  const popupClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  const eventClick = React.useCallback((args) => {
    setCurrentDate(args.event.start);
    setSelectedEvent([args.event]);
    setOpen(false);
  }, []);

  return (
    <Page>
      <Eventcalendar
        className="md-search-events"
        selectMultipleEvents={true}
        view={calView}
        data={calEvents}
        selectedEvents={mySelectedEvent}
        selectedDate={currentDate}
        renderHeader={myHeader}
        onPageLoading={onPageLoading}
      />
      <Popup
        className="md-search-popup"
        display="anchored"
        showArrow={false}
        showOverlay={false}
        scrollLock={false}
        contentPadding={false}
        focusOnOpen={false}
        focusOnClose={false}
        anchor={searchInput}
        focusElm={searchInput}
        isOpen={isOpen}
        onInit={popupInit}
        onClose={popupClose}
      >
        <Eventcalendar className="mbsc-popover-list" view={listView} data={listEvents} showControls={false} onEventClick={eventClick} />
      </Popup>
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
