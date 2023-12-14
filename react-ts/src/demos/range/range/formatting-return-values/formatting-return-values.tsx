import React from 'react';
import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const currentWeek: any = ['dyndatetime(y,m,d)', 'dyndatetime(y,m,d+6)'];
const currentTime: any = ['dyndatetime(y,m,d,h)', 'dyndatetime(y,m,d,h+2)'];

function App() {
  const [rangeValue, setRangeValue] = React.useState<any>(currentWeek);
  const [separatorValue, setSeparatorValue] = React.useState<any>(currentWeek);
  const [monthValue, setMonthValue] = React.useState<any>(currentWeek);
  const [dayValue, setDayValue] = React.useState<any>(currentWeek);
  const [atomValue, setAtomValue] = React.useState<any>(currentWeek);
  const [cookieValue, setCookieValue] = React.useState<any>(currentWeek);
  const [timeValue, setTimeValue] = React.useState<any>(currentTime);
  const [h12Value, setH12Value] = React.useState<any>(currentTime);
  const [h24Value, setH24Value] = React.useState<any>(currentTime);
  const [hmsValue, setHmsValue] = React.useState<any>(currentTime);
  const [dateTimeValue, setDateTimeValue] = React.useState<any>(currentTime);
  const [dayNameValue, setDayNameValue] = React.useState<any>(currentTime);

  const changeRange = React.useCallback((args: any) => {
    setRangeValue(args.value);
  }, []);
  const changeSeparator = React.useCallback((args: any) => {
    setSeparatorValue(args.value);
  }, []);
  const changeMonth = React.useCallback((args: any) => {
    setMonthValue(args.value);
  }, []);
  const changeDay = React.useCallback((args: any) => {
    setDayValue(args.value);
  }, []);
  const changeAtom = React.useCallback((args: any) => {
    setAtomValue(args.value);
  }, []);
  const changeCookie = React.useCallback((args: any) => {
    setCookieValue(args.value);
  }, []);
  const changeTime = React.useCallback((args: any) => {
    setTimeValue(args.value);
  }, []);
  const changeH12 = React.useCallback((args: any) => {
    setH12Value(args.value);
  }, []);
  const changeH24 = React.useCallback((args: any) => {
    setH24Value(args.value);
  }, []);
  const changeHms = React.useCallback((args: any) => {
    setHmsValue(args.value);
  }, []);
  const changeDateTime = React.useCallback((args: any) => {
    setDateTimeValue(args.value);
  }, []);
  const changeDayName = React.useCallback((args: any) => {
    setDayNameValue(args.value);
  }, []);
  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Date</div>
        <Datepicker
          controls={['calendar']}
          select="range"
          value={rangeValue}
          onChange={changeRange}
          inputProps={{
            label: 'Default',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          value={separatorValue}
          onChange={changeSeparator}
          dateFormat="DD.MM.YYYY"
          inputProps={{
            label: 'Separator',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          value={monthValue}
          onChange={changeMonth}
          dateFormat="D MMMM YYYY"
          inputProps={{
            label: 'Month name',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          value={dayValue}
          onChange={changeDay}
          dateFormat="DDD DD MMM, YYYY"
          inputProps={{
            label: 'Day of week',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          value={atomValue}
          onChange={changeAtom}
          dateFormat="YYYY-MM-DD"
          inputProps={{
            label: 'ATOM',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          value={cookieValue}
          onChange={changeCookie}
          dateFormat="DDD, DD MMM YYYY"
          inputProps={{
            label: 'COOKIE',
          }}
        />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Time</div>
        <Datepicker
          controls={['time']}
          select="range"
          value={timeValue}
          onChange={changeTime}
          inputProps={{
            label: 'Default time',
          }}
        />
        <Datepicker
          controls={['time']}
          select="range"
          value={h12Value}
          onChange={changeH12}
          timeFormat="hh:mm A"
          inputProps={{
            label: '12h',
          }}
        />
        <Datepicker
          controls={['time']}
          select="range"
          value={h24Value}
          onChange={changeH24}
          timeFormat="HH:mm"
          inputProps={{
            label: '24h',
          }}
        />
        <Datepicker
          controls={['time']}
          select="range"
          value={hmsValue}
          onChange={changeHms}
          timeFormat="HH:mm:ss"
          inputProps={{
            label: 'Hour, min, sec',
          }}
        />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Date & time</div>
        <Datepicker
          controls={['calendar', 'time']}
          select="range"
          value={dateTimeValue}
          onChange={changeDateTime}
          inputProps={{
            label: 'Default date & time',
          }}
        />
        <Datepicker
          controls={['calendar', 'time']}
          select="range"
          value={dayNameValue}
          onChange={changeDayName}
          dateFormat="DDD D MMM, YYYY"
          timeFormat="H:mm"
          dateWheels="|DDD D MMM, YYYY|"
          inputProps={{
            label: 'Day name',
          }}
        />
      </div>
    </Page>
  );
}
export default App;
