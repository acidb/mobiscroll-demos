import { Eventcalendar, Draggable, setOptions, getJson /* localeImport */ } from '@mobiscroll/react';
import { useState, useMemo, useEffect } from 'react';
import './event-hooks.css';

setOptions({
  // theme
  // locale
});

function App() {
  const [myEvents, setEvents] = useState([]);
  const [draggable1, setDraggable1] = useState();
  const [draggable2, setDraggable2] = useState();

  const invalid = useMemo(
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
      schedule: {
        type: 'day',
      },
    };
  }, []);

  const dragData1 = useMemo(
    () => ({
      title: 'External drag 1',
      color: '#ffdab8',
    }),
    [],
  );

  const dragData2 = useMemo(
    () => ({
      title: 'External drag 2',
      color: '#ddfcf7',
    }),
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
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
        invalid={invalid}
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
