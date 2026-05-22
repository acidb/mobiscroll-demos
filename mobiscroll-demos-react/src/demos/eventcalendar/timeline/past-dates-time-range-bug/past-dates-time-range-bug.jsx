import { dayjsTimezone, Eventcalendar, setOptions /* localeImport */ } from '@mobiscroll/react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import moment from 'moment';
import { useCallback, useMemo } from 'react';
import './past-dates-time-range-bug.css';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjsTimezone.dayjs = dayjs;

setOptions({
  // localeJs,
  // themeJs
});

// Range: yesterday 22:00 UTC → today 06:00 UTC (crosses midnight).
// RefDate is yesterday — the column the view is anchored to.
const startDateTime = moment.utc().subtract(1, 'days').startOf('day').add(22, 'hours').toISOString();
const endDateTime = moment.utc().startOf('day').add(6, 'hours').toISOString();

const day1Utc = moment.utc(startDateTime).format('MMM D, YYYY'); // Yesterday
const day2Utc = moment.utc(endDateTime).format('MMM D, YYYY'); // Today

const myResources = [
  { id: 1, name: 'Resource A', color: '#3b82f6' },
  { id: 2, name: 'Resource B', color: '#22c55e' },
];

const myEvents = [
  {
    id: 1,
    start: startDateTime,
    end: endDateTime,
    title: 'Overnight event',
    resource: 1,
    color: '#3b82f6',
  },
];

// StartTime / endTime are relative to refDate — always use startDateTime as the base.
const getTimeWithSuffix = (dateTime, baseDateTime) => {
  if (!dateTime) return undefined;
  const date = moment.utc(dateTime);
  const base = moment.utc(baseDateTime);
  const time = date.format('HH:00');
  const diffDays = date.clone().startOf('day').diff(base.clone().startOf('day'), 'days');
  if (diffDays > 0) return `${time}+${diffDays}`;
  if (diffDays < 0) return `${time}${diffDays}`;
  return time;
};

const startTime = getTimeWithSuffix(startDateTime, startDateTime); // "22:00"
const endTime = getTimeWithSuffix(endDateTime, startDateTime); // "06:00+1"

function App() {
  // RefDate = yesterday 00:00 UTC — the anchor column for the view.
  const refDate = useMemo(() => moment.utc(startDateTime).startOf('day').toDate(), []);
  const myView = useMemo(() => ({ timeline: { type: 'day', startTime, endTime } }), []);

  // View spans two calendar days: day1Utc (22:00→00:00) and day2Utc (00:00→06:00).
  // RenderTimelineDay fires TWICE — once per visible day section.
  // Expected: section 1 → args.date = day1Utc, section 2 → args.date = day2Utc.
  //
  // Actual (product bug): Mobiscroll builds each shifted-header entry by spreading the
  // column object, which carries date = refDate (= day1Utc midnight UTC). The per-section
  // calendar date is computed only for dateText (display string) but is NOT written back
  // to the date property. So args.date is always refDate for every section.
  const renderDay = useCallback((args) => {
    const received = moment.utc(args.date).format('MMM D, YYYY');
    const isDay2 = received === day2Utc;
    return (
      <div className={'md-past-day-header' + (isDay2 ? ' md-past-day-header-ok' : ' md-past-day-header-wrong')}>
        <div className="md-past-day-header-label">args.date →</div>
        <div className="md-past-day-header-date">{received}</div>
        {isDay2 && <div className="md-past-day-header-note">✓ correct</div>}
        {!isDay2 && <div className="md-past-day-header-bug">✗ bug: should be {day2Utc} for this section</div>}
      </div>
    );
  }, []);

  return (
    <div className="md-past-dates-demo">
      {/* ── Context ─────────────────────────────────────────────────────────── */}
      <div className="md-past-context">
        <strong>Scenario:</strong> timeline spans <code>{day1Utc}</code> 22:00 UTC →{' '}
        <code>{day2Utc}</code> 06:00 UTC. Two calendar-day sections are visible.
        <br />
        <strong>Bug:</strong> <code>renderTimelineDay</code> fires twice, but{' '}
        <code>args.date</code> is <strong>always</strong> the refDate (
        <code>{day1Utc}</code>). The second section should receive{' '}
        <code>{day2Utc}</code>, but it gets <code>{day1Utc}</code> instead.
        <br />
        <strong>Root cause:</strong> Mobiscroll computes the correct calendar date for{' '}
        <code>dateText</code> (the built-in header label) but does not write it back to the{' '}
        <code>date</code> property passed in <code>args</code>. Every shifted section
        inherits the column&apos;s base date (refDate).
      </div>

      {/* ── Calendar ────────────────────────────────────────────────────────── */}
      <div className="md-past-section md-past-section-bug">
        <div className="md-past-section-title">
          <span className="md-past-badge md-past-badge-bug">Product bug</span>
          renderTimelineDay — args.date is always refDate in shifted views
        </div>
        <p className="md-past-desc">
          Section 1 (<code>{day1Utc}</code> 22:00–00:00) and section 2 (<code>{day2Utc}</code>{' '}
          00:00–06:00) both receive <code>args.date = {day1Utc} 00:00 UTC</code>. The header
          for section 2 is highlighted in red below because it shows the wrong date.
        </p>
        <Eventcalendar
          cssClass="md-past-calendar"
          data={myEvents}
          dataTimezone="utc"
          displayTimezone="utc"
          refDate={refDate}
          resources={myResources}
          selectedDate={refDate}
          showControls={false}
          timezonePlugin={dayjsTimezone}
          view={myView}
          renderTimelineDay={renderDay}
        />
        <div className="md-past-observation">
          <span className="md-past-observation-label">What you see:</span>
          section 1 happens to show the right date (it&apos;s the refDate). Section 2 shows{' '}
          <code>{day1Utc}</code> but should show <code>{day2Utc}</code> — the{' '}
          <code>args.date</code> value is incorrect for every non-first section.
        </div>
      </div>

      {/* ── Workaround note ─────────────────────────────────────────────────── */}
      <div className="md-past-section md-past-section-fix">
        <div className="md-past-section-title">
          <span className="md-past-badge md-past-badge-fix">Workaround</span>
          Compute the date from refDate + section index
        </div>
        <p className="md-past-desc">
          Until Mobiscroll fixes the <code>date</code> property, track the section order
          manually. Because <code>renderTimelineDay</code> fires in chronological order, section{' '}
          <em>n</em> corresponds to <code>refDate + n days</code>. Use a{' '}
          <code>useRef</code> counter that resets on each render cycle:
        </p>
        <pre className="md-past-code">{`const sectionIndexRef = useRef(0);

// Reset before each render pass (call in the parent render body, not in the callback).
sectionIndexRef.current = 0;

const renderDay = useCallback((args) => {
  const idx = sectionIndexRef.current++;
  const date = moment.utc(refDate).add(idx, 'days');
  return <div>{date.format('ddd, MMM D, YYYY')}</div>;
}, [refDate]);`}</pre>
        <div className="md-past-observation md-past-observation-fix">
          <span className="md-past-observation-label">Caveat:</span>
          this relies on render call order being stable and is not safe under React Strict
          Mode double-invocation. The correct fix is a Mobiscroll product change: write the
          per-section calendar date into <code>args.date</code> instead of always passing the
          column base date.
        </div>
      </div>
    </div>
  );
}

export default App;
