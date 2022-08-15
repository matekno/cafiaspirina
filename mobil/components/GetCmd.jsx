import { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import ExecInServer from '../Helpers/RunCmd';


const ButtonExecCmd = ({ cmd, username, password, title }) => {
    //TODO: falta agregar algo de estilos, posibilidad de pametros.
    const [data, setData] = useState({ data: [] });
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        setIsLoading(true);
        try {
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
        <View className='container'>
            {err && <Text>{err}</Text>}
            <Button onPress={handleClick} title={title} />
            {isLoading && <Text>Cargando...</Text>}
            <Text>{data.data}</Text>
        </View>
    );
}

export default ButtonExecCmd;