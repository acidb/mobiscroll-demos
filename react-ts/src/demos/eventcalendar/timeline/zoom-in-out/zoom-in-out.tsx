import React from 'react';
import {
  Eventcalendar,
  CalendarNav,
  CalendarPrev,
  CalendarToday,
  CalendarNext,
  Button,
  setOptions,
  toast,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
} from '@mobiscroll/react';
import './zoom-in-out.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [view, setView] = React.useState<MbscEventcalendarView>({
    timeline: {
      type: 'day',
      size: 3,
      resolution: 'hour',
      timeCellStep: 360,
      timeLabelStep: 360,
    },
  });
  const [cssClass, setCssClass] = React.useState<string>('');
  const [zoom, setZoom] = React.useState<number>(7);
  const timerRef = React.useRef<any>(null);

  const myResources = React.useMemo<MbscResource[]>(() => {
    return [
      {
        id: 1,
        name: 'Resource A',
        color: '#e20000',
      },
      {
        id: 2,
        name: 'Resource B',
        color: '#76e083',
      },
      {
        id: 3,
        name: 'Resource C',
        color: '#4981d6',
      },
      {
        id: 4,
        name: 'Resource D',
        color: '#e25dd2',
      },
      {
        id: 5,
        name: 'Resource E',
        color: '#1dab2f',
      },
      {
        id: 6,
        name: 'Resource F',
        color: '#d6d145',
      },
    ];
  }, []);

  React.useEffect(() => {
    getJson(
      'https://trialdev.mobiscroll.com/big-timeline-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const changeView = React.useCallback(
    (step) => {
      let calView: MbscEventcalendarView;
      let toastText: string;
      let newRefDate: any;
      let cssClass = '';
      const newZoom = zoom + step;
      const viewDate = calRef.current.getViewDate();
      const oneDay = 60000 * 60 * 24;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      switch (newZoom) {
        case 9:
        default:
          // Multiple days, 30m resolution, 1h labels
          calView = {
            timeline: {
              type: 'day',
              size: 3,
              resolution: 'hour',
              timeCellStep: 30,
              timeLabelStep: 60,
            },
          };
          toastText = '30 minutes';
          newRefDate = new Date(viewDate - oneDay);
          break;
        case 8:
          // Multiple days, 3h resolution, 6h labels
          calView = {
            timeline: {
              type: 'day',
              size: 3,
              resolution: 'hour',
              timeCellStep: 180,
              timeLabelStep: 360,
            },
          };
          toastText = '3 hours';
          newRefDate = new Date(viewDate - oneDay);
          break;
        case 7:
          // Multiple days, 6h resolution
          calView = {
            timeline: {
              type: 'day',
              size: 3,
              resolution: 'hour',
              timeCellStep: 360,
              timeLabelStep: 360,
            },
          };
          toastText = '6 hours';
          newRefDate = new Date(viewDate - oneDay);
          break;
        case 6:
          // Multiple weeks, day resolution
          calView = {
            timeline: {
              type: 'week',
              size: 5,
              resolution: 'day',
            },
          };
          cssClass = 'column-large';
          toastText = 'Multiple days';
          newRefDate = new Date(viewDate - oneDay * 17);
          break;
        case 5:
          // Multiple weeks, day resolution - smaller width columns
          calView = {
            timeline: {
              type: 'week',
              size: 5,
              resolution: 'day',
            },
          };
          cssClass = 'column-medium';
          toastText = 'Medium column width';
          newRefDate = new Date(viewDate - oneDay * 17);
          break;
        case 4:
          // Multiple weeks, day resolution - even smaller width columns
          calView = {
            timeline: {
              type: 'week',
              size: 5,
              resolution: 'day',
            },
          };
          toastText = 'Small column width';
          newRefDate = new Date(viewDate - oneDay * 17);
          break;
        case 3:
          // Multiple weeks, week resolution
          calView = {
            timeline: {
              type: 'week',
              size: 5,
              resolution: 'week',
              // eventList: true
            },
          };
          toastText = 'Multiple weeks';
          newRefDate = new Date(viewDate - oneDay * 17);
          break;
        case 2:
          var currentDate = new Date(viewDate);
          // Multiple months, month resolution
          calView = {
            timeline: {
              type: 'month',
              size: 6,
              resolution: 'month',
              // eventList: true
            },
          };
          toastText = 'Multiple months';
          newRefDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 1);
          break;
        case 1:
          var currentDate = new Date(viewDate);
          // Multiple years, year resolution
          calView = {
            timeline: {
              type: 'year',
              size: 6,
              resolution: 'year',
              // eventList: true
            },
          };
          toastText = 'Multiple years';
          newRefDate = new Date(currentDate.getFullYear() - 2, 0, 1);
          break;
      }

      timerRef.current = setTimeout(() => {
        setZoom(newZoom);
        setView(calView);
        setRefDate(newRefDate);
        setCssClass(cssClass);
        toast({
          message: toastText,
        });
      }, 100);
    },
    [zoom],
  );

  const myCustomHeader = React.useCallback(() => {
    return (
      <React.Fragment>
        <CalendarNav />
        <div className="md-zoom-cont mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">
          <Button
            onClick={() => {
              changeView(1);
            }}
            disabled={zoom === 9}
            icon="material-zoom-in"
          />
          <Button
            onClick={() => {
              changeView(-1);
            }}
            disabled={zoom === 1}
            icon="material-zoom-out"
          />
        </div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </React.Fragment>
    );
  }, [changeView, zoom]);

  return (
    <Eventcalendar
      className="md-demo-zoom-in-out"
      ref={calRef}
      view={view}
      refDate={refDate}
      cssClass={cssClass}
      data={myEvents}
      resources={myResources}
      renderHeader={myCustomHeader}
    />
  );
};
