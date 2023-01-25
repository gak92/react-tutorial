/* eslint-disable */
import './App.css';
import { Component1 } from './components/Component1';
import Hello from './components/Hello';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      <Hello names={['Smith', 'John', 'Doe']} />
      {/* <Hello name="John" /> */}

      <Component1 name="Something" />
      <Parent />
    </div>
  );
}

export default App;
