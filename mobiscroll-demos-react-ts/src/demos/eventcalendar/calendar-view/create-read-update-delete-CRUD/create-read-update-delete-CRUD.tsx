import {
  Button,
  Datepicker,
  Dropdown,
  Eventcalendar,
  Input,
  MbscCalendarEvent,
  MbscDatepickerChangeEvent,
  MbscDatepickerControl,
  MbscDatepickerOptions,
  MbscDateType,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscPopupButton,
  MbscPopupOptions,
  MbscResponsiveOptions,
  Popup,
  Segmented,
  SegmentedGroup,
  setOptions,
  Snackbar,
  Switch,
  Textarea /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, MouseEvent, useCallback, useMemo, useRef, useState } from 'react';
import './create-read-update-delete-CRUD.css';

setOptions({
  // localeJs,
  // themeJs
});

const defaultEvents: MbscCalendarEvent[] = [
  {
    id: 1,
    start: 'dyndatetime(y,m,8,13)',
    end: 'dyndatetime(y,m,8,13,45)',
    title: "Lunch @ Butcher's",
    description: '',
    allDay: false,
    bufferBefore: 15,
    free: true,
    color: '#009788',
  },
  {
    id: 2,
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Conference',
    description: '',
    allDay: false,
    bufferBefore: 30,
    free: false,
    color: '#ff9900',
  },
  {
    id: 3,
    start: 'dyndatetime(y,m,d-1,18)',
    end: 'dyndatetime(y,m,d-1,22)',
    title: 'Site Visit',
    description: '',
    allDay: false,
    bufferBefore: 60,
    free: true,
    color: '#3f51b5',
  },
  {
    id: 4,
    start: 'dyndatetime(y,m,d+1,10,30)',
    end: 'dyndatetime(y,m,d+1,11,30)',
    title: 'Stakeholder mtg.',
    description: '',
    allDay: false,
    free: false,
    color: '#f44437',
  },
];

const colors = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#3f51b5', '', '#009788', '#4baf4f', '#7e5d4e'];

