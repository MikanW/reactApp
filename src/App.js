import React, { useState, useEffect } from 'react';
import './App.css';
import CurrentTime from './CurrentTime.js';
import Greeting from './Greeting.js';
import moment from 'moment';
import UrlList from './UrlList.jsx';
//import TextInput from './TextInput.jsx'


function App() {
  const [curTime, setCurTime] = useState(moment());

  useEffect(() => {

    setInterval( () => {
      setCurTime(moment());
    },1000);

    return () => {
      clearInterval();
    }
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
          <div className="appBody">
            <Greeting
              userName={'Mikan'}
            />
            
            <CurrentTime
              date = {curTime.format('YYYY.MM.DD')}
              time = {curTime.format('HH:mm')}
            />
          </div>
          
      </header>
    </div>
  );
}

export default App;
