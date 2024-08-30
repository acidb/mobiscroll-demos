import {
  Button,
  Datepicker,
  Dropdown,
  Input,
  Page,
  Popup,
  Segmented,
  SegmentedGroup,
  setOptions,
  Switch,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { useCallback, useMemo, useState } from 'react';

setOptions({
  // locale,
  // theme
});

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupEventAllDay, setAllDay] = useState(false);
  const [popupEventTitle, setTitle] = useState('');
  const [popupEventDate, setDate] = useState([]);
  const [start, startRef] = useState(null);
  const [end, endRef] = useState(null);

  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState();

  const controls = useMemo(() => (popupEventAllDay ? ['date'] : ['datetime']), [popupEventAllDay]);

  const openPopup = useCallback(() => {
    setTitle('New Event');
    setPopupOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setPopupOpen(false);
  }, []);

  const dateChange = useCallback((args) => {
    setDate(args.value);
  }, []);

  const allDayChange = useCallback((ev) => {
    setAllDay(ev.target.checked);
  }, []);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-button-group-block">
          <Button onClick={openPopup}>Add event</Button>
        </div>
      </div>

      <Popup
        width={400}
        contentPadding={false}
        headerText="Add new event"
        display="center"
        showOverlay={false}
        isOpen={isPopupOpen}
        buttons={[
          'cancel',
          {
            text: 'Add',
            keyCode: 'enter',
            handler: function () {
              handleClose();
              setToastMessage('Event added');
              setToastOpen(true);
            },
            cssClass: 'mbsc-popup-button-primary',
          },
        ]}
        onClose={() => {
          handleClose();
        }}
      >
        <div id="demo-add-event-popup">
          <div className="mbsc-form-group">
            <Input label="Title" value={popupEventTitle}></Input>
            <Input label="Description"></Input>
          </div>
          <div className="mbsc-form-group">
            <Switch label="All-day" checked={popupEventAllDay} onChange={allDayChange} />
            <Input ref={startRef} label="Starts" />
            <Input ref={endRef} label="Ends" />
            {!popupEventAllDay && (
              <div id="travel-time-group">
                <Dropdown label="Travel time">
                  <option value="0">None</option>
                  <option value="5">5 minutes</option>
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="90">1.5 hours</option>
                  <option value="120">2 hours</option>
                </Dropdown>
              </div>
            )}
            <Datepicker
              select="range"
              display="anchored"
              controls={controls}
              touchUi={true}
              startInput={start}
              endInput={end}
              showRangeLabels={false}
              onChange={dateChange}
              value={popupEventDate}
            />
          </div>
          <div className="mbsc-form-group">
            <SegmentedGroup>
              <Segmented value="busy" checked={true}>
                Show as busy
              </Segmented>
              <Segmented value="free">Show as free</Segmented>
            </SegmentedGroup>
          </div>
        </div>
      </Popup>
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
    </Page>
  );
}

export default App;
