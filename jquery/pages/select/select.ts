import { select, setOptions } from '../../lib/mobiscroll/javascript/bundle';

export default {
  init() {
    const themePicker = document.getElementById('picker-theme')! as HTMLSelectElement;
    const themeVariantPicker = document.getElementById('picker-theme-variant')! as HTMLSelectElement;
    const modePicker = document.getElementById('picker-mode')! as HTMLSelectElement;

    themePicker.addEventListener('change', (ev: any) => {
      setOptions({ theme: ev.target.value });
    });

    themeVariantPicker.addEventListener('change', (ev: any) => {
      setOptions({ themeVariant: ev.target.value });
    });

    modePicker.addEventListener('change', (ev: any) => {
      let mode: boolean | 'auto' = 'auto';
      if (ev.target.value === 'mobile') {
        mode = true;
      }
      if (ev.target.value === 'desktop') {
        mode = false;
      }
      setOptions({ touchUi: mode });
    });

    select('#my-select', {
      inputElement: document.getElementById('my-select-input') as HTMLElement,
    });
  },
  markup: `
    <div mbsc-page>
      <div class="mbsc-block">
        <div class="mbsc-block-title">Options</div>
        <label>
          <select mbsc-dropdown data-label="Theme" id="picker-theme">
            <option value="auto">Auto</option>
            <option value="ios">iOS</option>
            <option value="material">Material</option>
            <option value="windows">Windows</option>
          </select>
        </label>
        <label>
          <select mbsc-dropdown data-label="Theme variant" id="picker-theme-variant">
            <option value="auto">Auto</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <label>
          <select mbsc-dropdown data-label="Mode" id="picker-mode">
            <option value="auto">Auto</option>
            <option value="desktop">Desktop</option>
            <option value="mobile">Mobile</option>
          </select>
        </label>
      </div>
      <div class="mbsc-block">
        <div class="mbsc-block-title">Select</div>
        <label>
          <input mbsc-input id="my-select-input" />
        </label>
      </div>
      <div>
        <select id="my-select">
          <option value="1">Atlanta</option>
          <option value="2">Berlin</option>
          <option value="3">Chicago</option>
          <option value="4">London</option>
        </select>
      </div>
    </div>
  `,
};
