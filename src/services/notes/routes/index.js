import express from 'express';
import {
  createNote,
  getNotes,
  getNoteById,
  editNote,
  deleteNote,
} from '../controller/note-controller.js';
import validate from '../../../middlewares/validate.js';
import { notePayloadSchema } from '../../../services/notes/validator/schema.js';
import validateQuery from '../../../middlewares/validateQuery.js'
import { noteQuerySchema } from '../../../services/notes/validator/schema.js'
const router = express.Router();
router.post('/notes', validate(notePayloadSchema), createNote);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', validate(notePayloadSchema), editNote);
router.delete('/notes/:id', deleteNote);
router.get('/notes', validateQuery(noteQuerySchema), getNotes);

export default router;