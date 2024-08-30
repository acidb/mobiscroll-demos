import { Page, Popup, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useRef, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [myAnchor, setAnchor] = useState();
  const [currentDeveloper, setCurrentDeveloper] = useState(null);
  const timeoutRef = useRef(null);

  const openPopup = useCallback((event, developer) => {
    clearTimeout(timeoutRef.current);
    setAnchor(event.target);
    setCurrentDeveloper(developer);
    setPopupOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setPopupOpen(false);
    }, 500);
  }, []);

  const cancelClosePopup = useCallback(() => {
    clearTimeout(timeoutRef.current);
  }, []);

  return (
    <Page>
      <div className="mbsc-align-center">
        <div className="mbsc-note">Hover on the link to show popup.</div>
      </div>
      <div className="mbsc-padding">
        <p>
          Meet web developer{' '}
          <a
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onMouseEnter={(e) => openPopup(e, 'Liza')}
            onMouseLeave={handleClose}
          >
            Liza
          </a>{' '}
          who designs and builds websites. She is responsible for the appearance, of the site and technical aspects, such as site speed and
          how much traffic the site can handle. She also creates site content that requires technical features.
        </p>
        <p>
          Meet{' '}
          <a
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onMouseEnter={(e) => openPopup(e, 'Mike')}
            onMouseLeave={handleClose}
          >
            Mike
          </a>
          , a backend developer specializing in server management and database integration. He ensures the site runs smoothly by handling
          server-side logic, optimizing performance, and implementing security measures.
        </p>
      </div>
      <Popup
        display="anchored"
        anchor={myAnchor}
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        onMouseEnter={cancelClosePopup}
        onMouseLeave={handleClose}
      >
        {currentDeveloper === 'Liza' && (
          <div className="mbsc-align-center mbsc-padding">
            <img style={{ height: '80px' }} src="https://img.mobiscroll.com/demos/f1.png" alt="Liza Taylor" />
            <h3>
              <b>Liza Taylor</b>
            </h3>
            <p>
              liza.taylor@mobiscroll.com <br /> (202) 555-0127
            </p>
          </div>
        )}
        {currentDeveloper === 'Mike' && (
          <div className="mbsc-align-center mbsc-padding">
            <img style={{ height: '80px' }} src="https://img.mobiscroll.com/demos/m1.png" alt="Mike Smith" />
            <h3>
              <b>Mike Smith</b>
            </h3>
            <p>
              mike.smith@mobiscroll.com <br /> (202) 555-9126
            </p>
          </div>
        )}
      </Popup>
    </Page>
  );
}

export default App;
