/* eslint-disable import/no-import-module-exports */
import express from 'express';
import * as authController from '../controllers/authController';

const router = express.Router();

router.post('/proposal', authController.proposal);
router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;
