const router = require("express").Router();
const Transaction = require("./models/Workout");

router.get('/api/transaction', (req, res) => {
  Transaction.find({})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;