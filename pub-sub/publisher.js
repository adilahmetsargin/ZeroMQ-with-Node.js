const zeromq = require("zeromq");

const socket = new zeromq.Publisher();

runPublisher();

async function runPublisher(){
    await socket.bind("tcp://127.0.0.1:9000");
    console.log("## Publisher connected..");
    console.log("##Message format is: 'channelName: Message'");

    process.stdin.on("data", async (data)=>{
      const userMessage = data.toString().replace("\n","");
        
      if (userMessage.includes("q")) {
          process.exit(0);
      }

      if (userMessage.includes(":") && userMessage.split(":").length === 2) {
          const channel_message = userMessage.split(":");
          socket.send([channel_message[0], channel_message[1]]);
      }else{
          console.log("Wrong Format!\nMessage format is: 'channelName: Message");
      }


        
    })
}