const mongoose = require('mongoose');

const fighterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  picture: { type: String },
  fightRecord: { type: String },
  stats: {
    power: { type: Number },
    speed: { type: Number },
    striking: { type: Number },
    grappling: { type: Number },
  },
});

const Fighter = mongoose.model('Fighter', fighterSchema);

module.exports = Fighter;
