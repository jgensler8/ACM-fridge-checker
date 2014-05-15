var mongoose = require('mongoose');

exports.doorEvent = mongoose.model('doorEvent', new mongoose.Schema({
  startTime: {
    required: true,
    type: Date
  },
  endTime: {
    required: true,
    type: Date
  }
}));