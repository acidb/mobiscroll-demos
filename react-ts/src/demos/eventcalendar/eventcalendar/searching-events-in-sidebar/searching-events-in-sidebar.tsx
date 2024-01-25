import {
  Eventcalendar,
  Page,
  Input,
  getJson,
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendarView,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import React from 'react';
import './searching-events-in-sidebar.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [calEvents, setCalEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [listEvents, setListEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [mySelectedEvent, setSelectedEvent] = React.useState<MbscCalendarEvent[]>([]);
  const [showList, setShowList] = React.useState<boolean>(false);
  const [currentDate, setCurrentDate] = React.useState<any>(new Date());
  const timerRef = React.useRef<any>(null);

  const calView = React.useMemo<MbscEventcalendarView>(
    () => ({
      calendar: {
        labels: true,
      },
    }),
    [],
  );

  const listView = React.useMemo<MbscEventcalendarView>(
    () => ({
      agenda: {
        type: 'year',
        size: 5,
      },
    }),
    [],
  );

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
            setShowList(true);
          },
          'jsonp',
        );
      } else {
        setShowList(false);
      }
    }, 200);
  }, []);

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

  const eventClick = React.useCallback((args: any) => {
    setCurrentDate(args.event.start);
    setSelectedEvent([args.event]);
  }, []);

  return (
    <Page>
      <div className="md-search-events-sidebar mbsc-flex">
        <div className="md-search-events-cont mbsc-flex-col mbsc-flex-none">
          <Input startIcon="material-search" onChange={onSearch} inputStyle="outline" placeholder="Search events" />
          {showList && <Eventcalendar view={listView} data={listEvents} showControls={false} onEventClick={eventClick} />}
        </div>
        <div className="md-search-events-calendar mbsc-flex-1-1">
          <Eventcalendar
            clickToCreate={false}
            dragToCreate={false}
            dragToMove={false}
            dragToResize={false}
            selectMultipleEvents={true}
            view={calView}
            data={calEvents}
            selectedEvents={mySelectedEvent}
            selectedDate={currentDate}
            onPageLoading={onPageLoading}
          />
        </div>
      </div>
    </Page>
  );
};

export default App;
