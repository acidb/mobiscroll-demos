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
import './event-grouping-bulk-action.css';

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
    color: '#7fa650',
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
    color: '#4a9dad',
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
    color: '#5a9d76',
    img: 'https://img.mobiscroll.com/demos/m3.png',
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
    title: 'Office Tower HVAC System Overhaul',
    start: 'dyndatetime(y,1,5)',
    end: 'dyndatetime(y,3,15)',
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 2,
    title: 'Executive Floor Climate Control Installation',
    start: 'dyndatetime(y,1,10)',
    end: 'dyndatetime(y,3,20)',
    resource: 1,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 3,
    title: 'Headquarters Heating System Maintenance',
    start: 'dyndatetime(y,2,1)',
    end: 'dyndatetime(y,3,31)',
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  //<hide-comment>
  {
    id: 4,
    title: 'Building Infrastructure Assessment',
    start: 'dyndatetime(y,1,15)',
    end: 'dyndatetime(y,3,25)',
    resource: 2,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 5,
    title: 'Campus Facilities Modernization',
    start: 'dyndatetime(y,2,5)',
    end: 'dyndatetime(y,3,31)',
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 6,
    title: 'Data Center Electrical Infrastructure',
    start: 'dyndatetime(y,1,8)',
    end: 'dyndatetime(y,3,18)',
    resource: 3,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 7,
    title: 'Office Building Power Distribution Upgrade',
    start: 'dyndatetime(y,1,20)',
    end: 'dyndatetime(y,3,30)',
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 8,
    title: 'Server Room Electrical System Repair',
    start: 'dyndatetime(y,2,10)',
    end: 'dyndatetime(y,3,31)',
    resource: 3,
    type: 'repair',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 9,
    title: 'Smart Building Controls Installation',
    start: 'dyndatetime(y,1,12)',
    end: 'dyndatetime(y,3,22)',
    resource: 5,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 10,
    title: 'Building Automation System Upgrade',
    start: 'dyndatetime(y,2,8)',
    end: 'dyndatetime(y,3,31)',
    resource: 5,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 11,
    title: 'Corporate Campus HVAC Project',
    start: 'dyndatetime(y,1,18)',
    end: 'dyndatetime(y,3,28)',
    resource: 6,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 12,
    title: 'Climate System Modernization Project',
    start: 'dyndatetime(y,2,12)',
    end: 'dyndatetime(y,3,31)',
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 13,
    title: 'Office Tower Cooling System Installation',
    start: 'dyndatetime(y,4,2)',
    end: 'dyndatetime(y,6,12)',
    resource: 1,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 14,
    title: 'Headquarters Air Quality System Upgrade',
    start: 'dyndatetime(y,4,15)',
    end: 'dyndatetime(y,6,25)',
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 15,
    title: 'Conference Center HVAC Maintenance',
    start: 'dyndatetime(y,5,5)',
    end: 'dyndatetime(y,6,30)',
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 16,
    title: 'Building Systems Integration Project',
    start: 'dyndatetime(y,4,8)',
    end: 'dyndatetime(y,6,18)',
    resource: 2,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 17,
    title: 'Campus Infrastructure Maintenance',
    start: 'dyndatetime(y,4,20)',
    end: 'dyndatetime(y,6,30)',
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 18,
    title: 'Facility Safety Systems Inspection',
    start: 'dyndatetime(y,5,10)',
    end: 'dyndatetime(y,6,30)',
    resource: 2,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 19,
    title: 'Backup Power System Installation',
    start: 'dyndatetime(y,4,5)',
    end: 'dyndatetime(y,6,15)',
    resource: 3,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 20,
    title: 'Office Electrical Panel Upgrade',
    start: 'dyndatetime(y,5,1)',
    end: 'dyndatetime(y,6,30)',
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 21,
    title: 'Corporate Building Electrical Inspection',
    start: 'dyndatetime(y,4,12)',
    end: 'dyndatetime(y,6,22)',
    resource: 4,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 22,
    title: 'Emergency Power System Repair',
    start: 'dyndatetime(y,5,8)',
    end: 'dyndatetime(y,6,30)',
    resource: 4,
    type: 'repair',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 23,
    title: 'Security System Integration',
    start: 'dyndatetime(y,4,18)',
    end: 'dyndatetime(y,6,28)',
    resource: 5,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 24,
    title: 'Access Control System Maintenance',
    start: 'dyndatetime(y,5,12)',
    end: 'dyndatetime(y,6,30)',
    resource: 5,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 25,
    title: 'Multi-Building Climate Control Project',
    start: 'dyndatetime(y,4,22)',
    end: 'dyndatetime(y,6,30)',
    resource: 6,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 26,
    title: 'Summer Cooling System Optimization',
    start: 'dyndatetime(y,7,3)',
    end: 'dyndatetime(y,9,13)',
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 27,
    title: 'Office Tower Ventilation Upgrade',
    start: 'dyndatetime(y,8,1)',
    end: 'dyndatetime(y,9,30)',
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 28,
    title: 'Campus Building Systems Inspection',
    start: 'dyndatetime(y,7,8)',
    end: 'dyndatetime(y,9,18)',
    resource: 2,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 29,
    title: 'Headquarters Facility Upgrades',
    start: 'dyndatetime(y,7,20)',
    end: 'dyndatetime(y,9,30)',
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 30,
    title: 'Building Infrastructure Maintenance',
    start: 'dyndatetime(y,8,10)',
    end: 'dyndatetime(y,9,30)',
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 31,
    title: 'Data Center Power Infrastructure Upgrade',
    start: 'dyndatetime(y,7,5)',
    end: 'dyndatetime(y,9,15)',
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 32,
    title: 'Office Building Electrical Maintenance',
    start: 'dyndatetime(y,7,18)',
    end: 'dyndatetime(y,9,28)',
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 33,
    title: 'Emergency Generator Installation',
    start: 'dyndatetime(y,8,5)',
    end: 'dyndatetime(y,9,30)',
    resource: 3,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 34,
    title: 'Corporate Electrical Safety Inspection',
    start: 'dyndatetime(y,7,12)',
    end: 'dyndatetime(y,9,22)',
    resource: 4,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 35,
    title: 'Lighting System Repair',
    start: 'dyndatetime(y,8,8)',
    end: 'dyndatetime(y,9,30)',
    resource: 4,
    type: 'repair',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 36,
    title: 'Building Controls System Upgrade',
    start: 'dyndatetime(y,7,15)',
    end: 'dyndatetime(y,9,25)',
    resource: 5,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 37,
    title: 'Climate Control Renovation Project',
    start: 'dyndatetime(y,8,12)',
    end: 'dyndatetime(y,9,30)',
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 38,
    title: 'Winter HVAC System Preparation',
    start: 'dyndatetime(y,10,2)',
    end: 'dyndatetime(y,12,12)',
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 39,
    title: 'Headquarters Heating System Upgrade',
    start: 'dyndatetime(y,10,15)',
    end: 'dyndatetime(y,12,25)',
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 40,
    title: 'Office Climate Control Installation',
    start: 'dyndatetime(y,11,5)',
    end: 'dyndatetime(y,12,31)',
    resource: 1,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 41,
    title: 'Year-End Facility Inspection',
    start: 'dyndatetime(y,10,8)',
    end: 'dyndatetime(y,12,18)',
    resource: 2,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 42,
    title: 'Building Systems Winterization',
    start: 'dyndatetime(y,10,20)',
    end: 'dyndatetime(y,12,30)',
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 43,
    title: 'Campus Infrastructure Upgrade',
    start: 'dyndatetime(y,11,10)',
    end: 'dyndatetime(y,12,31)',
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 44,
    title: 'Office Tower Electrical Upgrade',
    start: 'dyndatetime(y,10,5)',
    end: 'dyndatetime(y,12,15)',
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 45,
    title: 'Power Distribution System Maintenance',
    start: 'dyndatetime(y,11,1)',
    end: 'dyndatetime(y,12,31)',
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 46,
    title: 'Year-End Electrical Safety Audit',
    start: 'dyndatetime(y,10,12)',
    end: 'dyndatetime(y,12,22)',
    resource: 4,
    type: 'inspection',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 47,
    title: 'Emergency Systems Installation',
    start: 'dyndatetime(y,11,8)',
    end: 'dyndatetime(y,12,31)',
    resource: 4,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 48,
    title: 'Security System Annual Maintenance',
    start: 'dyndatetime(y,10,18)',
    end: 'dyndatetime(y,12,28)',
    resource: 5,
    type: 'maintenance',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 49,
    title: 'Building Automation Upgrade',
    start: 'dyndatetime(y,11,12)',
    end: 'dyndatetime(y,12,31)',
    resource: 5,
    type: 'upgrade',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 50,
    title: 'Multi-Zone Climate System Project',
    start: 'dyndatetime(y,10,22)',
    end: 'dyndatetime(y,12,31)',
    resource: 6,
    type: 'installation',
    clientGroup: 'Enterprise Solutions Group',
  },
  {
    id: 51,
    title: 'Factory HVAC System Overhaul',
    start: 'dyndatetime(y,1,4)',
    end: 'dyndatetime(y,3,14)',
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 52,
    title: 'Production Floor Climate Control Installation',
    start: 'dyndatetime(y,2,3)',
    end: 'dyndatetime(y,3,31)',
    resource: 1,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 53,
    title: 'Manufacturing Facility Systems Upgrade',
    start: 'dyndatetime(y,1,9)',
    end: 'dyndatetime(y,3,19)',
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 54,
    title: 'Plant Infrastructure Inspection',
    start: 'dyndatetime(y,1,22)',
    end: 'dyndatetime(y,3,31)',
    resource: 2,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 55,
    title: 'Warehouse Facility Maintenance',
    start: 'dyndatetime(y,2,14)',
    end: 'dyndatetime(y,3,31)',
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 56,
    title: 'Production Line Electrical Installation',
    start: 'dyndatetime(y,1,12)',
    end: 'dyndatetime(y,3,22)',
    resource: 3,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 57,
    title: 'Factory Power System Upgrade',
    start: 'dyndatetime(y,2,8)',
    end: 'dyndatetime(y,3,31)',
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 58,
    title: 'Manufacturing Equipment Electrical Inspection',
    start: 'dyndatetime(y,1,6)',
    end: 'dyndatetime(y,3,16)',
    resource: 4,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 59,
    title: 'Industrial Electrical Panel Repair',
    start: 'dyndatetime(y,1,25)',
    end: 'dyndatetime(y,3,31)',
    resource: 4,
    type: 'repair',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 60,
    title: 'Plant Emergency Power Installation',
    start: 'dyndatetime(y,2,18)',
    end: 'dyndatetime(y,3,31)',
    resource: 4,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 61,
    title: 'Production Automation System Setup',
    start: 'dyndatetime(y,1,16)',
    end: 'dyndatetime(y,3,26)',
    resource: 5,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 62,
    title: 'Manufacturing Controls Upgrade',
    start: 'dyndatetime(y,2,11)',
    end: 'dyndatetime(y,3,31)',
    resource: 5,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 63,
    title: 'Industrial HVAC Modernization Project',
    start: 'dyndatetime(y,1,19)',
    end: 'dyndatetime(y,3,29)',
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 64,
    title: 'Factory Cooling System Installation',
    start: 'dyndatetime(y,4,4)',
    end: 'dyndatetime(y,6,14)',
    resource: 1,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 65,
    title: 'Production Area Ventilation Upgrade',
    start: 'dyndatetime(y,4,18)',
    end: 'dyndatetime(y,6,28)',
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 66,
    title: 'Plant HVAC System Maintenance',
    start: 'dyndatetime(y,5,7)',
    end: 'dyndatetime(y,6,30)',
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 67,
    title: 'Manufacturing Facility Safety Inspection',
    start: 'dyndatetime(y,4,10)',
    end: 'dyndatetime(y,6,20)',
    resource: 2,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 68,
    title: 'Warehouse Systems Maintenance',
    start: 'dyndatetime(y,5,3)',
    end: 'dyndatetime(y,6,30)',
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 69,
    title: 'Industrial Electrical System Upgrade',
    start: 'dyndatetime(y,4,6)',
    end: 'dyndatetime(y,6,16)',
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 70,
    title: 'Factory Power Infrastructure Maintenance',
    start: 'dyndatetime(y,5,12)',
    end: 'dyndatetime(y,6,30)',
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 71,
    title: 'Production Equipment Electrical Certification',
    start: 'dyndatetime(y,4,13)',
    end: 'dyndatetime(y,6,23)',
    resource: 4,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 72,
    title: 'Manufacturing Line Power Installation',
    start: 'dyndatetime(y,4,25)',
    end: 'dyndatetime(y,6,30)',
    resource: 4,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 73,
    title: 'Plant Electrical Panel Upgrade',
    start: 'dyndatetime(y,5,16)',
    end: 'dyndatetime(y,6,30)',
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 74,
    title: 'Industrial Control Systems Maintenance',
    start: 'dyndatetime(y,4,20)',
    end: 'dyndatetime(y,6,30)',
    resource: 5,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 75,
    title: 'Factory Climate Control Project',
    start: 'dyndatetime(y,5,9)',
    end: 'dyndatetime(y,6,30)',
    resource: 6,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 76,
    title: 'Summer Plant HVAC Optimization',
    start: 'dyndatetime(y,7,2)',
    end: 'dyndatetime(y,9,12)',
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 77,
    title: 'Production Floor Climate System Upgrade',
    start: 'dyndatetime(y,8,3)',
    end: 'dyndatetime(y,9,30)',
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 78,
    title: 'Manufacturing Facility Annual Inspection',
    start: 'dyndatetime(y,7,9)',
    end: 'dyndatetime(y,9,19)',
    resource: 2,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 79,
    title: 'Industrial Complex Maintenance Program',
    start: 'dyndatetime(y,7,22)',
    end: 'dyndatetime(y,9,30)',
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 80,
    title: 'Plant Infrastructure Modernization',
    start: 'dyndatetime(y,8,12)',
    end: 'dyndatetime(y,9,30)',
    resource: 2,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 81,
    title: 'Factory Electrical Infrastructure Upgrade',
    start: 'dyndatetime(y,7,6)',
    end: 'dyndatetime(y,9,16)',
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 82,
    title: 'Production Power System Installation',
    start: 'dyndatetime(y,7,19)',
    end: 'dyndatetime(y,9,29)',
    resource: 3,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 83,
    title: 'Industrial Electrical Maintenance',
    start: 'dyndatetime(y,8,8)',
    end: 'dyndatetime(y,9,30)',
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 84,
    title: 'Plant Electrical Safety Inspection',
    start: 'dyndatetime(y,7,13)',
    end: 'dyndatetime(y,9,23)',
    resource: 4,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 85,
    title: 'Manufacturing Equipment Power Repair',
    start: 'dyndatetime(y,8,6)',
    end: 'dyndatetime(y,9,30)',
    resource: 4,
    type: 'repair',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 86,
    title: 'Factory Automation System Upgrade',
    start: 'dyndatetime(y,7,16)',
    end: 'dyndatetime(y,9,26)',
    resource: 5,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 87,
    title: 'Production Control Systems Maintenance',
    start: 'dyndatetime(y,8,14)',
    end: 'dyndatetime(y,9,30)',
    resource: 5,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 88,
    title: 'Industrial Climate System Project',
    start: 'dyndatetime(y,8,10)',
    end: 'dyndatetime(y,9,30)',
    resource: 6,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 89,
    title: 'Factory Winter HVAC Preparation',
    start: 'dyndatetime(y,10,3)',
    end: 'dyndatetime(y,12,13)',
    resource: 1,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 90,
    title: 'Plant Heating System Installation',
    start: 'dyndatetime(y,10,17)',
    end: 'dyndatetime(y,12,27)',
    resource: 1,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 91,
    title: 'Production Area Climate Upgrade',
    start: 'dyndatetime(y,11,7)',
    end: 'dyndatetime(y,12,31)',
    resource: 1,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 92,
    title: 'Year-End Manufacturing Facility Inspection',
    start: 'dyndatetime(y,10,9)',
    end: 'dyndatetime(y,12,19)',
    resource: 2,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 93,
    title: 'Industrial Complex Winterization',
    start: 'dyndatetime(y,11,2)',
    end: 'dyndatetime(y,12,31)',
    resource: 2,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 94,
    title: 'Factory Electrical System Upgrade',
    start: 'dyndatetime(y,10,6)',
    end: 'dyndatetime(y,12,16)',
    resource: 3,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 95,
    title: 'Production Line Power Maintenance',
    start: 'dyndatetime(y,11,4)',
    end: 'dyndatetime(y,12,31)',
    resource: 3,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 96,
    title: 'Year-End Industrial Electrical Audit',
    start: 'dyndatetime(y,10,13)',
    end: 'dyndatetime(y,12,23)',
    resource: 4,
    type: 'inspection',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 97,
    title: 'Manufacturing Electrical Safety Installation',
    start: 'dyndatetime(y,10,25)',
    end: 'dyndatetime(y,12,31)',
    resource: 4,
    type: 'installation',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 98,
    title: 'Plant Power Distribution Upgrade',
    start: 'dyndatetime(y,11,14)',
    end: 'dyndatetime(y,12,31)',
    resource: 4,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 99,
    title: 'Industrial Automation Year-End Maintenance',
    start: 'dyndatetime(y,10,19)',
    end: 'dyndatetime(y,12,29)',
    resource: 5,
    type: 'maintenance',
    clientGroup: 'Industrial Manufacturing Co',
  },
  {
    id: 100,
    title: 'Factory-Wide HVAC Upgrade Project',
    start: 'dyndatetime(y,11,11)',
    end: 'dyndatetime(y,12,31)',
    resource: 6,
    type: 'upgrade',
    clientGroup: 'Industrial Manufacturing Co',
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
        const typeObj = typeResources.find((t) => t.id === origEvent.type);
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

  const renderCustomResource = useCallback((resource) => {
    if (resource.img) {
      // Employee resource
      return (
        <div className="mbsc-flex">
          <img alt={resource.name} className="mds-event-grouping-avatar" src={resource.img} />
          <div className="mds-event-grouping-cont">
            <div className="mds-event-grouping-name">{resource.name}</div>
            <div className="mds-event-grouping-title">{resource.title}</div>
          </div>
        </div>
      );
    } else {
      // Type resource
      return (
        <div className="mbsc-flex mds-event-grouping-type-resource">
          <div className="mds-event-grouping-type-badge" style={{ backgroundColor: resource.color }}></div>
          <div className="mds-event-grouping-type-name">{resource.name}</div>
        </div>
      );
    }
  }, []);

  const handleEventUpdate = useCallback(
    (args) => {
      const updatedEvent = args.event;
      const oldEvent = args.oldEvent;

      if (groupByClientQuarter) {
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
      } else {
        setMyEvents((prev) => prev.map((e) => (e.id === oldEvent.id ? { ...e, start: updatedEvent.start, end: updatedEvent.end } : e)));
      }
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
        renderHeader={renderCustomHeader}
        renderResource={renderCustomResource}
        renderScheduleEvent={groupByClientQuarter ? renderGroupedEvent : renderSimpleEvent}
        onEventUpdate={handleEventUpdate}
      />
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
}

export default App;
