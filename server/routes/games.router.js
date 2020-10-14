const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  let queryString = `SELECT * FROM "games";`;
  pool.query(queryString)
    .then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.error('/games GET failed', err);
        res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;