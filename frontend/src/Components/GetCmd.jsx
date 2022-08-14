import { useState, useEffect } from 'react';
import ExecInServer from '../Helpers/RunCmds';
import './GetCmd.css'


const ButtonExecCmd = ({ cmd }) => {
    //TODO: falta agregar algo de estilos, posibilidad de pametros.
    const [data, setData] = useState({ data: [] });
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        setIsLoading(true);
        try {
            const data = await ExecInServer(cmd);
            console.log(data);
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
            {console.log(data)}
            <button onClick={handleClick}>Fetch data</button>
            {isLoading && <h2>Loading...</h2>}
            <h2>{data.data}</h2>
        </div>
    );
}

export default ButtonExecCmd;