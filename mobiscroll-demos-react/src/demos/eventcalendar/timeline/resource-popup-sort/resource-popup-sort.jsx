import { Button, Eventcalendar, CalendarNav, CalendarPrev, CalendarNext, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useMemo, useRef, useState } from 'react';
import './resource-popup-sort.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const myView = useMemo(() => ({ timeline: { type: 'month' } }), []);

  const myResources = useMemo(
    () => [
      { id: 1, name: 'NY-TRK-1200', capacity: 25, location: 'New York', model: 'Renault Magnum' },
      { id: 2, name: 'LA-TRK-0090', capacity: 18, location: 'Los Angeles', model: 'Mercedes Actros' },
      { id: 3, name: 'CH-TRK-0700', capacity: 22, location: 'Phoenix', model: 'Scania R500' },
      { id: 4, name: 'HO-TRK-0850', capacity: 28, location: 'Houston', model: 'Volvo FH16' },
      { id: 5, name: 'PH-TRK-0900', capacity: 24, location: 'Chicago', model: 'MAN TGX' },
      { id: 6, name: 'PA-TRK-0300', capacity: 15, location: 'Philadelphia', model: 'Renault T High' },
      { id: 8, name: 'SD-TRK-0250', capacity: 12, location: 'San Francisco', model: 'Mercedes Arocs' },
      { id: 9, name: 'DA-TRK-0400', capacity: 20, location: 'Dallas', model: 'DAF XF' },
      { id: 10, name: 'SF-TRK-0550', capacity: 17, location: 'San Diego', model: 'Iveco Stralis' },
      { id: 11, name: 'BO-TRK-1100', capacity: 23, location: 'Boston', model: 'Kenworth T680' },
      { id: 12, name: 'LV-TRK-2200', capacity: 30, location: 'Las Vegas', model: 'Volvo FH16' },
      { id: 13, name: 'MI-TRK-3300', capacity: 26, location: 'Miami', model: 'Peterbilt 579' },
      { id: 14, name: 'SE-TRK-4400', capacity: 16, location: 'Seattle', model: 'Mack Anthem' },
      { id: 15, name: 'AT-TRK-5500', capacity: 19, location: 'Atlanta', model: 'Renault Magnum' },
    ],
    [],
  );

  const myEvents = [
    {
      start: 'dyndatetime(y,m,d-1)',
      end: 'dyndatetime(y,m,d+3)',
      title: 'Tour #013 - Miami to Seattle',
      resource: 1,
      color: '#FF9933',
      payload: 25,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+1)',
      end: 'dyndatetime(y,m,d+3)',
      title: 'Tour #014 - Denver to Boston',
      resource: 2,
      color: '#33FFA6',
      payload: 18,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+3)',
      title: 'Tour #015 - Orlando to Austin',
      resource: 3,
      color: '#9933FF',
      payload: 20,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+1)',
      end: 'dyndatetime(y,m,d+4)',
      title: 'Tour #016 - Detroit to Baltimore',
      resource: 4,
      color: '#33A6FF',
      payload: 0,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+2)',
      end: 'dyndatetime(y,m,d+5)',
      title: 'Tour #017 - Las Vegas to Portland',
      resource: 5,
      color: '#FF5733',
      payload: 20,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+2)',
      end: 'dyndatetime(y,m,d+5)',
      title: 'Tour #018 - Atlanta to Kansas City',
      resource: 6,
      color: '#33FF99',
      payload: 0,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d-4,11)',
      end: 'dyndatetime(y,m,d)',
      title: 'Tour #018 - ? to Atlanta',
      resource: 6,
      color: '#33FF99',
      payload: 14,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+4)',
      title: 'Tour #019 - Charlotte to Indianapolis',
      resource: 7,
      color: '#FF5733',
      payload: 22,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #005 - Dallas to San Francisco',
      resource: 7,
      color: '#FF5733',
      payload: 18,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+4)',
      end: 'dyndatetime(y,m,d+6)',
      title: 'Tour #001 - New York to Los Angeles',
      resource: 7,
      color: '#FF5733',
      payload: 20,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #009 - San Diego to Dallas',
      resource: 7,
      color: '#FF5733',
      payload: 16,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+4)',
      end: 'dyndatetime(y,m,d+6)',
      title: 'Tour #006 - Los Angeles to Chicago',
      resource: 8,
      color: '#FF33A6',
      payload: 10,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d-2)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #010 - San Francisco to Los Angeles',
      resource: 8,
      color: '#FF33A6',
      payload: 0,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+3)',
      end: 'dyndatetime(y,m,d+6)',
      title: 'Tour #007 - Houston to New York',
      resource: 9,
      color: '#33FF57',
      payload: 0,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #003 - Philadelphia to Phoenix',
      resource: 9,
      color: '#33FF57',
      payload: 0,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d-4)',
      end: 'dyndatetime(y,m,d-1)',
      title: 'Tour #028 - ? to Philadelphiax',
      resource: 9,
      color: '#33FF57',
      payload: 11,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d-4)',
      end: 'dyndatetime(y,m,d+1)',
      title: 'Tour #004 - San Antonio to San Diego',
      resource: 10,
      color: '#3357FF',
      payload: 15,
      overlap: false,
    },

    {
      start: 'dyndatetime(y,m,d+3)',
      end: 'dyndatetime(y,m,d+6)',
      title: 'Tour #022 - Cleveland to Cincinnati',
      resource: 10,
      color: '#3357FF',
      payload: 17,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d-4)',
      end: 'dyndatetime(y,m,d+1)',
      title: 'Tour #023 - Boston to Philadelphia',
      resource: 11,
      color: '#FF9933',
      payload: 19,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #024 - Las Vegas to San Diego',
      resource: 12,
      color: '#33FF57',
      payload: 28,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d-3)',
      end: 'dyndatetime(y,m,d)',
      title: 'Tour #025 - Miami to Charlotte',
      resource: 13,
      color: '#9933FF',
      payload: 26,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+2)',
      end: 'dyndatetime(y,m,d+5)',
      title: 'Tour #026 - Seattle to Portland',
      resource: 14,
      color: '#33A6FF',
      payload: 12,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d-1)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #027 - Atlanta to Orlando',
      resource: 15,
      color: '#FF5733',
      payload: 17,
      overlap: false,
    },
  ];

  const [sortedResources, setResources] = useState(myResources);

  const calRef = useRef();
  const initialSortColumn = useRef('');
  const initialSortDirection = useRef('');
  const sortColumn = useRef('');
  const sortDirection = useRef('');
  const loadedEvents = useRef([]);
  const selectedMetric = 'standby';
  const selectedMetricDesc = 'Standby Time';

  const sortResources = useCallback(() => {
    const updatedResources = [...myResources].sort((a, b) => {
      if (sortDirection.current === 'asc') {
        return a[sortColumn.current] > b[sortColumn.current] ? 1 : -1;
      }
      if (sortDirection.current === 'desc') {
        return a[sortColumn.current] < b[sortColumn.current] ? 1 : -1;
      }
      return a.id - b.id;
    });

    setResources(updatedResources);
  }, [myResources]);

  const refreshData = useCallback(() => {
    loadedEvents.current = calRef.current ? calRef.current.getEvents() : [];
  }, []);

  const handlePageLoading = useCallback(() => {
    refreshData();
  }, [refreshData]);

  const handleEventChange = useCallback(() => {
    refreshData();
    sortResources();
  }, [refreshData, sortResources]);

  const myCustomResourceHeader = useCallback(
    () => (
      <>
        <div className="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-name">Truck</div>
        <div className="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-custom">{selectedMetricDesc}</div>
      </>
    ),
    [selectedMetricDesc],
  );

  const myCustomResource = useCallback(
    (resource) => {
      // refactor use template syntax
      const metricValue = resource[selectedMetric];

      let barValue;
      if (selectedMetric === 'payload') {
        barValue = metricValue;
      } else if (['standby', 'deadhead'].includes(selectedMetric)) {
        barValue = (metricValue / 168) * 100;
      } else {
        barValue = 100;
      }

      let barColorClass;
      if (barValue <= 33) {
        barColorClass = 'green-bar';
      } else if (barValue <= 66) {
        barColorClass = 'yellow-bar';
      } else {
        barColorClass = 'red-bar';
      }

      return (
        <>
          <div className="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-name">
            <strong>{resource.name}</strong>
            <div style={{ fontSize: '12px', color: '#666' }}>Model: {resource.model || 'N/A'}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>Capacity: {resource.capacity}T</div>
          </div>
          <div className="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-custom">
            <div className="metric-value" style={{ marginTop: '10px' }}>
              {metricValue}
              {selectedMetric === 'payload' ? '%' : ['standby', 'deadhead'].includes(selectedMetric) ? 'h' : ''}
            </div>
            <div className="metric-bar-container">
              <div className={`metric-bar ${barColorClass}`} style={{ width: `${barValue}%` }}></div>
            </div>
          </div>
        </>
      );
    },
    [selectedMetric],
  );

  const myCustomHeader = useCallback(
    () => (
      <>
        <CalendarPrev />
        <CalendarNav />
        <CalendarNext />
        <Button style={{ marginLeft: 'auto' }}>Calculate & Sort</Button>
      </>
    ),
    [],
  );

  return (
    <Eventcalendar
      cssClass="mds-timeline-popup-sort"
      clickToCreate={true}
      data={myEvents}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
      ref={calRef}
      resources={sortedResources}
      renderResourceHeader={myCustomResourceHeader}
      renderResource={myCustomResource}
      renderHeader={myCustomHeader}
      onPageLoading={handlePageLoading}
      onEventCreated={handleEventChange}
      onEventDeleted={handleEventChange}
      onEventUpdated={handleEventChange}
      view={myView}
    />
  );
}

export default App;
