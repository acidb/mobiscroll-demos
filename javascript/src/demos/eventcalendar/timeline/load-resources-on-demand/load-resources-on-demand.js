import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var myResources = [
      {
        id: 1,
        name: 'Group 1',
        collapsed: true,
        eventCreation: false,
        children: [
          {
            id: 11,
            color: '#e20000',
            name: 'Resource 1',
          },
          {
            id: 12,
            color: '#76e083',
            name: 'Resource 2',
          },
          {
            id: 13,
            color: '#4981d6',
            name: 'Resource 3',
          },
        ],
      },
      {
        id: 2,
        name: 'Group 2',
        collapsed: true,
        eventCreation: false,
        children: [
          {
            id: 21,
            name: 'Loading...',
          },
        ],
      },
      {
        id: 3,
        name: 'Group 3',
        collapsed: true,
        eventCreation: false,
        children: [
          {
            id: 31,
            name: 'Loading...',
          },
        ],
      },
      {
        id: 4,
        name: 'Group 4',
        collapsed: true,
        eventCreation: false,
        children: [
          {
            id: 41,
            name: 'Loading...',
          },
        ],
      },
      {
        id: 5,
        name: 'Group 5',
        collapsed: true,
        eventCreation: false,
        children: [
          {
            id: 51,
            color: '#af0000',
            name: 'Resource 12',
          },
          {
            id: 52,
            color: '#446f1c',
            name: 'Resource 13',
          },
          {
            id: 53,
            color: '#1dab2f',
            name: 'Resource 14',
          },
        ],
      },
      {
        id: 6,
        name: 'Resource 17',
        color: '#167593',
      },
      {
        id: 7,
        name: 'Resource 18',
        color: '#93166c',
      },
      {
        id: 8,
        name: 'Resource 19',
        color: '#e5e923',
      },
      {
        id: 9,
        name: 'Resource 20',
        color: '#935028',
      },
    ];

    var myEvents = [
      {
        start: 'dyndatetime(y,m,d,10)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Event 14',
        resource: 6,
      },
      {
        start: 'dyndatetime(y,m,d,15)',
        end: 'dyndatetime(y,m,d,17,30)',
        title: 'Event 15',
        resource: 7,
      },
      {
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,11)',
        title: 'Event 16',
        resource: 8,
      },
      {
        start: 'dyndatetime(y,m,d,17)',
        end: 'dyndatetime(y,m,d,20)',
        title: 'Event 17',
        resource: 9,
      },
    ];

    function getResourceById(resources, resourceId) {
      for (var i = 0; i < resources.length; i++) {
        var resource = resources[i];
        if (resource.id === resourceId) {
          return resource;
        } else {
          if (resource.children) {
            var child = getResourceById(resource.children, resourceId);
            if (child) {
              return child;
            }
          }
        }
      }
    }

    function loadChildResources(resourceId) {
      var newResources = myResources.slice();
      var resource = getResourceById(newResources, resourceId);

      if (!resource.loaded) {
        var newEvents = myEvents.slice();

        mobiscroll.getJson(
          'https://trial.mobiscroll.com/load-resources/?res=' + resourceId,
          function (data) {
            newEvents = newEvents.concat(data.events);

            myEvents = newEvents;
            resource.children = data.resources;
            resource.loaded = true;

            myCalendar.setOptions({
              data: newEvents,
              resources: newResources,
            });

            mobiscroll.toast({
              message: 'Resources loaded',
            });
          },
          'jsonp',
        );
      }
    }

    var myCalendar = mobiscroll.eventcalendar('#demo', {
      // drag,
      view: {
        timeline: {
          type: 'day',
        },
      },
      resources: myResources,
      data: myEvents,
      onResourceExpand: function (args) {
        loadChildResources(args.resource);
      },
    });
  },
  markup: `
<div id="demo" class="md-load-resources-on-demand"></div>
  `,
  css: `
.md-load-resources-on-demand .mbsc-timeline-parent {
    height: 34px;
}
  `,
};
