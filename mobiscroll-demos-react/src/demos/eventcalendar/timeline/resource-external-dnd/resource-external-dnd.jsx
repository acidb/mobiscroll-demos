import { Button, Draggable, Dropcontainer, Eventcalendar, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import PropTypes from 'prop-types';
import { useCallback, useMemo, useRef, useState } from 'react';
import './resource-external-dnd.css';

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
    <div ref={setDragElm} className="mbsc-flex mds-ext-res-drop-task">
      <div className="mds-ext-res-dnd-avatar" style={{ background: resource.color }}>
        {resource.name[0]}
      </div>
      <div className="mds-ext-res-dnd-cont">
        <div className="mds-ext-res-dnd-name">{resource.name}</div>
        <div className="mds-ext-res-dnd-titme">{resource.title}</div>
      </div>
      <Draggable dragData={resource} element={draggable} />
    </div>
  );
}

Task.propTypes = {
  data: PropTypes.object.isRequired,
};

function App() {
  const timelineRef = useRef();
  const constructionWork = useMemo(
    () => [
      // Group 1
      {
        id: 'work-1',
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Electrical wiring installation',
        resource: 2,
      },
      {
        id: 'work-2',
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Power panel connection',
        resource: 2,
      },
      {
        id: 'work-3',
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Water pipe fitting',
        resource: 3,
      },
      //<hide-comment>
      {
        id: 'work-4',
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Leak inspection and sealing',
        resource: 3,
      },
      {
        id: 'work-5',
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Wood framing for new walls',
        resource: 5,
      },
      {
        id: 'work-6',
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Door and window frame assembly',
        resource: 5,
      },
      {
        id: 'work-7',
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Bricklaying for foundation',
        resource: 6,
      },
      {
        id: 'work-8',
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,16)',
        title: 'Applying cement mortar',
        resource: 6,
      },
      {
        id: 'work-9',
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Welding steel beams',
        resource: 8,
      },
      {
        id: 'work-10',
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Structural reinforcement welding',
        resource: 8,
      },
      {
        id: 'work-11',
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Roof tiling',
        resource: 9,
      },
      {
        id: 'work-12',
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Leak-proofing and insulation',
        resource: 9,
      },
      {
        id: 'work-13',
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,14)',
        title: 'Operating bulldozer for site leveling',
        resource: 11,
      },
      {
        id: 'work-14',
        start: 'dyndatetime(y,m,d,14,20)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Material lifting with crane',
        resource: 11,
      },
      {
        id: 'work-15',
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Land survey for new roads',
        resource: 12,
      },
      {
        id: 'work-16',
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Boundary marking for structures',
        resource: 12,
      },
      {
        id: 'work-17',
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Concrete floor polishing',
        resource: 14,
      },
      {
        id: 'work-18',
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Applying protective coatings on concrete',
        resource: 14,
      },
      {
        id: 'work-19',
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Steel frame installation',
        resource: 15,
      },
      {
        id: 'work-20',
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Bolting and securing steel structures',
        resource: 15,
      },
      {
        id: 'work-21',
        start: 'dyndatetime(y,m,d,10)',
        end: 'dyndatetime(y,m,d,14)',
        title: 'Interior painting preparation',
        resource: 17,
      },
      {
        id: 'work-22',
        start: 'dyndatetime(y,m,d,15)',
        end: 'dyndatetime(y,m,d,18,10)',
        title: 'Applying finishing coats',
        resource: 17,
      },
      {
        id: 'work-23',
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Glass panel measurement and cutting',
        resource: 18,
      },
      {
        id: 'work-24',
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Installing large glass windows',
        resource: 18,
      },
      {
        id: 'work-3',
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Concrete foundation pouring',
        resource: 19,
      },
      {
        id: 'work-4',
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Curing and leveling concrete',
        resource: 19,
      },
      {
        id: 'work-5',
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,15)',
        title: 'Structural steel beam welding',
        resource: 20,
      },
      {
        id: 'work-6',
        start: 'dyndatetime(y,m,d,16)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Reinforcement bar assembly',
        resource: 20,
      },
      {
        id: 'work-7',
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,14)',
        title: 'Excavation for foundation',
        resource: 21,
      },
      {
        id: 'work-8',
        start: 'dyndatetime(y,m,d,15)',
        end: 'dyndatetime(y,m,17,30)',
        title: 'Operating crane for material transport',
        resource: 21,
      },
      {
        id: 'work-9',
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Land survey for new section',
        resource: 22,
      },
      {
        id: 'work-10',
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Marking layout for construction work',
        resource: 22,
      },
      {
        id: 'work-11',
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Exterior wall painting',
        resource: 23,
      },
      {
        id: 'work-12',
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Applying protective coatings',
        resource: 23,
      },
      {
        id: 'work-13',
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Roof tiling installation',
        resource: 24,
      },
      {
        id: 'work-14',
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,17,45)',
        title: 'Leak-proofing and insulation work',
        resource: 24,
      },
      {
        id: 'work-15',
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Plastering interior walls',
        resource: 25,
      },
      {
        id: 'work-16',
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Ceiling plaster and finishing',
        resource: 25,
      },
      {
        id: 'work-17',
        start: 'dyndatetime(y,m,d,10)',
        end: 'dyndatetime(y,m,d,15)',
        title: 'Controlled demolition of old structure',
        resource: 26,
      },
      {
        id: 'work-18',
        start: 'dyndatetime(y,m,d,15,15)',
        end: 'dyndatetime(y,m,d,17,45)',
        title: 'Site cleanup and debris removal',
        resource: 26,
      },
      //</hide-comment>
    ],
    [],
  );

  const [installers, setInstallers] = useState([
    {
      id: 1,
      name: 'Installer team 1',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 2,
          name: 'Emily Carter',
          color: '#007acc',
          title: 'Electrician',
        },
        {
          id: 3,
          name: 'Michael Lawson',
          color: '#008000',
          title: 'Plumber',
        },
      ],
    },
    //<hide-comment>
    {
      id: 4,
      name: 'Installer team 2',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 5,
          name: 'James Brown',
          color: '#FF5733',
          title: 'Carpenter',
        },
      ],
    },

    {
      id: 7,
      name: 'Installer team 3',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 8,
          name: 'Daniel Wilson',
          color: '#900C3F',
          title: 'Welder',
        },
      ],
    },
    {
      id: 10,
      name: 'Installer team 4',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 11,
          name: 'Benjamin Harris',
          color: '#1ABC9C',
          title: 'Heavy Equipment Operator',
        },
      ],
    },
    {
      id: 13,
      name: 'Installer team 5',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 14,
          name: 'William Anderson',
          color: '#F39C12',
          title: 'Concrete Finisher',
        },
        {
          id: 15,
          name: 'Emma Thompson',
          color: '#D35400',
          title: 'Steelworker',
        },
      ],
    },
    {
      id: 16,
      name: 'Installer team 6',
      eventCreation: false,
      reorder: false,
      children: [
        {
          id: 17,
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
      id: 6,
      name: 'Adam Miller',
      color: '#C70039',
      title: 'Mason',
      type: 'resource',
    },
    {
      id: 12,
      name: 'Isabella Martinez',
      color: '#2ECC71',
      title: 'Surveyor',
      type: 'resource',
    },
    {
      id: 18,
      name: 'Mark White',
      color: '#34495E',
      title: 'Glazier',
      type: 'resource',
    },
    //<hide-comment>
    {
      id: 19,
      name: 'Liam Foster',
      color: '#1E90FF',
      title: 'Concrete Finisher',
      type: 'resource',
    },
    {
      id: 20,
      name: 'Sophia Adams',
      color: '#FF4500',
      title: 'Steelworker',
      type: 'resource',
    },
    {
      id: 21,
      name: 'Ethan Murphy',
      color: '#228B22',
      title: 'Heavy Equipment Operator',
      type: 'resource',
    },
    {
      id: 22,
      name: 'Ava Mitchell',
      color: '#FFD700',
      title: 'Surveyor',
      type: 'resource',
    },
    {
      id: 23,
      name: 'Noah Carter',
      color: '#8B4513',
      title: 'Painter',
      type: 'resource',
    },
    {
      id: 24,
      name: 'Emma Scott',
      color: '#800080',
      title: 'Roofer',
      type: 'resource',
    },
    {
      id: 25,
      name: 'William Bennett',
      color: '#DC143C',
      title: 'Plasterer',
      type: 'resource',
    },
    {
      id: 26,
      name: 'Olivia Parker',
      color: '#4682B4',
      title: 'Demolition Specialist',
      type: 'resource',
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
    setToastText(args.resource.name + ' is available');
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

  const handleResourceOrderUpdate = useCallback(
    (args) => {
      const parent = args.parent;
      const oldParent = args.oldParent;

      if (parent && parent.children) {
        // remove placeholder resource
        parent.children = parent.children.filter((child) => !child.temp);
      }
      if (oldParent && !oldParent.children.length) {
        // add placeholder resource
        oldParent.children.push({
          id: 'temp' + (installers.length + 1),
          temp: true,
          name: 'Drag Technicians here',
          title: '',
          reorder: false,
        });
      }
    },
    [installers],
  );

  const handleCloseToast = useCallback(() => {
    setIsToastOpen(false);
  }, []);

  const addNewTeam = useCallback(() => {
    const teamLength = installers.length + 1;
    const resId = 'it-' + teamLength;
    setInstallers([
      ...installers,
      {
        id: resId,
        eventCreation: false,
        reorder: false,
        name: 'Installer team ' + teamLength,
        children: [
          {
            id: resId + '-temp',
            temp: true,
            name: 'Drag Technicians here',
            title: '',
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
        <div className="mds-workers-title">Set up teams</div>
        <Button variant="outline" className="mds-create-new-team" onClick={addNewTeam}>
          Add team
        </Button>
      </div>
    ),
    [addNewTeam],
  );

  const renderResource = useCallback(
    (resource) =>
      resource.children || resource.temp ? (
        <div className={'mds-ext-res-dnd-name ' + (resource.temp ? ' mds-ext-res-dnd-name-temp' : '')}>{resource.name}</div>
      ) : (
        <div className="mbsc-flex">
          <div className="mds-ext-res-dnd-avatar" style={{ background: resource.color }}>
            {resource.name[0]}
          </div>
          <div className="mds-ext-res-dnd-cont">
            <div className="mds-ext-res-dnd-name">{resource.name}</div>
            <div className="mds-ext-res-dnd-title">{resource.title}</div>
          </div>
        </div>
      ),
    [],
  );

  return (
    <div className="mbsc-grid mbsc-no-padding">
      <div className="mbsc-row">
        <div className="mbsc-col-sm-3 ds-ext-res-drop-cont mbsc-flex-col" ref={setDropElm}>
          <Dropcontainer onItemDrop={handleItemDrop} element={dropCont}>
            <div className="mds-workers-title">Available technicians</div>
            <div className="mds-workers-list">
              {availableInstallers.map((task) => (
                <Task key={task.id} data={task} />
              ))}
            </div>
          </Dropcontainer>
        </div>
        <div className="mbsc-col-sm-9 mds-ext-res-drop-calendar">
          <Eventcalendar
            height={600}
            ref={timelineRef}
            data={constructionWork}
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
  );
}

export default App;
