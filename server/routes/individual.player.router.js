const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated, rejectUser} = require('../modules/authentication-middleware');

// GET/:id
router.get('/:id', rejectUnauthenticated, (req, res) => {
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

// PUT/:id
router.put('/:id', rejectUnauthenticated, rejectUser, (req, res) => {
  
  let age = Number(req.body.age);
  let number = Number(req.body.number);
  let weight = Number(req.body.weight);

  let queryString = `UPDATE "players" SET "name" = COALESCE($1, "name"), "age" = COALESCE($2, "age"), "number" = COALESCE($3, "number"), 
                    "position" = COALESCE($4, "position"), "height" = COALESCE($5, "height"), "weight" = COALESCE($6, "weight"), "team_id" = $7 
                    WHERE "id" = $8;`;
  pool.query(queryString, [req.body.name, age, number, req.body.position,
                          req.body.height, weight, req.user.team_id, req.params.id])
    .then(result => {
      res.sendStatus(200);
    }).catch(err => {
      console.error('/player PUT failed', err);
      res.sendStatus(500);
    });
});

module.exports = router;