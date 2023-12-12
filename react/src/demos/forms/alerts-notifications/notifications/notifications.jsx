import React from 'react';
//<demo-only>import { setOptions, toast, snackbar, Button/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const setOptions = mobiscroll.setOptions;
const toast = mobiscroll.toast;
const snackbar = mobiscroll.snackbar;
const Button = mobiscroll.Button;
const Page = mobiscroll.Page; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const showBottomToast = () => {
    toast({
      message: 'Message sent',
    });
  };

  const showTopToast = () => {
    toast({
      message: 'Message sent',
      display: 'top',
    });
  };

  const showPrimaryToast = () => {
    toast({
      message: 'Message sent',
      color: 'primary',
    });
  };

  const showSecondaryToast = () => {
    toast({
      message: 'Message sent',
      color: 'secondary',
    });
  };

  const showSuccessToast = () => {
    toast({
      message: 'Message sent',
      color: 'success',
    });
  };

  const showDangerToast = () => {
    toast({
      message: 'Message sent',
      color: 'danger',
    });
  };

  const showWarningToast = () => {
    toast({
      message: 'Message sent',
      color: 'warning',
    });
  };

  const showInfoToast = () => {
    toast({
      message: 'Message sent',
      color: 'info',
    });
  };

  const showBottomSnackbar = () => {
    snackbar({
      message: 'Your draft has been discarded',
    });
  };

  const showTopSnackbar = () => {
    snackbar({
      message: 'Your draft has been discarded',
      display: 'top',
    });
  };

  const showSnackbarAction = () => {
    snackbar({
      message: 'Connection timed out. Showing limited messages.',
      button: {
        text: 'Retry',
        action: () => {
          toast({
            message: 'Retrying...',
          });
        },
      },
    });
  };

  const showPrimarySnackbar = () => {
    snackbar({
      message: 'Your draft has been discarded',
      color: 'primary',
    });
  };

  const showSecondarySnackbar = () => {
    snackbar({
      message: 'Your draft has been discarded',
      color: 'secondary',
    });
  };

  const showSuccessSnackbar = () => {
    snackbar({
      message: 'Your draft has been discarded',
      color: 'success',
    });
  };

  const showDangerSnackbar = () => {
    snackbar({
      message: 'Your draft has been discarded',
      color: 'danger',
    });
  };

  const showWarningSnackbar = () => {
    snackbar({
      message: 'Your draft has been discarded',
      color: 'warning',
    });
  };

  const showInfoSnackbar = () => {
    snackbar({
      message: 'Your draft has been discarded',
      color: 'info',
    });
  };

  return (
    <Page>
      <div className="mbsc-block">
        <div className="mbsc-block-title">Toast</div>
        <div className="mbsc-button-group-block">
          <Button onClick={showBottomToast}>Bottom toast</Button>
          <Button onClick={showTopToast}>Top toast</Button>
          <Button onClick={showPrimaryToast}>Primary toast</Button>
          <Button onClick={showSecondaryToast}>Secondary toast</Button>
          <Button onClick={showSuccessToast}>Success toast</Button>
          <Button onClick={showDangerToast}>Danger toast</Button>
          <Button onClick={showWarningToast}>Warning toast</Button>
          <Button onClick={showInfoToast}>Info toast</Button>
        </div>
      </div>
      <div className="mbsc-block">
        <div className="mbsc-block-title">Snackbar</div>
        <div className="mbsc-button-group-block">
          <Button onClick={showBottomSnackbar}>Bottom snackbar</Button>
          <Button onClick={showTopSnackbar}>Top snackbar</Button>
          <Button onClick={showSnackbarAction}>Snackbar with action</Button>
          <Button onClick={showPrimarySnackbar}>Primary snackbar</Button>
          <Button onClick={showSecondarySnackbar}>Secondary snackbar</Button>
          <Button onClick={showSuccessSnackbar}>Success snackbar</Button>
          <Button onClick={showDangerSnackbar}>Danger snackbar</Button>
          <Button onClick={showWarningSnackbar}>Warning snackbar</Button>
          <Button onClick={showInfoSnackbar}>Info snackbar</Button>
        </div>
      </div>
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
