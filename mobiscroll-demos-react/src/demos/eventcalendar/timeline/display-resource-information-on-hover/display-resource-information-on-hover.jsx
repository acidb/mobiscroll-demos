import { Button, Eventcalendar, Popup, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useMemo, useRef, useState } from 'react';
import './display-resource-information-on-hover.css';

setOptions({
  // localeJs,
  // themeJs
});

const myEvents = [
  {
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Repoint Brick Facade',
    resource: 'res1',
  },
  {
    start: 'dyndatetime(y,m,d-1,9)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Install Custom Wood Trim',
    resource: 'res3',
  },
  {
    start: 'dyndatetime(y,m,d-1,14)',
    end: 'dyndatetime(y,m,d-1,18)',
    title: 'Repair Steel Stair Treads',
    resource: 'res4',
  },
  {
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,13)',
    title: 'Pour and Finish Driveway Slab',
    resource: 'res6',
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,16)',
    title: 'Paint Interior Drywall',
    resource: 'res8',
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,11)',
    title: 'Block Wall Construction',
    resource: 'res1',
  },
  {
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Task 2',
    resource: 'Paver Installation',
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,17)',
    title: 'Install ceiling fan',
    resource: 'res2',
  },
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Roof Beam Replacement',
    resource: 'res3',
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Custom Metalworks Creation',
    resource: 'res4',
  },
  {
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,17)',
    title: 'Pipe Welding',
    resource: 'res4',
  },
  {
    start: 'dyndatetime(y,m,10,8)',
    end: 'dyndatetime(y,m,11,20)',
    title: 'Leak Detection & Repair',
    resource: 'res5',
  },
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,17)',
    title: 'Faucet & Sink Fitting',
    resource: 'res5',
  },
  {
    start: 'dyndatetime(y,m,d,18)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'Drainage System Setup',
    resource: 'res5',
  },
  {
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Surface Polishing',
    resource: 'res6',
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Structural Steel Inspections',
    resource: 'res7',
  },
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Metal Structure Assembly',
    resource: 'res7',
  },
  {
    start: 'dyndatetime(y,m,d,17)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Heavy Steel Beam Placement',
    resource: 'res7',
  },
  {
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Exterior House Painting',
    resource: 'res8',
  },
  {
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Deck Staining & Sealing',
    resource: 'res8',
  },
  {
    start: 'dyndatetime(y,m,d+1,12)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Troubleshoot Faulty Breaker',
    resource: 'res2',
  },
  {
    start: 'dyndatetime(y,m,d+1,10)',
    end: 'dyndatetime(y,m,d+1,13)',
    title: 'Frame Interior Partitions',
    resource: 'res3',
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,20)',
    title: 'Weld Structural Beam Connections',
    resource: 'res4',
  },
  {
    start: 'dyndatetime(y,m,d+1,12)',
    end: 'dyndatetime(y,m,d+1,16)',
    title: 'Apply Smooth Trowel Finish to Basement Floor',
    resource: 'res6',
  },
];

const myResources = [
  {
    id: 'res1',
    name: 'Adam Miller',
    color: '#F39C12',
    profession: 'Mason',
    avatar: 'https://img.mobiscroll.com/demos/m1.png',
    cost: '15',
  },
  {
    id: 'res2',
    name: 'Emily Carter',
    color: '#76e083',
    profession: 'Electrician',
    avatar: 'https://img.mobiscroll.com/demos/f1.png',
    cost: '20',
  },
  {
    id: 'res3',
    name: 'James Brown',
    color: '#b13f49',
    profession: 'Carpenter',
    avatar: 'https://img.mobiscroll.com/demos/m2.png',
    cost: '18',
  },
  {
    id: 'res4',
    name: 'Daniel Wilson',
    color: '#e25dd2',
    profession: 'Welder',
    avatar: 'https://img.mobiscroll.com/demos/m3.png',
    cost: '22',
  },
  {
    id: 'res5',
    name: 'Benjamin Harris',
    color: '#7056ff',
    profession: 'Plumber',
    avatar: 'https://img.mobiscroll.com/demos/m4.png',
    cost: '20',
  },
  {
    id: 'res6',
    name: 'Olivia Anderson',
    color: '#56aaff',
    profession: 'Concrete Finisher',
    avatar: 'https://img.mobiscroll.com/demos/f2.png',
    cost: '15',
  },
  {
    id: 'res7',
    name: 'Emma Thompson',
    color: '#84852f',
    profession: 'Steelworker',
    avatar: 'https://img.mobiscroll.com/demos/f3.png',
    cost: '18',
  },
  {
    id: 'res8',
    name: 'Natalie Roberts',
    color: '#ff6e56',
    profession: 'Painter',
    avatar: 'https://img.mobiscroll.com/demos/f4.png',
    cost: '25',
  },
];

