import React from 'react';
//<demo-only>import { Button, Input, Page, setOptions/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const setOptions = mobiscroll.setOptions;
const Button = mobiscroll.Button;
const Input = mobiscroll.Input;
const Page = mobiscroll.Page; //</extra>

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return (
    <Page>
      <div className="mbsc-grid mbsc-form-grid">
        <div className="mbsc-row">
          <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <Input label="Email" inputStyle="box" labelStyle="floating" placeholder="Enter your email address" />
          </div>
          <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <Input
              label="Password"
              inputStyle="box"
              labelStyle="floating"
              type="password"
              passwordToggle="true"
              placeholder="Set a password"
            />
          </div>
          <div className="mbsc-col-12 mbsc-col-lg-6">
            <Input label="Address" inputStyle="box" labelStyle="floating" placeholder="What is your address?" />
          </div>
        </div>
        <div className="mbsc-row">
          <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <Input label="Town" inputStyle="box" labelStyle="floating" placeholder="Enter your town" />
          </div>
          <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <Input label="State" inputStyle="box" labelStyle="floating" placeholder="Select your state" />
          </div>
          <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <Input label="Zip" inputStyle="box" labelStyle="floating" placeholder="What is your zip code" />
          </div>
          <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <Input label="Country" inputStyle="box" labelStyle="floating" placeholder="Select your country" />
          </div>
        </div>
        <div className="mbsc-row">
          <div className="mbsc-col-12 mbsc-col-md-16 mbsc-col-lg-3">
            <div className="mbsc-button-group-block">
              <Button color="success">Create account</Button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
