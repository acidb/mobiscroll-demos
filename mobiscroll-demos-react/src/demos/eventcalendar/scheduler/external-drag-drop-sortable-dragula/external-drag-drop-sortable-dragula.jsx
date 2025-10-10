import {
  Draggable,
  dragulaDraggable,
  Dropcontainer,
  Eventcalendar,
  getJson,
  setOptions,
  sortableJsDraggable,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import dragula from 'dragula';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import './external-drag-drop-sortable-dragula.css';
import { useCallback } from 'react';
import Sortable from 'sortablejs';
import 'dragula/dist/dragula.css';

setOptions({
  // localeJs,
  // themeJs
});

function Task({ data, isDraggable }) {
  const [draggable, setDraggable] = useState();

  const setDragElm = useCallback((elm) => {
    setDraggable(elm);
  }, []);

  const eventLength = Math.round(Math.abs(new Date(data.end).getTime() - new Date(data.start).getTime()) / (60 * 60 * 1000));

  return (
    <div
      className="mds-drag-drop-sort-task"
      ref={isDraggable && setDragElm}
      style={{ background: data.color }}
      data-drag-data={!isDraggable && JSON.stringify(data)}
    >
      <div>{data.title}</div>
      <div>{eventLength + ' hour' + (eventLength > 1 ? 's' : '')}</div>
      {isDraggable && <Draggable dragData={data} element={draggable} />}
    </div>
  );
}

Task.propTypes = {
  data: PropTypes.object.isRequired,
  isDraggable: PropTypes.bool,
};

function App() {
  const [dropCont, setDropCont] = useState();
  const [sortableCont, setSortableCont] = useState();
  const [dragulaCont, setDragulaCont] = useState();
  const [myEvents, setEvents] = useState([]);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState();

  const [myDraggableTasks, setDraggableTasks] = useState([
    {
      id: 1,
      title: 'Task 1',
      color: '#cf4343',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
    },
    {
      id: 2,
      title: 'Task 2',
      color: '#cf4343',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,10)',
    },
    {
      id: 3,
      title: 'Task 3',
      color: '#cf4343',
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,14)',
    },
    {
      id: 4,
      title: 'Task 4',
      color: '#cf4343',
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,18)',
    },
  ]);

  const [mySortableTasks, setSortableTasks] = useState([
    {
      id: 'sortable-1',
      title: 'Task 5',
      color: '#e49516',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
    },
    {
      id: 'sortable-2',
      title: 'Task 6',
      color: '#e49516',
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,15)',
    },
    {
      id: 'sortable-3',
      title: 'Task 7',
      color: '#e49516',
      start: 'dyndatetime(y,m,d,8,30)',
      end: 'dyndatetime(y,m,d,11)',
    },
    {
      id: 'sortable-4',
      title: 'Task 8',
      color: '#e49516',
      start: 'dyndatetime(y,m,d,16)',
      end: 'dyndatetime(y,m,d,17)',
    },
  ]);

  const [myDragulaTasks, setDragulaTasks] = useState([
    {
      id: 'dragula-1',
      title: 'Task 9',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
    },
    {
      id: 'dragula-2',
      title: 'Task 10',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,15)',
    },
    {
      id: 'dragula-3',
      title: 'Task 11',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,8,30)',
      end: 'dyndatetime(y,m,d,11)',
    },
    {
      id: 'dragula-4',
      title: 'Task 12',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,16)',
      end: 'dyndatetime(y,m,d,17)',
    },
  ]);

  const myView = useMemo(() => ({ schedule: { type: 'week' } }), []);

  const handleEventCreated = useCallback((args) => {
    if (args.action === 'externalDrop') {
      setDraggableTasks((tasks) => tasks.filter((item) => item.id !== args.event.id));
      setSortableTasks((tasks) => tasks.filter((item) => item.id !== args.event.id));
      setDragulaTasks((tasks) => tasks.filter((item) => item.id !== args.event.id));
      setToastMessage(args.event.title + ' added');
      setToastOpen(true);
    }
  }, []);

  const handleEventDeleted = useCallback((args) => {
    setToastMessage(args.event.title + ' unscheduled');
    setToastOpen(true);
  }, []);

  const handleItemDrop = useCallback((args) => {
    if (args.data) {
      setDraggableTasks((tasks) => [...tasks, args.data]);
    }
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  useEffect(() => {
    let sortableInstance;
    if (sortableCont) {
      sortableInstance = new Sortable(sortableCont, {
        animation: 150,
        forceFallback: true,
      });

      sortableJsDraggable.init(sortableInstance, {
        cloneSelector: '.sortable-drag',
        externalDrop: true,
        onExternalDrop: (a) => {
          const dragData = a.dragData;
          setSortableTasks((prev) => {
            const newTasks = [...prev];
            newTasks.splice(a.position, 0, dragData);
            return newTasks;
          });
        },
      });
    }

    let drake;
    if (dragulaCont) {
      drake = dragula([dragulaCont]);
      dragulaDraggable.init(drake, {
        externalDrop: true,
        onExternalDrop: (a) => {
          const dragData = a.dragData;
          setDragulaTasks((prev) => {
            const newTasks = [...prev];
            newTasks.splice(a.position, 0, dragData);
            return newTasks;
          });
        },
      });
    }

    return () => {
      if (sortableInstance) {
        sortableInstance.destroy();
      }
      if (drake) {
        drake.destroy();
      }
    };
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
            view={myView}
            externalDrop={true}
            dragToMove={true}
            dragToCreate={true}
            externalDrag={true}
            onEventCreated={handleEventCreated}
            onEventDeleted={handleEventDeleted}
          />
        </div>
        <div className="mbsc-col-sm-3 mds-drag-drop-sort-container-wrapper mds-full-height">
          <div className="mbsc-txt-muted mds-third-party-title">Mobiscroll draggable</div>
          <div className="mds-drag-drop-sort-container" ref={setDropCont}>
            <Dropcontainer onItemDrop={handleItemDrop} element={dropCont}>
              {myDraggableTasks.map((task) => (
                <Task key={task.id} data={task} isDraggable={true} />
              ))}
            </Dropcontainer>
          </div>
          <div className="mbsc-txt-muted mds-third-party-title">SortableJS list (externally sortable)</div>
          <div className="mds-drag-drop-sort-container" ref={setSortableCont}>
            {mySortableTasks.map((task) => (
              <Task key={task.id} data={task} />
            ))}
          </div>
          <div className="mbsc-txt-muted mds-third-party-title">Dragula list (externally sortable)</div>
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
}

export default App;
