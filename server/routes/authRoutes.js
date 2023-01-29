import express from 'express';
// eslint-disable-next-line import/extensions
import * as authController from '../controllers/authController.js';

const router = express.Router();

router.post('/proposal', authController.proposal);
router.post('/signup', authController.signup);
router.post('/login', authController.login);

export default router;
