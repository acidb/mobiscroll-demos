import { Button, Page, Popup, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [isNoBtnOpen, setNoBtnOpen] = useState(false);
  const [isPredefinedBtnOpen, setPredefinedBtnOpen] = useState(false);
  const [isCustomBtnOpen, setCustomBtnOpen] = useState(false);

  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  return (
    <Page>
      <div className="mbsc-align-center">
        <div className="mbsc-note">Customize popup buttons depending on your context.</div>
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-button-group-block">
          <Button onClick={() => setNoBtnOpen(true)}>No buttons</Button>
          <Button onClick={() => setPredefinedBtnOpen(true)}>Predefined buttons</Button>
          <Button onClick={() => setCustomBtnOpen(true)}>Custom button</Button>
        </div>
      </div>

      <Popup display="center" isOpen={isNoBtnOpen} onClose={() => setNoBtnOpen(false)}>
        <div className="mbsc-align-center mbsc-padding">
          <h3 className="md-text-center">Hi there!</h3>
          <p className="md-text-center">This is the default with no buttons.</p>
        </div>
      </Popup>

      <Popup display="center" isOpen={isPredefinedBtnOpen} buttons={['ok', 'cancel']} onClose={() => setPredefinedBtnOpen(false)}>
        <div className="mbsc-align-center mbsc-padding">
          <h3 className="md-text-center">Hi there!</h3>
          <p className="md-text-center">This is a popup with predifined buttons.</p>
        </div>
      </Popup>

      <Popup
        display="center"
        isOpen={isCustomBtnOpen}
        buttons={[
          {
            text: 'Custom',
            handler: function () {
              setToastMessage('Custom button clicked');
              setToastOpen(true);
            },
          },
        ]}
        onClose={() => setCustomBtnOpen(false)}
      >
        <div className="mbsc-align-center mbsc-padding">
          <h3 className="md-text-center">Hi again!</h3>
          <p className="md-text-center">This is a popup with a custom button.</p>
        </div>
      </Popup>
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={() => setToastOpen(false)} />
    </Page>
  );
}

export default App;
