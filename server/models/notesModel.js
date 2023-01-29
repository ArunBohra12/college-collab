import mongoose from 'mongoose';

const notesSchema = new mongoose.Schema({
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  price: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    required: [true, 'Please provide a title for your notes'],
  },
  summary: {
    type: String,
    default: '',
  },
  previewPdf: {
    type: String,
  },
  notes: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Notes = mongoose.model('Notes', notesSchema);

export default Notes;
