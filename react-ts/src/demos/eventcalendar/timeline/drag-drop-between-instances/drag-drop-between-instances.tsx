import React from 'react';
import {
  Eventcalendar,
  setOptions,
  Toast,
  MbscEventcalendarView,
  MbscCalendarEvent,
  MbscResource /* localeImport */,
} from '@mobiscroll/react';
import './drag-drop-between-instances.css';

setOptions({
  // localeJs,
  // themeJs
});

const bookings: MbscCalendarEvent[] = [
  {
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Budapest - Ljubljana',
    resource: 1,
  },
  {
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Ljubljana - Berlin',
    resource: 1,
  },
  {
    start: 'dyndatetime(y,m,d,4)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Los Angeles - Dublin',
    resource: 2,
  },
  {
    start: 'dyndatetime(y,m,d,18)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Dublin - Bucharest',
    resource: 2,
  },
  {
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Chicago - Amsterdam',
    resource: 3,
  },
  {
    start: 'dyndatetime(y,m,d,17)',
    end: 'dyndatetime(y,m,d,22)',
    title: 'Amsterdam - Cairo',
    resource: 3,
  },
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Hong Kong - Sydney',
    resource: 4,
  },
  {
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,21)',
    title: 'Sydney - Tokyo',
    resource: 4,
  },
  {
    start: 'dyndatetime(y,m,d,4)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Paris - Washington, D.C.',
    resource: 5,
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Washington, D.C. - Los-Angeles',
    resource: 5,
  },
  {
    start: 'dyndatetime(y,m,d,3)',
    end: 'dyndatetime(y,m,d,11)',
    title: 'Los Angeles - Dublin',
    resource: 6,
  },
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Dublin - Rome',
    resource: 6,
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Barcelona - Dubai',
    resource: 7,
  },
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'Dubai - Tokyo',
    resource: 7,
  },
  {
    start: 'dyndatetime(y,m,d,3,30)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Rome - Toronto',
    resource: 8,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Toronto - New-York',
    resource: 8,
  },
  {
    start: 'dyndatetime(y,m,d,3)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Vienna - Shanghai',
    resource: 9,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23,30)',
    title: 'Shanghai - Moscow',
    resource: 9,
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'London - Cairo',
    resource: 10,
  },
  {
    start: 'dyndatetime(y,m,d,15,30)',
    end: 'dyndatetime(y,m,d,19,30)',
    title: 'Cairo - Sofia',
    resource: 10,
  },
  {
    start: 'dyndatetime(y,m,d,2)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Istanbul - New York',
    resource: 11,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'New York - Montreal',
    resource: 11,
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,11)',
    title: 'Seattle - Miami',
    resource: 12,
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,21)',
    title: 'Miami - Buenos-Aires',
    resource: 12,
  },
];

const flights: MbscCalendarEvent[] = [
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,17)',
    title: 'Barcelona - Dubai',
    resource: 4,
  },
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'London - Cairo',
    resource: 6,
  },
  {
    start: 'dyndatetime(y,m,d,7,30)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Toronto - Rome',
    resource: 8,
  },
  {
    start: 'dyndatetime(y,m,d,4)',
    end: 'dyndatetime(y,m,d,8)',
    title: 'Ljubljana - Budapest',
    resource: 1,
  },
  {
    start: 'dyndatetime(y,m,d,2)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Paris - Washington, D.C.',
    resource: 2,
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'New York - Istanbul',
    resource: 7,
  },
  {
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Barcelona - Moscow',
    resource: 3,
  },
  {
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Moscow - Tokyo',
    resource: 3,
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,19,30)',
    title: 'Montreal - Rio de Janeiro',
    resource: 2,
  },
];

