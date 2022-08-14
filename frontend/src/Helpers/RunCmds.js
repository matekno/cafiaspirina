import axios from 'axios';
const url = "http://localhost:3000"

const ExecInServer = async (endpoint) => {
    const data = await axios.get(`${url}/${endpoint}`, {
        auth: {
            username: "admin",
            password: "1234"
        }
    });
    return data.data;
}

export default ExecInServer;
