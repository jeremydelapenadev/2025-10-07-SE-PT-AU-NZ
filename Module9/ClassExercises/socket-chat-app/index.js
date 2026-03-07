const express = require("express");
const app = express();
const http = require("http");

// creating chat event feature using socket.io
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server); // socket.io instance

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// adds a listener function to connection event, which is emitted when a new client connects to the server
io.on("connection", (socket) => {
  io.emit("connection", "a user connected");

  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
    socket.on("typing", (nickname) => {
        socket.broadcast.emit("new user", nickname + " has joined the chat")
    })
  });
});
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
