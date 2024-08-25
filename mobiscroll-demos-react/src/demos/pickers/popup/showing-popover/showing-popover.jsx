import { Button, Input, Page, Popup, Radio, RadioGroup, Segmented, SegmentedGroup, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [isSubscribeOpen, setSubscribeOpen] = useState(false);
  const [isListOpen, setListOpen] = useState(false);

  const openListPopup = useCallback(() => {
    setListOpen(true);
  }, []);

  const openSubscribePopup = useCallback(() => {
    setSubscribeOpen(true);
  }, []);

  const handleSubscribeClose = useCallback(() => {
    setSubscribeOpen(false);
  }, []);

  const handleListClose = useCallback(() => {
    setListOpen(false);
  }, []);

  return (
    <Page>
      <div className="mbsc-align-center">
        <div className="mbsc-note">Use the popup with or without return value.</div>
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Without return value</div>
        <div className="mbsc-button-group-block">
          <Button onClick={openSubscribePopup}>Open popup</Button>
        </div>
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">With return value</div>
        <Input onClick={openListPopup} data-label="Update" placeholder="Please Select..." readonly />
      </div>

      <Popup
        display="center"
        buttons={[
          {
            text: 'Subscribe',
            handler: function () {
              // toast: Subscribed
            },
          },
        ]}
        isOpen={isSubscribeOpen}
        onClose={() => {
          handleSubscribeClose();
        }}
      >
        <div className="mbsc-align-center">
          <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" alt="logo" />
          <h2>Stay with us!</h2>
          <p>
            Join our newsletter and be the first <br></br> to receive exciting updates and news!
          </p>
          <Input inputStyle="box" placeholder="Enter your email address"></Input>
          <SegmentedGroup name="range">
            <Segmented defaultChecked={true}>Weekly</Segmented>
            <Segmented>Monthly</Segmented>
          </SegmentedGroup>
        </div>
      </Popup>

      <Popup
        display="center"
        buttons={[
          {
            text: 'Ok',
            handler: 'cancel',
          },
        ]}
        isOpen={isListOpen}
        onClose={() => {
          handleListClose();
          // set return value
        }}
      >
        <div className="mbsc-form-group-inset">
          <p>
            Some updates are available for you. <br></br> When would you like to install them?
          </p>
        </div>
        <div className="mbsc-form-group-inset">
          <RadioGroup name="update">
            <Radio label="Right now" defaultChecked={true} />
            <Radio label="Later on today" />
            <Radio label="Remind me tomorrow" />
          </RadioGroup>
        </div>
      </Popup>
    </Page>
  );
}

export default App;
