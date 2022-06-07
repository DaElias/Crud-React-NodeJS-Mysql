const express = require("express");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.path = "/api/info";
    //conectar a db
    this.conectDB();
    //middelware
    this.middelware();
    this.routes();
  }

  async conectDB() {
  }
  routes() {
    this.app.use(this.path, require("../routes/create.route"));
  }
  middelware() {
    //corse
    this.app.use(cors());
    //lectura y parseo del body
    this.app.use(express.json());
    // directorio publico
    this.app.use(express.static("public"));
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`Servideor Corriendo en http://localhost:${this.port}/`)
    );
  }
}

module.exports = Server;
