const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  spot_id: {
    type: String,
    required: true
  },
  guest_count: {
    type: Number,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = Booking = mongoose.model('Booking', BookingSchema);