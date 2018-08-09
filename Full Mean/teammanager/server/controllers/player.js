const path = require('path');
const Player = require('../models/player');

module.exports = {

  index: (req, res, next) => {
    res.sendFile(path.resolve(__dirname, './dist/public/index.html'));
  },

  addPlayer: (req, res, next) => {
    Player.create(req.body).then(player => { res.json(player) });
  },

  deletePlayer: (req, res, next) => {
    Player.deleteOne({ _id: req.params.id }).then(player => res.json(player));
  },

  getPlayer: (req, res, next) => {
    Player.find({}).then(players => res.json(players))
  },

  updateStatus: (req, res, next) => {
    const update = req.body.player;
    update.games[req.body.game].status = req.body.action;
    console.log(update);
    Player.findByIdAndUpdate(req.body.player._id, update).then(player => res.json(player));
  }

}
