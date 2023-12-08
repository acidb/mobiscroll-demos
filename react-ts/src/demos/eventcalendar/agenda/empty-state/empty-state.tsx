import React from 'react';
import { Eventcalendar, Button, getJson, setOptions, Toast, MbscCalendarEvent, MbscEventcalendarView, MbscCalendarEventData/* localeImport */ } from '@mobiscroll/react';
import './empty-state.css';


setOptions({
    // localeJs,
    // themeJs
});

const App: React.FC = () => {

    const myEvents = React.useMemo<MbscCalendarEvent[]>(() => ([
        {   
            title: "Zumba Class",
            start: 'dyndatetime(y,m,d-7,17)',
            end: 'dyndatetime(y,m,d-7,19)',
        }, {
            title: "Silent Party",
            start: 'dyndatetime(y,m,d-7,21)',
            end: 'dyndatetime(y,m,d-7,23)',
        }, {
            title: "Garbage Collection",
            start: 'dyndatetime(y,m,d+7,15)',
            end: 'dyndatetime(y,m,d+7,17)',
        }, {
            title: "Karaoke Night",
            start: 'dyndatetime(y,m,d+7,20)',
            end: 'dyndatetime(y,m,d+7,22)',
        }     
    ]), []);
    const [isToastOpen, setToastOpen] = React.useState<boolean>(false);
    
    const closeToast = React.useCallback(() => {
      setToastOpen(false);
    }, []); 

    const calView = React.useMemo<MbscEventcalendarView>(() => ({
        calendar: { type: 'week'},
        agenda: { type: 'week' }
    }), []);

    const displayToast = () => {
        setToastOpen(true);
    }
    
    const renderAgendaEmpty = React.useCallback<() => any>(() => {
        return <div class="md-empty-agenda-wrapper">
            <img src="https://img.mobiscroll.com/demos/smart-empty-tin-can.png" width="200" />
            <div class="md-bold"> Looks like this can is empty </div>
            <Button className="md-custom-agenda-btn" color="primary" variant="outline" 
                onClick={displayToast}>
                    Add something to it!
            </Button>
            <div class="md-illustration-description">Illustration by 
                <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a>
                from <a href="https://icons8.com/illustrations">Ouch!</a>
            </div>
        </div>;
    }, []);

    return (
        <Eventcalendar
            renderAgendaEmpty={renderAgendaEmpty}
            view={calView}
            data={myEvents}
        />
        <Toast 
            // theme
        	message={"Add button clicked!"}
        	isOpen={isToastOpen}
            onClose={closeToast}
        />
    ); 
}