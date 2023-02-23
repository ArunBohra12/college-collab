import express from 'express';
import * as hackathonController from '../controllers/hackathonController.js';
// import * as authController from '../controllers/authController.js';

const router = express.Router();

// router.use(authController.protect);

router.get('/', hackathonController.hostHackathon);
router.post('/', hackathonController.hostHackathon);
router.post('/collabHack', hackathonController.collabHackathon);

export default router;
