import React from 'react';
import { setOptions, Eventcalendar /* localeImport */ } from '@mobiscroll/react';
import './resource-grouping-hierarchy.css';

setOptions({
  // localeJs,
  // themeJs
});

let myResources = [
  {
    id: 'res1',
    name: 'Resource 1',
    color: '#1dab2f',
    fixed: true,
  },
  {
    id: 'res2',
    name: 'Resource 2',
    color: '#76e083',
  },
  {
    id: 'res3',
    name: 'Resource 3',
    color: '#4981d6',
  },
  {
    id: 'gro1',
    name: 'Group 1',
    color: '#ff1717',
    eventCreation: false,
    children: [
      {
        id: 'res4',
        name: 'Resource 4',
        color: '#f7961e',
      },
      {
        id: 'res5',
        name: 'Resource 5',
        color: '#34c8e0',
      },
    ],
  },
  {
    id: 'gro2',
    name: 'Group 2',
    collapsed: true,
    eventCreation: false,
    children: [
      {
        id: 'gro3',
        name: 'Group 3',
        color: '#af0000',
        eventCreation: false,
        children: [
          {
            id: 'res6',
            name: 'Resource 6',
            color: '#843100',
          },
          {
            id: 'res7',
            name: 'Resource 7',
            color: '#4caf00',
          },
          {
            id: 'res8',
            name: 'Resource 8',
            color: '#7056ff',
          },
        ],
      },
      {
        id: 'res9',
        name: 'Resource 9',
        color: '#4caf00',
      },
      {
        id: 'res10',
        name: 'Resource 10',
        color: '#e20000',
      },
    ],
  },
  {
    id: 'res11',
    name: 'Resource 11',
    color: '#d6d145',
  },
  {
    id: 'res12',
    name: 'Resource 12',
    color: '#e25dd2',
  },
  {
    id: 'res13',
    name: 'Resource 13',
    color: '#4caf00',
  },
  {
    id: 'res14',
    name: 'Resource 14',
    color: '#843100',
  },
  {
    id: 'res15',
    name: 'Resource 15',
    color: '#843100',
  },
  {
    id: 'res16',
    name: 'Resource 16',
    color: '#42bcf5',
  },
  {
    id: 'res17',
    name: 'Resource 17',
    color: '#f542ef',
  },
  {
    id: 'res18',
    name: 'Resource 18',
    color: '#f59b42',
  },
];

function App() {
  const [res, setRes] = React.useState(myResources);

  const myEvents = React.useMemo(() => {
    return [
      {
        start: 'dyndatetime(y,m,2)',
        end: 'dyndatetime(y,m,5)',
        title: 'Event 1',
        resource: 'res1',
      },
      {
        start: 'dyndatetime(y,m,10,9)',
        end: 'dyndatetime(y,m,15,15)',
        title: 'Event 2',
        resource: 'res3',
      },
      {
        start: 'dyndatetime(y,m,5)',
        end: 'dyndatetime(y,m,9)',
        title: 'Event 3',
        resource: 'res4',
      },
      {
        start: 'dyndatetime(y,m,12)',
        end: 'dyndatetime(y,m,14)',
        title: 'Event 4',
        resource: 'res4',
      },
      {
        start: 'dyndatetime(y,m,15,7)',
        end: 'dyndatetime(y,m,20,12)',
        title: 'Event 5',
        resource: 'res10',
      },
      {
        start: 'dyndatetime(y,m,3)',
        end: 'dyndatetime(y,m,10)',
        title: 'Event 6',
        resource: 'res11',
      },
      {
        start: 'dyndatetime(y,m,10,8)',
        end: 'dyndatetime(y,m,11,20)',
        title: 'Event 7',
        resource: 'res12',
      },
      {
        start: 'dyndatetime(y,m,22)',
        end: 'dyndatetime(y,m,28)',
        title: 'Event 8',
        resource: 'res12',
      },
      {
        start: 'dyndatetime(y,m,8)',
        end: 'dyndatetime(y,m,13)',
        title: 'Event 9',
        resource: 'res6',
      },
      {
        start: 'dyndatetime(y,m,25)',
        end: 'dyndatetime(y,m,27)',
        title: 'Event 10',
        resource: 'res6',
      },
      {
        start: 'dyndatetime(y,m,20)',
        end: 'dyndatetime(y,m,23)',
        title: 'Event 11',
        resource: 'res5',
      },
      {
        start: 'dyndatetime(y,m,15)',
        end: 'dyndatetime(y,m,20)',
        title: 'Event 12',
        resource: 'res7',
      },
    ];
  }, []);

  const view = React.useMemo(() => {
    return {
      timeline: {
        type: 'month',
      },
    };
  }, []);

  const test = () => {
    console.log('test', myResources);
    myResources[3].collapsed = true;
    console.log(myResources[3]);
    myResources = [...myResources];
    setRes(myResources);
  };

  return (
    <div>
      <button onClick={test}>Test</button>
      <Eventcalendar
        // theme
        // locale
        className="md-resource-grouping-hierarchy"
        clickToCreate={true}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        height={600}
        view={view}
        data={myEvents}
        resources={myResources}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
