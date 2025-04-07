const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);

    this.paths = {}

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();

    //Sockets
    this.sockets();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Static files
    this.app.use(express.static("public"));
  }

  routes() {
    // this.app.use(this.paths.auth, require("../routes/auth.routes"));
  }

  sockets() {

    this.io.on('connection', (socket) => {

      console.log('Client connected');

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });

    });

  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;
