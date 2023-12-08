import React from 'react';
import {
  Eventcalendar,
  Draggable,
  Dropcontainer,
  setOptions,
  getJson,
  toast,
  MbscEventcalendarView,
  MbscCalendarEvent /* localeImport */,
} from '@mobiscroll/react';
import './external-drag-drop-schedule-unschedule.css';

setOptions({
  // localeJs,
  // themeJs
});

function Task(props: any) {
  const [draggable, setDraggable] = React.useState<any>();

  const setDragElm = React.useCallback((elm) => {
    setDraggable(elm);
  }, []);

  const event = props.data;
  const eventLength = Math.abs(new Date(event.end).getTime() - new Date(event.start).getTime()) / (60 * 60 * 1000);

  return (
    <div>
      {!event.hide && (
        <div ref={setDragElm} className="external-drop-task" style={{ background: event.color }}>
          <div>{event.title}</div>
          <div>{eventLength + ' hour' + (eventLength > 1 ? 's' : '')}</div>
          <Draggable dragData={event} element={draggable} />
        </div>
      )}
    </div>
  );
}

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);

  const [myTasks, setTasks] = React.useState<MbscCalendarEvent[]>([
    {
      id: 1,
      title: 'Product team meeting',
      color: '#cf4343',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
    },
    {
      id: 2,
      title: 'General orientation',
      color: '#e49516',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,10)',
    },
    {
      id: 3,
      title: 'Client Training',
      color: '#8c429f',
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,14)',
    },
    {
      id: 4,
      title: 'CEO Conference',
      color: '#63b548',
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,18)',
    },
  ]);

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      schedule: { type: 'week' },
    };
  }, []);

  const [dropCont, setDropCont] = React.useState<any>();
  const setDropElm = React.useCallback((elm: any) => {
    setDropCont(elm);
  }, []);

  const onEventCreate = React.useCallback(
    (args: any) => {
      setTasks(myTasks.filter((item) => item.id !== args.event.id));

      toast({
        message: args.event.title + ' added',
      });
    },
    [myTasks],
  );

  const onEventDelete = React.useCallback((args: any) => {
    toast({
      message: args.event.title + ' unscheduled',
    });
  }, []);

  const onItemDrop = React.useCallback(
    (args: any) => {
      if (args.data) {
        setTasks([...myTasks, args.data]);
      }
    },
    [myTasks],
  );

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/drag-drop-events/5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <div className="mbsc-grid mbsc-no-padding">
      <div className="mbsc-row">
        <div className="mbsc-col-sm-9 external-drop-calendar">
          <Eventcalendar
            data={myEvents}
            view={view}
            dragToMove={true}
            dragToCreate={true}
            externalDrop={true}
            externalDrag={true}
            onEventCreate={onEventCreate}
            onEventDelete={onEventDelete}
          />
        </div>
        <div className="mbsc-col-sm-3 external-drop-cont" ref={setDropElm}>
          <Dropcontainer onItemDrop={onItemDrop} element={dropCont}>
            <div className="mbsc-form-group-title">Available tasks</div>
            {myTasks.map((task) => (
              <Task key={task.id} data={task} />
            ))}
          </Dropcontainer>
        </div>
      </div>
    </div>
  );
};