const jets: MbscResource[] = [
  {
    id: 'Op 1',
    name: 'Prestige Air',
    eventCreation: false,
    children: [
      {
        id: 1,
        code: '#AF 7703',
        crew: 52,
        name: 'Red Bolt',
        img: 'https://img.mobiscroll.com/demos/jet-1.jpg',
      },
      {
        id: 2,
        code: '#BQ 4718',
        crew: 47,
        name: 'Skyroar',
        img: 'https://img.mobiscroll.com/demos/jet-2.jpg',
      },
      {
        id: 3,
        code: '#ZM 8430',
        crew: 24,
        name: 'Agile Raven',
        img: 'https://img.mobiscroll.com/demos/jet-3.jpg',
      },
    ],
  },
  {
    id: 'Op 2',
    name: 'Elite Wings',
    eventCreation: false,
    children: [
      {
        id: 4,
        code: '#XG 5500',
        crew: 43,
        name: 'Monsterbolt',
        img: 'https://img.mobiscroll.com/demos/jet-4.jpg',
      },
      {
        id: 5,
        code: '#FL 2531',
        crew: 22,
        name: 'Airrise',
        img: 'https://img.mobiscroll.com/demos/jet-5.jpg',
      },
      {
        id: 6,
        code: '#PA 6487',
        crew: 84,
        name: 'Starblast',
        img: 'https://img.mobiscroll.com/demos/jet-6.jpg',
      },
      {
        id: 7,
        code: '#PP 9812',
        crew: 28,
        name: 'Ebonfire',
        img: 'https://img.mobiscroll.com/demos/jet-7.jpg',
      },
    ],
  },
  {
    id: 'Op 3',
    name: 'Luxury Skies',
    eventCreation: false,
    children: [
      {
        id: 8,
        code: '#DN 3191',
        crew: 36,
        name: 'Dark Bee',
        img: 'https://img.mobiscroll.com/demos/jet-8.jpg',
      },
      {
        id: 9,
        code: '#ZW 2328',
        crew: 76,
        name: 'Keen Sparrow',
        img: 'https://img.mobiscroll.com/demos/jet-9.jpg',
      },
      {
        id: 10,
        code: '#RX 9898',
        crew: 37,
        name: 'Jagged Bolt',
        img: 'https://img.mobiscroll.com/demos/jet-10.jpg',
      },
    ],
  },
];

