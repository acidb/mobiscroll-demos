import React from 'react';
import { Datepicker, Input, Switch, SegmentedGroup, SegmentedItem, Textarea, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

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
      <label>
        <Input label="Title" placeholder="Name of the event" />
      </label>
      <label>
        <Input label="Location" placeholder="Where will it be?" />
      </label>
      <label>
        <Switch label="All day" value={allDay} onChange={controlChange} />
      </label>
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
