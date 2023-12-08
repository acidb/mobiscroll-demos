import React from 'react';
import { Eventcalendar, Draggable, setOptions, getJson, Toast /* localeImport */ } from '@mobiscroll/react';
import './external-drag-drop.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = React.useState([]);
  const [draggableMeeting, setDraggableMeeting] = React.useState();
  const [draggableOrientation, setDraggableOrientation] = React.useState();
  const [draggableBlank, setDraggableBlank] = React.useState();
  const [isToastOpen, setToastOpen] = React.useState(false);

  const setMeetingElm = React.useCallback((elm) => {
    setDraggableMeeting(elm);
  }, []);

  const setOrientationElm = React.useCallback((elm) => {
    setDraggableOrientation(elm);
  }, []);

  const setBlankElm = React.useCallback((elm) => {
    setDraggableBlank(elm);
  }, []);

  const meetingData = {
    title: 'Product team meeting',
    color: '#cf4343',
    start: '08:00',
    end: '09:30',
  };

  const orientationData = {
    title: 'General orientation',
    color: '#1064b0',
    start: '08:00',
    end: '10:00',
  };

  const view = React.useMemo(() => {
    return {
      calendar: { labels: true },
    };
  }, []);

  const onEventCreate = React.useCallback((event) => {
    setToastOpen(true);
  }, []);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <div className="mbsc-grid mbsc-no-padding">
      <div className="mbsc-row">
        <div className="mbsc-col-sm-9 external-drop-calendar">
          <Eventcalendar data={myEvents} view={view} dragToMove={true} externalDrop={true} onEventCreate={onEventCreate} />
        </div>
        <div className="mbsc-col-sm-3">
          <div className="mbsc-form-group-title">Available tasks</div>

          <div ref={setMeetingElm} className="external-drop-task" style={{ background: '#cf4343' }}>
            <div>Product team meeting</div>
            <div>1.5 h</div>
            <Draggable dragData={meetingData} element={draggableMeeting} />
          </div>

          <div ref={setOrientationElm} className="external-drop-task" style={{ background: '#e49516' }}>
            <div>General orientation</div>
            <div>2 h</div>
            <Draggable dragData={orientationData} element={draggableOrientation} />
          </div>

          <div ref={setBlankElm} className="external-drop-task external-drop-task-blank">
            <div>Blank event</div>
            <Draggable element={draggableBlank} />
          </div>
        </div>
      </div>
      <Toast
        // theme
        message="Event dropped"
        isOpen={isToastOpen}
        onClose={closeToast}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
