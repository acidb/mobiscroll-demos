import React from 'react';
import { Datepicker, Input, RadioGroup, Radio, Page /* localeImport */ } from '@mobiscroll/react';

const App: React.FC = () => {
  const now = new Date();
  const min = now;
  const max = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());

  const [start, setStart] = React.useState<any>(null);
  const [end, setEnd] = React.useState<any>(null);

  const [startInv, setStartInv] = React.useState<any>(null);
  const [endInv, setEndInv] = React.useState<any>(null);

  const [startBooking, setStartBooking] = React.useState<any>(null);
  const [endBooking, setEndBooking] = React.useState<any>(null);

  const invalid = [
    {
      recurring: {
        repeat: 'weekly',
        weekDays: 'TU,TH',
      },
    },
    new Date(now.getFullYear(), now.getMonth(), 25),
  ];

  const [bookingType, setBookingType] = React.useState('round');
  const selectType = React.useMemo<any>(() => (bookingType === 'oneway' ? 'date' : 'range'), [bookingType]);
  const bookingTypeChange = (ev: any) => {
    setBookingType(ev.target.value);
  };

  const [inst, setInst] = React.useState<any>(null);
  const [val, setVal] = React.useState<any>();
  const valChange = (ev: any) => {
    setVal(ev.value);
  };
  const [disabled, setDisabled] = React.useState(nrOfValues(inst) === 0);
  const changeTripType = (ev: any) => {
    setDisabled(nrOfValues(inst) < 1);
  };
  const buttons = React.useMemo(() => {
    return [
      'cancel',
      {
        disabled,
        handler: () => {
          const [start] = inst.getTempVal();
          setVal([start, null]);
          inst.close();
        },
        text: 'One way only',
      },
      'set',
    ];
  }, [disabled, inst]);

  function nrOfValues(instance: any) {
    const tempVal = (instance && instance.getTempVal()) || [];
    return tempVal.filter((v: any) => v).length;
  }

  return (
    <Page>
      <div className="mbsc-grid mbsc-no-padding">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-12">
            <Datepicker
              // theme
              // locale
              controls={['calendar']}
              select="range"
              min={min}
              max={max}
              pages={2}
              label="Pick your flight"
              inputStyle="outline"
              labelStyle="stacked"
              placeholder="Please select..."
            />
          </div>
        </div>

        <div className="mbsc-row">
          <div className="mbsc-col-6">
            <Datepicker controls={['calendar']} select="range" startInput={start} endInput={end} min={min} max={max} pages={2} />
            <Input ref={setStart} label="Outbound" inputStyle="outline" labelStyle="stacked" placeholder="Please Select...">
              Outbound
            </Input>
          </div>
          <div className="mbsc-col-6">
            <Input ref={setEnd} label="Return" inputStyle="outline" labelStyle="stacked" placeholder="Please Select...">
              Return
            </Input>
          </div>
        </div>

        <div className="mbsc-row">
          <div className="mbsc-col-6">
            <Datepicker
              controls={['calendar']}
              select="range"
              startInput={startInv}
              endInput={endInv}
              min={min}
              max={max}
              pages={2}
              invalid={invalid}
              inRangeInvalid={true}
            />
            <Input ref={setStartInv} label="Outbound" inputStyle="outline" labelStyle="stacked" placeholder="Please Select...">
              Outbound
            </Input>
          </div>
          <div className="mbsc-col-6">
            <Input ref={setEndInv} label="Return" inputStyle="outline" labelStyle="stacked" placeholder="Please Select...">
              Return
            </Input>
          </div>
        </div>

        <div className="mbsc-row">
          <RadioGroup name="flight-booking-type" theme="material" themeVariant="light">
            <Radio
              value="round"
              checked={bookingType === 'round'}
              onChange={bookingTypeChange}
              label="Round trip"
              theme="material"
              themeVariant="light"
            />
            <Radio
              value="oneway"
              checked={bookingType === 'oneway'}
              onChange={bookingTypeChange}
              label="One way"
              theme="material"
              themeVariant="light"
            />
          </RadioGroup>
        </div>
        <div className="mbsc-row">
          <div className="mbsc-col-6">
            <Datepicker
              controls={['calendar']}
              select={selectType}
              startInput={startBooking}
              endInput={endBooking}
              min={min}
              max={max}
              pages={2}
            />
            <Input ref={setStartBooking} label="Outbound" inputStyle="outline" labelStyle="stacked" placeholder="Please Select...">
              Outbound
            </Input>
          </div>
          <div className="mbsc-col-6">
            <Input
              ref={setEndBooking}
              label="Return"
              inputStyle="outline"
              labelStyle="stacked"
              placeholder="Please Select..."
              disabled={bookingType === 'oneway'}
            >
              Return
            </Input>
          </div>
        </div>

        <div className="mbsc-row">
          <div className="mbsc-col-12">
            <Datepicker
              // theme
              // locale
              controls={['calendar']}
              select="range"
              min={min}
              max={max}
              pages={2}
              ref={setInst}
              buttons={buttons}
              value={val}
              onChange={valChange}
              onTempChange={changeTripType}
              label="Pick your flight"
              inputStyle="outline"
              labelStyle="stacked"
              placeholder="Please select..."
            />
          </div>
        </div>
      </div>
    </Page>
  );
};
