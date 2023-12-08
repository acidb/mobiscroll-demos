import React from 'react';
import { setOptions, toast, alert, confirm, prompt, Button /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const showAlert = () => {
    alert({
      title: 'Cellular Data is Turned Off for "Safari"',
      message: 'You can turn on cellular data for this app in Settings.',
      callback: () => {
        toast({
          message: 'Alert closed',
        });
      },
    });
  };

  const showConfirm = () => {
    confirm({
      title: 'Use location service?',
      message: 'Help apps determine location. This means sending anonymous location data, even when no apps are running.',
      okText: 'Agree',
      cancelText: 'Disagree',
      callback: (res) => {
        toast({
          message: res ? 'Agreed' : 'Disagreed',
        });
      },
    });
  };

  const showPrompt = () => {
    prompt({
      title: 'Sign in to iTunes Store',
      message: 'Enter the Apple ID password for "hello@mobiscroll.com".',
      placeholder: 'Password',
      inputType: 'password',
      callback: (value) => {
        toast({
          message: value === null ? 'Cancel was pressed.' : 'The password: ' + value,
        });
      },
    });
  };

  return (
    <Page>
      <div className="mbsc-block">
        <div className="mbsc-block-title">Alerts</div>
        <div className="mbsc-button-group-block">
          <Button onClick={showAlert}>Alert</Button>
          <Button onClick={showConfirm}>Confirm</Button>
          <Button onClick={showPrompt}>Prompt</Button>
        </div>
      </div>
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
