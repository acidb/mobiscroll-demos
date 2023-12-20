import React from 'react';
import { Eventcalendar, Page, Button, setOptions /* localeImport */ } from '@mobiscroll/react';
import moment from 'moment';

setOptions({
  // localeJs,
  // themeJs
});

const myResources = [
  {
    id: 1,
    name: 'Resource A',
    color: '#fdf500',
  },
  {
    id: 2,
    name: 'Resource B',
    color: '#ff0101',
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#01adff',
  },
  {
    id: 4,
    name: 'Resource D',
    color: '#239a21',
  },
  {
    id: 5,
    name: 'Resource E',
    color: '#ff4600',
  },
];

function App() {
  const [dateObjData, setDateObjData] = React.useState([
    {
      start: new Date(2020, 4, 19, 9),
      end: new Date(2020, 4, 19, 11),
      title: 'General orientation',
      resource: 2,
    },
  ]);
  const [selectedObj, setSelectedObj] = React.useState(new Date(2020, 4, 19));

  const [isoData, setISOData] = React.useState([
    {
      start: '2020-05-20T09:00:00',
      end: '2020-05-20T11:00:00',
      title: 'Clever Conference',
      resource: 2,
    },
  ]);
  const [selectedISO, setSelectedISO] = React.useState('2020-05-20');

  const [momentData, setMomentData] = React.useState([
    {
      start: moment([2020, 4, 21, 9]),
      end: moment([2020, 4, 21, 11]),
      title: 'Product team mtg.',
      resource: 2,
    },
  ]);
  const [selectedMoment, setSelectedMoment] = React.useState(moment([2020, 4, 21]));

  const addDate = React.useCallback(() => {
    const newEvent = {
      start: new Date(2020, 4, 19, 11, 15),
      end: new Date(2020, 4, 19, 13, 45),
      text: 'New Event',
      resource: 4,
    };
    setDateObjData([...dateObjData, newEvent]);
    setSelectedObj(new Date(2020, 4, 19));
  });

  const addISO = React.useCallback(() => {
    const newEvent = {
      start: '2020-05-20T15:30:00',
      end: '2020-05-20T18:00:00',
      text: 'New Event',
      resource: 1,
    };
    setISOData([...isoData, newEvent]);
    setSelectedISO('2020-05-20');
  });

  const addMoment = React.useCallback(() => {
    const newEvent = {
      start: moment([2020, 4, 21, 12]),
      end: moment([2020, 4, 21, 15]),
      text: 'New Event',
      resource: 5,
    };
    setMomentData([...momentData, newEvent]);
    setSelectedMoment(moment([2020, 4, 21]));
  });

  const view = React.useMemo(() => {
    return {
      timeline: {
        type: 'day',
      },
    };
  }, []);

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Date object</div>
        <div className="mbsc-button-group-block">
          <Button onClick={addDate}>
            start: new Date(2020, 4, 19, 11, 15) <br /> end: new Date(2020, 4, 19, 13, 45)
          </Button>
        </div>
        <Eventcalendar data={dateObjData} resources={myResources} view={view} selectedDate={selectedObj} />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">ISO string</div>
        <div className="mbsc-button-group-block">
          <Button onClick={addISO}>
            start: 2020-05-20T15:30:00 <br /> end: 2020-05-20T18:00:00
          </Button>
        </div>
        <Eventcalendar data={isoData} resources={myResources} view={view} selectedDate={selectedISO} />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Moment js</div>
        <div className="mbsc-button-group-block">
          <Button onClick={addMoment}>
            start: moment([2020, 4, 21, 12]) <br /> end: moment([2020, 4, 21, 15])
          </Button>
        </div>
        <Eventcalendar data={momentData} resources={myResources} view={view} selectedDate={selectedMoment} />
      </div>
    </Page>
  );
}

export default App;
