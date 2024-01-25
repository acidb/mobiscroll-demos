import {
  Eventcalendar,
  getJson,
  Toast,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscCalendarEventData /* localeImport */,
} from '@mobiscroll/react';
import React from 'react';
import './customize-label-look-and-feel.css';

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = React.useState<boolean>(false);
  const [toastText, setToastText] = React.useState<string>();

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { labels: true },
    }),
    [],
  );

  const renderLabel = React.useCallback<(data: MbscCalendarEventData) => any>((data: MbscCalendarEventData) => {
    const original = data.original!;
    if (data.isMultiDay) {
      return (
        <div style={{ background: original.color }} className="multi-day-event">
          {original!.title}
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="single-day-event-dot" style={{ background: original.color }}></div>
          <div className="single-day-event">{original.title}</div>
        </React.Fragment>
      );
    }
  }, []);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  const onEventClick = React.useCallback((event: MbscEventClickEvent) => {
    setToastText(event.event.title);
    setToastOpen(true);
  }, []);

  return (
    <div>
      <Eventcalendar
        // theme
        // locale
        // drag
        renderLabel={renderLabel}
        data={myEvents}
        view={view}
        onEventClick={onEventClick}
      />
      <Toast message={toastText} isOpen={isToastOpen} onClose={closeToast} />
    </div>
  );
};
export default App;