const App: React.FC = () => {
  const [reservations, setReservations] = React.useState<MbscResource[]>([
    {
      id: 1,
      name: 'Alison Reyes',
    },
    {
      id: 2,
      name: 'Shauna Perry',
    },
    {
      id: 3,
      name: 'Jan Whitney',
    },
    {
      id: 4,
      name: 'Freddie Durham',
    },
    {
      id: 5,
      name: 'William Dillon',
    },
    {
      id: 6,
      name: 'Tyrell Edwards',
    },
    {
      id: 7,
      name: 'Caitlyn Riddle',
    },
    {
      id: 8,
      name: 'Liam Mays',
    },
    {
      id: 9,
      name: 'Frank Medina',
    },
    {
      id: 10,
      name: 'Calvin Larsen',
    },
    {
      id: 11,
      name: 'Heather Walsh',
    },
    {
      id: 12,
      name: 'Conner Paul',
    },
  ]);

  const [firstDay, setFirstDay] = React.useState<Date>();
  const [lastDay, setLastDay] = React.useState<Date>();
  const firstCalCont = React.useRef<any>(null);
  const secondCalCont = React.useRef<any>(null);
  const skipScroll1 = React.useRef<boolean>(false);
  const skipScroll2 = React.useRef<boolean>(false);
  const [mySelectedDate, setSelectedDate] = React.useState<any>(new Date());
  const [isToastOpen, setToastOpen] = React.useState<boolean>(false);
  const [toastText, setToastText] = React.useState<string>('');

  const myView = React.useMemo<MbscEventcalendarView>(() => {
    return {
      timeline: {
        type: 'day',
        size: 1,
      },
    };
  }, []);

  const renderMyResource = (resource: MbscResource) => {
    if (!resource.children) {
      const idText = resource.id.split('&');
      return (
        <div className="mbsc-flex mbsc-align-items-center mbsc-justify-content-start">
          <img className="md-drag-drop-bw-inst-avatar" src={resource.img} alt="Avatar" />
          <div className="md-drag-drop-bw-inst-details mbsc-flex-col mbsc-flex-1-0">
            <div>{resource.name}</div>
            <div className="md-aircraft-code mbsc-flex mbsc-justify-content-between">
              <div>{resource.code}</div>
              <div>
                {'\u{1F9D1}\u{1F3FC}\u{200D}\u{2708}\u{FE0F}'} {resource.crew}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>{resource.name}</div>;
  };

  const handleScroll1 = React.useCallback((ev) => {
    if (secondCalCont.current && !skipScroll2.current) {
      skipScroll1.current = true;
      secondCalCont.current.scrollLeft = ev.target.scrollLeft;
    }
    skipScroll1.current = false;
  }, []);

  const handleScroll2 = React.useCallback((ev) => {
    if (firstCalCont.current && !skipScroll1.current) {
      skipScroll2.current = true;
      firstCalCont.current.scrollLeft = ev.target.scrollLeft;
    }
    skipScroll2.current = false;
  }, []);

  const handleFirstScroll = React.useCallback(() => {
    if (!firstCalCont.current) {
      firstCalCont.current = document.querySelector('.md-drag-drop-bw-inst-first .mbsc-timeline-grid-scroll');
      firstCalCont.current.addEventListener('scroll', handleScroll1);
    }
  }, [handleScroll1]);

  const handleSecondScroll = React.useCallback(() => {
    if (!secondCalCont.current) {
      secondCalCont.current = document.querySelector('.md-drag-drop-bw-inst-second .mbsc-timeline-grid-scroll');
      secondCalCont.current.addEventListener('scroll', handleScroll2);
    }
  }, [handleScroll2]);

  const detachFirstScroll = React.useCallback(() => {
    if (firstCalCont.current) {
      firstCalCont.current.removeEventListener('scroll', handleScroll1);
    }
  }, [handleScroll1]);

  const detachSecondScroll = React.useCallback(() => {
    if (secondCalCont.current) {
      secondCalCont.current.removeEventListener('scroll', handleScroll2);
    }
  }, [handleScroll2]);

  const onPageLoading = React.useCallback((args: any) => {
    setTimeout(() => {
      setFirstDay(args.firstDay);
      setLastDay(args.lastDay);
    }, 100);

    if (secondCalCont.current) {
      setTimeout(() => {
        setSelectedDate(args.firstDay);
      }, 100);
    }
  }, []);

  // const onEventDelete = React.useCallback((args: any) => {
  //     setReservations(reservations.filter(item => item.id !== args.event.resource));
  // }, []);

  const onSelectedDateChange = React.useCallback((args: any) => {
    setSelectedDate(args.date);
  }, []);

  const onEventCreated = React.useCallback(() => {
    setToastText('Flight scheduled');
    setToastOpen(true);
  }, []);

  const onEventCreateUpdateFailed = React.useCallback(() => {
    setToastText("There's already a flight on this date");
    setToastOpen(true);
  }, []);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <div className="mbsc-flex-col md-drag-drop-bw-inst-cont">
      <Eventcalendar
        className="md-drag-drop-bw-inst-first"
        data={bookings}
        resources={reservations}
        view={myView}
        dragToMove={false}
        dragToCreate={false}
        dragToResize={false}
        eventDelete={true}
        externalDrag={true}
        onPageLoading={onPageLoading}
        onPageLoaded={handleFirstScroll}
        // onEventDelete={onEventDelete}
        onDestroy={detachFirstScroll}
      />
      <Eventcalendar
        className="md-drag-drop-bw-inst-second"
        data={flights}
        resources={jets}
        view={myView}
        showControls={false}
        dragToCreate={false}
        dragToResize={false}
        dragInTime={false}
        externalDrop={true}
        dragToMove={true}
        dragBetweenResources={false}
        eventOverlap={false}
        selectedDate={mySelectedDate}
        onSelectedDateChange={onSelectedDateChange}
        onEventCreated={onEventCreated}
        onEventCreateFailed={onEventCreateUpdateFailed}
        onEventUpdateFailed={onEventCreateUpdateFailed}
        onPageLoaded={handleSecondScroll}
        onDestroy={detachSecondScroll}
      />
      <Toast message={toastText} isOpen={isToastOpen} onClose={closeToast} />
    </div>
  );
};
