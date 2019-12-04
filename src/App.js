import React from 'react';
import logo from './logo.svg';
import Header from './Header.js';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
        <button>ADD</button>
        <div>
          <span>NAME</span><br />
          <span>PHONE</span>
        </div>
    </div>
  );
}

export default App;
