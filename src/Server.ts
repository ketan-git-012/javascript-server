import bodyParser = require("body-parser");
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
    this.initBodyParser();
  }

  initBodyParser(){
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended : true}));
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
      try{
        console.log(`server is running on PORT ${this.PORT}`);
      }
      catch(error){
        console.log(error);

      }
    });
  }
}

export default Server;
