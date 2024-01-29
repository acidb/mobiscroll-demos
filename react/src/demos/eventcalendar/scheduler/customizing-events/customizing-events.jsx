import { useEffect, useState, useCallback } from 'react';
import { Eventcalendar, getJson, Toast, Button, setOptions /* localeImport */ } from '@mobiscroll/react';
import './customizing-events.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState([]);
  const [isToastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    getJson(
      'https://trial.dev.mobiscroll.com/multi-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const [resp, setResp] = useState({
    xsmall: {
      view: {
        schedule: {
          type: 'day',
        },
      },
    },
    medium: {
      view: {
        schedule: {
          type: 'week',
        },
      },
    },
  });

  const closeToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const getCategory = (id) => {
    switch (id) {
      case 1:
        return {
          name: 'Project X',
          color: '#ff825d',
        };
      case 2:
        return {
          name: 'Stakeholder Mtg.',
          color: '#bd75d0',
        };
      case 3:
        return {
          name: 'Status Update',
          color: '#7f9230',
        };
      case 4:
        return {
          name: 'Information Sharing',
          color: '#f14590',
        };
      case 5:
        return {
          name: 'Team Building',
          color: '#64cad4',
        };
      default:
        return {
          name: 'No category',
          color: '#5ac8fa',
        };
    }
  };

  const getParticipant = (id) => {
    switch (id) {
      case 1:
        return {
          name: 'Lisa',
          img: 'https://img.mobiscroll.com/demos/f1.png',
        };
      case 2:
        return {
          name: 'Sharon',
          img: 'https://img.mobiscroll.com/demos/f2.png',
        };
      case 3:
        return {
          name: 'Emily',
          img: 'https://img.mobiscroll.com/demos/f3.png',
        };
      case 4:
        return {
          name: 'Rose',
          img: 'https://img.mobiscroll.com/demos/f4.png',
        };
      case 5:
        return {
          name: 'Matt',
          img: 'https://img.mobiscroll.com/demos/m1.png',
        };
      case 6:
        return {
          name: 'Rick',
          img: 'https://img.mobiscroll.com/demos/m2.png',
        };
      case 7:
        return {
          name: 'John',
          img: 'https://img.mobiscroll.com/demos/m3.png',
        };
      case 8:
        return {
          name: 'Ethan',
          img: 'https://img.mobiscroll.com/demos/m4.png',
        };
    }
  };

  const edit = () => {
    setToastOpen(true);
  };

  const renderScheduleEvent = useCallback((data) => {
    const cat = getCategory(data.original.category);
    if (data.allDay) {
      return (
        <div style={{ background: cat.color }} className="md-custom-event-allday-title">
          {data.title}
        </div>
      );
    } else {
      return (
        <div className="md-custom-event-cont" style={{ borderLeft: '5px solid ' + cat.color, background: cat.color }}>
          <div className="md-custom-event-wrapper">
            <div style={{ background: cat.color }} className="md-custom-event-category">
              {cat.name}
            </div>
            <div className="md-custom-event-details">
              <div className="md-custom-event-title">{data.title}</div>
              <div className="md-custom-event-time">
                {data.start} - {data.end}
              </div>
              <Button className="md-custom-event-btn" color="dark" variant="outline" onClick={edit}>
                Edit
              </Button>
              <div className="md-cutom-event-img-cont">
                {data.original.participants &&
                  data.original.participants.map(function (p) {
                    return <img key={p} className="md-custom-event-img" src={getParticipant(p).img} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }, []);

  const myBeforeBuffer = useCallback((args) => {
    var cat = getCategory(args.original.category);

    return (
      <div className="md-schedule-buffer md-schedule-before-buffer">
        <div className=' md-schedule-buffer-background' style={{ background: cat.color }}></div>
        Travel time: <span className='md-buffer-time'>{args.original.bufferBefore} min</span>
      </div>
    );
  }, []);

  const myAfterBuffer = useCallback((args) => {
    var cat = getCategory(args.original.category);

    return (
      <div className="md-schedule-buffer md-schedule-after-buffer" style={{ background: cat.color }}></div>
    );
  }, []);


  return (
    <div>
      <Eventcalendar
        dragToMove={true}
        renderScheduleEvent={renderScheduleEvent}
        renderBufferAfter={myAfterBuffer}
        renderBufferBefore={myBeforeBuffer}
        responsive={resp} 
        data={myEvents} 
      />
      <Toast
        // theme
        message="Edit clicked"
        isOpen={isToastOpen}
        onClose={closeToast}
      />
    </div>
  );
}

export default App;
