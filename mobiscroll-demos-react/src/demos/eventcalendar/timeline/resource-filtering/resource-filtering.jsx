import { Button, Checkbox, Eventcalendar, Input, Popup, setOptions } from '@mobiscroll/react';
import { useCallback, useRef, useState } from 'react';

import './resource-filtering.css';

setOptions({
  // localeJs,
  // themeJs
});

const myEvents = [
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Excavate Foundation',
    resource: 'bulldozer - TX1234',
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Install Framing',
    resource: 'crane - NY9101',
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL1213',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,22)',
    title: 'Roofing',
    resource: 'crane - IL1617',
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Site Cleanup',
    resource: 'bulldozer - PA1819',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Foundation Work',
    resource: 'concrete mixer - CA2223',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,22)',
    title: 'Steel Framing',
    resource: 'crane - NY2425',
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Interior Plumbing',
    resource: 'excavator - FL2627',
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Masonry Work',
    resource: 'crane - IL3031',
  },
  {
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Exterior Work',
    resource: 'bulldozer - PA3233',
  },
  {
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Ground Breaking',
    resource: 'bulldozer - TX3435',
  },
  {
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,21)',
    title: 'Wall Construction',
    resource: 'crane - NY3839',
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Roof Installation',
    resource: 'excavator - FL4041',
  },
  {
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Painting',
    resource: 'crane - IL4445',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'Driveway Paving',
    resource: 'bulldozer - PA4647',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Foundation',
    resource: 'concrete mixer - CA5051',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Demolition',
    resource: 'crane - NY5253',
  },
  {
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL5455',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,17)',
    title: 'Roofing',
    resource: 'crane - IL5859',
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Finishing Touches',
    resource: 'bulldozer - PA6061',
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,22)',
    title: 'Site Preparation',
    resource: 'bulldozer - TX6263',
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Piling Work',
    resource: 'crane - NY6667',
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Concrete Pouring',
    resource: 'excavator - FL6869',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,21)',
    title: 'Deck Construction',
    resource: 'drill - OH7071',
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'Final Touches',
    resource: 'bulldozer - PA7475',
  },
  {
    start: 'dyndatetime(y,m,d+1,5)',
    end: 'dyndatetime(y,m,d+1,19)',
    title: 'Foundation Work',
    resource: 'bulldozer - TX1234',
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: 'Steel Framing',
    resource: 'crane - NY9101',
  },
  {
    start: 'dyndatetime(y,m,d+1,10)',
    end: 'dyndatetime(y,m,d+1,20)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL1213',
  },
  {
    start: 'dyndatetime(y,m,d+1,14)',
    end: 'dyndatetime(y,m,d+1,22)',
    title: 'Roofing',
    resource: 'crane - IL1617',
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,19)',
    title: 'Site Cleanup',
    resource: 'bulldozer - PA1819',
  },
  {
    start: 'dyndatetime(y,m,d+1,5)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: 'Foundation Work',
    resource: 'concrete mixer - CA2223',
  },
  {
    start: 'dyndatetime(y,m,d+1,9)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: 'Steel Framing',
    resource: 'crane - NY2425',
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,19)',
    title: 'Interior Plumbing',
    resource: 'excavator - FL2627',
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,20)',
    title: 'Masonry Work',
    resource: 'crane - IL3031',
  },
  {
    start: 'dyndatetime(y,m,d+1,5)',
    end: 'dyndatetime(y,m,d+1,13)',
    title: 'Exterior Work',
    resource: 'bulldozer - PA3233',
  },
  {
    start: 'dyndatetime(y,m,d+1,5)',
    end: 'dyndatetime(y,m,d+1,16)',
    title: 'Ground Work',
    resource: 'bulldozer - TX3435',
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,19)',
    title: 'Wall Construction',
    resource: 'crane - NY3839',
  },
  {
    start: 'dyndatetime(y,m,d+1,9)',
    end: 'dyndatetime(y,m,d+1,14)',
    title: 'Roof Installation',
    resource: 'excavator - FL4041',
  },
  {
    start: 'dyndatetime(y,m,d+1,5)',
    end: 'dyndatetime(y,m,d+1,16)',
    title: 'Painting',
    resource: 'crane - IL4445',
  },
  {
    start: 'dyndatetime(y,m,d+1,6)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: 'Driveway Paving',
    resource: 'bulldozer - PA4647',
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,16)',
    title: 'Foundation',
    resource: 'concrete mixer - CA5051',
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,22)',
    title: 'Demolition',
    resource: 'crane - NY5253',
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,17)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL5455',
  },
  {
    start: 'dyndatetime(y,m,d+1,4)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Roofing',
    resource: 'crane - IL5859',
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,20)',
    title: 'Finishing Touches',
    resource: 'bulldozer - PA6061',
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,19)',
    title: 'Site Preparation',
    resource: 'bulldozer - TX6263',
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,19)',
    title: 'Piling Work',
    resource: 'crane - NY6667',
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: 'Concrete Pouring',
    resource: 'excavator - FL6869',
  },
  {
    start: 'dyndatetime(y,m,d+1,6)',
    end: 'dyndatetime(y,m,d+1,22)',
    title: 'Deck Construction',
    resource: 'drill - OH7071',
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: 'Final Touches',
    resource: 'bulldozer - PA7475',
  },
  {
    start: 'dyndatetime(y,m,d+2,5)',
    end: 'dyndatetime(y,m,d+2,19)',
    title: 'Site Preparation',
    resource: 'bulldozer - TX1234',
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: 'Install Framing',
    resource: 'crane - NY9101',
  },
  {
    start: 'dyndatetime(y,m,d+2,10)',
    end: 'dyndatetime(y,m,d+2,20)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL1213',
  },
  {
    start: 'dyndatetime(y,m,d+2,14)',
    end: 'dyndatetime(y,m,d+2,22)',
    title: 'Roofing',
    resource: 'crane - IL1617',
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,19)',
    title: 'Site Cleanup',
    resource: 'bulldozer - PA1819',
  },
  {
    start: 'dyndatetime(y,m,d+2,5)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: 'Foundation Work',
    resource: 'concrete mixer - CA2223',
  },
  {
    start: 'dyndatetime(y,m,d+2,9)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: 'Steel Framing',
    resource: 'crane - NY2425',
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,19)',
    title: 'Interior Plumbing',
    resource: 'excavator - FL2627',
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,20)',
    title: 'Masonry Work',
    resource: 'crane - IL3031',
  },
  {
    start: 'dyndatetime(y,m,d+2,5)',
    end: 'dyndatetime(y,m,d+2,13)',
    title: 'Exterior Finishing',
    resource: 'bulldozer - PA3233',
  },
  {
    start: 'dyndatetime(y,m,d+2,5)',
    end: 'dyndatetime(y,m,d+2,16)',
    title: 'Fundation',
    resource: 'bulldozer - TX3435',
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,19)',
    title: 'Wall Construction',
    resource: 'crane - NY3839',
  },
  {
    start: 'dyndatetime(y,m,d+2,9)',
    end: 'dyndatetime(y,m,d+2,14)',
    title: 'Roof Installation',
    resource: 'excavator - FL4041',
  },
  {
    start: 'dyndatetime(y,m,d+2,5)',
    end: 'dyndatetime(y,m,d+2,16)',
    title: 'Painting',
    resource: 'crane - IL4445',
  },
  {
    start: 'dyndatetime(y,m,d+2,6)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: 'Driveway Paving',
    resource: 'bulldozer - PA4647',
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,16)',
    title: 'Foundation',
    resource: 'concrete mixer - CA5051',
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,22)',
    title: 'Demolition',
    resource: 'crane - NY5253',
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,17)',
    title: 'Electrical Wiring',
    resource: 'excavator - FL5455',
  },
  {
    start: 'dyndatetime(y,m,d+2,4)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Roofing',
    resource: 'crane - IL5859',
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,20)',
    title: 'Finishing Touches',
    resource: 'bulldozer - PA6061',
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,19)',
    title: 'Site Preparation',
    resource: 'bulldozer - TX6263',
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,19)',
    title: 'Piling Work',
    resource: 'crane - NY6667',
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: 'Concrete Pouring',
    resource: 'excavator - FL6869',
  },
  {
    start: 'dyndatetime(y,m,d+2,6)',
    end: 'dyndatetime(y,m,d+2,22)',
    title: 'Deck Construction',
    resource: 'drill - OH7071',
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: 'Final Touches',
    resource: 'bulldozer - PA7475',
  },
];

