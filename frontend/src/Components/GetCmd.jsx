import { useState, useEffect } from 'react';
import ExecInServer from '../Helpers/RunCmds';
import './GetCmd.css'


const ButtonExecCmd = ({ cmd, username, password }) => {
    //TODO: falta agregar algo de estilos, posibilidad de pametros.
    const [data, setData] = useState({ data: [] });
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        setIsLoading(true);
        try {
            console.log(username);
            console.log(password);
            const data = await ExecInServer(cmd, username, password);
            if (data.status !== 200) {
                throw new Error("TODO MAL");
            }
            setData(data);
        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='container'>
            {err && <h2>{err}</h2>}
            <button onClick={handleClick}>{`${cmd}`}</button>
            {isLoading && <h2>Cargando...</h2>}
            <h2>{data.data}</h2>
        </div>
    );
}

export default ButtonExecCmd;