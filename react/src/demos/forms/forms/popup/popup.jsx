import React from 'react';
import {
  setOptions,
  Page,
  Popup,
  Button,
  Input,
  Textarea,
  Switch,
  SegmentedGroup,
  SegmentedItem /* localeImport */,
} from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const popupButtons = ['set', 'cancel'];

const responsivePopup = {
  medium: {
    display: 'anchored',
    width: 400,
    fullScreen: false,
    touchUi: false,
  },
};

function App() {
  const [isOpen, setOpen] = React.useState(false);
  const [anchor, setAnchor] = React.useState(null);

  const onBtnClick = React.useCallback((args) => {
    setAnchor(args.target);
    setOpen(true);
  }, []);

  return (
    <Page>
      <Button onClick={onBtnClick}>Show modal</Button>
      <Popup
        display="anchored"
        contentPadding={false}
        anchor={anchor}
        buttons={popupButtons}
        isOpen={isOpen}
        responsive={responsivePopup}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="mbsc-form-group">
          <Input label="Title" />
          <Textarea label="Description" />
        </div>
        <div className="mbsc-form-group">
          <Switch label="All-day" />
          <Input label="Starts" />
          <Input label="Ends" />
          <SegmentedGroup>
            <SegmentedItem value="busy">Show as busy</SegmentedItem>
            <SegmentedItem value="free">Show as free</SegmentedItem>
          </SegmentedGroup>
        </div>
      </Popup>
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
