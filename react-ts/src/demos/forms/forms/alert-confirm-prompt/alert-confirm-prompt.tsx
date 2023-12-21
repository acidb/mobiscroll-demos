import React from 'react';
import { Alert, Button, Confirm, Page, Prompt, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [isAlertOpen, setAlertOpen] = React.useState(false);
  const [isConfirmOpen, setConfirmOpen] = React.useState(false);
  const [isPromptOpen, setPromptOpen] = React.useState(false);

  const showAlert = () => {
    setAlertOpen(true);
  };

  const closeAlert = React.useCallback(() => {
    setAlertOpen(false);
  }, []);

  const showConfirm = () => {
    setConfirmOpen(true);
  };

  const closeConfirm = React.useCallback(() => {
    setConfirmOpen(false);
  }, []);

  const showPrompt = () => {
    setPromptOpen(true);
  };

  const closePrompt = React.useCallback((value: any) => {
    setPromptOpen(false);
    console.log('The password is: ' + value);
  }, []);

  return (
    <Page>
      <Alert
        title='Cellular Data is Turned Off for "Safari"'
        message="You can turn on cellular data for this app in Settings."
        isOpen={isAlertOpen}
        onClose={closeAlert}
      />
      <Confirm
        title="Use location service?"
        message="Help apps determinde location. This means sending anonymous location data, even when no apps are running."
        okText="Agree"
        cancelText="Disagree"
        isOpen={isConfirmOpen}
        onClose={closeConfirm}
      />
      <Prompt
        title="Sign in to iTunes Store"
        message='Enter the Apple ID password for "hello@mobiscroll.com".'
        placeholder="Password"
        inputType="password"
        isOpen={isPromptOpen}
        onClose={closePrompt}
      />

      <Button onClick={showAlert}>Alert</Button>
      <Button onClick={showConfirm}>Confirm</Button>
      <Button onClick={showPrompt}>Prompt</Button>
    </Page>
  );
};
export default App;
