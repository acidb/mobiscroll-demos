import React from 'react';
import {
  Eventcalendar,
  getJson,
  toast,
  setOptions,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  CalendarNav,
  SegmentedGroup,
  SegmentedItem,
  CalendarPrev,
  CalendarToday,
  CalendarNext /* localeImport */,
} from '@mobiscroll/react';
import './switching-day-week-work-week-timeline.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [view, setView] = React.useState('week');
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = React.useState<boolean>(false);
  const [calView, setCalView] = React.useState<MbscEventcalendarView>({
    timeline: {
      type: 'week',
    },
  });

  const myResources = React.useMemo<MbscResource[]>(() => {
    return [
      {
        id: 1,
        name: 'Ryan',
        color: '#ff0101',
        title: 'Cloud System Engineer',
        img: 'https://img.mobiscroll.com/demos/m1.png',
      },
      {
        id: 2,
        name: 'Kate',
        color: '#239a21',
        title: 'Help Desk Specialist',
        img: 'https://img.mobiscroll.com/demos/f1.png',
      },
      {
        id: 3,
        name: 'John',
        color: '#8f1ed6',
        title: 'Application Developer',
        img: 'https://img.mobiscroll.com/demos/m2.png',
      },
      {
        id: 4,
        name: 'Mark',
        color: '#01adff',
        title: 'Network Administrator',
        img: 'https://img.mobiscroll.com/demos/m3.png',
      },
      {
        id: 5,
        name: 'Sharon',
        color: '#d8ca1a',
        title: 'Data Quality Manager',
        img: 'https://img.mobiscroll.com/demos/f2.png',
      },
    ];
  }, []);

  const myInvalids = React.useMemo(() => {
    return [
      {
        start: '00:00',
        end: '06:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
      {
        start: '20:00',
        end: '23:59',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
      {
        recurring: {
          repeat: 'weekly',
          weekDays: 'SA,SU',
        },
      },
    ];
  }, []);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const changeView = (event: any) => {
    let calView: MbscEventcalendarView;

    switch (event.target.value) {
      case 'day':
        calView = {
          timeline: { type: 'day' },
        };
        break;
      case 'workweek':
        calView = {
          timeline: {
            type: 'week',
            startDay: 1,
            endDay: 5,
          },
        };
        break;
      case 'week':
      default:
        calView = {
          timeline: {
            type: 'week',
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
        <CalendarNav className="md-work-week-nav" />
        <div className="md-work-week-picker">
          <SegmentedGroup value={view} onChange={changeView}>
            <SegmentedItem value="day">Day</SegmentedItem>
            <SegmentedItem value="workweek">Work week</SegmentedItem>
            <SegmentedItem value="week">Week</SegmentedItem>
          </SegmentedGroup>
        </div>
        <CalendarPrev className="md-work-week-prev" />
        <CalendarToday className="md-work-week-today" />
        <CalendarNext className="md-work-week-next" />
      </React.Fragment>
    );
  };

  const renderMyResource = (resource: MbscResource) => {
    return (
      <div className="md-work-week-cont">
        <div className="md-work-week-name">{resource.name}</div>
        <div className="md-work-week-title">{resource.title}</div>
        <img className="md-work-week-avatar" src={resource.img} alt="Avatar" />
      </div>
    );
  };

  const eventUpdateFail = React.useCallback(() => {
    setToastOpen(true);
  }, []);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <div>
      <Eventcalendar
        // theme
        // locale
        view={calView}
        data={myEvents}
        invalid={myInvalids}
        resources={myResources}
        renderHeader={renderMyHeader}
        renderResource={renderMyResource}
        onEventCreateFailed={eventUpdateFail}
        onEventUpdateFailed={eventUpdateFail}
        cssClass="md-switching-timeline-view-cont"
      />
      <Toast
        // theme
        message="Can't schedule outside of working hours"
        isOpen={isToastOpen}
        onClose={closeToast}
      />
    </div>
  );
};
