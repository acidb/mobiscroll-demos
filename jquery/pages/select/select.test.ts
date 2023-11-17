import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Select, select } from '../../lib/mobiscroll/javascript/bundle';

describe('Select tests', () => {
  let inputEl: HTMLInputElement;
  let selectEl: HTMLSelectElement;
  let inst: Select | null;

  beforeEach(() => {
    inputEl = document.createElement('input') as HTMLInputElement;
    selectEl = createSelectElement({
      One: '1',
      Two: '2',
      Three: '3',
    }) as HTMLSelectElement;
    document.body.appendChild(inputEl);
    document.body.appendChild(selectEl);
  });

  afterEach(() => {
    // inst.destroy();
    inst = null;
    document.body.removeChild(inputEl);
    document.body.removeChild(selectEl);
  });

  it('should initialize on an input without error', () => {
    inst = select(inputEl, {}) as Select;
    expect(inst).toBeTruthy();
    expect(inst.destroy).not.toThrow();
  });

  it('should initialize on a select without error', () => {
    inst = select(selectEl, {}) as Select;
    expect(inst).toBeTruthy();
    expect(inst.destroy).not.toThrow();
  });

  it('should trigger the onInit and onDestroy events on init and destroy', () => {
    const options = {
      onInit: () => {},
      onDestroy: () => {},
    };
    const onInitSpy = vi.spyOn(options, 'onInit');
    const onDestroySpy = vi.spyOn(options, 'onDestroy');
    inst = select(inputEl, options) as Select;
    expect(onInitSpy).toHaveBeenCalledTimes(1);
    expect(onDestroySpy).toHaveBeenCalledTimes(0);
    inst.destroy();
    expect(onDestroySpy).toHaveBeenCalledTimes(1);
  });
});

function createSelectElement(options?: { [key: string]: string }) {
  const selectElement = document.createElement('select');
  const opt = options || {};
  for (const key of Object.keys(opt)) {
    const o = document.createElement('option');
    o.value = opt[key];
    o.innerText = key;
    selectElement.appendChild(o);
  }
  return selectElement;
}
