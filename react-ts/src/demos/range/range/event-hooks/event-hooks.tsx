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
        controls={['calendar']}
        select="range"
        inputProps={{
          label: 'Range',
          labelStyle: 'stacked',
          inputStyle: 'outline',
          placeholder: 'Please Select...',
        }}
        onActiveDateChange={(event, inst) => {
          // Logic for the active date change
        }}
        onCancel={(event, inst) => {
          // Logic for cancel button click
        }}
        onCellClick={(event, inst) => {
          // Logic for event click
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
        onLabelClick={(event, inst) => {
          // Logic for label click
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
