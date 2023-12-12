import React from 'react';
import {
  Page,
  Popup,
  Button,
  Input,
  Textarea,
  Switch,
  SegmentedGroup,
  SegmentedItem,
  setOptions /* localeImport */,
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

const App: React.FC = () => {
  const [anchor, setAnchor] = React.useState<any>(null);
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const onBtnClick = React.useCallback<any>((args: any) => {
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
            <SegmentedItem value="busy" defaultChecked={true}>
              Show as busy
            </SegmentedItem>
            <SegmentedItem value="free">Show as free</SegmentedItem>
          </SegmentedGroup>
        </div>
      </Popup>
    </Page>
  );
};
