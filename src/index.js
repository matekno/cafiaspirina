import express, { json } from 'express';
import comandos from './utils/comandos.js';
const app = express();
const port = 3000;

app.get('/ListAllContainers', async (req, res) => {
    const data = comandos.execute("docker ps").then((stdout) => {
        res.send(stdout)
    })
})

app.get('')


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})