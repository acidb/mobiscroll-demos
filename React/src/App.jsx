import React from 'react'
// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import CompareResources from "./demos/event-calendar/timeline/compare-resources/compare-resources"
import WorkWeekHours from "./demos/event-calendar/scheduler/work-week-hours/work-week-hours"
import './App.css'
import '@mobiscroll/react/dist/css/mobiscroll.min.css'

function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
    },
    {
      path: "/timeline/compare-resources",
      element: <CompareResources/>,
    },
    {
      path: '/schedule/work-week-hours',
      element: <WorkWeekHours/>,
    }
  ]);
  return (
    <>
       <React.StrictMode>
          <RouterProvider router={router} />
      </React.StrictMode>

    </>
  )
}

export default App
