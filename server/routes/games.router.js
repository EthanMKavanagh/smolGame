const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const {rejectUnauthenticated} = require('../modules/authentication-middleware');

// GET
router.get('/', (req, res) => {
  let queryString = `SELECT * FROM "games" WHERE "team_id" = $1 ORDER BY "id" ASC;`;
  pool.query(queryString, [req.user.team_id])
    .then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.error('/games GET failed', err);
        res.sendStatus(500);
    });
});

// POST
router.post('/', (req, res) => {
  let queryString = `INSERT INTO "games" ("name", "score", "touchdowns", "field_goals", "interceptions", "rushing_yards", "passing_yards", "receiving_yards", "isWin", "team_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
  pool.query(queryString, [req.body.name, req.body.score, req.body.touchdowns, req.body.field_goals, req.body.interceptions,
                          req.body.rushing_yards, req.body.passing_yards, req.body.receiving_yards, req.body.isWin, req.user.team_id])
    .then(result => {
      res.send(result.rows);
    }).catch(err => {
      console.error('/games POST failed', err);
      res.sendStatus(500);
    });
});

module.exports = router;