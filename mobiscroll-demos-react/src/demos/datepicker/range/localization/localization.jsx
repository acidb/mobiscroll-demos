import { Datepicker, localeEs, setOptions } from '@mobiscroll/react';

setOptions({
  // themeJs
});

function App() {
  return (
    <div>
      <Datepicker
        select="range"
        display="inline"
        locale={localeEs} // sets the language of the component
      />
    </div>
  );
}

export default App;
