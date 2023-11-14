export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Demos</h1>
          <nav>
            <h2>EVENT CALENDAR</h2>
            <h3>TIMELINE DEMOS</h3>
            <ul>
              <li>
                <a href={'/timeline/compare-resources'}>Compare resources</a>
              </li>
            </ul>
            <h3>SCHEDULER DEMOS</h3>
            <ul>
              <li>
                <a href={'/schedule/work-week-hours'}>Work week hours</a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }