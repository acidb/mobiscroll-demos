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
      //SET FIX EVENTS NOT MOVABLE IN TIME AND NO RESIZE
      //sedans
      {
        id: 1,
        start: 'dyndatetime(y,m,d,0)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Sedans',
        consumption: 0,
        distance: 0,
        description: 'Aggregate data for the first half of the day',
        resource: 'sedans',
      },
      {
        id: 2,
        start: 'dyndatetime(y,m,d,12)',
        end: 'dyndatetime(y,m,d,24)',
        title: 'Sedans',
        consumption: 0,
        distance: 0,
        description: 'Aggregate data for the second half of the day',
        resource: 'sedans',
      },
      {
        id: 3,
        start: 'dyndatetime(y,m,d+1,0)',
        end: 'dyndatetime(y,m,d+1,12)',
        title: 'Sedans',
        consumption: 0,
        distance: 0,
        description: 'Aggregate data for the first half of the day',
        resource: 'sedans',
      },
      {
        id: 4,
        start: 'dyndatetime(y,m,d+1,12)',
        end: 'dyndatetime(y,m,d+1,24)',
        title: 'Sedans',
        consumption: 0,
        distance: 0,
        description: 'Aggregate data for the second half of the day',
        resource: 'sedans',
      },
      // suvs
      {
        id: 5,
        start: 'dyndatetime(y,m,d,0)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'SUVs',
        consumption: 0,
        distance: 0,
        description: 'Aggregate data for the first half of the day',
        resource: 'suvs',
      },
      {
        id: 6,
        start: 'dyndatetime(y,m,d,12)',
        end: 'dyndatetime(y,m,d,24)',
        title: 'SUVs',
        consumption: 0,
        distance: 0,
        description: 'Aggregate data for the second half of the day',
        resource: 'suvs',
      },
      {
        id: 7,
        start: 'dyndatetime(y,m,d+1,0)',
        end: 'dyndatetime(y,m,d+1,12)',
        title: 'SUVs',
        consumption: 0,
        distance: 0,
        description: 'Aggregate data for the first half of the day',
        resource: 'suvs',
      },
      {
        id: 8,
        start: 'dyndatetime(y,m,d+1,12)',
        end: 'dyndatetime(y,m,d+1,24)',
        title: 'SUVs',
        consumption: 0,
        distance: 0,
        description: 'Aggregate data for the second half of the day',
        resource: 'suvs',
      },
      // end parent fixed events section
      {
        id: 9,
        start: 'dyndatetime(y,m,d,2)',
        end: 'dyndatetime(y,m,d,7)',
        title: 'Airport transfer',
        consumption: 1.6,
        distance: 23,
        resource: 'sedan1',
        description:
          'Efficient airport transfer service offering seamless transportation between terminals and destinations. Experienced drivers ensure timely arrival, with comfortable vehicles for hassle-free travel.',
      },
      {
        id: 10,
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Employee transportation',
        consumption: 0.5,
        distance: 6,
        resource: 'sedan1',
        description: 'Reliable employee transportation service ensuring punctual arrival and departure.',
      },
      {
        id: 11,
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,21)',
        title: 'Corporate car service',
        consumption: 5.65,
        distance: 80,
        resource: 'sedan1',
        description:
          'Streamlined corporate car service providing professional chauffeurs and luxury vehicles for seamless transportation to meetings, events, and airport transfers.',
      },
      {
        id: 12,
        start: 'dyndatetime(y,m,d+1,8)',
        end: 'dyndatetime(y,m,d+1,12)',
        title: 'Wedding transportation',
        consumption: 3.29,
        distance: 47,
        resource: 'sedan1',
        description:
          'Elegant wedding transportation offering luxury vehicles and professional chauffeurs to ensure a memorable and stress-free journey for the happy couple.',
      },
      {
        id: 13,
        start: 'dyndatetime(y,m,d+1,13)',
        end: 'dyndatetime(y,m,d+1,20)',
        title: 'Sightseeing',
        consumption: 1.33,
        distance: 19,
        resource: 'sedan1',
        description:
          'Discover the city in style with our sightseeing sedan service. Enjoy a comfortable and personalized tour experience led by knowledgeable drivers, exploring iconic landmarks and hidden gems along the way.',
      },
      {
        id: 14,
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,21)',
        title: 'Student transportation',
        consumption: 2.03,
        distance: 29,
        resource: 'sedan2',
        description: 'Convenient sedan service for students, ensuring safe and punctual transportation to campus.',
      },
      {
        id: 15,
        start: 'dyndatetime(y,m,d+1, 10)',
        end: 'dyndatetime(y,m,d+1, 18)',
        title: 'Real estate property tour',
        consumption: 6.3,
        distance: 90,
        resource: 'sedan2',
        description:
          'Explore potential properties with ease using our real estate property tour sedan service. Professional drivers will navigate you to each location, providing comfort and convenience throughout your tour.',
      },
      {
        id: 16,
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Personal chauffeur service',
        consumption: 4.83,
        distance: 69,
        resource: 'sedan3',
        description:
          'Indulge in luxury with our personal chauffeur sedan service, offering comfort, convenience, and a stress-free travel experience.',
      },
      {
        id: 17,
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,21)',
        title: 'Transportation for seniors',
        consumption: 6.51,
        distance: 93,
        resource: 'sedan3',
        description: 'Safe, reliable sedan service for senior transportation needs.',
      },
      {
        id: 18,
        start: 'dyndatetime(y,m,d+1,14)',
        end: 'dyndatetime(y,m,d+1,22)',
        title: 'Airport pick-up service',
        consumption: 5.39,
        distance: 77,
        resource: 'sedan3',
        description:
          'Efficient airport pick-up sedan service, ensuring timely arrivals and comfortable transportation to and from the airport for travelers.',
      },
      {
        id: 19,
        start: 'dyndatetime(y,m,d,6)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Family road trip',
        consumption: 3.92,
        distance: 56,
        resource: 'suv1',
        description: 'Enjoy a comfortable family road trip with our spacious and reliable SUV service.',
      },
      {
        id: 20,
        start: 'dyndatetime(y,m,d,15)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Airport transfers for groups',
        consumption: 6.02,
        distance: 86,
        resource: 'suv1',
        description:
          'Efficient SUV service for group airport transfers, ensuring comfortable transportation for multiple passengers with ample luggage space and timely arrivals.',
      },
      {
        id: 21,
        start: 'dyndatetime(y,m,d+1,10)',
        end: 'dyndatetime(y,m,d+1,12)',
        title: 'Grocery shopping',
        consumption: 3.64,
        distance: 52,
        resource: 'suv1',
        description: 'Convenient SUV service for stress-free grocery shopping trips.',
      },
      {
        id: 22,
        start: 'dyndatetime(y,m,d+1,14)',
        end: 'dyndatetime(y,m,d+1,18)',
        title: 'School pick-ups and drop-offs',
        consumption: 1.96,
        distance: 28,
        resource: 'suv1',
        description:
          'Reliable SUV service for school pick-ups and drop-offs, ensuring safe and punctual transportation for students to and from school.',
      },
      {
        id: 23,
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Pet transportation to the vet',
        consumption: 0.91,
        distance: 13,
        resource: 'suv2',
        description: 'Safe and comfortable SUV service for transporting pets to veterinary appointments with ease.',
      },
      {
        id: 24,
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,23)',
        title: 'Ride-sharing service for passengers',
        consumption: 3.78,
        distance: 54,
        resource: 'suv2',
        description:
          'Convenient SUV ride-sharing service for passengers, offering comfortable and affordable transportation options for individuals and groups traveling to various destinations with ease.',
      },
      {
        id: 25,
        start: 'dyndatetime(y,m,d+1,6)',
        end: 'dyndatetime(y,m,d+1,22)',
        title: 'Sports team transportation',
        consumption: 5.88,
        distance: 84,
        resource: 'suv2',
        description:
          'Reliable SUV service for sports teams, providing spacious and comfortable transportation to games, tournaments, and training sessions.',
      },
      {
        id: 26,
        start: 'dyndatetime(y,m,d,4)',
        end: 'dyndatetime(y,m,d,20)',
        title: 'Delivery service',
        consumption: 0.49,
        distance: 7,
        resource: 'suv3',
        description: 'Efficient SUV delivery service for timely and reliable shipments.',
      },
      {
        id: 27,
        start: 'dyndatetime(y,m,d+1,7)',
        end: 'dyndatetime(y,m,d+1,15)',
        title: 'Volunteer service transport',
        consumption: 1.75,
        distance: 25,
        resource: 'suv3',
        description:
          'Dedicated SUV service for volunteer transportation, ensuring safe and convenient travel for individuals serving their community.',
      },
      {
        id: 28,
        start: 'dyndatetime(y,m,d+1,16)',
        end: 'dyndatetime(y,m,d+1,23)',
        title: 'Event transportation for weddings',
        consumption: 3.92,
        distance: 56,
        resource: 'suv3',
        description:
          'Experience seamless event transportation for weddings with our SUV service, providing elegant vehicles and professional chauffeurs to ensure a memorable journey for the bride, groom, and guests.',
      },
    ];

    var getMapping = function (str) {
      switch (str) {
        case 'sedan1':
        case 'sedan2':
        case 'sedan3':
          return 'sedans';
        case 'suv1':
        case 'suv2':
        case 'suv3':
          return 'suvs';
        case 'minivan1':
        case 'minivan2':
        case 'minivan3':
          return 'minivans';
        case 'cargo-van1':
        case 'cargo-van2':
        case 'cargo-van3':
          return 'cargo-vans';
        default:
          return str;
      }
    };
    var updateAggregates = function (dayEvents, firstDay, lastDay) {
      // console.log('DAY EVENTS ', dayEvents);
      var parentIds = ['sedans', 'suvs'];
      var mapOfUpdates = {};

      var dayStart = +new Date(firstDay);
      var dayMid = +new Date(firstDay).setHours(12);
      var dayEnd = +new Date(lastDay);
      dayEvents.forEach(function (event) {
        var eventStart = +new Date(event.start);
        var eventEnd = +new Date(event.end);
        var isAM = eventStart < dayMid && eventEnd > dayStart;
        var isPM = eventStart < dayEnd && eventEnd > dayMid;
        var partOfDay = '';
        if (isAM) {
          partOfDay = 'am';
        }
        if (isPM) {
          partOfDay = 'pm';
        }
        if (parentIds.indexOf(event.resource) >= 0) {
          if (!mapOfUpdates[event.resource + partOfDay]) {
            mapOfUpdates[event.resource + partOfDay] = {
              event: event,
              consumption: 0,
              distance: 0,
            };
          }
        }
      });

      dayEvents.forEach(function (event) {
        var mapping = getMapping(event.resource);
        var eventStart = +new Date(event.start);
        var eventEnd = +new Date(event.end);
        var isAM = eventStart < dayMid && eventEnd > dayStart;
        var isPM = eventStart < dayEnd && eventEnd > dayMid;
        if (isAM) {
          mapOfUpdates[mapping + 'am'].consumption += event.consumption;
          mapOfUpdates[mapping + 'am'].distance += event.distance;
        }
        if (isPM) {
          mapOfUpdates[mapping + 'pm'].consumption += event.consumption;
          mapOfUpdates[mapping + 'pm'].distance += event.distance;
        }
      });
      // console.log('MAP OF UPDATES ', mapOfUpdates);
      var aggregates = {};
      Object.keys(mapOfUpdates).forEach(function (key) {
        var el = mapOfUpdates[key];
        var event = el.event;
        event.consumption = el.consumption;
        event.distance = el.distance;
        aggregates[event.id] = event;
      });
      return aggregates;
    };

    $(function () {
      var inst = $('#demo-show-summaries-aggregates-for-resource-groups')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'day',
              eventHeight: 'variable',
              timeCellStep: 720,
              timeLabelStep: 360,
            },
          },
          onPageLoading: function (args, inst) {
            var dailyEvents = inst.getEvents(args.firstDay, args.lastDay);
            // console.log('LOADING CALLED', args.firstDay, args.lastDay, dailyEvents);
            var updatedSummaries = updateAggregates(dailyEvents, args.firstDay, args.lastDay);
            var updatedEvents = defaultEvents.map(function (e) {
              if (updatedSummaries[e.id]) {
                return updatedSummaries[e.id];
              }
              return e;
            });
            // console.log('UPDATED EVENTS ', updatedEvents.slice());
            // I HAVE ISSUES HERE, I DO NOT KNOW HOW TO UPDATE THE EVENTS
            // ON NAVIGATION IT DOES NOT WORK AND SOMETIMES IT FREEZES
            //setTimeout(inst.setEvents(updatedEvents), 6000);
            inst.setEvents(updatedEvents);
          },
          renderScheduleEventContent: function (event) {
            var isParent = event.currentResource.isParent;
            if (isParent) {
              return (
                '<div class="mds-show-summaries-aggregates-parent">' +
                '<div class="mds-show-summaries-aggregates-title">' +
                event.title +
                '</div><div class="mds-show-summaries-aggregates-description">' +
                event.original.description +
                '<ul class="mds-show-summaries-aggregates-details"><li>Total distance covered: ' +
                event.original.distance +
                ' miles</li><li>Total consumption: ' +
                event.original.consumption +
                ' gallons</li></ul></div></div>'
              );
            }
            return (
              '<div class="">' +
              '<div class="mds-show-summaries-aggregates-title">' +
              event.title +
              '</div><div class="mds-show-summaries-aggregates-description">' +
              event.original.description +
              '<ul class="mds-show-summaries-aggregates-details"><li>Distance covered: ' +
              event.original.distance +
              ' miles</li><li>Consumption: ' +
              event.original.consumption +
              ' gallons</li></ul></div></div>'
            );
          },
          resources: [
            {
              id: 'sedans',
              name: 'Sedans',
              color: '#4981d6',
              children: [
                {
                  id: 'sedan1',
                  name: 'Sedan-1',
                  color: '#e20000',
                },
                {
                  id: 'sedan2',
                  name: 'Sedan-2',
                  color: '#76e083',
                },
                {
                  id: 'sedan3',
                  name: 'Sedan-3',
                  color: '#d6d145',
                },
              ],
            },
            {
              id: 'suvs',
              name: 'SUVs',
              color: '#4981d6',
              children: [
                {
                  id: 'suv1',
                  name: 'SUV-1',
                  color: '#e20000',
                },
                {
                  id: 'suv2',
                  name: 'SUV-2',
                  color: '#76e083',
                },
                {
                  id: 'suv3',
                  name: 'SUV-3',
                  color: '#d6d145',
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
<div id="demo-show-summaries-aggregates-for-resource-groups"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
  .mds-show-summaries-aggregates-parent {
    height: 100px;
  }
  .mds-show-summaries-aggregates-title {
    white-space: normal;
    line-height: 20px;
    font-size: 16px;
    font-weight: 600;
  }
  .mds-show-summaries-aggregates-description {
    padding: 4px 0;
    white-space: normal;
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
  }
  .mds-show-summaries-aggregates-details {}
  `,
};
