import { Eventcalendar, getJson, Prompt, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './check-list-tasks-within-events.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState([]);
  const [isPromptOpen, setPromptOpen] = useState(false);
  const [promptTitle, setPromptTitle] = useState('');
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [tempEvent, setTempEvent] = useState();
  const [inst, setInst] = useState(null);

  const myView = useMemo(
    () => ({
      timeline: {
        type: 'week',
        eventHeight: 'variable',
        eventList: true,
      },
    }),
    [],
  );

  const myResources = useMemo(
    () => [
      {
        id: 1,
        name: 'Site Plumbing Squad',
        description: 'Elite construction plumbers ensuring flawless pipeline installations on every site.',
        color: '#01adff',
      },
      {
        id: 2,
        name: 'Pipeline Builders',
        description: 'Constructing fluid pathways, one precision connection at a time.',
        color: '#239a21',
      },
      {
        id: 3,
        name: 'Blueprint Plumbers',
        description: 'Turning plans into precise pipelines with expert craftsmanship.',
        color: '#ff4600',
      },
      {
        id: 4,
        name: 'Site Supply Specialists',
        description: 'Delivering essential plumbing materials promptly to construction sites',
        color: '#4981d6',
      },
      {
        id: 5,
        name: 'Infrastructure Installers',
        description: ' Building the backbone of modern plumbing systems efficiently.',
        color: '#f1e920',
      },
      {
        id: 6,
        name: 'Steel Sinks Squad',
        description: 'Installing robust sinks for industrial and commercial settings.',
        color: '#f7961e',
      },
    ],
    [],
  );

  const handleDefaultEvent = useCallback(
    () => ({
      title: 'New Event',
      tasks: ['Default task'],
    }),
    [],
  );

  const customResource = useCallback(
    (resource) => (
      <>
        <div className="mds-tasks-resource-name">{resource.name}</div>
        <div className="mds-tasks-resource-description">{resource.description}</div>
      </>
    ),
    [],
  );
  const customScheduleEventContent = useCallback(
    (event) => (
      <>
        <div className="mds-tasks-event-title">{event.title}</div>
        <div className="mds-tasks-event-subtitle">Task list</div>
        <div className="mds-tasks-event-list">
          {event.original.tasks.map((task, i) => (
            <div className="mds-tasks-event-list-item" key={'task' + i}>
              {task}
            </div>
          ))}
          <div className="mds-tasks-event-list-item mds-tasks-event-add" id="demo-check-list-tasks-add-button">
            {' '}
            Add task
          </div>
        </div>
      </>
    ),
    [],
  );

  const handleClosePrompt = useCallback(
    (value) => {
      if (value) {
        tempEvent.tasks.push(value);
        inst.updateEvent(tempEvent);
      }
      setPromptOpen(false);
      setToastMessage('Tasks updated for ' + tempEvent.title);
      setToastOpen(true);
    },
    [inst, tempEvent],
  );

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handleEventClick = useCallback((args) => {
    if (args.domEvent.target.id === 'demo-check-list-tasks-add-button') {
      const ev = args.event;
      setTempEvent(ev);
      setPromptTitle('Add new task to ' + ev.title);
      setPromptOpen(true);
    }
  }, []);

  useEffect(() => {
    getJson(
      // TODO CHANGE trialdev to trial
      'https://trialdev.mobiscroll.com/events-check-list-tasks/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <>
      <Eventcalendar
        className="mds-tasks-calendar"
        dragToCreate={true}
        clickToCreate={true}
        dragToMove={true}
        dragToResize={true}
        view={myView}
        data={myEvents}
        resources={myResources}
        extendDefaultEvent={handleDefaultEvent}
        renderResource={customResource}
        renderScheduleEventContent={customScheduleEventContent}
        onEventClick={handleEventClick}
        ref={setInst}
      />
      <Prompt title={promptTitle} inputType="text" isOpen={isPromptOpen} onClose={handleClosePrompt} />
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleCloseToast} duration={3000} />
    </>
  );
}

export default App;