function getTotalHoursForResource(resourceId) {
  return myEvents
    .filter((e) => e.resource === resourceId)
    .reduce((sum, e) => {
      const start = new Date(e.start);
      const end = new Date(e.end);
      const hours = (end - start) / (1000 * 60 * 60);
      return sum + hours;
    }, 0);
}

function App() {
  const myView = useMemo(
    () => ({
      timeline: {
        type: 'day',
        startTime: '07:00',
        endTime: '22:00',
      },
    }),
    [],
  );

  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipAnchor, setTooltipAnchor] = useState(null);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [currentResource, setCurrentResource] = useState(null);
  const [resourceName, setResourceName] = useState('');
  const [resourceCost, setResourceCost] = useState('');
  const [resourceTotal, setResourceTotal] = useState('');

  const openTimer = useRef(null);
  const closeTimer = useRef(null);

  // Handles both Mobiscroll hover and native mouse events
  const openTooltipWithDelay = useCallback((args, anchorTarget) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    if (openTimer.current) {
      clearTimeout(openTimer.current);
    }
    openTimer.current = setTimeout(() => {
      const res = args.resource;
      setCurrentResource(res);
      setResourceName(res.name);
      setResourceCost(`$${res.cost}/hour`);
      setResourceTotal(`$${getTotalHoursForResource(res.id) * res.cost} (${getTotalHoursForResource(res.id)}h)`);
      setTooltipAnchor(anchorTarget || args.domEvent.target.closest('.mbsc-timeline-resource'));
      setTooltipOpen(true);
      openTimer.current = null;
    }, 100);
  }, []);

  const closeTooltipWithDelay = useCallback(() => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
    }
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    closeTimer.current = setTimeout(() => {
      setTooltipOpen(false);
      closeTimer.current = null;
    }, 200);
  }, []);

  // Mobiscroll resource hover events
  const handleResourceHoverIn = (args) => {
    openTooltipWithDelay(args);
  };

  const handleResourceHoverOut = (args) => {
    args.domEvent.target.classList.remove('mds-resource-info-hover');
    closeTooltipWithDelay();
  };

  // Native mouse events for the popup
  const handlePopupMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
  };

  const handlePopupMouseLeave = () => {
    closeTooltipWithDelay();
  };

  const renderMyResource = useCallback(
    (res) => (
      <div className="mbsc-flex">
        <img className="mds-res-info-avatar" src={res.avatar} alt="Avatar" />
        <div className="mds-res-info-cont">
          <div className="mds-res-info-name">{res.name}</div>
          <div className="mds-res-info-prof">{res.profession}</div>
        </div>
      </div>
    ),
    [],
  );

  const handlePay = () => {
    setTooltipOpen(false);
    setToastMessage(`${currentResource.profession} payed`);
    setToastOpen(true);
  };

  const handleEdit = () => {
    setTooltipOpen(false);
    setToastMessage(`Edit ${currentResource.name}'s profile`);
    setToastOpen(true);
  };

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handleTooltipClose = useCallback(() => {
    setTooltipOpen(false);
  }, []);

  return (
    <>
      <Eventcalendar
        data={myEvents}
        resources={myResources}
        view={myView}
        onResourceHoverIn={handleResourceHoverIn}
        onResourceHoverOut={handleResourceHoverOut}
        renderResource={renderMyResource}
      />
      <Popup
        anchor={tooltipAnchor}
        display="anchored"
        isOpen={isTooltipOpen}
        showOverlay={false}
        touchUi={false}
        onClose={handleTooltipClose}
        // Mouse events for tooltip hover
        onMouseEnter={handlePopupMouseEnter}
        onMouseLeave={handlePopupMouseLeave}
      >
        <div className="mds-resource-info-header mbsc-flex">
          <div className="mds-resource-info-name">{resourceName}</div>
          <Button
            icon="pencil"
            color="secondary"
            variant="outline"
            className="mds-resource-info-edit-btn mbsc-pull-right"
            onClick={handleEdit}
          />
        </div>
        <div className="mds-resource-info-cont">
          <div>
            Rate: <span className="mds-resource-info-detail">{resourceCost}</span>
          </div>
          <div>
            Today: <span className="mds-resource-info-detail">{resourceTotal}</span>
          </div>
        </div>
        <div className="mds-resource-info-btn-cont">
          <Button color="success" className="mds-resource-info-pay-btn" onClick={handlePay}>
            Pay now
          </Button>
        </div>
      </Popup>
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleToastClose} />
    </>
  );
}

export default App;
