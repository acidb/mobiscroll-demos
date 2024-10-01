import { Eventcalendar, formatDate, getJson, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './timeline-resource-details-side-panel-footer.css';

setOptions({
  // localeJs,
  // themeJs
});

const oneDay = 60000 * 60 * 24;

function App() {
  const [myEvents, setEvents] = useState([]);
  const [sortColumn, setSortColumn] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [tempDay, setTempDay] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const calRef = useRef();

  const myView = useMemo(
    () => ({
      timeline: {
        type: 'month',
      },
    }),
    [],
  );

  const [myResources, setMyResources] = useState([
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
  ]);

  const getUTCDateOnly = useCallback((d) => Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()), []);

  const getDayDiff = useCallback((d1, d2) => Math.round((getUTCDateOnly(d2) - getUTCDateOnly(d1)) / oneDay) + 1, [getUTCDateOnly]);

  const getRevenue = useCallback(
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

  const handleSortClick = useCallback((event) => {
    const sortColumn = event.currentTarget.getAttribute('data-sort');
    const selectedDay = event.currentTarget.getAttribute('data-day');

    setSortColumn(sortColumn);
    setSelectedDay(selectedDay);

    sortResources(sortColumn, selectedDay);
    console.log('-> handleSortClick( sortColumn:', sortColumn, ', selectedDay:', selectedDay, ')');
  }, []);

  const getSortArrow = useCallback((column, day) => {
    if (sortColumn === column && day === tempDay) {
      return sortDirection === 'asc' ? 'asc' : sortDirection === 'desc' ? 'desc' : 'def';
    }
    return 'def';
  });

  const sortResources = (column, day) => {
    console.log('-> sortResources( column:', column, ', day:', day, ')');
    console.log('sortColumn:', sortColumn);

    if (sortColumn === column && day === tempDay) {
      setSortDirection((sortDirection) => (sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'def' : 'asc'));
      console.log('sortColumn === column && day === tempDay');
    } else {
      console.log('else');
      setSortColumn(column);
      setSortDirection('asc');
    }
    setTempDay(day);

    const updatedResources = myResources.map((resource) => ({
      ...resource,
      busyHours: getBusyHours(resource, day) - 24,
    }));

    updatedResources.sort((a, b) => {
      if (sortDirection === 'asc') {
        return a[column] > b[column] ? 1 : -1;
      }
      if (sortDirection === 'desc') {
        return a[column] < b[column] ? 1 : -1;
      }
      return a.id - b.id;
    });
    setMyResources(updatedResources);
  };

  const myCustomRenderDay = useCallback(
    (data) => {
      const day = data.date.getTime();

      return (
        <div
          className={`mds-date-header-day-name mds-resource-sort-${getSortArrow('busyHours', day)}`}
          data-sort="busyHours"
          data-day={day}
          onClick={handleSortClick}
        >
          <span>{formatDate('DD DDD', data.date)}</span>
        </div>
      );
    },
    [getSortArrow, handleSortClick],
  );

  function getBusyHours(resource, startOfDay) {
    var endOfDay = startOfDay + 86400000;
    return myEvents.reduce((total, event) => {
      if (event.resource === resource.id) {
        var eventStart = Math.max(startOfDay, new Date(event.start).getTime());
        var eventEnd = Math.min(endOfDay, new Date(event.end).getTime());
        return eventStart < eventEnd ? total + (eventEnd - eventStart) / (1000 * 60 * 60) : total;
      }
      return total;
    }, 0);
  }

  const getTotal = useCallback(() => {
    let total = 0;
    for (const resource of myResources) {
      total += getRevenue(resource);
    }
    return total;
  }, [getRevenue, myResources]);

  const myCustomResourceHeader = useCallback(
    () => (
      <div className="mds-resource-details-title">
        <div
          className={`mds-resource-header mds-resource-details-name mds-resource-sort-${getSortArrow('name')}`}
          data-sort="name"
          onClick={handleSortClick}
        >
          Room
        </div>
        <div
          className={`mds-resource-header mds-resource-details-seats mds-resource-sort-${getSortArrow('seats')}`}
          data-sort="seats"
          onClick={handleSortClick}
        >
          Capacity
        </div>
        <div
          className={`mds-resource-header mds-resource-details-price mds-resource-sort-${getSortArrow('price')}`}
          data-sort="price"
          onClick={handleSortClick}
        >
          Price/day
        </div>
      </div>
    ),
    [getSortArrow, handleSortClick],
  );

  const myCustomResource = useCallback(
    (resource) => (
      <div className="mds-resource-details-cont">
        <div className="mds-resource-header mds-resource-details-name">{resource.name}</div>
        <div className="mds-resource-header mds-resource-details-seats">{resource.seats} seats</div>
        <div className="mds-resource-header mds-resource-details-price">{'$' + resource.price}</div>
      </div>
    ),
    [],
  );

  const myCustomSidebarHeader = useCallback(
    () => (
      <div
        className={`mds-resource-details-sidebar-header mds-resource-sort-${getSortArrow('revenue')}`}
        data-sort="revenue"
        onClick={handleSortClick}
      >
        Revenue
      </div>
    ),
    [getSortArrow, handleSortClick],
  );

  const myCustomSidebar = useCallback(
    (resource) => <div className="mds-resource-details-sidebar">{'$' + getRevenue(resource)}</div>,
    [getRevenue],
  );

  const myCustomResourceFooter = useCallback(
    () => <div className="mds-resource-details-footer mds-resource-details-occuppancy">Occuppancy</div>,
    [],
  );

  const myCustomDayFooter = useCallback(
    (data) => {
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
      return <div className="mds-resource-details-footer mds-resource-details-footer-day">{occuppancy + '%'}</div>;
    },
    [myEvents, myResources.length],
  );

  const myCustomSidebarFooter = useCallback(
    () => <div className="mds-resource-details-footer mds-resource-details-total">{'$' + getTotal()}</div>,
    [getTotal],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/multiday-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      // drag
      ref={calRef}
      view={myView}
      data={myEvents}
      resources={myResources}
      cssClass="mds-resource-details"
      renderResourceHeader={myCustomResourceHeader}
      renderResource={myCustomResource}
      renderSidebarHeader={myCustomSidebarHeader}
      renderSidebar={myCustomSidebar}
      renderResourceFooter={myCustomResourceFooter}
      renderDay={myCustomRenderDay}
      renderDayFooter={myCustomDayFooter}
      renderSidebarFooter={myCustomSidebarFooter}
    />
  );
}

export default App;
