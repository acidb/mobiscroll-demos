import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useMemo } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();
const day = now.getDay();
const monday = now.getDate() - day + (day == 0 ? -6 : 1);
const myEvents = [
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday),
    title: 'Kate OFF (PROPOSED)',
    color: '#e7b300',
    allDay: true,
    accepted: false,
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday),
    title: 'John OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    accepted: true,
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday),
    title: 'Mark OFF (PROPOSED)',
    color: '#e7b300',
    allDay: true,
    accepted: false,
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday),
    title: 'Emma OFF (PROPOSED)',
    color: '#e7b300',
    allDay: true,
    accepted: false,
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 1),
    title: 'Mark OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    accepted: true,
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 1),
    title: 'Carol OFF (PROPOSED)',
    color: '#e7b300',
    allDay: true,
    accepted: false,
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Luke OFF (PROPOSED)',
    color: '#e7b300',
    allDay: true,
    accepted: false,
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Carol OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    accepted: true,
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Kate OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    accepted: true,
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Dean OFF (PROPOSED)',
    color: '#e7b300',
    allDay: true,
    accepted: false,
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Emma OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    accepted: true,
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
    title: 'Jason OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    accepted: true,
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 3),
    title: 'Jason OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    accepted: true,
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 4),
    title: 'Ryan OFF (PROPOSED)',
    color: '#e7b300',
    allDay: true,
    accepted: false,
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 4),
    title: 'John OFF (APPROVED)',
    color: '#00ca10',
    allDay: true,
    accepted: true,
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 4),
    title: 'Dean OFF (PROPOSED)',
    color: '#e7b300',
    allDay: true,
    accepted: false,
  },
];

function App() {
  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: {
        type: 'week',
      },
    }),
    [],
  );

  const orderMyEvents = useCallback((event: MbscCalendarEvent) => (event.accepted ? 1 : -1), []);

  return (
    <Eventcalendar
      // drag
      view={myView}
      data={myEvents}
      eventOrder={orderMyEvents}
    />
  );
}
export default App;