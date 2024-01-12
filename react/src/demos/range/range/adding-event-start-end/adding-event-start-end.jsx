import { Datepicker, Input, Page, Switch, SegmentedGroup, SegmentedItem, setOptions, Textarea /* localeImport */ } from '@mobiscroll/react';
import { useState, useMemo, useCallback } from 'react';

setOptions({
  // langJs,
  // themeJs
});

function App() {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [allDay, setAllDay] = useState(false);
  const [showAs, setShowAs] = useState('busy');

  const controls = useMemo(() => (allDay ? ['date'] : ['datetime']), [allDay]);

  const controlChange = useCallback((ev) => {
    setAllDay(ev.target.checked);
  }, []);

  const showAsChange = useCallback((ev) => {
    setShowAs(ev.target.value);
  }, []);

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

export default App;
