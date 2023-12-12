import React from 'react';
//<demo-only>import { setOptions, Toast, Snackbar, Page, Button/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const setOptions = mobiscroll.setOptions;
const Page = mobiscroll.Page;
const Toast = mobiscroll.Toast;
const Snackbar = mobiscroll.Snackbar;
const Button = mobiscroll.Button; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [position, setPosition] = React.useState('bottom');
  const [isToastOpen, setToastOpen] = React.useState(false);
  const [toastColor, setToastColor] = React.useState('primary');

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  const showToast = React.useCallback((color, position) => {
    setPosition(position || 'bottom');
    setToastColor(color);
    setToastOpen(true);
  }, []);

  const [isSnackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarColor, setSnackbarColor] = React.useState('primary');
  const [snackbarBtn, setSnackbarBtn] = React.useState();

  const closeSnackbar = React.useCallback(() => {
    setSnackbarOpen(false);
  }, []);

  const showSnackbar = React.useCallback((color, position, button) => {
    setPosition(position);
    setSnackbarColor(color);
    setSnackbarBtn(button);
    setSnackbarOpen(true);
  }, []);

  const bottomToast = () => {
    showToast();
  };

  const topToast = () => {
    showToast(undefined, 'top');
  };

  const primaryToast = () => {
    showToast('primary');
  };

  const secondaryToast = () => {
    showToast('secondary');
  };

  const successToast = () => {
    showToast('success');
  };

  const dangerToast = () => {
    showToast('danger');
  };

  const warningToast = () => {
    showToast('warning');
  };

  const infoToast = () => {
    showToast('info');
  };

  const bottomSnackbar = () => {
    showSnackbar();
  };

  const topSnackbar = () => {
    showSnackbar(undefined, 'top');
  };

  const actionSnackbar = () => {
    showSnackbar(undefined, 'top', {
      text: 'Undo',
      action: function () {
        console.log('Undoing...');
      },
    });
  };

  const primarySnackbar = () => {
    showSnackbar('primary');
  };

  const secondarySnackbar = () => {
    showSnackbar('primary');
  };

  const successSnackbar = () => {
    showSnackbar('success');
  };

  const dangerSnackbar = () => {
    showSnackbar('danger');
  };

  const warningSnackbar = () => {
    showSnackbar('warning');
  };

  const infoSnackbar = () => {
    showSnackbar('info');
  };

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Toast</div>
        <Toast message="Message sent" color={toastColor} display={position} isOpen={isToastOpen} onClose={closeToast} />
        <div className="mbsc-button-group-block">
          <Button onClick={bottomToast}>Bottom toast</Button>
          <Button onClick={topToast}>Top toast</Button>
          <Button onClick={primaryToast}>Primary toast</Button>
          <Button onClick={secondaryToast}>Secondary toast</Button>
          <Button onClick={successToast}>Success toast</Button>
          <Button onClick={dangerToast}>Danger toast</Button>
          <Button onClick={warningToast}>Warning toast</Button>
          <Button onClick={infoToast}>Info toast</Button>
        </div>
      </div>

      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Snackbar</div>
        <Snackbar
          message="Your draft has been discarded"
          button={snackbarBtn}
          color={snackbarColor}
          display={position}
          isOpen={isSnackbarOpen}
          onClose={closeSnackbar}
        />
        <div className="mbsc-button-group-block">
          <Button onClick={bottomSnackbar}>Bottom snackbar</Button>
          <Button onClick={topSnackbar}>Top snackbar</Button>
          <Button onClick={actionSnackbar}>Snackbar with action</Button>
          <Button onClick={primarySnackbar}>Primary snackbar</Button>
          <Button onClick={secondarySnackbar}>Secondary snackbar</Button>
          <Button onClick={successSnackbar}>Success snackbar</Button>
          <Button onClick={dangerSnackbar}>Danger snackbar</Button>
          <Button onClick={warningSnackbar}>Warning snackbar</Button>
          <Button onClick={infoSnackbar}>Info snackbar</Button>
        </div>
      </div>
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
