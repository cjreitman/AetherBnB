var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SchemaTypes = mongoose.Schema.Types;

var ImageSchema = new Schema({
  spot: {
    type: SchemaTypes.ObjectId,
    ref: 'Spot'
  },
  img_url: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = Image = mongoose.model('Image', ImageSchema);