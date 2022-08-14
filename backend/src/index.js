import express, { json } from 'express';
import comandos from './Utils/comandos.js';
import cmds from '../cmd.json' assert {type: 'json'};
import basicAuth from 'express-basic-auth';

const app = express();
const port = 3000;


app.use(basicAuth({
    users: { 'admin': '1234' },
}))

cmds.commands.map((cmd) => {
    app.get(`/${cmd.endpoint}`, async (req, res) => {
        const data = comandos.execute(cmd.cmd).then((stdout) => {
            res.send(stdout)
        }).catch((err) => {
            res.send(err);
        });
    })
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})