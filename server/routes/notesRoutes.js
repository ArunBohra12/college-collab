import express from 'express';
import { getSingleNotes, searchNotes, uploadNotes, uploadNotesFile } from '../controllers/notesController.js';

const router = express.Router();

router.route('/search').get(searchNotes);
router.route('/:id').get(getSingleNotes);

// These routes must be protected from non logged in users
router.post('/upload', uploadNotesFile, uploadNotes);

export default router;
