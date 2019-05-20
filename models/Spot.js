const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;

const SpotSchema = new Schema({
  host_id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  images: [{ 
    type: SchemaTypes.ObjectId, 
    ref: 'Image',
    default: []
  }],
  description: {
    type: String,
    required: true
  },
  lng: {
    type: SchemaTypes.Double,
    required: true
  },
  lat: {
    type: SchemaTypes.Double,
    required: true
  },
  street_address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  price: {
    type: SchemaTypes.Double,
    required: true
  },
  occupancy: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = Spot = mongoose.model('Spot', SpotSchema);