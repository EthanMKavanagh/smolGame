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
      res.send(201)
    }).catch(err => {
      console.error('/players POST failed', err);
      res.sendStatus(500);
    });
});

// DELETE/:id
router.delete('/:id', (req, res) => {
  let queryString = 'DELETE FROM "players" WHERE "id" = $1;';
  pool.query(queryString, [req.params.id])
    .then(result => {
      res.sendStatus(200);
    }).catch(err => {
      console.error('/players DELETE/:id failed', err);
      res.sendStatus(500);
    });
});

// PUT/:id
router.put('/:id', (req, res) => {

  let age = Number(req.body.age);
  let number = Number(req.body.number);
  let height = Number(req.body.height);
  let weight = Number(req.body.weight);

  let queryString = `UPDATE "players" SET "name" = $1, "age" = $2, "number" = $3, 
                    "position" = $4, "height" = $5, "weight" = $6, "team_id" = $7 WHERE "id" = $8;`;
  pool.query(queryString, [req.body.name, age, number, req.body.position,
                          height, weight, req.user.team_id, req.params.id])
    .then(result => {
      res.sendStatus(200);
    }).catch(err => {
      console.error('/player PUT failed', err);
      res.sendStatus(500);
    });
});

module.exports = router;