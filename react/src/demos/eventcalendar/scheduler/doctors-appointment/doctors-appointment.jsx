import React from 'react';
import { Eventcalendar, Draggable, Dropcontainer, setOptions, getJson, toast /* localeImport */ } from '@mobiscroll/react';
import './doctors-appointment.css';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();
const today = new Date(now.setMinutes(59));
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

function Appointment(props) {
  const [draggable, setDraggable] = React.useState();

  const setDragElm = React.useCallback((elm) => {
    setDraggable(elm);
  }, []);

  const event = props.data;
  const eventLength = Math.abs(new Date(event.end) - new Date(event.start)) / (60 * 60 * 1000);

  return (
    <div>
      {!event.hide && (
        <div ref={setDragElm} className="docs-appointment-task" style={{ background: event.color }}>
          <div>{event.title + ' - ' + event.job}</div>
          <div>{eventLength + ' hour' + (eventLength > 1 ? 's' : '')}</div>
          <Draggable dragData={event} element={draggable} />
        </div>
      )}
    </div>
  );
}

function App() {
  const [myEvents, setEvents] = React.useState([
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

  const doctors = [
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
      color: '#8f1ed6',
    },
    {
      id: 6,
      name: 'Dr. Thelma Cain',
    },
  ];

  const [appointments, setAppointments] = React.useState([
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

  const view = React.useMemo(() => {
    return {
      schedule: {
        type: 'day',
        startTime: '08:00',
        endTime: '20:00',
        allDay: false,
      },
    };
  }, []);

  const myInvalid = [
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
  ];

  const [contBg, setContBg] = React.useState('');
  const [myColors, setColors] = React.useState([]);
  const [dropCont, setDropCont] = React.useState();

  const hasOverlap = React.useCallback((event, inst) => {
    const events = inst.getEvents(event.start, event.end).filter((e) => e.id !== event.id && e.resource === event.resource);
    return events.length > 0;
  });

  const setDropElm = React.useCallback((elm) => {
    setDropCont(elm);
  }, []);

  const onEventCreate = React.useCallback(
    (args, inst) => {
      const event = args.event;
      event.unscheduled = false;
      setColors([]);

      if (hasOverlap(event, inst)) {
        toast({
          message: 'Make sure not to double book',
        });
        return false;
      } else if (!(today < event.start)) {
        toast({
          message: "Can't add event in the past",
        });
      } else {
        toast({
          message: args.event.title + ' added',
        });
        setAppointments(appointments.filter((item) => item.id !== event.id));
      }
    },
    [appointments],
  );

  const onEventDelete = React.useCallback((args) => {
    toast({
      message: args.event.title + ' unscheduled',
    });
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

  const onItemDrop = React.useCallback(
    (args) => {
      if (args.data) {
        args.data.unscheduled = true;
        setAppointments([...appointments, args.data]);
      }
      setContBg('');
    },
    [appointments],
  );

  const onItemDragEnter = React.useCallback((args) => {
    if (!(args.data && args.data.unscheduled)) {
      setContBg('#d0e7d2cc');
    }
  }, []);

  const onItemDragLeave = React.useCallback(() => {
    setContBg('');
  }, []);

  React.useEffect(() => {
    for (const event of myEvents) {
      // convert dates to date objects
      event.start = event.start ? new Date(event.start) : event.start;
      event.end = event.end ? new Date(event.end) : event.end;
      // mark past events as fixed by setting the event.editable property to false
      event.editable = event.start && today < event.start;
    }
  }, []);

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
            externalDrop={true}
            externalDrag={true}
            colors={myColors}
            onEventCreate={onEventCreate}
            onEventDelete={onEventDelete}
            onEventDragEnter={onEventDragEnter}
            onEventDragLeave={onEventDragLeave}
          />
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
}

ReactDOM.render(<App />, document.getElementById('content'));
