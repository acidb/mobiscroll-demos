import { Alert, Button, Confirm, Page, Prompt, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [isPromptOpen, setPromptOpen] = useState(false);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showAlert = useCallback(() => {
    setAlertOpen(true);
  }, []);

  const showConfirm = useCallback(() => {
    setConfirmOpen(true);
  }, []);

  const showPrompt = useCallback(() => {
    setPromptOpen(true);
  }, []);

  const handleAlertClose = useCallback(() => {
    setAlertOpen(false);
    setToastMessage('Alert closed');
    setToastOpen(false);
    setTimeout(() => {
      setToastOpen(true);
    });
  }, []);

  const handleConfirmClose = useCallback((result) => {
    setConfirmOpen(false);
    setToastMessage(result ? 'Agreed' : 'Disagreed');
    setToastOpen(false);
    setTimeout(() => {
      setToastOpen(true);
    });
  }, []);

  const handlePromptClose = useCallback((value) => {
    setPromptOpen(false);
    setToastMessage(value === null ? 'Cancel was pressed.' : 'The password: ' + value);
    setToastOpen(false);
    setTimeout(() => {
      setToastOpen(true);
    });
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <Page>
      <div className="mbsc-block">
        <div className="mbsc-block-title">Alerts</div>
        <div className="mbsc-button-group-block">
          <Button onClick={showAlert}>Alert</Button>
          <Button onClick={showConfirm}>Confirm</Button>
          <Button onClick={showPrompt}>Prompt</Button>
        </div>
        <Alert
          isOpen={isAlertOpen}
          title='Cellular Data is Turned Off for "Safari"'
          message="You can turn on cellular data for this app in Settings."
          onClose={handleAlertClose}
        />
        <Confirm
          isOpen={isConfirmOpen}
          title="Use location service?"
          message="Help apps determine location. This means sending anonymous location data, even when no apps are running."
          okText="Agree"
          cancelText="Disagree"
          onClose={handleConfirmClose}
        />
        <Prompt
          isOpen={isPromptOpen}
          title="Sign in to iTunes Store"
          message='Enter the Apple ID password for "hello@mobiscroll.com".'
          placeholder="Password"
          inputType="password"
          onClose={handlePromptClose}
        />
        <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleToastClose} />
      </div>
    </Page>
  );
}

export default App;
