import {
  Datepicker,
  Eventcalendar,
  Input,
  Popup,
  setOptions,
  /* localeImport */
} from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './show-task-progress-on-event.css';

setOptions({
  // localeJs,
  // themeJs
});

const defaultEvents = [
  {
    start: 'dyndatetime(y,m,d+2)',
    end: 'dyndatetime(y,m,d+5)',
    title: 'Design Homepage',
    resource: 'alice',
    progress: 100,
  },
  {
    start: 'dyndatetime(y,m,d+2)',
    end: 'dyndatetime(y,m,d+6)',
    title: 'Create Wireframes',
    resource: 'bob',
    progress: 100,
  },
  {
    start: 'dyndatetime(y,m,d+4)',
    end: 'dyndatetime(y,m,d+9)',
    title: 'Develop Frontend',
    resource: 'charlie',
    progress: 45,
  },
  {
    start: 'dyndatetime(y,m,d+4)',
    end: 'dyndatetime(y,m,d+9)',
    title: 'Develop Backend',
    resource: 'dave',
    progress: 35,
  },
  {
    start: 'dyndatetime(y,m,d+9)',
    end: 'dyndatetime(y,m,d+13)',
    title: 'Test Website',
    resource: 'erin',
    progress: 0,
  },
  {
    start: 'dyndatetime(y,m,d+6)',
    end: 'dyndatetime(y,m,d+13)',
    title: 'Fix Bugs',
    resource: 'frank',
    progress: 0,
  },
  {
    start: 'dyndatetime(y,m,d+13)',
    end: 'dyndatetime(y,m,d+16)',
    title: 'Deploy Website',
    resource: 'george',
    progress: 0,
  },
];

const myResources = [
  {
    id: 'gro1',
    name: 'Designer Team',
    color: '#76e083',
    eventCreation: false,
    children: [
      {
        id: 'alice',
        name: 'Alice',
        title: 'Designer',
        color: '#1dab2f',
      },
      {
        id: 'bob',
        name: 'Bob',
        title: 'Designer',
        color: '#76e083',
      },
    ],
  },
  {
    id: 'gro2',
    name: 'Development Team',
    color: '#ff1717',
    eventCreation: false,
    children: [
      {
        id: 'charlie',
        name: 'Charlie',
        title: 'Frontend Developer',
        color: '#4981d6',
      },
      {
        id: 'dave',
        name: 'Dave',
        title: 'Backend Developer',
        color: '#f7961e',
      },
      {
        id: 'frank',
        name: 'Frank',
        title: 'Full-Stack Developer',
        color: '#34c8e0',
      },
      {
        id: 'george',
        name: 'George',
        title: 'DevOps Engineer',
        color: '#e25dd2',
      },
    ],
  },

  {
    id: 'gro3',
    name: 'QA Team',
    color: '#d6d145',
    eventCreation: false,
    children: [
      {
        id: 'erin',
        name: 'Erin',
        title: 'QA Tester',
        color: '#d6d145',
      },
    ],
  },
];

