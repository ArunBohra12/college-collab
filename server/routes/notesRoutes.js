import express from 'express';
import { uploadNotes, uploadNotesFile } from '../controllers/notesController.js';

const router = express.Router();

router.post('/upload', uploadNotesFile, uploadNotes);

export default router;
