import express = require("express");

import router from './router';

class Server {
  public app: express.Application;
  PORT: String;
  constructor(config) {
    this.app = express();
    this.PORT = config.PORT;
  }

  bootstrap() {
    this.initBodyParser();
    this.setUpRoutes();
  }

  initBodyParser(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended : true}));
  }

  setUpRoutes() {
    this.app.use('/api',router);
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
