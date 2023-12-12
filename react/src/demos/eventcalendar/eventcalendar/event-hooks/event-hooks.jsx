import React from 'react';
//<demo-only>import { Eventcalendar, Draggable, getJson/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Eventcalendar = mobiscroll.Eventcalendar;
const Draggable = mobiscroll.Draggable;
const getJson = mobiscroll.getJson;//</extra>

function App() {
    const [myEvents, setEvents] = React.useState([]);
    
    const invalid = [{
        recurring: {
            repeat: 'weekly',
            weekDays: 'SA,SU'
        }
    }];

    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);
    
    const view = React.useMemo(() => {
        return {
            calendar: { labels: true }
        };
    }, []);
    
    const [draggable1, setDraggable1] = React.useState();
    const [draggable2, setDraggable2] = React.useState();
    
    const setDragElm1 = React.useCallback((elm) => {
        setDraggable1(elm);
    }, []);   
    
    const setDragElm2 = React.useCallback((elm) => {
        setDraggable2(elm);
    }, []); 
                    
    const dragData1 = {
        title: 'External drag 1',
        color: '#ffdab8'
    };
    
    const dragData2 = {
        title: 'External drag 2',
        color: '#ddfcf7'
    };
    
    return (
        <div ref={setDraggable1} className="event-hooks-draggable" style={{background: '#ffdab8'}}>
            <div className="draggable-title">External drag 1</div>
            <div className="draggable-text">Drag me to calendar</div>
            <Draggable dragData={dragData1} element={draggable1} />
        </div>
        <div ref={setDraggable2} className="event-hooks-draggable" style={{background: '#ddfcf7'}}>
            <div className="draggable-title">External drag 2</div>
            <div className="draggable-text">Drag me to calendar</div>
            <Draggable dragData={dragData2} element={draggable2} />
        </div>
        <Eventcalendar
            // theme
            // locale
            data={myEvents}
            dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            externalDrop={true}
            view={view}
            invalid={invalid}
            onCellClick = {(event, inst) => {
                // Logic for event click
            }}
            onCellDoubleClick = {(event, inst) => {
                /* Logic for cell double click */
            }}
            onCellRightClick = {(event, inst) => {
                /* Logic for cell right click */
            }}
            onCellHoverIn = {(event, inst) => {
                /* Logic for cell hover in */
            }}
            onCellHoverOut = {(event, inst) => {
                /* Logic for cell hover out */
            }}
            onDestroy = {(event, inst) => {
                // Your custom event handler goes here 
            }}
            onEventClick = {(event, inst) => {
                // Logic for event click 
            }}
            onEventCreate = {(event, inst) => {
                // Logic for event create 
            }}
            onEventCreated = {(event, inst) => {
                // Logic for event created 
            }}
            onEventCreateFailed = {(event, inst) => {
                // Logic for failed event create 
            }}
            onEventDelete = {(event, inst) => {
                // Logic for event delete
            }}
            onEventDeleted = {(event, inst) => {
                // Logic for event deleted
            }}
            onEventDoubleClick = {(event, inst) => {
                // Logic for event double click 
            }}
            onEventDragStart = {(event, inst) => {
                // Logic for event drag start 
            }}
            onEventDragEnd = {(event, inst) => {
                // Logic for event drag end 
            }}
            onEventHoverIn = {(event, inst) => {
                // Logic for event hover in 
            }}
            onEventHoverOut = {(event, inst) => {
                // Logic for event hover out 
            }}
            onEventUpdate = {(event, inst) => {
                // Logic for event update 
            }}
            onEventUpdated = {(event, inst) => {
                // Logic for event updated 
            }}
            onEventUpdateFailed = {(event, inst) => {
                // Logic for failed event update 
            }}
            onEventRightClick = {(event, inst) => {
                // Logic for event right click 
            }}
            onInit = {(event, inst) => {
                // Logic running on component init
            }}
            onLabelClick = {(event, inst) => {
                // Logic for label click
            }}
            onPageChange = {(event, inst) => {
                // Your custom event handler goes here 
            }}
            onPageLoaded = {(event, inst) => {
                // Use it to inject custom markup & attach custom listeners
            }}
            onPageLoading = {(event, inst) => {
                // Use it to load data on demand 
            }}
            onSelectedDateChange = {(event, inst) => {
                // Use it to keep track of the selected date externally
            }}
        />
    ); 
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);