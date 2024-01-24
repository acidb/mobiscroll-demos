import { Eventcalendar, Draggable, getJson, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useState, useMemo, useEffect } from 'react';
import './event-hooks.css';

setOptions({
  // localeJs,
  // themeJs
});

const dragData1 = {
  title: 'External drag 1',
  color: '#ffdab8',
};

const dragData2 = {
  title: 'External drag 2',
  color: '#ddfcf7',
};

function App() {
  const [myEvents, setEvents] = useState([]);
  const [draggable1, setDraggable1] = useState();
  const [draggable2, setDraggable2] = useState();

  const myInvalid = useMemo(
    () => [
      {
        start: '12:00',
        end: '13:00',
        title: 'Lunch break',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
    ],
    [],
  );

  const myView = useMemo(() => {
    return {
      timeline: {
        type: 'day',
      },
    };
  }, []);

  const myResources = useMemo(
    () => [
      {
        id: 1,
        name: 'Ryan',
        color: '#fdf500',
      },
      {
        id: 2,
        name: 'Kate',
        color: '#ff4600',
      },
      {
        id: 3,
        name: 'John',
        color: '#ff0101',
      },
      {
        id: 4,
        name: 'Mark',
        color: '#239a21',
      },
      {
        id: 5,
        name: 'Sharon',
        color: '#8f1ed6',
      },
      {
        id: 6,
        name: 'Ashley',
        color: '#01adff',
      },
    ],
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <>
      <div ref={setDraggable1} className="event-hooks-draggable" style={{ background: '#ffdab8' }}>
        <div className="draggable-title">External drag 1</div>
        <div className="draggable-text">Drag me to calendar</div>
        <Draggable dragData={dragData1} element={draggable1} />
      </div>
      <div ref={setDraggable2} className="event-hooks-draggable" style={{ background: '#ddfcf7' }}>
        <div className="draggable-title">External drag 2</div>
        <div className="draggable-text">Drag me to calendar</div>
        <Draggable dragData={dragData2} element={draggable2} />
      </div>
      <Eventcalendar
        data={myEvents}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        view={myView}
        resources={myResources}
        invalid={myInvalid}
        onCellClick={(event, inst) => {
          /* Logic for cell click */
        }}
        onCellDoubleClick={(event, inst) => {
          /* Logic for cell double click */
        }}
        onCellRightClick={(event, inst) => {
          /* Logic for cell right click */
        }}
        onDestroy={(event, inst) => {
          // Your custom event handler goes here
        }}
        onEventClick={(event, inst) => {
          // Logic for event click
        }}
        onEventCreate={(event, inst) => {
          // Logic for event create
        }}
        onEventCreated={(event, inst) => {
          // Logic for event created
        }}
        onEventCreateFailed={(event, inst) => {
          // Logic for failed event create
        }}
        onEventDelete={(event, inst) => {
          // Logic for event delete
        }}
        onEventDeleted={(event, inst) => {
          // Logic for event deleted
        }}
        onEventDoubleClick={(event, inst) => {
          // Logic for event double click
        }}
        onEventDragStart={(event, inst) => {
          // Logic for event drag start
        }}
        onEventDragEnd={(event, inst) => {
          // Logic for event drag end
        }}
        onEventHoverIn={(event, inst) => {
          // Logic for event hover in
        }}
        onEventHoverOut={(event, inst) => {
          // Logic for event hover out
        }}
        onEventUpdate={(event, inst) => {
          // Logic for event update
        }}
        onEventUpdated={(event, inst) => {
          // Logic for event updated
        }}
        onEventUpdateFailed={(event, inst) => {
          // Logic for failed event update
        }}
        onEventRightClick={(event, inst) => {
          // Logic for event right click
        }}
        onInit={(event, inst) => {
          // Logic running on component init
        }}
        onPageChange={(event, inst) => {
          // Your custom event handler goes here
        }}
        onPageLoaded={(event, inst) => {
          // Use it to inject custom markup & attach custom listeners
        }}
        onPageLoading={(event, inst) => {
          // Use it to load data on demand
        }}
        onSelectedDateChange={(event, inst) => {
          // Use it to keep track of the selected date externally
        }}
      />
    </>
  );
}

export default App;
