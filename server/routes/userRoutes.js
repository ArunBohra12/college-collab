import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.get('/:id', userController.getUser);
router.get('/me', userController.getMe, userController.getUser);

export default router;
