import express = require("express");

class Server {
  public app: express.Application;
  PORT: String;
  constructor(config) {
    this.app = express();
    this.PORT = config.PORT;
  }

  bootstrap() {
    this.setUpRoutes();
  }

  setUpRoutes() {
    this.app.get(
      "/health-check",
      (req: express.Request, res: express.Response) => {
        res.status(200).send("I am OK");
      }
    );
  }

  run() {
    this.app.listen(this.PORT, () => {
      console.log(`server is running on PORT ${this.PORT}`);
    });
  }
}

export default Server;
