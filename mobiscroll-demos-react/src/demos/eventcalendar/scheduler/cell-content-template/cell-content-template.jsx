import { Eventcalendar, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback } from 'react';
import './cell-content-template.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {

  const myEvents = [
      {
        id: 1,
        title: 'Team Sync Meeting',
        start: 'dyndatetime(y, m, d - 1, 10, 15)',
        end: 'dyndatetime(y, m, d - 1, 11, 30)',
      },
      {
        id: 2,
        title: 'Apply Security Update',
        start: 'dyndatetime(y, m, d - 1, 15, 0)',
        end: 'dyndatetime(y, m, d - 1, 16, 0)',
      },
      {
        id: 3,
        title: 'Database Backup',
        start: 'dyndatetime(y, m, d - 2, 12, 0)',
        end: 'dyndatetime(y, m, d - 2, 13, 0)',
      },
      {
        id: 4,
        title: 'Project Kickoff & Coffee',
        start: 'dyndatetime(y, m, d - 2, 9, 0)',
        end: 'dyndatetime(y, m, d - 2, 10, 0)',
      },
      {
        id: 5,
        title: 'System Health Review',
        start: 'dyndatetime(y, m, d - 2, 8, 0)',
        end: 'dyndatetime(y, m, d - 2, 8, 45)',
      },
      {
        id: 6,
        title: 'Quarterly Health Audit',
        start: 'dyndatetime(y, m, d, 16, 0)',
        end: 'dyndatetime(y, m, d, 17, 0)',
      },
      {
        id: 7,
        title: 'Deployment Window',
        start: 'dyndatetime(y, m, d, 14, 0)',
        end: 'dyndatetime(y, m, d, 15, 0)',
      },
      {
        id: 8,
        title: 'Nightly Backup Prep',
        start: 'dyndatetime(y, m, d, 12, 0)',
        end: 'dyndatetime(y, m, d, 13, 0)',
      },
      {
        id: 9,
        title: 'Morning System Scan',
        start: 'dyndatetime(y, m, d, 8, 0)',
        end: 'dyndatetime(y, m, d, 8, 45)',
      },
      {
        id: 10,
        title: 'Sprint Review & Coffee',
        start: 'dyndatetime(y, m, d + 2, 9, 0)',
        end: 'dyndatetime(y, m, d + 2, 9, 45)',
      },
      {
        id: 11,
        title: 'Final Health Check',
        start: 'dyndatetime(y, m, d + 2, 16, 0)',
        end: 'dyndatetime(y, m, d + 2, 16, 45)',
      },
      {
        id: 12,
        title: 'Weekly Backup',
        start: 'dyndatetime(y, m, d + 2, 12, 0)',
        end: 'dyndatetime(y, m, d + 2, 12, 45)',
      },
      {
        id: 13,
        title: 'Morning Health Scan',
        start: 'dyndatetime(y, m, d + 1, 8, 15)',
        end: 'dyndatetime(y, m, d + 1, 9, 0)',
      },
      {
        id: 14,
        title: 'Afternoon Backup',
        start: 'dyndatetime(y, m, d + 1, 12, 15)',
        end: 'dyndatetime(y, m, d + 1, 13, 0)',
      },
    ];

  const myView = {
      schedule: { type: 'week', startTime: '08:00', endTime: '18:00', startDay: 1, endDay: 5 },
    };

    /// delete this and from template "icon-grid"
  const allIcons = [
    'aid', 'airplane', 'alarm2', 'arrow-down2', 'arrow-left2', 'arrow-right2', 'arrow-up2',
    'attachment', 'bars', 'book', 'brightness-contrast', 'bubble', 'bubbles', 'bullhorn',
    'calendar', 'camera', 'cart', 'checkmark', 'clock', 'close', 'cloud-download', 'cloud-upload',
    'cloud', 'cogs', 'compass', 'connection', 'copy2', 'copy3', 'credit', 'disk', 'download',
    'drawer', 'droplet', 'earth', 'eye-blocked', 'eye', 'feed2', 'file4', 'film', 'flag', 'folder',
    'forward', 'gift', 'globe', 'heart', 'heart2', 'history', 'home', 'image2', 'key2', 'library',
    'link', 'location', 'lock', 'lock2', 'loop2', 'map', 'minus', 'mobile', 'music', 'neutral',
    'newspaper', 'office', 'pause2', 'pencil', 'phone', 'play', 'play3', 'plus', 'print', 'redo2',
    'remove', 'reply', 'sad', 'sad2', 'share', 'smiley', 'smiley2', 'stack', 'star', 'star2',
    'star3', 'stop2', 'stopwatch', 'support', 'tag', 'thumbs-up', 'thumbs-up2', 'undo2', 'unlocked',
    'upload', 'user4', 'volume-high', 'volume-medium', 'volume-mute2', 'line-bubble',
    'line-calendar', 'line-food', 'line-heart', 'line-key', 'line-mail', 'line-megaphone',
    'line-music', 'line-note', 'line-paperplane', 'line-params', 'line-phone', 'line-settings',
    'line-star', 'line-t-shirt', 'line-tag', 'line-user', 'line-world', 'meteo-Celsius',
    'meteo-cloud', 'meteo-cloud2', 'meteo-cloud3', 'meteo-cloud4', 'meteo-cloud5', 'meteo-cloudy',
    'meteo-cloudy2', 'meteo-cloudy3', 'meteo-cloudy4', 'meteo-compass', 'meteo-Fahrenheit',
    'meteo-lightning', 'meteo-lightning2', 'meteo-lightning3', 'meteo-lightning4', 'meteo-lightning5',
    'meteo-lines', 'meteo-moon', 'meteo-moon2', 'meteo-none', 'meteo-rainy', 'meteo-rainy2',
    'meteo-rainy3', 'meteo-rainy4', 'meteo-snowflake', 'meteo-snowy', 'meteo-snowy2', 'meteo-snowy3',
    'meteo-snowy4', 'meteo-snowy5', 'meteo-sun', 'meteo-sun2', 'meteo-sun3', 'meteo-sunrise',
    'meteo-thermometer', 'meteo-weather', 'meteo-weather2', 'meteo-weather3', 'meteo-weather4',
    'meteo-weather5', 'meteo-wind', 'meteo-windy', 'meteo-windy2', 'meteo-windy3', 'meteo-windy4',
    'meteo-windy5', 'fa-dollar', 'fa-ellipsis-h', 'fa-facebook', 'fa-globe', 'fa-google-plus',
    'fa-leaf', 'fa-mail-reply', 'fa-retweet', 'fa-rotate-left', 'fa-twitter', 'foundation-mail',
    'foundation-minus-circle', 'ion-android-social-user', 'ion-android-system-windows',
    'ion-bluetooth', 'ion-close-circled', 'ion-email', 'ion-ios7-arrow-back',
    'ion-ios7-arrow-forward', 'ion-ios7-checkmark-empty', 'ion-ios7-close-empty',
    'ion-ios7-close-outline', 'ion-ios7-email', 'ion-ios7-information-outline',
    'ion-ios7-plus-empty', 'ion-iphone', 'ion-navigate', 'ion-social-facebook', 'ion-usb',
    'stream-sync', 'material-arrow-back', 'material-arrow-forward', 'material-backspace',
    'material-brightness-medium', 'material-check', 'material-close', 'material-crop',
    'material-email', 'material-equalizer', 'material-event-note', 'material-explore',
    'material-filter-list', 'material-filter', 'material-format-bold', 'material-format-ital',
    'material-format-list-numbered', 'material-format-paint', 'material-format-underline',
    'material-inbox', 'material-iso', 'material-keyboard-arrow-down', 'material-keyboard-arrow-left',
    'material-keyboard-arrow-right', 'material-keyboard-arrow-up', 'material-label',
    'material-language', 'material-list', 'material-menu', 'material-message', 'material-more-horiz',
    'material-notifications', 'material-palette', 'material-pause', 'material-people',
    'material-phone-iphone', 'material-play-arrow', 'material-repeat', 'material-rotate-right',
    'material-search', 'material-share', 'material-shuffle', 'material-skip-next',
    'material-skip-previous', 'material-star-outline', 'material-star', 'material-stop',
    'material-system-update', 'material-texture', 'material-tune', 'material-tv',
    'material-vertical-align-bottom', 'material-view-day', 'material-wb-auto', 'fa-google',
    'material-date-range', 'material-music-note', 'material-photo-size-select-large'
  ];


  const renderCell = useCallback((args) => {
    const h = args.date.getHours();
    const d = args.date.getDay();
    const icons = [];

    (d === 1 || d === 5) &&
      h === 9 &&
      icons.push(
        { icon: 'material-people', title: d === 1 ? 'Launch Meeting' : 'Sprint Review' },
        { icon: 'material-message', title: 'Coffee Break' }
      );

    h === 13 && icons.push({ icon: 'bubbles', title: 'Lunch Time' });
    d >= 1 && d <= 5 && h === 17 && icons.push({ icon: 'clock', title: 'Wrap Up' });
    d === 2 && (h === 10 || h === 11) && icons.push({ icon: 'loop2', title: 'Dev Sync' });
    h % 4 === 0 && icons.push({ icon: 'cogs', title: 'Health Check' });
    h === 3 && icons.push({ icon: 'connection', title: 'Network Probe' });
    h === 12 && icons.push({ icon: 'upload', title: 'Backup' });
    h === 15 && icons.push({ icon: 'lock', title: 'Security Patch' });
    d === 3 && h === 14 && icons.push({ icon: 'line-paperplane', title: 'Deploy Window' });

    if (!icons.length) return null;

    return (
      <div className="mds-schedule-cell-icons-background">
        <div className="mds-schedule-cell-icons">
          {icons.map((i, idx) => (
            <div key={idx} className="mds-schedule-cell-icon" title={i.title}>
              <div className={"mbsc-font-icon mbsc-icon-" + i.icon} />
            </div>
          ))}
        </div>
      </div>
    );
  }, []);

  return (
    <>
      <Eventcalendar
        cssClass="mds-schedule-cell-template"
        data={myEvents}
        renderCell={renderCell}
        view={myView}
      />
      <div className="icon-grid">
        {allIcons.map((icon, index) => (
          <div className="icon-box" key={index}>
            <div className={"mbsc-font-icon mbsc-icon-" + icon} />
            <div className="icon-label">{icon}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;