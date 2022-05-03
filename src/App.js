import logo from './logo.svg';
import './App.css';
import CurrentTime from './CurrentTime.js';
import Greeting from './Greeting.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <CurrentTime/>
          <Greeting
            userName={'Mikan'}
          />
      </header>
    </div>
  );
}

export default App;
