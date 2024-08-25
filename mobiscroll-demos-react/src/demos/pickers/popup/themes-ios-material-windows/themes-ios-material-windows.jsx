import { Button, Page, Popup, setOptions /* localeImport */ } from '@mobiscroll/react';
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

  return (
    <Page>
      <div className="mbsc-button-group-block">
        <Button onClick={openPopup}>Open popup</Button>
      </div>

      <Popup
        theme="material" // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
        themeVariant="dark" // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
        display="anchored"
        anchor={myAnchor}
        buttons={['set', 'cancel']}
        isOpen={isPopupOpen}
        onClose={() => {
          handleClose();
        }}
      >
        <div className="mbsc-align-center mbsc-padding">
          <h3>Hi again!</h3>
          <p>This is a popup with three custom buttons</p>
        </div>
      </Popup>
    </Page>
  );
}

export default App;
