/* eslint-disable import/no-import-module-exports */
import express from 'express';
import * as bountyController from '../controllers/bountyController';
import * as authController from '../controllers/authController';

const router = express.Router();

router.use(authController.protect);

router.get('/bounties', bountyController.getAllBounties);
router.post('/bounties', bountyController.postBounty);

router.post('/:bounty/hunt', bountyController.postAnswer);

module.exports = router;
