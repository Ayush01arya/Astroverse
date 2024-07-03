
import { Server } from "socket.io";

const SocketHandler = (req, res) => {
  if (!res.socket.server.io) {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("Yes ! connected");

      socket.on("message", (msg) => {
        console.log("Message received: ", msg);
        // Simple response logic for the demo
        const response = `You said: ${msg}`;
        socket.emit("response", response);
      });

      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });
  }
  res.end();
};

export default SocketHandler;
