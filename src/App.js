import React, { useEffect, useState } from 'react';
import './App.scss';
import MainCard from './Components/Main-card';
import SmallCards from './Components/Small-cards';
import data from './data.json';

function App() {
  const [time, setTime] = useState('weekly');

  function timeToggle(e) {
    setTime(e.target.id);
  }

  return (
    <main id="app">
      <MainCard toggle={timeToggle} />
      <SmallCards time={time} />
    </main>
  );
}

export default App;
