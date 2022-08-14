import { useState, useEffect } from 'react'
import './App.css'
import ButtonExecCmd from './Components/GetCmd'
import cmds from '../../cmd.json'

function App() {
  return (
    <>
      {cmds.commands.map((cmd) => {
        return (
          <ButtonExecCmd cmd={cmd.endpoint} />
        )
      })}
    </>
  );

} export default App