const myResourcesDefault = [
  {
    id: 'site1',
    name: '123 Main St, Downtown City',
    eventCreation: false,
    children: [
      {
        id: 'bulldozer - TX1234',
        name: 'Bulldozer - TX1234',
        color: '#1dab2f',
        status: 'on site',
      },
      {
        id: 'concrete mixer - CA5678',
        name: 'Concrete Mixer - CA5678',
        color: '#1dab2f',
        status: 'in maintenance',
      },
      {
        id: 'crane - NY9101',
        name: 'Crane - NY9101',
        color: '#1dab2f',
        status: 'on site',
      },
      {
        id: 'excavator - FL1213',
        name: 'Excavator - FL1213',
        color: '#1dab2f',
        status: 'on site',
      },
      {
        id: 'drill - OH1415',
        name: 'Drill - OH1415',
        color: '#1dab2f',
        status: 'in maintenance',
      },
      {
        id: 'crane - IL1617',
        name: 'Crane - IL1617',
        color: '#1dab2f',
        status: 'on site',
      },
      {
        id: 'bulldozer - PA1819',
        name: 'Bulldozer - PA1819',
        color: '#1dab2f',
        status: 'on site',
      },
    ],
  },
  {
    id: 'site2',
    name: '456 Elm St, Uptown City',
    eventCreation: false,
    children: [
      {
        id: 'bulldozer - TX2021',
        name: 'Bulldozer - TX2021',
        color: '#4981d6',
        status: 'in maintenance',
      },
      {
        id: 'concrete mixer - CA2223',
        name: 'Concrete Mixer - CA2223',
        color: '#4981d6',
        status: 'on site',
      },
      {
        id: 'crane - NY2425',
        name: 'Crane - NY2425',
        color: '#4981d6',
        status: 'on site',
      },
      {
        id: 'excavator - FL2627',
        name: 'Excavator - FL2627',
        color: '#4981d6',
        status: 'on site',
      },
      {
        id: 'drill - OH2829',
        name: 'Drill - OH2829',
        color: '#4981d6',
        status: 'in maintenance',
      },
      {
        id: 'crane - IL3031',
        name: 'Crane - IL3031',
        color: '#4981d6',
        status: 'on site',
      },
      {
        id: 'bulldozer - PA3233',
        name: 'Bulldozer - PA3233',
        color: '#4981d6',
        status: 'on site',
      },
    ],
  },
  {
    id: 'site3',
    name: '789 Maple Ave, Suburban Area',
    eventCreation: false,
    children: [
      {
        id: 'bulldozer - TX3435',
        name: 'Bulldozer - TX3435',
        color: '#f7961e',
        status: 'on site',
      },
      {
        id: 'concrete mixer - CA3637',
        name: 'Concrete Mixer - CA3637',
        color: '#f7961e',
        status: 'in maintenance',
      },
      {
        id: 'crane - NY3839',
        name: 'Crane - NY3839',
        color: '#f7961e',
        status: 'on site',
      },
      {
        id: 'excavator - FL4041',
        name: 'Excavator - FL4041',
        color: '#f7961e',
        status: 'on site',
      },
      {
        id: 'crane - IL4445',
        name: 'Crane - IL4445',
        color: '#f7961e',
        status: 'on site',
      },
      {
        id: 'bulldozer - PA4647',
        name: 'Bulldozer - PA4647',
        color: '#f7961e',
        status: 'on site',
      },
    ],
  },
  {
    id: 'site4',
    name: '101 Industrial Blvd, Industrial City',
    eventCreation: false,
    children: [
      {
        id: 'bulldozer - TX4849',
        name: 'Bulldozer - TX4849',
        color: '#e25dd2',
        status: 'in maintenance',
      },
      {
        id: 'concrete mixer - CA5051',
        name: 'Concrete Mixer - CA5051',
        color: '#e25dd2',
        status: 'on site',
      },
      {
        id: 'crane - NY5253',
        name: 'Crane - NY5253',
        color: '#e25dd2',
        status: 'on site',
      },
      {
        id: 'excavator - FL5455',
        name: 'Excavator - FL5455',
        color: '#e25dd2',
        status: 'on site',
      },
      {
        id: 'drill - OH5657',
        name: 'Drill - OH5657',
        color: '#e25dd2',
        status: 'in maintenance',
      },
      {
        id: 'crane - IL5859',
        name: 'Crane - IL5859',
        color: '#e25dd2',
        status: 'on site',
      },
      {
        id: 'bulldozer - PA6061',
        name: 'Bulldozer - PA6061',
        color: '#e25dd2',
        status: 'on site',
      },
    ],
  },
  {
    id: 'site5',
    name: '202 River Rd, Riverside City',
    eventCreation: false,
    children: [
      {
        id: 'bulldozer - TX6263',
        name: 'Bulldozer - TX6263',
        color: '#34c8e0',
        status: 'on site',
      },
      {
        id: 'concrete mixer - CA6465',
        name: 'Concrete Mixer - CA6465',
        color: '#34c8e0',
        status: 'in maintenance',
      },
      {
        id: 'crane - NY6667',
        name: 'Crane - NY6667',
        color: '#34c8e0',
        status: 'on site',
      },
      {
        id: 'excavator - FL6869',
        name: 'Excavator - FL6869',
        color: '#34c8e0',
        status: 'on site',
      },
      {
        id: 'drill - OH7071',
        name: 'Drill - OH7071',
        color: '#34c8e0',
        status: 'on site',
      },
      {
        id: 'crane - IL7273',
        name: 'Crane - IL7273',
        color: '#34c8e0',
        status: 'in maintenance',
      },
      {
        id: 'bulldozer - PA7475',
        name: 'Bulldozer - PA7475',
        color: '#34c8e0',
        status: 'on site',
      },
    ],
  },
];

