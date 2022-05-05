import React, { useState, useEffect } from 'react';
import './App.css';
import CurrentTime from './CurrentTime.js';
import Greeting from './Greeting.js';
import moment from 'moment';
import TextInput from './TextInput.jsx'


function App() {
  const [curTime, setCurTime] = useState(moment());

  useEffect(() => {

    setInterval( () => {
      setCurTime(moment());
    }, 1000);

    return () => {
      clearInterval();
    }
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
          <TextInput/>
          <CurrentTime
            time = {curTime.format('HH:mm:ss')}
          />
          <Greeting
            userName={'Mikan'}
          />
      </header>
    </div>
  );
}

export default App;
