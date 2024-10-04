import { Eventcalendar, formatDate, getJson, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './timeline-resource-details-side-panel-footer.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const calRef = useRef();
  // const [loadedEvents, setLoadedEvents] = useState([]);
  const [myEvents, setEvents] = useState([]);
  const sortColumn = useRef('');
  const sortDirection = useRef('');
  const sortDay = useRef(null);
  const [totalRevenue, setTotalRevenue] = useState(0);

  const [myResources, setMyResources] = useState([
    { id: 1, name: 'Horizon', seats: 1200, color: '#4a4a4a', price: 1000 },
    { id: 2, name: 'Apex Hall', seats: 90, color: '#fdf500', price: 600 },
    { id: 3, name: 'Jade Room', seats: 700, color: '#00aaff', price: 900 },
    { id: 4, name: 'Dome Arena', seats: 850, color: '#239a21', price: 750 },
    { id: 5, name: 'Forum Plaza', seats: 900, color: '#8f1ed6', price: 700 },
    { id: 6, name: 'Gallery', seats: 300, color: '#0077b6', price: 650 },
    { id: 7, name: 'Icon Hall', seats: 450, color: '#e63946', price: 850 },
    { id: 8, name: 'Broadway', seats: 250, color: '#ff0101', price: 800 },
    { id: 9, name: 'Central Hub', seats: 400, color: '#01adff', price: 1100 },
    { id: 10, name: 'Empire Hall', seats: 550, color: '#ff4600', price: 950 },
  ]);

  const myView = useMemo(
    () => ({
      timeline: {
        type: 'month',
      },
    }),
    [],
  );

  const getUTCDateOnly = useCallback((d) => Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()), []);

  const getDayDiff = useCallback(
    (d1, d2) => Math.round((getUTCDateOnly(d2) - getUTCDateOnly(d1)) / (60000 * 60 * 24)) + 1,
    [getUTCDateOnly],
  );

  const getRevenue = useCallback(
    (resource) => {
      console.log('getRevenue');
      // let events = calRef.current ? calRef.current.getEvents() : myEvents;
      if (calRef.current) {
        let days = 0;
        // for (const event of loadedEvents) {
        for (const event of calRef.current.getEvents()) {
          // for (const event of myEvents) {
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

  const getSortArrow = useCallback((column, day) => {
    if (sortColumn.current === column && day === sortDay.current) {
      return sortDirection.current === 'asc' ? 'asc' : sortDirection.current === 'desc' ? 'desc' : 'def';
    }
    return 'def';
  }, []);

  const getBusyHours = useCallback(
    (resource, timestamp) => {
      if (timestamp === null) {
        return 0;
      }
      var startOfDay = new Date(timestamp);
      var endOfDay = new Date(startOfDay.getFullYear(), startOfDay.getMonth(), startOfDay.getDate() + 1);
      return myEvents.reduce((totalHours, event) => {
        if (event.resource === resource.id) {
          var eventStart = Math.max(+startOfDay, +new Date(event.start));
          var eventEnd = Math.min(+endOfDay, +new Date(event.end));
          return totalHours + (eventStart < eventEnd ? (eventEnd - eventStart) / (60 * 60 * 1000) : 0);
        }
        return totalHours;
      }, 0);
    },
    [myEvents],
  );

  const sortResources = useCallback(
    (column, day) => {
      if (column) {
        if (sortColumn.current === column && day === sortDay.current) {
          sortDirection.current = sortDirection.current === 'asc' ? 'desc' : sortDirection.current === 'desc' ? 'def' : 'asc';
        } else {
          sortColumn.current = column;
          sortDirection.current = 'asc';
        }
        sortDay.current = day;
      }

      let updatedResources = myResources;
      if (sortDay.current) {
        updatedResources = myResources.map((resource) => {
          const busyHours = getBusyHours(resource, day, myEvents);
          return {
            ...resource,
            busyHours: busyHours,
          };
        });
      }

      updatedResources = [...updatedResources].sort((a, b) => {
        if (sortDirection.current === 'asc') {
          return a[sortColumn.current] > b[sortColumn.current] ? 1 : -1;
        }
        if (sortDirection.current === 'desc') {
          return a[sortColumn.current] < b[sortColumn.current] ? 1 : -1;
        }
        return a.id - b.id;
      });

      setMyResources(updatedResources);
    },
    [getBusyHours, myEvents, myResources],
  );

  // const sortTest = useCallback(() => {
  //   let updatedResources = myResources;
  //   updatedResources = [...updatedResources].sort((a, b) => {
  //     if (sortDirection.current === 'asc') {
  //       return a[sortColumn.current] > b[sortColumn.current] ? 1 : -1;
  //     }
  //     if (sortDirection.current === 'desc') {
  //       return a[sortColumn.current] < b[sortColumn.current] ? 1 : -1;
  //     }
  //     return a.id - b.id;
  //   });

  //   setMyResources(updatedResources);
  // }, [myResources]);

  const refreshData = useCallback(() => {
    // setTimeout(() => {
    console.log(calRef);
    // setEvents(calRef.current.getEvents());
    // setLoadedEvents(calRef.current ? calRef.current.getEvents() : myEvents.current);
    // setLoadedEvents(calRef.current ? [...calRef.current.getEvents()] : [...myEvents.current]);

    myResources.forEach((resource) => {
      resource['revenue'] = getRevenue(resource);
    });
    setTotalRevenue(myResources.reduce((total, resource) => total + resource['revenue'], 0));
    // sortResources(); // infloop
    //  setTimeout(() => {
    //     sortResources();
    //     }, 1000);
    // }, 0);
  }, [getRevenue, myResources]);

  const myCustomResourceHeader = useCallback(
    () => (
      <>
        <div
          className={`mds-resource-sort-header mds-resource-cell mds-resource-cell-name mds-resource-sort-${getSortArrow('name')}`}
          onClick={() => sortResources('name')}
        >
          Room
        </div>
        <div
          className={`mds-resource-sort-header mds-resource-cell mds-resource-cell-seats mds-resource-sort-${getSortArrow('seats')}`}
          onClick={() => sortResources('seats')}
        >
          Capacity
        </div>
        <div
          className={`mds-resource-sort-header mds-resource-cell mds-resource-cell-price mds-resource-sort-${getSortArrow('price')}`}
          onClick={() => sortResources('price')}
        >
          Price/day
        </div>
      </>
    ),
    [getSortArrow, sortResources],
  );

  const myCustomResource = useCallback(
    (resource) => (
      <>
        <div className="mds-resource-cell mds-resource-cell-name">{resource.name}</div>
        <div className="mds-resource-cell mds-resource-cell-seats">{resource.seats} seats</div>
        <div className="mds-resource-cell mds-resource-cell-price">{'$' + resource.price}</div>
      </>
    ),
    [],
  );

  const myCustomResourceFooter = useCallback(
    () => <div className="mds-resource-details-footer mds-resource-details-occuppancy">Occuppancy</div>,
    [],
  );

  const myCustomDay = useCallback(
    (data) => {
      const day = data.date.getTime();

      return (
        <div
          className={`mds-resource-sort-header mds-resource-sort-${getSortArrow('busyHours', day)}`}
          onClick={() => sortResources('busyHours', day)}
        >
          <span>{formatDate('D DDD', data.date)}</span>
        </div>
      );
    },
    [getSortArrow, sortResources],
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

  const myCustomSidebarHeader = useCallback(
    () => (
      <div className={`mds-resource-sort-header mds-resource-sort-${getSortArrow('revenue')}`} onClick={() => sortResources('revenue')}>
        Revenue
      </div>
    ),
    [getSortArrow, sortResources],
  );

  const myCustomSidebar = useCallback((resource) => <div className="mds-resource-cell">{'$' + resource.revenue}</div>, []);

  const myCustomSidebarFooter = useCallback(
    () => <div className="mds-resource-details-footer mds-resource-details-total">{'$' + totalRevenue}</div>,
    [totalRevenue],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/multiday-events/',
      (events) => {
        setEvents(events);
        refreshData();
      },
      'jsonp',
    );
  }, [refreshData]);

  return (
    <Eventcalendar
      cssClass="mds-resource-details"
      clickToCreate={true}
      data={myEvents}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
      ref={calRef}
      resources={myResources}
      renderResourceHeader={myCustomResourceHeader}
      renderResource={myCustomResource}
      renderSidebarHeader={myCustomSidebarHeader}
      renderSidebar={myCustomSidebar}
      renderResourceFooter={myCustomResourceFooter}
      renderDay={myCustomDay}
      renderDayFooter={myCustomDayFooter}
      renderSidebarFooter={myCustomSidebarFooter}
      onPageLoading={refreshData}
      onEventCreated={() => {
        // setTimeout(() => {
        refreshData();
        // }, 1000);

        // event dissapear, the sort part, because -> setMyResources(updatedResources); ?!
        // setTimeout(() => {
        // sortResources();
        // }, 1000);
        // sortTest();
      }}
      onEventDeleted={() => {
        refreshData();
        // sortResources();
      }}
      onEventUpdated={() => {
        refreshData();
        // sortResources();
      }}
      view={myView}
    />
  );
}

export default App;
