import React from 'react';
import { Eventcalendar, toast, getJson /* localeImport */ } from '@mobiscroll/react';
import './timeline-resource-details-side-panel-footer.css';

const oneDay = 60000 * 60 * 24;

function App() {
  const [myEvents, setEvents] = React.useState([]);
  const calRef = React.useRef();

  const view = React.useMemo(() => {
    return {
      timeline: {
        type: 'month',
      },
    };
  }, []);

  const myResources = React.useMemo(() => {
    return [
      {
        id: 1,
        name: 'Flatiron Room',
        seats: 90,
        color: '#fdf500',
        price: 600,
      },
      {
        id: 2,
        name: 'The Capital City',
        seats: 250,
        color: '#ff0101',
        price: 800,
      },
      {
        id: 3,
        name: 'Heroes Square',
        seats: 400,
        color: '#01adff',
        price: 1100,
      },
      {
        id: 4,
        name: 'Hall of Faces',
        seats: 850,
        color: '#239a21',
        price: 750,
      },
      {
        id: 5,
        name: 'King’s Landing',
        seats: 550,
        color: '#ff4600',
        price: 950,
      },
      {
        id: 6,
        name: 'Gathering Field',
        seats: 900,
        color: '#8f1ed6',
        price: 700,
      },
    ];
  }, []);

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/multiday-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const getUTCDateOnly = React.useCallback((d) => {
    return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
  }, []);

  const getDayDiff = React.useCallback(
    (d1, d2) => {
      return Math.round((getUTCDateOnly(d2) - getUTCDateOnly(d1)) / oneDay) + 1;
    },
    [getUTCDateOnly],
  );

  const getRevenue = React.useCallback(
    (resource) => {
      if (calRef.current) {
        let days = 0;
        for (const event of calRef.current.getEvents()) {
          if (event.resource === resource.id) {
            days += getDayDiff(new Date(event.start), new Date(event.end));
          }
        }
        return days * resource.price;
      } else {
        return 0;
      }
    },
    [getDayDiff],
  );

  const getTotal = React.useCallback(() => {
    let total = 0;
    for (const resource of myResources) {
      total += getRevenue(resource);
    }
    return total;
  }, [getRevenue, myResources]);

  const myCustomResourceHeader = () => {
    return (
      <div className="md-resource-details-title">
        <div className="md-resource-header md-resource-details-name">Room</div>
        <div className="md-resource-header md-resource-details-seats">Capacity</div>
        <div className="md-resource-header md-resource-details-price">Price</div>
      </div>
    );
  };

  const myCustomResource = (resource) => {
    return (
      <div className="md-resource-details-cont">
        <div className="md-resource-header md-resource-details-name">{resource.name}</div>
        <div className="md-resource-header md-resource-details-seats">{resource.seats} seats</div>
        <div className="md-resource-header md-resource-details-price">{'$' + resource.price}</div>
      </div>
    );
  };

  const myCustomSidebarHeader = () => {
    return <div className="md-resource-details-sidebar-header">Revenue</div>;
  };

  const myCustomSidebar = (resource) => {
    return <div className="md-resource-details-sidebar">{'$' + getRevenue(resource)}</div>;
  };

  const myCustomResourceFooter = () => {
    return <div className="md-resource-details-footer md-resource-details-occuppancy">Occuppancy</div>;
  };

  const myCustomDayFooter = (data) => {
    const events = data.events;
    let occuppancy = 0;
    if (events) {
      var resourceIds = [];
      var nr = 0;
      for (const event of myEvents) {
        if (resourceIds.indexOf(event.resource) < 0) {
          nr++;
          resourceIds = [...resourceIds, event.resource];
        }
      }
      occuppancy = ((nr * 100) / myResources.length).toFixed(0);
    }
    return <div className="md-resource-details-footer md-resource-details-footer-day">{occuppancy + '%'}</div>;
  };

  const myCustomSidebarFooter = () => {
    return <div className="md-resource-details-footer md-resource-details-total">{'$' + getTotal()}</div>;
  };

  return (
    <Eventcalendar
      // theme
      // locale
      ref={calRef}
      view={view}
      data={myEvents}
      resources={myResources}
      cssClass="md-resource-details"
      renderResourceHeader={myCustomResourceHeader}
      renderResource={myCustomResource}
      renderSidebarHeader={myCustomSidebarHeader}
      renderSidebar={myCustomSidebar}
      renderResourceFooter={myCustomResourceFooter}
      renderDayFooter={myCustomDayFooter}
      renderSidebarFooter={myCustomSidebarFooter}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
