<script setup>
import {
  dragulaDraggable,
  getJson,
  MbscEventcalendar,
  MbscToast,
  setOptions,
  sortableJsDraggable /* localeImport */
} from '@mobiscroll/vue'
import dragula from 'dragula'
import Sortable from 'sortablejs'
import { onMounted, ref } from 'vue'
import 'dragula/dist/dragula.css'

setOptions({
  // locale,
  // theme
})

const sortableCont = ref([])
const dragulaCont = ref()
const myEvents = ref([])
const toastMessage = ref(null)
const isToastOpen = ref(false)

const mySortableTasks = ref([
  {
    id: 'sortable-1',
    title: 'Task 1',
    color: '#cb3939',
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,9,30)'
  },
  {
    id: 'sortable-2',
    title: 'Task 2',
    color: '#cb3939',
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,15)'
  },
  {
    id: 'sortable-3',
    title: 'Task 3',
    color: '#cb3939',
    start: 'dyndatetime(y,m,d,8,30)',
    end: 'dyndatetime(y,m,d,11)'
  },
  {
    id: 'sortable-4',
    title: 'Task 4',
    color: '#cb3939',
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,17)'
  }
])

const myDragulaTasks = ref([
  {
    id: 'dragula-1',
    title: 'Task 5',
    color: '#1ca11a',
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,9,30)'
  },
  {
    id: 'dragula-2',
    title: 'Task 6',
    color: '#1ca11a',
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,15)'
  },
  {
    id: 'dragula-3',
    title: 'Task 7',
    color: '#1ca11a',
    start: 'dyndatetime(y,m,d,8,30)',
    end: 'dyndatetime(y,m,d,11)'
  },
  {
    id: 'dragula-4',
    title: 'Task 8',
    color: '#1ca11a',
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,17)'
  }
])

function handleEventCreated(args) {
  if (args.action === 'externalDrop') {
    mySortableTasks.value = mySortableTasks.value.filter((item) => item.id !== args.event.id)
    myDragulaTasks.value = myDragulaTasks.value.filter((item) => item.id !== args.event.id)
    toastMessage.value = args.event.title + ' added'
    isToastOpen.value = true
  }
}

function getHours(event) {
  const eventLength = Math.round(
    Math.abs(new Date(event.end) - new Date(event.start)) / (60 * 60 * 1000)
  )
  return eventLength + ' hour' + (eventLength > 1 ? 's' : '')
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/drag-drop-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
  if (sortableCont.value) {
    const sortableInstance = new Sortable(sortableCont.value, {
      animation: 150,
      forceFallback: true
    })

    sortableJsDraggable.init(sortableInstance, {
      cloneSelector: '.sortable-drag'
    })
  }

  if (dragulaCont.value) {
    const drake = dragula([dragulaCont.value])
    dragulaDraggable.init(drake)
  }
})
</script>

<template>
  <div class="mbsc-grid mbsc-no-padding mds-full-height">
    <div class="mbsc-row mds-full-height">
      <div class="mbsc-col-sm-9 mds-drag-drop-sort-calendar mds-full-height">
        <MbscEventcalendar
          :data="myEvents"
          :externalDrop="true"
          @event-created="handleEventCreated"
        />
      </div>
      <div class="mbsc-col-sm-3 mds-drag-drop-sort-container-wrapper mds-full-height">
        <div class="mbsc-txt-muted mds-third-party-title">SortableJS list</div>
        <div class="mds-drag-drop-sort-container" ref="sortableCont">
          <div
            v-for="task in mySortableTasks"
            :key="task.id"
            class="mds-drag-drop-sort-task"
            :style="{ background: task.color }"
            :data-drag-data="JSON.stringify(task)"
          >
            <div>{{ task.title }}</div>
            <div>{{ getHours(task) }}</div>
          </div>
        </div>
        <div class="mbsc-txt-muted mds-third-party-title">Dragula list</div>
        <div class="mds-drag-drop-sort-container" ref="dragulaCont">
          <div
            v-for="task in myDragulaTasks"
            :key="task.id"
            class="mds-drag-drop-sort-task"
            :style="{ background: task.color }"
            :data-drag-data="JSON.stringify(task)"
          >
            <div>{{ task.title }}</div>
            <div>{{ getHours(task) }}</div>
          </div>
        </div>
      </div>
    </div>
    <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
  </div>
</template>

<style>
.mds-full-height {
  height: 100%;
}

.mds-drag-drop-sort-calendar {
  border-right: 1px solid #ccc;
}

.mds-drag-drop-sort-container {
  margin: 10px;
}

.mds-drag-drop-sort-container-wrapper {
  overflow: auto;
}

.mds-third-party-title {
  margin-top: 12px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 600;
}

.mds-drag-drop-sort-task {
  margin: 10px;
  padding: 10px;
  touch-action: none;
  color: #fff;
  border-radius: 8px;
  font-family:
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
}
</style>
