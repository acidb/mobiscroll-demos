import React from 'react';
//<demo-only>import { Eventcalendar, setOptions, CalendarNav, SegmentedGroup, SegmentedItem, CalendarPrev, CalendarToday, CalendarNext/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const setOptions = mobiscroll.setOptions;
const CalendarNav = mobiscroll.CalendarNav;
const SegmentedGroup = mobiscroll.SegmentedGroup;
const SegmentedItem = mobiscroll.SegmentedItem;
const CalendarPrev = mobiscroll.CalendarPrev;
const CalendarToday = mobiscroll.CalendarToday;
const CalendarNext = mobiscroll.CalendarNext; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [view, setView] = React.useState('month');

  const [calView, setCalView] = React.useState({
    timeline: {
      type: 'month',
      eventList: true,
    },
  });

  const myEvents = React.useMemo(() => {
    return [
      {
        start: 'dyndatetime(y,m,d-1,8)',
        end: 'dyndatetime(y,m,d-1,15)',
        title: 'Event 1',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d-1,10)',
        end: 'dyndatetime(y,m,d-1,13)',
        title: 'Event 2',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,14)',
        title: 'Event 3',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d-2,9)',
        end: 'dyndatetime(y,m,d-2,15)',
        title: 'Event 4',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d+1,7)',
        end: 'dyndatetime(y,m,d+1,12)',
        title: 'Event 5',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d+2,11)',
        end: 'dyndatetime(y,m,d+2,16)',
        title: 'Event 6',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d-3,8)',
        end: 'dyndatetime(y,m,d-3,20)',
        title: 'Event 7',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,15)',
        title: 'Event 8',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,19)',
        title: 'Event 9',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d+1,12)',
        end: 'dyndatetime(y,m,d+1,20)',
        title: 'Event 10',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d+2,18)',
        end: 'dyndatetime(y,m,d+2,22)',
        title: 'Event 11',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d-4,10)',
        end: 'dyndatetime(y,m,d-4,16)',
        title: 'Event 12',
        resource: 6,
      },
      {
        start: 'dyndatetime(y,m,d-3,15)',
        end: 'dyndatetime(y,m,d-3,20)',
        title: 'Event 13',
        resource: 6,
      },
    ];
  });

  const myResources = React.useMemo(() => {
    return [
      {
        id: 1,
        name: 'Resource A',
        color: '#e20000',
      },
      {
        id: 2,
        name: 'Resource B',
        color: '#60e81a',
      },
      {
        id: 3,
        name: 'Resource C',
        color: '#3ba7ff',
      },
      {
        id: 4,
        name: 'Resource D',
        color: '#e25dd2',
      },
      {
        id: 5,
        name: 'Resource E',
        color: '#f1e920',
      },
      {
        id: 6,
        name: 'Resource F',
        color: '#1ac38d',
      },
    ];
  }, []);

  const changeView = (event) => {
    let calView;

    switch (event.target.value) {
      case 'workweek':
        calView = {
          timeline: {
            type: 'week',
            eventList: true,
            startDay: 1,
            endDay: 5,
          },
        };
        break;
      case 'week':
        calView = {
          timeline: {
            type: 'week',
            eventList: true,
          },
        };
        break;
      case 'month':
      default:
        calView = {
          timeline: {
            type: 'month',
            eventList: true,
          },
        };
        break;
    }

    setView(event.target.value);
    setCalView(calView);
  };

  const renderMyHeader = () => {
    return (
      <React.Fragment>
        <CalendarNav className="md-event-listing-nav" />
        <div className="md-event-listing-picker">
          <SegmentedGroup value={view} onChange={changeView}>
            <SegmentedItem value="workweek">Work week</SegmentedItem>
            <SegmentedItem value="week">Week</SegmentedItem>
            <SegmentedItem value="month">Month</SegmentedItem>
          </SegmentedGroup>
        </div>
        <CalendarPrev className="md-event-listing-prev" />
        <CalendarToday className="md-event-listing-today" />
        <CalendarNext className="md-event-listing-next" />
      </React.Fragment>
    );
  };

  return (
    <Eventcalendar
      // theme
      // locale
      view={calView}
      data={myEvents}
      resources={myResources}
      renderHeader={renderMyHeader}
      cssClass="md-event-listing"
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
