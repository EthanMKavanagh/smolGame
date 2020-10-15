const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET
router.get('/', (req, res) => {
  let queryString = `SELECT * FROM "players" WHERE "team_id" = $1;`;
  pool.query(queryString, [req.user.team_id])
    .then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.error('/players GET failed', err);
        res.sendStatus(500);
    });
});

// POST
router.post('/', (req, res) => {
  let queryString = `INSERT INTO "players" ("name", "age", "number", "position", "height", "weight", "team_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7);`;
  pool.query(queryString, [req.body.name, req.body.age, req.body.number, req.body.position, req.body.height, req.body.weight, req.user.team_id])
    .then(result => {
      res.send(result.rows)
    }).catch(err => {
      console.error('./players POST failed', err);
      res.sendStatus(500);
    });
});

module.exports = router;