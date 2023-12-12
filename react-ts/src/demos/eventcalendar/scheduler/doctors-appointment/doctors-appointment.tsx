import React from 'react';
import {
  Draggable,
  Dropcontainer,
  Eventcalendar,
  MbscCalendarColor,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreateEvent,
  MbscEventCreatedEvent,
  MbscEventCreateFailedEvent,
  MbscEventDeleteEvent,
  MbscEventUpdateFailedEvent,
  MbscItemDragEvent,
  MbscResource,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import './doctors-appointment.css';
setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();
const today = new Date(now.setMinutes(59));
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

const Appointment: React.FC<{ data: MbscCalendarEvent }> = (props) => {
  const [draggable, setDraggable] = React.useState<HTMLElement | null>();

  const setDragElm = React.useCallback((elm: HTMLElement | null) => {
    setDraggable(elm);
  }, []);

  const event = props.data;
  const eventLength = Math.abs(new Date(event.end as string).getTime() - new Date(event.start as string).getTime()) / (60 * 60 * 1000);

  return (
    <div>
      {!event.hide && (
        <div ref={setDragElm} className="docs-appointment-task" style={{ background: event.color }}>
          <div>{event.title}</div>
          <div>{eventLength + ' hour' + (eventLength > 1 ? 's' : '')}</div>
          <Draggable dragData={event} element={draggable} />
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const doctors = React.useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Dr. Keila Delores',
      },
      {
        id: 2,
        name: 'Dr. Gene Cortez',
      },
      {
        id: 3,
        name: 'Dr. Paula Bush',
      },
      {
        id: 4,
        name: 'Dr. Pete Nichols',
      },
      {
        id: 5,
        name: 'Dr. Jean Pearson',
      },
      {
        id: 6,
        name: 'Dr. Thelma Cain',
      },
    ],
    [],
  );

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      schedule: {
        type: 'day',
        startTime: '08:00',
        endTime: '20:00',
        allDay: false,
      },
    };
  }, []);

  const myInvalid = React.useMemo(
    () => [
      {
        recurring: {
          repeat: 'daily',
          until: yesterday,
        },
      },
      {
        start: yesterday,
        end: today,
      },
    ],
    [],
  );

  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([
    {
      id: 'job1',
      start: 'dyndatetime(y,m,d,14)',
      end: 'dyndatetime(y,m,d,16)',
      resource: 1,
      title: 'Myla Bennett',
      job: 'Wisdom tooth removal',
      color: '#334ab9',
    },
    {
      id: 'job2',
      start: 'dyndatetime(y,m,d,17)',
      end: 'dyndatetime(y,m,d,18,30)',
      resource: 1,
      title: 'Beatrix Foley',
      job: 'Braces',
      color: '#177e70',
    },
    {
      id: 'job3',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
      resource: 3,
      title: 'Frank Watson',
      job: 'Teeth whitening',
      color: '#d1891f',
    },
    {
      id: 'job4',
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,12,30)',
      resource: 3,
      title: 'Jaime Joyce',
      job: 'Root canal treatment',
      color: '#cb3939',
    },
    {
      id: 'job5',
      start: 'dyndatetime(y,m,d,13)',
      end: 'dyndatetime(y,m,d,14)',
      resource: 3,
      title: 'Corey Shepard',
      job: 'Tooth extraction',
      color: '#aba343',
    },
    {
      id: 'job6',
      start: 'dyndatetime(y,m,d,14)',
      end: 'dyndatetime(y,m,d,16)',
      resource: 4,
      title: 'Callie Leonard',
      job: 'Crown and bridge',
      color: '#1ca11a',
    },
    {
      id: 'job7',
      start: 'dyndatetime(y,m,d,17)',
      end: 'dyndatetime(y,m,d,18)',
      resource: 4,
      title: 'Harley Thomson',
      job: 'Tartar removal',
      color: '#a446b5',
    },
    {
      id: 'job8',
      start: 'dyndatetime(y,m,d,9)',
      end: 'dyndatetime(y,m,d,11)',
      resource: 6,
      title: 'Ricky Welch',
      job: 'Wisdom tooth removal',
      color: '#334ab9',
    },
  ]);

  const [appointments, setAppointments] = React.useState<MbscCalendarEvent[]>([
    {
      id: 'd1',
      title: 'Winfred Lesley',
      job: 'Teeth whitening',
      color: '#d1891f',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
      unscheduled: true,
    },
    {
      id: 'd2',
      title: 'Rosalin Delice',
      job: 'Crown and bridge',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,10)',
      unscheduled: true,
    },
    {
      id: 'd3',
      title: 'Macy Steven',
      job: 'Root canal treatment',
      color: '#cb3939',
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,12,30)',
      unscheduled: true,
    },
    {
      id: 'd4',
      title: 'Lavern Cameron',
      job: 'Tartar removal',
      color: '#a446b5',
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,13)',
      unscheduled: true,
    },
  ]);

  const [contBg, setContBg] = React.useState('');
  const [myColors, setColors] = React.useState<MbscCalendarColor[]>([]);
  const [dropCont, setDropCont] = React.useState<HTMLElement | null>();
  const [toastMessage, setToastMessage] = React.useState('');
  const [isToastOpen, setToastOpen] = React.useState(false);

  const setDropElm = React.useCallback((elm: HTMLElement | null) => {
    setDropCont(elm);
  }, []);

  const onEventCreate = React.useCallback((args: MbscEventCreateEvent) => {
    const event = args.event;
    event.unscheduled = false;
    setColors([]);
  }, []);

  const onEventCreated = React.useCallback((args: MbscEventCreatedEvent) => {
    setToastMessage(args.event.title + ' added');
    setToastOpen(true);
    setEvents((prevEvents) => [...prevEvents, args.event]);
    setAppointments((prevAppointments) => prevAppointments.filter((item) => item.id !== args.event.id));
  }, []);

  const handleFailed = React.useCallback((event: MbscCalendarEvent) => {
    if (event.start! <= today) {
      setToastMessage("Can't add event in the past");
    } else {
      setToastMessage('Make sure not to double book');
    }
    setToastOpen(true);
  }, []);

  const onEventCreateFailed = React.useCallback(
    (args: MbscEventCreateFailedEvent) => {
      handleFailed(args.event);
    },
    [handleFailed],
  );

  const onEventUpdateFailed = React.useCallback(
    (args: MbscEventUpdateFailedEvent) => {
      handleFailed(args.event);
    },
    [handleFailed],
  );

  const onEventDelete = React.useCallback((args: MbscEventDeleteEvent) => {
    setToastMessage(args.event.title + ' unscheduled');
    setToastOpen(true);
    setEvents((prevEvents) => prevEvents.filter((item) => item.id !== args.event.id));
  }, []);

  const onEventDragEnter = React.useCallback(() => {
    setColors([
      {
        background: '#f1fff24d',
        start: '08:00',
        end: '20:00',
        recurring: {
          repeat: 'daily',
        },
      },
    ]);
  }, []);

  const onEventDragLeave = React.useCallback(() => {
    setColors([]);
  }, []);

  const onItemDrop = React.useCallback((args: MbscItemDragEvent) => {
    if (args.data) {
      args.data.unscheduled = true;
      setAppointments((prevAppointments) => [...prevAppointments, args.data]);
    }
    setContBg('');
  }, []);

  const onItemDragEnter = React.useCallback((args: MbscItemDragEvent) => {
    if (!(args.data && args.data.unscheduled)) {
      setContBg('#d0e7d2cc');
    }
  }, []);

  const onItemDragLeave = React.useCallback(() => {
    setContBg('');
  }, []);

  const onToastClose = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  React.useEffect(() => {
    for (const event of myEvents) {
      // convert dates to date objects
      event.start = event.start ? new Date(event.start as string) : event.start;
      event.end = event.end ? new Date(event.end as string) : event.end;
      // mark past events as fixed by setting the event.editable property to false
      event.editable = !!(event.start && today < event.start);
    }
  }, [myEvents]);

  return (
    <div className="mbsc-grid mbsc-no-padding">
      <div className="mbsc-row">
        <div className="mbsc-col-sm-9 docs-appointment-calendar">
          <Eventcalendar
            data={myEvents}
            view={view}
            resources={doctors}
            invalid={myInvalid}
            dragToMove={true}
            dragToCreate={true}
            eventOverlap={false}
            externalDrop={true}
            externalDrag={true}
            colors={myColors}
            onEventCreate={onEventCreate}
            onEventCreated={onEventCreated}
            onEventCreateFailed={onEventCreateFailed}
            onEventUpdateFailed={onEventUpdateFailed}
            onEventDelete={onEventDelete}
            onEventDragEnter={onEventDragEnter}
            onEventDragLeave={onEventDragLeave}
          />
          <Toast isOpen={isToastOpen} message={toastMessage} onClose={onToastClose} />
        </div>
        <div className="mbsc-col-sm-3 docs-appointment-cont" ref={setDropElm} style={{ backgroundColor: contBg }}>
          <Dropcontainer onItemDrop={onItemDrop} onItemDragEnter={onItemDragEnter} onItemDragLeave={onItemDragLeave} element={dropCont}>
            <div className="mbsc-form-group-title">Unscheduled appointments</div>
            {appointments.map((app) => (
              <Appointment key={app.id} data={app} />
            ))}
          </Dropcontainer>
        </div>
      </div>
    </div>
  );
};
