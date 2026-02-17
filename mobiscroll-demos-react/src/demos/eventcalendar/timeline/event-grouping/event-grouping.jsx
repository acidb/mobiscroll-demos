import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Checkbox,
  Eventcalendar,
  formatDate,
  Select,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './event-grouping.css';

setOptions({
  // localeJs,
  // themeJs
});

const assigneeResources = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Senior HVAC Technician',
    color: '#4a7c9e',
    img: 'https://img.mobiscroll.com/demos/f1.png',
  },
  {
    id: 2,
    name: 'Mike Chen',
    title: 'Lead Facilities Engineer',
    color: '#7c6ba1',
    img: 'https://img.mobiscroll.com/demos/m1.png',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Electrical Systems Specialist',
    color: '#c76b8a',
    img: 'https://img.mobiscroll.com/demos/f2.png',
  },
  {
    id: 4,
    name: 'James Wilson',
    title: 'Master Electrician',
    color: '#5a9d76',
    img: 'https://img.mobiscroll.com/demos/m2.png',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    title: 'Building Automation Technician',
    color: '#d4a056',
    img: 'https://img.mobiscroll.com/demos/f3.png',
  },
  {
    id: 6,
    name: 'David Kim',
    title: 'HVAC Project Manager',
    color: '#4a9dad',
    img: 'https://img.mobiscroll.com/demos/m3.png',
  },
  {
    id: 7,
    name: 'Maria Garcia',
    title: 'Lighting Systems Specialist',
    color: '#c67e5c',
    img: 'https://img.mobiscroll.com/demos/f4.png',
  },
  {
    id: 8,
    name: 'Robert Taylor',
    title: 'Industrial maintenance Lead',
    color: '#7fa650',
    img: 'https://img.mobiscroll.com/demos/m4.png',
  },
];

const typeResources = [
  {
    id: 'installation',
    name: 'installation',
    color: '#3b5998',
  },
  {
    id: 'maintenance',
    name: 'maintenance',
    color: '#2d7a4f',
  },
  {
    id: 'repair',
    name: 'repair',
    color: '#b8621b',
  },
  {
    id: 'inspection',
    name: 'inspection',
    color: '#6b4fa3',
  },
  {
    id: 'upgrade',
    name: 'upgrade',
    color: '#a03a3a',
  },
];

const selectData = [
  {
    text: 'View by Assignee',
    value: 'assignee',
  },
  {
    text: 'View by Type',
    value: 'type',
  },
];

