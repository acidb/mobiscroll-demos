import React from 'react';
import { Eventcalendar, Page, getJson, setOptions, Dropdown, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/react';
import './localization.css';
setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);
  const [lang, setLang] = React.useState('ios');
  const languages = [
    {
      value: 'en',
      text: 'English',
    },
    {
      value: 'ar',
      text: 'Arabic',
    },
    {
      value: 'bg',
      text: 'Bulgarian',
    },
    {
      value: 'ca',
      text: 'Català',
    },
    {
      value: 'cs',
      text: 'Cestina',
    },
    {
      value: 'zh',
      text: 'Chinese',
    },
    {
      value: 'hr',
      text: 'Croatian',
    },
    {
      value: 'da',
      text: 'Dansk',
    },
    {
      value: 'de',
      text: 'Deutsch',
    },
    {
      value: 'en-GB',
      text: 'English (UK)',
    },
    {
      value: 'es',
      text: 'Español',
    },
    {
      value: 'fr',
      text: 'Français',
    },
    {
      value: 'el',
      text: 'Greek',
    },
    {
      value: 'hi',
      text: 'Hindi',
    },
    {
      value: 'it',
      text: 'Italiano',
    },
    {
      value: 'ja',
      text: 'Japanese',
    },
    {
      value: 'ko',
      text: 'Korean',
    },
    {
      value: 'lt',
      text: 'Lietuviu',
    },
    {
      value: 'hu',
      text: 'Magyar',
    },
    {
      value: 'nl',
      text: 'Nederlands',
    },
    {
      value: 'no',
      text: 'Norsk',
    },
    {
      value: 'pl',
      text: 'Polski',
    },
    {
      value: 'pt-PT',
      text: 'Português Europeu',
    },
    {
      value: 'pt-BR',
      text: 'Pt. Brasileiro',
    },
    {
      value: 'ro',
      text: 'Româna',
    },
    {
      value: 'sr',
      text: 'Serbian',
    },
    {
      value: 'sk',
      text: 'Slovencina',
    },
    {
      value: 'fi',
      text: 'Suomi',
    },
    {
      value: 'sv',
      text: 'Svenska',
    },
    {
      value: 'th',
      text: 'Thai',
    },
    {
      value: 'tr',
      text: 'Türkçe',
    },
    {
      value: 'ua',
      text: 'Ukrainian',
    },
    {
      value: 'vi',
      text: 'Vietnamese',
    },
    {
      value: 'ru',
      text: '???????',
    },
    {
      value: 'ru-UA',
      text: '??????? (UA)',
    },
    {
      value: 'he',
      text: '?????',
    },
    {
      value: 'fa',
      text: '?????',
    },
  ];

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const view = React.useMemo(() => {
    return {
      calendar: { type: 'week' },
      agenda: { type: 'day' },
    };
  }, []);

  const onChange = (event: any) => {
    setLang(event.target.value);
  };

  return (
    <Page>
      <div className="md-localization">
        <div className="mbsc-grid">
          <div className="mbsc-row mbsc-justify-content-center">
            <div className="mbsc-col-sm-8">
              <Dropdown inputStyle="box" value={lang} onChange={onChange}>
                {languages.map((lang) => {
                  return (
                    <option key={lang.value} value={lang.value}>
                      {lang.text}
                    </option>
                  );
                })}
              </Dropdown>
            </div>
          </div>
        </div>
        <Eventcalendar locale={mobiscroll.locale[lang]} data={myEvents} view={view} />
      </div>
    </Page>
  );
};
