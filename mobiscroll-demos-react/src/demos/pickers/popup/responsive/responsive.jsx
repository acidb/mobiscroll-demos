import { Button, Input, Page, Popup, Segmented, SegmentedGroup, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [myAnchor, setAnchor] = useState();

  const openPopup = useCallback((args) => {
    setAnchor(args.target);
    setPopupOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setPopupOpen(false);
  }, []);

  const handleSubscribe = useCallback(() => {
    // toast: subscribed
    setPopupOpen(false);
  }, []);

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-button-group-block">
          <Button onClick={openPopup}>Open popup</Button>
        </div>
      </div>
      <Popup
        responsive={{
          xsmall: {
            display: 'bottom',
          },
          small: {
            display: 'center',
          },
          custom: {
            // Custom breakpoint
            breakpoint: 800,
            display: 'anchored',
            anchor: myAnchor,
          },
        }}
        isOpen={isPopupOpen}
        onClose={() => {
          handleClose();
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

          <div className="mbsc-button-group-block">
            <Button onClick={handleSubscribe}>Subscribe</Button>
          </div>
        </div>
      </Popup>
    </Page>
  );
}

export default App;
