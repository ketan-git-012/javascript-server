import { Router } from "express";

import User from "./Controller";

const userRoute = Router();
const user = new User();

userRoute.get('/getAll', user.getAllUser);

userRoute.post('/add', user.addUser);

userRoute.put('/update', user.updateUser);

userRoute.delete('/delete', user.deleteUser);

export default userRoute;
