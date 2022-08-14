import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import cmds from '../../cmd.json';
import ExecInServer from './Helpers/RunCmds';

function App() {
  const [count, setCount] = useState(0)
  const [output, setOutput] = useState();
  useEffect(() => {
    (async () => {
      const output = await ExecInServer("hello");
      setOutput(output);
    })();
  }, []);

  return (
    <div className="App">
      <p>{`OUTPUT: ${output}`}</p>
    </div>
  )
}

export default App
