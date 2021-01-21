import { Router } from 'express';

import UserController from '../controllers/UserController';

const router = new Router();

router.get('/users', UserController.index);
router.get('/user/:id', UserController.show);
router.post('/user', UserController.create);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.delete);

export default router;
