import React from 'react';
import {
  Eventcalendar,
  Button,
  getJson,
  setOptions,
  Toast,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscCalendarEventData /* localeImport */,
} from '@mobiscroll/react';
import './event-content-customization.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = React.useState<boolean>(false);
  const [toastText, setToastText] = React.useState<string>();

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/custom-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  const [calView, setCalView] = React.useState<MbscEventcalendarView>({
    calendar: { type: 'week' },
    agenda: { type: 'day' },
  });

  const getParticipant = (id: number) => {
    switch (id) {
      case 1:
        return {
          img: 'https://img.mobiscroll.com/demos/m1.png',
          name: 'Barry L.',
        };
      case 2:
        return {
          img: 'https://img.mobiscroll.com/demos/f1.png',
          name: 'Hortense T.',
        };
      case 3:
        return {
          img: 'https://img.mobiscroll.com/demos/m2.png',
          name: 'Carl H.',
        };
      default:
        return {
          img: '',
          name: '',
        };
    }
  };

  const add = (ev: any, data: MbscCalendarEvent) => {
    setToastText(data.title + ' clicked');
    setToastOpen(true);
  };

  const renderEventContent = React.useCallback<(data: MbscCalendarEventData) => any>((data: MbscCalendarEventData) => {
    const original = data.original!;
    return (
      <React.Fragment>
        <div>{data.title}</div>
        <div className="md-custom-event-cont">
          <img className="md-custom-event-img" src={getParticipant(original.participant).img} />
          <div className="mbsc-custom-event-name">{getParticipant(original.participant).name}</div>
          <Button className="md-custom-event-btn" color="secondary" variant="outline" onClick={(domEvent: any) => add(domEvent, original)}>
            Add participant
          </Button>
        </div>
      </React.Fragment>
    );
  }, []);

  return (
    <div className="md-switching-view-cont">
      <div className="md-switching-view-cal-cont">
        <Eventcalendar renderEventContent={renderEventContent} view={calView} data={myEvents} />
      </div>
      <Toast
        // theme
        message={toastText}
        isOpen={isToastOpen}
        onClose={closeToast}
      />
    </div>
  );
};
