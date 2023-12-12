import React from 'react';
//<demo-only>import { Input, Page, Button, Stepper, Radio, RadioGroup, Textarea, Dropdown, Switch, Checkbox, SegmentedGroup, Segmented, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const setOptions = mobiscroll.setOptions;
const Input = mobiscroll.Input;
const Textarea = mobiscroll.Textarea;
const Button = mobiscroll.Button;
const Stepper = mobiscroll.Stepper;
const Radio = mobiscroll.Radio;
const RadioGroup = mobiscroll.RadioGroup;
const Dropdown = mobiscroll.Dropdown;
const Switch = mobiscroll.Switch;
const Checkbox = mobiscroll.Checkbox;
const SegmentedGroup = mobiscroll.SegmentedGroup;
const Segmented = mobiscroll.Segmented;
const Page = mobiscroll.Page; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
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
}

ReactDOM.render(<App />, document.getElementById('content'));
