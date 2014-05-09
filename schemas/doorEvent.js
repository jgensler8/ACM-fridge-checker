var mongoose = require('mongoose');

exports.doorEvent = mongoose.model('doorEvent', new mongoose.Schema({
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  }
}));
