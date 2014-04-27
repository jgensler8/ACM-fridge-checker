var mongoose = require('mongoose');

exports.doorEvent = mongoose.model('doorEvent', new mongoose.Schema({
  timeOpen: {
    required: true,
    type: Date
  },
  timeClosed: {
    required: true,
    type: Date
  }
}));
