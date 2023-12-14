import React from 'react';
import React from 'react';
import { Datepicker, Button, Page, Toast /* localeImport */ } from '@mobiscroll/react';
import './presets.css';

import '@mobiscroll/react/dist/css/mobiscroll.min.css';

const now = new Date();
const curr = new Date();
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
const startWeek = new Date(curr.setDate(curr.getDate() - curr.getDay()));
const endWeek = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
const startMonth = new Date(curr.getFullYear(), curr.getMonth() - 1, 1);
const endMonth = new Date(curr.getFullYear(), curr.getMonth(), 0);

const App: React.FC = () => {
  const [value, setValue] = React.useState<any>(null);
  const [isOpen, setOpen] = React.useState(false);
  const [toastMsg, setMsg] = React.useState('');

  const openToast = React.useCallback((message: string) => {
    setMsg(message);
    setOpen(true);
  }, []);

  const closeToast = React.useCallback(() => {
    setOpen(false);
  }, []);

  const setToday = () => {
    setValue([now, now]);
    openToast('Today Selected');
  };

  const setYesterday = () => {
    setValue([yesterday, yesterday]);
    openToast('Yesterday Selected');
  };

  const setWeek = () => {
    setValue([startWeek, endWeek]);
    openToast('This Week Selected');
  };

  const setMonth = () => {
    setValue([startMonth, endMonth]);
    openToast('Last Mont Selected');
  };

  const clear = () => {
    setValue(null);
    openToast('Clear Value');
  };

  return (
    <Page className="md-range-filter">
      <h4 className="md-header">Filter Results by</h4>
      <div className="mbsc-padding">
        <Button onClick={setToday} className="mbsc-button-block">
          Today
        </Button>
        <Button onClick={setYesterday} className="mbsc-button-block">
          Yesterday
        </Button>
        <Button onClick={setWeek} className="mbsc-button-block">
          This Week
        </Button>
        <Button onClick={setMonth} className="mbsc-button-block">
          Last Month
        </Button>
        <Button onClick={clear} className="mbsc-button-block">
          Clear
        </Button>
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Or by a custom range</div>
        <Datepicker
          // theme
          // locale
          controls={['calendar']}
          select="range"
          display="inline"
          showRangeLabels={false}
          value={value}
        />
      </div>
      <Toast message={toastMsg} isOpen={isOpen} onClose={closeToast} />
    </Page>
  );
};

export default App;
export default App;
