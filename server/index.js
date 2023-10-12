import { Server } from "ws";

const wss = new Server({ port: 8802 });

wss.on("connection", ws => {
  console.log("you are connected!");

  ws.on("message", data => {
    console.log(`client has sent us: ${data}`);

    ws.send("Hey i am server");

    // Send the welcome message back to the client
    ws.send("hey welcome");
  });

  ws.on("close", () => {
    console.log("connection closed");
  });
});
