import { exec } from 'child_process';

const ListAllContainers = async () => {
    let tr;
    exec("docker ps", (error, stdout, stderr) => {
        // console.log(stdout);
        // if (error) {
        //     console.log(`error: ${error.message}`);
        //     toReturn = -1
        //     return;
        // }
        // if (stderr) {
        //     console.log(`stderr: ${stderr}`);
        //     toReturn = -1
        //     return;
        // }
        // console.log(`stdout: ${stdout}`);
    })
    return tr;
}

const execute = (cmd) => {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                reject(error)
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                reject(stderr)
            }
            resolve(stdout)
        })

    });

}

export default { ListAllContainers, execute }