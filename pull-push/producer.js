const zeromq = require("zeromq");


//Socket Type
const socket = new zeromq.Push();

runProducer();


async function runProducer(){

    await socket.bind("tcp://127.0.0.1:9000");
    console.log("Producer is ready to sent");

    process.stdin.once("data", async ()=>{
        for (let i = 0; i <= 100; i++) {
            await socket.send("From Producer");

            await new Promise((resolve)=> setTimeout(resolve,200));
        }
    })
}

