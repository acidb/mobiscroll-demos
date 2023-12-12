import React from 'react';
import {
  Eventcalendar,
  Draggable,
  Popup,
  Input,
  Textarea,
  Select,
  setOptions,
  Toast,
  MbscEventcalendarView /* localeImport */,
} from '@mobiscroll/react';
import './external-event-presets.css';
setOptions({
  // localeJs,
  // themeJs
});

const tasks = [
  {
    title: 'Small wrap',
    color: '#637e57',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+1)',
    length: '2 days',
  },
  {
    title: 'Full-size wrap',
    color: '#50789d',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+2)',
    length: '3 days',
  },
  {
    title: 'Mid-size wrap',
    color: '#6c5d45',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+2)',
    length: '3 days',
  },
  {
    title: 'Roadster wrap',
    color: '#9da721',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+2)',
    length: '3 days',
  },
  {
    title: 'SUV wrap',
    color: '#cd6957',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+3)',
    length: '4 days',
  },
  {
    title: 'Hypercar wrap',
    color: '#7a5886',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+4)',
    length: '5 days',
  },
];

const myData = [
  { value: '1', text: 'Roly Chester' },
  { value: '2', text: 'Tucker Wayne' },
  { value: '3', text: 'Baker Brielle' },
  { value: '4', text: 'Jami Walter' },
  { value: '5', text: 'Patrick Toby' },
  { value: '6', text: 'Tranter Logan' },
  { value: '7', text: 'Payton Sinclair' },
];

function Task(props) {
  const [draggable, setDraggable] = React.useState();

  const setDragElm = React.useCallback((elm) => {
    setDraggable(elm);
  }, []);

  return (
    <div ref={setDragElm} style={{ background: props.data.color }} className="external-event-task">
      <div>{props.data.title}</div>
      <div>{props.data.length}</div>
      <Draggable dragData={props.data} element={draggable} />
    </div>
  );
}

const App: React.FC = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>('');
  const [details, setDetails] = React.useState<string>('');
  const [technician, setTechnician] = React.useState<string>('');
  const [anchor, setAnchor] = React.useState<any>(null);
  const [isToastOpen, setToastOpen] = React.useState<boolean>(false);
  const [toastText, setToastText] = React.useState<string>();

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      calendar: { labels: true },
    };
  }, []);

  const invalid = React.useMemo(() => {
    return [
      {
        recurring: {
          repeat: 'weekly',
          weekDays: 'SA,SU',
        },
      },
    ];
  }, []);

  const fillDialog = React.useCallback((args) => {
    setTitle(args.event.title);
    setDetails(args.event.details);
    setTechnician(args.event.technician);
    setAnchor(args.target);
    setOpen(true);
  }, []);

  const onEventCreated = React.useCallback(
    (args) => {
      fillDialog(args);
    },
    [fillDialog],
  );

  const eventUpdateFail = React.useCallback(() => {
    setToastText("Can't create event on this date");
    setToastOpen(true);
  }, []);

  const onClose = React.useCallback(() => {
    setOpen(false);
    setToastText('New task added');
    setToastOpen(true);
  }, []);

  const changeSelected = React.useCallback((event: any) => {
    setTechnician(event.value);
  }, []);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <div className="mbsc-grid mbsc-no-padding">
      <div className="mbsc-row">
        <div className="mbsc-col-sm-9 external-event-calendar">
          <Eventcalendar
            view={view}
            invalid={invalid}
            dragToMove={true}
            externalDrop={true}
            onEventCreated={onEventCreated}
            onEventCreateFailed={eventUpdateFail}
            onEventUpdateFailed={eventUpdateFail}
          />
        </div>
        <div className="mbsc-col-sm-3">
          <div className="mbsc-form-group-title">Available tasks</div>
          {tasks.map((task, i) => (
            <Task key={i} data={task} />
          ))}
        </div>
        <Popup
          display="anchored"
          width={400}
          contentPadding={false}
          touchUi={false}
          headerText="Assign task"
          buttons={['ok']}
          anchor={anchor}
          isOpen={isOpen}
          onClose={onClose}
        >
          <div className="mbsc-form-group">
            <Input label="Task" defaultValue={title} readOnly></Input>
            <Textarea label="Details" defaultValue={details} placeholder="Add description..."></Textarea>
            <Select
              data={myData}
              value={technician}
              onChange={changeSelected}
              display="anchored"
              touchUi={false}
              label="Technician"
              inputProps={{ placeholder: 'Please select...' }}
            />
          </div>
        </Popup>
      </div>
      <Toast
        // theme
        message={toastText}
        isOpen={isToastOpen}
        onClose={closeToast}
      />
    </div>
  );
};
