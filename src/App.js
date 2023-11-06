import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Counter APPLICATION</h1>
      {counter}
      <br></br>
      <button className='btn2' onClick={()=>setCounter(counter-1)}>Decrease</button>
      <br></br>
      <button className='btn1' onClick={()=>setCounter(counter+1)}>Increase</button>
      
      
    </div>
  );
}

export default App;
