import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  workshopId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Workshop', 
    required: true 
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  participants: { type: Number, required: true },
  specialRequests: String,
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'cancelled'], 
    default: 'confirmed' 
  },
  createdAt: { type: Date, default: Date.now }
});

export const Reservation = mongoose.model('Reservation', reservationSchema); 