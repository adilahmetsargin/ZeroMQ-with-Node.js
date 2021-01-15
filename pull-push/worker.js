const zeromq = require("zeromq");


//Socket Type
const socket = new zeromq.Pull();

runWorker();

async function runWorker(){
    await socket.connect("tcp://127.0.0.1:9000");
    console.log("Connect with Producer");

    for await (const message of socket){
        console.log(`Message ${message}`);
    }
}