function App() {
  const calendarRef = useRef(null);
  const isDraggingProgress = useRef(false);
  const [myEvents, setMyEvents] = useState(defaultEvents);
  const [progress, setProgress] = useState(0);
  const [tempEvent, setTempEvent] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const [start, startRef] = useState(null);
  const [end, endRef] = useState(null);
  const [popupEventTitle, setTitle] = useState('');
  const [popupEventDate, setDate] = useState([]);
  const [mySelectedDate, setSelectedDate] = useState(new Date());
  const [popupEventResource, setResource] = useState('');

  const myView = useMemo(() => ({ timeline: { type: 'month', eventList: true } }), []);

  const loadPopupForm = useCallback((event) => {
    setProgress(event.progress || 0);
    setTitle(event.title);
    setDate([event.start, event.end]);
    setResource(event.resource);
  }, []);

  const handleEventCreated = useCallback(
    (args) => {
      setEdit(false);
      setTempEvent(args.event);
      // fill popup form with event data
      loadPopupForm(args.event);
      setAnchor(args.target);
      // open the popup
      setOpen(true);
    },
    [loadPopupForm],
  );

  const handleEventClick = useCallback(
    (args) => {
      if (isDraggingProgress.current) return;

      setEdit(true);
      setTempEvent({ ...args.event });
      // fill popup form with event data
      loadPopupForm(args.event);
      setAnchor(args.domEvent.target);
      setOpen(true);
    },
    [loadPopupForm, isDraggingProgress],
  );

  const saveEvent = useCallback(() => {
    const newEvent = {
      id: tempEvent.id,
      title: popupEventTitle,
      start: popupEventDate[0],
      end: popupEventDate[1],
      resource: popupEventResource,
      progress: progress,
    };
    if (isEdit) {
      // update the event in the list
      const index = myEvents.findIndex((x) => x.id === tempEvent.id);
      const newEventList = [...myEvents];

      newEventList.splice(index, 1, newEvent);
      setMyEvents(newEventList);
      // here you can update the event in your storage as well
      // ...
    } else {
      // add the new event to the list
      setMyEvents([...myEvents, newEvent]);
      // here you can add the event to your storage as well
      // ...
    }
    setSelectedDate(popupEventDate[0]);
    // close the popup
    setOpen(false);
  }, [isEdit, myEvents, popupEventDate, popupEventTitle, progress, popupEventResource, tempEvent]);

  // handle popup form changes

  const handleTitleChange = useCallback((ev) => {
    setTitle(ev.target.value);
  }, []);

  const handleDateChange = useCallback((args) => {
    setDate(args.value);
  }, []);

  const handleProgressChange = useCallback((event) => {
    setProgress(event.target.value);
  }, []);

  /// test
  useEffect(() => {
    console.log('progress value updated:', progress);
  }, [progress]);

  // timeline options

  const handleSelectedDateChange = useCallback((event) => {
    setSelectedDate(event.date);
  }, []);

  const handleEventUpdated = useCallback(
    (args) => {
      // here you can update the event in your storage as well, after drag & drop or resize
      // ...
      console.log('here');
      var eventToUpdate = myEvents.find(function (event) {
        return event.id === args.event.id;
      });
      eventToUpdate.start = args.event.start;
      eventToUpdate.end = args.event.end;
      eventToUpdate.resource = args.event.resource;
    },
    [myEvents],
  );

  // popup options
  const headerText = useMemo(() => (isEdit ? 'Edit event' : 'New Event'), [isEdit]);
  const popupButtons = useMemo(() => {
    if (isEdit) {
      return [
        'cancel',
        {
          handler: () => {
            saveEvent();
          },
          keyCode: 'enter',
          text: 'Save',
          cssClass: 'mbsc-popup-button-primary',
        },
      ];
    } else {
      return [
        'cancel',
        {
          handler: () => {
            saveEvent();
          },
          keyCode: 'enter',
          text: 'Add',
          cssClass: 'mbsc-popup-button-primary',
        },
      ];
    }
  }, [isEdit, saveEvent]);

  const popupResponsive = useMemo(
    () => ({
      medium: {
        display: 'anchored',
        width: 400,
        fullScreen: false,
        touchUi: false,
      },
    }),
    [],
  );

  const onClose = useCallback(() => {
    if (!isEdit) {
      // refresh the list, if add popup was canceled, to remove the temporary event
      setMyEvents([...myEvents]);
    }
    setOpen(false);
  }, [isEdit, myEvents]);

  /// !

  const handleProgressArrowMouseDown = useCallback(
    (e) => {
      const progressArrow = e.target.closest('.mds-progress-arrow');
      if (!progressArrow) return;

      e.stopPropagation();
      isDraggingProgress.current = true;

      const initialMouseX = e.pageX;
      const initialProgress = parseFloat(progressArrow.closest('.mds-progress-bar').style.width.replace('%', ''));
      var newProgress;

      const handleMouseMove = (e) => {
        const mouseXOffset = e.pageX - initialMouseX;
        const eventContainerWidth = progressArrow.closest('.mds-progress-bar').parentElement.offsetWidth;

        newProgress = Math.round(initialProgress + (mouseXOffset / eventContainerWidth) * 100);
        newProgress = Math.max(0, Math.min(100, newProgress));

        const progressBar = progressArrow.closest('.mds-progress-bar');
        progressBar.style.width = `${newProgress}%`;

        const progressLabel = progressArrow.closest('.mds-progress-event').querySelector('.mds-progress-label');
        progressLabel.textContent = `${newProgress}%`;

        setProgress(newProgress);
        console.log('mouse move progress:', progress);
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);

        const eventId = progressArrow.dataset.eventId;
        const eventToUpdate = myEvents.find((event) => event.id === eventId);
        console.log('mouse up progress', progress);
        eventToUpdate.progress = newProgress;
        // console.log(calendarRef);
        // calendarRef.current.updateEvent(eventToUpdate);

        setTimeout(() => (isDraggingProgress.current = false), 100);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [myEvents, progress],
  );

  ///

  const renderCustomEvent = useCallback(
    (event) => (
      <div className="mds-progress-event" style={{ background: event.color }}>
        <div className="mds-progress-bar" style={{ width: `${event.original.progress || 0}%` }}>
          <div className="mds-progress-arrow" data-event-id={event.original.id} onMouseDown={handleProgressArrowMouseDown}></div>
          {/* <div className="mds-progress-arrow" data-event-id={event.original.id}></div> */}
        </div>
        <div className="mds-progress-event-content">
          <div className="mds-progress-event-title">{event.original.title}</div>
        </div>
        <div className="mds-progress-label">{event.original.progress || 0}%</div>
      </div>
    ),
    // [],
    [handleProgressArrowMouseDown],
  );

  const renderCustomResource = useCallback(
    (resource) => (
      <div>
        <div className="mds-progress-employee-name">{resource.name}</div>
        {resource.title && <div className="mds-progress-employee-title">{resource.title}</div>}
      </div>
    ),
    [],
  );

  return (
    // <div onMouseDownCapture={handleProgressArrowMouseDown}>
    <div>
      <Eventcalendar
        ref={calendarRef}
        class="mds-progress-calendar"
        view={myView}
        data={myEvents}
        resources={myResources}
        clickToCreate={true}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        selectedDate={mySelectedDate}
        onSelectedDateChange={handleSelectedDateChange}
        onEventClick={handleEventClick}
        onEventCreated={handleEventCreated}
        onEventUpdated={handleEventUpdated}
        renderResource={renderCustomResource}
        renderScheduleEvent={renderCustomEvent}
      />
      <Popup
        display="bottom"
        fullScreen={true}
        contentPadding={false}
        headerText={headerText}
        anchor={anchor}
        buttons={popupButtons}
        isOpen={isOpen}
        onClose={onClose}
        responsive={popupResponsive}
      >
        <div className="mbsc-form-group">
          <Input label="Title" value={popupEventTitle} onChange={handleTitleChange} />
        </div>
        <div className="mbsc-form-group">
          <Input ref={startRef} label="Starts" />
          <Input ref={endRef} label="Ends" />
          <Datepicker
            select="range"
            touchUi={true}
            startInput={start}
            endInput={end}
            showRangeLabels={false}
            responsive={{
              medium: {
                touchUi: false,
              },
            }}
            onChange={handleDateChange}
            value={popupEventDate}
          />
        </div>
        <div className="mbsc-form-group">
          <div className="mbsc-flex mbsc-align-items-center mbsc-padding">
            <label htmlFor="progress-slider">Progress</label>
            <input
              id="progress-slider"
              className="mds-popup-progress-slider mbsc-flex-1-0"
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
            />
            <span className="mds-popup-progress-label">{progress}%</span>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default App;
