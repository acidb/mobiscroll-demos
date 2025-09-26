import {
  dragulaDraggable,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  setOptions,
  sortableJsDraggable,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import dragula from 'dragula';
import { FC, useEffect, useMemo, useState } from 'react';
import './external-drag-drop-sortable-dragula.css';
import { useCallback } from 'react';
import Sortable from 'sortablejs';
import 'dragula/dist/dragula.css';

setOptions({
  // localeJs,
  // themeJs
});

const Task = (props: { data: MbscCalendarEvent }) => {
  const data = props.data;
  const eventLength = Math.round(
    Math.abs(new Date(data.end as string).getTime() - new Date(data.start as string).getTime()) / (60 * 60 * 1000),
  );

  return (
    <div className="mds-drag-drop-sort-task" style={{ background: data.color }} data-drag-data={JSON.stringify(data)}>
      <div>{data.title}</div>
      <div>{eventLength + ' hour' + (eventLength > 1 ? 's' : '')}</div>
    </div>
  );
};

const App: FC = () => {
  const [sortableCont, setSortableCont] = useState<HTMLDivElement | null>();
  const [dragulaCont, setDragulaCont] = useState<HTMLDivElement | null>();
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const [mySortableTasks, setSortableTasks] = useState<MbscCalendarEvent[]>([
    {
      id: 'sortable-1',
      title: 'Task 1',
      color: '#cb3939',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
    },
    {
      id: 'sortable-2',
      title: 'Task 2',
      color: '#cb3939',
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,15)',
    },
    {
      id: 'sortable-3',
      title: 'Task 3',
      color: '#cb3939',
      start: 'dyndatetime(y,m,d,8,30)',
      end: 'dyndatetime(y,m,d,11)',
    },
    {
      id: 'sortable-4',
      title: 'Task 4',
      color: '#cb3939',
      start: 'dyndatetime(y,m,d,16)',
      end: 'dyndatetime(y,m,d,17)',
    },
  ]);

  const [myDragulaTasks, setDragulaTasks] = useState<MbscCalendarEvent[]>([
    {
      id: 'dragula-1',
      title: 'Task 5',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
    },
    {
      id: 'dragula-2',
      title: 'Task 6',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,15)',
    },
    {
      id: 'dragula-3',
      title: 'Task 7',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,8,30)',
      end: 'dyndatetime(y,m,d,11)',
    },
    {
      id: 'dragula-4',
      title: 'Task 8',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,16)',
      end: 'dyndatetime(y,m,d,17)',
    },
  ]);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: { type: 'week' },
    }),
    [],
  );

  const handleEventCreated = useCallback((args: MbscEventCreatedEvent) => {
    if (args.action === 'externalDrop') {
      setSortableTasks((tasks) => tasks.filter((item) => item.id !== args.event.id));
      setDragulaTasks((tasks) => tasks.filter((item) => item.id !== args.event.id));
      setToastMessage(args.event.title + ' added');
      setToastOpen(true);
    }
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  useEffect(() => {
    if (sortableCont) {
      const sortableInstance = new Sortable(sortableCont, {
        animation: 150,
        forceFallback: true,
      });

      sortableJsDraggable.init(sortableInstance, {
        cloneSelector: '.sortable-drag',
      });
    }

    if (dragulaCont) {
      const drake = dragula([dragulaCont]);
      dragulaDraggable.init(drake);
    }
  }, [dragulaCont, sortableCont]);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/drag-drop-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <div className="mbsc-grid mbsc-no-padding mds-full-height">
      <div className="mbsc-row mds-full-height">
        <div className="mbsc-col-sm-9 mds-drag-drop-sort-calendar mds-full-height">
          <Eventcalendar
            // drag
            data={myEvents}
            externalDrop={true}
            onEventCreated={handleEventCreated}
            view={myView}
          />
        </div>
        <div className="mbsc-col-sm-3 mds-drag-drop-sort-container-wrapper mds-full-height">
          <div className="mbsc-txt-muted mds-third-party-title">SortableJS list</div>
          <div className="mds-drag-drop-sort-container" ref={setSortableCont}>
            {mySortableTasks.map((task) => (
              <Task key={task.id} data={task} />
            ))}
          </div>
          <div className="mbsc-txt-muted mds-third-party-title">Dragula list</div>
          <div className="mds-drag-drop-sort-container" ref={setDragulaCont}>
            {myDragulaTasks.map((task) => (
              <Task key={task.id} data={task} />
            ))}
          </div>
        </div>
      </div>
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleToastClose} />
    </div>
  );
};

export default App;
