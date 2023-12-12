import React from 'react';
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
import './searching-events-in-sidebar.css';
setOptions({
  // localeJs,
  // themeJs
});

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Resource 1',
    color: '#fdf500',
  },
  {
    id: 2,
    name: 'Resource 2',
    color: '#ff4600',
  },
  {
    id: 3,
    name: 'Resource 3',
    color: '#ff0101',
  },
  {
    id: 4,
    name: 'Resource 4',
    color: '#239a21',
  },
  {
    id: 5,
    name: 'Resource 5',
    color: '#8f1ed6',
  },
  {
    id: 6,
    name: 'Resource 6',
    color: '#01adff',
  },
];

const App: React.FC = () => {
  const [calEvents, setCalEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [listEvents, setListEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [mySelectedEvent, setSelectedEvent] = React.useState<MbscCalendarEvent[]>([]);
  const [showList, setShowList] = React.useState<boolean>(false);
  const [currentDate, setCurrentDate] = React.useState<any>(new Date());
  const timerRef = React.useRef<any>(null);

  const calView = React.useMemo<MbscEventcalendarView>(() => {
    return {
      timeline: {
        type: 'week',
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
          'https://trial.mobiscroll.com/searchevents-timeline/?text=' + text,
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
        'https://trial.mobiscroll.com/searchevents-timeline/?start=' + start + '&end=' + end,
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

ReactDOM.render(<App />, document.getElementById('content'));
