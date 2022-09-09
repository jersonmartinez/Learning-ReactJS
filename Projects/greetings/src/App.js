import logo from './logo.svg';
import './App.css';
import Greetings from './components/pure/greetings';
import GreetingFunction from './components/pure/greeting_function';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Component greetings.jsx */}
        <Greetings name="Jerson"></Greetings>
        <GreetingFunction name="Antonio"></GreetingFunction>
      </header>
    </div>
  );
}

export default App;
