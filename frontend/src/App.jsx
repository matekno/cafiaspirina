import { useState, useEffect } from 'react'
import './App.css'
import ButtonExecCmd from './Components/GetCmd'


function App() {
  // const [output, setOutput] = useState();
  // useEffect(() => {
  //   (async () => {
  //     const output = await ExecInServer("hello");
  //     console.log(output);
  //     setOutput(output);
  //   })();
  // }, []);

  // return (
  //   <div className="App">
  //     <p>{`OUTPUT: ${output}`}</p>
  //   </div>
  // )

  return (
    <ButtonExecCmd cmd="docker-ps" />
  )
}

export default App
