import React from 'react';
import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, MbscResource /* localeImport */ } from '@mobiscroll/react';
import './connecting-linking-events-arrows.css';

const App: React.FC = () => {
  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      timeline: {
        type: 'month',
        eventList: true,
      },
    };
  }, []);

  const myEvents = React.useMemo<MbscCalendarEvent[]>(() => {
    return [
      {
        id: 1,
        start: 'dyndatetime(y,m,1)',
        end: 'dyndatetime(y,m,4)',
        title: 'Event 1',
        resource: 1,
      },
      {
        id: 2,
        start: 'dyndatetime(y,m,3)',
        end: 'dyndatetime(y,m,5)',
        title: 'Event 2',
        resource: 1,
      },
      {
        id: 3,
        start: 'dyndatetime(y,m,6)',
        end: 'dyndatetime(y,m,8)',
        title: 'Event 3',
        resource: 2,
      },
      {
        id: 4,
        start: 'dyndatetime(y,m,6)',
        end: 'dyndatetime(y,m,9)',
        title: 'Event 4',
        resource: 2,
      },
      {
        id: 5,
        start: 'dyndatetime(y,m,9)',
        end: 'dyndatetime(y,m,11)',
        title: 'Event 5',
        resource: 3,
      },
      {
        id: 6,
        start: 'dyndatetime(y,m,10)',
        end: 'dyndatetime(y,m,12)',
        title: 'Event 6',
        resource: 3,
      },
      {
        id: 7,
        start: 'dyndatetime(y,m,13)',
        end: 'dyndatetime(y,m,16)',
        title: 'Event 7',
        resource: 4,
      },
      {
        id: 8,
        start: 'dyndatetime(y,m,14)',
        end: 'dyndatetime(y,m,17)',
        title: 'Event 8',
        resource: 4,
      },
      {
        id: 9,
        start: 'dyndatetime(y,m,18)',
        end: 'dyndatetime(y,m,20)',
        title: 'Event 9',
        resource: 5,
      },
      {
        id: 10,
        start: 'dyndatetime(y,m,19)',
        end: 'dyndatetime(y,m,22)',
        title: 'Event 10',
        resource: 5,
      },
      {
        id: 11,
        start: 'dyndatetime(y,m,22)',
        end: 'dyndatetime(y,m,26)',
        title: 'Event 11',
        resource: 6,
      },
      {
        id: 12,
        start: 'dyndatetime(y,m,24)',
        end: 'dyndatetime(y,m,28)',
        title: 'Event 12',
        resource: 6,
      },
    ];
  }, []);

  const myResources = React.useMemo<MbscResource[]>(() => {
    return [
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
  }, []);

  const myConnections = React.useMemo(() => {
    return [
      {
        from: 1,
        to: 2,
        color: 'green',
        arrow: 'bidirectional',
        type: 'fs',
      },
      {
        from: 2,
        to: 3,
        color: 'orange',
        arrow: 'to',
        type: 'fs',
      },
      {
        from: 3,
        to: 4,
        color: 'olive',
        arrow: 'to',
        type: 'ff',
      },
      {
        from: 4,
        to: 5,
        color: 'blue',
        arrow: 'bidirectional',
        cssClass: 'dashed-line',
        type: 'sf',
      },
      {
        from: 5,
        to: 6,
        color: 'green',
        arrow: 'to',
        type: 'ss',
      },
      {
        from: 6,
        to: 8,
        color: 'black',
        arrow: 'from',
        type: 'ff',
      },
      {
        from: 8,
        to: 11,
        color: 'purple',
        arrow: 'from',
        type: 'sf',
      },
      {
        from: 7,
        to: 10,
        color: 'green',
        arrow: 'from',
        type: 'ss',
      },
      {
        from: 9,
        to: 12,
        color: 'brown',
        arrow: 'from',
        type: 'fs',
      },
      {
        from: 10,
        to: 9,
        color: 'red',
        arrow: false,
        type: 'fs',
      },
      {
        from: 11,
        to: 12,
        color: 'orange',
        arrow: 'bidirectional',
        type: 'sf',
      },
      {
        from: 12,
        to: 14,
        color: 'pink',
        arrow: 'to',
        type: 'fs',
      },
    ];
  }, []);

  return (
    <Eventcalendar
      // theme
      // locale
      view={view}
      data={myEvents}
      resources={myResources}
      connections={myConnections}
    />
  );
};

ReactDOM.render(<App />, document.getElementById('content'));
