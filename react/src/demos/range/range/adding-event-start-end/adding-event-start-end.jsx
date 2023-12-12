import React from 'react';
//<demo-only>import { Datepicker, Input, Switch, SegmentedGroup, SegmentedItem, Textarea, Page, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;
const Input = mobiscroll.Input;
const Switch = mobiscroll.Switch;
const SegmentedGroup = mobiscroll.SegmentedGroup;
const SegmentedItem = mobiscroll.SegmentedItem;
const Textarea = mobiscroll.Textarea;
const Page = mobiscroll.Page;
const setOptions = mobiscroll.setOptions; //</extra>

setOptions({
  // langJs,
  // themeJs
});

function App() {
  const [start, setStart] = React.useState(null);
  const [end, setEnd] = React.useState(null);
  const [allDay, setAllDay] = React.useState(false);
  const [showAs, setShowAs] = React.useState('busy');

  const controls = React.useMemo(() => (allDay ? ['date'] : ['datetime']));
  const controlChange = (ev) => {
    setAllDay(ev.target.checked);
  };
  const showAsChange = (ev) => {
    setShowAs(ev.target.value);
  };
  return (
    <Page>
      <Input label="Title" placeholder="Name of the event" />
      <Input label="Location" placeholder="Where will it be?" />
      <Switch label="All day" value={allDay} onChange={controlChange} />
      <Datepicker controls={controls} select="range" startInput={start} endInput={end} />
      <Input ref={setStart} label="Start" placeholder="Event start" />
      <Input ref={setEnd} label="End " placeholder="Event end" />
      <SegmentedGroup value={showAs} onChange={showAsChange}>
        <SegmentedItem value="busy">Show as busy</SegmentedItem>
        <SegmentedItem value="free">Show as free</SegmentedItem>
      </SegmentedGroup>
      <Textarea label="Notes" placeholder="Enter notes, URL, comments" />
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