const defaultEvents = [
  {
    id: 1,
    title: 'HVAC System Overhaul - Building A',
    start: 'dyndatetime(y,1,15)',
    end: 'dyndatetime(y,3,10)',
    resource: 1,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 2,
    title: 'Complete Electrical System inspection',
    start: 'dyndatetime(y,2,15)',
    end: 'dyndatetime(y,3,25)',
    resource: 1,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 3,
    title: 'ICU Plumbing Infrastructure Renovation',
    start: 'dyndatetime(y,1,20)',
    end: 'dyndatetime(y,3,15)',
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 4,
    title: 'Fire Safety System upgrade & Testing',
    start: 'dyndatetime(y,4,5)',
    end: 'dyndatetime(y,6,20)',
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  //<hide-comment>
  {
    id: 5,
    title: 'Emergency Generator Complete Overhaul',
    start: 'dyndatetime(y,5,1)',
    end: 'dyndatetime(y,6,30)',
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 6,
    title: 'Boiler Room Equipment Replacement',
    start: 'dyndatetime(y,4,15)',
    end: 'dyndatetime(y,6,10)',
    resource: 1,
    type: 'repair',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 7,
    title: 'Server Room HVAC installation Project',
    start: 'dyndatetime(y,1,10)',
    end: 'dyndatetime(y,3,20)',
    resource: 3,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 8,
    title: 'Data Center Cable Infrastructure upgrade',
    start: 'dyndatetime(y,2,10)',
    end: 'dyndatetime(y,3,30)',
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 9,
    title: 'Power Distribution System Modernization',
    start: 'dyndatetime(y,4,10)',
    end: 'dyndatetime(y,6,25)',
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 10,
    title: 'Backup Power System Implementation',
    start: 'dyndatetime(y,5,10)',
    end: 'dyndatetime(y,6,30)',
    resource: 3,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 11,
    title: 'Network Equipment Room Cooling upgrade',
    start: 'dyndatetime(y,1,25)',
    end: 'dyndatetime(y,3,15)',
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 12,
    title: 'Security System Integration',
    start: 'dyndatetime(y,5,5)',
    end: 'dyndatetime(y,6,20)',
    resource: 4,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 13,
    title: 'Storefront LED Lighting Conversion',
    start: 'dyndatetime(y,1,8)',
    end: 'dyndatetime(y,3,10)',
    resource: 5,
    type: 'upgrade',
    clientGroup: 'Retail Partners',
  },
  {
    id: 14,
    title: 'Parking Lot Lighting System Replacement',
    start: 'dyndatetime(y,2,5)',
    end: 'dyndatetime(y,3,30)',
    resource: 7,
    type: 'repair',
    clientGroup: 'Retail Partners',
  },
  {
    id: 15,
    title: 'Store-wide HVAC Filter & Duct Cleaning',
    start: 'dyndatetime(y,4,10)',
    end: 'dyndatetime(y,6,20)',
    resource: 5,
    type: 'maintenance',
    clientGroup: 'Retail Partners',
  },
  {
    id: 16,
    title: 'Automatic Door System Replacement',
    start: 'dyndatetime(y,5,1)',
    end: 'dyndatetime(y,6,30)',
    resource: 7,
    type: 'repair',
    clientGroup: 'Retail Partners',
  },
  {
    id: 17,
    title: 'Point of Sale Electrical Infrastructure',
    start: 'dyndatetime(y,1,15)',
    end: 'dyndatetime(y,3,5)',
    resource: 5,
    type: 'installation',
    clientGroup: 'Retail Partners',
  },
  {
    id: 18,
    title: 'Emergency Lighting System Certification',
    start: 'dyndatetime(y,4,15)',
    end: 'dyndatetime(y,6,10)',
    resource: 7,
    type: 'inspection',
    clientGroup: 'Retail Partners',
  },
  {
    id: 19,
    title: 'City Hall HVAC Modernization',
    start: 'dyndatetime(y,1,10)',
    end: 'dyndatetime(y,3,20)',
    resource: 2,
    type: 'upgrade',
    clientGroup: 'City Municipal Services',
  },
  {
    id: 20,
    title: 'Public Library Climate Control',
    start: 'dyndatetime(y,2,1)',
    end: 'dyndatetime(y,3,31)',
    resource: 6,
    type: 'maintenance',
    clientGroup: 'City Municipal Services',
  },
  {
    id: 21,
    title: 'Community Center Lighting Retrofit',
    start: 'dyndatetime(y,4,10)',
    end: 'dyndatetime(y,6,25)',
    resource: 2,
    type: 'upgrade',
    clientGroup: 'City Municipal Services',
  },
  {
    id: 22,
    title: 'Warehouse High-Bay Lighting installation',
    start: 'dyndatetime(y,1,5)',
    end: 'dyndatetime(y,3,15)',
    resource: 8,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 23,
    title: 'Industrial Compressor System Overhaul',
    start: 'dyndatetime(y,2,1)',
    end: 'dyndatetime(y,3,31)',
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 24,
    title: 'Loading Dock Door Automation Project',
    start: 'dyndatetime(y,4,5)',
    end: 'dyndatetime(y,6,20)',
    resource: 8,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 25,
    title: 'Factory Ventilation System upgrade',
    start: 'dyndatetime(y,5,1)',
    end: 'dyndatetime(y,6,30)',
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 26,
    title: 'Main Electrical Panel Replacement Project',
    start: 'dyndatetime(y,1,15)',
    end: 'dyndatetime(y,3,20)',
    resource: 4,
    type: 'repair',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 27,
    title: 'Production Floor Lighting Modernization',
    start: 'dyndatetime(y,2,10)',
    end: 'dyndatetime(y,3,31)',
    resource: 7,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 28,
    title: 'Overhead Crane Electrical Certification',
    start: 'dyndatetime(y,4,15)',
    end: 'dyndatetime(y,6,15)',
    resource: 4,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 29,
    title: 'Production Line Power Infrastructure',
    start: 'dyndatetime(y,5,10)',
    end: 'dyndatetime(y,6,30)',
    resource: 3,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 30,
    title: 'Chiller Plant Annual Overhaul',
    start: 'dyndatetime(y,1,20)',
    end: 'dyndatetime(y,3,25)',
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 31,
    title: 'Classroom Building HVAC Renovation',
    start: 'dyndatetime(y,1,10)',
    end: 'dyndatetime(y,3,20)',
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Education District',
  },
  {
    id: 32,
    title: 'Gymnasium Lighting System Replacement',
    start: 'dyndatetime(y,4,10)',
    end: 'dyndatetime(y,6,15)',
    resource: 3,
    type: 'repair',
    clientGroup: 'Education District',
  },
  {
    id: 33,
    title: 'Auditorium Climate Control installation',
    start: 'dyndatetime(y,1,20)',
    end: 'dyndatetime(y,3,31)',
    resource: 6,
    type: 'installation',
    clientGroup: 'Education District',
  },
  {
    id: 34,
    title: 'Science Lab Electrical Infrastructure',
    start: 'dyndatetime(y,5,1)',
    end: 'dyndatetime(y,6,30)',
    resource: 3,
    type: 'installation',
    clientGroup: 'Education District',
  },
  {
    id: 35,
    title: 'Campus Fire Alarm System Certification',
    start: 'dyndatetime(y,2,1)',
    end: 'dyndatetime(y,3,20)',
    resource: 6,
    type: 'inspection',
    clientGroup: 'Education District',
  },
  {
    id: 36,
    title: 'Hotel Lobby Climate System Replacement',
    start: 'dyndatetime(y,1,10)',
    end: 'dyndatetime(y,3,15)',
    resource: 4,
    type: 'repair',
    clientGroup: 'Hospitality Group',
  },
  {
    id: 37,
    title: 'Commercial Kitchen Exhaust installation',
    start: 'dyndatetime(y,2,5)',
    end: 'dyndatetime(y,3,31)',
    resource: 6,
    type: 'installation',
    clientGroup: 'Hospitality Group',
  },
  {
    id: 38,
    title: 'Pool Area LED Lighting Conversion',
    start: 'dyndatetime(y,4,10)',
    end: 'dyndatetime(y,6,20)',
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Hospitality Group',
  },
  {
    id: 39,
    title: 'Guest Room HVAC Zone upgrade Project',
    start: 'dyndatetime(y,5,1)',
    end: 'dyndatetime(y,6,30)',
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Hospitality Group',
  },
  {
    id: 40,
    title: 'Conference Center AV & Electrical Setup',
    start: 'dyndatetime(y,1,15)',
    end: 'dyndatetime(y,3,10)',
    resource: 4,
    type: 'installation',
    clientGroup: 'Hospitality Group',
  },
  {
    id: 41,
    title: 'Spa Facility Equipment installation',
    start: 'dyndatetime(y,4,20)',
    end: 'dyndatetime(y,6,15)',
    resource: 4,
    type: 'installation',
    clientGroup: 'Hospitality Group',
  },
  {
    id: 42,
    title: 'Ballroom Lighting & Rigging Project',
    start: 'dyndatetime(y,5,10)',
    end: 'dyndatetime(y,6,30)',
    resource: 6,
    type: 'installation',
    clientGroup: 'Hospitality Group',
  },
  {
    id: 43,
    title: 'Operating Room HVAC upgrade',
    start: 'dyndatetime(y,1,15)',
    end: 'dyndatetime(y,3,30)',
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Greenfield Medical Center',
  },
  {
    id: 44,
    title: 'Medical Equipment Power installation',
    start: 'dyndatetime(y,4,5)',
    end: 'dyndatetime(y,6,20)',
    resource: 1,
    type: 'installation',
    clientGroup: 'Greenfield Medical Center',
  },
  {
    id: 45,
    title: 'Open Office Climate Control',
    start: 'dyndatetime(y,1,5)',
    end: 'dyndatetime(y,3,10)',
    resource: 5,
    type: 'installation',
    clientGroup: 'Tech Startup Hub',
  },
  {
    id: 46,
    title: 'Conference Room AV Setup',
    start: 'dyndatetime(y,2,10)',
    end: 'dyndatetime(y,3,31)',
    resource: 7,
    type: 'installation',
    clientGroup: 'Tech Startup Hub',
  },
  {
    id: 47,
    title: 'Server Closet Cooling System',
    start: 'dyndatetime(y,1,20)',
    end: 'dyndatetime(y,3,20)',
    resource: 3,
    type: 'installation',
    clientGroup: 'Tech Startup Hub',
  },
  {
    id: 48,
    title: 'Emergency Exit Lighting',
    start: 'dyndatetime(y,4,10)',
    end: 'dyndatetime(y,6,15)',
    resource: 7,
    type: 'maintenance',
    clientGroup: 'Tech Startup Hub',
  },
  {
    id: 49,
    title: 'Annual HVAC System Winterization',
    start: 'dyndatetime(y,10,1)',
    end: 'dyndatetime(y,12,15)',
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 50,
    title: 'Year-End Electrical Safety Audit',
    start: 'dyndatetime(y,11,1)',
    end: 'dyndatetime(y,12,31)',
    resource: 3,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 51,
    title: 'Holiday Lighting installation',
    start: 'dyndatetime(y,10,1)',
    end: 'dyndatetime(y,12,15)',
    resource: 5,
    type: 'installation',
    clientGroup: 'Retail Partners',
  },
  {
    id: 52,
    title: 'Winter HVAC maintenance',
    start: 'dyndatetime(y,11,1)',
    end: 'dyndatetime(y,12,31)',
    resource: 7,
    type: 'maintenance',
    clientGroup: 'Retail Partners',
  },
  {
    id: 53,
    title: 'Municipal Building Fire System upgrade',
    start: 'dyndatetime(y,7,1)',
    end: 'dyndatetime(y,9,20)',
    resource: 6,
    type: 'upgrade',
    clientGroup: 'City Municipal Services',
  },
  {
    id: 54,
    title: 'Fall Preventive maintenance Program',
    start: 'dyndatetime(y,7,15)',
    end: 'dyndatetime(y,9,30)',
    resource: 8,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 55,
    title: 'Year-End Equipment Calibration',
    start: 'dyndatetime(y,10,1)',
    end: 'dyndatetime(y,12,20)',
    resource: 7,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 56,
    title: 'School Year-End HVAC Service',
    start: 'dyndatetime(y,7,1)',
    end: 'dyndatetime(y,9,15)',
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Education District',
  },
  {
    id: 57,
    title: 'Winter Heating System Preparation',
    start: 'dyndatetime(y,10,1)',
    end: 'dyndatetime(y,12,10)',
    resource: 6,
    type: 'maintenance',
    clientGroup: 'Education District',
  },
  {
    id: 58,
    title: 'Fall Season HVAC maintenance',
    start: 'dyndatetime(y,7,15)',
    end: 'dyndatetime(y,9,30)',
    resource: 4,
    type: 'maintenance',
    clientGroup: 'Hospitality Group',
  },
  {
    id: 59,
    title: 'Emergency Room Electrical upgrade',
    start: 'dyndatetime(y,7,1)',
    end: 'dyndatetime(y,9,15)',
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Greenfield Medical Center',
  },
  {
    id: 60,
    title: 'Medical Facility Winter Readiness',
    start: 'dyndatetime(y,10,10)',
    end: 'dyndatetime(y,12,20)',
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Greenfield Medical Center',
  },
  {
    id: 61,
    title: 'Summer Cooling System Optimization',
    start: 'dyndatetime(y,7,1)',
    end: 'dyndatetime(y,9,15)',
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 62,
    title: 'Backup Generator Testing & Certification',
    start: 'dyndatetime(y,8,10)',
    end: 'dyndatetime(y,9,30)',
    resource: 4,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 63,
    title: 'Summer Cooling System Service',
    start: 'dyndatetime(y,7,10)',
    end: 'dyndatetime(y,9,10)',
    resource: 5,
    type: 'maintenance',
    clientGroup: 'Retail Partners',
  },
  {
    id: 64,
    title: 'Year-End Facility Safety inspection',
    start: 'dyndatetime(y,10,15)',
    end: 'dyndatetime(y,12,20)',
    resource: 2,
    type: 'inspection',
    clientGroup: 'City Municipal Services',
  },
  {
    id: 65,
    title: 'Holiday Season Preparation',
    start: 'dyndatetime(y,10,15)',
    end: 'dyndatetime(y,12,31)',
    resource: 6,
    type: 'maintenance',
    clientGroup: 'Hospitality Group',
  },
  {
    id: 66,
    title: 'Office Expansion Electrical Work',
    start: 'dyndatetime(y,7,15)',
    end: 'dyndatetime(y,9,25)',
    resource: 5,
    type: 'installation',
    clientGroup: 'Tech Startup Hub',
  },
  {
    id: 67,
    title: 'Year-End System maintenance',
    start: 'dyndatetime(y,10,20)',
    end: 'dyndatetime(y,12,30)',
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Tech Startup Hub',
  },
  //</hide-comment>
];

function App() {
  const myView = useMemo(() => ({ timeline: { type: 'year', resolutionHorizontal: 'month', eventHeight: 'variable' } }), []);

  const [myEvents, setMyEvents] = useState(defaultEvents);
  const [displayEvents, setDisplayEvents] = useState([]);
  const [myResources, setMyResources] = useState(assigneeResources);
  const [groupedEvents, setGroupedEvents] = useState([]);
  const [groupBy, setGroupBy] = useState('assignee');
  const [groupByClientQuarter, setGroupByClientQuarter] = useState(false);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const groupedEventsRef = useRef(groupedEvents);
  useEffect(() => {
    groupedEventsRef.current = groupedEvents;
  }, [groupedEvents]);

  const groupEventsByClientQuarter = useCallback(
    (events) => {
      const groups = {};
      const result = [];

      const oldCollapsedStates = {};
      groupedEventsRef.current.forEach((ge) => {
        const stateKey = `${ge.resource}-${ge.clientGroup}-${ge.year}-${ge.period}`;
        oldCollapsedStates[stateKey] = ge.collapsed;
      });

      events.forEach((event) => {
        const resourceId = groupBy === 'assignee' ? event.resource : event.type;
        const eventStart = new Date(event.start);
        const month = eventStart.getMonth();
        const year = eventStart.getFullYear();
        const period = Math.floor(month / 3);
        const groupKey = `${resourceId}-${event.clientGroup}-${year}-${period}`;

        if (!groups[groupKey]) {
          groups[groupKey] = { resource: resourceId, clientGroup: event.clientGroup, year, period, events: [] };
        }
        groups[groupKey].events.push(event);
      });

      Object.keys(groups).forEach((groupKey) => {
        const groupData = groups[groupKey];
        const periodEvents = [...groupData.events].sort((a, b) => (a.start < b.start ? -1 : a.start > b.start ? 1 : 0));

        const resourceList = groupBy === 'assignee' ? assigneeResources : typeResources;
        const color = resourceList.find((r) => r.id === groupData.resource)?.color;
        const eventIds = periodEvents.map((e) => e.id).join('-');
        const earliestStart = periodEvents[0].start;
        const latestEnd = periodEvents.reduce((latest, e) => (e.end > latest ? e.end : latest), periodEvents[0].end);
        const newId = `group-${groupKey}-${eventIds}`;
        const stateKey = `${groupData.resource}-${groupData.clientGroup}-${groupData.year}-${groupData.period}`;

        result.push({
          id: newId,
          title: groupData.clientGroup,
          resource: groupData.resource,
          clientGroup: groupData.clientGroup,
          year: groupData.year,
          period: groupData.period,
          start: earliestStart,
          end: latestEnd,
          color,
          count: periodEvents.length,
          originalEvents: periodEvents,
          collapsed: stateKey in oldCollapsedStates ? oldCollapsedStates[stateKey] : true,
        });
      });

      return result;
    },
    [groupBy],
  );

  const prepareEventsForDisplay = useCallback(
    (events) =>
      events.map((event) => ({
        id: event.id,
        title: event.title,
        start: event.start,
        end: event.end,
        resource: groupBy === 'assignee' ? event.resource : event.type,
        type: event.type,
        assignee: event.resource,
        clientGroup: event.clientGroup,
        color: '#f8f9fa',
      })),
    [groupBy],
  );

  useEffect(() => {
    if (groupByClientQuarter) {
      const newGrouped = groupEventsByClientQuarter(myEvents);
      setGroupedEvents(newGrouped);
      setDisplayEvents(newGrouped);
      setMyResources(groupBy === 'assignee' ? assigneeResources : typeResources);
    } else {
      setGroupedEvents([]);
      setDisplayEvents(prepareEventsForDisplay(myEvents));
      setMyResources(groupBy === 'assignee' ? assigneeResources : typeResources);
    }
  }, [myEvents, groupBy, groupByClientQuarter, groupEventsByClientQuarter, prepareEventsForDisplay]);

  const renderGroupedEvent = useCallback(
    (event) => {
      const origEvent = event.original;
      const isExpanded = !origEvent.collapsed;
      const originalEvents = origEvent.originalEvents || [];

      const uniqueItems = {};
      originalEvents.forEach((ev) => {
        if (groupBy === 'assignee') {
          const typeObj = typeResources.find((r) => r.id === ev.type);
          if (typeObj) uniqueItems[typeObj.id] = typeObj;
        } else {
          const emp = assigneeResources.find((r) => r.id === ev.resource);
          if (emp) uniqueItems[emp.id] = emp;
        }
      });

      const itemCount = Object.keys(uniqueItems).length;
      const itemLabel = groupBy === 'assignee' ? 'type' : 'employee';

      const expandedContent = isExpanded
        ? originalEvents.map((ev) => {
            let detailText = '';
            let typeDotColor = '';
            let avatarUrl = '';

            if (groupBy === 'assignee') {
              const typeObj = typeResources.find((r) => r.id === ev.type);
              if (typeObj) {
                detailText = typeObj.name;
                typeDotColor = typeObj.color;
              }
            } else {
              const employee = assigneeResources.find((r) => r.id === ev.resource);
              if (employee) {
                detailText = employee.name;
                avatarUrl = employee.img;
              }
            }

            return (
              <div className="mds-event-grouping-original-event" key={ev.id}>
                <div className="mbsc-flex mds-event-grouping-event-content">
                  <div className="mds-event-grouping-event-title">{ev.title}</div>
                  <div className="mbsc-flex mds-event-grouping-event-right">
                    <div className="mds-event-grouping-event-date">
                      {formatDate('DD MMM', new Date(ev.start))} - {formatDate('DD MMM', new Date(ev.end))}
                    </div>
                    <div className="mbsc-flex mds-event-grouping-event-detail">
                      {avatarUrl && <img src={avatarUrl} alt={detailText} className="mds-event-grouping-event-avatar" />}
                      {typeDotColor && <span className="mds-event-grouping-type-dot" style={{ backgroundColor: typeDotColor }} />}
                      <div className="mds-event-grouping-event-info">{detailText}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : null;

      return (
        <div
          className={`mbsc-flex mds-event-grouping-task mds-event-grouping-task-client${isExpanded ? ' expanded' : ''}`}
          style={{ borderLeftColor: origEvent.color }}
        >
          <div className="mbsc-flex mds-event-grouping-content">
            <div className="mds-event-grouping-title-text">{origEvent.clientGroup}</div>
            <div className="mbsc-flex mds-event-grouping-right">
              <div className="mbsc-flex mds-event-grouping-meta">
                <div className="mds-event-grouping-date-range">
                  {formatDate('DD MMM', new Date(origEvent.start))} - {formatDate('DD MMM', new Date(origEvent.end))}
                </div>
                <div className="mds-event-grouping-count">
                  {origEvent.count} task{origEvent.count > 1 ? 's' : ''}, {itemCount} {itemLabel}
                  {itemCount > 1 ? 's' : ''}
                </div>
              </div>
              <div
                className="mbsc-flex mds-event-grouping-icon mbsc-icon mbsc-font-icon mbsc-icon-material-keyboard-arrow-down"
                onClick={() =>
                  setGroupedEvents((prev) => {
                    const next = prev.map((ge) => (ge.id === origEvent.id ? { ...ge, collapsed: !ge.collapsed } : ge));
                    setDisplayEvents(next);
                    return next;
                  })
                }
              />
            </div>
          </div>
          <div className="mds-event-grouping-events">{expandedContent}</div>
        </div>
      );
    },
    [groupBy],
  );

  const renderSimpleEvent = useCallback(
    (event) => {
      const origEvent = event.original;
      let detailText = '';
      let avatarUrl = '';
      let typeDotColor = '';

      if (groupBy === 'assignee') {
        const typeObj = typeResources.find((t) => t.id === origEvent.type?.toLowerCase());
        if (typeObj) {
          detailText = typeObj.name;
          typeDotColor = typeObj.color;
        }
      } else {
        const employee = assigneeResources.find((r) => r.id === origEvent.assignee);
        if (employee) {
          detailText = employee.name;
          avatarUrl = employee.img;
        }
      }

      return (
        <div className="mbsc-flex mds-event-simple" style={{ background: origEvent.color }}>
          <div className="mds-event-simple-title">{origEvent.title}</div>
          <div className="mbsc-flex mds-event-simple-right">
            <div className="mds-event-simple-date">
              {formatDate('DD MMM', new Date(origEvent.start))} - {formatDate('DD MMM', new Date(origEvent.end))}
            </div>
            {detailText && (
              <div className="mbsc-flex mds-event-simple-subtitle-wrapper">
                {avatarUrl && <img src={avatarUrl} alt={detailText} className="mds-event-simple-avatar" />}
                {typeDotColor && <span className="mds-event-simple-type-dot" style={{ backgroundColor: typeDotColor }} />}
                <div className="mbsc-flex mds-event-simple-subtitle" style={{ marginLeft: groupBy === 'type' ? '25px' : '' }}>
                  {detailText}
                </div>
              </div>
            )}
          </div>
        </div>
      );
    },
    [groupBy],
  );

  const changeByClientQuarter = useCallback((event) => {
    setGroupByClientQuarter(event.target.checked);
  }, []);

  const changeGroupBy = useCallback((event) => {
    setGroupBy(event.value);
  }, []);

  const renderCustomHeader = useCallback(
    () => (
      <>
        <CalendarNav />
        <div className="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end mds-event-grouping-header-controls">
          <Checkbox checked={groupByClientQuarter} onChange={changeByClientQuarter} label="Group by Client/Quarter" />
          <Select inputStyle="box" display="anchored" touchUi={false} data={selectData} value={groupBy} onChange={changeGroupBy} />
        </div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </>
    ),
    [changeByClientQuarter, changeGroupBy, groupBy, groupByClientQuarter],
  );

  const handleEventUpdate = useCallback(
    (args) => {
      const updatedEvent = args.event;
      const oldEvent = args.oldEvent;

      if (!groupByClientQuarter) {
        // ── Simple view: just sync the moved event back into myEvents ──────────
        setMyEvents((prev) => prev.map((e) => (e.id === oldEvent.id ? { ...e, start: updatedEvent.start, end: updatedEvent.end } : e)));
        return;
      }

      // ── Grouped view (unchanged) ────────────────────────────────────────────
      const startDelta = new Date(updatedEvent.start).getTime() - new Date(oldEvent.start).getTime();

      if (startDelta === 0) return;

      const movedGroupedEvent = groupedEvents.find((ge) => ge.id === oldEvent.id);

      if (!movedGroupedEvent) return;

      const { clientGroup: clientGroupName, resource: resourceId, collapsed: wasCollapsed } = movedGroupedEvent;

      const updatedEventIds = new Set(movedGroupedEvent.originalEvents.map((e) => e.id));
      let movedCount = 0;

      const newMyEvents = myEvents.map((e) => {
        if (!updatedEventIds.has(e.id)) return e;
        movedCount++;
        return {
          ...e,
          start: new Date(new Date(e.start).getTime() + startDelta).toISOString(),
          end: new Date(new Date(e.end).getTime() + startDelta).toISOString(),
        };
      });

      setMyEvents(newMyEvents);

      const firstUpdated = newMyEvents.find((e) => updatedEventIds.has(e.id));
      const newYear = new Date(firstUpdated.start).getFullYear();
      const newPeriod = Math.floor(new Date(firstUpdated.start).getMonth() / 3);

      const newGrouped = groupEventsByClientQuarter(newMyEvents).map((ge) =>
        ge.resource === resourceId && ge.clientGroup === clientGroupName && ge.year === newYear && ge.period === newPeriod
          ? { ...ge, collapsed: wasCollapsed }
          : ge,
      );

      setGroupedEvents(newGrouped);
      setDisplayEvents(newGrouped);

      setToastMessage(`${movedCount} event(s) for ${clientGroupName} have been moved.`);
      setToastOpen(true);
    },
    [groupByClientQuarter, groupedEvents, groupEventsByClientQuarter, myEvents],
  );

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <>
      <Eventcalendar
        className="mds-event-grouping-calendar"
        dragToMove={true}
        dragToResize={false}
        dragBetweenResources={false}
        view={myView}
        data={displayEvents}
        resources={myResources}
        renderScheduleEvent={groupByClientQuarter ? renderGroupedEvent : renderSimpleEvent}
        renderHeader={renderCustomHeader}
        onEventUpdate={handleEventUpdate}
      />
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
}

export default App;
