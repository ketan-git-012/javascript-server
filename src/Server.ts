import http from 'http';
import cors from 'cors';
import { IConfig } from './config/IConfig';
import express from 'express';
class Server {
  app: any;
  constructor(config: IConfig){
    this.app = express();
  }

  setUpRoutes(){
  }

  run(){
    const httpServer = http.createServer(this.app);
  }


}
