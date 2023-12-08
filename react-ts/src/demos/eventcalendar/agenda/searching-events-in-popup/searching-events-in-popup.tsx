import React from 'react';
import {
  Eventcalendar,
  Page,
  Popup,
  Input,
  CalendarNav,
  CalendarPrev,
  CalendarNext,
  CalendarToday,
  MbscCalendarEvent,
  MbscEventcalendarView,
  getJson,
  formatDate,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import './searching-events-in-popup.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [calEvents, setCalEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [listEvents, setListEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [mySelectedEvent, setSelectedEvent] = React.useState<MbscCalendarEvent[]>([]);
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [currentDate, setCurrentDate] = React.useState<any>(new Date());
  const [searchInput, setSearchInput] = React.useState<any>(null);
  const inputRef = React.useRef<any>();
  const timerRef = React.useRef<any>(null);

  const calView = React.useMemo<MbscEventcalendarView>(() => {
    return {
      agenda: {
        type: 'month',
      },
    };
  }, []);

  const listView = React.useMemo<MbscEventcalendarView>(() => {
    return {
      agenda: {
        type: 'year',
        size: 5,
      },
    };
  }, []);

  const onSearch = React.useCallback((ev: any) => {
    const text = ev.target.value;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (text.length > 0) {
        getJson(
          'https://trial.mobiscroll.com/searchevents/?text=' + text,
          (data: MbscCalendarEvent[]) => {
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

  const onFocus = React.useCallback((ev: any) => {
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

  const onPageLoading = React.useCallback((args: any) => {
    const start = formatDate('YYYY-MM-DD', args.viewStart);
    const end = formatDate('YYYY-MM-DD', args.viewEnd);

    setTimeout(() => {
      getJson(
        'https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end,
        (data: MbscCalendarEvent[]) => {
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

  const eventClick = React.useCallback((args: any) => {
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
        selectedDate={currentDate}
        selectedEvents={mySelectedEvent}
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
};
