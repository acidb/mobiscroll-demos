import { Button, Page, Popup, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [isAnchoredOpen, setAnchoredOpen] = useState(false);
  const [myAnchor, setAnchor] = useState();
  const [isTopOpen, setTopOpen] = useState(false);
  const [isCenterOpen, setCenterOpen] = useState(false);
  const [isBottomOpen, setBottomOpen] = useState(false);

  const openAnchored = useCallback((args) => {
    setAnchor(args.target);
    setAnchoredOpen(true);
  }, []);

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Try different display modes</div>
        <div className="mbsc-form-group mbsc-button-group-block">
          <Button onClick={openAnchored}>Try anhored display mode</Button>
          <Button onClick={() => setTopOpen(true)}>Try top display mode</Button>
          <Button onClick={() => setCenterOpen(true)}>Try center display mode</Button>
          <Button onClick={() => setBottomOpen(true)}>Try bottom display mode</Button>
        </div>
      </div>

      <Popup display="anchored" anchor={myAnchor} isOpen={isAnchoredOpen} onClose={() => setAnchoredOpen(false)}>
        <div className="mbsc-align-center mbsc-padding">
          <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" alt="logo" />
          <h4>Welcome to our website!</h4>
          <p>Have fun navigating through the demos.</p>
        </div>
      </Popup>

      <Popup display="top" isOpen={isTopOpen} onClose={() => setTopOpen(false)}>
        <div className="mbsc-align-center mbsc-padding">
          <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" alt="logo" />
          <h4>Welcome to our website!</h4>
          <p>Have fun navigating through the demos.</p>
        </div>
      </Popup>

      <Popup display="center" isOpen={isCenterOpen} onClose={() => setCenterOpen(false)}>
        <div className="mbsc-align-center mbsc-padding">
          <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" alt="logo" />
          <h4>Welcome to our website!</h4>
          <p>Have fun navigating through the demos.</p>
        </div>
      </Popup>

      <Popup display="bottom" isOpen={isBottomOpen} onClose={() => setBottomOpen(false)}>
        <div className="mbsc-align-center mbsc-padding">
          <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" alt="logo" />
          <h4>Welcome to our website!</h4>
          <p>Have fun navigating through the demos.</p>
        </div>
      </Popup>
    </Page>
  );
}

export default App;
