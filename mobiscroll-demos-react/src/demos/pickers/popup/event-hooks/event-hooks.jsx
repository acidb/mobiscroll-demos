import { Button, Page, Popup, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useState } from 'react';

setOptions({
  // locale,
  // theme
});

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [myAnchor, setAnchor] = useState();

  const openPopup = useCallback((args) => {
    setAnchor(args.target);
    setPopupOpen(true);
  }, []);

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-button-group-block">
          <Button onClick={openPopup}>Open popup</Button>
        </div>
      </div>
      <Popup
        display="anchored"
        anchor={myAnchor}
        isOpen={isPopupOpen}
        buttons={['ok', 'cancel']}
        onClose={() => {
          setPopupOpen(false);
          // Your custom event handler goes here
        }}
        onDestroy={() => {
          // Your custom event handler goes here
        }}
        onInit={() => {
          // Logic running on component init
        }}
        onOpen={() => {
          // Your custom event handler goes here
        }}
        onPosition={() => {
          // Logic for component positioning
        }}
      >
        <div className="mbsc-align-center mbsc-padding">
          <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" alt="Logo" />
          <h4>Welcome to our website!</h4>
          <p>Have fun navigating through the demos.</p>
        </div>
      </Popup>
    </Page>
  );
}

export default App;
