import React from 'react';
mobiscroll.setOptions({
    // localeJs,
    // themeJs
});

function App() {

    const now = new Date();
    const [clickedEvent, setClickedEvent] = React.useState({});
    const [title, setTitle] = React.useState('New Event');
    const [desc, setDesc] = React.useState('');
    const [allDay, setAllDay] = React.useState(false);
    const [start, setStart] = React.useState(now);
    const [end, setEnd] = React.useState(now);
    const [min, setMin] = React.useState(now);
    const [busy, setBusy] = React.useState('busy');
    const [openAddPopup, setOpenAddPopup] = React.useState(false);
    const [openDeletePopup, setOpenDeletePopup] = React.useState(false);
    const [addAnchor, setAddAnchor] = React.useState();
    const [deleteAnchor, setDeleteAnchor] = React.useState();
    const [selectedDate, setSelectedDate] = React.useState(now);
    const [tempEventID, setTempEventID] = React.useState(5);
    const [controls, setControls] = React.useState('datetime');
    const [dateWheels, setDateWheels] = React.useState('|DDD MMM D|');
    const [myEvents, setEvents] = React.useState([{
        id: 1,
        start: new Date(now.getFullYear(), now.getMonth(), 8, 13),
        end: new Date(now.getFullYear(),i now.getMonth(), 8, 13, 30),
        title: 'Lunch @ Butcher\'s',
        color: '#26c57d'
    }, {
        id: 2,
        start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15),
        end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16),
        title: 'General orientation',
        color: '#fd966a'
    }, {
        id: 3,
        start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 18),
        end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 22),
        title: 'Dexter BD',
        color: '#37bbe4'
    }, {
        id: 4,
        start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 30),
        end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 11, 30),
        title: 'Stakeholder mtg.',
        color: '#d00f0f'
    }]);
    
    const addPopupButtons =[
        'cancel',
        {
            text: 'Add',
            handler: (event) => {
                const events = myEvents.slice(0);
                const index = events.findIndex(x => x.id === clickedEvent.id);

                events.splice(index, 1, getNewEvent());
                
                setEvents(events);
                setTempEventID(tempEventID + 1);
                setOpenAddPopup(false);
       
            },
            cssClass: 'mbsc-popup-button-primary'
        }
    ];
    
    const deletePopupButtons =[
        {
            text: 'Delete event',
            handler: (event) => {
                const events = myEvents.slice(0);
                const index = events.findIndex(item => item.id === clickedEvent.id);
    
                events.splice(index, 1);
                
                setEvents(events);
                setOpenDeletePopup(false);
            },
            cssClass: 'mbsc-popup-button-primary'
        },
        'cancel'
    ];
    
    const view = React.useMemo(() => {
        return {
            schedule: { type: 'week' }
        };
    }, []);

    const onEventClick = React.useCallback((event, inst) => {
        setClickedEvent(event.event);

        if (event.event.id != 'temp') {
            setDeleteAnchor(event.domEvent.currentTarget);
            setOpenDeletePopup(true);
        }
    }, []);
    
    const onCellClick = React.useCallback((event, inst) => {
        const d = event.date;

        setStart(d);
        setEnd(new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() + 1));
        setMin(d);
        setAddAnchor(event.domEvent.currentTarget);
        setOpenAddPopup(true);

    }, []);
    
    const titleChange = (event) => {
        setTitle(event.target.value);
    }
    
    const descChange = (event) => {
        setDesc(event.target.value);
    }
    
    const allDayChange = (event) => {
        const checked = event.target.checked;
        const mode = checked ? 'date' : 'datetime';
        const dateWheels = checked ? 'MMMM DD YYYY' : '|DDD MMM D|';

        setAllDay(checked);
        setDateWheels(dateWheels);
        setControls(mode);
    }
    
    const startChange = (event) => {
        setStart(event.value);
        setMin(event.value);
    }
    
    const endChange = (event) => {
        setEnd(event.value);
    }
    
    const busyChange = (event) => {
        setBusy(event.target.value);
    }
    
    const onAddPopupOpen = (event) => {
        setOpenAddPopup(true);
        setTitle('New');
        setDesc('');
        setAllDay(false);
        setControls('datetime');
        setDateWheels('|DDD MMM D|');
        setBusy('busy');
        setEvents([...myEvents, getNewEvent(true)]);
    }
    
    const onAddPopupClose  = (event) => {
        const events = myEvents.slice(0);
        const index = events.findIndex(item => item.id === 'temp');

        events.splice(index, 1);

        setEvents(events);
        setOpenAddPopup(false);
    }
    
    const onDeletePopupClose = (event) => {
        setOpenDeletePopup(false);
    }
    
    const getNewEvent = (newEvent) => {
        return {
            id: newEvent ? 'temp' : tempEventID,
            title: title,
            desc: desc,
            start: start,
            end: end,
            allDay: newEvent ? false : allDay,
            busy: busy
        };
    }
    
    return (
        <div>
            <mobiscroll.Eventcalendar
                view={view}
                data={myEvents}
                onEventClick={onEventClick}
                onCellClick={onCellClick}
            />
            <mobiscroll.Popup
                display="bubble"
                maxWidth="400px"
                headerText="New event"
                contentPadding={false}
                showOverlay={false}
                anchor={addAnchor}
                buttons={addPopupButtons}
                isOpen={openAddPopup}
                onOpen={onAddPopupOpen}
                onClose={onAddPopupClose}
            >
                <div className="mbsc-form-group">
                    <mobiscroll.Input label="Title" value={title} onChange={titleChange}/>
                    <mobiscroll.Textarea label="Description" value={desc} onChange={descChange}/>
                </div>
                <div className="mbsc-form-group"> 
                    <mobiscroll.Switch label="All-day" value={allDay} onChange={allDayChange}/>
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
                        <mobiscroll.SegmentedItem value="busy">
                            Show as busy
                        </mobiscroll.SegmentedItem>
                        <mobiscroll.SegmentedItem value="free">
                            Show as free
                        </mobiscroll.SegmentedItem>
                    </mobiscroll.SegmentedGroup>
                </div>
            </mobiscroll.Popup>
            
            <mobiscroll.Popup
                display="bubble"
                showOverlay={false}
                buttons={deletePopupButtons}
                anchor={deleteAnchor}
                isOpen={openDeletePopup}
                onClose={onDeletePopupClose}
            >
                Are you sure you want to delete this event?
            </mobiscroll.Popup>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);