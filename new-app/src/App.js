// Step 3 - set up App.js

import React from 'react';

// import Breweries from components
import Breweries from './components/brewery';

import './App.css';

function App() {
  return (
    <div className="App-header">
      <h1>Find Breweries - Colorado</h1>
      <Breweries />
    </div>
  );
}

export default App;
