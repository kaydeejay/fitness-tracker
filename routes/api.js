const router = require("express").Router();
const path = require('path');
const Transaction = require("../models/Workout");

// ======== STATIC ROUTES ========

router.get('/stats', (req, res) => {
  res.sendFile((path.join(__dirname, '../public/stats.html')));
});

router.get('/exercise', (req, res) => {
  res.sendFile((path.join(__dirname, '../public/exercise.html')));
});

//======== API ROUTES ========

router.get('/api/transaction', (req, res) => {
  Transaction.find({})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/api/workouts/range', (req, res) => {
  Transaction.find({})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;