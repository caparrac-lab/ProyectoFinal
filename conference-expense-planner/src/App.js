import React, { useState } from 'react';
import './App.css';
import ConferenceEvents from './components/ConferenceEvents';
import LandingPage from './components/LandingPage';

function App() {
  const [showVenue, setShowVenue] = useState(false);

  const handleGetStarted = () => {
    setShowVenue(true);
  };

  return (
    <div className="App">
      {showVenue ? (
        <ConferenceEvents />
      ) : (
        <LandingPage onGetStarted={handleGetStarted} />
      )}
    </div>
  );
}

export default App;