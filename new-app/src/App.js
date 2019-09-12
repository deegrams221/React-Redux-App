// Step 3 - set up App.js

import React from 'react';

// import Dogs from components
import Dogs from './components/dog';

import './App.css';

function App() {
  return (
    <div className="App-header">
      <h1>Cute Dog Image Generator</h1>
      <Dogs />
    </div>
  );
}

export default App;
