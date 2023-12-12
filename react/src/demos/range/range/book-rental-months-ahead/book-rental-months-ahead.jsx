import React from 'react';
//<demo-only>import { Datepicker, CalendarPrev, CalendarNav, CalendarNext, CalendarToday, formatDate, getJson, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;
const CalendarPrev = mobiscroll.CalendarPrev;
const CalendarNav = mobiscroll.CalendarNav;
const CalendarNext = mobiscroll.CalendarNext;
const CalendarToday = mobiscroll.CalendarToday;
const getJson = mobiscroll.getJson;
const formatDate = mobiscroll.formatDate;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();

function App() {
  const [labels, setLabels] = React.useState([]);
  const [invalid, setInvalid] = React.useState([]);
  const [colors, setColors] = React.useState([]);

  const getColors = React.useCallback((start, end) => {
    return [
      {
        date: start,
        cellCssClass: 'vacation-check-in',
      },
      {
        date: end,
        cellCssClass: 'vacation-check-out',
      },
      {
        start: new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1),
        end: new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1),
        background: '#ffbaba80',
        cellCssClass: 'vacation-booked',
      },
    ];
  }, []);

  React.useEffect(() => {
    const monthColors = [
      {
        background: '#b2f1c080',
        start: 'dyndatetime(y,1,1)',
        end: 'dyndatetime(y,1,31)',
        cellCssClass: 'md-book-rental-bg-off',
        recurring: {
          repeat: 'yearly',
          month: 1,
          day: 1,
        },
      },
      {
        background: '#b2f1c080',
        start: 'dyndatetime(y,2,1)',
        end: 'dyndatetime(y,2,28)',
        cellCssClass: 'md-book-rental-bg-off',
        recurring: {
          repeat: 'yearly',
          month: 2,
          day: 1,
        },
      },
      {
        background: '#b2f1c080',
        cellCssClass: 'md-book-rental-bg-off',
        recurring: {
          repeat: 'yearly',
          month: 2,
          day: 29,
        },
      },
      {
        background: '#a3cdff80',
        start: 'dyndatetime(y,3,1)',
        end: 'dyndatetime(y,3,31,23,59)',
        cellCssClass: 'md-book-rental-bg-pre',
        recurring: {
          repeat: 'yearly',
          month: 3,
          day: 1,
        },
      },
      {
        background: '#a3cdff80',
        start: 'dyndatetime(y,4,1)',
        end: 'dyndatetime(y,4,30)',
        cellCssClass: 'md-book-rental-bg-pre',
        recurring: {
          repeat: 'yearly',
          month: 4,
          day: 1,
        },
      },
      {
        background: '#a3cdff80',
        start: 'dyndatetime(y,5,1)',
        end: 'dyndatetime(y,5,31)',
        cellCssClass: 'md-book-rental-bg-pre',
        recurring: {
          repeat: 'yearly',
          month: 5,
          day: 1,
        },
      },
      {
        background: '#f7f7bb80',
        start: 'dyndatetime(y,6,1)',
        end: 'dyndatetime(y,6,30)',
        cellCssClass: 'md-book-rental-bg-in',
        recurring: {
          repeat: 'yearly',
          month: 6,
          day: 1,
        },
      },
      {
        background: '#f7f7bb80',
        start: 'dyndatetime(y,7,1)',
        end: 'dyndatetime(y,7,31)',
        cellCssClass: 'md-book-rental-bg-in',
        recurring: {
          repeat: 'yearly',
          month: 7,
          day: 1,
        },
      },
      {
        background: '#f7f7bb80',
        start: 'dyndatetime(y,8,1)',
        end: 'dyndatetime(y,8,31)',
        cellCssClass: 'md-book-rental-bg-in',
        recurring: {
          repeat: 'yearly',
          month: 8,
          day: 1,
        },
      },
      {
        background: '#f7f7bb80',
        start: 'dyndatetime(y,9,1)',
        end: 'dyndatetime(y,9,30)',
        cellCssClass: 'md-book-rental-bg-in',
        recurring: {
          repeat: 'yearly',
          month: 9,
          day: 1,
        },
      },
      {
        background: '#f7f7bb80',
        start: 'dyndatetime(y,10,1)',
        end: 'dyndatetime(y,10,31,23,59)',
        cellCssClass: 'md-book-rental-bg-in',
        recurring: {
          repeat: 'yearly',
          month: 10,
          day: 1,
        },
      },
      {
        background: '#b2f1c080',
        start: 'dyndatetime(y,11,1)',
        end: 'dyndatetime(y,11,30)',
        cellCssClass: 'md-book-rental-bg-off',
        recurring: {
          repeat: 'yearly',
          month: 11,
          day: 1,
        },
      },
      {
        background: '#b2f1c080',
        start: 'dyndatetime(y,12,1)',
        end: 'dyndatetime(y,12,31)',
        cellCssClass: 'md-book-rental-bg-off',
        recurring: {
          repeat: 'yearly',
          month: 12,
          day: 1,
        },
      },
    ];

    getJson(
      'https://trial.mobiscroll.com/getrentals/?year=' + now.getFullYear() + '&month=' + now.getMonth(),
      (data) => {
        const prices = data.prices;
        const bookings = data.bookings;
        let labels = [];
        let invalids = [];
        let colors = [];
        let endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0);

        for (let i = 0; i < prices.length; ++i) {
          const price = prices[i];
          const booked = bookings.find((b) => formatDate('YYYY-M-D', new Date(b.checkIn)) === price.date);
          if (booked) {
            const checkIn = new Date(booked.checkIn);
            const checkOut = new Date(booked.checkOut);
            const newCheckOut = new Date(checkOut.getFullYear(), checkOut.getMonth(), checkOut.getDate() - 1);
            colors = [...colors, ...getColors(checkIn, checkOut)];
            labels.push({
              start: checkIn,
              end: newCheckOut,
              text: 'booked',
              textColor: '#1e1e1ecc',
            });
            invalids.push({
              start: checkIn,
              end: newCheckOut,
            });
            endDate = checkOut;
          } else if (new Date(price.date) >= endDate) {
            labels.push({
              date: new Date(price.date),
              text: price.text,
              textColor: price.textColor,
            });
          }
        }
        setLabels(labels);
        setInvalid(invalids);
        setColors([...colors, ...monthColors]);
      },
      'jsonp',
    );
  }, [getColors]);

  const calendarHeader = React.useCallback(() => {
    return (
      <React.Fragment>
        <CalendarNav />
        <div className="md-book-rental-header">
          <div className="md-book-rental-zone md-book-rental-pre">pre-season</div>
          <div className="md-book-rental-zone md-book-rental-in">in-season</div>
          <div className="md-book-rental-zone md-book-rental-off">off-season</div>
          <div className="md-book-rental-zone md-book-rental-booked">booked</div>
        </div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </React.Fragment>
    );
  }, []);

  return (
    <Datepicker
      cssClass="md-book-rental"
      controls={['calendar']}
      select="range"
      display="inline"
      calendarType="month"
      calendarSize={6}
      min="dyndatetime(y,m,d)"
      showRangeLabels={false}
      inRangeInvalid={false}
      rangeEndInvalid={true}
      renderCalendarHeader={calendarHeader}
      labels={labels}
      invalid={invalid}
      colors={colors}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
