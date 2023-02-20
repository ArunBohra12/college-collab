import express from 'express';
import * as userController from '../controllers/userController.js';
import { protect } from '../controllers/authController.js';

const router = express.Router();

router.use(protect);

router.get('/me', userController.getMe, userController.getUser);
router.get('/:id', userController.getUser);

export default router;
