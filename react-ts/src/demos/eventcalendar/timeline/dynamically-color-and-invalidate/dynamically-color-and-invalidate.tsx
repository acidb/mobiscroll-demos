import React from 'react';
import { Eventcalendar, Page, Draggable, toast, setOptions /* localeImport */ } from '@mobiscroll/react';
import './dynamically-color-and-invalidate.css';
setOptions({
  // localeJs,
  // themeJs
});

const hwInvalids = [
  {
    recurring: {
      repeat: 'daily',
    },
    resource: ['res4', 'res5', 'res6'],
  },
];
const swInvalids = [
  {
    recurring: {
      repeat: 'daily',
    },
    resource: ['res1', 'res2', 'res3'],
  },
];
const hwColors = [
  {
    recurring: {
      repeat: 'daily',
    },
    resource: ['res1', 'res2', 'res3'],
    background: '#1ad4041a',
  },
];
const swColors = [
  {
    recurring: {
      repeat: 'daily',
    },
    resource: ['res4', 'res5', 'res6'],
    background: '#1ad4041a',
  },
];
const viewSettings = {
  timeline: { type: 'day' },
};
const myResources = [
  {
    id: 'hwt',
    name: 'HW Team',
    eventCreation: false,
    children: [
      {
        id: 'res1',
        name: 'Resource 1',
        color: '#0e9ea5',
      },
      {
        id: 'res2',
        name: 'Resource 2',
        color: '#0e9ea5',
      },
      {
        id: 'res3',
        name: 'Resource 3',
        color: '#0e9ea5',
      },
    ],
  },
  {
    id: 'swt',
    name: 'SW Team',
    eventCreation: false,
    children: [
      {
        id: 'res4',
        name: 'Resource 4',
        color: '#c3b726',
      },
      {
        id: 'res5',
        name: 'Resource 5',
        color: '#c3b726',
      },
      {
        id: 'res6',
        name: 'Resource 6',
        color: '#c3b726',
      },
    ],
  },
];
const myTasks = [
  {
    id: 1,
    title: 'Task 1',
    start: '08:00',
    end: '12:00',
    category: 'hw',
    color: '#0e9ea5',
  },
  {
    id: 2,
    title: 'Task 2',
    start: '08:00',
    end: '12:00',
    category: 'hw',
    color: '#0e9ea5',
  },
  {
    id: 3,
    title: 'Task 3',
    start: '08:00',
    end: '12:00',
    category: 'hw',
    color: '#0e9ea5',
  },
  {
    id: 4,
    title: 'Task 4',
    start: '08:00',
    end: '12:00',
    category: 'sw',
    color: '#c3b726',
  },
  {
    id: 5,
    title: 'Task 5',
    start: '08:00',
    end: '12:00',
    category: 'sw',
    color: '#c3b726',
  },
  {
    id: 6,
    title: 'Task 6',
    start: '08:00',
    end: '12:00',
    category: 'sw',
    color: '#c3b726',
  },
];

function Task(props) {
  const [draggable, setDraggable] = React.useState<any>();

  const setDragElm = React.useCallback((elm) => {
    setDraggable(elm);
  }, []);

  return (
    <div ref={setDragElm} className="dynamically-color-and-invalidate-task">
      <div>
        {props.data.title}
        <span className="dynamically-color-and-invalidate-task-type">{props.data.category}</span>
      </div>
      <Draggable dragData={props.data} element={draggable} />
    </div>
  );
}

const App: React.FC = () => {
  const [myInvalids, setInvalids] = React.useState<any>([]);
  const [myColors, setColors] = React.useState<any>([]);

  const extendDefaultEvent = React.useCallback((event) => {
    const res = event.resource;

    if (res) {
      if (res === 'res1' || res === 'res2' || res === 'res3') {
        return {
          category: 'hw',
        };
      } else {
        return {
          category: 'sw',
        };
      }
    }
  }, []);

  const onEventDragStart = React.useCallback((args) => {
    let event = args.event;

    if (event) {
      event = event.original || event;

      if (event.category === 'hw') {
        setInvalids(hwInvalids);
        setColors(hwColors);
      } else {
        setInvalids(swInvalids);
        setColors(swColors);
      }
    }
  }, []);

  const onEventDragEnd = React.useCallback(() => {
    setInvalids([]);
    setColors([]);
  }, []);

  const onEventCreated = React.useCallback(() => {
    console.log(toast);
    toast({
      message: 'Event created',
    });
  }, []);

  const onEventUpdated = React.useCallback((args) => {
    toast({
      message: 'Event moved',
    });
  }, []);

  const onEventCreateFailed = React.useCallback((args) => {
    toast({
      message: "Can't create event",
    });
  }, []);

  const onEventUpdateFailed = React.useCallback((args) => {
    toast({
      message: "Can't move event",
    });
  }, []);

  return (
    <Page>
      <div className="mbsc-grid mbsc-no-padding">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-3">
            <div className="mbsc-form-group-title">Available tasks</div>
            {myTasks.map((task) => (
              <Task key={task.id} data={task} />
            ))}
          </div>
          <div className="mbsc-col-sm-9 dynamically-color-and-invalidate-calendar">
            <Eventcalendar
              view={viewSettings}
              resources={myResources}
              invalid={myInvalids}
              colors={myColors}
              dragToMove={true}
              externalDrop={true}
              extendDefaultEvent={extendDefaultEvent}
              onEventDragStart={onEventDragStart}
              onEventDragEnd={onEventDragEnd}
              onEventCreated={onEventCreated}
              onEventUpdated={onEventUpdated}
              onEventCreateFailed={onEventCreateFailed}
              onEventUpdateFailed={onEventUpdateFailed}
            />
          </div>
        </div>
      </div>
    </Page>
  );
};
