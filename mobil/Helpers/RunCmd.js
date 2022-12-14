import axios from 'axios';
import base64 from 'base-64';

const url = "http://192.168.56.1:3000"

const ExecInServer = async (endpoint, username, password) => {
    const authString = `Basic ${base64.encode(username + ":" + password)}`
    console.log(authString);
    const data = await axios.get(`${url}/${endpoint}`, {
        headers: {
            Authorization: authString,
        }
    });
    console.log(data);
    return data;
}

export default ExecInServer;
