const jqueryTemplate = `import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-{unique}')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'week',
            },
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: \`
<div id="demo-{unique}"></div>
\`,
  // eslint-disable-next-line es5/no-template-literals
  css: \`\`,
};
`;

const jsTemplate = `import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.eventcalendar('#demo-{unique}', {
      view: {
        timeline: {
          type: 'week',
        },
      },

    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: \`
<div id="demo-{unique}"></div>
\`,
  // eslint-disable-next-line es5/no-template-literals
  css: \`\`, 
};
`;

const reactTemplate = `import { Eventcalendar, getJson, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useEffect, useMemo, useState } from 'react';
import './{unique}.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState([]);

  const myView = useMemo(
    () => ({
      timeline: {
        type: 'week',
      },
    }),
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      // drag
      view={myView}
      data={myEvents}
    />
  );
}

export default App;
`;

const tsxTemplate = `import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useEffect, useMemo, useState } from 'react';
import './colors-invalids-css-class.css';

setOptions({
  // localeJs,
  // themeJs
});

const myResources: MbscResource[] = [
];

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
      },
    }),
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      // drag
      view={myView}
      resources={myResources}
      data={myEvents}
    />
  );
};
export default App;
`;

const vueTemplate = `
<script setup>
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])

const myResources = [
]

const myView = {
  timeline: {
    allDay: false,
    type: 'week',
    startDay: 1,
    endDay: 5,
    startTime: '09:00',
    endTime: '18:00'
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/timeline-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :resources="myResources"
  />
</template>

<style>

</style>
`;

const vueTsTempalte = `<script setup lang="ts">
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myResources: MbscResource[] = []

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'week'
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/timeline-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar :view="myView" :data="myEvents" :resources="myResources" />
</template>

<style></style>
`;

const fs = require("fs-extra");
const path = require("path");
const args = process.argv.slice(2);
const projects = [
  { name: "mobiscroll-demos-angular", files: ["css", "html", "ts"] },
  { name: "mobiscroll-demos-javascript", files: ["js"], template: jsTemplate },
  { name: "mobiscroll-demos-jquery", files: ["js"], template: jqueryTemplate },
  {
    name: "mobiscroll-demos-react",
    files: ["css", "jsx"],
    template: reactTemplate,
  },
  {
    name: "mobiscroll-demos-react-ts",
    files: ["css", "tsx"],
    template: tsxTemplate,
  },
  { name: "mobiscroll-demos-vue", files: ["vue"], template: vueTemplate },
  { name: "mobiscroll-demos-vue-ts", files: ["vue"], template: vueTsTempalte },
];

if (args.length) {
  const demoName = args[0]; // new demo unique name

  if (args[1]) {
    const demoCategory = args[1].split("/"); // component & subcategory where to create the files: eventcalendar/timeline
    const category = demoCategory[0];
    const component = demoCategory[1];

    projects.forEach((p) => {
      const dirPath = path.resolve(
        p.name,
        "src",
        "demos",
        category,
        component,
        demoName
      );

      p.files.forEach((ext) => {
        const fileName = path.resolve(dirPath, demoName + "." + ext);
        fs.ensureFileSync(fileName);
        if (
          p.template &&
          (ext === "js" || ext === "tsx" || ext === "jsx" || ext === "vue")
        ) {
          fs.writeFileSync(
            fileName,
            p.template.replace(/\{unique\}/g, demoName)
          );
        }
      });
    });
  }
} else {
  console.log(`This script will create the nessessary files for a new demo. Please pass the following args:
  1. New demo uinique name. Ex: event-customization
  2. Demo category and comoponent/view. Ex: eventcalendar/timeline

  Usage: node add.js new-uinique eventcalendar/timeline
  `);
}
