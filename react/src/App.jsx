import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import CompareResources from './demos/eventcalendar/timeline/compare-resources-fixed-at-top/compare-resources-fixed-at-top';
import WorkWeekHours from './demos/eventcalendar/scheduler/work-week-hours/work-week-hours';
import './App.css';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
    },
    {
      path: '/timeline/compare-resources',
      element: <CompareResources />,
    },
    {
      path: '/schedule/work-week-hours',
      element: <WorkWeekHours />,
    },
  ]);
  return (
    <>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </>
  );
}

export default App;
