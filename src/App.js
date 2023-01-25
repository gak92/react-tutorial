import './App.css';
import { Component1 } from './components/Component1';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Hello names={['Smith', 'John', 'Doe']} />
      {/* <Hello name="John" /> */}

      <Component1 name="Something" />
    </div>
  );
}

export default App;
