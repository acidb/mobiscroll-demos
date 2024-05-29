import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var defaultEvents = [
      {
        id: 1,
        allDay: true,
        start: 'dyndatetime(y,m,d-7, 6)',
        end: 'dyndatetime(y,m,d-7, 19)',
        resource: 'orlando1',
        title: 'Sales meeting with JLL',
        name: 'John C. Johnson',
        distance: 120,
        consumption: 35,
      },
      {
        id: 2,
        allDay: true,
        start: 'dyndatetime(y,m,d-6, 3)',
        end: 'dyndatetime(y,m,d-6, 20)',
        resource: 'orlando1',
        title: 'Client consultation',
        name: 'Mary K. Adams',
        distance: 95,
        consumption: 30,
      },
      {
        id: 3,
        allDay: true,
        start: 'dyndatetime(y,m,d-5, 10)',
        end: 'dyndatetime(y,m,d-5,17)',
        resource: 'orlando1',
        title: 'Project review at XYZ Ltd',
        name: 'Robert B. Brown',
        distance: 150,
        consumption: 40,
      },
      {
        id: 4,
        allDay: true,
        start: 'dyndatetime(y,m,d-4,9)',
        end: 'dyndatetime(y,m,d-4,16)',
        resource: 'orlando1',
        title: 'Team building workshop',
        name: 'Susan E. Smith',
        distance: 60,
        consumption: 20,
      },
      {
        id: 5,
        allDay: true,
        start: 'dyndatetime(y,m,d-3,8)',
        end: 'dyndatetime(y,m,d-3,18)',
        resource: 'orlando1',
        title: 'Conference at Downtown Center',
        name: 'William T. Harris',
        distance: 45,
        consumption: 18,
      },
      {
        id: 6,
        allDay: true,
        start: 'dyndatetime(y,m,d-2,9)',
        end: 'dyndatetime(y,m,d-2,17)',
        resource: 'orlando1',
        title: 'Product demo at Tech Expo',
        name: 'James P. Clark',
        distance: 110,
        consumption: 33,
      },
      {
        id: 7,
        allDay: true,
        start: 'dyndatetime(y,m,d-1,6)',
        end: 'dyndatetime(y,m,d-1,16)',
        resource: 'orlando1',
        title: 'Visit to construction site',
        name: 'Patricia L. Green',
        distance: 85,
        consumption: 28,
      },
      {
        id: 8,
        allDay: true,
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,18)',
        resource: 'orlando1',
        title: 'Investor meeting',
        name: 'Michael R. White',
        distance: 75,
        consumption: 25,
      },
      {
        id: 9,
        allDay: true,
        start: 'dyndatetime(y,m,d+1,10)',
        end: 'dyndatetime(y,m,d+1,17)',
        resource: 'orlando1',
        title: 'Supplier negotiation',
        name: 'Barbara D. Wright',
        distance: 90,
        consumption: 32,
      },
      {
        id: 10,
        allDay: true,
        start: 'dyndatetime(y,m,d+2,8)',
        end: 'dyndatetime(y,m,d+2,17)',
        resource: 'orlando1',
        title: 'Training session',
        name: 'David F. Martin',
        distance: 70,
        consumption: 27,
      },
      {
        id: 11,
        allDay: true,
        start: 'dyndatetime(y,m,d+3,10)',
        end: 'dyndatetime(y,m,d+3,20)',
        resource: 'orlando1',
        title: 'Strategy session',
        name: 'Jennifer S. Lee',
        distance: 55,
        consumption: 21,
      },
      {
        id: 12,
        allDay: true,
        start: 'dyndatetime(y,m,d-5,7,30)',
        end: 'dyndatetime(y,m,d-5,19)',
        resource: 'orlando2',
        title: 'Board meeting',
        name: 'Charles H. King',
        distance: 130,
        consumption: 36,
      },
      {
        id: 13,
        allDay: true,
        start: 'dyndatetime(y,m,d-3,7)',
        end: 'dyndatetime(y,m,d-3,21)',
        resource: 'orlando2',
        title: 'Networking event',
        name: 'Elizabeth J. Scott',
        distance: 40,
        consumption: 16,
      },
      {
        id: 14,
        allDay: true,
        start: 'dyndatetime(y,m,d,9,30)',
        end: 'dyndatetime(y,m,d,17)',
        resource: 'orlando2',
        title: 'Client appreciation dinner',
        name: 'Thomas A. Taylor',
        distance: 50,
        consumption: 19,
      },
      {
        id: 15,
        allDay: true,
        start: 'dyndatetime(y,m,d+2,8)',
        end: 'dyndatetime(y,m,d+2,16,30)',
        resource: 'orlando2',
        title: 'Legal consultation',
        name: 'Jessica M. Lewis',
        distance: 100,
        consumption: 34,
      },
      {
        id: 16,
        allDay: true,
        start: 'dyndatetime(y,m,d+3,9,30)',
        end: 'dyndatetime(y,m,d+3,19)',
        resource: 'orlando2',
        title: 'Branch visit',
        name: 'Christopher N. Hill',
        distance: 65,
        consumption: 22,
      },
      {
        id: 17,
        allDay: true,
        start: 'dyndatetime(y,m,d+4,11)',
        end: 'dyndatetime(y,m,d+4,22)',
        resource: 'orlando2',
        title: 'Product launch',
        name: 'Margaret O. Allen',
        distance: 80,
        consumption: 29,
      },
      {
        id: 18,
        allDay: true,
        start: 'dyndatetime(y,m,d+5,10)',
        end: 'dyndatetime(y,m,d+5,20,30)',
        resource: 'orlando2',
        title: 'Sales pitch to New Clients',
        name: 'Daniel P. Nelson',
        distance: 115,
        consumption: 31,
      },
      {
        id: 19,
        allDay: true,
        start: 'dyndatetime(y,m,d+6,5,40)',
        end: 'dyndatetime(y,m,d+6,15,30)',
        resource: 'orlando2',
        title: 'Financial review',
        name: 'Ashley Q. Young',
        distance: 125,
        consumption: 37,
      },
      {
        id: 20,
        allDay: true,
        start: 'dyndatetime(y,m,d-7,9)',
        end: 'dyndatetime(y,m,d-7,21)',
        resource: 'orlando3',
        title: 'Team luncheon at Restaurant',
        name: 'Joseph R. Walker',
        distance: 35,
        consumption: 14,
      },
      {
        id: 21,
        allDay: true,
        start: 'dyndatetime(y,m,d-5,9,30)',
        end: 'dyndatetime(y,m,d-5,17)',
        resource: 'orlando3',
        title: 'Technical support visit',
        name: 'Nancy S. Hall',
        distance: 105,
        consumption: 33,
      },
      {
        id: 22,
        allDay: true,
        start: 'dyndatetime(y,m,d-4,12)',
        end: 'dyndatetime(y,m,d-4,23)',
        resource: 'orlando3',
        title: 'Industry seminar',
        name: 'Steven T. Allen',
        distance: 95,
        consumption: 28,
      },
      {
        id: 23,
        allDay: true,
        start: 'dyndatetime(y,m,d-2,11)',
        end: 'dyndatetime(y,m,d-2,20,30)',
        resource: 'orlando3',
        title: 'Partnership discussion',
        name: 'Linda U. Young',
        distance: 140,
        consumption: 39,
      },
      {
        id: 24,
        allDay: true,
        start: 'dyndatetime(y,m,d+1,9)',
        end: 'dyndatetime(y,m,d+1,18)',
        resource: 'orlando3',
        title: 'Marketing campaign launch',
        name: 'Paul V. Wright',
        distance: 120,
        consumption: 35,
      },
      {
        id: 25,
        allDay: true,
        start: 'dyndatetime(y,m,d+4,7)',
        end: 'dyndatetime(y,m,d+4,20)',
        resource: 'orlando3',
        title: 'Research presentation',
        name: 'Karen W. Martinez',
        distance: 65,
        consumption: 24,
      },
      {
        id: 26,
        allDay: true,
        start: 'dyndatetime(y,m,d+6,10,30)',
        end: 'dyndatetime(y,m,d+6,22)',
        resource: 'orlando3',
        title: 'Executive retreat',
        name: 'Kevin X. Gonzalez',
        distance: 110,
        consumption: 30,
      },
      {
        id: 27,
        allDay: true,
        start: 'dyndatetime(y,m,d-7,8,30)',
        end: 'dyndatetime(y,m,d-7,16)',
        resource: 'las-vegas1',
        title: 'Quarterly review',
        name: 'Sandra Y. Adams',
        distance: 85,
        consumption: 27,
      },
      {
        id: 28,
        allDay: true,
        start: 'dyndatetime(y,m,d-5,8)',
        end: 'dyndatetime(y,m,d-5,15)',
        resource: 'las-vegas1',
        title: 'Sales training',
        name: 'Mark Z. Robinson',
        distance: 75,
        consumption: 25,
      },
      {
        id: 29,
        allDay: true,
        start: 'dyndatetime(y,m,d-2,6,30)',
        end: 'dyndatetime(y,m,d-2,17)',
        resource: 'las-vegas1',
        title: 'Client onboarding session',
        name: 'Lisa A. Harris',
        distance: 55,
        consumption: 22,
      },
      {
        id: 30,
        allDay: true,
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,16)',
        resource: 'las-vegas1',
        title: 'Product testing at Facility',
        name: 'Brian B. Lewis',
        distance: 100,
        consumption: 31,
      },
      {
        id: 31,
        allDay: true,
        start: 'dyndatetime(y,m,d+1,8,30)',
        end: 'dyndatetime(y,m,d+1,16,30)',
        resource: 'las-vegas1',
        title: 'Customer feedback meeting',
        name: 'Rebecca C. Wilson',
        distance: 70,
        consumption: 23,
      },
      {
        id: 32,
        allDay: true,
        start: 'dyndatetime(y,m,d+2,4)',
        end: 'dyndatetime(y,m,d+2,14)',
        resource: 'las-vegas1',
        title: 'Market research trip',
        name: 'Edward D. Evans',
        distance: 135,
        consumption: 38,
      },
      {
        id: 33,
        allDay: true,
        start: 'dyndatetime(y,m,d+4,12)',
        end: 'dyndatetime(y,m,d+4,23)',
        resource: 'las-vegas1',
        title: 'Financial planning session',
        name: 'Deborah E. Garcia',
        distance: 45,
        consumption: 17,
      },
      {
        id: 34,
        allDay: true,
        start: 'dyndatetime(y,m,d+6,9)',
        end: 'dyndatetime(y,m,d+6,17,30)',
        resource: 'las-vegas1',
        title: 'Safety inspection at Site',
        name: 'George F. Clark',
        distance: 90,
        consumption: 29,
      },
      {
        id: 35,
        allDay: true,
        start: 'dyndatetime(y,m,d-5,7,30)',
        end: 'dyndatetime(y,m,d-5,17)',
        resource: 'las-vegas2',
        title: 'IT upgrade assessment',
        name: 'Amanda G. Walker',
        distance: 115,
        consumption: 34,
      },
      {
        id: 36,
        allDay: true,
        start: 'dyndatetime(y,m,d-3,10)',
        end: 'dyndatetime(y,m,d-3,21)',
        resource: 'las-vegas2',
        title: 'Employee training workshop',
        name: 'Patrick H. Hall',
        distance: 50,
        consumption: 20,
      },
      {
        id: 37,
        allDay: true,
        start: 'dyndatetime(y,m,d-1,8,30)',
        end: 'dyndatetime(y,m,d-1,17)',
        resource: 'las-vegas2',
        title: 'Strategic partnership meeting',
        name: 'Cynthia I. Nelson',
        distance: 95,
        consumption: 28,
      },
      {
        id: 38,
        allDay: true,
        start: 'dyndatetime(y,m,d+3,7,30)',
        end: 'dyndatetime(y,m,d+3,16,30)',
        resource: 'las-vegas2',
        title: 'Annual general meeting',
        name: 'Matthew J. Baker',
        distance: 125,
        consumption: 36,
      },
      {
        id: 39,
        allDay: true,
        start: 'dyndatetime(y,m,d+5,9)',
        end: 'dyndatetime(y,m,d+5,18)',
        resource: 'las-vegas2',
        title: 'Legal deposition at Court',
        name: 'Michelle K. Wright',
        distance: 60,
        consumption: 22,
      },
      {
        id: 40,
        allDay: true,
        start: 'dyndatetime(y,m,d+6,8)',
        end: 'dyndatetime(y,m,d+6,18)',
        resource: 'las-vegas2',
        title: 'Technology expo',
        name: 'Benjamin L. Scott',
        distance: 110,
        consumption: 33,
      },
      {
        id: 41,
        allDay: true,
        start: 'dyndatetime(y,m,d-5,9)',
        end: 'dyndatetime(y,m,d-5,19)',
        resource: 'las-vegas3',
        title: 'Client negotiation at Office',
        name: 'Stephanie M. Turner',
        distance: 80,
        consumption: 27,
      },
      {
        id: 42,
        allDay: true,
        start: 'dyndatetime(y,m,d-4,6,30)',
        end: 'dyndatetime(y,m,d-4,17,30)',
        resource: 'las-vegas3',
        title: 'Executive meeting with CEO',
        name: 'Jason N. Harris',
        distance: 100,
        consumption: 30,
      },
      {
        id: 43,
        allDay: true,
        start: 'dyndatetime(y,m,d-2,8)',
        end: 'dyndatetime(y,m,d-2,16)',
        resource: 'las-vegas3',
        title: 'Investor briefing at Firm',
        name: 'Sharon O. Lewis',
        distance: 55,
        consumption: 21,
      },
      {
        id: 44,
        allDay: true,
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,17)',
        resource: 'las-vegas3',
        title: 'Project handover at Site',
        name: 'Timothy P. Adams',
        distance: 130,
        consumption: 35,
      },
      {
        id: 45,
        allDay: true,
        start: 'dyndatetime(y,m,d+3,8,30)',
        end: 'dyndatetime(y,m,d+3,18)',
        resource: 'las-vegas3',
        title: 'Customer satisfaction survey',
        name: 'Melissa Q. White',
        distance: 70,
        consumption: 23,
      },
      {
        id: 46,
        allDay: true,
        start: 'dyndatetime(y,m,d+4,8)',
        end: 'dyndatetime(y,m,d+4,20)',
        resource: 'las-vegas3',
        title: 'Industry trade show',
        name: 'Aaron R. Martin',
        distance: 90,
        consumption: 28,
      },
      {
        id: 47,
        allDay: true,
        start: 'dyndatetime(y,m,d-7,9,30)',
        end: 'dyndatetime(y,m,d-7,17)',
        resource: 'miami1',
        title: 'Supplier assessment',
        name: 'Laura S. Young',
        distance: 105,
        consumption: 32,
      },
      {
        id: 48,
        allDay: true,
        start: 'dyndatetime(y,m,d-5,10)',
        end: 'dyndatetime(y,m,d-5,21)',
        resource: 'miami1',
        title: 'Product innovation summit',
        name: 'Jeffrey T. Allen',
        distance: 145,
        consumption: 40,
      },
      {
        id: 49,
        allDay: true,
        start: 'dyndatetime(y,m,d-2,9,30)',
        end: 'dyndatetime(y,m,d-2,17)',
        resource: 'miami1',
        title: 'Operational audit',
        name: 'Diane U. Hill',
        distance: 120,
        consumption: 34,
      },
      {
        id: 50,
        allDay: true,
        start: 'dyndatetime(y,m,d,11,30)',
        end: 'dyndatetime(y,m,d,22)',
        resource: 'miami1',
        title: 'CEO roundtable',
        name: 'Gregory V. Wright',
        distance: 115,
        consumption: 33,
      },
      {
        id: 51,
        allDay: true,
        start: 'dyndatetime(y,m,d+1,9)',
        end: 'dyndatetime(y,m,d+1,18)',
        resource: 'miami1',
        title: 'Field research',
        name: 'Angela W. Martinez',
        distance: 125,
        consumption: 37,
      },
      {
        id: 52,
        allDay: true,
        start: 'dyndatetime(y,m,d+2,8)',
        end: 'dyndatetime(y,m,d+2,15)',
        resource: 'miami1',
        title: 'Corporate retreat',
        name: 'Ryan X. Gonzalez',
        distance: 70,
        consumption: 24,
      },
      {
        id: 53,
        allDay: true,
        start: 'dyndatetime(y,m,d+5,7)',
        end: 'dyndatetime(y,m,d+5,15,30)',
        resource: 'miami1',
        title: 'Executive workshop',
        name: 'Ruth Y. Adams',
        distance: 135,
        consumption: 36,
      },
      {
        id: 54,
        allDay: true,
        start: 'dyndatetime(y,m,d+6,7,30)',
        end: 'dyndatetime(y,m,d+6,18)',
        resource: 'miami1',
        title: 'Regional meeting',
        name: 'Gary Z. Robinson',
        distance: 80,
        consumption: 26,
      },
      {
        id: 55,
        allDay: true,
        start: 'dyndatetime(y,m,d-5,11)',
        end: 'dyndatetime(y,m,d-5,22)',
        resource: 'miami2',
        title: 'Employee orientation',
        name: 'Donna A. Harris',
        distance: 65,
        consumption: 23,
      },
      {
        id: 56,
        allDay: true,
        start: 'dyndatetime(y,m,d-3,6)',
        end: 'dyndatetime(y,m,d-3,16)',
        resource: 'miami2',
        title: 'Vendor contract negotiation',
        name: 'Keith B. Lewis',
        distance: 95,
        consumption: 29,
      },
      {
        id: 57,
        allDay: true,
        start: 'dyndatetime(y,m,d-1,8)',
        end: 'dyndatetime(y,m,d-1,19)',
        resource: 'miami2',
        title: 'Team brainstorming session',
        name: 'Rachel C. Wilson',
        distance: 100,
        consumption: 30,
      },
      {
        id: 58,
        allDay: true,
        start: 'dyndatetime(y,m,d+1,9)',
        end: 'dyndatetime(y,m,d+1,18)',
        resource: 'miami2',
        title: 'Leadership training',
        name: 'Henry D. Evans',
        distance: 110,
        consumption: 31,
      },
      {
        id: 59,
        allDay: true,
        start: 'dyndatetime(y,m,d+5,7,30)',
        end: 'dyndatetime(y,m,d+5,18)',
        resource: 'miami2',
        title: 'Business development meeting',
        name: 'Carol E. Garcia',
        distance: 140,
        consumption: 39,
      },
      {
        id: 60,
        allDay: true,
        start: 'dyndatetime(y,m,d+6,6)',
        end: 'dyndatetime(y,m,d+6,15)',
        resource: 'miami2',
        title: 'Annual performance review',
        name: 'Scott F. Clark',
        distance: 85,
        consumption: 28,
      },
      {
        id: 61,
        allDay: true,
        start: 'dyndatetime(y,m,d-5,11)',
        end: 'dyndatetime(y,m,d-5,19)',
        resource: 'miami3',
        title: 'Corporate luncheon',
        name: 'Judith G. Walker',
        distance: 50,
        consumption: 18,
      },
      {
        id: 62,
        allDay: true,
        start: 'dyndatetime(y,m,d-4,8)',
        end: 'dyndatetime(y,m,d-4,18)',
        resource: 'miami3',
        title: 'Client follow-up',
        name: 'Douglas H. Hall',
        distance: 125,
        consumption: 36,
      },
      {
        id: 63,
        allDay: true,
        start: 'dyndatetime(y,m,d-2,6,30)',
        end: 'dyndatetime(y,m,d-2,17)',
        resource: 'miami3',
        title: 'Service quality inspection',
        name: 'Janet I. Nelson',
        distance: 75,
        consumption: 26,
      },
      {
        id: 64,
        allDay: true,
        start: 'dyndatetime(y,m,d,10)',
        end: 'dyndatetime(y,m,d,18,30)',
        resource: 'miami3',
        title: 'System upgrade',
        name: 'Walter J. Baker',
        distance: 110,
        consumption: 32,
      },
      {
        id: 65,
        allDay: true,
        start: 'dyndatetime(y,m,d+2,8)',
        end: 'dyndatetime(y,m,d+2,17)',
        resource: 'miami3',
        title: 'Management meeting',
        name: 'Katherine K. Wright',
        distance: 45,
        consumption: 17,
      },
      {
        id: 66,
        allDay: true,
        start: 'dyndatetime(y,m,d+4,9,30)',
        end: 'dyndatetime(y,m,d+4,17)',
        resource: 'miami3',
        title: 'Performance appraisal',
        name: 'Adam L. Scott',
        distance: 130,
        consumption: 35,
      },
    ];

    var getMapping = function (str) {
      switch (str) {
        case 'orlando1':
        case 'orlando2':
        case 'orlando3':
          return 'orlando';
        case 'las-vegas1':
        case 'las-vegas2':
        case 'las-vegas3':
          return 'las-vegas';
        case 'miami1':
        case 'miami2':
        case 'miami3':
          return 'miami';
        default:
          return str;
      }
    };
    var firstViewDay = null;
    var lastViewDay = null;
    var updateAggregates = function (dayEvents) {
      var parentIds = ['miami', 'las-vegas', 'orlando'];
      var mapOfUpdates = {};
      parentIds.forEach(function (parentId) {
        for (var date = new Date(firstViewDay); date < lastViewDay; date.setDate(date.getDate() + 1)) {
          mapOfUpdates[parentId + +date] = {
            id: parentId + +date,
            allDay: true,
            start: new Date(date),
            end: new Date(date),
            consumption: 0,
            distance: 0,
            resource: parentId,
          };
        }
      });
      dayEvents.forEach(function (event) {
        if (parentIds.indexOf(event.resource) < 0) {
          var mapping = getMapping(event.resource);
          var eventStartHours = +new Date(event.start).setHours(0);
          var eventStartMinutes = +new Date(eventStartHours).setMinutes(0);
          if (mapOfUpdates[mapping + eventStartMinutes]) {
            mapOfUpdates[mapping + eventStartMinutes].consumption += event.consumption;
            mapOfUpdates[mapping + eventStartMinutes].distance += event.distance;
          }
        }
      });
      Object.keys(mapOfUpdates).forEach(function (key) {
        mapOfUpdates[key].cost = Math.round(mapOfUpdates[key].consumption * 3.706 || 0);
      });
      return mapOfUpdates;
    };

    $(function () {
      var inst = $('#demo-show-summaries-aggregates-for-resource-groups')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'week',
              eventList: true,
              eventHeight: 'variable',
            },
          },
          extendDefaultEvent: function (args) {
            var d = args.start;
            var start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 9);
            var end = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 18);
            return {
              allDay: true,
              start: start,
              end: end,
              title: 'New event',
              name: 'Default name',
              distance: 42,
              consumption: 6,
            };
          },
          clickToCreate: true,
          // dragToCreate: false,
          dragToCreate: true,
          dragToMove: true,
          dragToResize: false,
          eventOverlap: false,
          onPageLoading: function (args, inst) {
            firstViewDay = new Date(args.firstDay);
            lastViewDay = new Date(args.lastDay);
            var dailyEvents = inst.getEvents();
            var updatedSummaries = updateAggregates(dailyEvents);
            var firstAggregate = true;
            var updatedEvents = defaultEvents.map(function (e) {
              if (updatedSummaries[e.id]) {
                firstAggregate = false;
                return updatedSummaries[e.id];
              }
              return e;
            });
            if (firstAggregate) {
              updatedEvents = updatedEvents.concat(Object.values(updatedSummaries));
            }
            setTimeout(function () {
              defaultEvents = updatedEvents;
              inst.setEvents(updatedEvents);
            });
          },
          onEventUpdated: function (args, inst) {
            var dailyEvents = inst.getEvents();
            var updatedSummaries = updateAggregates(dailyEvents);
            var updatedEvents = defaultEvents.map(function (e) {
              if (updatedSummaries[e.id]) {
                return updatedSummaries[e.id];
              }
              return e;
            });
            setTimeout(function () {
              defaultEvents = updatedEvents;
              inst.setEvents(updatedEvents);
            });
          },
          onEventCreate: function (args) {
            args.event.end = args.event.start;
          },
          onEventCreated: function (args, inst) {
            var dailyEvents = inst.getEvents();
            var newEvent = args.event;
            var updatedSummaries = updateAggregates(dailyEvents);
            var updatedEvents = defaultEvents.map(function (e) {
              if (updatedSummaries[e.id]) {
                return updatedSummaries[e.id];
              }
              return e;
            });
            updatedEvents.push(newEvent);
            setTimeout(function () {
              defaultEvents = updatedEvents;
              inst.setEvents(updatedEvents);
            });
          },
          min: 'dyndatetime(y,m,d-7)',
          max: 'dyndatetime(y,m,d+6)',
          renderResource: function (res) {
            var isParent = res.isParent;
            if (isParent) {
              return '<div>' + res.name + '</div><div class="mds-show-summaries-aggregates-description">' + res.address + '</div>';
            }
            return (
              '<div>' +
              res.car +
              '</div><div class="mds-show-summaries-aggregates-plate">Plate ' +
              res.plate +
              '</div><div class="mds-show-summaries-aggregates-cartype">' +
              res.type +
              '</div>'
            );
          },
          renderScheduleEventContent: function (event) {
            var isParent = event.currentResource.isParent;
            if (isParent) {
              return (
                '<div class="mbsc-flex-1-1">' +
                '<div class="mds-show-summaries-aggregates-details mbsc-flex"><div class="mds-show-summaries-aggregates-no-highlight">Total dist. <div><span class="mds-show-summaries-aggregates-highlight">' +
                event.original.distance +
                ' ml</span></div></div><div class="mds-show-summaries-aggregates-no-highlight">Total cons. <div><span class="mds-show-summaries-aggregates-highlight">' +
                event.original.consumption +
                ' gal</span></div></div><div class="mds-show-summaries-aggregates-no-highlight">Est. cost <div><span class="mds-show-summaries-aggregates-highlight">$' +
                event.original.cost +
                '</span></div></div></div></div></div>'
              );
            }
            return (
              '<div class="mds-show-summaries-aggregates-main-event">' +
              '<div class="mds-show-summaries-aggregates-title">' +
              event.title +
              '</div><div class="mds-show-summaries-aggregates-description">' +
              event.original.name +
              '</div><div class="mds-show-summaries-aggregates-details"><div class="mds-show-summaries-aggregates-no-highlight">Est. distance: <span class="mds-show-summaries-aggregates-highlight">' +
              event.original.distance +
              ' ml</span></div><div class="mds-show-summaries-aggregates-no-highlight">Est. consumption: <span class="mds-show-summaries-aggregates-highlight">' +
              event.original.consumption +
              ' gal</span></div></div><div class="mds-show-summaries-aggregates-no-highlight">Pick up: <span class="mds-show-summaries-aggregates-highlight" style="margin-right: 1em;"> ' +
              mobiscroll.formatDate('hh:mm A', new Date(event.original.start)) +
              '</span> Drop off: <span class="mds-show-summaries-aggregates-highlight">' +
              mobiscroll.formatDate('hh:mm A', new Date(event.original.end)) +
              '</span></div></div>'
            );
          },
          resources: [
            {
              id: 'orlando',
              name: 'CNL Tower II',
              address: '420 S Orange Ave, Orlando, FL 32801',
              eventCreation: false,
              eventDragBetweenResources: false,
              eventDragInTime: false,
              eventResize: false,
              color: 'transparent', //'#ffff0000', //'#1a1a1a1a',
              children: [
                {
                  id: 'orlando1',
                  car: 'Lincoln Continental',
                  plate: '51-5375',
                  type: 'Sedan',
                },
                {
                  id: 'orlando2',
                  car: 'Porsche Panamera',
                  plate: '72-2590',
                  type: 'Sports sedan',
                },
                {
                  id: 'orlando3',
                  car: 'Range Rover Velar',
                  plate: '41-7701',
                  type: 'Compact SUV',
                },
              ],
            },
            {
              id: 'las-vegas',
              name: 'Tower 300',
              address: '300 S. 4th Street, Suite 704 Las Vegas, NV 89101',
              eventCreation: false,
              eventDragBetweenResources: false,
              eventDragInTime: false,
              eventResize: false,
              color: 'transparent',
              children: [
                {
                  id: 'las-vegas1',
                  car: 'Mercedes-Benz E-Class',
                  plate: '14-5508',
                  type: 'Mid-size sedan',
                },
                {
                  id: 'las-vegas2',
                  car: 'BMW 5 Series',
                  plate: '47-1522',
                  type: 'Mid-size sedan',
                },
                {
                  id: 'las-vegas3',
                  car: 'Audi A6',
                  plate: '72-2590',
                  type: 'Mid-size sedan',
                },
              ],
            },
            {
              id: 'miami',
              name: 'One Biscayne Tower',
              address: '2 S Biscayne Boulevard, Suite 2460 Miami, FL 33131',
              eventCreation: false,
              eventDragBetweenResources: false,
              eventDragInTime: false,
              eventResize: false,
              color: 'transparent',
              children: [
                {
                  id: 'miami1',
                  car: 'Lexus ES',
                  plate: '91-6278',
                  type: 'Mid-size sedan',
                },
                {
                  id: 'miami2',
                  car: 'Cadillac CT6',
                  plate: '81-7719',
                  type: 'Full-size sedan',
                },
                {
                  id: 'miami3',
                  car: 'Jaguar XF',
                  plate: '42-6067',
                  type: 'Mid-size sedan',
                },
              ],
            },
          ],
          data: defaultEvents,
        })
        .mobiscroll('getInst');

      //TODO B-E IMPL
      // $.getJSON(
      //   'https://trial.mobiscroll.com/timeline-events/?callback=?',
      //   function (events) {
      //     inst.setEvents(events);
      //   },
      //   'jsonp',
      // );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-show-summaries-aggregates-for-resource-groups" class="demo-show-summaries-aggregates-for-resource-groups"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
  .demo-show-summaries-aggregates-for-resource-groups .mbsc-timeline-column,
	.demo-show-summaries-aggregates-for-resource-groups .mbsc-timeline-header-column,
	.demo-show-summaries-aggregates-for-resource-groups .mbsc-timeline-day-month {
    width: 15em;
  }
  .demo-show-summaries-aggregates-for-resource-groups .mbsc-timeline-resource-title{
    font-size: 14px;
    font-weight: 600;
  }
  /*.mbsc-schedule-event-background {
    //background: red !important;
  }*/
  .mds-show-summaries-aggregates-main-event {
    padding: 4px;
  }
  .mds-show-summaries-aggregates-title {
    white-space: normal;
    line-height: 20px;
    font-size: 14px;
    font-weight: 600;
  }
  .mds-show-summaries-aggregates-description {
    padding: 8px 0;
    font-size: 11px;
    line-height: 16px;
    font-weight: 600;
  }
  .mds-show-summaries-aggregates-cartype {
    font-size: 11px;
    font-weight: 600;
    padding-top: 6em;
  }
  .mds-show-summaries-aggregates-plate {
    padding: 8px 0;
    /*font-size: 11px;*/
    /*line-height: 16px;*/
    font-weight: 600;
  }
  .mds-show-summaries-aggregates-highlight {
    font-weight: 600;
    line-height: 24px;
  }
  .mds-show-summaries-aggregates-no-highlight {
    font-weight: 400;
  }
  .mds-show-summaries-aggregates-details {
    white-space: normal;
    justify-content: space-evenly;
    padding: 8px 0;
  }
  .demo-show-summaries-aggregates-for-resource-groups .mbsc-schedule-event-inner {
    height: auto;
    width: 100%;
  }
  /*.demo-show-summaries-aggregates-for-resource-groups .mbsc-timeline-parent .mbsc-schedule-event-inner {
    padding: 0;
  }*/
  `,
};
