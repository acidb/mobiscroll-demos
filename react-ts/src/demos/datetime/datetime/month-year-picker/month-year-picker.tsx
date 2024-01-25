import { Datepicker, Input, Page /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

const App: React.FC = () => {
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
};
export default App;
