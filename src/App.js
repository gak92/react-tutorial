import './App.css';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Hello names={['Smith', 'John', 'Doe']} />
      {/* <Hello name="John" /> */}
    </div>
  );
}

export default App;
