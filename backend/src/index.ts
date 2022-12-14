import express, { Request, Response } from "express";
import comandos from "./Utils/comandos.js";
import cmds from "../../cmd.json";
import basicAuth from "express-basic-auth";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(basicAuth({
    users: { "admin": "1234" },
}));

cmds.commands.map((cmd) => {
    app.get(`/${cmd.endpoint}`, async (req: Request, res: Response) => {
        comandos.execute(cmd.cmd).then((stdout) => {
            res.send(stdout);
        }).catch((err) => {
            res.send(err);
        });
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
