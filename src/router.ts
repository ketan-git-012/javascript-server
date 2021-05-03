import { Router } from 'express';

import traineeRoute from './controllers/trainee/routes';
import userRoute from './controllers/user/routes';

const router = Router();

router.use('/user', userRoute);
router.use('/trainee', traineeRoute);

export default router;
