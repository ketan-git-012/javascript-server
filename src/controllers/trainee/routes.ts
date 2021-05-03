import { Router } from "express";

import Trainee from './Controller'

const traineeRoute = Router();
const trainee = new Trainee();

traineeRoute.get('/getAll', trainee.getAllTrainee);

traineeRoute.post('/add', trainee.addTrainee);

traineeRoute.put('/update', trainee.updateTrainee);

traineeRoute.delete('/delete', trainee.deleteTrainee);

export default traineeRoute;
