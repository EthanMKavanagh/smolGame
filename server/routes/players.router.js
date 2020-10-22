const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated, rejectUser} = require('../modules/authentication-middleware');

// GET
router.get('/', rejectUnauthenticated, (req, res) => {
  let queryString = `SELECT * FROM "players" WHERE "team_id" = $1 ORDER BY "id" ASC;`;
  pool.query(queryString, [req.user.team_id])
    .then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.error('/players GET failed', err);
        res.sendStatus(500);
    });
});

// POST
router.post('/', rejectUnauthenticated, rejectUser, (req, res) => {
  let queryString = `INSERT INTO "players" ("name", "age", "number", "position", "height", "weight", "team_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7);`;
  pool.query(queryString, [req.body.name, req.body.age, req.body.number, req.body.position, req.body.height, req.body.weight, req.user.team_id])
    .then(result => {
      res.send(201)
    }).catch(err => {
      console.error('/players POST failed', err);
      res.sendStatus(500);
    });
});

// DELETE/:id
router.delete('/:id', rejectUnauthenticated, rejectUser, (req, res) => {
  let queryString = 'DELETE FROM "players" WHERE "id" = $1;';
  pool.query(queryString, [req.params.id])
    .then(result => {
      res.sendStatus(200);
    }).catch(err => {
      console.error('/players DELETE/:id failed', err);
      res.sendStatus(500);
    });
});

module.exports = router;