function App() {
  const resourceListRef = useRef();
  const buttonRef = useRef();
  const searchTimeout = useRef(null);

  const [checkboxes, setCheckboxes] = useState([]);
  const [myResources, setMyResources] = useState(myResourcesDefault);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [myAnchor, setAnchor] = useState();

  const [filters] = useState(() => {
    const initialFilters = { 'on site': true, 'in maintenance': true };
    myResources.forEach((site) => {
      initialFilters[site.id] = true;
      site.children.forEach((resource) => {
        initialFilters[resource.id] = true;
      });
    });
    return initialFilters;
  });

  const filterResources = useCallback(() => {
    setMyResources(
      myResourcesDefault
        .map(function (site) {
          return {
            id: site.id,
            name: site.name,
            color: site.color,
            eventCreation: site.eventCreation,
            children: site.children.filter(function (resource) {
              return filters[resource.status] && (!searchQuery || resource.name.toLowerCase().includes(searchQuery.toLowerCase()));
            }),
          };
        })
        .filter(function (site) {
          return site.children.length > 0 && filters[site.id];
        }),
    );
  }, [filters, searchQuery]);

  const handleCheckboxChange = useCallback(
    (ev) => {
      filters[ev.target.value] = ev.target.checked;
    },
    [filters],
  );

  const handleClick = useCallback(() => {
    const checkboxElements = myResourcesDefault.map((site) => (
      <label key={site.id}>
        <Checkbox
          className="mds-resource-filtering-checkbox"
          label={site.name}
          value={site.id}
          checked={filters[site.id]}
          onChange={handleCheckboxChange}
        />
      </label>
    ));

    setCheckboxes(checkboxElements);
    setAnchor(buttonRef.current.nativeElement);
    setPopupOpen(true);
  }, [filters, handleCheckboxChange]);

  const handleSearch = useCallback(
    (e) => {
      console.log('here');
      clearTimeout(searchTimeout);
      setSearchQuery(e.target.value.toLowerCase());
      searchTimeout.current = setTimeout(filterResources, 300);
    },
    [filterResources],
  );

  return (
    <div>
      <Eventcalendar
        cssClass="mds-resource-filtering-calendar"
        clickToCreate={true}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        view={{
          timeline: {
            type: 'week',
            startTime: '05:00',
            endTime: '22:00',
            startDay: 1,
            endDay: 5,
            timeCellStep: 60,
            timeLabelStep: 60,
            weekNumbers: true,
          },
        }}
        data={myEvents}
        resources={myResources}
        renderResource={(resource) => (
          <div>
            <div className="mds-resource-filtering-name">{resource.name}</div>
            {resource.status && (
              <div className="mds-resource-filtering-status">
                <span
                  className="mds-resource-filtering-status-dot"
                  style={{ backgroundColor: resource.status === 'on site' ? 'green' : 'orange' }}
                ></span>
                {resource.status}
              </div>
            )}
          </div>
        )}
        renderResourceEmpty={() => <div>custom empty resource</div>}
        renderResourceHeader={() => (
          <div className="mbsc-flex mbsc-align-items-center mbsc-font mds-resource-filtering-search">
            <label className="mbsc-flex-1-1">
              <Input
                type="text"
                id="demo-search-input"
                autoComplete="off"
                inputStyle="outline"
                startIcon="material-search"
                placeholder="Search..."
                onChange={handleSearch}
              />
            </label>
            <Button
              ref={buttonRef}
              id="demo-filter-button"
              startIcon="material-filter-list"
              variant="outline"
              className="mbsc-flex-none"
              onClick={handleClick}
            >
              Filter
            </Button>
          </div>
        )}
      />
      <Popup
        contentPadding={false}
        display="anchored"
        anchor={myAnchor}
        focusOnClose={false}
        focusOnOpen={false}
        showOverlay={false}
        width={400}
        buttons={[
          'cancel',
          {
            text: 'Apply',
            keyCode: 'enter',
            handler: function () {
              filterResources();
              setPopupOpen(false);
            },
            cssClass: 'mbsc-popup-button-primary',
          },
        ]}
        isOpen={isPopupOpen}
      >
        <div className="mbsc-form-group">
          <div className="mbsc-form-group-title">Operational Status</div>
          <label>
            <Checkbox label="In maintenance" className="mds-resource-filtering-checkbox" value="in maintenance" defaultChecked />
          </label>
          <label>
            <Checkbox label="On site" className="mds-resource-filtering-checkbox" value="on site" defaultChecked />
          </label>
        </div>
        <div className="mbsc-form-group">
          <div className="mbsc-form-group-title">Job sites</div>
          <div id="demo-resource-list" ref={resourceListRef}>
            {checkboxes}
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default App;
