import React from 'react';
//<demo-only>import { Datepicker, Page, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;
const Page = mobiscroll.Page;
const setOptions = mobiscroll.setOptions;//</extra>

setOptions({
    // localeJs,
    // themeJs
});

const currentWeek: any = ['dyndatetime(y,m,d)', 'dyndatetime(y,m,d+6)']
const currentTime: any = ['dyndatetime(y,m,d,h)', 'dyndatetime(y,m,d,h+2)']

function App() {
    const [rangeValue, setRangeValue] = React.useState(currentWeek);
    const [separatorValue, setSeparatorValue] = React.useState(currentWeek);
    const [monthValue, setMonthValue] = React.useState(currentWeek);
    const [dayValue, setDayValue] = React.useState(currentWeek);
    const [atomValue, setAtomValue] = React.useState(currentWeek);
    const [cookieValue, setCookieValue] = React.useState(currentWeek);
    const [timeValue, setTimeValue] = React.useState(currentTime);
    const [h12Value, setH12Value] = React.useState(currentTime);
    const [h24Value, setH24Value] = React.useState(currentTime);
    const [hmsValue, setHmsValue] = React.useState(currentTime);
    const [dateTimeValue, setDateTimeValue] = React.useState(currentTime);
    const [dayNameValue, setDayNameValue] = React.useState(currentTime);
    
    const changeRange = React.useCallback((args) => {
       setRangeValue(args.value)
    }, []);
    const changeSeparator = React.useCallback((args) => {
       setSeparatorValue(args.value)
    }, []);
    const changeMonth = React.useCallback((args) => {
       setMonthValue(args.value)
    }, []);
    const changeDay = React.useCallback((args) => {
       setDayValue(args.value)
    }, []);
    const changeAtom = React.useCallback((args) => {
       setAtomValue(args.value)
    }, []);
    const changeCookie = React.useCallback((args) => {
       setCookieValue(args.value)
    }, []);
    const changeTime = React.useCallback((args) => {
       setTimeValue(args.value)
    }, []);
    const changeH12 = React.useCallback((args) => {
       setH12Value(args.value)
    }, []);
    const changeH24 = React.useCallback((args) => {
       setH24Value(args.value)
    }, []);
    const changeHms = React.useCallback((args) => {
       setHmsValue(args.value)
    }, []);
    const changeDateTime = React.useCallback((args) => {
       setDateTimeValue(args.value)
    }, []);
    const changeDayName = React.useCallback((args) => {
       setDayNameValue(args.value)
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
                        label: 'Default'
                    }}
                />
                <Datepicker
                    controls={['calendar']}
                    select="range"
                    value={separatorValue}
                    onChange={changeSeparator}
                    dateFormat="DD.MM.YYYY"
                    inputProps={{
                        label: 'Separator'
                    }}
                />
                <Datepicker
                    controls={['calendar']}
                    select="range"
                    value={monthValue}
                    onChange={changeMonth}
                    dateFormat="D MMMM YYYY"
                    inputProps={{
                        label: 'Month name'
                    }}
                />
                <Datepicker
                    controls={['calendar']}
                    select="range"
                    value={dayValue}
                    onChange={changeDay}
                    dateFormat="DDD DD MMM, YYYY"
                    inputProps={{
                        label: 'Day of week'
                    }}
                />
                <Datepicker
                    controls={['calendar']}
                    select="range"
                    value={atomValue}
                    onChange={changeAtom}
                    dateFormat="YYYY-MM-DD"
                    inputProps={{
                        label: 'ATOM'
                    }}
                />
                <Datepicker
                    controls={['calendar']}
                    select="range"
                    value={cookieValue}
                    onChange={changeCookie}
                    dateFormat="DDD, DD MMM YYYY"
                    inputProps={{
                        label: 'COOKIE'
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
                        label: 'Default time'
                    }}
                />
                <Datepicker
                    controls={['time']}
                    select="range"
                    value={h12Value}
                    onChange={changeH12}
                    timeFormat="hh:mm A"
                    inputProps={{
                        label: '12h'
                    }}
                />
                <Datepicker
                    controls={['time']}
                    select="range"
                    value={h24Value}
                    onChange={changeH24}
                    timeFormat="HH:mm"
                    inputProps={{
                        label: '24h'
                    }}
                />
                <Datepicker
                    controls={['time']}
                    select="range"
                    value={hmsValue}
                    onChange={changeHms}
                    timeFormat="HH:mm:ss"
                    inputProps={{
                        label: 'Hour, min, sec'
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
                        label: 'Default date & time'
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
                        label: 'Day name'
                    }}
                />
            </div>
        </Page>
    ); 
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
