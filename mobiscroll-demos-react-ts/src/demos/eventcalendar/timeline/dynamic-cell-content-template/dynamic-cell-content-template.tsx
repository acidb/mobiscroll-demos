import {
  Eventcalendar,
  MbscCalendarCellData,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscCellHoverEvent,
  MbscEventcalendarView,
  MbscEventCreateEvent,
  MbscNewEventData,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo, useRef, useState } from 'react';
import './dynamic-cell-content-template.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const iconMap = useMemo(
    () => ({
      Review: 'calendar',
      Demo: 'play',
      Kickoff: 'flag',
      Strategy: 'map',
      Collab: 'bubbles',
      Update: 'upload',
      Discussion: 'bubble',
      Planning: 'pencil',
      Retrospect: 'history',
      Onboard: 'user4',
    }),
    [],
  );

  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>();
  const titles = Object.keys(iconMap);
  const hovered = useRef<{ date: Date | null; resource: string | number; count: number }>({
    date: null,
    resource: '',
    count: 0,
  });

  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>(() => [
    {
      id: 1,
      resource: 1,
      title: 'Review',
      start: 'dyndatetime(y, m, d + 7, 0, 0)',
      end: 'dyndatetime(y, m, d + 7, 2, 0)',
    },
    {
      id: 2,
      resource: 1,
      title: 'Demo',
      start: 'dyndatetime(y, m, d + 7, 0, 0)',
      end: 'dyndatetime(y, m, d + 7, 2, 0)',
    },
    {
      id: 3,
      resource: 1,
      title: 'Kickoff',
      start: 'dyndatetime(y, m, d + 7, 0, 0)',
      end: 'dyndatetime(y, m, d + 7, 2, 0)',
    },
    {
      id: 4,
      resource: 4,
      title: 'Strategy',
      start: 'dyndatetime(y, m, d + 7, 0, 0)',
      end: 'dyndatetime(y, m, d + 7, 2, 0)',
    },
    {
      id: 5,
      resource: 4,
      title: 'Collab',
      start: 'dyndatetime(y, m, d + 7, 0, 0)',
      end: 'dyndatetime(y, m, d + 7, 2, 0)',
    },
    {
      id: 6,
      resource: 4,
      title: 'Update',
      start: 'dyndatetime(y, m, d + 7, 0, 0)',
      end: 'dyndatetime(y, m, d + 7, 2, 0)',
    },
    {
      id: 7,
      resource: 2,
      title: 'Discussion',
      start: 'dyndatetime(y, m, d + 7, 0, 0)',
      end: 'dyndatetime(y, m, d + 7, 2, 0)',
    },
    {
      id: 8,
      resource: 2,
      title: 'Planning',
      start: 'dyndatetime(y, m, d + 6, 0, 0)',
      end: 'dyndatetime(y, m, d + 6, 2, 0)',
    },
    {
      id: 9,
      resource: 2,
      title: 'Retrospect',
      start: 'dyndatetime(y, m, d + 6, 0, 0)',
      end: 'dyndatetime(y, m, d + 6, 2, 0)',
    },
    {
      id: 10,
      resource: 2,
      title: 'Demo',
      start: 'dyndatetime(y, m, d + 6, 0, 0)',
      end: 'dyndatetime(y, m, d + 6, 2, 0)',
    },
    {
      id: 11,
      resource: 3,
      title: 'Collab',
      start: 'dyndatetime(y, m, d + 6, 0, 0)',
      end: 'dyndatetime(y, m, d + 6, 2, 0)',
    },
    {
      id: 12,
      resource: 3,
      title: 'Strategy',
      start: 'dyndatetime(y, m, d + 6, 0, 0)',
      end: 'dyndatetime(y, m, d + 6, 2, 0)',
    },
    {
      id: 13,
      resource: 3,
      title: 'Update',
      start: 'dyndatetime(y, m, d + 6, 0, 0)',
      end: 'dyndatetime(y, m, d + 6, 2, 0)',
    },
    {
      id: 14,
      resource: 4,
      title: 'Kickoff',
      start: 'dyndatetime(y, m, d + 6, 0, 0)',
      end: 'dyndatetime(y, m, d + 6, 2, 0)',
    },
    {
      id: 15,
      resource: 2,
      title: 'Demo',
      start: 'dyndatetime(y, m, d - 1, 0, 0)',
      end: 'dyndatetime(y, m, d - 1, 2, 0)',
    },
    {
      id: 16,
      resource: 2,
      title: 'Planning',
      start: 'dyndatetime(y, m, d - 1, 0, 0)',
      end: 'dyndatetime(y, m, d - 1, 2, 0)',
    },
    {
      id: 17,
      resource: 3,
      title: 'Discussion',
      start: 'dyndatetime(y, m, d - 1, 0, 0)',
      end: 'dyndatetime(y, m, d - 1, 2, 0)',
    },
    {
      id: 18,
      resource: 3,
      title: 'Retrospect',
      start: 'dyndatetime(y, m, d - 1, 0, 0)',
      end: 'dyndatetime(y, m, d - 1, 2, 0)',
    },
    {
      id: 19,
      resource: 3,
      title: 'Strategy',
      start: 'dyndatetime(y, m, d - 1, 0, 0)',
      end: 'dyndatetime(y, m, d - 1, 2, 0)',
    },
    {
      id: 20,
      resource: 1,
      title: 'Onboard',
      start: 'dyndatetime(y, m, d - 1, 0, 0)',
      end: 'dyndatetime(y, m, d - 1, 2, 0)',
    },
    {
      id: 21,
      resource: 1,
      title: 'Collab',
      start: 'dyndatetime(y, m, d - 1, 0, 0)',
      end: 'dyndatetime(y, m, d - 1, 2, 0)',
    },
    {
      id: 22,
      resource: 1,
      title: 'Demo',
      start: 'dyndatetime(y, m, d, 0, 0)',
      end: 'dyndatetime(y, m, d, 2, 0)',
    },
    {
      id: 23,
      resource: 1,
      title: 'Planning',
      start: 'dyndatetime(y, m, d, 0, 0)',
      end: 'dyndatetime(y, m, d, 2, 0)',
    },
    {
      id: 24,
      resource: 1,
      title: 'Update',
      start: 'dyndatetime(y, m, d, 0, 0)',
      end: 'dyndatetime(y, m, d, 2, 0)',
    },
    {
      id: 25,
      resource: 2,
      title: 'Strategy',
      start: 'dyndatetime(y, m, d, 0, 0)',
      end: 'dyndatetime(y, m, d, 2, 0)',
    },
    {
      id: 26,
      resource: 2,
      title: 'Demo',
      start: 'dyndatetime(y, m, d, 0, 0)',
      end: 'dyndatetime(y, m, d, 2, 0)',
    },
    {
      id: 27,
      resource: 3,
      title: 'Kickoff',
      start: 'dyndatetime(y, m, d, 0, 0)',
      end: 'dyndatetime(y, m, d, 2, 0)',
    },
    {
      id: 28,
      resource: 3,
      title: 'Collab',
      start: 'dyndatetime(y, m, d + 1, 0, 0)',
      end: 'dyndatetime(y, m, d + 1, 2, 0)',
    },
    {
      id: 29,
      resource: 3,
      title: 'Demo',
      start: 'dyndatetime(y, m, d + 1, 0, 0)',
      end: 'dyndatetime(y, m, d + 1, 2, 0)',
    },
    {
      id: 30,
      resource: 3,
      title: 'Strategy',
      start: 'dyndatetime(y, m, d + 1, 0, 0)',
      end: 'dyndatetime(y, m, d + 1, 2, 0)',
    },
    {
      id: 31,
      resource: 3,
      title: 'Demo',
      start: 'dyndatetime(y, m, d + 1, 0, 0)',
      end: 'dyndatetime(y, m, d + 1, 2, 0)',
    },
    {
      id: 32,
      resource: 4,
      title: 'Retrospect',
      start: 'dyndatetime(y, m, d + 3, 0, 0)',
      end: 'dyndatetime(y, m, d + 3, 2, 0)',
    },
    {
      id: 33,
      resource: 4,
      title: 'Demo',
      start: 'dyndatetime(y, m, d + 3, 0, 0)',
      end: 'dyndatetime(y, m, d + 3, 2, 0)',
    },
    {
      id: 34,
      resource: 4,
      title: 'Retrospect',
      start: 'dyndatetime(y, m, d + 3, 0, 0)',
      end: 'dyndatetime(y, m, d + 3, 2, 0)',
    },
    {
      id: 35,
      resource: 4,
      title: 'Onboard',
      start: 'dyndatetime(y, m, d + 3, 0, 0)',
      end: 'dyndatetime(y, m, d + 3, 2, 0)',
    },
    {
      id: 36,
      resource: 1,
      title: 'Discussion',
      start: 'dyndatetime(y, m, d + 3, 0, 0)',
      end: 'dyndatetime(y, m, d + 3, 2, 0)',
    },
    {
      id: 37,
      resource: 3,
      title: 'Collab',
      start: 'dyndatetime(y, m, d + 3, 0, 0)',
      end: 'dyndatetime(y, m, d + 3, 2, 0)',
    },
    {
      id: 38,
      resource: 3,
      title: 'Update',
      start: 'dyndatetime(y, m, d + 3, 0, 0)',
      end: 'dyndatetime(y, m, d + 3, 2, 0)',
    },
    {
      id: 39,
      resource: 3,
      title: 'Planning',
      start: 'dyndatetime(y, m, d + 3, 0, 0)',
      end: 'dyndatetime(y, m, d + 3, 2, 0)',
    },
    {
      id: 40,
      resource: 1,
      title: 'Planning',
      start: 'dyndatetime(y, m, d + 5, 0, 0)',
      end: 'dyndatetime(y, m, d + 5, 2, 0)',
    },
    {
      id: 41,
      resource: 1,
      title: 'Update',
      start: 'dyndatetime(y, m, d + 5, 0, 0)',
      end: 'dyndatetime(y, m, d + 5, 2, 0)',
    },
    {
      id: 42,
      resource: 2,
      title: 'Strategy',
      start: 'dyndatetime(y, m, d + 5, 0, 0)',
      end: 'dyndatetime(y, m, d + 5, 2, 0)',
    },
    {
      id: 43,
      resource: 4,
      title: 'Onboard',
      start: 'dyndatetime(y, m, d + 5, 0, 0)',
      end: 'dyndatetime(y, m, d + 5, 2, 0)',
    },
    {
      id: 44,
      resource: 4,
      title: 'Planning',
      start: 'dyndatetime(y, m, d + 5, 0, 0)',
      end: 'dyndatetime(y, m, d + 5, 2, 0)',
    },
    {
      id: 45,
      resource: 4,
      title: 'Retrospect',
      start: 'dyndatetime(y, m, d + 5, 0, 0)',
      end: 'dyndatetime(y, m, d + 5, 2, 0)',
    },
    {
      id: 46,
      resource: 3,
      title: 'Demo',
      start: 'dyndatetime(y, m, d + 5, 0, 0)',
      end: 'dyndatetime(y, m, d + 5, 2, 0)',
    },
    {
      id: 47,
      resource: 3,
      title: 'Demo',
      start: 'dyndatetime(y, m, d + 5, 0, 0)',
      end: 'dyndatetime(y, m, d + 5, 2, 0)',
    },
    {
      id: 48,
      resource: 2,
      title: 'Demo',
      start: 'dyndatetime(y, m, d + 4, 0, 0)',
      end: 'dyndatetime(y, m, d + 4, 2, 0)',
    },
    {
      id: 49,
      resource: 2,
      title: 'Demo',
      start: 'dyndatetime(y, m, d + 4, 0, 0)',
      end: 'dyndatetime(y, m, d + 4, 2, 0)',
    },
    {
      id: 50,
      resource: 1,
      title: 'Discussion',
      start: 'dyndatetime(y, m, d + 4, 0, 0)',
      end: 'dyndatetime(y, m, d + 4, 2, 0)',
    },
    {
      id: 51,
      resource: 2,
      title: 'Discussion',
      start: 'dyndatetime(y, m, d + 2, 0, 0)',
      end: 'dyndatetime(y, m, d + 2, 2, 0)',
    },
    {
      id: 52,
      resource: 3,
      title: 'Retrospect',
      start: 'dyndatetime(y, m, d + 10, 0, 0)',
      end: 'dyndatetime(y, m, d + 10, 2, 0)',
    },
    {
      id: 53,
      resource: 1,
      title: 'Retrospect',
      start: 'dyndatetime(y, m, d + 10, 0, 0)',
      end: 'dyndatetime(y, m, d + 10, 2, 0)',
    },
    {
      id: 54,
      resource: 3,
      title: 'Retrospect',
      start: 'dyndatetime(y, m, d + 10, 0, 0)',
      end: 'dyndatetime(y, m, d + 10, 2, 0)',
    },
    {
      id: 55,
      resource: 3,
      title: 'Strategy',
      start: 'dyndatetime(y, m, d + 11, 0, 0)',
      end: 'dyndatetime(y, m, d + 11, 2, 0)',
    },
    {
      id: 56,
      resource: 2,
      title: 'Kickoff',
      start: 'dyndatetime(y, m, d + 11, 0, 0)',
      end: 'dyndatetime(y, m, d + 11, 2, 0)',
    },
    {
      id: 57,
      resource: 2,
      title: 'Kickoff',
      start: 'dyndatetime(y, m, d + 11, 0, 0)',
      end: 'dyndatetime(y, m, d + 11, 2, 0)',
    },
    {
      id: 58,
      resource: 2,
      title: 'Update',
      start: 'dyndatetime(y, m, d + 11, 0, 0)',
      end: 'dyndatetime(y, m, d + 11, 2, 0)',
    },
    {
      id: 59,
      resource: 4,
      title: 'Demo',
      start: 'dyndatetime(y, m, d + 11, 0, 0)',
      end: 'dyndatetime(y, m, d + 11, 2, 0)',
    },
    {
      id: 60,
      resource: 4,
      title: 'Collab',
      start: 'dyndatetime(y, m, d + 11, 0, 0)',
      end: 'dyndatetime(y, m, d + 11, 2, 0)',
    },
    {
      id: 61,
      resource: 4,
      title: 'Collab',
      start: 'dyndatetime(y, m, d + 11, 0, 0)',
      end: 'dyndatetime(y, m, d + 11, 2, 0)',
    },
    {
      id: 62,
      resource: 4,
      title: 'Discussion',
      start: 'dyndatetime(y, m, d + 11, 0, 0)',
      end: 'dyndatetime(y, m, d + 11, 2, 0)',
    },
    {
      id: 63,
      resource: 1,
      title: 'Planning',
      start: 'dyndatetime(y, m, d + 12, 0, 0)',
      end: 'dyndatetime(y, m, d + 12, 2, 0)',
    },
    {
      id: 64,
      resource: 1,
      title: 'Retrospect',
      start: 'dyndatetime(y, m, d + 12, 0, 0)',
      end: 'dyndatetime(y, m, d + 12, 2, 0)',
    },
    {
      id: 65,
      resource: 1,
      title: 'Review',
      start: 'dyndatetime(y, m, d + 12, 0, 0)',
      end: 'dyndatetime(y, m, d + 12, 2, 0)',
    },
    {
      id: 66,
      resource: 3,
      title: 'Collab',
      start: 'dyndatetime(y, m, d + 12, 0, 0)',
      end: 'dyndatetime(y, m, d + 12, 2, 0)',
    },
    {
      id: 67,
      resource: 3,
      title: 'Demo',
      start: 'dyndatetime(y, m, d + 12, 0, 0)',
      end: 'dyndatetime(y, m, d + 12, 2, 0)',
    },
    {
      id: 68,
      resource: 3,
      title: 'Collab',
      start: 'dyndatetime(y, m, d + 12, 0, 0)',
      end: 'dyndatetime(y, m, d + 12, 2, 0)',
    },
    {
      id: 69,
      resource: 2,
      title: 'Strategy',
      start: 'dyndatetime(y, m, d + 12, 0, 0)',
      end: 'dyndatetime(y, m, d + 12, 2, 0)',
    },
  ]);

  const myResources = useMemo(
    () => [
      { id: 1, name: 'Resource A' },
      { id: 2, name: 'Resource B' },
      { id: 3, name: 'Resource C' },
      { id: 4, name: 'Resource D' },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        endDay: 5,
        eventList: true,
        type: 'month',
        resolutionHorizontal: 'day',
        startDay: 1,
      },
    }),
    [],
  );

  const customDefaultEvent = useCallback(
    (args: MbscNewEventData) => ({
      title: titles[Math.floor(Math.random() * titles.length)],
      end: new Date(args.start.getTime() + 2 * 3600000),
    }),
    [titles],
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!e.currentTarget.classList.contains('mds-timeline-cell-content-add')) return;
      if (!hovered.current.date) return;

      if (hovered.current.count >= 4) {
        setToastOpen(true);
        setToastMessage('Limit reached.');
        return;
      }

      const title = titles[Math.floor(Math.random() * titles.length)];
      setEvents((prev) => [
        ...prev,
        {
          start: hovered.current.date,
        end: new Date(hovered.current.date!.getTime() + 2 * 3600000),
        resource: hovered.current.resource,
        title,
      } as MbscCalendarEvent,
    ]);
    hovered.current.count++;
  },
  [titles],
);

  const renderCell = useCallback(
    (args: MbscCalendarCellData) => {
      const events = args.events || [];
      const hours = Math.round(
        (args.events || []).reduce(
          (sum, ev) =>
            ev.start && ev.end ? sum + (new Date(ev.end as Date).getTime() - new Date(ev.start as Date).getTime()) / 36e5 : sum,
          0,
        ),
      );

      const classMap = { 2: 'light', 4: 'medium', 6: 'semi', 8: 'full' };
      const colorClass = 'mds-timeline-cell-content-badge-' + (classMap[hours as keyof typeof classMap] || 'default');

      const addedIcons = new Set();
      const iconHtml = events.map((ev) => {
        const iconName = iconMap[ev.title as keyof typeof iconMap];
        if (iconName && !addedIcons.has(ev.title)) {
          addedIcons.add(ev.title);
          return <i key={ev.title} className={'mbsc-font-icon mbsc-icon-' + iconName + ' mds-timeline-cell-icon'} title={ev.title}></i>;
        }
        return null;
      });

      return (
        <>
          <div className={'mds-timeline-cell-content-badge ' + colorClass}>{hours}h / 8h</div>
          <button onClick={handleClick} className="mds-timeline-cell-content-add">
            +
          </button>
          <div className="mds-timeline-cell-icons">{iconHtml}</div>
        </>
      );
    },
    [handleClick, iconMap],
  );

  const renderScheduleEventContent = useCallback((event: MbscCalendarEventData) => {
    const hours = Math.round(((event.endDate as Date).getTime() - (event.startDate as Date).getTime()) / 36e5);
    return (
      <div>
        {event.title} - {hours}h
      </div>
    );
  }, []);

  const onCellHoverIn = useCallback((args: MbscCellHoverEvent) => {
    hovered.current = {
      date: args.date,
      resource: args.resource.id,
      count: args.events?.length || 0,
    };
    console.log(hovered.current);
  }, []);

  const onEventCreate = useCallback((args: MbscEventCreateEvent) => {
    console.log(args);
  }, []);

  return (
    <>
      <Eventcalendar
        cssClass="mds-timeline-cell-content"
        data={myEvents}
        dragToCreate={false}
        dragToMove={false}
        dragToResize={false}
        extendDefaultEvent={customDefaultEvent}
        onCellHoverIn={onCellHoverIn}
        onEventCreate={onEventCreate}
        resources={myResources}
        renderCell={renderCell}
        renderScheduleEventContent={renderScheduleEventContent}
        view={myView}
      />
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={() => setToastOpen(false)} />
    </>
  );
};

export default App;
