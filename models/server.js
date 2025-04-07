const express = require("express");
const cors = require("cors");
const io = require('socket.io');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io = io(this.server);

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
    
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;
