import { Button, Page, Popup, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useState } from 'react';

setOptions({
  // locale,
  // theme
});

function App() {
  const [isDefaultPopupOpen, setDefaultPopupOpen] = useState(false);
  const [isCustomPopupOpen, setCustomPopupOpen] = useState(false);

  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const openDefaultPopup = useCallback(() => {
    setDefaultPopupOpen(true);
  }, []);

  const openCustomPopup = useCallback(() => {
    setCustomPopupOpen(true);
  }, []);

  const handleDefaultClose = useCallback(() => {
    setDefaultPopupOpen(false);
  }, []);

  const handleCustomClose = useCallback(() => {
    setCustomPopupOpen(false);
  }, []);

  const openToast = useCallback((message) => {
    setToastMessage(message);
    setToastOpen(true);
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <Page>
      <div className="mbsc-align-center">
        <div className="mbsc-note">Customize popup buttons depending on your context.</div>
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-button-group-block">
          <Button onClick={openDefaultPopup}>Default</Button>
          <Button onClick={openCustomPopup}>Custom button</Button>
        </div>
      </div>

      <Popup
        display="center"
        isOpen={isDefaultPopupOpen}
        onClose={() => {
          handleDefaultClose();
        }}
      >
        <div className="mbsc-align-center mbsc-padding">
          <h3 className="md-text-center">Hi there!</h3>
          <p className="md-text-center">This is the default with no buttons.</p>
        </div>
      </Popup>

      <Popup
        display="center"
        isOpen={isCustomPopupOpen}
        buttons={[
          'ok',
          {
            text: 'Custom',
            handler: function () {
              openToast('Custom button clicked');
            },
          },
          'close',
        ]}
        onClose={() => {
          handleCustomClose();
        }}
      >
        <div className="mbsc-align-center mbsc-padding">
          <h3 className="md-text-center">Hi again!</h3>
          <p className="md-text-center">This is a popup with a custom and predefined buttons.</p>
        </div>
      </Popup>
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleToastClose} />
    </Page>
  );
}

export default App;
