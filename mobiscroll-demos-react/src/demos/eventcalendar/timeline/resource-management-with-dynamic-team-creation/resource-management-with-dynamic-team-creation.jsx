import { Button, Draggable, Dropcontainer, Eventcalendar, Page, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './resource-management-with-dynamic-team-creation.css';

setOptions({
  // localeJs,
  // themeJs
});

function Task(props) {
  const [draggable, setDraggable] = useState();

  const setDragElm = useCallback((elm) => {
    setDraggable(elm);
  }, []);

  const resource = props.data;

  return (
    <div id={'task-' + resource.id} className="mds-ext-res-item" ref={setDragElm}>
      <div className="mbsc-flex">
        <div className="mds-ext-res-avatar" style={{ background: resource.color }}>
          {resource.name[0]}
        </div>
        <div className="mds-ext-res-cont">
          <div className="mds-ext-res-name">{resource.name}</div>
          <div className="mds-ext-res-title">{resource.title}</div>
        </div>
        <Draggable dragData={resource} element={draggable} type="resource" />
      </div>
    </div>
  );
}

Task.propTypes = {
  data: PropTypes.object.isRequired,
};

function App() {
  const timelineRef = useRef();
  const installerRef = useRef();
  const tasks = useMemo(
    () => [
      {
        id: 1,
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Electrical wiring installation',
        resource: 1,
      },
      {
        id: 2,
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Power panel connection',
        resource: 1,
      },
      {
        id: 3,
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Water pipe fitting',
        resource: 2,
      },
      //<hide-comment>
      {
        id: 4,
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Leak inspection and sealing',
        resource: 2,
      },
      {
        id: 5,
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Wood framing for new walls',
        resource: 3,
      },
      {
        id: 6,
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Door and window frame assembly',
        resource: 3,
      },
      {
        id: 7,
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Bricklaying for foundation',
        resource: 9,
      },
      {
        id: 8,
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,16)',
        title: 'Applying cement mortar',
        resource: 9,
      },
      {
        id: 9,
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Welding steel beams',
        resource: 4,
      },
      {
        id: 10,
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Structural reinforcement welding',
        resource: 4,
      },
      {
        id: 11,
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,14)',
        title: 'Operating bulldozer for site leveling',
        resource: 5,
      },
      {
        id: 12,
        start: 'dyndatetime(y,m,d,14,20)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Material lifting with crane',
        resource: 5,
      },
      {
        id: 13,
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Land survey for new roads',
        resource: 10,
      },
      {
        id: 14,
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Boundary marking for structures',
        resource: 10,
      },
      {
        id: 15,
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Concrete floor polishing',
        resource: 6,
      },
      {
        id: 16,
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Applying protective coatings on concrete',
        resource: 6,
      },
      {
        id: 17,
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Steel frame installation',
        resource: 7,
      },
      {
        id: 18,
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Bolting and securing steel structures',
        resource: 7,
      },
      {
        id: 19,
        start: 'dyndatetime(y,m,d,10)',
        end: 'dyndatetime(y,m,d,14)',
        title: 'Interior painting preparation',
        resource: 8,
      },
      {
        id: 20,
        start: 'dyndatetime(y,m,d,15)',
        end: 'dyndatetime(y,m,d,18,10)',
        title: 'Applying finishing coats',
        resource: 8,
      },
      {
        id: 21,
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Glass panel measurement and cutting',
        resource: 11,
      },
      {
        id: 22,
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Installing large glass windows',
        resource: 11,
      },
      {
        id: 23,
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Concrete foundation pouring',
        resource: 12,
      },
      {
        id: 24,
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Curing and leveling concrete',
        resource: 12,
      },
      {
        id: 25,
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,15)',
        title: 'Structural steel beam welding',
        resource: 13,
      },
      {
        id: 26,
        start: 'dyndatetime(y,m,d,16)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Reinforcement bar assembly',
        resource: 13,
      },
      {
        id: 27,
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,14)',
        title: 'Excavation for foundation',
        resource: 14,
      },
      {
        id: 28,
        start: 'dyndatetime(y,m,d,15)',
        end: 'dyndatetime(y,m,17,30)',
        title: 'Operating crane for material transport',
        resource: 14,
      },
      {
        id: 29,
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Land survey for new section',
        resource: 15,
      },
      {
        id: 30,
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Marking layout for construction work',
        resource: 15,
      },
      {
        id: 31,
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Exterior wall painting',
        resource: 16,
      },
      {
        id: 31,
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Applying protective coatings',
        resource: 16,
      },
      {
        id: 33,
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Roof tiling installation',
        resource: 17,
      },
      {
        id: 34,
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,17,45)',
        title: 'Leak-proofing and insulation work',
        resource: 17,
      },
      {
        id: 35,
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Plastering interior walls',
        resource: 18,
      },
      {
        id: 36,
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Ceiling plaster and finishing',
        resource: 18,
      },
      {
        id: 37,
        start: 'dyndatetime(y,m,d,10)',
        end: 'dyndatetime(y,m,d,15)',
        title: 'Controlled demolition of old structure',
        resource: 19,
      },
      {
        id: 38,
        start: 'dyndatetime(y,m,d,15,15)',
        end: 'dyndatetime(y,m,d,17,45)',
        title: 'Site cleanup and debris removal',
        resource: 19,
      },
      //</hide-comment>
    ],
    [],
  );
  const [installers, setInstallers] = useState([
    {
      id: 'it-1',
      name: 'Installer team 1',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 1,
          name: 'Emily Carter',
          color: '#007acc',
          title: 'Electrician',
        },
        {
          id: 2,
          name: 'Michael Lawson',
          color: '#008000',
          title: 'Plumber',
        },
      ],
    },
    //<hide-comment>
    {
      id: 'it-2',
      name: 'Installer team 2',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 3,
          name: 'James Brown',
          color: '#FF5733',
          title: 'Carpenter',
        },
      ],
    },
    {
      id: 'it-3',
      name: 'Installer team 3',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 4,
          name: 'Daniel Wilson',
          color: '#900C3F',
          title: 'Welder',
        },
      ],
    },
    {
      id: 'it-4',
      name: 'Installer team 4',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 5,
          name: 'Benjamin Harris',
          color: '#1ABC9C',
          title: 'Heavy Equipment Operator',
        },
      ],
    },
    {
      id: 'it-5',
      name: 'Installer team 5',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 6,
          name: 'William Anderson',
          color: '#F39C12',
          title: 'Concrete Finisher',
        },
        {
          id: 7,
          name: 'Emma Thompson',
          color: '#D35400',
          title: 'Steelworker',
        },
      ],
    },
    {
      id: 'it-6',
      name: 'Installer team 6',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 8,
          name: 'Alexander Roberts',
          color: '#8E44AD',
          title: 'Painter',
        },
      ],
    },
    //</hide-comment>
  ]);
  const [availableInstallers, setAvailableInstallers] = useState([
    {
      id: 9,
      name: 'Adam Miller',
      color: '#C70039',
      title: 'Mason',
    },
    {
      id: 10,
      name: 'Isabella Martinez',
      color: '#2ECC71',
      title: 'Surveyor',
    },
    {
      id: 11,
      name: 'Mark White',
      color: '#34495E',
      title: 'Glazier',
    },
    //<hide-comment>
    {
      id: 12,
      name: 'Liam Foster',
      color: '#1E90FF',
      title: 'Concrete Finisher',
    },
    {
      id: 13,
      name: 'Sophia Adams',
      color: '#FF4500',
      title: 'Steelworker',
    },
    {
      id: 14,
      name: 'Ethan Murphy',
      color: '#228B22',
      title: 'Heavy Equipment Operator',
    },
    {
      id: 15,
      name: 'Ava Mitchell',
      color: '#FFD700',
      title: 'Surveyor',
    },
    {
      id: 16,
      name: 'Noah Carter',
      color: '#8B4513',
      title: 'Painter',
    },
    {
      id: 17,
      name: 'Emma Scott',
      color: '#800080',
      title: 'Roofer',
    },
    {
      id: 18,
      name: 'William Bennett',
      color: '#DC143C',
      title: 'Plasterer',
    },
    {
      id: 19,
      name: 'Olivia Parker',
      color: '#4682B4',
      title: 'Demolition Specialist',
    },
    //</hide-comment>
  ]);
  const [dropCont, setDropCont] = useState();
  const [toastText, setToastText] = useState('');
  const [isToastOpen, setIsToastOpen] = useState(false);

  const myView = useMemo(
    () => ({
      timeline: { type: 'day', resourceReorder: true, startTime: '07:00', endTime: '18:00' },
    }),
    [],
  );

  const setDropElm = useCallback((elm) => {
    setDropCont(elm);
  }, []);

  const handleResourceCreate = useCallback(
    (args) => {
      setAvailableInstallers(availableInstallers.filter((item) => item.id !== args.resource.id));
      setToastText(args.resource.name + ' added to ' + args.parent.name);
      setIsToastOpen(true);
    },
    [availableInstallers],
  );

  const handleResourceDelete = useCallback((args) => {
    setToastText(args.resource.name + ' removed from ' + args.parent.name);
    setIsToastOpen(true);
  }, []);

  const handleItemDrop = useCallback(
    (args) => {
      if (args.data) {
        setAvailableInstallers([...availableInstallers, args.data]);
      }
    },
    [availableInstallers],
  );

  const handleResourceOrderUpdate = useCallback((args) => {
    const parent = args.parent;
    const oldParent = args.oldParent;

    if (parent && parent.children) {
      // remove placeholder resource
      parent.children = parent.children.filter((child) => !child.placeholder);
    }
    if (oldParent && !oldParent.children.length) {
      // add placeholder resource
      oldParent.children.push({
        id: 'ph-' + oldParent.id,
        name: 'Drag Technicians here',
        placeholder: true,
        reorder: false,
      });
    }
  }, []);

  const handleCloseToast = useCallback(() => {
    setIsToastOpen(false);
  }, []);

  const addNewTeam = useCallback(() => {
    const teamLength = installers.length + 1;
    const resourceId = 'it-' + teamLength;
    setInstallers([
      ...installers,
      {
        id: resourceId,
        eventCreation: false,
        reorder: false,
        name: 'Installer team ' + teamLength,
        children: [
          {
            id: 'ph-' + resourceId,
            name: 'Drag Technicians here',
            placeholder: true,
            reorder: false,
          },
        ],
      },
    ]);

    if (timelineRef && timelineRef.current) {
      timelineRef.current.navigateToEvent({
        start: new Date(),
        resource: 'it-' + teamLength,
      });
    }
  }, [installers]);

  const resourceHeader = useCallback(
    () => (
      <div className="mbsc-flex mbsc-align-items-center">
        <div className="mds-ext-res-header mbsc-flex-1-1">Set up teams</div>
        <Button variant="outline" className="mds-ext-res-add" onClick={addNewTeam}>
          Add team
        </Button>
      </div>
    ),
    [addNewTeam],
  );

  const renderResource = useCallback(
    (resource) =>
      resource.children || resource.placeholder ? (
        <div className={'mds-ext-res-name ' + (resource.placeholder ? ' mds-ext-res-name-ph' : '')}>{resource.name}</div>
      ) : (
        <div className="mbsc-flex">
          <div className="mds-ext-res-avatar" style={{ background: resource.color }}>
            {resource.name[0]}
          </div>
          <div className="mds-ext-res-cont">
            <div className="mds-ext-res-name">{resource.name}</div>
            <div className="mds-ext-res-title">{resource.title}</div>
          </div>
        </div>
      ),
    [],
  );

  useEffect(() => {
    if (installerRef.current) {
      installerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [installerRef, availableInstallers]);

  return (
    <Page className="mds-ext-res-drop">
      <div className="mbsc-grid mbsc-no-padding">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-3 mbsc-flex-col mds-ext-res-drop-cont" ref={setDropElm}>
            <Dropcontainer onItemDrop={handleItemDrop} element={dropCont}>
              <div className="mds-ext-res-header">Available technicians</div>
              <div className="mds-ext-res-list">
                {availableInstallers.map((task) => (
                  <div key={task.id} ref={installerRef}>
                    <Task data={task} />
                  </div>
                ))}
              </div>
            </Dropcontainer>
          </div>
          <div className="mbsc-col-sm-9 mds-ext-res-drop-calendar">
            <Eventcalendar
              height={600}
              ref={timelineRef}
              data={tasks}
              resources={installers}
              view={myView}
              dragBetweenResources={false}
              externalResourceDrop={true}
              externalResourceDrag={true}
              renderResourceHeader={resourceHeader}
              renderResource={renderResource}
              onResourceCreate={handleResourceCreate}
              onResourceDelete={handleResourceDelete}
              onResourceOrderUpdate={handleResourceOrderUpdate}
            />
            <Toast message={toastText} isOpen={isToastOpen} onClose={handleCloseToast} />
          </div>
        </div>
      </div>
    </Page>
  );
}

export default App;
