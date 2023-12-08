import React from 'react';
import {
  Input,
  Page,
  Button,
  Stepper,
  Radio,
  RadioGroup,
  Textarea,
  Dropdown,
  Switch,
  Checkbox,
  SegmentedGroup,
  Segmented,
  setOptions /* localeImport */,
} from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  return (
    <Page>
      <div className="mbsc-form-group">
        <Input label="Input field" placeholder="Input with label" />
        <Textarea label="Textarea" placeholder="Textarea with label" />
        <Dropdown label="Select">
          <option value="Opel">Opel</option>
          <option value="Renault">Renault</option>
          <option value="Citroen">Citroen</option>
          <option value="Lotus">Lotus</option>
        </Dropdown>
        <Switch label="Switch" defaultChecked={true} />
        <Checkbox label="Checkbox" defaultChecked={true} />
        <RadioGroup name="rad">
          <Radio value="1" label="Radio 1" defaultChecked={true} />
          <Radio value="2" label="Radio 2" />
        </RadioGroup>
        <Stepper label="Stepper" />
        <div class="mbsc-button-group-block">
          <Button>Button</Button>
        </div>
        <SegmentedGroup name="segmented-group">
          <Segmented>Segmented 1</Segmented>
          <Segmented>Segmented 2</Segmented>
        </SegmentedGroup>
      </div>
    </Page>
  );
};
