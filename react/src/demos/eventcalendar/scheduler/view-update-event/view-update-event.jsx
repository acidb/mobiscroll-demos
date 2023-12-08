import React from 'react';
mobiscroll.setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const now = new Date();

  const cal = React.useRef();
  const list = React.useRef();

  const [selectedEvent, setSelectedEvent] = React.useState(now);
  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [allDay, setAllDay] = React.useState(false);
  const [start, setStart] = React.useState(now);
  const [end, setEnd] = React.useState(now);
  const [min, setMin] = React.useState(now);
  const [busy, setBusy] = React.useState('busy');
  const [openPopup, setOpenPopup] = React.useState(false);
  const [controls, setControls] = React.useState('datetime');
  const [dateWheels, setDateWheels] = React.useState('|DDD MMM D|');
  const [anchor, setAnchor] = React.useState();
  const popupButtons = [
    'cancel',
    {
      text: 'Save',
      handler: (event) => {
        const events = myEvents.slice(0);
        const index = events.findIndex((x) => x.id === selectedEvent.id);

        const eventToSave = {
          id: selectedEvent.id,
          title: title,
          desc: desc,
          allDay: allDay,
          start: start,
          end: end,
          busy: busy,
          color: selectedEvent.color,
        };

        events.splice(index, 1, eventToSave);

        setEvents(events);
        setOpenPopup(false);
      },
      cssClass: 'mbsc-popup-button-primary',
    },
  ];
  const [myEvents, setEvents] = React.useState([
    {
      id: 1,
      start: new Date(now.getFullYear(), now.getMonth(), 8, 13),
      end: new Date(now.getFullYear(), now.getMonth(), 8, 13, 30),
      title: "Lunch @ Butcher's",
      color: '#26c57d',
    },
    {
      id: 2,
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16),
      title: 'General orientation',
      color: '#fd966a',
    },
    {
      id: 3,
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 18),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 22),
      title: 'Dexter BD',
      color: '#37bbe4',
    },
    {
      id: 4,
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 30),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 11, 30),
      title: 'Stakeholder mtg.',
      color: '#d00f0f',
    },
  ]);

  const view = React.useMemo(() => {
    return {
      schedule: { type: 'week' },
    };
  }, []);

  const onEventClick = React.useCallback((event, inst) => {
    const ev = event.event;
    const mode = ev.allDay ? 'date' : 'datetime';
    const dateWheels = ev.allDay ? 'MMMM DD YYYY' : '|DDD MMM D|';

    setSelectedEvent(ev);
    setAnchor(event.domEvent.target);
    setOpenPopup(true);
    setTitle(ev.title);
    setDesc(ev.desc);
    setAllDay(ev.allDay);
    setDateWheels(dateWheels);
    setControls(mode);
    setStart(ev.start);
    setEnd(ev.end);
    setMin(ev.start);
    setBusy(ev.busy || 'busy');
  }, []);

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const descChange = (event) => {
    setDesc(event.target.value);
  };

  const allDayChange = (event) => {
    const checked = event.target.checked;
    const mode = checked ? 'date' : 'datetime';
    const dateWheels = checked ? 'MMMM DD YYYY' : '|DDD MMM D|';

    setAllDay(checked);
    setDateWheels(dateWheels);
    setControls(mode);
  };

  const startChange = (event) => {
    setStart(event.value);
    setMin(event.value);
  };

  const endChange = (event) => {
    setEnd(event.value);
  };

  const busyChange = (event) => {
    setBusy(event.target.value);
  };

  const onPopupClose = () => {
    setOpenPopup(false);
  };

  return (
    <div>
      <mobiscroll.Eventcalendar view={view} data={myEvents} onEventClick={onEventClick} />
      <mobiscroll.Popup
        display="bubble"
        maxWidth="400px"
        headerText="Edit event"
        showOverlay={false}
        contentPadding={false}
        anchor={anchor}
        buttons={popupButtons}
        isOpen={openPopup}
        onClose={onPopupClose}
      >
        <div className="mbsc-form-group">
          <mobiscroll.Input label="Title" value={title} onChange={titleChange} />
          <mobiscroll.Textarea label="Description" value={desc} onChange={descChange} />
        </div>
        <div className="mbsc-form-group">
          <mobiscroll.Switch label="All-day" value={allDay} onChange={allDayChange} />
          <mobiscroll.Datetime
            touchUi={false}
            inputProps={{ label: 'Starts' }}
            dateWheels={dateWheels}
            mode={controls}
            value={start}
            onChange={startChange}
          />
          <mobiscroll.Datetime
            touchUi={false}
            inputProps={{ label: 'Ends' }}
            dateWheels={dateWheels}
            mode={controls}
            value={end}
            onChange={endChange}
            min={min}
          />
          <mobiscroll.SegmentedGroup value={busy} onChange={busyChange}>
            <mobiscroll.SegmentedItem value="busy">Show as busy</mobiscroll.SegmentedItem>
            <mobiscroll.SegmentedItem value="free">Show as free</mobiscroll.SegmentedItem>
          </mobiscroll.SegmentedGroup>
        </div>
      </mobiscroll.Popup>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