const App: FC = () => {
  const [myEvents, setMyEvents] = useState<MbscCalendarEvent[]>(defaultEvents);
  const [editedEvent, setEditedEvent] = useState<MbscCalendarEvent | null>(null);

  const [eventId, setEventId] = useState<string | number | null>(null);
  const [eventTitle, setEventTitle] = useState<string>('');
  const [eventDescription, setEventDescription] = useState<string>('');
  const [eventAllDay, setEventAllDay] = useState<boolean>(false);
  const [eventStart, setEventStart] = useState<MbscDateType | null>(null);
  const [eventEnd, setEventEnd] = useState<MbscDateType | null>(null);
  const [dateStart, startRef] = useState<MbscDateType | null>(null);
  const [dateEnd, endRef] = useState<MbscDateType | null>(null);
  const [eventBuffer, setEventBuffer] = useState<number>(0);
  const [eventColor, setEventColor] = useState<string>('');
  const [eventStatus, setEventStatus] = useState<boolean>(false);

  const [addEditPopupAnchor, setAddEditPopupAnchor] = useState<HTMLElement>();
  const [addEditPopupOpen, setAddEditPopupOpen] = useState<boolean>(false);
  const [colorPickerAnchor, setColorPickerAnchor] = useState<HTMLElement>();
  const [colorPickerOpen, setColorPickerOpen] = useState<boolean>(false);
  const [colorPreview, setColorPreview] = useState<string>('');
  const [isEdit, setEdit] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const calInst = useRef<Eventcalendar | null>(null);
  const colorPickerRef = useRef<Popup | null>(null);

  const applySelectedColor = useCallback((color: string) => {
    setEventColor(color);
    setColorPreview(color);
    setColorPickerOpen(false);
  }, []);

  const myView: MbscEventcalendarView = useMemo(() => ({ calendar: { labels: true } }), []);

  const colorPickerButtons = useMemo<(string | MbscPopupButton)[]>(
    () => [
      'cancel',
      {
        text: 'Set',
        keyCode: 'enter',
        handler: () => applySelectedColor(eventColor),
        cssClass: 'mbsc-popup-button-primary',
      },
    ],
    [applySelectedColor, eventColor],
  );

  const colorPickerResponsive: MbscResponsiveOptions<MbscPopupOptions> = useMemo(
    () => ({
      medium: {
        display: 'anchored',
        touchUi: false,
        buttons: [],
      },
    }),
    [],
  );

  const datepickerControls = useMemo(() => (eventAllDay ? ['date'] : ['datetime']) as MbscDatepickerControl[], [eventAllDay]);

  const datepickerResponsive: MbscResponsiveOptions<MbscDatepickerOptions> = useMemo(
    () =>
      eventAllDay
        ? {
            medium: { controls: ['calendar'], touchUi: false },
          }
        : {
            medium: { controls: ['calendar', 'time'], touchUi: false },
          },
    [eventAllDay],
  );

  const addEditPopupHeaderText = useMemo<string>(() => (isEdit ? 'Edit event' : 'New Event'), [isEdit]);

  const snackbarButton = useMemo(
    () => ({
      action: () => {
        setMyEvents((prevEvents) => [...prevEvents, editedEvent!]);
      },
      text: 'Undo',
    }),
    [editedEvent],
  );

  const handleTitleChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setEventTitle(ev.target.value);
  }, []);

  const handleDescriptionChange = useCallback((ev: ChangeEvent<HTMLTextAreaElement>) => {
    setEventDescription(ev.target.value);
  }, []);

  const handleAllDayChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setEventAllDay(ev.target.checked);
  }, []);

  const handleDateChange = useCallback((args: MbscDatepickerChangeEvent) => {
    const value = args.value as MbscDateType[];
    setEventStart(value[0]);
    setEventEnd(value[1]);
  }, []);

  const handleBufferChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setEventBuffer(+ev.target.value);
  }, []);

  const handleStatusChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setEventStatus(ev.target.value === 'free');
  }, []);

  const fillPopup = useCallback((event: MbscCalendarEvent) => {
    setEventId(event.id!);
    setEventTitle(event.title || '');
    setEventDescription(event.description || '');
    setEventAllDay(event.allDay!);
    setEventStart(event.start!);
    setEventEnd(event.end!);
    setEventBuffer(event.bufferBefore || 0);
    setEventColor(event.color || '');
    setColorPreview(event.color || '');
    setEventStatus(event.free);
  }, []);

  const createEditPopup = useCallback(
    (event: MbscCalendarEvent, target: HTMLElement) => {
      setEdit(true);
      setEditedEvent(event);
      setAddEditPopupAnchor(target);
      fillPopup(event);
      setAddEditPopupOpen(true);
    },
    [fillPopup],
  );

  const createAddPopup = useCallback(
    (event: MbscCalendarEvent, target: HTMLElement) => {
      setSuccess(false);
      setEdit(false);
      setEditedEvent(event);
      setAddEditPopupAnchor(target);
      fillPopup(event);
      setAddEditPopupOpen(true);
    },
    [fillPopup],
  );

  const handleEventClick = useCallback(
    (args: MbscEventClickEvent) => {
      createEditPopup(args.event, args.domEvent.currentTarget);
    },
    [createEditPopup],
  );

  const handleEventCreated = useCallback(
    (args: MbscEventCreatedEvent) => {
      createAddPopup(args.event, args.target!);
    },
    [createAddPopup],
  );

  const handleEventDeleted = useCallback(() => {
    setSnackbarOpen(true);
  }, []);

  const getEventData = useCallback<() => MbscCalendarEvent>(
    () => ({
      id: eventId!,
      title: eventTitle,
      description: eventDescription,
      allDay: eventAllDay,
      start: eventStart!,
      end: eventEnd!,
      bufferBefore: eventBuffer,
      color: eventColor,
      free: eventStatus,
    }),
    [eventId, eventTitle, eventDescription, eventAllDay, eventStart, eventEnd, eventBuffer, eventColor, eventStatus],
  );

  const addEditPopupButtons = useMemo<(string | MbscPopupButton)[]>(() => {
    if (isEdit) {
      return [
        'cancel',
        {
          text: 'Save',
          keyCode: 'enter',
          cssClass: 'mbsc-popup-button-primary',
          handler: () => {
            const updatedEvent: MbscCalendarEvent = getEventData();
            const index = myEvents.findIndex((x) => x.id === updatedEvent.id);
            const newEventList = [...myEvents];

            // Update event in the list
            newEventList.splice(index, 1, updatedEvent);
            setMyEvents(newEventList);

            calInst.current!.navigateToEvent(updatedEvent);
            setAddEditPopupOpen(false);
          },
        },
      ];
    } else {
      return [
        'cancel',
        {
          text: 'Add',
          keyCode: 'enter',
          cssClass: 'mbsc-popup-button-primary',
          handler: () => {
            const newEvent: MbscCalendarEvent = getEventData();

            // Add new event to the list
            setMyEvents([...myEvents, newEvent]);

            setSuccess(true);
            calInst.current!.navigateToEvent(newEvent);
            setAddEditPopupOpen(false);
          },
        },
      ];
    }
  }, [isEdit, getEventData, myEvents]);

  const handleAddEditPopupClose = useCallback(() => {
    if (!isEdit && !isSuccess) {
      // Refresh the list, if add popup was canceled, to remove the temporary event
      setMyEvents([...myEvents]);
    }
    setAddEditPopupOpen(false);
  }, [isEdit, isSuccess, myEvents]);

  const handleDeleteButtonClick = useCallback(() => {
    const filteredEvents = myEvents.filter((e) => e.id !== editedEvent!.id);
    setMyEvents(filteredEvents);
    setAddEditPopupOpen(false);
    setSnackbarOpen(true);
  }, [editedEvent, myEvents]);

  const handleSnackbarClose = useCallback(() => {
    setSnackbarOpen(false);
  }, []);

  const handleOpenColorPicker = useCallback((ev: MouseEvent<HTMLDivElement>) => {
    setColorPickerAnchor(ev.currentTarget);
    setColorPickerOpen(true);
  }, []);

  const handleColorChange = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      const color = ev.currentTarget.getAttribute('data-value') || '';
      setEventColor(color);
      if (!colorPickerRef.current!.s.buttons!.length) {
        applySelectedColor(color);
      }
    },
    [applySelectedColor],
  );

  return (
    <>
      <Eventcalendar
        clickToCreate={true}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        data={myEvents}
        ref={calInst}
        view={myView}
        onEventClick={handleEventClick}
        onEventCreated={handleEventCreated}
        onEventDeleted={handleEventDeleted}
      />

      <Popup
        display="bottom"
        contentPadding={false}
        fullScreen={true}
        scrollLock={false}
        headerText={addEditPopupHeaderText}
        anchor={addEditPopupAnchor}
        buttons={addEditPopupButtons}
        isOpen={addEditPopupOpen}
        onClose={handleAddEditPopupClose}
      >
        <div className="mbsc-form-group">
          <Input label="Title" value={eventTitle} onChange={handleTitleChange} />
          <Textarea label="Description" value={eventDescription} onChange={handleDescriptionChange} />
        </div>

        <div className="mbsc-form-group">
          <Switch label="All-day" checked={eventAllDay} onChange={handleAllDayChange} />

          <Input ref={startRef} label="Starts" />
          <Input ref={endRef} label="Ends" />

          <Datepicker
            select="range"
            display="anchored"
            controls={datepickerControls}
            touchUi={true}
            startInput={dateStart}
            endInput={dateEnd}
            showRangeLabels={false}
            responsive={datepickerResponsive}
            onChange={handleDateChange}
            value={[eventStart, eventEnd]}
          />

          {!eventAllDay && (
            <Dropdown label="Travel time" value={String(eventBuffer)} onChange={handleBufferChange}>
              <option value="0">None</option>
              <option value="5">5 minutes</option>
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="90">1.5 hours</option>
              <option value="120">2 hours</option>
            </Dropdown>
          )}

          <div onClick={handleOpenColorPicker} className="mbsc-flex mds-crud-event-color-cont">
            <div className="mbsc-flex-1-0">Color</div>
            <div className="mds-crud-selected-event-color" style={{ background: colorPreview }} />
          </div>

          <SegmentedGroup onChange={handleStatusChange}>
            <Segmented value="busy" checked={!eventStatus}>
              Show as busy
            </Segmented>
            <Segmented value="free" checked={eventStatus}>
              Show as free
            </Segmented>
          </SegmentedGroup>

          {isEdit && (
            <div className="mbsc-button-group">
              <Button className="mbsc-button-block" color="danger" variant="outline" onClick={handleDeleteButtonClick}>
                Delete event
              </Button>
            </div>
          )}
        </div>
      </Popup>

      <Popup
        display="bottom"
        contentPadding={false}
        showArrow={false}
        showOverlay={false}
        ref={colorPickerRef}
        anchor={colorPickerAnchor}
        isOpen={colorPickerOpen}
        buttons={colorPickerButtons}
        responsive={colorPickerResponsive}
      >
        <div className="mbsc-flex mds-crud-color-row">
          {colors.slice(0, 5).map((color, index) => (
            <div
              key={index}
              onClick={handleColorChange}
              className={`mds-crud-color-value ${eventColor === color ? 'selected' : ''}`}
              data-value={color}
            >
              <div className="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }} />
            </div>
          ))}
        </div>

        <div className="mbsc-flex mds-crud-color-row">
          {colors.slice(5).map((color, index) => (
            <div
              key={index + 5}
              onClick={handleColorChange}
              className={`mds-crud-color-value ${eventColor === color ? 'selected' : ''}`}
              data-value={color}
            >
              <div className="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }} />
            </div>
          ))}
        </div>
      </Popup>

      <Snackbar isOpen={snackbarOpen} message="Event deleted" button={snackbarButton} onClose={handleSnackbarClose} />
    </>
  );
};
export default App;
