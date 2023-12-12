import React from 'react';
//<demo-only>import { Datepicker, Input, Page/* localeImport */ } from '@mobiscroll/react';//</demo-only>

//<extra>const Datepicker = mobiscroll.Datepicker;
const Input = mobiscroll.Input;
const Page = mobiscroll.Page; //</extra>

function App() {
  const now = new Date();
  const until = new Date(now.getFullYear() + 10, now.getMonth());

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Add a new credit card</div>
        <Input label="Name" placeholder="Required"></Input>
        <Input label="Card" placeholder="Credit card number"></Input>
        <Datepicker
          controls={['date']}
          dateFormat="MM/YYYY"
          dateWheels="DD MMMM YYYY"
          min={now}
          max={until}
          value="12/2025"
          label="Expiration"
          placeholder="Required"
        ></Datepicker>
        <Input label="Security" placeholder="3-digit CVV"></Input>
      </div>
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
