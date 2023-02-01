import express from 'express';
import * as bountyController from '../controllers/bountyController.js';
import * as authController from '../controllers/authController.js';

const router = express.Router();

router.use(authController.protect);

router.get('/', bountyController.getAllBounties);
router.post('/', bountyController.postBounty);

router.post('/:bounty/hunt', bountyController.postAnswer);

export default router;
