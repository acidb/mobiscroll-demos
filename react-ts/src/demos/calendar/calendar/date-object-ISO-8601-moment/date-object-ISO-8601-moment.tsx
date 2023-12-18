import React from 'react';
import { Datepicker, Button, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [obj, setObj] = React.useState<any>();
  const objString = React.useMemo(() => (obj ? obj.toString() : null), [obj]);
  const [iso, setISO] = React.useState<any>();
  const [moment, setMoment] = React.useState<any>();
  const momentString = React.useMemo<any>(() => (moment ? moment.toString() : null), [moment]);

  const setCustomObj = React.useCallback<any>(() => {
    setObj(new Date(2020, 10, 15, 10, 45));
  }, []);

  const objChange = React.useCallback<any>((ev: any) => {
    setObj(ev.value);
  }, []);

  const setCustomISO = React.useCallback<any>(() => {
    setISO('2020-05-20T12:30:00');
  }, []);

  const isoChange = React.useCallback<any>((ev: any) => {
    setISO(ev.value);
  }, []);

  const setCustomMoment = React.useCallback<any>(() => {
    setMoment(moment([2020, 2, 6, 15, 30]));
  }, []);

  const momentChange = React.useCallback<any>((ev: any) => {
    setMoment(ev.value);
  }, []);

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Working with Js Date Objects</div>
        <div className="mbsc-button-group-block">
          <Button onClick={setCustomObj}>Set: Sun Nov 15 2020 10:45:00 GMT</Button>
        </div>
        <Datepicker value={obj} onChange={objChange} label="Date object" />
      </div>
      <div className="mbsc-form-group" className="mbsc-padding">
        Return value: {objString}
      </div>

      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Working with Date strings</div>
        <div className="mbsc-button-group-block">
          <Button onClick={setCustomISO}>Set: 2020-05-20T12:30:00</Button>
        </div>
        <Datepicker returnFormat="iso8601" value={iso} onChange={isoChange} label="ISO string" />
      </div>
      <div className="mbsc-form-group" className="mbsc-padding">
        Return value: {iso}
      </div>

      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Working with Moment JS Objects</div>
        <div className="mbsc-button-group-block">
          <Button onClick={setCustomMoment}>Set: 2018-04-27T12:15:00+03:00</Button>
        </div>
        <Datepicker returnFormat="moment" value={moment} onChange={momentChange} label="Moment JS" />
      </div>
      <div className="mbsc-form-group" className="mbsc-padding">
        Return value: {momentString}
      </div>
    </Page>
  );
};

export default App;