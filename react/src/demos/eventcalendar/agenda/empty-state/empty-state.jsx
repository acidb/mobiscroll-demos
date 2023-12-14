import React from 'react';
import { Button, Eventcalendar, setOptions, Toast/* localeImport */ } from '@mobiscroll/react';



setOptions({
    // localeJs,
    // themeJs
});

function App() {
    const myEvents = React.useMemo(() => ([
        {   
            title: 'Zumba Class',
            start: 'dyndatetime(y,m,d-7,17)',
            end: 'dyndatetime(y,m,d-7,19)',
        }, {
            title: 'Silent Party',
            start: 'dyndatetime(y,m,d-7,21)',
            end: 'dyndatetime(y,m,d-7,23)',
        }, {
            title: 'Garbage Collection',
            start: 'dyndatetime(y,m,d+7,15)',
            end: 'dyndatetime(y,m,d+7,17)',
        }, {
            title: 'Karaoke Night',
            start: 'dyndatetime(y,m,d+7,20)',
            end: 'dyndatetime(y,m,d+7,22)',
        }    
    ]), []);
    
    const [isToastOpen, setToastOpen] = React.useState(false);

    const calView = React.useMemo(() => ({
        calendar: { type: 'week' },
        agenda: { type: 'week'}
    }), []);
    
    const displayToast = React.useCallback(() => {
        setToastOpen(true);
    }, []);
    
    const closeToast = React.useCallback(() => {
        setToastOpen(false);
    }, []); 
    
    const renderAgendaEmpty = React.useCallback(() => {
        return <div className="mbsc-align-center mbsc-padding">
            <img src="https://img.mobiscroll.com/demos/smart-empty-tin-can.png" alt="Empty can" style={{ width: 150, margin: '50px 0' }} />
            <div className="mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">Looks like this can is empty</div>
            <Button color="primary" variant="outline" onClick={displayToast}>
                Add something to it
            </Button>
            <div className="mbsc-txt-xs" style={{ paddingTop: 150 }}>Illustration by
                &nbsp;<a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a>
                &nbsp;from&nbsp;<a href="https://icons8.com/illustrations">Ouch!</a>
            </div>
        </div>;
    });

    return (
        <Eventcalendar
            renderAgendaEmpty={renderAgendaEmpty}
            view={calView}
            data={myEvents}
        />
        <Toast
        	message="Add button clicked"
        	isOpen={isToastOpen}
            onClose={closeToast}
        />
    ); 
}


export default App;