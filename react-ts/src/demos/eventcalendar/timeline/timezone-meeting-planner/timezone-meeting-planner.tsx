import React from 'react';
import {
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  formatDate,
  momentTimezone,
  setOptions,
  MbscResource,
  confirm,
  toast,
  CalendarNav,
  CalendarPrev,
  CalendarToday,
  CalendarNext,
} from '@mobiscroll/react';
import './timezone-meeting-planner.css';

import moment from 'moment-timezone';

momentTimezone.moment = moment;

setOptions({
  // localeJs,
  // themeJs
});

const defaultEvents = [
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'General orientation',
    color: '#1ad404',
  },
];

const App: React.FC = () => {
  const [myEvents, setMyEvents] = React.useState<MbscCalendarEvent[]>([defaultEvents]);

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      timeline: {
        type: 'week',
        timeLabelStep: 1440,
      },
    };
  }, []);

  const myResources = React.useMemo<MbscResource[]>(() => {
    return [
      {
        id: 1,
        name: 'Keila Delores',
        timezone: 'utc',
        img: 'https://img.mobiscroll.com/demos/f1.png',
        utcOffset: '(UTC)',
        organizer: true,
      },
      {
        id: 2,
        name: 'Gene Cortez',
        timezone: 'America/Chicago',
        img: 'https://img.mobiscroll.com/demos/m1.png',
        utcOffset: 'UTC - 5',
      },
      {
        id: 3,
        name: 'Paula Bush',
        timezone: 'America/New_York',
        img: 'https://img.mobiscroll.com/demos/f2.png',
        utcOffset: 'UTC - 4',
      },
      {
        id: 4,
        name: 'Pete Nichols',
        timezone: 'Europe/London',
        img: 'https://img.mobiscroll.com/demos/m2.png',
        utcOffset: 'UTC + 1',
      },
      {
        id: 5,
        name: 'Jean Pearson',
        timezone: 'Europe/Berlin',
        img: 'https://img.mobiscroll.com/demos/m3.png',
        utcOffset: 'UTC + 2',
      },
      {
        id: 6,
        name: 'Thelma Cain',
        timezone: 'Europe/Bucharest',
        img: 'https://img.mobiscroll.com/demos/f3.png',
        utcOffset: 'UTC + 3',
      },
    ];
  }, []);

  const getUtcOffset = React.useCallback((timezone) => {
    switch (timezone) {
      case 'America/Los_Angeles':
        return -7;
      case 'America/Chicago':
        return -5;
      case 'America/New_York':
        return -4;
      case 'Europe/London':
        return 1;
      case 'Europe/Berlin':
        return 2;
      case 'Europe/Bucharest':
        return 3;
      case 'Asia/Shanghai':
        return 8;
      case 'Asia/Tokyo':
        return 9;
      default:
        return 0;
    }
  }, []);

  const getProps = React.useCallback((h) => {
    if (h < 6) {
      return { color: '#ffbaba4d', invalid: true };
    } else if (h < 8) {
      return { color: '#a5ceff4d' };
    } else if (h < 18) {
      return { color: '#f7f7bb4d' };
    } else if (h < 22) {
      return { color: '#a5ceff4d' };
    } else return { color: '#ffbaba4d', invalid: true };
  }, []);

  const details = React.useMemo(() => {
    const colors: any = [];
    const invalid: any = [];

    for (var j = 0; j < myResources.length; ++j) {
      const resource = myResources[j];

      for (let i = 0; i < 24; ++i) {
        const hour = i + getUtcOffset(resource.timezone);
        const isAM = i < 12 ? hour >= 0 && hour < 12 : !(hour >= 12 && hour < 24);
        const startTime = (i < 10 ? '0' : '') + i + ':00';
        const endTime = (i < 9 ? '0' : '') + (i + 1) + ':00';
        const title = hour % 12 === 0 ? 12 : hour < 0 ? 12 + hour : hour <= 12 ? hour : hour % 12;
        const props = getProps(title + ((title === 12 && !isAM) || (title !== 12 && isAM) ? 0 : 12));

        colors.push({
          start: startTime,
          end: endTime,
          title: title + (isAM ? ' AM' : ' PM'),
          background: props.color,
          recurring: {
            repeat: 'daily',
          },
          resource: resource.id,
        });

        if (props.invalid) {
          invalid.push({
            start: startTime,
            end: endTime,
            resource: resource.id,
            recurring: {
              repeat: 'daily',
            },
          });
        }
      }
    }
    return { colors, invalid };
  }, [getProps, getUtcOffset, myResources]);

  const myScheduleEvent = React.useCallback((data) => {
    const start = data.startDate.clone();
    const end = data.endDate.clone();

    start.setTimezone(data.currentResource.timezone);
    end.setTimezone(data.currentResource.timezone);

    return (
      <div className="md-meeting-planner-cont" style={{ background: data.color }}>
        <div className="md-meeting-planner-wrapper">
          <div className="md-meeting-planner-title">{data.title}</div>
          <div className="md-meeting-planner-time">
            {formatDate('hh:mm A', start)} - {formatDate('hh:mm A', end)}
          </div>
        </div>
      </div>
    );
  }, []);

  const myHeader = () => {
    return (
      <React.Fragment>
        <CalendarNav />
        <div className="md-meeting-planner-header">
          <div className="md-meeting-planner-zone md-meeting-planner-work">working hours</div>
          <div className="md-meeting-planner-zone md-meeting-planner-flex">flex hours</div>
          <div className="md-meeting-planner-zone md-meeting-planner-off">time off</div>
          <CalendarPrev />
          <CalendarToday />
          <CalendarNext />
        </div>
      </React.Fragment>
    );
  };

  const myResource = (resource: any) => {
    return (
      <div className="md-meeting-participant-cont">
        <div className="md-meeting-participant-name">{resource.name}</div>
        <div>
          {resource.organizer && <span>Organizer </span>}
          <span className="md-meeting-participant-offset">{resource.utcOffset}</span>
        </div>
        <img className="md-meeting-participant-avatar" src={resource.img} alt="avatar" />
      </div>
    );
  };

  const myDefaultEvent = React.useCallback(() => {
    return {
      resource: [1, 2, 3, 4, 5, 6],
    };
  }, []);

  const onEventCreate = React.useCallback((args, inst) => {
    args.event.resource = [1, 2, 3, 4, 5, 6];
  }, []);

  const onEventCreated = React.useCallback(
    (args) => {
      setMyEvents([...myEvents, args.event]);
      setTimeout(() => {
        toast({
          message: 'Event created',
        });
      });
    },
    [myEvents],
  );

  const onEventUpdated = React.useCallback(
    (args) => {
      const index = myEvents.findIndex((x) => x.id === args.event.id);
      const newEventList = [...myEvents];

      newEventList.splice(index, 1, args.event);
      setMyEvents(newEventList);
      setTimeout(() => {
        toast({
          message: 'Event updated',
        });
      });
    },
    [myEvents],
  );

  const onEventDeleted = React.useCallback(
    (args) => {
      setMyEvents(myEvents.filter((item) => item.id !== args.event.id));
    },
    [myEvents],
  );

  const createUpdateEvent = React.useCallback(
    (event, isNew) => {
      confirm({
        title: 'Are you sure you want to proceed?',
        message: "It looks like someone from the team won't be able to join the meeting.",
        okText: 'Yes',
        cancelText: 'No',
        callback: function (res) {
          if (res) {
            if (isNew) {
              setMyEvents([...myEvents, event]);
            } else {
              const index = myEvents.findIndex((x) => x.id === event.id);
              const newEventList = [...myEvents];

              newEventList.splice(index, 1, event);
              setMyEvents(newEventList);
            }

            toast({
              message: isNew ? 'Event created' : 'Event updated',
            });
          }
        },
      });
    },
    [myEvents],
  );

  const onEventCreateFailed = React.useCallback(
    (args) => {
      createUpdateEvent(args.event, true);
    },
    [createUpdateEvent],
  );

  const onEventUpdateFailed = React.useCallback(
    (args) => {
      createUpdateEvent(args.event, false);
    },
    [createUpdateEvent],
  );

  return (
    <Eventcalendar
      timezonePlugin={momentTimezone}
      dataTimezone="utc"
      displayTimezone="utc"
      clickToCreate={true}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
      dragTimeStep={60}
      view={view}
      data={myEvents}
      resources={myResources}
      colors={details.colors}
      invalid={details.invalid}
      extendDefaultEvent={myDefaultEvent}
      renderScheduleEvent={myScheduleEvent}
      renderHeader={myHeader}
      renderResource={myResource}
      onEventCreate={onEventCreate}
      onEventCreated={onEventCreated}
      onEventUpdated={onEventUpdated}
      onEventDeleted={onEventDeleted}
      onEventCreateFailed={onEventCreateFailed}
      onEventUpdateFailed={onEventUpdateFailed}
    />
  );
};
