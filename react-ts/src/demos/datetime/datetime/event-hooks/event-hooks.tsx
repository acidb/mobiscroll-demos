import React from 'react';
import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  return (
    <Page>
      <Datepicker
        controls={['date']}
        inputProps={{
          label: 'Date',
          labelStyle: 'stacked',
          inputStyle: 'box',
          placeholder: 'Please Select...',
        }}
        onCancel={(event, inst) => {
          // Logic for cancel button click
        }}
        onChange={(event, inst) => {
          // Logic for value change
        }}
        onClose={(event, inst) => {
          // Your custom event handler goes here
        }}
        onDestroy={(event, inst) => {
          // Your custom event handler goes here
        }}
        onInit={(event, inst) => {
          // Logic running on component init
        }}
        onOpen={(event, inst) => {
          // Your custom event handler goes here
        }}
        onPageChange={(event, inst) => {
          // Your custom event handler goes here
        }}
        onPageLoaded={(event, inst) => {
          // Use it to inject custom markup & attach custom listeners
        }}
        onPageLoading={(event, inst) => {
          // Use it to load data on demand
        }}
        onPosition={(event, inst) => {
          // Logic for component positioning
        }}
        onTempChange={(event, inst) => {
          // Logic for temporary value change
        }}
      />
    </Page>
  );
};
