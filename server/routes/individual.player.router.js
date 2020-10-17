const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// GET/:id
router.get('/:id', (req, res) => {
    console.log('req.params GET/:id', req.params);
    let queryString = 'SELECT * FROM "players" WHERE "id" = $1;';
    pool.query(queryString, [req.params.id])
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.error('/individual/player GET/:id failed', err);
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