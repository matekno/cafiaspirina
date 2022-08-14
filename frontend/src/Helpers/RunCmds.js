import axios from 'axios';
const url = "http://localhost:3000"

const ExecInServer = async (endpoint, username, password) => {


    const data = await axios.get(`${url}/${endpoint}`, {
        auth: {
            username: username,
            password: password
        }
    });
    return data;
}

export default ExecInServer;
