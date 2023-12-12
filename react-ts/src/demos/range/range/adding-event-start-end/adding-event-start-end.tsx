import React from 'react';
import { Datepicker, Input, Switch, SegmentedGroup, SegmentedItem, Textarea, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // langJs,
  // themeJs
});

const App: React.FC = () => {
  const [start, setStart] = React.useState<any>(null);
  const [end, setEnd] = React.useState<any>(null);
  const [allDay, setAllDay] = React.useState<boolean>(false);
  const [showAs, setShowAs] = React.useState<string>('busy');

  const controls = React.useMemo<any>(() => (allDay ? ['date'] : ['datetime']), []);
  const controlChange = (ev: any) => {
    setAllDay(ev.target.checked);
  };
  const showAsChange = (ev: any) => {
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
};
