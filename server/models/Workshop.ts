import mongoose from 'mongoose';

const workshopSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  availableSeats: { type: Number, required: true },
  totalSeats: { type: Number, required: true }
});

export const Workshop = mongoose.model('Workshop', workshopSchema); 