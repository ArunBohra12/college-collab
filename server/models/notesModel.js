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
  tags: [String],
  previewPdf: {
    type: String,
  },
  notes: {
    type: String,
    required: true,
    select: false,
  },
  filename: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Notes = mongoose.model('Notes', notesSchema);

export default Notes;
