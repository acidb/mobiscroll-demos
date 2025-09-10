import {
  dragulaDraggable,
  Eventcalendar,
  getJson,
  Page,
  setOptions,
  sortableJsDraggable,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import dragula from 'dragula';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Sortable from 'sortablejs';

import 'dragula/dist/dragula.css';
import './external-drap-drop-sortable-dragula.css';

setOptions({
  // localeJs,
  // themeJs
});

const sortableItems = [
  { background: '#d1891f', id: 1, title: 'Task 1', start: 'dyndatetime(y,m,d,8)', end: 'dyndatetime(y,m,d,9,30)', duration: 1.5 },
  { background: '#1ca11a', id: 2, title: 'Task 2', start: 'dyndatetime(y,m,d,12)', end: 'dyndatetime(y,m,d,15)', duration: 3 },
  { background: '#cb3939', id: 3, title: 'Task 3', start: 'dyndatetime(y,m,d,8,30)', end: 'dyndatetime(y,m,d,11)', duration: 2.5 },
  { background: '#a446b5', id: 4, title: 'Task 4', start: 'dyndatetime(y,m,d,16)', end: 'dyndatetime(y,m,d,17)', duration: 1 },
];

const dragulaItems = [
  { background: '#d1891f', id: 5, title: 'Task 5', start: 'dyndatetime(y,m,d,8)', end: 'dyndatetime(y,m,d,9,30)', duration: 1.5 },
  { background: '#1ca11a', id: 6, title: 'Task 6', start: 'dyndatetime(y,m,d,12)', end: 'dyndatetime(y,m,d,15)', duration: 3 },
  { background: '#cb3939', id: 7, title: 'Task 7', start: 'dyndatetime(y,m,d,8,30)', end: 'dyndatetime(y,m,d,11)', duration: 2.5 },
  { background: '#a446b5', id: 8, title: 'Task 8', start: 'dyndatetime(y,m,d,16)', end: 'dyndatetime(y,m,d,17)', duration: 1 },
];

function App() {
  const [myEvents, setEvents] = useState([]);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastText, setToastText] = useState();

  const myView = useMemo(
    () => ({
      schedule: {
        type: 'week',
      },
    }),
    [],
  );

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handleEventCreate = useCallback((args) => {
    setToastText(args.event.title + ' added');
    setToastOpen(true);
  }, []);

  useEffect(() => {
    const sortableList = document.getElementById('sortable-list');
    const sortableInstance = new Sortable(sortableList, {
      animation: 150,
      forceFallback: true,
    });
    sortableJsDraggable.init(sortableInstance, {
      cloneSelector: '.sortable-drag',
    });
    const dragulaList = document.getElementById('dragula-list');
    const drake = dragula([dragulaList]);
    dragulaDraggable.init(drake);
    getJson(
      'https://trial.mobiscroll.com/drag-drop-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
    return () => {
      drake.destroy();
      sortableInstance.destroy();
    };
  }, []);

  return (
    <Page>
      <div className="mbsc-grid mbsc-no-padding">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-9 mds-external-third-party-drop-calendar">
            <Eventcalendar
              // drag
              data={myEvents}
              externalDrop={true}
              onEventCreate={handleEventCreate}
              view={myView}
            />
          </div>
          <div className="mbsc-col-sm-3">
            <div className="mbsc-form-group-title">SortableJS tasks</div>
            <div className="mds-external-third-party-drag-container" id="sortable-list">
              {sortableItems.map((i) => (
                <div
                  key={i.id}
                  className="mds-external-third-party-task"
                  style={{ background: i.background }}
                  data-drag-data={`{"title": "${i.title}", "start": "${i.start}", "end": "${i.end}"}`}
                >
                  <div>{i.title}</div>
                  <div>{i.duration} hours</div>
                </div>
              ))}
            </div>
            <div className="mbsc-form-group-title">Dragula tasks</div>
            <div className="mds-external-third-party-drag-container" id="dragula-list">
              {dragulaItems.map((i) => (
                <div
                  key={i.id}
                  className="mds-external-third-party-task"
                  style={{ background: i.background }}
                  data-drag-data={`{"title": "${i.title}", "start": "${i.start}", "end": "${i.end}"}`}
                >
                  <div>{i.title}</div>
                  <div>{i.duration} hours</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Toast message={toastText} isOpen={isToastOpen} onClose={handleCloseToast} />
    </Page>
  );
}

export default App;
