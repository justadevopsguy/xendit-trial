const mongoose = require('mongoose')
const monthSchema = mongoose.Schema({
  month: Number,
  year: Number
}, { collection: 'months' });
const Month = mongoose.model('Month', monthSchema);

module.exports = Month;