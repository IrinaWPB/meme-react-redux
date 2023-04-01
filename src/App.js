import React from  'react'
import MemeList from './MemeList'
import MemeForm from './MemeForm'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MemeForm />
        <MemeList />
      </header>
    </div>
  );
}

export default App;
