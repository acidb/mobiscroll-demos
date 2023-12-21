import React from 'react';
import { Eventcalendar, Page, Button, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/react';
import moment from 'moment';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [dateObjData, setDateObjData] = React.useState<any>([
    {
      start: new Date(2020, 4, 19, 7),
      end: new Date(2020, 4, 19, 8),
      title: 'General orientation',
      color: '#35bb5a',
    },
  ]);
  const [selectedObj, setSelectedObj] = React.useState<any>(new Date(2020, 4, 19));

  const [isoData, setISOData] = React.useState<any>([
    {
      start: '2020-05-20T07:00:00',
      end: '2020-05-20T08:00:00',
      title: 'Clever Conference',
      color: '#a71111',
    },
  ]);
  const [selectedISO, setSelectedISO] = React.useState<any>('2020-05-20');

  const [momentData, setMomentData] = React.useState<any>([
    {
      start: moment([2020, 4, 21, 7]),
      end: moment([2020, 4, 21, 8]),
      title: 'Product team mtg.',
      color: '#913aa7',
    },
  ]);
  const [selectedMoment, setSelectedMoment] = React.useState<any>(moment([2020, 4, 21]));

  const addDate = React.useCallback(() => {
    const newEvent = {
      start: new Date(2020, 4, 19, 10, 45),
      end: new Date(2020, 4, 19, 11, 45),
      text: 'New Event',
    };
    setDateObjData([...dateObjData, newEvent]);
    setSelectedObj(new Date(2020, 4, 19));
  }, []);

  const addISO = React.useCallback(() => {
    const newEvent = {
      start: '2020-05-20T12:30:00',
      end: '2020-05-20T13:00:00',
      text: 'New Event',
    };
    setISOData([...isoData, newEvent]);
    setSelectedISO('2020-05-20');
  }, []);

  const addMoment = React.useCallback(() => {
    const newEvent = {
      start: moment([2020, 4, 21, 11]),
      end: moment([2020, 4, 21, 14]),
      text: 'New Event',
    };
    setMomentData([...momentData, newEvent]);
    setSelectedMoment(moment([2020, 4, 21]));
  }, []);

  const view = React.useMemo<MbscEventcalendarView>(() => {
    return {
      schedule: {
        type: 'week',
      },
    };
  }, []);

  return (
    <Page>
      <div className="mbsc-grid">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Date object</div>
              <div className="mbsc-button-group-block">
                <Button onClick={addDate}>
                  start: new Date(2020, 4, 19, 10, 45) <br /> end: new Date(2020, 4, 19, 11, 45)
                </Button>
              </div>
              <Eventcalendar data={dateObjData} view={view} selectedDate={selectedObj} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">ISO string</div>
              <div className="mbsc-button-group-block">
                <Button onClick={addISO}>
                  start: 2020-05-20T12:30:00 <br /> end: 2020-05-20T13:00:00
                </Button>
              </div>
              <Eventcalendar data={isoData} view={view} selectedDate={selectedISO} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Moment js</div>
              <div className="mbsc-button-group-block">
                <Button onClick={addMoment}>
                  start: moment([2020, 4, 21, 11]) <br /> end: moment([2020, 4, 21, 14])
                </Button>
              </div>
              <Eventcalendar data={momentData} view={view} selectedDate={selectedMoment} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default App;
