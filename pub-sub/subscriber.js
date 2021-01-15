const zeromq = require("zeromq");

const socket = new zeromq.Subscriber();
const channelName = process.argv[2] || "channel";

runSubscriber();

async function runSubscriber(){
    await socket.connect("tcp://127.0.0.1:9000");
    console.log("Subscriber connected..");
    await socket.subscribe(channelName);
    console.log(`Subscriber  subscribe to ${channelName}`);
    
    for await (const [topic, message] of socket){
        console.log(`Topic => ${topic}, Message => ${message}`);
    }

}