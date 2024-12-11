import { getJson } from '@mobiscroll/react';
import { Button, CalendarNav, CalendarNext, CalendarPrev, CalendarToday, Eventcalendar, Page, setOptions } from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import './calendar-zoom.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const calRef = useRef();
  const [refDate, setRefDate] = useState(new Date(+new Date() - 10 * 24 * 60 * 60 * 1000));
  const [zoomLevel, setZoomLevel] = useState(4);
  const [myEvents, setEvents] = useState([]);

  const myResources = useMemo(
    () => [
      { color: '#e20000', id: 1, name: 'Resource A' },
      { color: '#76e083', id: 2, name: 'Resource B' },
      { color: '#4981d6', id: 3, name: 'Resource C' },
      { color: '#e25dd2', id: 4, name: 'Resource D' },
      { color: '#1dab2f', id: 5, name: 'Resource E' },
      { color: '#d6d145', id: 6, name: 'Resource F' },
    ],
    [],
  );

  const myView = useMemo(
    () => ({
      timeline: {
        currentTimeIndicator: true,
        zoomLevels: {
          [-4]: { type: 'year', size: 9, resolutionHorizontal: 'year' },
          [-3]: { type: 'month', size: 12, resolutionHorizontal: 'month' },
          [-2]: { type: 'week', size: 9, resolutionHorizontal: 'week' },
          [-1]: { type: 'week', size: 5, resolutionHorizontal: 'day' },
          0: { type: 'week', size: 5, resolutionHorizontal: 'day', columnWidth: 'large' },
          1: { type: 'week', size: 5, resolutionHorizontal: 'day', columnWidth: 'xlarge' },
          2: { type: 'day', size: 5, resolutionHorizontal: 'hour', timeCellStep: 360, timeLabelStep: 360 },
          3: { type: 'day', size: 3, resolutionHorizontal: 'hour', timeCellStep: 180, timeLabelStep: 360 },
          4: { type: 'day', size: 3, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 60 },
        },
      },
    }),
    [],
  );

  const handleZoom = useCallback(
    (zoom) => {
      const newZoomLevel = zoomLevel + zoom;
      const viewDate = calRef.current?.getViewDate() || new Date();

      const newRefDateMap = {
        [-4]: new Date(viewDate.getFullYear() - 4, 0, 1),
        [-3]: new Date(viewDate.getFullYear(), viewDate.getMonth() - 5, 1),
        [-2]: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 28),
        [-1]: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 14),
        0: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 14),
        1: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 14),
        2: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 2),
        3: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 1),
        4: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 1),
      };

      setZoomLevel(newZoomLevel);
      setRefDate(newRefDateMap[newZoomLevel]);
    },
    [calRef, zoomLevel],
  );

  const myCustomHeader = useCallback(
    () => (
      <>
        <CalendarNav />
        <div className="md-zoom-cont mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">
          <Button onClick={() => handleZoom(1)} disabled={zoomLevel === 4} icon="material-zoom-in" />
          <Button variant="flat">{zoomLevel}</Button>
          <Button onClick={() => handleZoom(-1)} disabled={zoomLevel === -4} icon="material-zoom-out" />
        </div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </>
    ),
    [handleZoom, zoomLevel],
  );

  useEffect(() => {
    getJson('https://trial.mobiscroll.com/timeline-events/', (events) => setEvents(events), 'jsonp');
  }, []);

  return (
    <Page>
      <Eventcalendar
        ref={calRef}
        view={myView}
        data={myEvents}
        resources={myResources}
        refDate={refDate}
        zoomLevel={zoomLevel}
        dragToCreate={true}
        renderHeader={myCustomHeader}
      />
    </Page>
  );
}

export default App;
