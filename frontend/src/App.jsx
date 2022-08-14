import { useState, useEffect } from 'react'
import './App.css'
import ButtonExecCmd from './Components/GetCmd'
import cmds from '../../cmd.json'

function App() {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');

  const handleOnChangeUsername = (evnt) => {
    setUser(evnt.target.value)
  }
  const handleOnChangePassword = (evnt) => {
    setPwd(evnt.target.value)
  }

  return (

    <>
      <div className='login'>
        <form>
          <input type="text" onChange={handleOnChangeUsername} placeholder="username" />
          <input type="password" onChange={handleOnChangePassword} placeholder="password" />
        </form>
      </div>
      {cmds.commands.map((cmd) => {
        return (
          <ButtonExecCmd cmd={cmd.endpoint} username={user} password={pwd} />
        )
      })}
    </>
  );

} export default App
