import { Router } from 'express';

import IndexController from '../controllers/IndexController';

const router = new Router();

router.post('/', IndexController.home);

export default router;
